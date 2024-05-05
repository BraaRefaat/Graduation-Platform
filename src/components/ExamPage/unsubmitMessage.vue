<template>
  <v-dialog
    v-model="completeMessage"
    persistent
    style="width: 40%; font-family: cairo"
  >
    <v-card
      class="text-center flex-column align-center py-7"
      style="background-color: #0f172a"
    >
      <v-icon
        color="#DE0016"
        size="80"
        style="
          border: 1px solid #de0016;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        "
        >mdi-close</v-icon
      >
      <v-card-title style="font-size: 30px; font-weight: bold; color: #e8e5da">
        أجب عن كل الأسئلة
      </v-card-title>
      <v-card-actions class="w-100 d-flex align-center justify-center">
        <v-btn
          variant="flat"
          class="mt-5 w-33"
          style="
            letter-spacing: normal;
            color: #e8e5da;
            font-size: 18px;
            font-weight: 500;
          "
          color="#DE0016"
          @click="resetExam"
          >حسناً</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted, watch } from "vue";
const completeMessage = ref(false);
const props = defineProps({
  dialog: {
    type: Boolean,
  },
});

const emits = defineEmits(["close_dialog"]);
watch(completeMessage, (newValue) => {
  if (!newValue) {
    setTimeout(() => {
      emits("close_dialog");
    }, 300);
  }
});

const resetExam = () => {
  completeMessage.value = false;
};

onMounted(() => {
  completeMessage.value = props.dialog;
});
</script>
<style lang="scss">
@media (max-width: 950px) {
  .v-dialog {
    width: 100% !important;
    .v-card-title {
      font-size: 22px !important;
    }
  }
}
</style>
