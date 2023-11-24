<template>
  <div class="col-4">
    <router-link :title="`See details about ${projectProp.name}`"
      :to="{ name: 'ProjectDetails', params: { projectId: projectProp.id } }">
      <p class="m-0 text-black fs-5">{{ projectProp.name }}</p>
    </router-link>
  </div>
  <div class="col-4">
    <img :src="projectProp.creator.picture" alt="Creator">
  </div>
  <div class="col-4">
    <p class="m-0">{{ projectProp.createdAt.toLocaleDateString() }}</p>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Project } from "../models/Project";
import { useRoute } from "vue-router";
export default {
  props: { projectProp: { type: Project, required: true } },
  setup() {
    const route = useRoute()
    return {
      route
    }
  }
};
</script>


<style lang="scss" scoped>
img {
  border-radius: 50%;
  height: 5vh;
  width: 5vh;
  // border: 2px solid black;
}
</style>