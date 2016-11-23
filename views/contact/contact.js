/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("page2Ctrl",function($scope,$ionicModal){
    // 构造模式对话框
    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,       // 作用域使用父作用域
//                        animation: 'slide-in-up'
        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//                        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    // 创建新联系人
    $scope.createContact = function(u) {
        $scope.contacts.push({ name: u.username,email: u.email});
        $scope.modal.hide();    // 隐藏
    };

    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // 在隐藏modal时执行一些动作
    $scope.$on('modal.hidden', function() {
        // 在这里执行一些操作
    });

    // 在移除modal时执行一些动作
    $scope.$on('modal.removed', function() {
        // 在这里执行一些操作
    });
});