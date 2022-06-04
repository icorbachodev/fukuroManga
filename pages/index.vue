<template>
  <div class="container">
    <Hero />
    <h1 class="title pt-2">Novedades</h1>
    <hr>
    <div class="columns is-multiline is-mobile">
      <MangaCard
      :id='novedad.id'
      :imagen="novedad.image" 
      :nombre="novedad.name"
      :categoria="novedad.category"
      :genero="novedad.genre"
      :precio="novedad.price"
      v-for="(novedad, index) in novedades"
      :key="index"
      class="manga-card"
      />
    </div>
    <h1 class="title pt-5">Recomendados</h1>
    <hr>
    <div class="columns is-multiline is-mobile pb-5">
      <MangaCard
      :id='recomendado.id'
      :imagen="recomendado.image" 
      :nombre="recomendado.name"
      :categoria="recomendado.category"
      :genero="recomendado.genre"
      :precio="recomendado.price"
      v-for="(recomendado, index) in recomendados"
      :key="index"
      class="manga-card"
      />
    </div>
  </div>
</template>

<script>
import MangaCard from "~/components/MangaCard"
import Hero from "~/components/Hero"
import { db } from "~/plugins/firebase"
import { collection, getDocs } from 'firebase/firestore'

export default {
  components: {
    MangaCard,
    Hero
  },
  created() {
    this.getMangas()  
  },
  data() {
    return {
      likes: 0,
      novedades: [],
      recomendados: []
    }
  },
  methods: {
    async getMangas() {
      const response = await getDocs(collection(db,'mangas'))
      response.forEach(doc => {
        if(doc.data().category == 'novedad') this.novedades.push(doc.data())
        if(doc.data().category == 'recomendado') this.recomendados.push(doc.data())
      })
      this.novedades.splice(4)
      this.recomendados.splice(4) 
    }
  }
}
</script>

<style scoped>
  .manga-card {
    margin: 10px 10px;
    width: 322px;
  }
  
  @media (max-width: 1407px) {
    .manga-card {
      width: 274px;
    }
  }
</style>
