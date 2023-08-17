const cookieConfig = {
    httpOnly :true, // 웹통신을할때 쿠키를 허용하겠다(다른방식으로는 허용안함)
    maxAge : 5000   // 이 쿠키값을 얼마동안 유지해줄거냐 5000 > 5sc
}
const index = (req,res)=>{
  
    console.log(req.cookies);
    const userCookie = req.cookies.myCookie 
    // 사용자 요청으로부터 쿠키를 가져올껀데, myCookie라는 이름이있으면 갖고와라
    res.cookie("myCookie","valueCookie",cookieConfig)// 쿠키값을 응답하겠다(이름:값)
    res.render("cookie/cookie01",{userCookie}); // {userCookie값 전달해준다}
    
}
const popup= (req,res)=>{
    res.render("cookie/popup");
}
const quiz=(req,res)=>{
    const userCookie = req.cookies.myCookie; // 페이지를 요청할때는 우리가 만들 쿠키를 가져오겠다.
    res.render("cookie/quiz",{userCookie}); 
}
const quizPopup=(req,res)=>{
    res.render("cookie/quizPopup");
}
const makeCookie=(req,res)=>{
    res.cookie("myCookie","value",cookieConfig);
    res.render("cookie/quizPopup");
}
module.exports = {index,popup,quiz,quizPopup,makeCookie};