/**
 * Created by Administrator on 2017/8/19 0019.
 */
angular.module("app.personal", [])
  .controller("personalController", function ($scope, $timeout, webService, commonFactory) {

    //获取个人评价信息
    getPersonalInfo();

    /**
     * 获取个人评价信息
     */
    function getPersonalInfo() {
      commonFactory.loadingShow();
      $scope.personal = webService.getPersonal();
      commonFactory.loadingHide();
    }

    /**
     * 刷新
     */
    $scope.onRefresh = function () {
      $scope.personal = webService.getPersonal();
      $timeout(function () {
        $scope.$broadcast("scroll.refreshComplete");
      }, 2000);
    }
  });
