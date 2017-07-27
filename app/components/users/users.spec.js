describe('UsersController', () => {
    "use strict";
    let $controller, UsersController, UsersFactory;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.users'));
    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject($injector => {
        $controller = $injector.get('$controller');
        UsersFactory = $injector.get('Users');

        spyOn(UsersFactory, 'all').and.callFake(()=>{
            return userList;
        });

        UsersController = $controller('UsersController', {Users: UsersFactory});

    }));

    const userList = [
        { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
        { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
        { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
        { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
    ];

    it('should be defined', function () {
        expect(UsersController).toBeDefined();
    });

    it('should initialize with a call to Users.all()', function() {
        expect(UsersFactory.all).toHaveBeenCalled();
        expect(UsersController.users).toEqual(userList);
    });

});