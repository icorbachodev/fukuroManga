<template>
    <div class="container">
        <div class="card">
            <div class="card-image">
                <figure class="image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Figure_in_Manga_style_variation_1.png" alt="Jujutsu Kaisen" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                    <p class="title is-4 restaurant-name">
                        {{ nombre }}
                    </p>
                    <div class="columns">
                        <div class="column">
                        <span class="tag">{{ genero }}</span>
                        </div>
                        <div class="column has-text-right">
                        <button class="button is-info" v-on:click="sumLikes">{{ likes }}</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="content">
                    {{ descripcion }}<br/><a v-bind:href="nombre">more info</a>.
                </div>
            </div>
        </div>
  </div>
    
</template>

<script>
export default {
    props: {
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
    },
    methods: {
        sumLikes() {
            this.$emit('onLikeButton')
            //this.likes++
        }
    }
}
</script>

<style scoped>

</style>