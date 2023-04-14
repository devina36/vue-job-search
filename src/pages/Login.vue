<template>
  <div class="container">
    <div class="boxWrapper">
      <div class="box">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <InputText :type="'text'" v-model="email" :label="'Email'" />
          <InputText :type="'password'" v-model="password" :label="'Password'" />
          <Button :buttonText="'Login'" :type="'submit'"></Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import InputText from '@/components/InputText.vue';
import axios from 'axios';

export default {
  components: {
    InputText,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      axios
        .post('https://reqres.in/api/login', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem('auth', true);
          this.$router.push('/');
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.boxWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.box {
  width: 35%;
  padding: 30px;
  height: fit-content;
  background-color: white;
  border-radius: 8px;
}
h2 {
  text-align: center;
  margin-bottom: 40px;
}
form {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
input {
  display: inline-block;
}
</style>

<style scoped>
.container {
  min-height: 100vh;
  padding: 0 30px;
}
</style>
