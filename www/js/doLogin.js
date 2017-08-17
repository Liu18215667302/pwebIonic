/**
 * Created by Administrator on 2017/8/15 0015.
 */
angular.module("app.login",[])
.controller("DoLogin", function ($scope, $location, $ionicPopup) {

  /**
   * 退出系统
   */
  $scope.closeLogin = function () {
    ionic.Platform.exitApp();
  }

  //登录信息
  $scope.loginData = {
    username: "",
    password: ""
  };

  /**
   * 登录
   */
  $scope.doLogin = function () {
    if ($scope.loginData.username == "lzl" && $scope.loginData.password == "123456") {
      $location.path("/app/welcome");
    } else {
      $ionicPopup.alert({
        title: '系统提示',
        template: '账号或密码错误'
      });
    }
  }
})
