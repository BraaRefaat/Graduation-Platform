<template>
  <div class="register-section">
    <v-container>
      <v-row dir="rtl">
        <v-col cols="12">
          <h2>اختبار لقياس مدى فهمك لمحتوى الدرس</h2>
        </v-col>
        <v-col cols="12" class="d-flex align-center justify-center">
          <v-card
            color="#0f172a"
            class="register-card px-3 py-5 d-flex align-center justify-center"
            style="width: 50%"
          >
            <form action="" @submit.prevent="showForm = true">
              <v-text-field
                v-model="name"
                dir="rtl"
                type="text"
                placeholder="الاسم"
                variant="underlined"
                required
              ></v-text-field>
              <v-text-field
                v-model="age"
                dir="rtl"
                type="number"
                placeholder="السن"
                variant="underlined"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                dir="rtl"
                type="email"
                placeholder="البريد الكتروني"
                variant="underlined"
                required
              ></v-text-field>
              <v-btn
                class="my-5"
                color="#20BF55"
                style="letter-spacing: normal; font-size: 20px; padding: 25px"
                variant="tonal"
                type="submit"
                block
                @click="timeLimit"
                >تأكيد بياناتك</v-btn
              >
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="exam-container my-8">
    <v-container v-show="showForm == true">
      <v-row dir="rtl">
        <v-col cols="12" class="d-flex align-center justify-center">
          <v-card
            color="#0f172a"
            class="px-3 py-5 d-flex align-center justify-center"
          >
            <v-container>
              <v-row dir="rtl">
                <v-col cols="12">
                  <h2>التعليمات</h2>
                  <ul>
                    <li>
                      يرجى قراءة كل سؤال بعناية قبل اختيار الإجابة الصحيحة
                    </li>
                    <li>
                      لا يُسمح باستخدام أي كتب أو أوراق مساعدة أثناء الاختبار
                    </li>
                  </ul>
                </v-col>
                <v-divider
                  :thickness="5"
                  class="border-opacity-25"
                  color="#20BF55"
                ></v-divider>

                <v-col cols="12" class="pt-8">
                  <h2>الأسئلة</h2>
                </v-col>
                <v-col cols="12">
                  <form action="" @submit.prevent>
                    <v-container
                      style="border: #20bf55 dashed 1px"
                      class="pa-10 rounded-lg"
                    >
                      <v-row dir="rtl">
                        <v-col cols="12">
                          <ol>
                            <li value="1">
                              <p>اختر التعريف الصحيح للحاسب الآلي</p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer1">
                          <v-radio
                            label="جهاز إلكتروني يستخدم لمعالجة البيانات وتحويلها إلى معلومات مفيدة"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="جهاز إلكتروني يستخدم لعرض المعلومات فقط"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="جهاز إلكتروني يستخدم للتواصل مع أجهزة الحاسب الآلي الأخرى فقط"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="2">
                              <p>
                                ما هي الوظيفة الرئيسية للوحدة المركزية للمعالجة
                                (CPU)؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer2">
                          <v-radio
                            label="تخزين البيانات"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="عرض المعلومات"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="تنفيذ العمليات الحسابية والمنطقية"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="3">
                              <p>
                                ما هي وحدات الإدخال التي تُستخدم لإدخال البيانات
                                إلى الحاسب الآلي؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer3">
                          <v-radio
                            label="الشاشة، والطابعة، والسماعات"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="لوحة المفاتيح، والماوس، والماسح الضوئي"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="القرص الصلب، والقرص المضغوط"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="4">
                              <p>
                                ما هي وحدات الإخراج التي تُستخدم لعرض المعلومات؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer4">
                          <v-radio
                            label="لوحة المفاتيح، والماوس، والماسح الضوئي"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="الشاشة، والطابعة، والسماعات"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="القرص الصلب، والقرص المضغوط"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="5">
                              <p>ما هي وظيفة وحدات التخزين؟</p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer5">
                          <v-radio
                            label="عرض المعلومات"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="معالجة البيانات"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="تخزين البيانات بشكل دائم أو مؤقت"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="6">
                              <p>
                                ما هي بعض استخدامات الحاسب الآلي في التعليم؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer6">
                          <v-radio
                            label="كتابة الأبحاث، وإجراء الحسابات، وعرض العروض التقديمية"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="مشاهدة الأفلام، والاستماع إلى الموسيقى، ولعب الألعاب"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="إدارة المشاريع، والتواصل مع العملاء"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="7">
                              <p>
                                ما هي بعض مهارات استخدام الحاسب الآلي الأساسية؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer7">
                          <v-radio
                            label="استخدام لوحة المفاتيح والماوس، وإدارة الملفات والمجلدات"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="كتابة البرامج لتشغيل الحاسب الآلي"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="استخدام برامج معالجة النصوص، وبرامج جداول البيانات، وبرامج العروض التقديمية"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="8">
                              <p>
                                ما هي بعض مهارات استخدام الحاسب الآلي المتقدمة؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer8">
                          <v-radio
                            label="استخدام لوحة المفاتيح والماوس، وإدارة الملفات والمجلدات"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="كتابة البرامج لتشغيل الحاسب الآلي"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="استخدام برامج معالجة النصوص، وبرامج جداول البيانات، وبرامج العروض التقديمية"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="9">
                              <p>
                                ما هي وظيفة الذاكرة العشوائية (RAM) في الحاسب
                                الآلي؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer9">
                          <v-radio
                            label="تخزين البيانات بشكل دائم"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="معالجة البيانات"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="تخزين البيانات والبرامج مؤقتًا أثناء عمل الحاسب الآلي
                            "
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>

                        <v-col cols="12">
                          <ol>
                            <li value="10">
                              <p>
                                بما أن اللوحة الأم تُشبه العمود الفقري للحاسب
                                الآلي، فما هي وظيفتها الرئيسية؟
                              </p>
                            </li>
                          </ol>
                        </v-col>
                        <v-radio-group dir="rtl" v-model="quesAnswer10">
                          <v-radio
                            label="توفير الطاقة لجميع مكونات الحاسب الآلي"
                            value="incorrect"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="تخزين البيانات والبرامج التي يتم استخدامها حاليًا"
                            value="false"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio
                          ><v-radio
                            label="ربط جميع مكونات الحاسب الآلي ببعضها البعض"
                            value="correct"
                            color="#20BF55"
                            false-icon="mdi-cancel"
                            true-icon="mdi-hand-pointing-left"
                          ></v-radio>
                        </v-radio-group>
                        <v-col
                          cols="12"
                          class="d-flex justify-center align-center"
                          style="padding-left: 30%; padding-right: 30%"
                        >
                          <v-btn
                            class="my-5"
                            color="#20BF55"
                            style="
                              letter-spacing: normal;
                              font-size: 20px;
                              padding: 25px;
                            "
                            block
                            variant="tonal"
                            type="submit"
                            @click="submitAnswers"
                            >إرسال الإجابات</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-container>
                  </form>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <messageBox
      :popup="submitMessage"
      v-if="submitMessage"
      @close_popup="submitMessage = false"
    />
    <unsubmitMessage
      :dialog="completeMessage"
      v-if="completeMessage"
      @close_dialog="completeMessage = false"
    />
  </div>
