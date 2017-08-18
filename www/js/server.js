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

  //求学成果
  var achievement = [
    {content: 'Yong Wang, Zhaolong Liu, Jianbin Ma. A pseudorandom number generator based on piecewise logistic map. Nonlinear Dynamics. 2016. 83(4):2373-2391(SCI二区).'},
    {content: 'Yong Wang, Zhaolong Liu, Peng Lei. Cryptographic Properties Analysis of Piecewise Logistic Map. 2014 International Symposium on Nonlinear Theary and its Applications. 2014:393-396(国际会议).'},
    {content: 'Bo, H., Peng, L., Qin, P., Liu, Z., Bo, H., & Peng, L., et al. (2013). A method for designing hash function based on chaotic neural network.Proceedings of International Workshop on Cloud Computing & Information Security, 52(2), 229-233(国际会议).'},
    {content: '软件著作权（S盒性能测试系统V1.0）'},
    {content: '校级优秀研究生毕业论文（基于混沌的流密码算法研究）'}
  ];

  //教育经历
  var education = [
    {
      graduateSchool: '重庆邮电大学',
      graduateTime: '2013.09—2016.07',
      duty: '班长',
      diploma: '研究生',
      college: '计算机科学与技术学院',
      major: '计算机科学与技术',
      direction: '信息安全',
      other: '学业奖学金二等奖一次，学业奖学金三等奖二次，“校级优秀研究生干部”称号，“校级优秀硕士论文”称号'
    },
    {
      graduateSchool: '山东省滨州学院',
      graduateTime: '2009.09—2013.07',
      duty: '班长',
      diploma: '大学',
      college: '信息工程学院',
      major: '计算机科学与技术',
      direction: '',
      other: '学业奖学金一等奖一次，学业奖学金二等奖三次，“校级优秀学生”称号，“校级优秀团员”称号，“校级优秀毕业生”称号。'
    },
    {
      graduateSchool: '沂水二中',
      graduateTime: '2005.09—2009.07',
      duty: '学生',
      diploma: '高中',
      college: '',
      major: '',
      direction: '',
      other: ''
    },
    {
      graduateSchool: '山东省沂水县实验中学',
      graduateTime: '2002.09—2005.07',
      duty: '卫生委员，生活委员',
      diploma: '初中',
      college: '',
      major: '',
      direction: '',
      other: ''
    },
    {
      graduateSchool: '山东省沂水县长虹小学',
      graduateTime: '2002.03—2002.07',
      duty: '学生',
      diploma: '小学',
      college: '',
      major: '',
      direction: '',
      other: ''
    },
    {
      graduateSchool: '山东省沂水县蛮庄小学',
      graduateTime: '1996.09—2002.01',
      duty: '组长',
      diploma: '小学',
      college: '',
      major: '',
      direction: '',
      other: ''
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
    },
    /**
     * 求学成果
     * @returns {[*,*,*,*,*]}
     */
    getAchievement: function () {
      return achievement;
    },
    /**
     * 教育信息
     */
    getEducations: function () {
      return education;
    }
  }
});
