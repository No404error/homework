<template>
  <div class="common-layout home rowContainer">
    <el-container>
      <el-aside class="mgt5 mg5" width="16.2vw">
        <SideNavigator ></SideNavigator>
      </el-aside>
      <el-main class="homeWorkList white mg5"
      :style=" {
        borderRadius: `var(${borderType})`,
        boxShadow: `var(${shadowType})`,
        }">

        <el-table class="homeWorkTable"
        :data="tableData"
        fit="true"
        empty-text="目前还没有作业记录哦..."
        style="width: 100%"
        :row-class-name="tableRowClassName"
        >
            <el-table-column prop="workName" label="作业"/>
            <el-table-column prop="courseName" label="课程"/>
            <el-table-column prop="deadLine" label="截止时间"/>
            <el-table-column prop="state" label="状态"/>
        </el-table>
        <div class="homeWorkPagination" >
            <el-pagination style="margin-left: 30%"
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="1000"
            />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideNavigator from '@/components/student/SideNavigator.vue';
import { useMessageStore } from '@/stores';
import { ref,reactive } from 'vue'
//border's shadow and shape
const borderType=ref("--el-border-radius-base");
const shadowType=ref("--el-box-shadow-dark");

//homeWork submit state
enum submitState{
  unSubmit,
  submitted,
}

//homeWork interface
interface HomeWork {
  courseName: string
  workName: string
  state: submitState
  deadLine:string
}

const tableData:HomeWork[]=reactive([
  {
    deadLine: '2016-05-02',
    courseName: '计算机图形学',
    state: submitState.unSubmit,
    workName:'绘制分型曲线'
  },
  {
    deadLine: '2016-05-04',
    courseName: '编译原理',
    state: submitState.submitted,
    workName:'词法分析'
  },
  {
    deadLine: '2016-05-01',
    courseName: '形势与政策',
    state:submitState.unSubmit,
    workName: '第一次作业',
  },
]);
const store=useMessageStore();

setTimeout(()=>{
  let a=tableData.push({
    deadLine: '2016-05-03',
    courseName: '数学',
    state: submitState.submitted,
    workName:'第一章作业'
  })
  console.log(store.message);
},2000);

//callBack func of table className 
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: HomeWork
  rowIndex: number
}) => {
  if (row.state === submitState.unSubmit) {
    return 'warning-row'
  } else if (row.state === submitState.submitted) {
    return 'success-row'
  }
  return ''
}

</script>

<style lang="less" scoped>
.home{
    box-sizing:border-box;
    background-color: #E6E8EB;
    .homeWorkList{
        flex: 1;

        border: 1px solid var(--el-border-color);
        border-radius: 0;

        //overflow: hidden;
        .homeWorkTable{
            height: 95%;
        }
    }
}
.white{
    background-color: #FFFFFF;
}

.rowContainer{
    display: flex;
    flex-direction: row;
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
</style>

<style lang="less">
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

.el-table .danger-row {
  --el-table-tr-bg-color: var(--el-color-danger-light-9);
}
</style>