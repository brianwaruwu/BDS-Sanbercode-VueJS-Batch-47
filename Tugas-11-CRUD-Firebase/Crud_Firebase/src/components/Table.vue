<template>
    <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in data">
              <td>{{ item.title }}</td>
              <td>{{ item.content }}</td>
              <td>
                <button type="submit" @click="$emit('update', item)" class="btn btn-primary btn-sm mr-3">Edit</button>
                <button type="submit" @click="$emit('delete', item.id)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>

        </table>
</template>

<script setup>
const props = defineProps({
    data:{
        type: Array,
    }
});
</script>