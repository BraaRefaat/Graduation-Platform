<template>
  <div class="course-goals">
    <v-container class="my-10">
      <v-row dir="rtl">
        <v-col
          cols="12"
          class="d-flex align-center justify-center"
          data-aos="fade-down"
        >
          <h2>
            <span>أهداف الدروس</span>
          </h2>
        </v-col>
        <v-row class="mt-10">
          <v-row>
            <v-col
              cols="12"
              class="px-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <v-window v-model="window" show-arrows reverse>
                <template v-slot:prev="{ props }">
                  <v-btn
                    color="#20BF55"
                    size="50"
                    variant="text"
                    class="rounded-circle"
                    @click="props.onClick"
                    ><v-icon size="50">mdi-chevron-right</v-icon></v-btn
                  > </template
                ><template v-slot:next="{ props }">
                  <v-btn
                    color="#20BF55"
                    size="50"
                    variant="text"
                    class="rounded-circle"
                    @click="props.onClick"
                    ><v-icon size="50">mdi-chevron-left</v-icon></v-btn
                  >
                </template>
                <v-window-item v-for="(goal, i) in goals" :key="i">
                  <v-card
                    height="200px"
                    class="d-flex justify-center align-center"
                  >
                    <span class="goals-text">{{ goal }}</span>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-col>
          </v-row>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
const window = ref(0);
const goals = ref([
  "تعريف الطالب بمفهوم الحاسب الآلي ومكوناته",
  "شرح وظائف الحاسب الآلي واستخداماته المختلفة",
  "تنمية مهارات الطالب في استخدام الحاسب الآلي",
  "إثارة شغف الطالب لتعلم المزيد عن علوم الحاسب",
]);
</script>

<style lang="scss" scoped>
.course-goals {
  .v-container {
    height: 100%;
    h2 {
      width: fit-content;
      color: #e8e5da;
      text-decoration: none;
      font-size: 30px;
      font-weight: 800;
    }

    h2::before {
      margin-right: auto;
    }

    h2::after,
    h2::before {
      content: "";
      width: 0%;
      height: 4px;
      background: #20bf55;
      display: block;
      transition: 0.5s;
    }

    h2:hover::after,
    h2:hover::before {
      width: 100%;
    }
    .v-window {
      border-radius: 8px;
      box-shadow: 2px 2px 10px #20bf55;
      transition: 0.4s all ease-in-out;
      &:hover {
        box-shadow: 1px 1px 20px #20bf55 !important;
      }
      .v-card {
        background: #0f172a;
        span {
          font-family: cairo;
          color: #e8e5da;
          letter-spacing: normal;
          &:hover {
            cursor: text;
          }
        }
      }
    }
  }
}

/* media queries */

@media (max-width: 600px) {
  .v-card {
    .goals-text {
      font-size: 20px !important;
      width: 70%;
    }
  }
}

@media (min-width: 600px) {
  .v-card {
    .goals-text {
      font-size: 30px !important;
      width: 70%;
    }
  }
}
@media (min-width: 980px) {
  .v-card {
    .goals-text {
      font-size: 35px !important;
      width: 100%;
    }
  }
}
@media (min-width: 1280px) {
  .v-card {
    .goals-text {
      font-size: 45px !important;
      width: 100%;
    }
  }
}
</style>
