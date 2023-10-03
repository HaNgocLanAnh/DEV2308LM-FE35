// // 1. Biến
// // khai báo: số chuỗi, ngày tháng...
// // int x = 5
// //var tên_biến = gán giá trị
// // giá trị => quy địnhkieeur dự liệu của biến
// // value = số ==> datatype: số
// // value = chuỗi ==> datatype: chuỗi
// var a1 = 100; //a1 có kiểu dữ liệu dạng số
// var a2 = "dev" // a2 có kiểu dl dạng chuỗi

// //2. Toán tử
// //các phép số học: +, -, *, /, %

// var x1 = 10;
// var x2 = "50";
// var x3 = x1 + x2;
// //==> quy tăc phép cộng:
// // số + số ===> số
// // chuỗi + chuỗi ===> chuỗi
// //chuỗi + số / số + chuỗi ===> chuỗi (vd: 10 + '50' = '10' + '50' = '1050')

// console.log("giá trị của x3 = ", x3);
// console.log("giá trị của x3 = " + x3);

// // các phép toán logic
// // so sánh: ==, >, <, >=, <=, ===
// // điều kiện: &&, ||, !

// // khai báo hai số nguyên bất kỳ, tính hiệu số lớn - số bé
// //3, cấu trúc điều kiện:
// // if-else ; switch - case
// //cú pháp: đầy đủ, khuyết thiếu, if lồng

// //if(điều_kiện) {
// //     ... các câu lệnh js sẽ được thực thi nếu câu lệnh = true...   
// //} else{
// //     ... các câu lệnh js thực thi nếu câu lệnh = false...   
// //}
// var st1 = 50;
// var st2 = 100;
// if(st1>st2){
//     hieu = st1 -st2;
//     console.log("Hiêu hai số là: st1 - st2 = " + st1 + " - " + st2 + " = " + hieu);
// }else{
//     hieu = st2 -st1;
//     console.log("Hiêu hai số là: st2 - st1 = " + st2 + " - " + st1 + " = " + hieu);
// }

// //BT1: biện luận pt bậc nhất 1 ẩn: a*x + b = 0
// var a = 10;
// var b = 100;

// if(a==0){
//     //0*a + b = 0
//     if(b==0){
//         console.log("Phương trình có vô số nghiệm");
//     } else{
//         console.log("Phương trình có vô nghiệm");
//     }
// } else{
//     console.log("Phương trình có 1 nghiệm duy nhất: x = ", -b/a);
// }

// // Khai báo ba cạnh c1, c2, c3 là ba cạch của một tam giác
// // Biện luận các trường hợp của tam giác

// var c1 = 7;
// var c2 = 7;
// var c3 = 9;

// if( (c1+c2>c3) && (c2+c3>c1) && (c1+c3>c2))//Kiểm tra ssk 3 cạch là của 1 tam giác
// {
//     if(c1==c2 && c2==c3){
//         console.log("Tam giác trên là tam giác đều");
//     } else{
//         if((c1*c1 + c2*c2 == c3*c3) || (c2*c2 + c3*c3 == c1*c1) || (c1*c1 + c3*c3 == c2*c2) ){
//             if(c1==c2 || c2==c3 || c1==c3){
//                 console.log("Tam giác trên là tam giác vuông cân");
//             } else{
//                 console.log("Tam giác trên là tam giác vuông");
//             }
//         } else{
//             if(c1==c2 || c2==c3 || c1==c3 ){
//                 console.log("Tam giác trên là tam giác cân");
//             } else{
//                 console.log("Tam giác trên là tam giác thường");
//             }
//         }
//     }
// }
// else
//     console.log("Ba cạnh không thuộc tam giác");

// // BTVN2: biện luận pt bậc 2 1 ẩn: a*x2 + b*x + c = 0 với mọi a

// // swicth - case: các bài tập năm tháng ngày; các bt liên quan đến lựa chọn

