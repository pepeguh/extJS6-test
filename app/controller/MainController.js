/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TestApp.controller.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function() {
        this.control({
            'app-main button[text="Выход"]': {
                click: 'onLogoutButtonClick'
            }
        });
    },


   
  

   onLogoutButtonClick: function(button) {
        var mainView = button.up('app-main');
        mainView.destroy();
        Ext.create('TestApp.view.LoginWindow').show();
    },



    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // }
});
