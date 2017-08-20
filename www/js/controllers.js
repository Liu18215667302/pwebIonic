angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout, $ionicHistory, $location) {

  /**
   * 返回
   */
  $scope.goBack = function () {
    $ionicHistory.nextViewOptions({
      disableAnimate: false,
      disableBack: true,
      historyRoot: true
    });
    $location.path("/app/welcome");
    //刷新
   // $window.location.reload(true);
  }

  /**
   * 项目信息侧边栏开关
   * @type {boolean}
   */
  $scope.isProject = false;
  $scope.isShowProject = function () {
    $scope.isProject = !$scope.isProject;
  }

});

