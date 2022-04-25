<template>
  <div class="container">
    <Hero>
      <div slot="header">
        <p>Soy el slot desde el padre index.vue</p>
      </div>
    </Hero>
    <MangaCard 
      nombre="Jujutsu Kaisen"
      autor="Gege Akito"
      genero="Fantasia Oscura"
      descripcion="Hechiceros contra maldiciones mah que guapo chaval"
      precio="8.00"
      :likes="likes"
      v-on:onLikeButton="sumLikes"
    />
  </div>
</template>

<script>
import MangaCard from "~/components/MangaCard"
import Hero from "~/components/Hero"

export default {
  components: {
    MangaCard,
    Hero
  },
  data() {
    return {
      likes: 0
    }
  },
  methods: {
    sumLikes() {
      this.likes++
    }
  }
}
</script>
