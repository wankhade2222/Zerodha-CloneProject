const {Schema} = require("mongoose");

const { OrderSchema} =  require("../schemas/OrdersSchema");

const OrdersModel = new Schema("order",OrdersSchema);

module.exports = {OrdersModel};