const { User, Thought } = require('../models');

const thoughtController = {
    getAllThought(req, res) {
      Thought.find({})
        .populate({
          path: 'user',
          select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
      },
    }

module.exports = thoughtController;