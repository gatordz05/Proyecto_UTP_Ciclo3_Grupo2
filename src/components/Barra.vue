<template>
   <v-container grid-list-sm>
    <v-row>
       <v-cols cols="12">
         <v-toolbar height = "80px" color="red darken-4" width="1185px">
      
          <v-toolbar-title>
           <h5 class="white--text ">Torneos</h5> </v-toolbar-title>

          <v-spacer></v-spacer>
           <v-btn text color="white" @click="crear()">
              Crear 
              <a v-bind:href="link" @click="crear()"> </a>
           </v-btn>
            <v-btn text color="white" @click="modificar()">
              Modificar
              <a v-bind:href="link" @click="modificar()"> </a>
           </v-btn>
            <v-btn text color="white" @click="eliminar()">
              Eliminar
              <a v-bind:href="link" @click="eliminar()"> </a>
           </v-btn> 
         
          <v-btn text color="white">
           Buscar 
          </v-btn>
       </v-toolbar>
       </v-cols>
    </v-row>
   </v-container>
   
 
</template>
<script>
export default{
  data:()=> ( {
    drawer:false,
    group:null,
 }),
 methods:{
   crear(){
     this.$router.push('/crear')
    },
 
    modificar(){
     this.$router.push('/modificar')
   },
    eliminar(){
     this.$router.push('/eliminar')
    }
 }
}
</script>