<template>
    <div>

        <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="task"
                    label="Task"
                    width="auto">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="Tag"
                    width="300"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.tag === '家' ? 'primary' : 'success'"
                            disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    prop="done"
                    label="Done"
                    width="70">
                <template slot-scope="scope">
                    <el-switch
                            v-model="scope.row.done"
                            active-color="#13ce66"
                            disabled>
                    </el-switch>
                </template>
            </el-table-column>
        </el-table>

        <br/>
        <br/>

        <b-progress :value="value" :max="max" show-progress animated></b-progress>
        <b-progress class="mt-2" :max="max" show-value>
            <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
            <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
            <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
        </b-progress>

        <b-button class="mt-3" @click="randomValue">Click me</b-button>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        data() {
            return {
                value: 45,
                max: 100,
                tableData: [{
                    task: 'Task 1',
                    tag: '公司',
                    done: true
                }, {
                    task: 'Task 2',
                    tag: '家',
                    done: false
                }, {
                    task: 'Task 3',
                    tag: '公司',
                    done: false
                }, {
                    task: 'Task 4',
                    tag: '家',
                    done: false
                }, {
                    task: 'Task 5',
                    tag: '公司',
                    done: true
                }, {
                    task: 'Task 6',
                    tag: '公司',
                    done: false
                }]
            }
        },
        methods: {
            randomValue() {
                this.value = Math.random() * this.max
            },
            filterTag(value, row) {
                return row.tag === value;
            }
        }
    }
</script>

<style scoped>

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

</style>