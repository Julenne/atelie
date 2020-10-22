const { Router } = require('express');
const routes = Router();

routes.post('/teste', (req,res, next) => {
  return res.json({message: 'oioioi'})
})

module.exports = routes;