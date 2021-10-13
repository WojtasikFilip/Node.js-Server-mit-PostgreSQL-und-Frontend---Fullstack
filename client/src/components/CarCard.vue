<template>
  <v-card class="my-6 mx-4" max-width="370">
    <v-img height="250" :src="c.image"></v-img>

    <v-card-title>{{ c.title }} <span v-if="c.status != 'available'"> *RESERVED</span></v-card-title>
    <div class="mx-4">
      <p>
        Owner: <b>{{ c.owner.firstName }} {{ c.owner.lastName }}</b>
      </p>
      <span>
        Year: <b>{{ c.yearOfMake }}</b>
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

    <v-card-actions class="mb-3 d-flex justify-end" v-if="c.status === 'available'">
      <v-btn class="purple" color="white--text" :to="`/details/${c.id}`">
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
};
</script>

<style lang="scss" scoped></style>