// // Vòng lặp và mảng
// //for ; while , do-while
// // cú pháp
// // for(đếm; điều_kiện; hành động){
// //          thân for: js    
// //}

// //thứ tự for:
// //b1: khởi tạo tại biến đếm
// //b2: check điều kiện :
// //          điều kiện đúng: thực thi thân for = > chạy hành_động => quay trở lại b2
// //          điều kiện sai: dừng for / kết thúc

// var von = 10;
// for(var i = von; i > 0; i--){
//     console.log("Còn đánh được");
// }
// console.log("Hết vốn, von = 0");

// for(var i = 1; i<=10; i++){
//     console.log(i);
// }
// console.log(1);
// console.log(2);
// console.log(3);

// //mảng
// // khái niệm: tập các phần tử (bất kỳ)
// // đặc điẻm: mỗi phần tử được đánh index từ 0 cho tới cuối - 1
// //           tương tác với các phần tử qua index: tên_mảng[index]
// // khai báo:
//     var array1 = new Array();
//     var array2 = [1, 2, 3, '4', "5", "7"];
//     console.log("Phần tử có index = 4 có giá trị là: ", array2[4]);
//     var xx1 = array2[2]; // xx1=3
//     var xx2 = array2[3]; // xx2 = '4'

//     for(var i = 0; i< array2.length; i++){
//         console.log(array2[i]);
//     }

