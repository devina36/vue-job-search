<template>
  <div class="wrapperBox">
    <div class="box">
      <form @submit.prevent="fetchData">
        <InputText :type="'text'" v-model="params" :label="'Search'" />
        <Button :buttonText="'Submit'" :type="'submit'"></Button>
      </form>
    </div>
    <div class="wrapJobs">
      <div v-if="!datas.length && !loading" class="no">No Item</div>
      <div v-else-if="loading">Loading</div>
      <div v-else-if="!loading" v-for="(data, index) in datas" class="data" :key="index">
        <h4>{{ data.job_title }}</h4>
        <h5>{{ data.job_city }} - {{ data.job_employment_type }}</h5>
        <p>{{ data.employer_company_type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from './InputText.vue';
import Button from './Button.vue';
import axios from 'axios';

export default {
  components: {
    InputText,
    Button,
  },
  data() {
    return {
      cost: '',
      datas: [],
      loading: false,
      params: '',
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      await axios
        .get(`https://jsearch.p.rapidapi.com/search`, {
          headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
          },
          params: { query: this.params, num_pages: 1 },
        })
        .then((res) => {
          const data = res.data.data;
          this.datas = data;
          this.params = '';
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.wrapperBox {
  display: flex;

  gap: 30px;
}

.no {
  color: grey;
  text-align: center;
}

.wrapJobs {
  width: 65%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

.data {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
h5,
p {
  color: gray;
}
</style>
