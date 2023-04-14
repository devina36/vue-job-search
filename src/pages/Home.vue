<template>
  <navbar></navbar>
  <main class="container">
    <forms></forms>
  </main>
</template>

<script>
import Forms from '@/components/Form.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
    Forms,
  },
};
</script>

<style>
.container {
  padding: 0 30px;
}

main {
  margin-top: 30px;
}
</style>
