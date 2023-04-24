//const User = require('../Models/user');
const {Sequelize} = require('sequelize');
const { successCode, errorCode } = require('../ultils/respone');
const Op = Sequelize.Op;



const initModel = require('../Models/init-models');
const sequelize = require('../Models/index');
const models = initModel(sequelize);




const getUser = async (req, res) => {
    try{
        let data = await models.user.findAll();
        //res.status(200).send(data)
        successCode(res, "lấy data thành công", data);
    } catch(err){
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
    //sẽ bị bất dòng bộ khi gõ kiểu này
    //const data = User.findAll();


    

};

const createUser = async (req, res) => {
    try{
        let { full_name, email, pass_word } = req.body;

        let newData = { full_name, email, pass_word };

        await models.user.create(newData);
        //res.status(200).send("create User")
        successCode(res, "tạo data thành công", "");
    } catch (err) {
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};

const updateUser = async (req, res) => {
    try {
        let { user_id } = req.params;
        let { full_name, email, pass_word } = req.body;
        let newData = { full_name, email, pass_word };
        await models.user.update(newData,
            {
                where: { user_id }
            }
        );
        //res.status(200).send("update User")
        successCode(res, "cập nhật data thành công", "");
    } catch (err) {
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};

const deleteUser = async (req, res) => {
    try {
        let { user_id } = req.params;
        await models.user.destroy({
            where: { user_id }
        });
        //res.status(200).send("delete User")
        successCode(res, "xóa data thành công", "");
    } catch (err) {
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
}; 


const getResLike = async (req, res) => {
    try{
        let data = await models.like_res.findAll();
        //res.status(200).send(data)
        successCode(res, "lấy data thành công", data);
    } catch(err){
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};

const createResLike = async (req, res) => {
    try{
        let { user_id, res_id, date_like } = req.body;

        let newData = { user_id, res_id, date_like };

        await models.like_res.create(newData);
        //res.status(200).send("create User")
        successCode(res, "tạo data thành công", "");
    } catch (err) {
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};
const deleteResLike = async (req, res) => {
    try {
        let { user_id } = req.params;
        await models.like_res.destroy({
            where: { user_id, }
        });
        //res.status(200).send("delete User")
        successCode(res, "xóa data thành công", "");
    } catch (err) {
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};

const createRes = async (req, res) => {
    try{
        let { user_id, res_id, amount, date_like } = req.body;

        let newData = { user_id, res_id, amount, date_like };

        await models.rate_res.create(newData);
        //res.status(200).send("create User")
        successCode(res, "tạo data thành công", "");
    } catch (err) {
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};

const getRes = async (req, res) => {
    try{
        let data = await models.rate_res.findAll();
        //res.status(200).send(data)
        successCode(res, "lấy data thành công", data);
    } catch(err){
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};

const createOrder = async (req, res) => {
    try{
        let { user_id, food_id, amount, code, arr_sub_id } = req.body;

        let newData = { user_id, food_id, amount, code, arr_sub_id };

        await models.order.create(newData);
        //res.status(200).send("create User")
        successCode(res, "tạo data thành công", "");
    } catch (err) {
        //res.status(500).send("lỗi BE");
        errorCode(res, "Lỗi BE");
    }
};

module.exports = {getUser, createUser, updateUser, deleteUser, getResLike, createResLike, deleteResLike, getRes, createRes, createOrder};

