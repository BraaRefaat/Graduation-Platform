<template>
  <div class="nav-bar">
    <v-app-bar color="#0F172A" height="110" elevation="0">
      <v-container>
        <v-row dir="rtl">
          <v-col cols="3" class="d-flex justify-start align-center pr-10">
            <v-app-bar-nav-icon
              color="#20BF55"
              variant="outlined"
              @click="openNav"
            ></v-app-bar-nav-icon>
          </v-col>
          <v-col cols="9" class="d-flex align-center justify-end">
            <img src="../../assets/Graduation_logo.png" width="150" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script setup>
import { inject } from "vue";
const Emitter = inject("Emitter");
const openNav = () => {
  Emitter.emit("openNav");
};
</script>

<style lang="scss" scoped>
img {
  transform: scale(1.1);
  transition: 0.4s all ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
}
</style>
