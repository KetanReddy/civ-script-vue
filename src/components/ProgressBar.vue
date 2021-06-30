<template>
  <div class="stepper">
    <ul class="steps has-content-centered">
      <li
        class="steps-segment"
        :class="{ 'is-active': activeStep === 'start' }"
      >
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">
            Add Players
          </p>
        </div>
      </li>
      <li
        class="steps-segment"
        :class="{ 'is-active': activeStep === 'roll' }"
      >
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">
            Roll Civilizations
          </p>
        </div>
      </li>
      <li
        class="steps-segment"
        :class="{ 'is-active': activeStep === 'death' }"
      >
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">
            Death Picks
          </p>
        </div>
      </li>
      <li
        class="steps-segment"
        :class="{ 'is-active': activeStep === 'final' }"
      >
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">
            Final Results
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Progress Bar',
  components: {
  },
  props: ['activeStep'],
});
</script>

<style lang="scss" scoped>
.stepper{
    padding: 15px 0
}
</style>