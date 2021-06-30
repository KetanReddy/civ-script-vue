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
          v-for="player in deathPicks"
          :key="player.id"
        >
          <th>{{ player.displayName }}</th>
          <td>
            <div v-if="player.finalPick === null">
              <button
                class="button is-danger"
                @click="makeSelection(player.id)"
              >
                Make Death Pick
              </button>
            </div>
            <div v-else>
              <b>{{ player.finalPick.leaderName }}/{{ player.finalPick.civName }}</b>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/final">
      <button class="button is-primary">
        Final Results
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex'


export default defineComponent({
  name: 'Death Picker',
  components: {
  },
  computed: {
    ...mapGetters([
      'deathPicks',
    ])
  },
  data() {
    return { 
    }
  },
  methods: {
    ...mapActions([
      'makeDeathPick'
    ]),
    makeSelection(playerId: number){
      this.makeDeathPick(playerId)
    }
  }
});
</script>

<style lang="scss" scoped>
.picker{
  margin: 15px;
}
</style>