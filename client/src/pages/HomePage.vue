<template>
  <div class="container p-5">
    <section class="row main-card">
      <div class="col-12 p-4 d-flex justify-content-between align-items-center">
        <div>
          <p class="fs-2 m-0">Projects</p>
          <p class="m-0">All projects for {{ account.name }} are listed below</p>
        </div>
        <div>
          <button type="button" role="button" class="btn btn-outline-dark">Create Project</button>
        </div>
      </div>
      <div class="col-12 p-5">
        <section class="row title-border">
          <div class="col-4">
            <p>Name</p>
          </div>
          <div class="col-4">
            <p>Members</p>
          </div>
          <div class="col-4">
            <p>Started</p>
          </div>
        </section>
        <section v-for="project in projects" :key="project.id" class="row py-1 align-items-center project-list-of">
          <ProjectListItem :projectProp="project" />
        </section>
      </div>
    </section>
    <!-- <section>
      <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <div class="home-card p-5 bg-white rounded elevation-3">
          <h1 class="my-4 text-center">
            Welcome to Progress
            <p class="m-0 p-3 fs-4">Always strive for progress over perfection. Please login to get
              started on your journey!</p>
          </h1>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import ProjectListItem from '../components/ProjectListItem.vue'

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      projects: computed(() => AppState.myProjects)
    }
  },
  components: { ProjectListItem }
}
</script>

<style scoped lang="scss">
.main-card {
  border-radius: 15px;
  box-shadow: 0 5px 10px rgb(132, 132, 132);
  max-height: 85vh;
  overflow-y: scroll;
}

.title-border {
  border-bottom: 1px solid black;
}

.project-list-of {
  overflow-y: auto;
  max-height: 60vh;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
