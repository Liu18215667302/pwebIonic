/**
 * Created by Administrator on 2017/8/16 0016.
 */
angular.module("app.skill", [])
  .controller("SkillController", function ($scope, $timeout, webService, commonFactory) {

    //获取我的基本信息
    skillInfo();

    /**
     * 获取技能信息
     */
    function skillInfo() {
      commonFactory.loadingShow();
      $scope.skillInfos = webService.getSkillInfo();
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
