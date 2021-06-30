<template>
  <div class="picker">
    <table class="table table is-fullwidth">
      <thead>
        <tr>
          <th>Player</th>
          <th>Pick</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="player in players"
          :key="player.id"
        >
          <th>{{ player.displayName }}</th>
          <td>
            <b>{{ player.finalPick.leaderName }}/{{ player.finalPick.civName }}</b>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex'


export default defineComponent({
  name: 'Final Results',
  components: {
  },
  computed: {
    ...mapGetters([
      'players',
    ])
  },
});
</script>

<style lang="scss" scoped>
.picker{
  margin: 15px;
}
</style>