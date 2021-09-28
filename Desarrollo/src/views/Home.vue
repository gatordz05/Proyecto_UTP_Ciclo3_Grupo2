<template>
   <v-container>
     <v-layout row wrap>
          <v-flex class="black" xs12 style="height:100px">
              <br>
              <h1 class="text-center white--text" >Torneos club del Poker</h1>
             
          </v-flex>
          <v-flex class="black" xs6 >
            <br>
            <br>
            <h3 class="white--text text-sm-center">Encuentra los torneos donde podrás participar</h3>
          </v-flex>
          
          <v-flex class="black" xs6>
            <br>
             <v-img
               max-height="300"
               max-width="450"
               src="../assets/principal.jpg">
           </v-img>
          </v-flex>

           <v-flex class="black" xs12 style="height:100px">
            
                <v-btn color="red">Buscar</v-btn>
             
          </v-flex>

          <v-flex class="black" xs12 style="height:150px">
          <h1 class="text-center white--text">Modalidad</h1>
          </v-flex>
     </v-layout>

     <v-layout row wrap>
       <v-flex xs3 >
         <v-card height="400"
          color="black" 
          elevation="2"
          tile>
           <v-avatar
             size="150"
             color="red"
            >
            <v-img
              max-height="100"
              max-width="250"
              src="../assets/freez_out.jpg">
          </v-img>
           </v-avatar>
           <v-card-title>
              
               <h5 class="white--text">Freeze Out</h5>
              
           </v-card-title>
         </v-card>
       </v-flex>
       <v-flex xs3 >
         <v-card height="400" color="black" title >
           <v-avatar
             size="150"
             color="red"
            >
            <v-img
              max-height="100"
              max-width="250"
              src="../assets/re_buy.jpg">
          </v-img>
           </v-avatar>
           <v-card-title >
              <h5 class="white--text">Red buy</h5>
           </v-card-title>
         </v-card>
       </v-flex>
        <v-flex xs3 >
         <v-card height="400" color="black" >
           <v-avatar
             size="150"
             color="red"
            >
            <v-img
              max-height="100"
              max-width="250"
              src="../assets/satellite.jpg">
          </v-img>
           </v-avatar>
           <v-card-title >
              <h5 class="white--text">Satellite</h5>
           </v-card-title>
         </v-card>
       </v-flex>
        <v-flex xs3 >
         <v-card height="400" color="black" >
           <v-avatar
             size="150"
             color="red"
            >
            <v-img
              max-height="100"
              max-width="250"
              src="../assets/freellos.png">
          </v-img>
           </v-avatar>
           <v-card-title >
              <h5 class="white--text">Freeellos</h5>
           </v-card-title>
         </v-card>
       </v-flex>
     </v-layout>
     <v-layout row wrap style="height:100px">
        <v-flex class="black" xs12>
           <h4 class="text-center white--text"> «Gran parte del dinero que ganarás al póker no procederá de la brillantez de tu juego, sino de la ineptitud de tus oponentes.” – Lou Krieger.</h4>
        </v-flex>
      
     </v-layout>
     
   </v-container>
</template>

<script>

  export default {
    name: 'Home',

    
  }
  
</script>
