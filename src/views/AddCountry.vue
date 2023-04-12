<template>
  <div class="container">
    <div class="alert alert-danger" v-if="getErrors" role="alert">
      <div v-for="error in getErrors">{{error[0]}}</div>
    </div>
    <div class="row">

      <div class="col-md-6 offset-3">
        <form class="mx-auto d-block mt-5" @submit.prevent="submitHandler">

          <div class="form-group">
            <label for="code">Code</label>
            <input
                type="text"
                v-model="code"
                name="code"
                class="form-control form-control-sm"
                id="code"
                :class="{'is-invalid': (v$.code.$invalid && v$.code.$error)}"
            >

            <small class="form-text text-danger" v-if="v$.code.$dirty" v-for="error in v$.code.$errors" :key="error.$uid">{{error.$message}}</small>
          </div>

          <div class="form-group">
            <label for="continent_code">Continent Code</label>
            <select
                class="custom-select custom-select-sm"
                id="continent_code"
                v-model="continent_code"
                name="continent_code"
                :class="{'is-invalid': (v$.continent_code.$invalid && v$.continent_code.$error)}"
            >
              <option v-for="continent in continents" :value="continent.code">{{continent.name}}</option>
            </select>
            <small class="form-text text-danger" v-if="v$.continent_code.$dirty" v-for="error in v$.continent_code.$errors" :key="error.$uid">{{error.$message}}</small>
          </div>

          <div class="form-group">
            <label for="display_order">Display order</label>
            <input
                type="number"
                min="1"
                v-model="display_order"
                name="display_order"
                class="form-control form-control-sm"
                id="display_order"
                :class="{'is-invalid': (v$.display_order.$invalid && v$.display_order.$error)}"
            >
            <small  class="form-text text-danger" v-if="v$.display_order.$dirty" v-for="error in v$.display_order.$errors" :key="error.$uid">{{error.$message}}</small>
          </div>

          <div class="form-group">
            <label for="full_name">Full name</label>
            <input
                type="text"
                v-model="full_name"
                name="full_name"
                class="form-control form-control-sm"
                id="full_name"
                :class="{'is-invalid': (v$.full_name.$invalid && v$.full_name.$error)}"
            >
            <small class="form-text text-danger" v-if="v$.full_name.$dirty" v-for="error in v$.full_name.$errors" :key="error.$uid">{{error.$message}}</small>
          </div>

          <div class="form-group">
            <label for="iso3">ISO 3</label>
            <input
                type="text"
                v-model="iso3"
                name="iso3"
                class="form-control
                form-control-sm"
                id="iso3"
                :class="{'is-invalid': (v$.iso3.$invalid && v$.iso3.$error)}"
            >
            <small class="form-text text-danger" v-if="v$.iso3.$dirty" v-for="error in v$.iso3.$errors" :key="error.$uid">{{error.$message}}</small>
          </div>

          <div class="form-group">
            <label for="name">Name</label>
            <input
                type="text"
                v-model="name"
                name="name"
                class="form-control form-control-sm"
                id="name"
                :class="{'is-invalid': (v$.name.$invalid && v$.name.$error)}"
            >
            <small class="form-text text-danger" v-if="v$.name.$dirty" v-for="error in v$.name.$errors" :key="error.$uid">{{error.$message}}</small>
          </div>

          <div class="form-group">
            <label for="number">Number</label>
            <input
                type="number"
                min=1
                v-model="number"
                name="number"
                class="form-control form-control-sm"
                id="number"
                :class="{'is-invalid': (v$.number.$invalid && v$.number.$error)}"
                >
            <small id="emailHelp"  class="form-text text-danger" v-if="v$.number.$dirty" v-for="error in v$.number.$errors" :key="error.$uid">{{error.$message}}</small>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import {alpha, maxValue, required, maxLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  name: "AddCountry",
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      code: '',
      continent_code: '',
      display_order: '',
      full_name: '',
      iso3: '',
      name: '',
      number: '',

    }
  },
  validations() {
    return {
      code: { required, maxLength: maxLength(2), alpha },
      continent_code: {required, maxLength: maxLength(2), alpha},
      display_order: {required, maxValue: maxValue(999)},
      full_name: {required, maxLength: maxLength(128)},
      iso3: {required, maxLength: maxLength(3)},
      name: {required, maxLength: maxLength(64)},
      number: {required, maxValue: maxValue(999)}
    }

  },
  computed: {
      getErrors() {
        return this.$store.getters.errors
      },
      continents() {
        return this.$store.getters.continents
      }

  },
  methods: {
    async submitHandler() {

      const isFormSubmit = await this.v$.$validate()
      if (!isFormSubmit) return

      const formData = {
        code: this.code,
        continent_code: this.continent_code,
        display_order: this.display_order,
        full_name: this.full_name,
        iso3: this.iso3,
        name: this.name,
        number: this.number
      }
      try {
        await this.$store.dispatch('createCountry', formData);

      } catch (e) {
         console.log(e)
      }


    }

  },
  mounted() {
   this.$store.dispatch('getContinents')
  }
}
</script>

<style scoped>

</style>