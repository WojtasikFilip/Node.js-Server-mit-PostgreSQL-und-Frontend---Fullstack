<template>
  <v-container class="d-flex flex-wrap">
    <v-card class="my-auto mx-auto" max-width="500" height="950">
      <v-img height="600" :src="singleCar.image"></v-img>

      <v-card-title
        ><h4 class="mx-auto">
          {{ singleCar.title }} <span v-if="singleCar.status != 'available'"> *RESERVED</span>
        </h4></v-card-title
      >
      <v-simple-table class="text-center">
        <template>
          <thead>
            <tr>
              <th class="text-center">
                Price
              </th>
              <th class="text-center">
                Miles
              </th>

              <th class="text-center">
                Year of Make
              </th>
              <th class="text-center">
                Current Owner
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-if="singleCar.status == 'reserved'">N/A</td>
              <td v-else>{{ singleCar.price }}</td>
              <td>{{ singleCar.miles }}</td>
              <td>{{ singleCar.yearOfMake }}</td>
              <td>{{ singleCar.owner.firstName }} {{ singleCar.owner.lastName }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-card-text>
        <p>
          {{ singleCar.description }}
        </p>
      </v-card-text>

      <v-card-actions class="mb-3">
        <v-btn class="purple" color="white--text" to="/">
          Go Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="red darken-3"
          color="white--text"
          @click="orderCar()"
          v-if="singleCar.status === 'available'"
        >
          Order Car
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      singleCar: [],
    };
  },
  props: {
    id: {
      type: String,
    },
  },
  created() {
    this.getCar();
  },
  methods: {
    async getCar() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/car/' + this.id,
        method: 'GET',
      });
      this.singleCar = data;
      // console.log(this.singleCar);
    },
    async orderCar() {
      await axios({
        url: 'http://127.0.0.1:3000/cars/' + this.singleCar.id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          status: 'reserved',
        },
      });
      this.getCar();
    },
  },
};
</script>

<style lang="scss" scoped></style>
