import { defineStore } from 'pinia'

export const useOtherStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),

    actions: {
        addCard(amount) {
            this.count += amount
        },
        minCard(amount) {
            this.count -= amount
        }
    },
    getters: {
        Ganjilataugenap: (state) => {
            if (state.count % 2 === 0) return "genap"
            return "ganjil"
        }
    }
})