<template>
  <div>
    <label>{{ label }}</label>
    <input
      :type="type"
      class="box-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="`Input your ${label}`"
    />
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'type', 'label'],
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.box-input {
  padding: 10px 20px;
  width: 100%;
  border-radius: 8px;
}

input {
  margin-top: 5px;
}
</style>
