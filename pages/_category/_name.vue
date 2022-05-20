<template>
    <div class="container">
        <div class="manga" v-if="mangaActual.length != 0">
            <Detail
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
            />
        </div>
        

        <div class="merch" v-if="articuloActual.length != 0">
            <Detail
                :item="articuloActual.item"
                :nombre="articuloActual.name"
                :imagen="articuloActual.image"
                :fabricante="articuloActual.manufacturer"
                :precio="articuloActual.price"
                :descripcion="articuloActual.description"
                :likes="articuloActual.likes"
                :dislikes="articuloActual.dislikes"
                :tipo="articuloActual.type"
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
    .merch {
        min-height: 666px;
    }
</style>