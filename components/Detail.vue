<template>
    <div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li v-if="item == 'manga'"><a :href="'/'+categoria" class="is-capitalized">{{ categoria }}</a></li>
                <li v-else><a href="/merchandising">Merchandising</a></li>
                <li class="is-active"><a href="#">{{ nombre }}</a></li>
            </ul>
        </nav>
        <div class="columns">
            <div class="column is-two-fifths">
                <img :src="imagen"/>
            </div>
            <div class="column">
                <h1 class="title is-1">{{ nombre }}</h1>
                <label class="label" v-if="item == 'manga'">Autor:</label>
                <label class="label" v-else>Fabricante:</label>
                <span>{{ fabricante }}</span>
                <label class="label pt-4" v-if="item == 'manga'">Género:</label>
                <label class="label pt-4" v-else>Tipo:</label>
                <span v-if="item == 'manga'">{{ genero }}</span>
                <span v-else class="is-capitalized">{{ tipo }}</span>
                <label class="label pt-4">Precio:</label>
                <span>{{ precio }}€</span>
                <p class="pt-6 pb-5 has-text-justified">{{ descripcion }}</p>
                <hr>
                <div class="buttons">
                    <img src="https://img.icons8.com/material-sharp/24/000000/filled-like.png" class="pb-2"/>
                    <label class="label pl-1">{{ likes }}</label>
                    <img src="https://img.icons8.com/material-sharp/24/000000/dislike.png" class="pb-2 pl-4"/>
                    <label class="label pl-1">{{ dislikes }}</label>
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
</template>

<script>
export default {
    props: {
        item: {
            type: String,
            default: ''
        },
        tipo: {
            type: String,
            default: ''
        },
        categoria: {
            type: String,
            default: ''
        },
        nombre: {
            type: String,
            default: ''
        },
        imagen: {
            type: String,
            default: ''
        },
        fabricante: {
            type: String,
            default: ''
        },
        genero: {
            type: String,
            default: ''
        },
        precio: {
            type: Number,
            default: ''
        },
        descripcion: {
            type: String,
            default: ''
        },
        likes: {
            type: Number,
            default: ''
        },
        dislikes: {
            type: Number,
            default: ''
        }
    }
}
</script>

<style scoped>
    button {
        margin-left: auto;
    }
</style>