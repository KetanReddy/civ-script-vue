<template>
  <div class="addPlayer">
    <h1 class="title">
      Add Player
    </h1>
    <div class="field">
      <label class="label">Player Name</label>
      <div class="control">
        <input
          v-model="player.name"
          class="input"
          type="text"
          placeholder="Text input"
        >
      </div>
    </div>
    <div class="field">
      <label class="label">DLCs Owned</label>
    </div>
    <div class="field is-grouped is-grouped-multiline">
      <label
        v-for="dlc in DLCs"
        :key="dlc.id"
        class="checkbox"
      >
        <input
          v-model="player.dlcsOwned[dlc.id]"
          type="checkbox"
        > {{ dlc.displayName }}
      </label>
    </div>
    <button
      class="button is-primary is-outlined"
      @click="add"
    >
      Add Player
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DLCs, DLC } from '@/types/DLC'
import { Player } from '@/types/Player'
import { mapActions } from 'vuex'



interface PlayerForm {
    name : string,
    dlcsOwned: Record<number,boolean>
}

interface State {
  DLCs: DLC[],
  player: PlayerForm
}

export default defineComponent({
  name: 'Add Player',
  components: {
  },
  data(): State {
    return { 
      DLCs: DLCs,
      player: {
            name: '',
            dlcsOwned:{
              1: true,
              2: true,
              3: true,
              4: true,
              5: true,
              6: true,
              7: true,
              8: true,
              9: true,
              10: true,
              11: true,
              12: true
            } 
      }
    }
  },
  methods:{
    ...mapActions([
      'addPlayer'
    ]),
    add(){
        const id = Date.now()
        const displayName = this.player.name
        const excludedDLCs = DLCs.filter(dlc => !this.player.dlcsOwned[dlc.id])
        const player = new Player(id, displayName, excludedDLCs)
        this.addPlayer(player)
        this.reset()
    },
    reset(){
        this.player.name = ''
        Object.keys(this.player.dlcsOwned).forEach(key => this.player.dlcsOwned[parseInt(key)]=true)
    }
  }
});
</script>

<style lang="scss" scoped>
label.checkbox {
    padding: 2px 10px
}
.button{
    margin-top: 10px
}
</style>