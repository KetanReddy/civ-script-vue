<template>
  <div class="setup">
    <div class="columns">
      <div class="box column form">
        <add-player />
      </div>
      <div class="box column display">
        <h1 class="title">
          Current Players
        </h1>
        <div class="playerList">
          <article
            v-for="player in players"
            :key="player.id"
            class="media"
          >
            <figure class="media-left">
              <strong>{{ player.displayName }}</strong>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <span v-if="player.excludedDLCs.length > 0">
                    <span
                      v-for="dlc in player.excludedDLCs"
                      :key="dlc.id"
                      class="tag is-danger"
                    >{{ dlc.displayName }}
                    </span>
                  </span>
                  <span v-else>
                    <span class="tag is-success">All DLCs
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div class="media-right">
              <button
                class="delete"
                @click="removePlayer(player.id)"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
    <router-link to="/roll">
      <button class="button is-primary">
        Roll Civs
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddPlayer from '@/components/AddPlayer.vue'
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
  name: 'Player Setup',
  components: {
      AddPlayer,
  },
  computed: {
    ...mapGetters([
      'players',
    ])
  },
  data() {
    return { 
    }
  },
  methods: {
      ...mapActions([
      'removePlayer'
    ]),
  }
});
</script>

<style lang="scss" scoped>
.box{
    &.column {
        margin: 15px;
        &.form {
            max-height: 50vh;
        }
        &.display{
            height: 65vh;
            overflow: none;
            .playerList{
                height: 55vh;
                overflow-y: scroll;
                .media-right {
                    padding-right: 5px;
                }
            }
        }
    }
}
.tag {
    margin: 5px
}
</style>