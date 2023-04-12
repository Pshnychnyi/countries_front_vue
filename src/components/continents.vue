<template>
  <div class="dropdown m-1 d-inline">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
      Continents
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" v-for="continent in continents" @click.prevent="setContinent(continent.code)">{{continent.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "continents",
  emits: ['continent-code'],
  computed: {
    continents() {
      return this.$store.getters.continents
    }
  },
  methods: {
    setContinent(code) {
      this.$emit('continent-code', code)
    }
  }
}
</script>

<style scoped>

</style>