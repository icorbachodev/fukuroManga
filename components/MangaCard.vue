<template>
    <div class="container">
        <div class="card has-text-centered">
            <div class="card-image">
                <figure class="image">
                    <a :href="categoria + '/' + id"><img :src="imagen" alt="Imagen manga" /></a>
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
                        <span class="tag is-capitalized">{{ genero }}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="content pt-1">
                    <button class="button is-danger" @click="addCarrito">Añadir al carrito</button>
                </div>
            </div>
        </div>
  </div>
    
</template>

<script>
import { db, auth } from "~/plugins/firebase"
var carrito = []

export default {
    props: {
        id: {
            type: String,
            default: ''
        },
        imagen: {
            type: String,
            default: ''
        },
        nombre: {
           type: String,
           default: ''
        },
        categoria: {
           type: String,
           default: ''
        },
        genero: {
           type: String,
           default: ''
        },
        precio: {
            type: Number,
            default: 0
        }
    },
    methods: {
        addCarrito() {
            if(auth.currentUser != null) {
                var cookie = document.cookie
                if(cookie != '') {
                    carrito = JSON.parse(cookie.slice(8))
                }
                var repetido = carrito.findIndex(item => item.nombreItem == this.nombre)
                if(repetido != -1) {
                    carrito.map(item => item.nombreItem == this.nombre ? {...item, cantidad: item.cantidad++} :item)
                    document.cookie = "carrito="+JSON.stringify(carrito)
                    alert('Cantidad del producto actualizada')
                } else {
                    carrito.push({
                        "usuario": auth.currentUser.displayName, 
                        "nombreItem": this.nombre, 
                        "precioItem": this.precio,
                        "cantidad": 1 
                    })
                    document.cookie = "carrito="+JSON.stringify(carrito)
                    alert('Producto añadido al carrito')
                }
            } else {
                alert('Debes iniciar sesión para añadir al carrito')
            }
            
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