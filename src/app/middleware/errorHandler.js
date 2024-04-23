module.exports = (error, req, res, next) =>{
  console.log('####Error Hendler###')

  console.log(error)
  res.sendStatus(500);
}
