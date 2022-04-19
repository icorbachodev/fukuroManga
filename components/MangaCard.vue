<template>
    <div class="container">
        <div class="card" style="width:400px;">
            <div class="card-image">
            <figure class="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Figure_in_Manga_style_variation_1.png" alt="Jujutsu Kaisen" />
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-content">
                <p class="title is-4 restaurant-name">
                    {{ Nombre }}
                </p>
                <div class="columns">
                    <div class="column">
                    <span class="tag">{{ Genero }}</span>
                    </div>
                    <div class="column has-text-right">
                    <button class="button is-info" v-on:click="sumLikes">{{ Likes }}</button>
                    </div>
                </div>
                </div>
            </div>
            <div class="content">
                {{ Descripcion }}<br/><a href="">more info</a>.
            </div>
        </div>
  </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            Nombre : "Jujutsu Kaisen 01",
            Autor : "Gege Akutami",
            Genero : "Fantasia Oscura",
            Descripcion : "Yuuji Itadori es un estudiante de instituto con unas habilidades físicas excepcionales. Todos los días, como rutina, va al hospital a visitar a su abuelo enfermo y decide apuntarse al club de ocultismo del instituto para no dar un palo al agua… Sin embargo, un buen día el sello del talismán que se hallaba escondido en su instituto se rompe, y comienzan a aparecer unos monstruos. Ante este giro de los acontecimientos, Itadori decide adentrarse en el instituto para salvar a sus compañeros. ¿Qué le deparará el destino?",
            Precio : 8.00,
            Likes: 0
        }
    },
    methods: {
        sumLikes() {
            this.Likes++
        }
    }
}
</script>

<style scoped>

</style>