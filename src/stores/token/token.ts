const tokenStr="token";

//get token 
const getToken= ():string => localStorage.getItem(tokenStr);

const setToken= (token:string) => localStorage.setItem(tokenStr,token);

export {
    getToken,
    setToken,
}