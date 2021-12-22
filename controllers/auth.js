exports.getLogin = async (req, res, next) =>{
    res.render('auth/login')
}

exports.getSignup = async (req, res, next) =>{
    res.render('auth/signup')
}

exports.getForgotPassword = async (req, res, next) =>{
    res.render('auth/forgotPassword')
}