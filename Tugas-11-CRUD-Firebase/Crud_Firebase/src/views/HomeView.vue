
<template>
  <div v-if="!todo.data.length">
<div class="container my-auto mx-auto">
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading....</span>
</div>
</div>
  </div>
  <main v-else class="container">
    <div class="row">
      <div class="col">
        <TableInput :data="todo.data" @update="updateData" @delete="deleteData"></TableInput>
      </div>
      <div class="col">
        <FormInput :todo="todo" :update="update" @handleSubmit="handleSubmit" @clearInput="clearInput"></FormInput>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import { db, timestamp } from "../config/firebaseconfig";
import { addDoc, collection, onSnapshot, orderBy, query, updateDoc, doc, deleteDoc } from "firebase/firestore";
import TableInput from "../components/Table.vue";
import FormInput from "../components/FormInput.vue";
let todo = reactive({
  title: "",
  content: "",
  id: "",
  data: [],
});


const update = ref(false);

const clearInput = async () => {
  todo.title = "";
  todo.content = "";
  todo.id = "";
  update.value = false;
};

const updateData = async (items) => {
  update.value = true;
  todo.title = items.title;
  todo.content = items.content;
  todo.id = items.id;
  console.log(items);
};

const deleteData = async (item) => {
  clearInput();
  await deleteDoc(doc(db, "todos", item));
  alert("Delete Success");
};

const readData = async () => {
  const filterCollection = query(collection(db, "todos"), orderBy('createAt', 'asc')
  );
  onSnapshot(filterCollection, (QuerySnapshot) => {
    const todos = [];
    QuerySnapshot.forEach((doc) => {
      let todo = {
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
      };
      todos.push(todo);
    });
    todo.data = todos;
  });
}
const handleSubmit = async () => {
  if (update.value) {
    const id = todo.id;
    await updateDoc(doc(db, "todos", id), {
      title: todo.title,
      content: todo.content,
      updateAt: timestamp,
    });
    alert("Update Success");
  }
  else {
    await addDoc(collection(db, "todos"), {
      title: todo.title,
      content: todo.content,
      createAt: timestamp,
      updatedAt: timestamp,

    });
    alert("Add Data Success")
  }
  clearInput();

};

onMounted(() => {
  readData();
});
</script>
