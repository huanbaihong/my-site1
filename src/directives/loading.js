import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

function getLoadingImage(el){
    return el.querySelector("img[data-role = loading]");
}
function createLoadingImg(){
    const img = document.createElement("img");
    img.src =loadingUrl;
    img.className = styles.loading;
    img.dataset.role = "loading";
    return img;
}
export default function(el, binding){
    const curImg = getLoadingImage(el);
    if(binding.value){
        if(!curImg){
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}