<template>
    <div>

        <vue-headful
                title="HKU Helper"
        />

        <NavBar/>

        <Carousel id="carousel"/>

        <br/>
        <b-container id="cards">
            <el-divider><i class="el-icon-setting"></i> functions</el-divider>
            <br/>
            <b-row>
                <b-col :key="card.url" v-for="card in cardsInfo">
                    <Card :function-info="card.info" :img-url="card.url"/>
                </b-col>
            </b-row>

        </b-container>

        <br/>
        <b-container id="members">
            <el-divider><i class="el-icon-user"></i> members</el-divider>
            <br/>
            <Table/>
        </b-container>

        <br/>
        <b-container id="progress">
            <el-divider><i class="el-icon-document-checked"></i> progress</el-divider>
            <br/>
            <Progress/>
        </b-container>

        <br/>

        <b-container>
            <el-divider>Copyright © 2020 <i class="el-icon-sugar"></i> All rights reserved.</el-divider>
        </b-container>
        <br/>

    </div>

</template>

<script>
  import NavBar from "@/components/NavBar";
  import Carousel from "@/components/Carousel";
  import Table from "@/components/Table";
  import Progress from "@/components/Progress";
  import Card from "@/components/Card";

  export default {
        title: 'HKU',
        name: 'App',
        components: {
            Card,
            Progress,
            Table,
            Carousel,
            NavBar
        },
        data() {
            return {
                cardsInfo: [
                    {url: 'function1', info: "View personal class timetable of different time dimensions."},
                    {url: 'function2', info: "Grasp course information in real time and you won’t miss any lecture."},
                    {
                        url: 'function3',
                        info: "Check grades clearly and instantly with the help of user-friendly layout and prompt."
                    },
                    {
                        url: 'function4',
                        info: "Provide a better facilities booking system by integrating different booking websites."
                    },
                ]
            };
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
