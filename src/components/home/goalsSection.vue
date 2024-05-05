<template>
  <div class="goals-section">
    <v-container>
      <v-row dir="rtl">
        <v-col
          cols="12"
          class="d-flex align-center justify-center"
          data-aos="fade-down"
        >
          <h2>
            <span>أهدافنا</span>
          </h2>
        </v-col>
        <v-row class="mt-10">
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              class="px-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <v-card color="#0f172a" class="px-3 py-4">
                <v-icon size="50">mdi-quality-high</v-icon>
                <v-card-title
                  style="
                    color: #20bf55;
                    letter-spacing: normal;
                    font-size: 20px;
                    font-weight: 800;
                  "
                >
                  تقديم محتوى تعليمي عالي الجودة
                </v-card-title>
                <v-card-text
                  style="
                    letter-spacing: normal;
                    line-height: normal;
                    font-size: 17px;
                    font-weight: 1000;
                  "
                >
                  نسعى لتوفير محتوى تعليمي دقيق ومُحدث يلبي احتياجات الطلاب في
                  مختلف المراحل الدراسية
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              class="px-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <v-card color="#0f172a" class="px-3 py-4">
                <v-icon size="50">mdi-book-education-outline</v-icon>
                <v-card-title
                  style="
                    color: #20bf55;
                    letter-spacing: normal;
                    font-size: 20px;
                    font-weight: 800;
                  "
                >
                  تسهيل عملية التعلم
                </v-card-title>
                <v-card-text
                  style="
                    letter-spacing: normal;
                    line-height: normal;
                    font-size: 17px;
                    font-weight: 1000;
                  "
                >
                  نستخدم أحدث تقنيات التعليم الإلكتروني لتسهيل عملية التعلم
                  وجعلها أكثر تفاعلية
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mt-8">
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              class="px-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <v-card color="#0f172a" class="px-3 py-4">
                <v-icon size="50">mdi-emoticon-excited-outline</v-icon>
                <v-card-title
                  style="
                    color: #20bf55;
                    letter-spacing: normal;
                    font-size: 20px;
                    font-weight: 800;
                  "
                >
                  إثارة شغف التعلم
                </v-card-title>
                <v-card-text
                  style="
                    letter-spacing: normal;
                    line-height: normal;
                    font-size: 17px;
                    font-weight: 1000;
                  "
                >
                  نسعى لخلق بيئة تعليمية ممتعة ومُحفزة تُشجع الطلاب على التعلم
                  واكتشاف المزيد
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              class="px-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <v-card color="#0f172a" class="px-3 py-4">
                <v-icon size="50">mdi-account-school-outline</v-icon>
                <v-card-title
                  style="
                    color: #20bf55;
                    letter-spacing: normal;
                    font-size: 20px;
                    font-weight: 800;
                  "
                >
                  دعم الطلاب في رحلتهم التعليمية
                </v-card-title>
                <v-card-text
                  style="
                    letter-spacing: normal;
                    line-height: normal;
                    font-size: 17px;
                    font-weight: 1000;
                  "
                >
                  نقدم للطلاب مختلف أدوات الدعم والمساعدة التي يحتاجونها للنجاح
                  في دراستهم
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style lang="scss">
.goals-section {
  height: 100vh;
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
  .v-card {
    width: 100%;
    border-radius: 8px;
    box-shadow: 2px 2px 10px #20bf55;
    transition: 0.4s all ease-in-out;
    &:hover {
      transform: scale(1.1);
      box-shadow: 1px 1px 20px #20bf55 !important;
    }
  }
}

/* media queries */

@media (max-width: 600px) {
  .goals-section {
    height: 140vh;
  }
}

@media (max-width: 960px) {
  .goals-section {
    height: 130vh;
  }
}
</style>
