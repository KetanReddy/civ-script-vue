<template>
  <div class="home">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          Civilization 6 Multiplayer Civilization Picker
        </p>
      </div>
    </section>
    <progress-bar :active-step="currentStep" />
    <div class="stepper">
      <router-view />
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProgressBar from "@/components/ProgressBar.vue"

export default defineComponent({
  name: 'Home',
  components: {
    ProgressBar
  },
  data() {
    return { 
      state: "start" 
    }
  },
  computed: {
    currentStep() {
        return this.$route.name;
    }
  },
});
</script>

<style lang="scss" scoped>
.stepper{
  margin: 0 15px
}
</style>
