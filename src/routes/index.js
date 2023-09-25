import { createWebHistory, createRouter } from 'vue-router'
import List from '../components/board/List.vue'; //게시판 리스트 컴포넌트 호출
import Home from '../components/board/Home.vue'; //게시판 리스트 컴포넌트 호출

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path:'/',
            name:"Home",
            component: Home
        }
        ,{
            path:'/board/list',
            name : "list",
            component:List
        }
    ]
})

export default router;