const ModelClient = require("../models/argonautes.model");

exports.getAllClient = (req, res, next) => {
    ModelClient.find()
        .then((user) => {
            console.log(user)
            res.status(200).json(user);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.createClient = (req, res, next) => {


    const client = new ModelClient({
        name: req.body.name
    });
    console.log(client)
    client
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur enregistré !" }))
        .catch((error) => res.status(400).json({ error }));
};














// // const { ArgonautesModel } = require('../models/argonautes.model');

// router.get('/', (req, res) => {
//     ArgonautesModel.find((err, docs) => {
//         if (!err) res.send(docs);
//         else console.log("Error to get data : " + err);
//     })
// });

// router.post('/', (req, res) => {
//     const newRecord = new ArgonautesModel({

//         name: req.body.name,

//     });

//     newRecord.save((err, docs) => {
//         if (!err) res.send(docs);
//         else console.log('Error creating new data : ' + err);
//     })
// })





