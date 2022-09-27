import { createStore } from "vuex";


export default createStore({
    modules: {
    },
    state: () => ({
        likes: 0
    }),
    getters: {
        mult(state) {
            return state.likes * 2
        }
    },
    mutations: {
        plus(state) {
            state.likes++
        }
    },
    actions: {

    }
})