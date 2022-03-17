<template>
    <v-toolbar fixed class="green" dark>
        <v-toolbar-title class="mr-4">
            <span class="home"
            @click="navigateTo({name: 'home'})">Students Attendance</span>
        </v-toolbar-title>
<!-- 
        <v-toolbar-items>
            <v-btn flat dark>Browse</v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <!-- <router-link to="register">
            <v-btn flat dark>
                Sign Up
            </v-btn>
            </router-link> -->

            <v-btn text dark @click="navigateTo({name: 'register'})">Sign Up</v-btn>
        </v-toolbar-items>

        <v-toolbar-items>
            <v-btn text dark @click="navigateTo({name: 'login'})">Login</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

export default {
  methods: {
      navigateTo (route) {
          this.$router.push(route)
      }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

.home:hover {
    color: rgb(202, 197, 197)
}
</style>