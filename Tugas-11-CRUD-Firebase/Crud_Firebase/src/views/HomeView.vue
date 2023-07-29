<template>

  <v-card v-for="(item, index) in post.todo.data" :key="index" class="mx-auto" max-width="344">
    <v-img :src="item.image" height="100px" width="800px"></v-img>
    <v-card-title>
      {{ item.title }}
    </v-card-title>
    <v-card-actions>
      <v-btn :icon="item.open ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="toggleCard(index)"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="item.open">
        <v-divider></v-divider>

        <v-card-text>
          {{ item.content }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useCounterStore } from "../stores/post"; // Ganti "../stores/post" dengan path yang sesuai
const post = useCounterStore();

const toggleCard = (index) => {
  post.todo.data[index].open = !post.todo.data[index].open;
};

onBeforeMount(() => {
  post.readData();
});
</script>
