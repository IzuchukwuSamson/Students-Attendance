<template>
  <!-- App.vue -->

<v-app>
  <v-navigation-drawer   v-model="drawer" 
      permanent
  fixed app v-if="this.$router.history.current.fullPath !='/'" clipped>
    <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Lecturer</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="item.action"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar color="success" app v-if="this.$router.history.current.fullPath !='/'" clipped-left>
    <span class="font-weight-light dark">Attendance Register</span>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid :class="this.$router.history.current.fullPath !='/'? '': 'fill-height' " >

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
   export default {
    data () {
      return {
        sidebar: true,
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city', action: () => {this.$router.push('/dashboard')} },
          { title: 'Students', icon: 'mdi-account' , action: () => {this.$router.push('/students')} },
          { title: 'Take Attendance', icon: 'mdi-account-group-outline', action: () => {this.$router.push('/take-attendance')} },
          // { title: 'View Students', icon: 'mdi-account', action: () => {this.$router.push('/view-students')} },
          // { title: 'View Attendance', icon: 'mdi-account', action: () => {this.$router.push('/view-attendance')} },
          // { title: 'Records', icon: 'mdi-account-group-outline', action: () => {this.$router.push('/records')} },
          { title: 'Download Record', icon: 'mdi-record', action: () => {this.$router.push('/download')} },
          { title: 'Logout', icon: 'mdi-logout', action: () => {this.$router.push('/')} },
        ],
        mini: true,
      }
    },
  }
</script>
