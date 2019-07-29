<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p>{{anthorComputed()}}</p>
    <p @click="handleClick">{{linkComputed()}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
  @Prop() private msg!: number;
  private anthor!: string;
  private link!: string;

  private data() {
    return {
      anthor: '',
      link: '',
    };
  }

  private anthorComputed() {
    this.anthor = this.$store.state.anthor;
    return this.anthor;
  }

  private linkComputed() {
    this.link = this.$store.state.link;
    return this.link;
  }

  private handleClick() {
    this.$store.dispatch('setAnthor', 'roc2');
    this.$store.dispatch('setLink', 'baidu.com');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~@/style/common.styl';

.hello {
  background: layerBg;
  textColor(pink);
}
</style>
