import Item from "./Item"
/* A class representing an expense (a singular transaction not representing subsequent identical expenses)*/
class Transaction {
    /**
     * Create a transaction 
     * @param {Item} item - Item purchased
     * @param {number} quantity - Quantity of items purchased
     * @param {Date} date - Purchase date
     */
    constructor(item, quantity, date = Date(Date.now())) {
        this.item = item
        this.quantity = quantity
        this.date = date
    }

    editTransaction(quantity, date) {
        this.quantity = quantity
        this.date = date
    }
}