<template>
  <div class="home">
    <Headers msg="headers is propsssssss"></Headers>
    <Pages></Pages>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Headers from '@/components/common/header/header.vue';
import Footer from '@/components/common/footer/footer.vue';
import Pages from '@/components/private/page/page.vue';

@Component({
  components: {
    Headers,
    Footer,
    Pages,
  },
})
export default class Page extends Vue {}
</script>
