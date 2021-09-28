<template>
  <div class="column is-6">
    <div v-for="game in gameStore.games" :key="game.id">
      {{ game.name }}
      <GamesListGameView :game="game" />
    </div>
  </div>
</template>

<script lang="ts">
import GameStore from "@/stores/game-store";
import axios from "axios";
import { container } from "tsyringe";
import { defineComponent, onMounted } from "vue";
import GamesListGameView from "./GamesListGameView.vue";

export default defineComponent({
  setup() {
    const gameStore = container.resolve(GameStore);

    onMounted(() => {
      axios({
        method: "POST",
        baseURL: `${process.env.VUE_APP_M3C_API_URL}`,
        url: "/games",
        headers: {
          Authorization: `${process.env.VUE_APP_M3C_AUTH_KEY}`,
          "Client-ID": `${process.env.VUE_APP_M3C_CLIENT_ID}`,
        },
        data: "fields *, screenshots.*; limit 12;",
      }).then((response) => {
        gameStore.games = response.data;
        console.log(response.data);
        gameStore.selected = gameStore.games[0];
      });
    });

    return {
      gameStore,
    };
  },
  components: { GamesListGameView },
});
</script>
