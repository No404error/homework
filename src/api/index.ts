//api/index.ts
import login from './login'
import userInfo from './info'
let api = {
    ...login,
    ...userInfo,
};
  
  export default api;