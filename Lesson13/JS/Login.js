var dataUser = [
    {
        id: 1,
        username: "devmaster",
        password: "123456@",
        fullName: "Devmaster 7",
        age: 6
    },
    {
        id: 2,
        username: "html",
        password: "1234567@",
        fullName: "Devmaster 8",
        age: 6
    },
    {
        id: 3,
        username: "js",
        password: "12345678@",
        fullName: "Devmaster 6",
        age: 6
    },
    {
        id: 4,
        username: "css",
        password: "123456789@",
        fullName: "Devmaster 3",
        age: 6
    }
];

function getInfor(){
    var username = $('[name = "uname"]').val();
    var pass = $('[name = "psw"]').val();
    preCheck(username, pass)
}

function preCheck(user, pass){
    if(user == '' || user == undefined || pass == '' || pass == undefined){
        alert("Username và password không được để chống");
    } else{
        alert("Đang tiến hành kiểm tra");
        checkLogin(user, pass)
    }
}

function checkLogin(username, password){
    var check = false;
    for(let i = 0; i < dataUser.length; i++){
        if(username == dataUser[i].username && password == dataUser[i].password){
         check = true;
    }
    }
    if(check){
        localStorage.setItem("checkIsLogin" , true)
        // alert("Tài khoản mật khẩu chính xác");
        window.location.href = "http://127.0.0.1:5500/Lesson13/Views/Overview.html";
    } else{
        localStorage.setItem("checkIsLogin" , false)
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }
}

// get: lấy data từ giai diện
// - check data:

//set: đẩy thông báo\

function preCheckLogin(){
    var isLogin = localStorage.getItem("checkIsLogin");
    if(isLogin == "true"){
        alert("Đã đăng nhập từ trước");
        window.location.href = "http://127.0.0.1:5500/Lesson13/Views/Overview.html";
    } else{
        console.log("Chưa đăng nhập");
    }
}
// preCheckLogin();

// $.ajax({url: "demo_test.txt", 
//     success: function(result){
//     console.log(result);
//   }});