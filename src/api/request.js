import axios from "axios";
import showMessage from "../utils/showMessage.js";

const instant = axios.create();

instant.interceptors.response.use(function(resp){
    if(resp.data.code !== 0){
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1500,
        });
        return null;
    }
    return resp.data.data;
});
export default instant;