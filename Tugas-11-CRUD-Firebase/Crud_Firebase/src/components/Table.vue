<template>
  <v-table height="300px">
    <thead>
      <tr>
        <th class="text-center">
          Title
        </th>
        <th class="text-center">
          Content
        </th>
        <th class="text-center">
          Images
        </th>
        <th class="text-center">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="item in data"
        :key="item.name"
      >
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        
        <td> <img class="mx-auto mb-4" width="200" :src="item.image" alt="" /></td>
        
        <td>
                <v-btn type="submit" @click="$emit('update', item)" class=" mr-3" variant="tonal" color="blue">Edit</v-btn>
                <v-btn type="submit" @click="$emit('delete', item.id)" variant="tonal" color="red">Delete</v-btn>
              </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps({
    data:{
        type: Array,
    }
});
</script>



