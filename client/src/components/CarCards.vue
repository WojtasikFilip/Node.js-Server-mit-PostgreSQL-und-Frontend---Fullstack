<template>
  <div class="d-flex justify-center flex-wrap">
    <CarCard :c="c" v-for="c of cars" :key="c.id" @buyButton="buyButton"> </CarCard>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue';
import axios from 'axios';
export default {
  props: {
    cars: {
      type: Array,
    },
  },
  carRefresh: {
    type: Function,
  },
  components: {
    CarCard,
  },
  methods: {
    async buyButton(c) {
      await axios({
        url: 'http://127.0.0.1:3000/cars/' + c.id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          title: c.title + ' RESERVED',
        },
      });
      this.carRefresh();
    },
  },
};
</script>

<style lang="scss" scoped></style>
