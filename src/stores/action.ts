import {
  ROC_ANTHOR,
  ROC_LINK,
} from './mutation-types';


export default {

  async setAnthor(
    {commit}: any, state: any,
  ) {
    commit(ROC_ANTHOR, state);
  },

  async setLink(
    {commit}: any, state: any,
  ) {
    commit(ROC_LINK, state);
  },

};
