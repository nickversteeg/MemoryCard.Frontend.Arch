<template>
  <div class="field">
    <div class="user icon">
      <input
        type="text"
        name="password"
        id="password"
        placeholder="Password"
        autocomplete="off"
        v-model="input"
        @keyup="validate"
      />
    </div>
    <div class="field-error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    let input = ref("");
    let error = ref("");
    const validate = () => {
      return input.value === "" ? "This field is required" : "";
    };
    return { input, error, validate };
  },
});
</script>

<style scoped></style>
