exports.get404Error = async (req, res, next)=>{
    res.status(404).render('error/404', {
        user: req.user,
    });
}