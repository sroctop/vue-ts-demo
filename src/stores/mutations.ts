import {
  ROC_ANTHOR,
  ROC_LINK,
} from './mutation-types';

export default {
  // 名字修改
  [ROC_ANTHOR](state: any, name: string) {
    state.anthor = name;
  },
  // 链接修改
  [ROC_LINK](state: any, link: string) {
    state.link = link;
  },
};
