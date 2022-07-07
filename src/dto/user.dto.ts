import { Rule, RuleType } from '@midwayjs/validate';
export class UserLoginDTO {
  @Rule(RuleType.string().max(100).min(3).error(new Error('userName错误')))
  userName: string;

  @Rule(RuleType.string().max(12).min(6).error(new Error('password错误')))
  password: string;
}