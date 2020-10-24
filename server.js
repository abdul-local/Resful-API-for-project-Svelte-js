const express=require('express');

const app=express();

//untuk express json
app.use(express.json({extended:true}));
app.get('/',(req,res)=>{
    return res.send('Restful-Api to consume project svelte js');

})
// akses route semua data
app.use('/',require('./route/api/index'));



const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running to Port ${PORT}`)
});