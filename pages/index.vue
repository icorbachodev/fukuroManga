<template>
  <div class="container">
    <Hero>
      <div slot="header">
        <input class="input email mb-3" type="email" name="correo" id="correo">
        <button class="button is-danger">Suscribirse</button>
      </div>
    </Hero>
    <MangaCard 
      :nombre="manga.Nombre"
      :autor="manga.Autor"
      :genero="manga.Genero"
      :descripcion="manga.Descripcion"
      precio="8.00"
      :likes="manga.likes"
      v-on:onLikeButton="sumLikes(index)"
      v-for="(manga, index) in mangas"
      :key="index"
    />
  </div>
</template>

<script>
import MangaCard from "~/components/MangaCard"
import Hero from "~/components/Hero"
import api from "~/services/api"

export default {
  components: {
    MangaCard,
    Hero
  },
  async created() {
    const response = await api.getMangas()
    if(response.status == 200) {
      this.mangas = response.data
    }
  },
  data() {
    return {
      likes: 0,
      mangas: []
    }
  },
  methods: {
    sumLikes(index) {
      this.mangas[index].likes++
    }
  }
}
</script>

<style scoped>
  .email {
    width: 80%;
  }
</style>
