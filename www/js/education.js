/**
 * Created by Administrator on 2017/8/18 0018.
 */
angular.module("app.education", [])
.controller("educationController", function ($scope, $timeout, webService, commonFactory) {

  //获得教育信息
  getEducation();

  /**
   * 获得教育信息
   */
  function getEducation() {
    commonFactory.loadingShow();
    $scope.educations = webService.getEducations();
    commonFactory.loadingHide();
  }

  /**
   * 刷新
   */
  $scope.onRefresh = function () {
    $scope.educations = webService.getEducations();
    $timeout(function () {
      //停止广播ion-refresher
      $scope.$broadcast('scroll.refreshComplete');
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
});
