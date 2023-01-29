
import{createApp} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js"

const url = 'https://vue3-course-api.hexschool.io/v2'; 
const path = 'mjweek2';

const app={
    //資料
    data(){
        return{
            user:{
                username:'',
                password:'',
            }
        }
    },
    //方法
    methods:{
        login(){
            console.log(this.user);
            axios.post(`${url}/admin/signin`,this.user)
            .then((res)=>{
                const {token,expired}=res.data;
                //取出token跟expired
                console.log(token,expired);

                //將token跟expired存到cookie
                document.cookie = `mjweek2=${token}; expires=${new Date(expired)};`;

                //轉址到第2周頁面
                window.location="./products.html"

            })
            .catch((err)=>{
                console.log(err.data);
            })

        }

    },
    mounted(){
        console.log("消波塊");
    }


};
createApp(app).mount("#app")

