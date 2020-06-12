<template>
  <div>

    <NavBar/>

    <Carousel id="carousel"/>

    <br/>
    <b-container id="cards">
      <el-divider><i class="el-icon-setting"></i>  functions</el-divider>
      <br/>
      <b-row>
        <b-col v-for="card in cardsInfo" :key="card.url">
          <Card :img-url="card.url" :function-info="card.info"/>
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
        {url:'function1', info:"View personal class timetable of different time dimensions."},
        {url:'function2', info:"View grades clearly and instantly with the help of user-friendly layout and prompt."},
        {url:'function3', info:"Grasp course information in real time and won’t miss every moment."},
        {url:'function4', info:"Provide more convenient campus services by integrating different booking websites."},
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
