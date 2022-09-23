<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <HelloWorld/>
      <LoginPage/>
      <MenuPage/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginPage from './components/LoginPage.vue';
import MenuPage from './components/MenuPage.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    LoginPage,
    MenuPage
},

  data: () => ({
    //
  }),
}
</script>
