<template>
<v-card
    prepend-icon="mdi-home">
  <template v-slot:title>
    v-form Input
    </template>
  <v-card-text>
    <v-form @submit.prevent="$emit('handleSubmit')">
         <v-text-field type="text" label="Title" v-model="todo.title">
         </v-text-field>
         <v-text-field type="text" label="Image" v-model="todo.image">
         </v-text-field>  
            <v-textarea v-model="todo.content" class="v-form-control" label="Content"></v-textarea>
          <v-btn type="submit" block class="mt-2" :color="update ? 'blue' : 'info'">
            {{ update ? "Update" : "Add" }}
          </v-btn>
          <v-btn type="submit" block class="mt-2" v-if="update" @click="$emit('clearInput')" color="red">
            Cancel
          </v-btn>
        </v-form>
  </v-card-text>
</v-card>


  
</template>

<script setup>
const props = defineProps({
    todo:{
        type: Object,
    },
    update:{
        type:Boolean,
    }
});
</script>


