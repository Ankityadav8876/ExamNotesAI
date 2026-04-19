import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
   try {
    let {token} = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Token is not found" });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
        return res.status(401).json({ message: "user does't have valid token" });
    }
    req.userId = verifyToken.userId;
    next();
    
   } catch (error) {
     return res.status(500).json({ message: `isAuth Error ${error}` });
   }

}
export default isAuth;





