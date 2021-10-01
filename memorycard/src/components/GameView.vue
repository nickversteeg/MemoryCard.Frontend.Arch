<template>
  <div class="column is-6">
    <h1 class="title" v-if="selectedGame">
      {{ selectedGame.name }}
    </h1>
    <h1 class="title" v-else>No</h1>
    <input type="button" value="Update games" class="button" />
  </div>
</template>

<script lang="ts">
import IGame from "@/models/igame";
import GameStore from "@/stores/game-store";
import GameService from "@/services/game-service";
import { container } from "tsyringe";
import { defineComponent } from "vue";

const gameStore = container.resolve(GameStore);
const gameService = container.resolve(GameService);

export default defineComponent({
  setup() {
    return { gameService, gameStore };
  },
  computed: {
    games: function (): IGame[] {
      return gameStore.games;
    },
    selectedGame: function (): IGame {
      return gameStore.selected;
    },
  },
});
</script>
