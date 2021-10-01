<template>
  <div class="column is-6">
    <GamesListGameView :game="game" v-for="game in games" :key="game.id" />
  </div>
</template>

<script lang="ts">
import { container } from "tsyringe";
import { defineComponent } from "vue";
import GamesListGameView from "./GamesListGameView.vue";
import IGame from "@/models/igame";
import GameStore from "@/stores/game-store";
import GameService from "@/services/game-service";

export default defineComponent({
  setup() {
    const gameStore = container.resolve(GameStore);
    const gameService = container.resolve(GameService);
    return { gameStore, gameService };
  },
  components: { GamesListGameView },
  computed: {
    games: function (): IGame[] {
      return this.gameStore.getState().games;
    },
  },
});
</script>
