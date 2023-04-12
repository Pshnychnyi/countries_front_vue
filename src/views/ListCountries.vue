<template>
  <div class="container">
    <div class="row" v-if="countries">
      <div class="col-md-6 offset-3 mt-5">
        <div class="mb-1 ">

          <orders @set-order="setOrder"></orders>

          <continents @continent-code="setContinent"></continents>
          
          <router-link to="/add"><button type="button" class="btn btn-info">Add Country</button></router-link>

        </div>



        <table class="table">
          <thead class="thead-light">
          <tr>
            <th scope="col">Country name</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="country in countries">
            <td><router-link :to="'/' + country.country_id">{{ country.name }}</router-link></td>
          </tr>
          </tbody>
        </table>

        <nav aria-label="...">
          <ul class="pagination pagination-md">
            <li @click.prevent="getCountries(pagination.current_page - 1)" v-if="pagination.current_page !== 1" class="page-item"><a class="page-link" href="#">&lt;</a></li>
            <li v-for="link in pagination.links" class="page-item"  :class="link.active ? 'active' : ''">
              <template v-if="Number(link.label) &&
              (pagination.current_page - link.label < 3 && pagination.current_page - link.label > -3) ||
              Number(link.label) === 1 || Number(link.label) === pagination.last_page
              ">
                <a @click.prevent="getCountries(link.label)" class="page-link" href="#">{{ link.label }}</a>
              </template>
              <template v-if="
              Number(link.label) &&
                pagination.current_page !== 4 &&
                (pagination.current_page - link.label === 3) ||
              Number(link.label) &&
                pagination.current_page !== 47 &&
                (pagination.current_page - link.label === -3)
              ">
                  <a class="page-link" href="#">...</a>
              </template>
            </li>
            <li @click.prevent="getCountries(pagination.current_page + 1)" v-if="pagination.last_page !== pagination.current_page" class="page-item"><a class="page-link" href="#">&gt;</a></li>
          </ul>
        </nav>
      </div>

    </div>
  </div>

</template>

<script>


import orders from "../components/orders.vue";
import continents from "../components/continents.vue";

export default {
  name: "ListCountries",
  data() {
    return {
      continent: '',
      order: ''
    }
  },
  mounted() {
    this.getCountries()
    this.$store.dispatch('getContinents')
  },
  computed: {
    pagination() {
      return this.$store.getters.pagination
    },
    countries() {
      return this.$store.getters.countries
    }
  },
  methods: {
    getCountries(page = 1, order = 1, continent = '') {
      const orders = this.order ? this.order : order
      const continents = this.continent ? this.continent : continent
      this.$store.dispatch('getCountries', {page, order: orders, continent: continents})
    },
    setOrder(key = 1) {
      this.order = key;
      const currPage = this.$store.getters.pagination.current_page
      this.$store.dispatch('getCountries', {page: currPage, order: key, continent: this.continent})
    },
    setContinent(code = 'AF'){
      this.continent = code;

      this.$store.dispatch('getCountries', {continent: code})
    }
  },
  components:{
    orders, continents
  }
}
</script>

<style scoped>

</style>