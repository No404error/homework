import { defineStore } from 'pinia'

const userInfoStr="user";

//清空local user info
function clearUserInfo():void {
    localStorage.setItem(userInfoStr,"");
}

//设置user info
function setUserInfo(userInfo:UserInfo):void{
    localStorage.setItem(userInfoStr,JSON.stringify(userInfo));
}


//读取 user info
function getUserInfo():UserInfo{
    return JSON.parse(localStorage.getItem(userInfoStr));
}


export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: getUserInfo() as UserInfo,
  }),
  getters: {
    userAuthor: (state)=>{
      const user=state.userInfo;
      return user?user.author:null;
    }
  },
  actions: {
      //用户登出
      userLogOut():void{
        this.userInfo=null;
        clearUserInfo();
      },
      //用户登入
      userLogin(newUserInfo:UserInfo):void{
        this.userInfo=newUserInfo;
        setUserInfo(this.userInfo);
      }
    // // 异步更新 message
    // async updateMessage(newMessage: string): Promise<string> {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       // 这里的 this 是当前的 Store 实例
    //       this.message = newMessage
    //       resolve('Async done.')
    //     }, 3000)
    //   })
    // },
    // // 同步更新 message
    // updateMessageSync(newMessage: string): string {
    //   // 这里的 this 是当前的 Store 实例
    //   this.message = newMessage
    //   return 'Sync done.'
    // },
  },
})
