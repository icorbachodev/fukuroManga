<template>
    <div class="container">
        <div class="card has-text-centered">
            <div class="card-image">
                <figure class="image">
                    <a :href="genero + '/' + nombre"><img :src="imagen" alt="Imagen manga" /></a>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                    <p class="title restaurant-name">
                        {{ nombre }}
                    </p>
                    <div class="columns">
                        <div class="column">
                        <a :href="genero"><span class="tag">{{ genero }}</span></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="content pt-1">
                    <button class="button is-danger">Añadir al carrito</button>
                </div>
            </div>
        </div>
  </div>
    
</template>

<script>
export default {
    props: {
        imagen: {
            type: String,
            default: ''
        },
        nombre: {
           type: String,
           default: ''
        },
        autor: {
           type: String,
           default: ''
        },
        genero: {
           type: String,
           default: ''
        },
        descripcion: {
           type: String,
           default: ''
        },
        precio: {
           type: String,
           default: ''
        },
        likes: {
           type: Number,
           default: 0
        }
    }
}
</script>

<style scoped>
    img {
        height: 492px;
    }

    img:hover {
        opacity: 0.7;
    }

    .title {
        font-size: 1.22rem;
    }
</style>