<template>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                items: [
                    { uid: 12345, name: 'Dickerson', responsibilities: 'Font-end' },
                    { uid: 23456, name: 'Larsen', responsibilities: 'Back-end' },
                    { uid: 34567, name: 'Geneva', responsibilities: 'Design' },
                    { uid: 45678, name: 'Jami', responsibilities: 'Managing' },
                    { uid: 56789, name: 'Scarlett', responsibilities: '' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>