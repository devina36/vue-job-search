<template>
  <button class="btn" :type="type">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: ['buttonText', 'type'],
};
</script>

<style scoped>
button {
  text-decoration: none;
  list-style: none;
  background-color: #cab3e1;
  color: black;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px 0;
  font-weight: 700;
}

button:hover {
  background-color: #d3cbdb;
  cursor: pointer;
}
</style>
