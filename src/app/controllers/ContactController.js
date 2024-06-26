const { response } = require('express');
const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res)
  {
    const { orderBy } = req.query
    const contacts = await ContactsRepository.findAll(orderBy);

    res.json(contacts);
  }
  async show(req, res)
  {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact)
    {
      return res.status(404).json({ error: "User not found"});
    }

    res.json(contact);
  }
  async store(req, res)
  {
    const { name, email, phone, category_id } = req.body;
    if(!name)
    {
      return res.status(400).json({ error: 'name is required'});
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id
    })

    res.json(contact);
  }
  async update(req, res)
  {
    const { id } = req.params;
    const{
      name, email, phone, category_id
    } = req.body

    const contactExist = await ContactsRepository.findById(id);
    if(!contactExist)
    {
      return res.status(404).json({ error: 'user not found'})
    }
    const emailExist = await ContactsRepository.findByEmail(email);

    if(emailExist && emailExist.id !==id)
    {
      return res.status(400).json({ error: 'This e-mail is already in use'});
    }
    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id
    })

    res.json(contact);
  }
  async delete(req, res)
  {
    const { id } = req.params;
    if(!contact)
    {
      return res.status(404).json({ error: 'User not found'});
    }
    await ContactsRepository.delete(id);

    res.sendStatus(204);
  }
}

//Singleton
module.exports = new ContactController();
