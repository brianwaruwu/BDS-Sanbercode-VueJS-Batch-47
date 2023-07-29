import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import AuthView from '../views/AuthView.vue'
import { useAuthStore } from '../stores/authStore'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView

        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthView

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
            meta: { requiredAuth: "true" },

        },

    ]
})


router.beforeEach((to, from) => {
    const userStore = useAuthStore()

    if (to.meta.requiredAuth) {
        if (!userStore.user.email || !userStore.user.id) {
            console.log(user);
            alert("hanya bisa diakses bila sudah login ")
            return {
                path: '/'
            }
        }
    }
})
export default router