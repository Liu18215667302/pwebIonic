// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
  'app.login',
  'app.baseInfo',
  'app.skill',
  'starter.controllers',
  'app.services',
  'app.common'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //登录页面
    .state('login',{
      url: '',
      templateUrl: 'templates/doLogin.html',
      controller: 'DoLogin'
    })
    //侧边栏菜单
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    //基本信息
    .state('app.baseInfo', {
      url: '/baseInfo',
      views: {
        'menuContent': {
          templateUrl: 'templates/baseInfo.html',
          controller: 'BaseInfoController'
        }
      }
    })
    //技能信息
    .state('app.skill', {
      url: '/skill',
      views: {
        'menuContent': {
          templateUrl: 'templates/skill.html',
          controller: 'SkillController'
        }
      }
    })
    //求学成果
    .state('app.achievement', {
      url: '/achievement',
      views: {
        'menuContent': {
          templateUrl: 'templates/achievement.html'
        }
      }
    })
    //教育信息
    .state('app.education', {
      url: '/education',
      views: {
        'menuContent': {
          templateUrl: 'templates/education.html'
        }
      }
    })
    //工作经历
    .state('app.work', {
      url: '/work',
      views: {
        'menuContent': {
          templateUrl: 'templates/work.html'
        }
      }
    })
    //应用项目
    .state('app.appProject', {
      url: '/appProject',
      views: {
        'menuContent': {
          templateUrl: 'templates/appProject.html'
        }
      }
    })
    //科研项目
    .state('app.sicProject', {
      url: '/sicProject',
      views: {
        'menuContent': {
          templateUrl: 'templates/sicProject.html'
        }
      }
    })
    //个人评价
    .state('app.personal', {
      url: '/personal',
      views: {
        'menuContent': {
          templateUrl: 'templates/personal.html'
         // controller: 'PlaylistsCtrl'
        }
      }
    })
    //欢迎页面
    .state('app.welcome', {
      url: '/welcome',
      views: {
        'menuContent': {
          templateUrl: 'templates/welcome.html'
          // controller: 'PlaylistsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
