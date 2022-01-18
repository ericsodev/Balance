/* A data class representing a single item that can be purchased */
export default class Item {
    /**
     * Create an item
     * @param {string} name - Name of item
     * @param {number} price - Price of item
     * @param {string} shop - Origin of item
     * @param {string} id - unique id of item
     * @param {Array.<string>} [tags=[]] - Categories the item identifies with
     */
    constructor(name, price, shop, id, tags = []) {
        this.name = name
        this.price = price
        this.shop = shop
        this.tags = tags
    }
}