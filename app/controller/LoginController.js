Ext.define("TestApp.controller.LoginController", {
  extend: "Ext.app.Controller",

  init: function () {
    this.control({
      'loginwindow button[text="Войти"]': {
        click: "onLoginButtonClick",
      },
    });
  },

  onLoginButtonClick: function (button) {
    var window = button.up("window");
    var form = window.down("form");
    var values = form.getValues();

    if (values.username === "admin" && values.password === "padmin") {
      window.close();
      var mainView = Ext.create("TestApp.view.main.Main");

      Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [mainView]
    });

      
    } else {
      Ext.Msg.alert("Ошибка", "Неверный логин или пароль");
    }
  },
});
