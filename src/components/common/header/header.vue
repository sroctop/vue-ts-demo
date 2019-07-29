<template>
  <div class="header">
    {{header}}
    <div @click="getInfoFun">
      {{msg}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getInfo } from '@/config/api';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;

  private data() {
    return {
      header: 'header-components',
    };
  }

  // 调用接口
  private getInfoFun() {
    getInfo({
      data: '123',
    }).then( (res: any) => {
      window.console.log(res.data);
    });
  }
}
</script>

<style scope lang="stylus">
  @import '~@/style/common.styl';
  .header
    border(blue)
</style>
