(() => {
    "use strict";

    angular.module('api.pokemon', [])
        .factory('Pokemon', ($http) => {
            const API = 'http://pokeapi.co/api/v2/pokemon/';
            let Pokemon = {};

            Pokemon.findByName = name => {
                return $http.get(API + name)
                    .then(result => {
                        return result.data;
                    })
            };

            return Pokemon;
        })
})();