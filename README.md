## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### LOGIN

"email": "eve.holt@reqres.in"
"password": "cityslicka"

menggunakan api reqres untuk login dan rapid api untuk job search, pada rapid api mengambil key dari file .env

## PENJELASAN

pada aplikasi ini hanya terdapat 2 route yaitu '/' untuk halaman HOME dan '/login' untuk halaman login, aplikasi ini hanya sederhana yaitu dengan membuat penggunanya harus login terlebih dahulu jika ingin menuju halaman selain login, jika sudah login maka akan di route menuju ke halaman Home. Jika pengguna user tidak melakukan logout maka user tidak dapat kembali/menuju ke halaman login. Pada halaman home digunakan untuk job search sesuai inputan user
