<template>
  <div class="nav-drawer">
    <v-navigation-drawer
      color="#0F172A"
      v-model="drawer"
      location="left"
      temporary
      class="py-5 pr-5"
      style="width: 350px"
    >
      <div class="nav-btn d-flex align-center justify-start">
        <v-btn color="#20BF55" @click="drawer = !drawer" variant="flat">
          <v-icon color="#0F172A" size="28">mdi-close</v-icon></v-btn
        >
      </div>
      <v-list v-model="open">
        <v-list-items>
          <v-list-item
            class="d-flex align-center justify-end"
            append-icon="mdi-home"
            @click="$router.push({ name: 'home' })"
            >الصفحة الرئيسية</v-list-item
          >
          <v-list-group value="courses" dir="rtl">
            <template v-slot:activator="{ props }">
              <v-list-item
                class="text-right"
                v-bind="props"
                prepend-icon="mdi-human-male-board"
                >الكورسات التعليمية</v-list-item
              >
            </template>

            <v-list-item
              class="d-flex align-center justify-end"
              style="background: #1a253d"
              append-icon="mdi-desktop-classic"
              dir="ltr"
              @click="$router.push({ name: 'computer_course' })"
              >كورس أساسيات الحاسب الآلي</v-list-item
            >
          </v-list-group>
        </v-list-items>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";

const drawer = ref(false);
const open = ref(["courses"]);
const Emitter = inject("Emitter");

onMounted(() => {
  Emitter.on("openNav", () => {
    drawer.value = true;
  });
});
</script>

<style lang="scss">
.nav-drawer {
  .v-btn {
    width: 30% !important;
    border-radius: 0 5px 5px 0;
  }
}

@media (max-width: 620px) {
  .nav-drawer {
    .v-navigation-drawer {
      width: 90% !important;
    }
  }
}
</style>
