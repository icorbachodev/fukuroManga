<template>
    <div class="container">
        <div class="columns pt-5">
            <div class="column is-two-fifths">
                <img :src="mangaActual.image"/>
            </div>
            <div class="column">
                <h1 class="title is-1">{{ mangaActual.name }}</h1>
                <label class="label">Autor:</label>
                <span>{{ mangaActual.author }}</span>
                <label class="label pt-4">Género:</label>
                <span>{{ mangaActual.genre }}</span>
                <label class="label pt-4">Categoria:</label>
                <span>{{ mangaActual.category }}</span>
                <p class="pt-6 pb-5 has-text-justified">{{ mangaActual.description }}</p>
                <hr>
                <div class="buttons">
                    <img src="https://img.icons8.com/material-sharp/24/000000/filled-like.png" class="pb-2"/>
                    <label class="label pl-1">{{ mangaActual.likes }}</label>
                    <img src="https://img.icons8.com/material-sharp/24/000000/dislike.png" class="pb-2 pl-4"/>
                    <label class="label pl-1">{{ mangaActual.dislikes }}</label>
                    <button class="button is-danger">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "~/plugins/firebase"
import { collection, getDocs } from 'firebase/firestore'

export default {
    created() {
        this.getManga()
    },
    data() {
        return {
            mangaActual: []
        }
    },
    methods: {
        async getManga() {
            const response = await getDocs(collection(db,'mangas'))
            response.forEach(doc => {
                if(doc.data().id == this.$route.params.name) this.mangaActual = doc.data()
            })
        }
    }
}
</script>

<style scoped>
    button {
        margin-left: auto;
    }
</style>