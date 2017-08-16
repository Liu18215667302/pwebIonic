/**
 * Created by Administrator on 2017/8/16 0016.
 */
angular.module("app.services", [])
.factory('webService',function () {

  //我基本信息
  var baseInfo = {
    name: '刘兆龙',
    sex: '男',
    age: 28,
    politics: "群众",
    birthday: '1990-06-14',
    email: 'liu2272772@163.com',
    phone: '18215667302',
    wechat: 'liuzhaolong2016',
    qq: '1282118543',
    family: '山东沂水',
    address: '四川省郫县林湾家园',
    highEducation: '研究生',
    graduated: '重庆邮电大学',
    major: '计算机科学与技术',
    direction: '信息安全'
  };
  return {
    /**
     * 用户基本信息
     * @returns {{name: string, sex: string, age: number, politics: string, birthday: string, email: string, phone: string, wechat: string, qq: string, family: string, address: string, highEducation: string, graduated: string, major: string, direction: string}}
     */
    getBaseInfo: function () {
      return baseInfo;
    }
  }
});
