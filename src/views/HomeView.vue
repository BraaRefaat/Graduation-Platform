<template>
  <div class="home">
    <v-app>
      <heroSection />
      <goalsSection />
      <AvailableCourses />
      <ContactInfo />
    </v-app>
  </div>
</template>

<script setup>
import heroSection from "@/components/home/heroSection.vue";
import goalsSection from "@/components/home/goalsSection.vue";
import AvailableCourses from "@/components/home/availableCourses.vue";
import ContactInfo from "@/components/home/contactInfo.vue";
</script>

<style lang="scss">
.v-application__wrap {
  height: 100%;
}
</style>
