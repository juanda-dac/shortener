export function authenticated(req, res, next){
    if(!req.userId) return res.status(401).json({
        message:"You don't have premissions for this action"
    });
    next();
}