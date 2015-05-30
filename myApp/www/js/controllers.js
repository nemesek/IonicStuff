angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  setTimeout(function() {
    //alert('Hello Jackson Poopy Head');
    var chat = {
    id: 100,
    name: 'Jackson Nemesek',
    lastText: 'I am a poopy head',
    face: 'img/jackson2.jpg'
  };
    Chats.add(chat);
    alert('foo');
  }, 1000);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
