import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中，如果不传，则显示到页面的种种  
 * @param {Function} callback 可选，消失后运行的回调函数
 */
export default function(options = {}){
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    //创建消息元素
    const  div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {type});
    
    div.innerHTML = `<span class = "${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;
    //容器的position是否改变过
    // if(getComputedStyle(container).position === "static"){
    //     container.style.position = "relative";
    // }
    //元素插入到页面上
    container.appendChild(div);
    div.clientHeight;

    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    //等一段时间消失
    setTimeout(()=>{
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener(
            "transitionend", 
            function(){
                div.remove();
                options.callback && options.callback();
            },
            {
                once: true
            }
        )
    }, duration)
}
