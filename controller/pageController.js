const getIndexPage = (req, res) => {

    console.log('request user:::',req.user);
    res.render('index',{link:"home"});
};

const getAboutPage = (req, res) => {
    res.render('about',{link:"about"});
};
const getRegisterPage = (req, res) => {
    res.render('register',{link:"register"});
};

const getLoginPage = (req, res) => {
    res.render('login',{link:"login"});
};
export { getIndexPage,getAboutPage,getRegisterPage,getLoginPage};
