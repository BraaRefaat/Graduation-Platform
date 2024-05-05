<template>
  <v-dialog
    v-model="submitMessage"
    persistent
    style="width: 40%; font-family: cairo"
  >
    <v-card
      class="text-center flex-column align-center py-7"
      style="background-color: #0f172a"
    >
      <v-icon
        color="#049334"
        size="80"
        style="
          border: 1px solid #049334;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        "
        >mdi-check</v-icon
      >
      <v-card-title style="font-size: 30px; font-weight: bold; color: #e8e5da">
        تم إرسال الإجابات بنجاح
      </v-card-title>
      <v-card-text
        dir="rtl"
        style="
          color: #e8e5da;
          font-size: 20px;
          line-height: normal;
          padding-top: 25px;
        "
      >
        شكرا لك {{ userData.name.value }} على استخدامك منصتنا
      </v-card-text>
      <v-card-text
        dir="rtl"
        style="
          color: #e8e5da;
          font-size: 20px;
          line-height: normal;
          padding-top: 0px;
        "
      >
        لقد حصلت على درجة {{ userData.score.value }} / 10 في الاختبار
      </v-card-text>
      <v-card-actions class="w-100 d-flex align-center justify-center">
        <v-btn
          variant="flat"
          class="mt-5 w-33"
          style="
            letter-spacing: normal;
            color: #0f172a;
            font-size: 18px;
            font-weight: 500;
          "
          color="#20BF55"
          @click="resetExam"
          >حسناً</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, defineProps, defineEmits, onMounted, watch, inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const submitMessage = ref(false);
const props = defineProps({
  popup: {
    type: Boolean,
  },
});
const userData = inject("userData");

const emits = defineEmits(["close_popup"]);
watch(submitMessage, (newValue) => {
  if (!newValue) {
    setTimeout(() => {
      emits("close_popup");
    }, 300);
  }
});

const resetExam = () => {
  submitMessage.value = false;
  router.push({ name: "home" });
};

onMounted(() => {
  submitMessage.value = props.popup;
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
