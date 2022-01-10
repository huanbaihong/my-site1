<template>
  <ul class="contact-container">
    <li>
      <a class="github" href = "">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>Duyi-Edu</span>
      </a>
    </li>
    <li>
      <a class="email" href = "mailto:12345678@qq.com">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>11111111@qq.com</span>
      </a>
    </li>
    <li>
      <a class="qq" href="tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>11111111</span>
      </a>
      <div class="pop">
        <img
          src="https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Avata.png"
          alt=""
        />
      </div>
    </li>
    <li>
      <a class="weixin">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>abababababab</span>
      </a>
      <div class="pop">
        <img
          src="https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Avata.png"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
.contact-container {
  margin: 0;
  padding: 20px;
  color: @gray;
  list-style: none;
  li {
    position: relative;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    &:hover {
      color: #fff;
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    color: inherit;
    display: flex;
    align-items: center;
   font-size: 14px;
  }
  .icon {
    font-size: 24px;
    width: 36px;
  }
  .pop {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 170px;
    height: 170px;
    background-color: #fff;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      background-color: #fff;
      position: absolute;
      bottom: -5px;
      left: 75px;
      transform: rotate(45deg);
    }
    img {
      width: 150px;
      height: 150px;
      object-position: center;
    }
  }
}
</style>