exports.getUsers = async (req, res, next) =>{
    res.render('main/users')
}

exports.getLockedUsers = async (req, res, next) =>{
    res.render('main/lockedUsers')
}

exports.getUser = async (req, res, next) =>{
    res.render('main/userDetail')
}
