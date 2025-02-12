Ext.define('TestApp.view.LoginWindow', {
    extend: 'Ext.window.Window',
    xtype: 'loginwindow',
    title: 'Авторизация',
    width: 300,
    height: 200,
    closable: false,
    resizable: false,
    modal: true,
    layout: 'fit', 
    items: [
        {
            xtype: 'form', 
            bodyPadding: 10,
            defaults: {
                anchor: '100%',
                allowBlank: false
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Логин',
                    name: 'username',

                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Пароль',
                    name: 'password',
                    inputType: 'password'
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Войти',
            handler: 'onLoginButtonClick'
        }
    ]
});