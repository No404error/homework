import getMixedSaltStr from './salt'
import request from "../request/index";
import services from "../services/index";
let api = {
  login: (loginData:LoginData) => {
      return request.post(services.loginUrl, {
        account: loginData.account,
        password: getMixedSaltStr(loginData.password),
      });
    }
};
// let api = {
// login: (loginData:LoginData) => {
//     return request.get(services.loginUrl,{
//           params:{
//           account:loginData.account,
//           password:getMixedSaltStr(loginData.password),
//         }
//       });
//   },
// };
export default api;
