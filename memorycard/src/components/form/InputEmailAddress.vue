<template>
  <div class="field">
    <div class="email icon">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email Address"
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
