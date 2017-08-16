/**
 * Created by Administrator on 2017/8/16 0016.
 */
angular.module("app.skill", [])
  .controller("SkillController", function ($scope, webService) {

    //获取我的基本信息
    $scope.skillInfo = webService.getSkillInfo();
  });
