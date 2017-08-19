/**
 * Created by Administrator on 2017/8/19 0019.
 */
angular.module("app.appProject", [])
  .controller("appProjectController", function ($scope, $timeout, webService, commonFactory) {

    //获取项目信息
    getProjectInfo();

    /**
     * 获取项目信息
     */
    function getProjectInfo() {
      commonFactory.loadingShow();
      $scope.projectInfos = webService.getAppProject();
      commonFactory.loadingHide();
    }

    /**
     * 刷新
     */
    $scope.onRefresh = function () {
      $scope.projectInfos = webService.getAppProject();
      $timeout(function () {
        $scope.$broadcast("scroll.refreshComplete");
      }, 2000);
    }
  });
