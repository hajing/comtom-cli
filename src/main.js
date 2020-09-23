import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*
引入常用工具类库
1. UI组件库：iview；
2. 用于处理对象、数组、数学运算的工具：lodash；
3. 用于处理时间格式、时间运算等的工具：dayjs；
4. 自适应转换工具：postcss-px-to-viewport；
5. 数据图标库：echarts。
*/
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import lodash from "lodash";
import dayjs from "dayjs";
import echarts from "echarts";

/*
引入常用工具类库结束
*/

Vue.use(ViewUI);
Vue.prototype.$lodash = lodash;
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
