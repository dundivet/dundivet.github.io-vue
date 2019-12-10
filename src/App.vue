<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <MainSidebar/>

    <div class="container-fluid p-0">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainSidebar from '@/components/MainSidebar'

export default {
  components: {
    MainSidebar
  }
}
</script>
