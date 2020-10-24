const charities=require('../config/db.json');
module.exports=(req,res)=>{
    const data=charities.charities.find(artikel=>artikel.id==req.params.id);
    return res.json(data);
}