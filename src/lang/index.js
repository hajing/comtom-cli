import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";

//iview组件多语言文件
import enIviewui from "view-design/dist/locale/en-US";
import zhIviewui from "view-design/dist/locale/zh-CN";

//本地自定义多语言文件
import enLocale from "./en";
import zhLocale from "./zh";

Vue.use(VueI18n);

const messages = {
  en: Object.assign(enLocale, enIviewui),
  zh: Object.assign(zhLocale, zhIviewui),
};

let locale = Cookies.get("language") ? Cookies.get("language") : "zh";

export default new VueI18n({
  locale, // set locale
  messages, // set locale messages
});

//README，切换语言环境请使用：this.$i18n.locale = "en";
