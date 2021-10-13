<template>
  <v-app>
    <LogoBar> </LogoBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LogoBar from '@/components/LogoBar.vue';

export default {
  name: 'App',

  components: {
    LogoBar,
  },
};
</script>
