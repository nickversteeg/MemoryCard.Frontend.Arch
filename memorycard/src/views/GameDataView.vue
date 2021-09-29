<template>
  <div>{{ selected.name }}</div>
</template>

<script lang="ts">
import GameDataHandler from "@/dataHandlers/game-data-handler";
import IGame from "@/models/igame";
import GameStore from "@/stores/game-store";
import { container } from "tsyringe";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const gameDataHandler = container.resolve(GameDataHandler);
    const gameStore = container.resolve(GameStore);
    // const selected = computed(() => {
    //   return gameStore.selected;
    // });

    return { gameDataHandler, gameStore };
  },
  computed: {
    selected: function (): IGame {
      return this.gameStore.getState().selected;
    },
  },
});
</script>

<style scoped></style>
