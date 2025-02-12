Ext.application({
    extend: 'TestApp.Application',

    name: 'TestApp',

    requires: [
        'TestApp.*',
        'TestApp.view.main.Main',
       
    ],
    controllers: [
        'LoginController',
        // 'MainController'
        
    ],
    launch: function() {
        
        Ext.create('TestApp.view.LoginWindow').show();
    },
    // mainView: 'TestApp.view.main.Main'
});
