/**
 * Created by Administrator on 2017/8/19 0019.
 */
angular.module("app.appProject", [])
  .controller("appProjectController", function ($scope, $timeout, webService, commonFactory, $ionicModal, $ionicSlideBoxDelegate) {

    /**
     * 模态框
     */
    $ionicModal.fromTemplateUrl('templates/appProjectModal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

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
    var onDragUpTime = 0;
    $scope.onDragUpSlide = function () {

      if (onDragUpTime == 30) {
        onDragUpTime++;
        $scope.modal.show();
      } else if (onDragUpTime < 31){
        onDragUpTime++;
      }
    }



    /**
     * 关闭模态框
     */
    $scope.closeProjectModal = function () {
      onDragUpTime = 0;
      $scope.modal.hide();
    }

    /**
     * 跳转到对应项目
     * @param index
     */
    $scope.goProject = function (index) {
      onDragUpTime = 0;
      $ionicSlideBoxDelegate.slide(index, 1000);
      $scope.modal.hide();
    }
  });
