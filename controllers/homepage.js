exports.getIndex = async (req, res, next) =>{
    const user = req.user;
    res.render('main/index', {
        user
    })
}

