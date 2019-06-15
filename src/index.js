const express = require('express');
const MongoClient = require('./bongohive')

const app = express();

app.post('startup', function (req, res) {
            console.log(req.body);
            res.send({
                added: req.body
            });

 app.get('/startup', function (req, res) {
                res.send({
                Founder: startup.founder
                });
            });

app.get('/startups', function (req, res) {
                res.send(startups);
            });
           
app.put('/startup', function (req, res) {
                res.send({
                    updated: req.body

                });
            });

app.listen(3000);
