<template>
  <div
    class="game-card columns"
    :class="{ selected: selected && selected.id === game.id }"
    @click="setActiveGame(game)"
  >
    <div class="column is-4">
      <img :src="image_url" alt="" />
    </div>
    <div class="column is-8">
      <h1 class="title">{{ game.name }}</h1>
      <p>{{ game.summary }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { container } from "tsyringe";
import IGame from "@/models/igame";
import GameStore from "@/stores/game-store";
import GameDataHandler from "@/dataHandlers/game-data-handler";

export default defineComponent({
  props: {
    game: {
      type: Object as PropType<IGame>,
    },
  },
  setup() {
    const gameStore = container.resolve(GameStore);
    const gameDataHandler = container.resolve(GameDataHandler);
    const setActiveGame = function (game: IGame) {
      if (game) gameDataHandler.setSelectedGame(game.id);
    };
    return { gameStore, gameDataHandler, setActiveGame };
  },
  computed: {
    selected() {
      return this.gameStore.getState().selected;
    },
    image_url() {
      if (!this.game) return "";
      let attrs = this.game.image_url.split("/");
      console.log(attrs);
      attrs[6] = "t_cover_big";
      return attrs.join("/");
    },
  },
});
</script>

<style scoped>
.game-card {
  border: 1px solid lightgrey;
  border-radius: 10px;

  margin: 2em;
  padding: 1em;
  overflow: hidden;
  height: 250px;
}

.selected {
  box-shadow: 0px 0px 5px magenta;
}
</style>
