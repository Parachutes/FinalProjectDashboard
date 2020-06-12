<template>
    <div>
        <h6>Last Updated: 12/June/2020</h6>
        <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="paintRows">
            <el-table-column
                    prop="task"
                    label="Task"
                    width="auto"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="Tag"
                    width="300"
                    :filters="[{ text: 'Product', value: 'Product' }, { text: 'FrontEnd', value: 'FrontEnd' }, { text: 'BackEnd', value: 'BackEnd' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="tagDict[scope.row.tag]"
                            disable-transitions
                            effect="dark">{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop="done"
                    label="Done"
                    width="100"
                    sortable>
                <template slot-scope="scope">
                    <b-form-checkbox size="lg" v-model="scope.row.done" disabled></b-form-checkbox>
                </template>
            </el-table-column>
        </el-table>

        <br/>
        <br/>

        <h5>Product</h5>
        <b-progress :value="getValue('Product')" :max="getMax('Product')" show-value variant="primary" striped animated></b-progress>
        <br/>
        <h5>Front End</h5>
        <b-progress :value="getValue('FrontEnd')" :max="getMax('FrontEnd')" show-value variant="success" striped animated></b-progress>
        <br/>
        <h5>Back End</h5>
        <b-progress :value="getValue('BackEnd')" :max="getMax('BackEnd')" show-value variant="secondary" striped animated></b-progress>
        <br/>
        <h5>Total</h5>
        <b-progress :max="tableData.length">
            <b-progress-bar variant="primary" :value="getValue('Product')" show-value striped animated></b-progress-bar>
            <b-progress-bar variant="success" :value="getValue('FrontEnd')" show-value striped animated></b-progress-bar>
            <b-progress-bar variant="secondary" :value="getValue('BackEnd')" show-value striped animated></b-progress-bar>
        </b-progress>


    </div>
</template>

<style>

    .el-table .success-row {
        background: #f0f9eb;
    }

</style>

<script>
    export default {
        name: "Progress",
        data() {
            return {
                value: 45,
                max: 100,
                tagDict: {
                    'Product': 'primary',
                    'FrontEnd': 'success',
                    'BackEnd': 'info'
                },
                tableData: [{
                    task: 'Task 1',
                    tag: 'Product',
                    done: true
                }, {
                    task: 'Task 2',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Task 3',
                    tag: 'FrontEnd',
                    done: false
                }, {
                    task: 'Task 4',
                    tag: 'Product',
                    done: false
                }, {
                    task: 'Task 5',
                    tag: 'FrontEnd',
                    done: true
                }, {
                    task: 'Task 6',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Task 7',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Task 8',
                    tag: 'BackEnd',
                    done: true
                }]
            }
        },
        methods: {
            paintRows({row}) {
                if (row.done === true) {
                    return 'success-row';
                }
                return '';
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            getValue(tag) {
                var result = 0
                for (var i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].tag === tag && this.tableData[i].done === true) {
                        result = result + 1;
                    }
                }
                return result
            },
            getMax(tag) {
                var result = 0
                for (var i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].tag === tag) {
                        result = result + 1;
                    }
                }
                return result
            }
        }
    }
</script>

