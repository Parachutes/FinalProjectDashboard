<template>
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="require('../assets/'+imgUrl+'.jpeg')" class="image" />
        <div style="padding: 14px;">
            <div class="bottom clearfix">
                <time class="time">{{ functionInfo }}</time>
            </div>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "Card",
        props: {
            imgUrl: String,
            functionInfo: String
        }
    }
</script>

<style scoped>

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>