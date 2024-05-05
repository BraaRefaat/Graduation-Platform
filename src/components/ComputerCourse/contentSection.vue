<template>
  <div class="content-section">
    <v-container>
      <v-row dir="rtl">
        <v-col
          cols="12"
          class="d-flex align-center justify-center"
          data-aos="fade-down"
        >
          <h2>
            <span>محتويات الدروس</span>
          </h2>
        </v-col>
        <v-row class="mt-10">
          <v-row>
            <v-col cols="12" data-aos="fade-up" data-aos-duration="1000">
              <v-card color="#0f172a">
                <v-tabs
                  v-model="tab"
                  bg-color="#0f172a"
                  color="#20BF55"
                  slider-color="#20BF55"
                  selected-class="font-weight-bold"
                >
                  <v-tab value="one">تعريف الحاسب الآلي</v-tab>
                  <v-tab value="two" @click="loadImage"
                    >مكونات الحاسب الآلي</v-tab
                  >
                  <v-tab value="three">وظائف الحاسب الآلي</v-tab>
                  <v-tab value="four">استخدامات الحاسب الآلي</v-tab>
                  <v-tab value="five">مهارات استخدام الحاسب الآلي</v-tab>
                  <v-tab value="six">خاتمة</v-tab>
                  <v-tab value="seven">الاختبار</v-tab>
                </v-tabs>
                <v-divider
                  color="#e8e5da"
                  thickness="1"
                  class="border-opacity-50"
                ></v-divider>

                <v-card-text>
                  <v-window v-model="tab">
                    <v-window-item value="one">
                      هو جهاز إلكتروني يستخدم لمعالجة البيانات وتحويلها إلى
                      معلومات مفيدة. يُعرف أيضًا باسم "الكمبيوتر" أو "الحاسوب"
                    </v-window-item>

                    <v-window-item value="two">
                      <v-list>
                        <v-list-items
                          v-for="(compComponent, i) in compComponents"
                          :key="i"
                        >
                          <v-list-item class="mb-8">
                            <v-container>
                              <v-row dir="rtl">
                                <v-col
                                  cols="8"
                                  class="d-flex align-center justify-center"
                                >
                                  <p>{{ compComponent.content }}</p>
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="d-flex align-center justify-center"
                                  v-if="loading == true"
                                >
                                  <v-skeleton-loader
                                    type="image"
                                    color="#20BF55"
                                    style="width: 80%"
                                  ></v-skeleton-loader>
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="d-flex align-center justify-center"
                                  v-if="loading == false"
                                >
                                  <v-lazy>
                                    <img
                                      :src="
                                        require(`@/assets/${compComponent.image}`)
                                      "
                                      width="300"
                                      height="200"
                                      class="rounded-xl"
                                      alt=""
                                    />
                                  </v-lazy>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-list-item>
                        </v-list-items>
                      </v-list>
                      <v-row
                        dir="rtl"
                        class="d-flex align-center justify-center mb-8"
                      >
                        <v-col cols="12">
                          <v-list v-model="open">
                            <v-list-group value="video">
                              <template v-slot:activator="{ props }">
                                <v-list-item
                                  v-bind="props"
                                  prepend-icon="mdi-youtube"
                                  base-color="#e8e5da"
                                  active-color="#20BF55"
                                  title="فيديو شرح للمكونات المادية للحاسب الآلي"
                                ></v-list-item>
                              </template>

                              <v-list-item
                                class="d-flex align-center justify-center mt-8"
                              >
                                <iframe
                                  width="853"
                                  height="480"
                                  src="https://www.youtube.com/embed/TBDLPJmMm8E"
                                  title="مكونات الكمبيوتر"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerpolicy="strict-origin-when-cross-origin"
                                  allowfullscreen
                                ></iframe>
                              </v-list-item>
                            </v-list-group>
                          </v-list>
                        </v-col>
                      </v-row>
                    </v-window-item>

                    <v-window-item value="three"
                      ><v-list>
                        <v-list-items v-for="(compJob, i) in compJobs" :key="i">
                          <v-list-item>{{ compJob }}</v-list-item>
                        </v-list-items>
                      </v-list></v-window-item
                    >
                    <v-window-item value="four"
                      ><v-list>
                        <v-list-items v-for="(compUse, i) in compUses" :key="i">
                          <v-list-item>{{ compUse }}</v-list-item>
                        </v-list-items>
                      </v-list></v-window-item
                    >
                    <v-window-item value="five"
                      ><v-list>
                        <v-list-items
                          v-for="(compSkill, i) in compSkills"
                          :key="i"
                        >
                          <v-list-item>{{ compSkill }}</v-list-item>
                        </v-list-items>
                      </v-list></v-window-item
                    >
                    <v-window-item value="six">
                      نتمنى أن يكون هذا القسم قد ساعدك على فهم أساسيات الحاسب
                      الآلي بشكل أفضل. ندعوك لمتابعة باقي أقسام الموقع لتعلم
                      المزيد عن هذا العالم المثير للاهتمام
                    </v-window-item>
                    <v-window-item value="seven">
                      <div
                        class="finishing-form d-flex align-center justify-space-around"
                      >
                        <v-checkbox
                          base-color="#e8e5da"
                          true-icon="mdi-check-circle"
                          false-icon="mdi-close-circle"
                          label="قمت بإنهاء الدروس"
                          v-model="done"
                          @click-="done = !done"
                          color="#20BF55"
                        ></v-checkbox>
                        <v-btn
                          color="#20BF55"
                          variant="outlined"
                          :disabled="!done ? true : false"
                          style="letter-spacing: normal; font-size: 18px"
                          @click="$router.push({ name: 'exam' })"
                          >بدأ الاختبار</v-btn
                        >
                      </div>
                    </v-window-item>
                  </v-window>
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
import { ref } from "vue";
const done = ref(false);
const loading = ref(true);
const open = ["video"];
const compComponents = ref([
  {
    content:
      "اللوحة الأم (Motherboard): هي بمثابة العمود الفقري للحاسب الآلي، حيث تربط جميع مكوناته ببعضها البعض",
    image: "motherboard-image-2.jpg",
  },
  {
    content:
      "الوحدة المركزية للمعالجة (CPU): هي بمثابة عقل الحاسب الآلي، حيث تقوم بتنفيذ العمليات الحسابية والمنطقية",
    image: "cpu-image.jpg",
  },
  {
    content:
      "الذاكرة (Memory): تُستخدم لتخزين البيانات والبرامج مؤقتًا أثناء عمل الحاسب الآلي",
    image: "ram-image.jpg",
  },
  {
    content:
      "وحدات الإدخال (Input devices): مثل لوحة المفاتيح، والماوس، والماسح الضوئي، تُستخدم لإدخال البيانات إلى الحاسب الآلي",
    image: "inputs-devices-image.jpg",
  },
  {
    content:
      "وحدات الإخراج (Output devices): مثل الشاشة، والطابعة، والسماعات، تُستخدم لعرض المعلومات أو طباعتها أو سماعها",
    image: "outout-device-image.jpg",
  },
  {
    content:
      "وحدات التخزين (Storage devices): مثل القرص الصلب، والقرص المضغوط، تُستخدم لتخزين البيانات بشكل دائم",
    image: "storage-device-image-4.jpg",
  },
]);
const compJobs = ref([
  "معالجة البيانات: تحويل البيانات الخام إلى معلومات مفيدة",
  "التخزين: حفظ البيانات والبرامج بشكل دائم أو مؤقت",
  "التحكم: تشغيل الأجهزة الإلكترونية الأخرى",
  "الاتصالات: التواصل مع أجهزة الحاسب الآلي الأخرى عبر الشبكات",
  "الترفيه: مشاهدة الأفلام، والاستماع إلى الموسيقى، ولعب الألعاب",
]);

