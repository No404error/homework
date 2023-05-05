import request from "@/request";
import services from "@/services";

let api = {
    userInfo:() => {
        return request.post(services.infoUrl);
    }
};

export default api;