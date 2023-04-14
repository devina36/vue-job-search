<template>
  <nav>
    <div class="container">
      <div class="wrap">
        <h1 class="logo">Job Search</h1>
        <button class="btnLogOut" @click="logout">Log Out</button>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  methods: {
    logout() {
      localStorage.setItem('auth', false);
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #cab3e1;
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  padding: 5px 20px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
}

h1 {
  padding: 10px 0;
  font-weight: 700;
  font-size: 24px;
}
</style>
