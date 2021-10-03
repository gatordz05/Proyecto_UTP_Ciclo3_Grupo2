<template>
  <v-container class="grey lighten-1"> 
      <v-row>
          <v-col cols="8">
              <v-form  align-content-sm="center"
                ref="form"
                v-model="valid"
                lazy-validation
               >
               <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nombre del torneo a eliminar"
                required
               ></v-text-field>

      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
     Eliminar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Confirmar
      </v-btn>
         <v-btn color="secundary" @click="iniciar()">
              Inicio
              <a v-bind:href="link" @click="iniciar()"> </a>
           </v-btn>
         </v-form>
          </v-col>
           <v-col cols="4">
              <v-img
                max-height="450"
                max-width="550"
                src="../assets/tres.jpg"
        ></v-img>
          </v-col>
      </v-row>
    </v-container>
  
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Se requiere el nombre',
         ],
        
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
       iniciar(){
     this.$router.push('/home')
    },
     },
  }
</script>