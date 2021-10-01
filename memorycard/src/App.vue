<template>
  <NavBarView>Not currently logged in</NavBarView>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navbar-dark {
  background-color: #666;
  color: white;
  padding: 10px !important;
  margin-bottom: 25px !important;
}

.navbar-dark a {
  color: white !important;
  border: 1px solid #999;
  border-radius: 10px;
  margin: 5px 10px;
  padding: 5px 10px;
}

.navbar-dark a.router-link-active {
  color: lightgreen !important;
}
</style>

<script>
import { container } from "tsyringe";
import GameDataHandler from "@/dataHandlers/game-data-handler";
import { defineComponent } from "vue";
import GameStore from "./stores/game-store";
import NavBarView from "@/components/NavBarView.vue";

export default defineComponent({
  components: {
    NavBarView,
  },
  setup() {
    const gameDataHandler = container.resolve(GameDataHandler);
    const gameStore = container.resolve(GameStore);
    return { gameDataHandler, gameStore };
  },
  computed: {
    name() {
      return this.gameStore.getState().selected.name;
    },
  },
});
</script>
