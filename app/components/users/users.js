(() => {
    'use strict';

    angular.module('components.users', [])
        .controller('UsersController', function (Users) {
            let self = this;

            self.users = Users.all();
        })
        .config(($stateProvider) => {
            $stateProvider
                .state('users', {
                    url: '/users',
                    templateUrl: 'components/users/users.html',
                    controller: 'UsersController as uc'
                });
        });
})();