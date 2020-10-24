
// dekalarisakn sebuah variabel
const charities=require('../config/db.json')
module.exports=(req,res)=>{
    if(!charities){
        return res.status(402).json({msg:'Data tidak ditemukan'})
    }
    return res.json(charities);

}