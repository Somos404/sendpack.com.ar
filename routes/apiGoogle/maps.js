const router = require('express').Router()
const axios = require('axios');


router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/get',async(req,res)=>{
  return res.status(422).json({ errores: 'hola' })
});

router.get('/getRoute',async(req,res)=>{
  //console.log('req ====>', req);
    const params = req.url.split('?')[1].split('&');
    console.log('params ====>',params);
    const from = params[0].split('=')[1];
    console.log('from ====>',from);
    const to = params[1].split('=')[1];
    console.log('to ====>',to);
    console.log(from,to)
         axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=AIzaSyBvGSHhHEUPWu8S7cBHT7PxAnBo5aqeoKA&sensor=false&alternatives=true`)
        .then(function (response) {
            res.send(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });

});
module.exports = router