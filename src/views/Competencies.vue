<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100">
        <h2 class="mb-5">COMPETENCIES</h2>

        <ul class="fa-ul ml-0">
            <li v-for="competence in competences" :key="competence" class="mb-1 lead">
              <font-awesome-icon :icon="['fas', 'check']" />
              {{ competence }}</li>
        </ul>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data () {
    return {
      competences: [
        'Analysis and Problem Solving',
        'Profesional Expertise',
        'Learning Agility and Development',
        'Adaptability to Changes',
        'Interpersonal Skills',
        'Teamwork and Team Building',
        'Customer Focus',
        'Spanish and Basic English'
      ]
    }
  }
}
</script>
