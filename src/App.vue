<template>
  <router-view :key="key" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { isMobile, watchResize } from "@bassist/utils";
import { reactive,watch,ref,Ref } from "vue";
const route = useRoute();
const key = computed(() => `${String(route.name || route.path)}-${new Date()}`);

watchResize(() => {
  document.body.className = `platform-${isMobile() ? "mobile" : "desktop"}`;
});

//     const sums:Ref<number[]>=ref([]);

//     const sumValue=computed(()=>{
//       let sum=0;
//       sums.value.forEach(element => {
//         sum+=element;
//       });
//       return sum;
//       })

//       setTimeout(()=>{
//         sums.value=[1,2,2,5];
//       },2000)


//        // 这个是最终要用到的数组
//     const tags = ref<string[]>([])

// // 因为input必须绑定一个字符串
// const tagsStr = computed({
//   // 所以通过getter来转成字符串
//   get() {
//     return tags.value.join(',')
//   },
//   // 然后在用户输入的时候，切割字符串转换回数组
//   set(newValue: string) {
//     tags.value = newValue.split(',')
//     console.log(tags);
//   },
// })
</script>
