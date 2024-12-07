<template>
  <div class="courses-section">
    <v-container>
      <v-row dir="rtl">
        <v-col
          cols="12"
          class="d-flex align-center justify-center"
          data-aos="fade-down"
        >
          <h2>
            <span>الكورسات المتاحة</span>
          </h2>
        </v-col>
        <v-row class="mt-10">
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="4"
              xl="4"
              class="px-12 d-flex flex-column align-center justify-center mb-8"
              v-for="course in courses"
              :key="course.id"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <v-card
                color="#0f172a"
                class="pb-6 transition-card"
                :key="'card-' + course.id"
                :style="{ height: showDescription[course.id] ? 'auto' : '' }"
              >
                <div
                  class="image-container"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="500"
                  data-aos-duration="5000"
                >
                  <img :src="course.image" style="height: 350px" alt="" />
                </div>
                <div class="px-3 pt-4">
                  <v-card-title
                    style="
                      color: #20bf55;
                      letter-spacing: normal;
                      font-size: 25px;
                      font-weight: 800;
                      padding-bottom: 16px;
                    "
                    data-aos="fade-left"
                    data-aos-duration="5000"
                  >
                    {{ course.title }}
                  </v-card-title>
                  <!-- Toggle Button -->
                  <v-btn
                    color="#20BF55"
                    variant="outlined"
                    rounded="xl"
                    style="letter-spacing: normal; font-size: 17px; width: 70%"
                    @click="toggleDescription(course.id)"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {{
                      showDescription[course.id]
                        ? "إخفاء التفاصيل"
                        : "عرض التفاصيل"
                    }}
                  </v-btn>
                  <v-card-text
                    :class="{
                      'course-details-show': showDescription[course.id],
                    }"
                    class="course-details"
                    style="
                      letter-spacing: normal;
                      line-height: normal;
                      font-size: 20px;
                      font-weight: 400;
                      margin-top: 10px;
                    "
                  >
                    {{ course.description }}
                  </v-card-text>
                  <v-btn
                    color="#20BF55"
                    variant="flat"
                    :disabled="course.availability ? false : true"
                    rounded="xl"
                    style="
                      letter-spacing: normal;
                      font-size: 17px;
                      color: #0f172a;
                      width: 100%;
                    "
                    @click="$router.push({ name: course.link })"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    {{ course.availability ? "الذهاب إلى الكورس" : "قريباً" }}
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});

// Course Data
const courses = ref([
  {
    id: 1,
    title: "كورس أساسيات الحاسب الآلي",
    description:
      "في هذا الكورس، سنغوص في رحلة شيقة لاكتشاف أساسيات هذا الجهاز المُذهل الذي غيّر حياتنا بشكل جذري.",
    image:
      "https://images.unsplash.com/photo-1591238372338-22d30c883a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBjfGVufDB8MHwwfHx8MA%3D%3D",
    link: "computer_course",
    availability: true,
  },
  {
    id: 2,
    title: "كورس صيانة الحاسب الآلي",
    description:
      "هذا الكورس يهدف إلى تزويد المشاركين بالمعرفة والمهارات اللازمة لصيانة وإصلاح أجهزة الحاسب الآلي.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "",
    availability: false,
  },
  {
    id: 3,
    title: "كورس أساسيات البرمجة",
    description:
      "هذا الكورس مصمم للمبتدئين الذين يرغبون في دخول عالم البرمجة. يركز على تقديم المفاهيم الأساسية بلفة (++C) مثل المتغيرات، الحلقات، والشروط، بالإضافة إلى مبادئ البرمجة الكائنية التوجه.",
    image:
      "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "",
    availability: false,
  },
  {
    id: 4,
    title: "كورس برمجة المواقع التعليمية (1)",
    description:
      "هذا الكورس مخصص للمبتدئين الذين يرغبون في تعلم كيفية إنشاء مواقع تعليمية تفاعلية.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "",
    availability: false,
  },
]);

// Reactive State for Toggling Description
const showDescription = ref({});

// Initialize all descriptions to be hidden
courses.value.forEach((course) => {
  showDescription.value[course.id] = false;
});

// Toggle the visibility of a course description
const toggleDescription = (id) => {
  showDescription.value[id] = !showDescription.value[id];
};
</script>

<style lang="scss" scoped>
.courses-section {
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 30px 0;
  margin-top: 70px;

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
    width: 90%;
    border-radius: 8px;
    box-shadow: 2px 2px 10px #20bf55;
    transition: 0.4s all ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 1px 1px 20px #20bf55 !important;
    }
    div {
      overflow: hidden;
      max-height: 350px;
      img {
        transition: 0.5s all ease-in-out;
        width: 100%;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .v-card-title {
      text-wrap: wrap;
    }
  }
}
.course-details {
  max-height: 0 !important; /* Start with no height */
  opacity: 0; /* Invisible */
  visibility: hidden; /* Prevent interactions */
  overflow: hidden; /* Prevent content overflow */
  padding: 5px 0;
  transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
}

.course-details-show {
  max-height: 200px !important; /* Adjust as needed for content size */
  opacity: 1; /* Fully visible */
  padding: 1rem;
  visibility: visible; /* Allow interactions */
}
/* media queries */

@media (max-width: 960px) {
  .v-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
