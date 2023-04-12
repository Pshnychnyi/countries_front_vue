<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-3">
      <table class="table mt-5">
        <thead class="thead-light">
        <tr>
          <th scope="col" width="200px">Name</th>
          <th scope="col">Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Code</th>
          <td>{{country.code}}</td>
        </tr>
        <tr>
          <th scope="row">Continent Code</th>
          <td>{{country.continent_code}}</td>
        </tr>
        <tr>
          <th scope="row">Country ID</th>
          <td>{{country.country_id}}</td>
        </tr>
        <tr>
          <th scope="row">Display Order</th>
          <td>{{country.display_order}}</td>
        </tr>
        <tr>
          <th scope="row">Full name</th>
          <td>{{country.full_name}}</td>
        </tr>
        <tr>
          <th scope="row">ISO 3</th>
          <td>{{country.iso3}}</td>
        </tr><tr>
          <th scope="row">Name</th>
          <td>{{country.name}}</td>
        </tr><tr>
          <th scope="row">Number</th>
          <td>{{country.number}}</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailsCountry",
  computed: {
    country() {
      return this.$store.getters.country
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.$store.dispatch('getCountry', {id})
  }
}
</script>

<style scoped>

</style>