<template>
    <div>
        <div class="container pb-5">
            <h1 class="title is-1 has-text-centered is-capitalized">Merchandising</h1>
            <hr>
            <label class="label">Filtro:</label>
            <div class="select">
                <select v-model="filtro" @change="applyFilter">
                    <option class="is-hidden" disabled selected value>Selecciona un filtro</option>
                    <option value="Completo">Completo</option>
                    <option value="figura">Figura</option>
                    <option value="camisa">Camisa</option>
                    <option value="taza">Taza</option>
                </select>
            </div>
            <div class="columns is-multiline mt-3">
                <MangaCard
                :id='articulo.id'
                :imagen="articulo.image" 
                :nombre="articulo.name"
                :categoria="articulo.type"
                :genero="articulo.type"
                :precio="articulo.price"
                v-for="(articulo, index) in merchFiltrado"
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
        this.getMerchandising()
    },
    data() {
        return {
            merchandising: [],
            merchFiltrado: [],
            filtro: ''
        }
    },
    methods: {
        async getMerchandising() {
            const response = await getDocs(collection(db,'merchandising'))
            response.forEach(doc => {
                this.merchandising.push(doc.data())
                this.merchFiltrado.push(doc.data())
            }) 
        },
        applyFilter() {
            if(this.filtro == 'Completo') {
                this.merchFiltrado = this.merchandising
            } else {
                this.merchFiltrado = this.merchandising.filter(item => item.type == this.filtro)
            }
            
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