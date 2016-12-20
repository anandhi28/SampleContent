'use strict';

(function (angular) {

  angular
  .module('rv.components.RVCenterModule')
  .directive('rvInfo', rvInfoDirective);

  function rvInfoDirective() {

    return {
      restrict: 'AE',
      scope: {},
      bindToController: {
        additionalInfo: '='
      },
      controller: rvInfoController,
      controllerAs: 'vm',
      templateUrl: 'modules/components/rv-center/templates/rv-info-template.html'
    };
  }

  rvInfoController.$inject = [];

  function rvInfoController() {
    var vm = this; // jshint ignore:line
    console.log(vm.additionalInfo);
  }

})(angular);