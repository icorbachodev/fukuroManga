<template>
    <div>
        <div class="container pb-5">
            <h1 class="title is-1 has-text-centered is-capitalized">{{$route.params.category}}</h1>
            <hr>
            <div class="columns is-multiline is-mobile">
                <MangaCard
                :id='manga.id'
                :imagen="manga.image" 
                :nombre="manga.name"
                :categoria="manga.category"
                :genero="manga.genre"
                :precio="manga.price"
                v-for="(manga, index) in mangas"
                :key="index"
                class="manga-card"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MangaCard from "~/components/MangaCard"
import { db } from "~/plugins/firebase"
import { collection, getDocs } from 'firebase/firestore'

export default {
    components: {
        MangaCard
    },
    created() {
        this.getMangas()
    },
    data() {
        return {
            mangas: []
        }
    },
    methods: {
        async getMangas() {
            const response = await getDocs(collection(db,'mangas'))
            response.forEach(doc => {
                if(doc.data().category == this.$route.params.category) this.mangas.push(doc.data())
                if(this.$route.params.category == 'completo') this.mangas.push(doc.data())
            }) 
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