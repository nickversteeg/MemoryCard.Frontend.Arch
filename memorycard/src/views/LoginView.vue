<template>
  <form action="" method="post">
    <InputUsername v-model="username" />
    <InputPassword v-model="password" />
    <input type="button" class="button" value="Submit" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputUsername from "@/components/form/InputUsername.vue";
import InputPassword from "@/components/form/InputPassword.vue";

export default defineComponent({
  components: { InputUsername, InputPassword },

  setup() {
    let username = ref("");
    let password = ref("");
    return { username, password };
  },
});
</script>

<style scoped></style>
