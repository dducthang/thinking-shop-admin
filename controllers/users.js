const UserService = require('../models/services/userServices');

exports.getUserList = async (req, res, next) =>{
    const users = await UserService.getUsers({isLock: false});
    res.render('main/users', {users});
}

exports.getLockedUsers = async (req, res, next) =>{
    const lockedUsers = await UserService.getUsers({isLock: true});
    res.render('main/lockedUsers', {lockedUsers});
}

exports.getUserDetail = async (req, res, next) =>{
    const user = await UserService.getUser(req.params.userId);
    res.render('main/userDetail', {user});
}
