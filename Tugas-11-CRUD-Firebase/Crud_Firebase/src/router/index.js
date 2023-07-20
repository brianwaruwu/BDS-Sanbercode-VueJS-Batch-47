import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView

        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        },

        {
            path: '/post',
            name: 'post',
            component: PostView,
            meta: { requiredAuth: true },

        },
    ]
})


router.beforeEach((to, from) => {
    let user = {
        login: true,
        role: 'admin'
    }
    if (to.meta.requiredAuth) {
        if (!user.login || user.role != 'admin')
            console.log(user);
        alert("hanya bisa diakses oleh admint")
        return {
            path: '/'
        }
    }
})
export default router