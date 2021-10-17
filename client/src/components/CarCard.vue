<template>
  <v-card class="my-6 mx-4" max-width="370">
    <v-img height="250" :src="c.image"></v-img>

    <v-card-title>{{ c.title }} <span v-if="c.status != 'available'"> *RESERVED</span></v-card-title>
    <div class="mx-4">
      <p>
        Owner: <b>{{ c.first_name }} {{ c.last_name }}</b>
      </p>
      <span>
        Year: <b>{{ c.year_of_make }}</b>
      </span>
      <br />
      <span>
        Miles: <b>{{ c.miles }}</b>
      </span>
      <p />
      <p />
      <p v-if="c.status === 'available'">
        Price: <b>{{ c.price }}</b>
      </p>
      <p v-else>Price: <b>N/A</b></p>
    </div>

    <v-card-actions class="mb-3 d-flex justify-end">
      <v-btn class="red" color="white--text" @click="delButton(c.car_id)">
        Delete
      </v-btn>
      <v-btn class="purple" color="white--text" :to="`/details/${c.car_id}`" v-if="c.status === 'available'">
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    c: {
      type: Object,
    },
  },
  methods: {
    delButton(id) {
      this.$emit('delButton', id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
