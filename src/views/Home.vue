<template>
  <div class="home">
    <Headers msg="headers Props"></Headers>
    <Contents msg="Content"></Contents>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Headers from '@/components/common/header/header.vue';
import Footer from '@/components/common/footer/footer.vue';
import Contents from '@/components/private/content/content.vue';

@Component({
  components: {
    Headers,
    Footer,
    Contents,
  },
})
export default class Home extends Vue {}
</script>
