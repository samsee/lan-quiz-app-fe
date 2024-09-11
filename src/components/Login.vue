<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Lan Quiz App</h1>
      </div>

      <div class="py-4" />

      <!-- Login Form -->
      <v-card class="pa-4 mb-4 mx-auto" max-width="400">
        <h2 class="text-h5 font-weight-bold mb-4">Login</h2>
        <v-form>
          <v-select
            v-model="selectedTeam"
            :items="teams"
            label="팀"
            required
          ></v-select>
          <v-text-field
            v-model="name"
            label="이름"
            required
          ></v-text-field>
          <v-btn color="primary" block @click="login" class="login-btn">Login</v-btn>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const selectedTeam = ref('')
const name = ref('')

const teams = [
  '1팀', '2팀', '3팀', '4팀', '5팀', '6팀', '7팀', '8팀', '9팀'
]

const login = () => {
  // Implement login logic here
  console.log('Login clicked', selectedTeam.value, name.value)
}
</script>

<style scoped>
.login-btn {
  transition: transform 0.5s ease;
}

.login-btn:hover {
  transform: scale(1.1);
}
</style>