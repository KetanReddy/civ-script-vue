import { Civ, CivList } from '@/types/Civ';
import { Player } from '@/types/Player';
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
interface State {
  players: Array<Player>,
  civPool: Array<Civ>
}

const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    players: [],
    civPool: CivList.sort(function() { return 0.5 - Math.random();})
  },
  mutations: {
    addPlayer(state,player){
      state.players.push(player)
    },
    removePlayer(state,id){
      state.players = state.players.filter(player => player.id != id)
    },
    rollCivs(state){
      state.players = state.players.map(player => {
        const playerPicks: Array<Civ> = []
        while(playerPicks.length <= 3){
          const potentialPick =  state.civPool.pop()
          if (potentialPick === undefined){
            break
          }
          //check to see if potential civ is in exclusion list
          if(player.excludedDLCs.filter(dlc => dlc.id === potentialPick.dlcPack).length === 0){
            playerPicks.push(potentialPick)
          }
          else {
            state.civPool.unshift(potentialPick)
          }
        }
        player.picks = playerPicks
        return player
      })
    },
    makePick(state, payload){
      const targetPlayer =  payload.targetPlayer
      const civChoice =  payload.civChoice
      state.players = state.players.map(player => {
        if (player.id ===  targetPlayer){
          player.deathPick = false
          player.finalPick = civChoice
          state.civPool.push(...player.picks.filter(civ => civ !== civChoice))
        }
        return player
      })

    },
    markDeathPick(state, targetPlayer){
      state.players = state.players.map(player => {
        if (player.id ===  targetPlayer){
          player.deathPick = true
          state.civPool.push(...player.picks)
        }
        return player
      })
    },
    makeDeathPick(state, targetPlayer){
      state.players = state.players.map(player => {
        if (player.id ===  targetPlayer){
          let deathPick =  state.civPool.pop()
          while(true){
            if (deathPick === undefined){
              return player
            } else if(player.excludedDLCs.filter(
                dlc => deathPick !== undefined 
                && dlc.id === deathPick.dlcPack).length === 0){
              break
            } else {
              state.civPool.unshift(deathPick)
              deathPick = state.civPool.pop()
            } 
          }
          player.finalPick = deathPick
        }
        return player
      })
    }
  },
  actions: {
    addPlayer ({commit}, player){
      commit('addPlayer', player)
    },
    removePlayer({commit}, id){
      commit('removePlayer', id)
    },
    rollCivs({commit}){
      commit('rollCivs')
    },
    makePick({commit}, payload){
      commit('makePick', payload)
    },
    markDeathPick({commit}, payload){
      commit('markDeathPick', payload)
    },
    makeDeathPick({commit}, payload){
      commit('makeDeathPick',  payload)
    }
  },
  getters: {
    players: state => {
      return state.players
    },
    deathPicks: state => {
      return state.players.filter(player => player.deathPick)
    }
  },
});
