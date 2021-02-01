const pinsModel = require("./pins.model")

const getAll = async (req, res) => {
  const pins = await pinsModel.all();
  return res.status(200).json(pins);
};

const getOne = async (req, res) => {
  const pin = await pinsModel.get(req.params.id);
  if (pin) {
    console.log('pin', pin);
    return res.status(200).json(pin);
  }
  return res.status(404).end();
};

const create = (req, res) => {
  const newpin = req.body;
  const pinsUpdated = pinsModel.create(newpin);
  return res.status(201).json(pinsUpdated);
};

const update = (req, res) => {
  const updatedpin = req.body;
  const pinsUpdated = pinsModel.update(req.params.id, updatedpin);
  return res.status(200).json(pinsUpdated);
};

const remove = (req, res) => {
  const pinsWithoutTheDeleted = pinsModel.remove(req.params.id);
  return res.status(200).json(pinsWithoutTheDeleted);
};
const getBoardById = async (req,res) => {
  const boardPins = await pinsModel.getBoardById(req.params.id);
  return res.status(200).json(boardPins);
}
module.exports = {
  create,
  update,
  getAll,
  getOne,
  remove,
  getBoardById
};