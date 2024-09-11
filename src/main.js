/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import QuizResult from './components/QuizResult.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.component('QuizResult', QuizResult)

registerPlugins(app)

app.mount('#app')
