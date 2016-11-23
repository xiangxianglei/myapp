/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("page3Ctrl",function($scope,$ionicPopup,$http,$ionicScrollDelegate,$ionicSideMenuDelegate){
    $scope.products=[
        {"tite":"北京婚纱摄影——夏季婚纱礼服推...","new":"除了婚纱是北京最好的婚纱摄影的新人<br>结婚时必须的着装选择之外，新娘礼服<br>也是其中必不可的哦...","images":"images/7999.jpg"},
        {"tite":"室内婚纱照拍摄技巧 幸福甜蜜拍...","new":"室内婚纱照拍摄技巧 幸福甜蜜拍出来","images":"images/6999.jpg"},
        {"tite":"90后婚纱摄影风格有哪些","new":"90后婚纱摄影风格有哪些","images":"images/5999.jpg"},
        {"tite":"内景婚纱照如何摆造型","new":"一般我们拍外景婚纱照，如果新人表现<br>的有些许不好，还可以景物来弥补,<br>内景特写会比...","images":"images/9999.jpg"}
    ];

    $scope.home_s=function(){
        alert("未找到你想要的内容")
    };
    $scope.showAlert = function () {
        $ionicPopup.alert({
            title: '警告',
            template: '你输入的内容包涵敏感字，<br>未能找到你要的内容，<br>请确认后搜索。',
            buttons: [{text:"确定"}]
        }).then(function (res) {
            console.log('请慎重考虑，反正我告诉过你了。');
        });
    };
    //可选编辑按钮
    $scope.edit=function(product){
        alert(product.tite)
    };
    //可选分享按钮
    $scope.share=function(product){
        alert(product.new)
    };

    $scope.loadMore=function(){
        $http.get("json/package.json").success(function(data){
            //将要返回的data追加到products数组上
            //下面的语法相当于在$scope.products上调用push(data)
            Array.prototype.push.apply($scope.products,data)
        }).finally(function(){
            //通知框架，上拉刷新已经结束
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    };
    $scope.top= function (){
        $ionicScrollDelegate.scrollTop(true)
    };

    $scope.toggleRightSideMenu = function() {
        $ionicSideMenuDelegate.toggleRight(true);
    };
});