const mongoose = require("mongoose")

const pinsModelSchema = mongoose.Schema({

  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BoardModel",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
  },
  source: String,
  urlImage: String,
  name: String,
  description: String
})

const Pin = mongoose.model('PinsModel', pinsModelSchema);

const create = (pin) => {
  Pin.create(pin, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Created Docs : ", docs);
    }
  });
};

const get = async (id) => {  // lo tratamos como funcion assincron que va tardar mucho, 
  let query = { '_id': id };
  return await Pin.findOne(query); // Necessito saber que hs funcionado por eso utilizo una fun asincrona ,(await significa esperar hasta que se ejecute lo que estamos haciendo)
};

const all = async () => {
  return await Pin.find();
}

const remove = (id) => {
  let query = { '_id': id };
  Pin.deleteOne(
    query,
    function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Deleted Doc : ", docs);
      }
    });
};

const update = (id, updateduser) => {
  let query = { '_id': id };
  Pin.updateOne(
    query,
    updateduser,
    function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated Docs : ", docs);
      }
    });
};
const getBoardById = async (board) => {
  return await Pin.find({ 'board': board });

}

module.exports = {
  create,
  update,
  remove,
  get,
  all,
  getBoardById,
  Pin
};