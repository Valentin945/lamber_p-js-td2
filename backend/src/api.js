const express = require('express');
const {add, remove, list, get} = require('./pictureManagement/actions/index.js')

const apiRouter = express.Router();

apiRouter.get('/pictures', (req, res, next) => {
  const tab = get(parseInt(req.query.cursor, 10), parseInt(req.query.amount, 10));

  if (tab)
  {
     res.status(200).send(tab)
  }
  else
  {
    res.status(404).send()
  }
});

apiRouter.post('/pictures', (req, res, next) => {
   const element = req.body;

    if (add(element))
    {
      res.status(201).send(element);
    }
    else
    {
      res.status(500).send();
    }
});

apiRouter.delete('/pictures/:id', (req, res, next) => {
  if (remove(parseInt(req.params.id, 10))) {
    
    res.status(204).send();
  } else {
    res.status(404).send();
  }

});

module.exports = apiRouter;