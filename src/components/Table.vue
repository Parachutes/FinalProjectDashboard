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
                    { UID: 3035656183, Name: 'Jin Zixiang', Responsibilities: 'Back end, Managing' },
                    { UID: 3035658167, Name: 'Hou Zhaohui', Responsibilities: 'Back end, Front end' },
                    { UID: 3035721770 , Name: 'Ma Shichao', Responsibilities: 'Front end, Web Maintenance' },
                    { UID: 3035669037, Name: 'Yue Youjun', Responsibilities: 'Design, Document' },
                    { UID: 3035672371, Name: 'Zhou Yuzhe', Responsibilities: 'Document, Back end' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>