const compUses = ref([
  "في التعليم: كتابة الأبحاث، وإجراء الحسابات، وعرض العروض التقديمية",
  "في العمل: كتابة التقارير، وإدارة المشاريع، والتواصل مع العملاء",
  "في المنزل: تصفح الإنترنت، ومشاهدة الأفلام، والاستماع إلى الموسيقى",
  "في الترفيه: لعب الألعاب، وممارسة الرياضات الإلكترونية",
]);

const compSkills = ref([
  "مهارات أساسية: استخدام لوحة المفاتيح والماوس، وإدارة الملفات والمجلدات",
  "مهارات متقدمة: استخدام البرامج المختلفة، مثل برامج معالجة النصوص، وبرامج جداول البيانات، وبرامج العروض التقديمية",
  "مهارات برمجة: كتابة البرامج لتشغيل الحاسب الآلي",
]);

const tab = ref(null);

const loadImage = () => {
  setTimeout(() => {
    loading.value = false;
  }, 10000);
};
</script>

<style lang="scss">
.content-section {
  height: auto;
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
    border-radius: 8px;
    box-shadow: 2px 2px 10px #20bf55;
    transition: 0.4s all ease-in-out;
    &:hover {
      box-shadow: 1px 1px 20px #20bf55 !important;
    }
    .v-tabs {
      .v-tab {
        letter-spacing: normal;
        color: #e8e5da;
      }
    }
    .v-card-text {
      .v-window {
        .v-window-item {
          font-size: 24px;
          line-height: normal;
          letter-spacing: normal;
          color: #e8e5da;
          &:hover {
            cursor: text;
          }
          .v-list {
            background-color: #0f172a;
            font-size: 24px;
            line-height: normal;
            letter-spacing: normal;
            color: #e8e5da;
            text-align: right;
            .v-list-items {
              .v-list-item {
                &:hover {
                  cursor: text;
                }
              }
            }
          }
          .v-checkbox .v-selection-control {
            justify-content: right;
            direction: rtl !important;
            color: #e8e5da;
          }
          .v-input {
            .v-input__details {
              display: none;
            }
          }
        }
      }
    }
  }
  .v-list-item__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
