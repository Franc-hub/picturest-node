const boardModel = require("./boards.model");
const pinsModel = require("../pins/pins.model");
const getAll = async (req, res) => {
  const boards = await boardModel.all();
  return res.status(200).json(boards);
};

const getOne = async (req, res) => {
  let board = await boardModel.get(req.params.id);
  board = { board, "pins": await pinsModel.getBoardById(req.params.id) };
  if (board) {
    console.log('board', board);
    return res.status(200).json(board);
  }
  return res.status(404).end();
};

const create = (req, res) => {
  const newboard = req.body;
  const boardsUpdated = boardModel.create(newboard);
  return res.status(201).json(boardsUpdated);
};

const update = (req, res) => {
  const updatedboard = req.body;
  const boardsUpdated = boardModel.update(req.params.id, updatedboard);
  return res.status(200).json(boardsUpdated);
};

const remove = (req, res) => {
  const boardsWithoutTheDeleted = boardModel.remove(req.params.id);
  return res.status(200).json(boardsWithoutTheDeleted);
};

const PinsOfBoards = async (req,res) =>{
  const myPins = await pinsModel.PinByID(req.params.id);
  return res.status(200).json(myPins);
}
module.exports = {
  create,
  update,
  getAll,
  getOne,
  remove,
  PinsOfBoards
};
