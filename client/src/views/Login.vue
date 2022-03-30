<template>
<v-layout align-center justify-center>
    <v-flex xs12 sm8 md3>
        <div style="text-align: center">
            <h1 :v-model="logo">Admin Panel</h1>
        </div>
    <v-card>
        <v-card-title>Login</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-text-field label="Email"></v-text-field>
            <v-text-field type="password" label="Password"></v-text-field>
            <v-text-field type="password" label="Admin Code"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" tile @click="dashboard">Login</v-btn>
        </v-card-actions>
    </v-card>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    data() {
        return{
            logo: require('../assets/logo.png')
        }
    },
    methods:{
        dashboard(){
            this.$router.push('dashboard')
        }
    }
}
</script>

<style scoped>
body {
  background: blue;
}
</style>