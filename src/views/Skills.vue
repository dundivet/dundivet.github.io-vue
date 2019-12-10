<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="skills">
    <div class="w-100">
      <h2 class="mb-4">Skills</h2>

      <div v-for="skill in skills" :key="skill">
        <div class="subheading mb-2 mt-3">{{ skill.title }}</div>
        <ul class="fa-ul mb-0 ml-3">
          <li v-for="subskill in skill.skills" :key="subskill" class="lead">
            <font-awesome-icon :icon="['fas', 'check']"/>
            {{ subskill }}</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
export default {
  data () {
    return {
      skills: [
        {
          title: 'Php',
          skills: [
            'Symfony',
            'Laravel'
          ]
        },
        {
          title: 'Javascript',
          skills: [
            'Vanilla',
            'jQuery',
            'Angular',
            'NodeJs'
          ]
        },
        {
          title: 'UI/UX Design',
          skills: [
            'Bootstrap',
            'HTML',
            'CSS',
            'SASS'
          ]
        },
        {
          title: 'DevOps',
          skills: [
            'MySQL',
            'PostgreSQL',
            'Linux/Server Administration',
            'Docker',
            'CI/CD',
            'TravisCI',
            'System Deployment',
            'Heroku',
            'MongoDB'
          ]
        },
        {
          title: 'Others',
          skills: [
            'Git',
            'GitHub/GitLab',
            'SCRUM and Agile Development Processes',
            'RabbitMQ',
            'ElasticSearch'
          ]
        }
      ]
    }
  }
}
</script>
