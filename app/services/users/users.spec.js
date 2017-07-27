describe('Users factory', () => {
    "use strict";
    let Users;

    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(_Users_ => {
        Users = _Users_;
    }));
    it('should exist', () => {
        expect(Users).toBeDefined();
    });

    it('should have .#all()', () => {
        expect(Users.all).toBeDefined();
    });

    it('should return list of users', () => {
        const usersList = [
            {
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane'
            },
            {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob'
            },
            {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'jimbo'
            },
            {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill'
            }
        ];
        expect(Users.all()).toEqual(usersList);
    })
});