/**
 * Created by Administrator on 2017/8/20 0020.
 */
angular.module("app.welcome", [])
  .controller("welcomeController", function ($scope, commonFactory, webService, $ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/welcomePopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    //获取帮助信息
    getHelpInfo();

    /**
     * 获取帮助信息
     */
    function getHelpInfo() {
      commonFactory.loadingShow();
      $scope.helpInfos = webService.getHelpInfo();
      commonFactory.loadingHide();
    }

    /**
     * 帮助事件
     */
    $scope.helpEvent = function ($event) {
      $scope.popover.show($event)
    }

    /**
     * 退出
     */
    $scope.exit = function () {
      ionic.Platform.exitApp();
    }
  });
