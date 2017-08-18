angular.module("app.baseInfo", [])
  .controller("BaseInfoController", function ($scope, $timeout, webService, commonFactory) {

    //获取我的基本信息
    baseInfo();

    /**
     * 基本信息
     */
    function baseInfo() {
      commonFactory.loadingShow();
      $scope.myBaseInfo = webService.getBaseInfo();
      commonFactory.loadingHide();
    }

    /**
     * 刷新
     */
    $scope.doRefresh = function () {
      $scope.myBaseInfo = webService.getBaseInfo();
      $timeout(function () {
        //停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000);
    }
  });
