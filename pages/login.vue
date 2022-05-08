<template>
    <div class="container pt-6">
        <div class="card mx-auto">
            <div class="card-content">
                <form>
                    <div class="field">
                        <label for="email" class="label">E-mail:</label>
                        <div class="control has-icons-left">
                            <input class="input" type="email" id="email" placeholder="Introduce tu correo">
                            <span class="icon is-small is-left">
                                <img src="https://img.icons8.com/ios-glyphs/24/CCCCCC/user--v1.png"/>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="password" class="label">Contraseña:</label>
                        <div class="control has-icons-left">
                            <input class="input" type="password" id="password" placeholder="Introduce tu contraseña">
                            <span class="icon is-small is-left">
                                <img src="https://img.icons8.com/ios-glyphs/24/CCCCCC/key--v1.png"/>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <button class="button is-danger is-fullwidth">Iniciar sesión</button>
                            <div class="control has-icons-left mt-2">
                                <button class="button is-light is-fullwidth">Continuar con Google</button>
                                <span class="icon is-small is-left">
                                    <img src="https://img.icons8.com/fluency/24/000000/google-logo.png"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login'
}
</script>

<style scoped>
    .card {
        width: 450px;
    }
</style>