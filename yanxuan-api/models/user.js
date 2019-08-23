const db = require("../config/db");

const schema = new db.Schema({
  username: String,
  password: String,
  avatar: {
    type: String,
    default:
      "http://b-ssl.duitang.com/uploads/item/201707/19/20170719211350_4PnBt.jpeg"
  }
});

module.exports = db.model("user", schema);
