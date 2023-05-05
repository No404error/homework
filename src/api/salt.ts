import { Md5 } from 'ts-md5/src/index';

const salt="FaOiKrb7+1xk21q2VwZyj13GPUsCxQhRW7dNid"

function getMixedSaltStr(str:string):string{
    return Md5.hashAsciiStr(str+salt);
}

const sss=getMixedSaltStr("ssss");

export default getMixedSaltStr