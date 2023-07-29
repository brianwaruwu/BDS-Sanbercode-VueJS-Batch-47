
   <template>
    <div v-if="!post.todo.data.length">
      <div class="container my-auto mx-auto">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading....</span>
        </div>
      </div>
    </div>
    <main class="container">
      <v-row>
        <v-col cols="12">
          <TableInput :data="post.todo.data" @update="post.updateData" @delete="post.deleteData"></TableInput>
        </v-col >
        <v-col cols="12">
          <FormInput :todo="post.todo" :update="post.update" @handleSubmit="post.handleSubmit" @clearInput="post.clearInput"></FormInput>
        </v-col >
      </v-row>
    </main>
  </template>
  
  <script setup>
  import { onBeforeMount } from 'vue';
  import { useCounterStore } from "../stores/post"; // Ganti "../stores/post" dengan path yang sesuai
  import TableInput from "../components/Table.vue";
  import FormInput from "../components/FormInput.vue";
  
  const post = useCounterStore();
  
  onBeforeMount(() => {
    post.readData();
  });
  </script>
  
  