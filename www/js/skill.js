/**
 * Created by Administrator on 2017/8/16 0016.
 */
angular.module("app.skill", [])
  .controller("SkillController", function ($scope, webService, commonFactory) {

    //获取我的基本信息
    skillInfo();

    /**
     * 获取技能信息
     */
    function skillInfo() {
      commonFactory.loadingShow();
      $scope.skillInfo = webService.getSkillInfo();
      commonFactory.loadingHide();
    }
  });
