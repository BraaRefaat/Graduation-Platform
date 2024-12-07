<template>
  <div class="app-layout">
    <v-layout class="d-block overflow-x-hidden">
      <navDrawer />
      <v-main
        :style="`margin: ${
          $route.name == 'exam' ? '0px' : '180px 0px'
        }; padding-top: ${$route.name == 'home' ? '110px' : '0px'}`"
      >
        <slot></slot>
      </v-main>
      <appNav v-show="$route.name != 'exam'" />
      <appFooter v-show="$route.name != 'exam'" />
    </v-layout>
  </div>
</template>

<script setup>
import appNav from "./appNav.vue";
import appFooter from "./appFooter.vue";
import navDrawer from "./navDrawer.vue";
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: #20bf55;
}
::-webkit-scrollbar-track {
  width: 5px;
  background-color: #e8e5da;
}
</style>
