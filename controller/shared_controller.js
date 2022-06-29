
const sharedModel =require('../models/shared');

exports.saveSharedData = async function (req, res) {
  console.log("body",req.body)
 
  if(!req.body){
		return res.status(400).send({ errors: [{ title: 'Invalid  request', detail: 'Status details are un-Available' }] });
	  }
    const SharedDB = new sharedModel()
    if ((req && req.body)) {
      let saveSharedInfo = await Promise.resolve(SharedDB.saveSharedData(req.body)).catch(e => {
        return res.status(400).send({
          errors: [{ title: 'Invalid  request', detail: e }]
        });
      });
      if(saveSharedInfo){
        return res.json('updated:true');
      }
    } else {
      return res.status(400).send({
        errors: [{ title: 'Invalid  request', detail: e }]
      });
    }
  }
 
exports.getAllData = async function(req,res){
  const SharedDB = new sharedModel()
    var data = await Promise.resolve(SharedDB.getAllData()).catch(err=>{
        console.log("getting error in dataController.getAllData")
        console.log(err);
    })
    console.log(" getting all data...");
    console.log(data);
    res.json(data);
}

    