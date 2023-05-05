<template>
  <el-table
    :data="tableData"
    style="width: 100"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="workName" label="作业" width="150" />
    <el-table-column prop="courseName" label="课程" width="150" />
    <el-table-column prop="deadLine" label="截止时间" width="150"/>
    <el-table-column prop="state" label="状态" width="150"/>
  </el-table>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user/user.js';
const userStore=useUserStore();
// userStore.userLogin({
//   id:1,
//   userName:'taishen',
//   account:'taishen@qq.com',
//   password:'taishen123',
//   author:'student',
//   avatar:"123.jpg",
// })
console.log(userStore.userId);

interface HomeWork {
  courseName: string
  workName: string
  state: submitState
  deadLine:string
}

enum submitState{
  unSubmit,
  submitted,
}

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

const tableData: HomeWork[] = [
  {
    deadLine: '2016-05-03',
    courseName: '数学',
    state: submitState.submitted,
    workName:'第一章作业'
  },
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
]
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>