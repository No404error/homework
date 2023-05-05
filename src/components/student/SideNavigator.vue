<template>
  <div id="main" class="colContainer">
    <div id="iconList"
    class="colItem test" 
    :style=" {
        borderRadius: `var(${borderType})`,
        boxShadow: `var(${shadowType})`,
        }">
        <img src="simple.jpg" alt="" class="icon">
    </div>
    <div id="goback" class="colItem test mgt5"
    :style=" {
        borderRadius: `var(${borderType})`,
        boxShadow: `var(${shadowType})`,
        }">
        <el-link 
            type="default"
            :underline=false
            href="/"
            class="link"
            >
            <el-icon ><Grid /></el-icon>
            返回主页
        </el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//border's shadow and shape
const borderType=ref("--el-border-radius-base");
const shadowType=ref("--el-box-shadow-dark");

</script>

<style lang="less" scoped>

#main{
    width: 16vw;
    height: 98vh;
}

colContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.colItem {
    width: 16vw;
    height: 20vh;
    background-color: white;

    //border
    border: 1px solid var(--el-border-color);
    border-radius: 0;
    
    .icon{
        width: 8vw;
        margin:2vh 4vw;
    }
    .link{
        width: 8vw;
        margin: 8vh 4vw;
    }
}

.mg5{
    margin: 5px;
}
.mgr5{
    margin-right: 5px;
}

.mgt5{
    margin-top: 5px;
}

// .test{
//     border: 1px solid red;
// }
</style>
