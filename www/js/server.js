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

  //工作经历
  var workInfo = [
    {
      company: '中软国际科技有限公司（成都分公司）',
      time: '2016.6—至今',
      duty: 'Java WEB开发工程师',
      content: [
        {info: '根据需求完成系统的设计与编码；'},
        {info: '修改测试人员提出的问题；'},
        {info: '与UCD对接页面；'},
        {info: '辅助解答客户问题。'}
      ]
    },
    {
      company: '重庆费切尔科技有限公司',
      time: '2015.3—2015.8',
      duty: '软件工程师(游戏服务器的开发)',
      content: [
        {info:'根据需求完成系统的设计与编码；'},
        {info:'修改测试人员提出的问题；'},
        {info:'辅助前台完成部分手游前端的编码。'}
      ]
    }
  ];

  //应用项目信息
  var appProjectInfo = [
    {
      name: '软件生态系统——云测、众测、远程调测、运营平台',
      time: '2016.06—至今',
      type: 'APP测试系统',
      duty: 'JavaWeb开发工程师',
      workContent: [
        {info: '根据需求完成系统的设计与编码；'},
        {info: '修改测试人员提出的问题；'},
        {info: '与UCD对接页面；'},
        {info: '辅助解答客户问题。'}
      ],
      other: 'APP测试系统'
    },
    {
      name: 'DevCloud（公有云）测试系统',
      time: '2017.05—至今',
      type: 'APP及手游测试',
      duty: 'JavaWeb开发工程师',
      workContent: [
        {info: '前端页面编码；'},
        {info: '前端bug修改；'},
        {info: '前端样式风格修改；'},
        {info: '模块后台代码编写。'}
      ],
      other: '手机APP测试，手游测试'
    },
    {
      name: '云龙系统——JAD（场景库）',
      time: '2017.04—至今',
      type: '数据管理',
      duty: 'JavaWeb开发工程师',
      workContent: [
        {info: '前端页面编码；'},
        {info: '前端bug修改；'},
        {info: '前端样式风格修改。'}
      ],
      other: '数据管理、采集系统'
    },
    {
      name: '云龙系统——Monitor',
      time: '2017.02—2017.04',
      type: '服务器监视系统',
      duty: 'JavaWeb开发工程师',
      workContent: [
        {info: '前端页面编码；'},
        {info: '前端bug修改；'},
        {info: '前端样式风格修改。'}
      ],
      other: '监控服务器数据，包括软件系统，数据库，服务硬件设备'
    },
    {
      name: '商户管理系统/创客管理系统',
      time: '2015.08—至今',
      type: '数据管理类',
      duty: 'JavaWeb开发工程师',
      workContent: [
        {info: '根据客户提出的需求进行系统功能设计；'},
        {info: '设计系统数据库(采用MySQL数据库)；'},
        {info: '利用Servlet技术对系统进行编码；'},
        {info: '系统维护。'}
      ],
      other: '对客户数据进行管理'
    },
  ];

  //科研项目信息
  var sicProject = [
    {
      name: '基于物理模型的新型多媒体加密算法研究',
      time: '2015.12—2018.12',
      type: '国家自然科学基金项目',
      duty: '研究员',
      workContent: [
        {info: '对Logistic混沌映射存在问题进行研究并提出改进方案'},
        {info: '对混沌流密码算法进行研究'},
        {info: '利用C语言编码，测试算法的效率；利用MATLAB编码，测试算法及混沌映射的性能指标'}
      ],
      other: '基于物理模型的新型多媒体加密算法研究'
    },
    {
      name: '基于混沌的安全高效密码算法设计',
      time: '2013.07—2016.06',
      type: '重庆市基础与前沿研究计划项目',
      duty: '研究员',
      workContent: [
        {info: '对图像加密算法的研究(利用Cat映射和Standard映射实现彩色图像置换)'},
        {info: '利用MATLAB对算法的性能指标进行测试'}
      ],
      other: '重庆市基础与前沿研究计划项目'
    },
    {
      name: '重庆市网络经营者交易信用标准研究',
      time: '2013.12—2015.12',
      type: '重庆市工商局横向项目',
      duty: '研究员',
      workContent: [
        {info: '利用MATLAB对交易信用指标进行计算'}
      ],
      other: '重庆市网络经营者交易信用标准研究'
    }
  ];

  //个人评价
  var personal = {
    info: '我是一个乐于助人、性格内向、能吃苦不怕苦、学习能力强的人。在日常生活中善于总结问题，善于发现问题，善于钻研。我能够在很短的时间内融入一个团队，并与团队共进退。'
  };

  //帮助信息
  var helpInfo = [
    {info:'点击左上角按钮或者向左拖动显示菜单'},
    {info:'点击页面右上角返回首页'},
    {info:'内容页下拉刷新数据'},
    {info:'滑动框页面上拖显示菜单'}
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
    },
    /**
     * 工作信息
     */
    getWorkInfo: function () {
      return workInfo;
    },
    /**
     * 应用项目
     * @returns {Array}
     */
    getAppProject: function () {
      return appProjectInfo;
    },
    /**
     * 科研项目
     * @returns {Array}
     */
    getSicProject: function () {
      return sicProject;
    },
    /**
     * 个人评价
     * @returns {{}}
     */
    getPersonal: function () {
      return personal;
    },
    /**
     * 帮助信息
     * @returns {[*,*,*,*]}
     */
    getHelpInfo: function () {
      return helpInfo;
    }
  }
});
