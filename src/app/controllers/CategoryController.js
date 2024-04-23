const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(req, res)
  {
    const { orderBy } = req.query
    const contacts = await CategoriesRepository.findAll(orderBy);
    res.json(contacts);
  }
  async store(req, res)
  {
    const { name } = req.body;
    if(!name)
    {
      return res.status(400).json({ error: 'name is required'});
    }

    const category = await CategoriesRepository.create({ name });

    res.json(category);
  }


}

module.exports = new CategoryController();
