Ext.define('TestApp.view.main.ProductTab', {
    extend: 'Ext.panel.Panel',
    xtype: 'productTab',
    title: 'Товары',

    layout: 'fit',

    items: [
        {
            xtype: 'grid',
            reference: 'productGrid',
            store: {
                type: 'productsStore'
            },
            columns: [
                { text: 'ID', dataIndex: 'id', flex: 1 },
                { text: 'Название', dataIndex: 'name', flex: 2 },
                { text: 'Описание', dataIndex: 'description', flex: 3 },
                { text: 'Цена', dataIndex: 'price', flex: 1 },
                { text: 'Кол-во', dataIndex: 'quantity', flex: 1, 
                    renderer: function(value, meta) {
                        if (value === 0) {
                            meta.style = "background-color: red; color: white;";
                        }
                        return value;
                    }
                }
            ],
            listeners: {
                cellclick: function (grid, td, cellIndex, record, tr, rowIndex, e) {
                    let column = grid.getColumnManager().getColumns()[cellIndex];

                    if (column && column.dataIndex === 'name') { 
                        Ext.create('TestApp.view.ProductCard', {
                            viewModel: {
                                data: {
                                    product: Ext.apply({}, record.getData()), 
                                    originalRecord: record 
                                }
                            }
                        }).show();
                    }
                }
            },
            tbar: [
                {
                    xtype: 'textfield',
                    emptyText: 'Фильтр по ID',
                    enableKeyEvents: true,
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() === Ext.EventObject.ENTER) {
                            let store = field.up('grid').getStore();
                            store.filter('id', field.getValue());
                            }
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    emptyText: 'Фильтр по Описанию',
                    enableKeyEvents: true,
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() === Ext.EventObject.ENTER) {
                            let store = field.up('grid').getStore();
                            let query = field.getValue().toLowerCase();
                            store.getFilters().removeAtKey('descriptionFilter');

                            if (query) {
                                store.addFilter({
                                    id: 'descriptionFilter', 
                                    filterFn: record => {
                                        return record.get('description').toLowerCase().includes(query);
                                    }
                                });
                            }

                        }
                    }
                    }
                }
            ]
        }
    ]
});
