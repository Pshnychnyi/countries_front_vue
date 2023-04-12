import axios from "axios";

export default {
    state() {
        return {
            continents: '',
        }
    },
    mutations: {
        setContinents(state, value){
            state.continents = value;
        }
    },
    actions: {
        getContinents({commit}) {
            const url = import.meta.env.VITE_APP_BACK_URL + 'api/continents'
            axios.get(url).then(res => {
                commit('setContinents', res.data)
            })
        },
    },
    getters: {
        continents(state) {
            return state.continents
        }
    }
}