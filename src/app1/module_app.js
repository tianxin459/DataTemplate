(function() {
    'use strict';

    angular.module('app', []);
})();
//-------------------------------------ctrl-------------------------------------//
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ctrl', ControllerController);

    // ControllerController.$inject = [''];
    function ControllerController($scope) {
        var vm = this;
        $scope.val = "et";

        activate();

        ////////////////

        function activate() { }
    }
})();