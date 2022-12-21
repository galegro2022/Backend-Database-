const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const TagStorage = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(TagStorage);
  } catch (err) {
   res.status(500).json(err);
  }// be sure to include its associated Product data
})

router.get('/:id', async (req, res) => {
  try {
  const MoreTagStorage = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  });

  if (!TagStorage) {
    res.status(404).json({ message: 'No products found with that id!' });
    return;
  }

  res.status(200).json(Tag);
} catch (err) {
  res.status(500).json(err);
}
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const OtherTagData = await Tag.create(req.body);
    res.status(200).json(OtherTagdata);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  try {
    const readerData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
