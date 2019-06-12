const router = require ('express').Router()
const List = require('../db').import('../models/list');


router.post('/create', (req,res)=>{
    List.create({
        ride: req.body.ride,
        park: req.body.park,
        land: req.body.land

    })
    .then(
        
        createsSuccess = list => {
        res.status(200).json({message: 'list logged', list: list})
        },
        
    
    createError = err =>{
        res.send(500, err.message);
    })
})

router.get('/getall', (req,res)=>{
    List.findAll({

    })
    .then(list => res.status(200).json(list))
    .catch(err=> res.status(500).json({error: err}))
});

router.put('/update/:id',(req,res) =>{
    List.update(req.body, { where: { id: req.params.id }})
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({error: err}))
})

router.delete('/delete/:id', (req,res)=>{
    List.destroy({where: {id: req.params.id}})
    .then(recChanged => res.status(200).json(recChanged))
    .catch(err=> res.status(500).json({error:err})) 
})

module.exports = router;