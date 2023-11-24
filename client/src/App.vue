<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="">

  </footer>

  <ModalComponent :modalId="'projectFormModal'">
    <template #modalHeader>
      Create Project
    </template>
    <template #modalBody>
      <ProjectForm />
    </template>
  </ModalComponent>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import ProjectForm from "./components/ProjectForm.vue"
import ModalComponent from "./components/ModalComponent.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, ProjectForm, ModalComponent }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

body {
  background-image: url(https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
