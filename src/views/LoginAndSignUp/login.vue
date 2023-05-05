<style lang="scss" scoped>
</style>
<template>
  <div class="container" ref="container">
       <!-- login -->
       <div class="form-container sign-in-container">
           <div class="form">
               <h2>sign in</h2>
               <input type="email" name="email" v-model="account" placeholder="Email...">
               <input type="password" name="password" v-model="password" placeholder="Password...">
               <a href="#" class="forget-password">forget your password</a>
               <button class="signIn" @click="signIn">sign in</button>
           </div>
       </div>
   </div>
</template>

<script setup lang="ts">
import { setToken } from "@/stores/token/token";
import { ElMessage } from "element-plus";
import { getCurrentInstance, reactive, toRefs } from "vue";
import { useUserStore } from "@/stores/user/user";
import router from "@/router";
//import { login } from "../api/login.js";

const user = useUserStore();

const { proxy }: any = getCurrentInstance();

const logindata:LoginData = reactive({
   account: "",
   password: "",
});

//请求token,storage token
const requireToken= async () => {
   let token=null as string;
   token= await proxy.$api.login(logindata);
   setToken(token);
}; 

const requireUserInfo=async()=>{
   let userInfo=null as UserInfo;
   userInfo=await proxy.$api.userInfo();
   user.userLogin(userInfo);

}
const signInProcess=async ()=>{
   try{
      await requireToken();
      await requireUserInfo();
      router.push({
         name:"home",
      })
   }catch(e){
   }
}

function signIn(){
   if(!logindata.account)
      ElMessage("还没有填写email哦!");
   else if(!logindata.password)
      ElMessage("还没有填写密码哦!");
   else{
      signInProcess();
   }
}

//ToRefs 将data转化为ref引用
const { account,password } = toRefs(logindata);

</script>

<style scoped>
* { 
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   background-color: #f6f5f7;
}

h2 {
   margin-bottom: 10px;
   font-size: 32px;
   text-transform: capitalize;
}

.container {
   position: relative;
   width: 99vw;
   height: 97vh;
   background-color: white;
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2);
   border-radius: 10px;
   overflow: hidden;
}

.form-container {
   position: absolute;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: white;
   transition: all 0.6s ease-in-out;
}

.form {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   padding: 0 50px;
}

input {
   width: 60%;
   margin: 15px 0;
   padding: 12px;
   background-color: #eee;
   border: none;
}

.forget-password {
   display: inline-block;
   height: 20px;
   text-decoration: none;
   color: #bbb;
   text-transform: capitalize;
   font-size: 12px;
}

.forget-password:hover {
   color: lightslategray;
   border-bottom: 2px solid #ff4b2b;
}

button {
   background: #ff4b2b;
   padding: 10px 50px;
   border: 1px solid transparent;
   border-radius: 20px;
   text-transform: uppercase;
   color: white;
   margin-top: 10px;
   outline: none;
   transition: transform 80;
}

button:active {
   transform: scale(0.90);
}
</style>
