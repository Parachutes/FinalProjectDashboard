<template>
  <div>

    <NavBar/>

    <Carousel id="carousel"/>

    <br/>
    <b-container id="cards">
      <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
      <b-row>
        <b-col>
          <Card/>
        </b-col>
        <b-col>
          <Card/>
        </b-col>
        <b-col>
          <Card/>
        </b-col>
        <b-col>
          <Card/>
        </b-col>
      </b-row>
    </b-container>

    <br/>
    <b-container id="members">
      <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
      <Table/>
    </b-container>

    <br/>
    <b-container id="progress">
      <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
      <Progress/>
    </b-container>

    <br/>

    <b-container>
      <el-divider>end</el-divider>
    </b-container>
    <br/>

  </div>
<!--  <div id="app">-->
<!--  </div>-->
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
