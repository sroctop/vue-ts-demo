<template>
  <div class="footer">
    {{footer}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

  private data() {
    return {
      footer: 'footer',
    };
  }
}
</script>
