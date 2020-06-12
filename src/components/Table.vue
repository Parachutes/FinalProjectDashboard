<template>
    <div>
        <b-table striped hover :items="items" :fields="fields" :sort-by.sync="sortBy"></b-table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                sortBy: 'UID',
                fields: [
                    { key: 'UID', sortable: true },
                    { key: 'Name', sortable: true },
                    { key: 'Responsibilities', sortable: false }
                ],
                items: [
                    { UID: 3035656183, Name: 'Jin Zixiang', Responsibilities: 'Back End, Team Leader' },
                    { UID: 3035658167, Name: 'Hou Zhaohui', Responsibilities: 'Front End' },
                    { UID: 3035721770 , Name: 'Ma Shichao', Responsibilities: 'Front End, Web Development' },
                    { UID: 3035669037, Name: 'Yue Youjun', Responsibilities: 'Product Managing' },
                    { UID: 3035672371, Name: 'Zhou Yuzhe', Responsibilities: 'Back End' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>