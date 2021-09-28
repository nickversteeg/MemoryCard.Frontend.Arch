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
  name: "Home",
  components: {
    GamesListView,
    GameView,
  },
});
</script>
