<template>
    <div class="container">
        <div class="manga" v-if="mangaActual.length != 0">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a :href="'/'+mangaActual.category" class="is-capitalized">{{ mangaActual.category }}</a></li>
                    <li class="is-active"><a href="#">{{ mangaActual.name }}</a></li>
                </ul>
            </nav>
            <div class="columns">
                <div class="column is-two-fifths">
                    <img :src="mangaActual.image"/>
                </div>
                <div class="column">
                    <h1 class="title is-1">{{ mangaActual.name }}</h1>
                    <label class="label">Autor:</label>
                    <span>{{ mangaActual.author }}</span>
                    <label class="label pt-4">Género:</label>
                    <span>{{ mangaActual.genre }}</span>
                    <label class="label pt-4">Precio:</label>
                    <span>{{ mangaActual.price }}€</span>
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
            <div class="tabs is-boxed">
                <ul>
                    <li class="is-active"><a>Comentarios</a></li>
                </ul>
            </div>
        </div>
        

        <div class="merch" v-if="articuloActual.length != 0">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/merchandising">Merchandising</a></li>
                    <li class="is-active"><a href="#">{{ articuloActual.name }}</a></li>
                </ul>
            </nav>
            <div class="columns">
                <div class="column is-two-fifths">
                    <img :src="articuloActual.image"/>
                </div>
                <div class="column">
                    <h1 class="title is-1">{{ articuloActual.name }}</h1>
                    <label class="label">Fabricante:</label>
                    <span>{{ articuloActual.manufacturer }}</span>
                    <label class="label pt-4">Tipo:</label>
                    <span class="is-capitalized">{{ articuloActual.type }}</span>
                    <label class="label pt-4">Precio:</label>
                    <span>{{ articuloActual.price }}€</span>
                    <p class="pt-6 pb-5 has-text-justified">{{ articuloActual.description }}</p>
                    <hr>
                    <div class="buttons">
                        <img src="https://img.icons8.com/material-sharp/24/000000/filled-like.png" class="pb-2"/>
                        <label class="label pl-1">{{ articuloActual.likes }}</label>
                        <img src="https://img.icons8.com/material-sharp/24/000000/dislike.png" class="pb-2 pl-4"/>
                        <label class="label pl-1">{{ articuloActual.dislikes }}</label>
                        <button class="button is-danger">Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div class="tabs is-boxed">
                <ul>
                    <li class="is-active"><a>Comentarios</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "~/plugins/firebase"
import { collection, getDocs } from 'firebase/firestore'

export default {
    created() {
        this.getManga(),
        this.getItem()
    },
    data() {
        return {
            mangaActual: [],
            articuloActual: []
        }
    },
    methods: {
        async getManga() {
            const response = await getDocs(collection(db,'mangas'))
            response.forEach(doc => {
                if(doc.data().id == this.$route.params.name) this.mangaActual = doc.data()
            })
        },
        async getItem() {
            const response = await getDocs(collection(db,'merchandising'))
            response.forEach(doc => {
                if(doc.data().id == this.$route.params.name) this.articuloActual = doc.data()
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