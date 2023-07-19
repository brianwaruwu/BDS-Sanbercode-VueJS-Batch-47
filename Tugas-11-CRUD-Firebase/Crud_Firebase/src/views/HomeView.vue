
<template>
  <main class="container">
    <div class="row">
      <div class="col">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in todo.data">
              <td>{{ item.title }}</td>
              <td>{{ item.content }}</td>
              <td>
                <button type="submit" @click="updateData(item)" class="btn btn-primary btn-sm mr-3">Edit</button>
                <button type="submit" @click="deleteData(item.id)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <div class="col">
        <form @submit.prevent="handleSubmit">
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
          <button v-if="update" @click="clearInput" type="button" class="btn btn-danger">
            Cancel
          </button>
        </form>
      </div>
    </div>
  </main>
</template>


<script setup>
import { reactive, onMounted, ref } from 'vue';
import { db, timestamp } from "../config/firebaseconfig";
import { addDoc, collection, onSnapshot, orderBy, query, updateDoc, doc, deleteDoc } from "firebase/firestore";

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
