<template>
  <v-app>
    <v-main>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
