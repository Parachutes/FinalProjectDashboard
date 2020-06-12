<template>
    <b-navbar fixed="top" sticky=true toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">
            <el-row type="flex">
                <img class="hkuIcon" src="../assets/logoHKU.png">
                <h3>HKU Helper</h3>
            </el-row>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#cards">Functions</b-nav-item>
                <b-nav-item href="#members">Members</b-nav-item>
                <b-nav-item href="#progress">Progress</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .hkuIcon {
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }

</style>