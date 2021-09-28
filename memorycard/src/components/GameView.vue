<template>
  <div class="column is-6">
    <h1 class="title" v-if="gameStore.selected">
      {{ gameStore.selected.name }}
    </h1>
    <h1 class="title" v-else>No</h1>
    <input type="button" value="Update games" class="button" />
  </div>
</template>

<script lang="ts">
import GameStore from "@/stores/game-store";
import Game from "@/models/game";
import IGame from "@/models/igame";
import { container } from "tsyringe";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const gameStore = container.resolve(GameStore);

    return { gameStore };
  },
});
</script>
