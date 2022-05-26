<template>
    <div class="container">
        <div class="full" v-if="verCarrito == true">
            <h1 class="title is-1">Tu carrito</h1>
            <hr>
            <table class="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total(item)</th>
                        <td><a>Vaciar</a></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in carrito" :key="item.nombre">
                        <td>{{ item.nombreItem }}</td>
                        <td>{{ item.precioItem }}€</td>
                        <td>x{{ item.cantidad }}</td>
                        <td>{{ item.cantidad * item.precioItem }}€</td>
                        <td><button class="delete mt-1"></button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total: {{ precioTotal.toFixed(2) }}€</th>
                    <th></th>
                </tfoot>
            </table>
            <div class="buttons is-pulled-right">
                <button class="button is-danger">Comprar</button>
            </div>
        </div>

        <div class="empty" v-if="verCarrito == false">
            <h1 class="title is-1">Tu carrito</h1>
            <img src="https://theoliveoilco.com/wp-content/uploads/2022/01/empty_cart_retina.png" class="image mx-auto p-5" width="600px">
            <p class="is-size-4 has-text-centered">El carrito está vacío</p>
        </div>
        
    </div>    
</template>

<script>
import { db, auth } from "~/plugins/firebase"

export default {
    mounted() {
        this.obtenerCarrito()
    },
    data() {
        return {
            verCarrito: false,
            carrito: [],
            precioTotal: 0
        }
    },
    methods: {
        obtenerCarrito() {
            var cookie = document.cookie
            if(cookie != '') {
                this.verCarrito = true
                var calcTotal
                this.carrito = JSON.parse(cookie.slice(8))
                this.carrito.forEach(item => {
                    calcTotal = item.cantidad * item.precioItem
                    this.precioTotal += calcTotal
                })
            } else {
                this.verCarrito = false
            }
        }
    }
}
</script>

<style scoped>
    .container {
        min-height: 666px;
    }
</style>