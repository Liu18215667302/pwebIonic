/**
 * Created by Administrator on 2017/8/18 0018.
 */
angular.module("app.achievement", [])
.controller("achievementFactory", function ($scope, $timeout, webService, commonFactory) {

  //获取求学成果
  getAchievement();

  /**
   * 获取求学成果
   */
  function getAchievement() {
    commonFactory.loadingShow();
    $scope.achievements = webService.getAchievement();
    commonFactory.loadingHide();
  }

  /**
   * 刷新
   */
  $scope.doRefresh = function () {
    $scope.achievements = webService.getAchievement();
    $timeout(function () {
      //停止广播ion-refresher
      $scope.$broadcast('scroll.refreshComplete');
    }, 2000);
  }
})
