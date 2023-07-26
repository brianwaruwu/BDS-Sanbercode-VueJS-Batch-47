import { defineStore } from 'pinia';
import { db, timestamp } from "../config/firebaseconfig";
import { addDoc, collection, onSnapshot, orderBy, query, updateDoc, doc, deleteDoc } from "firebase/firestore";

export const useCounterStore = defineStore('post', {
    state: () => ({
        todo: {
            title: "",
            content: "",
            id: "",
            data: [],
        },
        update: false,
    }),

    actions: {
        clearInput() {
            this.todo.title = "";
            this.todo.content = "";
            this.todo.id = "";
            this.update = false;
        },

        updateData(items) {
            this.update = true;
            this.todo.title = items.title;
            this.todo.content = items.content;
            this.todo.id = items.id;
            console.log(items);
        },

        async deleteData(item) {
            this.clearInput();
            await deleteDoc(doc(db, "todos", item));
            alert("Berhasil Dihapus");
        },

        readData() {
            const filterCollection = query(collection(db, "todos"), orderBy('createAt', 'asc'));
            onSnapshot(filterCollection, (QuerySnapshot) => {
                const todos = [];
                QuerySnapshot.forEach((doc) => {
                    let todoItem = {
                        id: doc.id,
                        title: doc.data().title,
                        content: doc.data().content,
                    };
                    todos.push(todoItem);
                });
                this.todo.data = todos;
            });
        },

        async handleSubmit() {
            if (this.update) {
                const id = this.todo.id;
                await updateDoc(doc(db, "todos", id), {
                    title: this.todo.title,
                    content: this.todo.content,
                    updateAt: timestamp,
                });
                alert("Berhasil Diperbarui");
            } else {
                await addDoc(collection(db, "todos"), {
                    title: this.todo.title,
                    content: this.todo.content,
                    createAt: timestamp,
                    updatedAt: timestamp,
                });
                alert("Berhasil Menambah Data");
            }
            this.clearInput();
        },
    },
});

// Pastikan untuk memanggil `readData` saat store ini dibuat
// Gunakan `onBeforeMount` atau `onMounted` pada komponen Anda untuk memanggil `readData` saat komponen di-mount.