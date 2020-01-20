<template>
    <div id="normal-page">
        <NavBar />
            <slot></slot>
        <Footer />
    </div>
</template>

<script>
import NavBar from '../components/layout/NavBar.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'normal-page',
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style>
#normal-page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
