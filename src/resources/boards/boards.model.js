const mongoose = require("mongoose");
const { Pin } = require("../pins/pins.model");

const boardModelSchema = mongoose.Schema({

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
  },
  title: String,
  description: String,
  collaborators: []
});

const Board = mongoose.model('BoardModel', boardModelSchema);

const create = (board) => {
  Board.create(board, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Created Docs : ", docs);
    }
  });
};

const get = async (id) => {
  let query = { '_id': id };
  return await Board.findOne(query);
};

const all = async () => {
  return await Board.find().populate("author", "username"); //
}

const remove = (id) => {
  let query = { '_id': id };
  Board.deleteOne(
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

const update = (id, updatedBoard) => {
  let query = { '_id': id };
  Board.updateOne(
    query,
    updatedBoard,
    function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated Docs : ", docs);
      }
    });
};

const PinById = async (id) => {
  let query = { 'board_id': pins };
  return await Pin.find((query))
}

module.exports = {
  create,
  update,
  remove,
  get,
  all,
  PinById,
  Board
};