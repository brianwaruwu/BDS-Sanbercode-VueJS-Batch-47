
<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer color="indigo" v-model="drawer" app>
      <v-list-item prepend-avatar="https://media.licdn.com/dms/image/D4E03AQHcTU7ziZnyFA/profile-displayphoto-shrink_200_200/0/1683432967740?e=1695859200&v=beta&t=vCyy35xg1cLGPUain8sZnXZRKRf-8JSJhrNxYqQNMXA" 
      :title="storeAuth.user.email ? storeAuth.user.email : 'belum login'"></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item 
        v-for="(item, index) in menus" 
        :prepend-icon="item.icon" 
        :title="item.title" 
        :key="`menus` + index"
        :to="item.route">
        </v-list-item>
        <v-list-item 
        v-if="storeAuth.user.id" 
        prepend-icon="mdi-login" 
        title="Post" 
        to="/post">
        </v-list-item>
        <v-list-item 
        v-if="!storeAuth.user.id" 
        prepend-icon="mdi-login" 
        title="Login/Register" 
        to="/auth">
        </v-list-item>
        <v-list-item 
        v-else
        prepend-icon="mdi-login" 
        title="Logout" 
        @click="HandleLogout">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-toolbar-title>My Store</v-toolbar-title>

    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">

      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useAuthStore } from './stores/authStore'

const storeAuth = useAuthStore();

const drawer = ref(true);

const menus = [
  { title: "Home", icon: "mdi-home-city", route: '/' },
  { title: "About", icon: "mdi-account", route: '/about' },

];


const HandleLogout = () => {
  storeAuth.LogoutUser();
};

onMounted(() => {
  storeAuth.init();
})
</script>

<style scoped></style>
