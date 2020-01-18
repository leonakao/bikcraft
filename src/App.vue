<template>
  <NormalPage>
    <router-view></router-view>
  </NormalPage>
</template>

<script>
import NormalPage from './layouts/NormalPage.vue'

export default {
  name: 'app',
  components: {
    NormalPage
  }
}
</script>
