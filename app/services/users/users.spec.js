describe('Users factory', () => {
    "use strict";
    let Users;

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

    let singleUser = usersList[1];

    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(($injector) => {
        Users = $injector.get('Users');
    }));

    it('should exist', () => {
        expect(Users).toBeDefined();
    });

    describe('.all()', () => {
        it('should have .#all()', () => {
            expect(Users.all).toBeDefined();
        });

        it('should return list of users', () => {

            expect(Users.all()).toEqual(usersList);
        });
    });
    describe('.findById()', () => {

        it('should exist', () => {
            expect(Users.findById).toBeDefined();
        });
        it('should find id 2', () => {
            expect(Users.findById('2')).toEqual(singleUser);
        })
    });
});
