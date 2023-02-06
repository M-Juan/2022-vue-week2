import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const url = 'https://vue3-course-api.hexschool.io/v2'; 
const path = 'mjweek2';

const app={
  //資料
    data() {
      return {
        products: [],

        //單一產品資訊
        tempProduct:{}
      }
    },

    //方法
    methods:{
      checkLogin(){
        axios.post(`${url}/api/user/check`)
        .then((res)=>{
          this.getProducts();
        })
        .catch((err)=>{
          alert("資料有誤，請重新登入");
          window.location="./index.html";
        })
      },
      getProducts(){
        axios.get(`${url}/api/${path}/admin/products`)
        .then((res)=>{
          this.products=res.data.products;
        })
        .catch((err)=>{
          console.log(err.data);
        })
      }

    },

    mounted(){
      //取出存在cookie的token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)mjweek2\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      //發出請求headers預設帶入token
      axios.defaults.headers.common['Authorization'] = token;
      this.checkLogin();
    }
  };

createApp(app).mount('#app');

