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

  //我的技能信息
  var skillInfo = [
    {
      name: "服务器",
      content: "熟悉Java语言、熟悉Java WEB、了解主流框架SSH（Spring MVC + Spring+Hibernate）、SSM（Spring MVC+Spring+MyBatis）、BuguMongo等;"
    },{
      name: "前端",
      content: "熟悉网页编程(HTML+CSS+JavaScript)，熟悉JQuery，了解Angular2、JQuery Mobile、Bootstrap等网页框架;"
    },{
      name: "数据库",
      content: "熟悉MySQL，了解Redis、Mongdb、Oracle等数据库;"
    },{
      name: "其他技能",
      content: "了解消息队列ActiveMQ，了解C/C++、Android、游戏引擎cocos2d-x、MATLAB、PS、idea插件开发等;"
    },{
      name: "科研方面",
      content: "熟悉混沌理论，在混沌图像加密、混沌映射改进、混沌流密码算法等方面皆有研究成果。"
    }
  ];

  return {
    /**
     * 我的基本信息
     * @returns {{name: string, sex: string, age: number, politics: string, birthday: string, email: string, phone: string, wechat: string, qq: string, family: string, address: string, highEducation: string, graduated: string, major: string, direction: string}}
     */
    getBaseInfo: function () {
      return baseInfo;
    },
    /**
     * 我的技能信息
     * @returns {[*,*,*,*,*]}
     */
    getSkillInfo: function () {
      return skillInfo;
    }
  }
});
