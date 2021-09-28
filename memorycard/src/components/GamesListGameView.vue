<template>
  <div class="game-card">
    <h1 class="title">{{ game.name }}</h1>
    <p>{{ game.summary }}</p>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import IGame from "@/models/igame";

export default defineComponent({
  props: {
    game: {
      type: Object as PropType<IGame>,
    },
  },
  setup() {
    return {}
  }
});
</script>

<style scoped></style>
