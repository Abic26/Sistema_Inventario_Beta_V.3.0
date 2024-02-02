
<template>
    
    <div v-show="login">
        <form @submit.prevent="check_login">
            <img src="/factura.png" alt="">
            <br>
            <h1>Ingrese Sus Datos</h1>
            <br>
            <label for="">Ingrese Usuario</label>
            <input v-model.trim="usuario" type="text" placeholder="Usuario">
            <br>
            <label for="">Ingrese Clave</label>
            <input v-model.trim="clave" type="password" placeholder="Clave">
            <br>
            <button class="btn btn-success">Ingresar</button>
        </form>
    </div>
    <Menu v-show="mostrar"/>

</template>
<script>
import Menu from './Menu.vue';

export default {
    data: ()=>({
        usuario : '',
        clave: '',
        mostrar:false,
        login:true,
        usuarios_default:{
            usuario: 'admin',
            clave: 'admin'
    }
    }),
    components :{
    Menu
},
    methods:{
        check_login(){
              if(this.usuario === this.usuarios_default.usuario && this.clave === this.usuarios_default.clave){
                this.mostrar=!this.mostrar  
                this.login=!this.login
              }else{
                alert('ingrese sus datos')
              }
    }

    }
}
</script>
<style scoped>
div{
    background-color: #252525;
    margin-top: 50%;
    margin-left: 50%;
    width: 100%;
    border-radius: 15px;

}
div form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
}
div h1{
    font-size: 30px;
}
div label{
opacity: 0.5;
}
div img{
    width: 50px;
    height: 50px;
}
</style>


