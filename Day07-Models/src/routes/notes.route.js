const express = require('express');
const noteModel = require('../models/notes.model')
const noteRouter = express.Router();

noteRouter.use(express.json());

noteRouterpost('/notes',async(req,res)=>{
    const{title , description} = req.body;
    const note= await noteModel.create({
        title:title,
        description: description
    });
    res.status(201).json({
        message:"Note created sucessfully",
        newNote:note
    })
});

noteRouter.get('/notes',async(req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message:"notes fetched sucessfully",
        allNotes:notes
    });
});

module.exports = notesRouter;