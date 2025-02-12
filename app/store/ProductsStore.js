Ext.define('TestApp.store.ProductsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.productsStore',

    fields: ['id', 'name', 'description', 'price', 'quantity'],
    
    data: [
        { id: 1, name: 'Ноутбук', description: 'Игровой ноутбук', price: 1000, quantity: 5 },
        { id: 2, name: 'Клавиатура', description: 'Механическая клавиатура', price: 150, quantity: 10 },
        { id: 3, name: 'Мышь', description: 'Игровая мышь', price: 80, quantity: 0 }, 
        { id: 4, name: 'Монитор', description: '4K монитор', price: 400, quantity: 3 },
        { id: 5, name: 'Наушники', description: 'Беспроводные наушники', price: 120, quantity: 0 }
    ]
});
