<template>
  <div class="container">
    <div class="columns is-multiline">
      <MangaCard
      :imagen="manga.image" 
      :nombre="manga.name"
      :autor="manga.author"
      :genero="manga.genre"
      :descripcion="manga.description"
      precio="8.00"
      :likes="manga.likes"
      v-on:onLikeButton="sumLikes(manga)"
      v-for="(manga, index) in mangas"
      :key="index"
      class="manga-card"
      />
    </div>
  </div>
</template>

<script>
import MangaCard from "~/components/MangaCard"
import Hero from "~/components/Hero"
import api from "~/services/api"
import { db } from "~/plugins/firebase"
import { collection, getDocs } from 'firebase/firestore'

export default {
  components: {
    MangaCard,
    Hero
  },
  async created() {
    const response = await getDocs(collection(db,'mangas'))
    response.forEach(doc => {
      this.mangas.push(doc.data())
    }) 
  },
  data() {
    return {
      likes: 0,
      mangas: [],
      email: '',
      is_subscribe: false
    }
  },
  methods: {
    async sumLikes(manga) {
      const payload = {
        id: manga.id,
        data: {
          likes: manga.likes + 1
        }
      }
      const response = await api.putSumMangaLikes(payload)
      if(response.status == 200) {
        manga.likes++
      }
    },

    async subscribe() {
      const payload = {
        email: this.email
      }
      const response = await api.postSubcribeUser(payload)
      if(response.status == 201) { // 201 : Created
        this.is_subscribe = true
      }
    }
  
  }
}
</script>

<style scoped>
  .email {
    width: 80%;
  }

  .manga-card {
    margin: 10px 10px;
    width: 322px;
  }
</style>
