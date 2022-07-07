import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

export class UserModel {
  // 添加用户信息
  // 删除用户信息
  // 更新用户信息
  // 获取用户信息
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;
  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async addUser(username: string, password: string){
    let userEntity = new UserEntity();
    userEntity.username = username;
    userEntity.password = password;
    this.userRepo.save(userEntity);
  }

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(username: string, password: string): Promise<UserEntity> {
    return await this.userRepo.findOne({
      where: {
        username,
        password
      }
    });
  }

  /**
   * 根据用户id和用户名获取用户信息
   * @param id {Number} 用户id
   * @param username {String} 用户名
   */
  async updateUserNameById(id: number, username: string){
    let originUser = await this.userRepo.findOne({
      where: {
        id,
      }
    });
    
    originUser.username = username;
    this.userRepo.save(originUser);
  }

    /**
   * 根据用户id和用户密码获取用户信息
   * @param id {Number} 用户id
   * @param password {String} 用户密码
   */
  async updateUserPasswordById(id: number, password: string){
    let originUser = await this.userRepo.findOne({
      where: {
        id,
      }
    });
    
    originUser.password = password;
    this.userRepo.save(originUser);
  }

  /**
   * 根据用户id和用户密码获取用户信息
   * @param id {Number} 用户id
   */
  async deleteUser(id: number){
    let originUser = await this.userRepo.findOne({
      where: {
        id,
      }
    });
    
    originUser.deleted = true;
    this.userRepo.save(originUser);
  }

  /**
   * 根据用户id和用户密码获取用户信息
   * @param id {Number} 用户id
   */
  async forceDeleteUser(id: number){
    let originUser = await this.userRepo.findOne({
      where: {
        id,
      }
    });
    
    this.userRepo.remove(originUser);
  }
}