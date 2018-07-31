var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
var TestSchema = new mongoose.Schema({
  userName: String,
  password: String,
  name: String,
  age: String,
  email: String,
  time: {type: Date, default: Date.now()}
})
// TestSchema.pre('save', function (next) {
// 	if (this.isNew) {
// 		this.meta.createAt = this.meta.updateAt = Date.now();
// 	} else {
// 		this.meta.updateAt = Date.now();
// 	}
// 	next()
// })
var TestModel = db.model("test1", TestSchema)
module.exports = TestModel
