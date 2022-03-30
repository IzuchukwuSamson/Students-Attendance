<template>
<div>
 <v-layout column>
   <v-flex xs6 offset-x3>
     <div class="white elevation-2">
       <v-toolbar flat dense class="green" dark>
       <v-toolbar-title>Register</v-toolbar-title>
       </v-toolbar>
    
          
   <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div>
      <h1>Register</h1>

<div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field 
        label="Email"
        v-model="email"
      ></v-text-field>
<br>
      <v-text-field 
        label="Password"
        type="password"
        v-model="password"
      ></v-text-field>

</div>
<br>

      <div class="error" v-html="error"/>
<br>  <v-btn dark class="green">Register</v-btn>
      </div>
      </v-col>

    </v-row>
  </v-container>   

  </div>  
   </v-flex>
 </v-layout>
 
</div>  

</template>



<script>

</script>



<style>
.error{
  color: white;
  background-color: red;
}
</style>