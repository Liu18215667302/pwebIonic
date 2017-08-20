/**
 * Created by Administrator on 2017/8/18 0018.
 */
angular.module("app.education", [])
.controller("educationController", function ($scope, $timeout, webService, commonFactory, $ionicActionSheet, $ionicSlideBoxDelegate) {

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

  /**
   * 上拖事件
   */
  var onDragUpTime = 0;
  $scope.onDragUpSlide = function () {

    if (onDragUpTime == 30) {
      onDragUpTime++;
      actionSheet();
    } else if (onDragUpTime < 31){
      onDragUpTime++;
    }
  }

  /**
   * 上拉菜单
   */
  function actionSheet() {
    var buttonStr = [];
    angular.forEach($scope.educations, function (data,index,array) {
      if (index == 0) {
        return;
      }
      var str = {text:''};
      str.text = data.graduateSchool;
      buttonStr.push(str);
    });

    //上拉框
    $ionicActionSheet.show({
      buttons: buttonStr,
      destructiveText: $scope.educations[0].graduateSchool,
      titleText: '<h3 class="title color-gray">教育经历</h3>',
      cancelText: '取消',
      cancel: function() {
        onDragUpTime = 0;
      },
      buttonClicked: function(index) {
        onDragUpTime = 0;
        $ionicSlideBoxDelegate.$getByHandle("educationSlide").slide(index + 1, 1000);
        return true;
      },
      destructiveButtonClicked: function () {
        onDragUpTime = 0;
        $ionicSlideBoxDelegate.$getByHandle("educationSlide").slide(0, 1000);
        return true;
      }
    });
  }
});
