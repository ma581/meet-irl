describe('Users factory', ()=>{
    "use strict";
    let Users;

    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(_Users_=> {
        Users = _Users_;
    }));
    it('should exist', ()=>{
        expect(Users).toBeDefined();
    })
});