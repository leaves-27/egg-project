//

import { Rule, RuleType } from '@midwayjs/validate';
export class ApiDTO {
  @Rule(RuleType.string().length(11).error(new Error('参数uid错误，uid值应为11个字符')))
  uid: string;
}