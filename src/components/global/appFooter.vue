<template>
  <div class="footer">
    <v-footer color="#0f172a" absolute height="90" style="z-index: 0">
      <v-container fluid>
        <v-row dir="rtl">
          <v-col cols="12">
            <p>
              منصة التخرج، جميع الحقوق محفوظة &copy;
              {{ new Date().getFullYear() }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<style lang="scss">
.footer {
  p {
    font-size: 17px;
    color: #e8e5da;
  }
}
</style>
