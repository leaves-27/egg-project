import { Rule, RuleType } from '@midwayjs/validate';
export class UserLoginDTO {
  @Rule(RuleType.string().required().max(11).min(2).error(new Error('用户名格式错误，用户名应为2到11个字符')))
  userName: string;

  @Rule(RuleType.string().required().max(8).min(6).error(new Error('密码格式错误，密码应为6到8个字符')))
  password: string;
}