Ext.define('TestApp.view.ProductCard', {
    extend: 'Ext.window.Window',
    xtype: 'productCard',
    title: 'Карточка товара',
    modal: true,
    width: 400,
    layout: 'vbox',

    viewModel: {
        data: {
            product: null,
            originalRecord: null
        }
    },
   
    items: [
        {
            xtype: 'form',
            reference: 'productForm',
            bodyPadding: 10,
            width: '100%',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'ID',
                    bind: '{product.id}'
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Наименование',
                    bind: '{product.name}'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Цена',
                    bind: '{product.price}',
                    minValue: 0,
                    allowBlank: false
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Кол-во',
                    bind: '{product.quantity}',
                    minValue: 0,
                    allowDecimals: false,
                    allowBlank: false
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Сохранить',
            handler: function (btn) {
                let win = btn.up('window');
                let vm = win.getViewModel();               

                let record = vm.get('originalRecord');
                let newData = vm.get('product');

                console.log('originalRecord:', record.data);
                console.log('product:', newData);

                if (record && newData) {
                    if (newData.price >= 0 && newData.quantity % 1 === 0 && newData.quantity >= 0 && (newData.price !== record.data.price || newData.quantity !== record.data.quantity)) {
                        record.set(newData); 
                        win.close();
                        Ext.Msg.alert('Успех', 'Данные сохранены!');
                    } else {
                        Ext.Msg.alert('Ошибка', 'Проверьте введенные данные.');
                    }
                }
            }
        },
        {
            text: 'Отмена',
            handler: function (btn) {
                btn.up('window').close();
            }
        }
    ]
});
