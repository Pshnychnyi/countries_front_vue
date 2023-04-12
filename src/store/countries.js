import axios from "axios";
import router from "../router";

export default {
    state() {
        return {
            countries: '',
            country: '',
        }
    },
    mutations: {
        setCountries(state, value) {
            state.countries = value
        },
        setCountry(state, value) {
            state.country = value
        },
    },
    actions: {
        getCountries({commit}, {page= 1, order= 1, continent}) {
            const url = import.meta.env.VITE_APP_BACK_URL + 'api/'
            axios.post(url, {
                page,
                order,
                continent
            }).then(res => {
                commit('setPagination', res.data.meta)
                commit('setCountries', res.data.data)
            }).catch(res => {
                console.log(res)
            })

        },
        getCountry({commit}, {id}) {
            const url = import.meta.env.VITE_APP_BACK_URL + 'api/' + id
            axios.get(url).then(res => {
                commit('setCountry', res.data);
            }).catch(res => {
                console.log(res)
            })
        },
        createCountry({commit}, data) {
            const url = import.meta.env.VITE_APP_BACK_URL + 'api/add'
            axios.post(url, {
                ...data
            }).then(res => {
                if(res.data.error) {
                    commit('setErrors', res.data.errors)

                }else {
                    commit('setErrors', '')
                    router.push('/')
                }


            })
        }
    },
    getters: {
        countries(state) {
            return  state.countries
        },
        country(state) {
            return  state.country
        }
    }
}