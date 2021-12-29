const UserService = require('../models/services/userServices');

exports.getUserList = async (req, res, next) =>{
    const users = await UserService.getUsers({isLock: false});
    res.render('main/users', {users, user:req.user});
}

exports.getLockedUsers = async (req, res, next) =>{
    const lockedUsers = await UserService.getUsers({isLock: true});
    res.render('main/lockedUsers', {lockedUsers, user:req.user});
}

exports.getUserDetail = async (req, res, next) =>{
    const singleUser = await UserService.getUser(req.params.userId);
    res.render('main/userDetail', {singleUser, user:req.user});
}
