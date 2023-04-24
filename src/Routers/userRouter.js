const express = require('express');

const userRouter = express.Router();




const {
    getUser, createUser, deleteUser, updateUser, getResLike, createResLike, deleteResLike, createRes, getRes, createOrder } = require('../Controllers/userController');


userRouter.get('/get-user', getUser)

userRouter.post('/create-user', createUser)

userRouter.delete('/delete-user', deleteUser)

userRouter.put('/update-user', updateUser)

userRouter.get('/get-res-like', getResLike)

userRouter.post('/create-res-like', createResLike)

userRouter.delete('/delete-res-like', deleteResLike)

userRouter.get('/get-rate-res', getRes)

userRouter.post('/create-rate-res', createRes)

userRouter.post('/create-order', createOrder)

module.exports = userRouter;