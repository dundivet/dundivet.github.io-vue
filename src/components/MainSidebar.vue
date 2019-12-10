<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Carlos J. Infante Ramos</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/78827370_3125278544155291_5419594784421445632_o.jpg" alt="profile-pic">
      </span>
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="link in links" :key="link">
          <router-link class="nav-link" :to="link.to" active-class="active">{{ link.label }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'vue-property-decorator'

@Component
export default class MainSidebar extends Vue {
  data () {
    return {
      links: [
        {
          label: 'About Me',
          to: '/about'
        },
        {
          label: 'Experience',
          to: '/experience'
        },
        {
          label: 'Competencies',
          to: '/competencies'
        },
        {
          label: 'Skills',
          to: '/skills'
        },
        {
          label: 'Goals',
          to: '/goals'
        },
        {
          label: 'Portfolio',
          to: '/portfolio'
        }
      ]
    }
  }
}

</script>
