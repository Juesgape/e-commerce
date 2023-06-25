/**
 * This function calculates total price of a new order
 * @param {Array} productsInOrder cartProducts: Array of Objects 
 * @returns {number}
 */
export const totalPrice = (productsInOrder) => {
    if(productsInOrder.length < 1) {
        return 0
    }
    let total = 0
    productsInOrder.forEach((product) => total += product.price)

    return total
}