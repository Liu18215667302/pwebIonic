angular.module("app.baseInfo", [])
  .controller("BaseInfoController", function ($scope, webService, commonFactory) {

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
  });
