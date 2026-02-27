export function madeUpStock() {
    return {
        name: 'Jet-Black Stock',
        symbol: 'JBS',
        price: Number((Math.random() * 100 + 100).toFixed(3)),
        time: new Date().toLocaleTimeString()
    }
}