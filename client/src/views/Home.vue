<template>
  <div>
    <CarCards :cars="cars" :carRefresh="getCars()" />
  </div>
</template>

<script>
import CarCards from '@/components/CarCards.vue';
import axios from 'axios';
export default {
  components: {
    CarCards,
  },
  data: () => ({
    cars: [],
  }),
  created() {
    this.getCars();
  },
  methods: {
    async getCars() {
      let { data } = await axios({
        url: 'http://localhost:3000/cars',
        method: 'GET',
      });
      this.cars = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
