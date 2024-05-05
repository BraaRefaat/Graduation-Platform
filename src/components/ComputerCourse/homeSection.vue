<template>
  <div class="home-section">
    <v-container>
      <v-row dir="rtl">
        <v-col cols="7" class="d-flex align-center justify-center">
          <p>
            مرحبًا بك في عالم الحاسب الآلي! في هذه الدروس، سنغوص في رحلة شيقة
            لاكتشاف أساسيات هذا الجهاز المُذهل الذي غيّر حياتنا بشكل جذري. سنبدأ
            بتعريف بسيط للحاسب الآلي ومكوناته الأساسية، ثم سنتعرف على وظائفه
            واستخداماته المتنوعة
          </p>
        </v-col>
        <v-col cols="5" class="d-flex align-center justify-end">
          <img
            src="../../assets/computer-image1.jpg"
            width="400"
            height="450"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.home-section {
  height: 90vh;
  p {
    color: #e8e5da;
    font-size: 27px;
    font-weight: 800;
    line-height: normal;
  }
  img {
    border-radius: 8px;
    box-shadow: 2px 2px 10px #20bf55;
    transition: 0.4s all ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 1px 1px 20px #20bf55 !important;
    }
  }
}
</style>
