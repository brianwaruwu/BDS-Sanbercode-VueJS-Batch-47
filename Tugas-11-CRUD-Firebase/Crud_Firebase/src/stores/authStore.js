import { defineStore } from 'pinia'
import { auth } from "../config/firebaseconfig"
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore('storeAuth', {
    state: () => ({
        user: {

        }
    }),

    actions: {
        init() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/auth.user
                    this.user.id = user.uid
                    this.user.email = user.email


                    this.router.push('/')
                        // ...
                } else {
                    // User is signed out
                    // ...
                    this.user = {

                    }

                    this.router.replace('/auth')
                }
            });
        },
        registerUser(user) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    console.log(error)
                });
        },

        LogoutUser() {
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
        },
        LoginUser(user) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    console.log("berhasil")
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    },

})