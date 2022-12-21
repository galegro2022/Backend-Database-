const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then(result => {
    res.json(result)
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne().then(result =>{
    res.json(result)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body).then(result => {
    res.json(result)
  })
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{where:{id:req.params.id}}).then(result => {
    res.json(result)
  })
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({where:{id:req.params.id}}).then(result => {
    res.json(result)
  })
  // delete a category by its `id` value
});

module.exports = router;
