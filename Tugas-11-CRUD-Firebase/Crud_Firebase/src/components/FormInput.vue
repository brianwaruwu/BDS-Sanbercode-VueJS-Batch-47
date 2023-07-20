<template>
    <form @submit.prevent="$emit('handleSubmit')">
          <div class="form-group">
            <label>Title</label>
            <input v-model="todo.title" type="text" class="form-control" id="inputTitle" aria-describedby="title">
          </div>
          <div class="form-group">
            <label>Content</label>
            <textarea v-model="todo.content" class="form-control" rows="5" id="inputContent"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mr-3" :class="update ? 'btn-warning' : 'btn-primary'">
            {{ update ? "Update" : "Add" }}
          </button>
          <button v-if="update" @click="$emit('clearInput')" type="button" class="btn btn-danger">
            Cancel
          </button>
        </form>
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