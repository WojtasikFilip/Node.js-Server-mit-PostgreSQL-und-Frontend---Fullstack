<template>
  <div>
    <CarCards :cars="cars" :carRefresh="getCars" @delButton="delButton" />
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
    async delButton(id) {
      await axios({
        url: 'http://localhost:3000/cars/' + id,
        method: 'DELETE',
      });
      console.log(id);
      this.getCars();
    },
  },
};
</script>

<style lang="scss" scoped></style>
