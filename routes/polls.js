var express = require("express");
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require("../models/user");
var Poll = require("../models/poll");

router.get('/view/:id', (req, res) => {
   return res.render('index', { pollId: req.params.id, title: 'Poll Voating App' }); 
});

router.get('/mypolls/', (req, res) => {
    var decoded = jwt.decode(req.query.token);
    console.log("TOKEN: " + decoded);
    User.findById(decoded.user._id)
        .populate('polls', 'title')
        .exec(function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!user){
            return res.status(500).json({
                title: 'User not Found!',
                error: {message: 'User not found'}
            });
        }
        return res.status(200).json({
            message: 'Success',
            data: user.polls
        });
    });
});

router.get('/', (req, res, next) => {
    Poll.find()
        .populate('user', 'firstName')
        .exec((err, polls) => {
            if(err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                data: polls
            });
        });
});

router.get('/:id', (req, res, next) => {
    if(req.params.id){
        Poll.findById(req.params.id, (err, poll) => {
          if(err){
              return res.status(500).json({
                  title: 'An error ocurred',
                  error: err
              });
          }
          if(!poll){
              return res.status(500).json({
                  title: 'Poll not found',
                  error: { message: 'Poll not found' }
              });
          }
          
          return res.status(200).json({
             message: 'Poll found',
             data: poll
          });
       });    
    }
});

router.patch('/:id/', (req, res, next) => {
    const choice = req.body.choice;
    var decoded = jwt.decode(req.query.token);
    if(req.params.id && choice){
        
        if(choice.id === "custom"){
            
            User.findById(decoded.user._id, (err, user) => {
                if(err){
                      return res.status(500).json({
                          title: 'No valid user for custom choice',
                          error: err
                      });
                }
                
                Poll.findById(req.params.id, (err, poll) => {
                  if(err){
                      return res.status(500).json({
                          title: 'An error ocurred',
                          error: err
                      });
                  }
                  if(!poll){
                      return res.status(500).json({
                          title: 'Poll not found',
                          error: { message: 'Poll not found' }
                      });
                  }
                  
                  poll.choices.push({ name: choice.name, votes: choice.votes });
                  
                  poll.save((err, updatedPoll) => {
                    if(err) {
                        return res.status(500).json({
                            title: 'An error ocurred',
                            error: err
                        });
                    }
                    
                    return res.status(200).json({
                         message: 'Poll updated',
                         data: updatedPoll
                      });
                }); 
            });
       });    
        }else{
            Poll.findOneAndUpdate(
                { "_id": req.params.id, "choices._id": choice.id },
                {
                    "$inc": {
                        "choices.$.votes": 1
                    }
                },(err, updatedPoll) => {
                    if(err){
                      return res.status(500).json({
                          title: 'An error ocurred updating poll',
                          error: err
                      });
                    }
                    
                    return res.status(200).json({
                         message: 'Poll updated',
                         data: updatedPoll
                      });
                }
            );   
        }
    }
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', (req, res, next) => {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        const body = req.body;
        const poll = new Poll({ title: body.title, user: user });
        var choices = body.choices.split('\n');
        choices = choices.map((c) => { return { name: c, votes: 0 }; });
        poll.choices = choices;
        poll.save((err, result) => {
            if(err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }
            
            user.polls.push(poll);
            user.save();
            
            return res.status(201).json({
                message: 'Saved',
                data: result
            });
        });
    });
});

router.delete('/:id/', (req, res, next) => {
    var decoded = jwt.decode(req.query.token);
    Poll.findById(req.params.id, function (err, poll) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!poll){
            return res.status(500).json({
                title: 'No Poll Found!',
                error: {message: 'Poll not found'}
            });
        }
        if(poll.user != decoded.user._id){
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        poll.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            return res.status(200).json({
                message: 'Poll deleted',
                data: result
            });
        });
    });
});

module.exports = router;