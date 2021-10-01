<template>
  <nav
    id="nav"
    class="navbar navbar-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/">Home</router-link>
        <router-link to="/data">Data</router-link>
      </div>
      <nav class="end">
        <div v-if="username">
          {{ username }}
        </div>
        <div v-else>
          <slot></slot>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    username: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
