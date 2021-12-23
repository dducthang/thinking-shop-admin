const UserService = require('../models/services/userServices');

exports.getUserList = async (req, res, next) =>{
    const users = await UserService.getUser({isLock: false});
    res.render('main/users', {users});
}

exports.getLockedUsers = async (req, res, next) =>{
    const lockedUsers = await UserService.getUser({isLock: true});
    res.render('main/lockedUsers', {lockedUsers});
}

exports.getUserDetail = async (req, res, next) =>{
    res.render('main/userDetail');
}
