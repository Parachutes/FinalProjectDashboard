<template>
    <div>
        <h6>Last Updated: 12/June/2020</h6>
        <el-table
                :data="tableData"
                :default-sort="{prop: 'done', order: 'descending'}"
                :row-class-name="paintRows"
                style="width: 100%">
            <el-table-column
                    label="Task"
                    prop="task"
                    sortable
                    width="auto">
            </el-table-column>
            <el-table-column
                    :filter-method="filterTag"
                    :filters="[{ text: 'Product', value: 'Product' }, { text: 'FrontEnd', value: 'FrontEnd' }, { text: 'BackEnd', value: 'BackEnd' }]"
                    filter-placement="bottom-end"
                    label="Tag"
                    prop="tag"
                    width="300">
                <template slot-scope="scope">
                    <el-tag
                            :type="tagDict[scope.row.tag]"
                            disable-transitions
                            effect="dark">{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    label="Done"
                    prop="done"
                    sortable
                    width="100">
                <template slot-scope="scope">
                    <b-form-checkbox disabled size="lg" v-model="scope.row.done"></b-form-checkbox>
                </template>
            </el-table-column>
        </el-table>

        <br/>
        <br/>

        <h5>Product</h5>
        <b-progress :max="getMax('Product')" :value="getValue('Product')" animated show-value striped
                    variant="primary"></b-progress>
        <br/>
        <h5>Front End</h5>
        <b-progress :max="getMax('FrontEnd')" :value="getValue('FrontEnd')" animated show-value striped
                    variant="success"></b-progress>
        <br/>
        <h5>Back End</h5>
        <b-progress :max="getMax('BackEnd')" :value="getValue('BackEnd')" animated show-value striped
                    variant="secondary"></b-progress>
        <br/>
        <h5>Total</h5>
        <b-progress :max="tableData.length">
            <b-progress-bar :value="getValue('Product')" animated show-value striped variant="primary"></b-progress-bar>
            <b-progress-bar :value="getValue('FrontEnd')" animated show-value striped
                            variant="success"></b-progress-bar>
            <b-progress-bar :value="getValue('BackEnd')" animated show-value striped
                            variant="secondary"></b-progress-bar>
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
                    task: 'Login page design',
                    tag: 'Product',
                    done: true
                }, {
                    task: 'Booking page design',
                    tag: 'Product',
                    done: false
                }, {
                    task: 'Timetable page design',
                    tag: 'Product',
                    done: false
                }, {
                    task: 'Main(reminder) page design',
                    tag: 'Product',
                    done: true
                }, {
                    task: 'Grade page design',
                    tag: 'Product',
                    done: true
                }, {
                    task: 'Setting page design',
                    tag: 'Product',
                    done: false
                }, {
                    task: 'Login page construction',
                    tag: 'FrontEnd',
                    done: true
                }, {
                    task: 'Booking page construction',
                    tag: 'FrontEnd',
                    done: false
                }, {
                    task: 'Timetable page construction',
                    tag: 'FrontEnd',
                    done: false
                }, {
                    task: 'Main(reminder) page construction',
                    tag: 'FrontEnd',
                    done: false
                }, {
                    task: 'Grade page construction',
                    tag: 'FrontEnd',
                    done: false
                }, {
                    task: 'Setting page construction',
                    tag: 'FrontEnd',
                    done: false
                }, {
                    task: 'Login page APIs',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Booking page APIs',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Timetable page APIs',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Main(reminder) page APIs',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Grade page APIs',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Setting page APIs',
                    tag: 'BackEnd',
                    done: false
                }, {
                    task: 'Website development',
                    tag: 'FrontEnd',
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

