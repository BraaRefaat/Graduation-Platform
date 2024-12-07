<template>
  <div>
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#0F172A',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#20BF55',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'top',
            enable: true,
            outMode: 'out',
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 15,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ['polygon', 'triangle', 'circle', 'square'],
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import appLayout from "./components/global/appLayout.vue";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async (engine) => {
  //await loadFull(engine);
  await loadSlim(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<style lang="scss">
@font-face {
  font-family: khebrat;
  src: url(../public/Fonts/18\ Khebrat\ Musamim\ Regular.ttf);
}
#app {
  font-family: khebrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
