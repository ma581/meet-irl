describe('Pokemon factory', () => {
    let Pokemon, $q, $httpBackend;

    // Load the api.pokemon module which we'll create next
    beforeEach(angular.mock.module('api.pokemon'));
    // Verify our controller exists
    it('should exist', () => {
        expect(Pokemon).toBeDefined();
    });

    // Inject the Pokemon service
    beforeEach(inject((_Pokemon_, _$q_, _$httpBackend_) => {
        Pokemon = _Pokemon_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;

        spyOn(Pokemon, 'findByName').and.callThrough();
    }));


    describe('.findByName()', () => {
        "use strict";
        let result = {};
        const API = 'http://pokeapi.co/api/v2/pokemon/';
        const RESPONSE_SUCCESS = {
            'id': 25,
            'name': 'pikachu',
            'sprites': {
                'front_default': 'http://pokeapi.co/media/sprites/pokemon/25.png'
            },
            'types': [{
                'type': {'name': 'electric'}
            }]
        };

        it('should return a Pokemon when called with a valid name', () => {
            let search = 'pikachu';

            $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

            expect(Pokemon.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            Pokemon.findByName(search)
                .then(res => {
                    result = res;
                });

            $httpBackend.flush();

            expect(Pokemon.findByName).toHaveBeenCalledWith(search);
            expect(result.id).toEqual(25);
            expect(result.name).toEqual('pikachu');
            expect(result.sprites.front_default).toContain('.png');
            expect(result.types[0].type.name).toEqual('electric');
        })
    })
});