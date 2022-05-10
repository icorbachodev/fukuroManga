<template>
    <div>
        <div class="container">
            <h1 class="title is-1 has-text-centered">{{$route.params.category}}</h1>
            <hr>
            <div class="columns is-multiline">
                <MangaCard
                :imagen="manga.image" 
                :nombre="manga.name"
                :categoria="manga.category"
                :genero="manga.genre"
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
                if(this.$route.params.category == 'Completo') this.mangas.push(doc.data())
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
</style>