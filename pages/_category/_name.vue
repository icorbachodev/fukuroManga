<template>
    <div class="container">
        <div class="manga" v-if="mangaActual.length != 0">
            <Detail
                :id="id"
                :item="mangaActual.item"
                :nombre="mangaActual.name"
                :imagen="mangaActual.image"
                :fabricante="mangaActual.author"
                :genero="mangaActual.genre"
                :precio="mangaActual.price"
                :descripcion="mangaActual.description"
                :likes="mangaActual.likes"
                :dislikes="mangaActual.dislikes"
                :categoria="mangaActual.category"
                :comentarios="comments"
            />
        </div>
        

        <div class="merch" v-if="articuloActual.length != 0">
            <Detail
                :id="id"
                :item="articuloActual.item"
                :nombre="articuloActual.name"
                :imagen="articuloActual.image"
                :fabricante="articuloActual.manufacturer"
                :precio="articuloActual.price"
                :descripcion="articuloActual.description"
                :likes="articuloActual.likes"
                :dislikes="articuloActual.dislikes"
                :tipo="articuloActual.type"
                :comentarios="comments"
            />
        </div>
    </div>
</template>

<script>
import Detail from "~/components/Detail"
import { db } from "~/plugins/firebase"
import { collection, getDocs } from 'firebase/firestore'

export default {
    components: {
        Detail
    },
    created() {
        this.getManga(),
        this.getItem()
    },
    data() {
        return {
            mangaActual: [],
            articuloActual: [],
            id: '',
            comments: []
        }
    },
    methods: {
        async getManga() {
            const response = await getDocs(collection(db,'mangas'))
            response.forEach(doc => {
                if(doc.data().id == this.$route.params.name) {
                    this.mangaActual = doc.data()
                    this.id = doc.id
                    this.getComments(doc.data().id)
                } 
            })
        },
        async getItem() {
            const response = await getDocs(collection(db,'merchandising'))
            response.forEach(doc => {
                if(doc.data().id == this.$route.params.name) {
                    this.articuloActual = doc.data()
                    this.id = doc.id
                    this.getComments(doc.data().id)
                } 
            })
        },
        async getComments(id) {
            const response = await getDocs(collection(db,'comentarios'))
            response.forEach(doc => {
                if(doc.data().articleID == id) {
                    this.comments.push(doc.data())
                }
            })
        }
    }
}
</script>

<style scoped>
    .merch {
        min-height: 666px;
    }
</style>