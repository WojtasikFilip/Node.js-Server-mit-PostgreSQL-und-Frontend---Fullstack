<template>
  <div class="d-flex justify-center flex-wrap">
    <CarCard :c="c" v-for="c of cars" :key="c.id" @delButton="delButton"> </CarCard>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue';
// import axios from 'axios';
export default {
  props: {
    cars: {
      type: Array,
    },
    carRefresh: {
      type: Function,
    },
  },
  components: {
    CarCard,
  },
  methods: {
    delButton(id) {
      this.$emit('delButton', id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
