<template>
  <div class="picker">
    <table class="table table is-fullwidth">
      <thead>
        <tr>
          <th>Player</th>
          <th>Civ 1</th>
          <th>Civ 2</th>
          <th>Civ 3</th>
          <th>Pick</th>
          <th>Confirm</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="player in players"
          :key="player.id"
        >
          <th>{{ player.displayName }}</th>
          <td>
            {{ player.picks[0].leaderName }} leading {{ player.picks[0].civName }}
          </td>
          <td>
            {{ player.picks[1].leaderName }} leading {{ player.picks[1].civName }}
          </td>
          <td>
            {{ player.picks[2].leaderName }} leading {{ player.picks[2].civName }}
          </td>
          <td>
            <div
              v-if="!player.deathPick && player.finalPick === null"
              class="select"
            >
              <select v-model="playerPicks[player.id]">
                <option
                  disabled
                  value=""
                >
                  Select Pick
                </option>
                <option :value="player.picks[0]">
                  {{ player.picks[0].leaderName }}/{{ player.picks[0].civName }}
                </option>
                <option :value="player.picks[1]">
                  {{ player.picks[1].leaderName }}/{{ player.picks[1].civName }}
                </option>
                <option :value="player.picks[2]">
                  {{ player.picks[2].leaderName }}/{{ player.picks[2].civName }}
                </option>
                <option>Death Pick</option>
              </select>
            </div>
            <div v-else-if="player.finalPick !== null">
              <b>{{ player.finalPick.leaderName }}/{{ player.finalPick.civName }}</b>
            </div>
            <div v-else-if="player.deathPick">
              <b>Death Pick</b>
            </div>
          </td>
          <td>
            <button
              class="button is-success"
              :disabled="player.deathPick || player.finalPick !== null || !playerPicks[player.id]"
              @click="makeSelection(player.id)"
            >
              Confirm Selection
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link
      v-if="deathPicks.length > 0"
      to="/death"
    >
      <button class="button is-primary">
        Death Picks
      </button>
    </router-link>
    <router-link
      v-else
      to="/final"
    >
      <button class="button is-primary">
        See Results
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Civ } from '@/types/Civ';
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex'

interface State {
  playerPicks: Record<number,Civ|string>
}

export default defineComponent({
  name: 'Civ Picker',
  components: {
  },
  computed: {
    ...mapGetters([
      'players',
      'deathPicks'
    ])
  },
  data(): State {
    return { 
      playerPicks:{
      }
    }
  },
  methods: {
    ...mapActions([
      'makePick',
      'markDeathPick'
    ]),
    makeSelection(playerId: number){
      const playerChoice: Civ|string = this.playerPicks[playerId]
      if (typeof playerChoice === 'object'){
        this.makePick({targetPlayer:playerId, civChoice: playerChoice})
      } else if (typeof playerChoice === 'string') {
        this.markDeathPick(playerId)
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.picker{
  margin: 15px;
}
</style>