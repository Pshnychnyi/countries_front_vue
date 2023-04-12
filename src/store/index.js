import {createStore} from "vuex";
import router from "../router";
import continents from "./continents";
import countries from "./countries";

export default createStore({
    state() {
        return {
            pagination: '',
            errors: ''
        }
    },
    mutations: {
        setPagination(state, value) {
            state.pagination = value
        },

        setErrors(state, value){
            state.errors = value;
        }
    },
    actions: {
        //
    },
    getters: {

        pagination(state) {
            return  state.pagination
        },
        errors(state) {
            return state.errors
        },

    },
    modules: {
        continents, countries
    }
}, router)