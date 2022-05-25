<template>
    <div class="container">
        <div class="full" v-if="carrito == true">
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
                    <tr>
                        <td>Komi can't communicate</td>
                        <td>8€</td>
                        <td>x2</td>
                        <td>16€</td>
                        <td><button class="delete mt-1"></button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total: 16€</th>
                    <th></th>
                </tfoot>
            </table>
            <div class="buttons is-pulled-right">
                <button class="button is-danger">Comprar</button>
            </div>
        </div>

        <div class="empty" v-if="carrito == false">
            <h1 class="title is-1">Tu carrito</h1>
            <img src="https://theoliveoilco.com/wp-content/uploads/2022/01/empty_cart_retina.png" class="image mx-auto p-5" width="600px">
            <p class="is-size-4 has-text-centered">El carrito está vacío</p>
        </div>
        
    </div>    
</template>

<script>
import { db, auth } from "~/plugins/firebase"

export default {
    data() {
        return {
            carrito: false
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .container {
        min-height: 662px;
    }
</style>