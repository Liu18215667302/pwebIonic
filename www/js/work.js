/**
 * Created by Administrator on 2017/8/19 0019.
 */
angular.module("app.work", [])
.controller("workController", function ($scope, $timeout, webService, commonFactory) {

  //获取工作信息
  getWorkInfo();

  /**
   * 获取工作信息
   */
  function getWorkInfo() {
    console.info("sdfsdf");
    commonFactory.loadingShow();
    $scope.workInfos = webService.getWorkInfo();
    commonFactory.loadingHide();
  }

  /**
   * 刷新
   */
  $scope.onRefresh = function () {
    $scope.workInfos = webService.getWorkInfo();
    $timeout(function () {
      $scope.$broadcast("scroll.refreshComplete");
    }, 2000);
  }
});
