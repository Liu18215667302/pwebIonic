angular.module("app.baseInfo", [])
  .controller("BaseInfoController", function ($scope, webService) {

    //获取我的基本信息
    $scope.myBaseInfo = webService.getBaseInfo();
  });
