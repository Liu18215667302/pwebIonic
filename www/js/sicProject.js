/**
 * Created by Administrator on 2017/8/19 0019.
 */
angular.module("app.sicProject", [])
  .controller("sicProjectController", function ($scope, $timeout, webService, commonFactory) {

    //获取项目信息
    getProjectInfo();

    /**
     * 获取项目信息
     */
    function getProjectInfo() {
      commonFactory.loadingShow();
      $scope.projectInfos = webService.getSicProject();
      commonFactory.loadingHide();
    }

    /**
     * 刷新
     */
    $scope.onRefresh = function () {
      $scope.projectInfos = webService.getSicProject();
      $timeout(function () {
        $scope.$broadcast("scroll.refreshComplete");
      }, 2000);
    }

    /**
     * 获取内容高度
     */
    $scope.getContentHeight = function () {
      var height = screen.height;
      height = height - 100;

      var str = {height: '500px'};
      str.height = height + 'px';
      return str;
    }

    /**
     * 向上拖拽
     */
    $scope.onDragUpSlide = function () {

    }
  });