//     var arr = [1, 5, 84, 9, 4, 6];
//     //log ra các số lẻ trong mảng arr
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 != 0){
//             console.log("Test as: ", arr[i]);
//         }
//     }

// //bt: cho một mảng số bất kỳ, yêu cầu tính tổng tất cả giá trị trong mảng
// var arrNumber = [1, 2, 3, '4', "5", "7"];
// var sum = 0;
// for(var i = 0; i< arrNumber.length; i++){
//     sum = parseInt(sum) + parseInt(arrNumber[i]);
// }
// console.log('Tổng của mảng arrNumber là: ', sum);

// //BTVN: tính tích tất cả các phần tử (convert về số)
// //      tính tổng và tích các phần tử ở vị trí chẵn

// // Tích tất cả phần tử (convert về số)
// var arrNumber1 =[2, 5, 7, '12', 10, '6'];
// var tich = 1;
// for(var i=0; i<arrNumber1.length; i++){
//     tich = parseInt(tich) * parseInt(arrNumber1[i]);
// }
// console.log('Tích các phần tử của mảng arrNumber1 là: ', tich);

// // tính tổng và tích các phần tử ở vị trí chẵn
// var chan = 0;
// var le = 0;
// for(var i=0; i<arrNumber1.length; i++){
//     if(i % 2 == 0){
//         chan = parseInt(chan) + parseInt(arrNumber1[i]);
//     } else{
//         le = parseInt(le) + parseInt(arrNumber1[i]);
//     }
// }
// console.log('Tổng các phần tử ở vị trí chẵn của mảng arrNumber1 là: ', chan);
// console.log('Tổng các phần tử lẻ ở vị trí lẻ của mảng arrNumber1 là: ', le);

//end less 09

//------------------------------------------------------------------------------

//start less 10
//biến
//toán tử
//mảng: array
//định nghĩa: 'tập hợp các phần tử'
// đánh dấu từ 0 => length -1
//tương tác: qua index
// các hàm tương tác với array: push(), pop(), ...

var array3 = [1,2,3,4,5,6,7,8,9,10,10,5];
//yêu cầu khai báo một số bất kỳ và tìm vị trí số đố trong mảng array3
var x4 = 10;
var temp = false;
for(let j=1; j<=array3.length; j++){
    if(parseInt(x4) === parseInt(array3[j-1])){
        console.log("Giá trị " + x4 + " tồn tại ở vị trí thứ " + j);
        temp = true;
    }
}
// if(temp == false){
//     console.log("Giá trị " + x4 + " không tồn tại trong array3");
// }
if(!temp){
    console.log("Giá trị " + x4 + " không tồn tại trong array3");
}

// hàm: function

//khai báo:
function ten_ham(tham_so_dau_vao){
    //thân hàm
}

// sử dụng hàm:
//ten_ham(1);

function summary(a, b){
    var totalAB = parseInt(a) + parseInt(b);
    console.log("Tổng hai tham số đầu vào là: ", totalAB);
}
summary(15, "50"); //==>1550
summary(10,20,50);

//các tham số đầu vào có kiểu dữ liệu: tự định nghĩa
//tham số 1 <==> input 1
//tham số n <==> input n

function filter(x5){
    var temp2 = false;
    for(let j=1; j<=array3.length; j++){
        if(parseInt(x5) === parseInt(array3[j-1])){
            console.log("Giá trị " + x5 + " tồn tại ở vị trí thứ " + j);
            temp2 = true;
        }
    }
    if(!temp2){
        console.log("Giá trị " + x5 + " không tồn tại trong array3");
    }
}
filter(2);
filter(100);

var arrDemo = ["anc", 'dev', 123, '78874', "js"];
// btvn1: viết 1 hàm tìm kiếm trong tập dữ liệu có sẵn bất kỳ,
//kiểm tra xem giá trị đầu vào xuất hiện bao nhiêu lần, ở đâu.
//nếu không tồn tại ==> in ra: no data;

// end function

// đối tượng: object

//tập hợp thuộc tính ==> đối tượng
//khai báo:
var obj1 = {}
var obj2 = new Object();
obj2.chieu_cao = 171;
obj2.can_nang = 55;
obj2.que_quan = "Việt Nam";
obj2.gioi_tinh = "Nam";

var obj3 = {
    chieu_cao : 172,
    can_nang : 62,
    que_quan: 'Hải Phòng',
    dan_toc: "Kinh"
}

// array object: JSON
var n1 = {
    chieu_cao : 172,
    can_nang : 62,
    que_quan: 'Hải Phòng',
    dan_toc: "Kinh"
};
var n2 = {
    chieu_cao : 172,
    can_nang : 64,
    que_quan: 'Hà Nội',
    dan_toc: "Kinh"
};
var n3 = {
    chieu_cao : 172,
    can_nang : 63,
    que_quan: 'Quảng Ninh',
    dan_toc: "Kinh"
};
var arrObj = [n1,n2,n3] // <==> [1 2 3]
n3.can_nang//==>63
arrObj[2].can_nang //n3.can_nang
arrObj[2] //n3
// [
//     {
//         chieu_cao : 172,
//         can_nang : 62,
//         que_quan: 'Hải Phòng',
//         dan_toc: "Kinh"
//     },
//     {
//         chieu_cao : 172,
//         can_nang : 62,
//         que_quan: 'Hải Phòng',
//         dan_toc: "Kinh"
//     },
//     {
//         chieu_cao : 172,
//         can_nang : 62,
//         que_quan: 'Hải Phòng',
//         dan_toc: "Kinh"
//     }
// ]

function search(text, number){
    var check = false;
    for(let i = 0; i<arrObj.length; i++){
        if(text.toLowerCase() == arrObj[i].que_quan.toLowerCase() && number < arrObj[i].chieu_cao){
            console.log('Có tồn tại người ở ', text);
            check = true;
        }
    }
    if(!check) console.log("Không tồn tại người ở", text);
}

search('Hải Phòng', 180);
search('hải phòng',170);

//end object

//start DOM
// Khái niệm & mục đích
// Phân loại DOM
// Syntax using DOM
//DOM ELEMENT
//DOM id
//DOM class
// DOM...

function showValueInput(){
    var y = document.getElementById('username').value;
console.log("Demo username: ", y);
}

var listProduct = [
    {
        id: 1,
        name: "đông hồ",
    }
]

//btvn: tạo listUser

//lưu ý về biến:
//phạm vi của biến: local - global : cục bộ - toàn bộ