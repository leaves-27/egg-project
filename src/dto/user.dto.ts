import { Rule, RuleType } from '@midwayjs/validate';
export class UserLoginDTO {
  @Rule(RuleType.string().max(100).min(3).error(new Error('用户名格式错误')))
  userName: string;

  @Rule(RuleType.string().max(12).min(6).error(new Error('密码格式错误')))
  password: string;
}