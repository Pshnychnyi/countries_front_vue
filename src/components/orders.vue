<template>
  <div class="dropdown m-1 d-inline">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
      Order By
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item"  v-for="item in select" @click.prevent="order(item.key)">{{item.value}}</a>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['set-order'],
  name: "orders",
  data() {
    return {
      select: [
        {'key': 1, value: 'A-Z'},
        {'key': 2, value: 'Z-A'}
      ]
    }
  },
  methods: {
    order(key) {
      this.$emit('set-order', key)
    }
  }
}
</script>

<style scoped>

</style>