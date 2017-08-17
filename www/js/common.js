/**
 * Created by Administrator on 2017/8/17 0017.
 */
angular.module("app.common",[])
.factory("commonFactory", function ($timeout, $ionicLoading) {

  return {

    /**
     * 显示加载
     */
    loadingShow: function () {
      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles" class="spinner-royal"></ion-spinner>',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    },
    /**
     * 隐藏加载层
     */
    loadingHide: function () {
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    }
  };
})
