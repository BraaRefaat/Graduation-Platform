<template>
  <div class="hero-section">
    <v-container>
      <v-row dir="rtl">
        <v-col cols="12">
          <h1>
            مرحبا بكم في منصة
            <VueWriter :array="['التخرج التعليمية']"> </VueWriter>
          </h1>
          <p class="mt-5">
            يسرنا أن نرحب بكم في موقعنا التعليمي الإلكتروني، حيث نسعى لتقديم
            تجربة تعليمية مميزة وفعالة للطلاب من جميع أنحاء الوطن العربي. يهدف
            موقعنا إلى توفير محتوى تعليمي غني ومتنوع يلبي احتياجات الطلاب في
            مختلف المجالات
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import VueWriter from "vue-writer";
</script>

<style lang="scss">
.hero-section {
  height: 100vh;
  h1 {
    color: #e8e5da;
    font-size: 35px;
    .is-typed span.typed {
      color: #20bf55;
      font-size: 60px;
    }

    .is-typed span.cursor {
      display: inline-block;
      font-size: 50px;
      width: 5px;
      margin-right: 5px;
      background-color: #20bf55;
      animation: blink 1s infinite;
    }

    .is-typed span.underscore {
      display: inline-flex;
      width: 10px;
      height: 1px;
      align-items: flex-end;
      background-color: #20bf55;
      animation: blink 1s infinite;
    }

    .is-typed span.cursor.typing {
      animation: none;
    }

    @keyframes blink {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  p {
    color: #e8e5da;
    font-size: 24px;
    line-height: normal;
  }
}

/* media queries */
@media (max-width: 600px) {
  .is-typed span.typed {
    font-size: 45px !important;
  }
  .is-typed span.cursor {
    font-size: 35px !important;
  }
}
</style>
