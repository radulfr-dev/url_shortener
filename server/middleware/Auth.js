export default class Auth {
    static userIsLoggedIn(req, res, next){
        console.log(req.session)
        if(!req.session.user) return res.redirect('/login') 

        res.locals.userInfo = {
            username: req.session.user['username']
        }

        next()

    }
}
