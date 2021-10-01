<template>
  <div class="columns">
    <GamesListView />
    <GameView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GamesListView from "@/components/GamesListView.vue";
import GameView from "@/components/GameView.vue";

export default defineComponent({
  components: {
    GamesListView,
    GameView,
  },
});
</script>