</template>
<script setup>
import messageBox from "../ExamPage/messageBox.vue";
import unsubmitMessage from "../ExamPage/unsubmitMessage.vue";
import { ref, provide } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const name = ref("");
const age = ref();
const email = ref("");
const score = ref(0);
provide("userData", { name, age, email, score });
const submitMessage = ref(false);
const completeMessage = ref(false);
const showForm = ref(false);
const quesAnswer1 = ref(null);
const quesAnswer2 = ref(null);
const quesAnswer3 = ref(null);
const quesAnswer4 = ref(null);
const quesAnswer5 = ref(null);
const quesAnswer6 = ref(null);
const quesAnswer7 = ref(null);
const quesAnswer8 = ref(null);
const quesAnswer9 = ref(null);
const quesAnswer10 = ref(null);

const submitAnswers = () => {
  if (
    !quesAnswer1.value ||
    !quesAnswer2.value ||
    !quesAnswer3.value ||
    !quesAnswer4.value ||
    !quesAnswer5.value ||
    !quesAnswer6.value ||
    !quesAnswer7.value ||
    !quesAnswer8.value ||
    !quesAnswer9.value ||
    !quesAnswer10.value
  ) {
    completeMessage.value = true;
    return; // Exit function early
  }
  // Retrieve selected answers
  const answers = {
    quesAnswer1: quesAnswer1.value,
    quesAnswer2: quesAnswer2.value,
    quesAnswer3: quesAnswer3.value,
    quesAnswer4: quesAnswer4.value,
    quesAnswer5: quesAnswer5.value,
    quesAnswer6: quesAnswer6.value,
    quesAnswer7: quesAnswer7.value,
    quesAnswer8: quesAnswer8.value,
    quesAnswer9: quesAnswer9.value,
    quesAnswer10: quesAnswer10.value,
  };

  // Define correct answers
  const correctAnswers = {
    quesAnswer1: "correct",
    quesAnswer2: "correct",
    quesAnswer3: "correct",
    quesAnswer4: "correct",
    quesAnswer5: "correct",
    quesAnswer6: "correct",
    quesAnswer7: "correct",
    quesAnswer8: "correct",
    quesAnswer9: "correct",
    quesAnswer10: "correct",
  };

  // Calculate total score

  for (const question in answers) {
    if (
      Object.prototype.hasOwnProperty.call(answers, question) &&
      answers[question] === correctAnswers[question]
    ) {
      score.value++;
    }
  }
  submitMessage.value = true;
};

const timeLimit = () => {
  setTimeout(() => {
    router.push({ name: "home" });
  }, 600000);
};
</script>
<style lang="scss">
.register-section {
  h2 {
    color: #e8e5da;
    font-size: 30px;
    font-weight: 800;
    line-height: normal;
  }
  .v-card {
    width: 80%;
    border-radius: 8px;
    box-shadow: 2px 2px 10px #20bf55;
    transition: 0.4s all ease-in-out;
    form {
      width: 80%;
    }
    &:hover {
      box-shadow: 1px 1px 20px #20bf55 !important;
    }
  }
}
.exam-container {
  h2 {
    color: #20bf55;
    font-size: 27px;
    font-weight: 800;
    line-height: normal;
  }
  ul {
    padding: 15px 0 35px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    li {
      color: #e8e5da;
      font-size: 20px;
      line-height: normal;
    }
  }

  .v-card {
    width: 80%;
    border-radius: 8px;
    box-shadow: 2px 2px 10px #20bf55;
    transition: 0.4s all ease-in-out;
    form {
      width: 100%;
      p {
        color: #e8e5da;
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
        text-align: right;
      }

      .v-selection-control {
        padding: 10px 20px;
      }

      .v-selection-control .v-label {
        opacity: 0.8;
      }
    }
    &:hover {
      box-shadow: 1px 1px 20px #20bf55 !important;
    }
  }
}

@media (max-width: 600px) {
  .v-card {
    width: 100% !important;
  }
}
</style>
