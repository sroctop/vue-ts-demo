import { post, get } from './ajax';
import { baseUrl } from './index';

// 获取用户信息
export const getInfo = (data: any) => post(`${baseUrl}/subject/findSubjectsList`, data);
