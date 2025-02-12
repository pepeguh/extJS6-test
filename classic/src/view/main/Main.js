
Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TestApp.controller.MainController',
        'TestApp.view.main.MainModel',
        'TestApp.view.main.List'
    ],

    
  controller: "main",
  viewModel: "main",
  
  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    items: [
      {
        
        xtype:'button',
        text:'Товары',
        handler:'onProductsButtonClick',
        margin:'10 0 0 0',
        handler: function(btn) {
          let tabPanel = btn.up('tabpanel');
          tabPanel.add({
              xtype: 'productTab',
              closable: true
          }).show();
        }
      },
      {
        xtype: "button",
        text: "Выход",
        handler: "onLogoutButtonClick",
        margin: "10 0 0 0",
      },
    ],
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
   
   
  ],
});
