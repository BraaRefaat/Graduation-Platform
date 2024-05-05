<template>
  <div class="computer-basics-page">
    <v-app>
      <homeSection />
      <courseGoals />
      <contentSection />
    </v-app>
  </div>
</template>

<script setup>
import homeSection from "@/components/ComputerCourse/homeSection.vue";
import courseGoals from "@/components/ComputerCourse/courseGoals.vue";
import contentSection from "@/components/ComputerCourse/contentSection.vue";
</script>
