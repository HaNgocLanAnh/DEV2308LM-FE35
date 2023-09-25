// BTVN1: biện luận pt bậc 2 1 ẩn: a*x2 + b*x + c = 0 với mọi a
var a = 1;
var b = 2;
var c = 1;

if(a == 0){
    if(b == 0){
        if(c == 0){
            console.log("Phương trình có vô số nghiệm");
        } else{
            console.log("Phương trình vô nghiệm");
        }
    } else{
        console.log("Phương trình có 1 nghiệm duy nhất là: ", -c/b);
    }
} else{
    var denta = b*b - 4*a*c;
    if(denta<0){
        console.log("Phương trình vô nghiệm");
    } else{
        if(denta == 0){
            console.log("Phương trình có nghiệm kép là: x = ", -b/(2*a));
        } else{
            var x1 = (-b + Math.sqrt(denta))/(2*a);
            var x2 = (-b - Math.sqrt(denta))/(2*a);
            console.log("Phương trình có 2 nghiệm phân biệt là: ");
            console.log("x1 = ", x1);
            console.log("x2 = ", x2);
        }
    }
}
//BTVN2: tính tích tất cả các phần tử (convert về số)
//      tính tổng và tích các phần tử ở vị trí chẵn

// Tích tất cả phần tử (convert về số)
var arrNumber1 =[2, 5, 7, '12', 10, '6'];
var tich = 1;
for(var i=0; i<arrNumber1.length; i++){
    tich = parseInt(tich) * parseInt(arrNumber1[i]);
}
console.log('Tích các phần tử của mảng arrNumber1 là: ', tich);

// tính tổng và tích các phần tử ở vị trí chẵn
var chan = 0;
var le = 0;
for(var i=0; i<arrNumber1.length; i++){
    if(i % 2 == 0){
        chan = parseInt(chan) + parseInt(arrNumber1[i]);
    } else{
        le = parseInt(le) + parseInt(arrNumber1[i]);
    }
}
console.log('Tổng các phần tử ở vị trí chẵn của mảng arrNumber1 là: ', chan);
console.log('Tổng các phần tử lẻ ở vị trí lẻ của mảng arrNumber1 là: ', le);

// swicth - case: các bài tập năm tháng ngày; các bt liên quan đến lựa chọn
//Các thứ trong tuần
var day = new Date().getDay();
    switch (day){
        case 0:
            console.log("Hôm nay là: Chủ nhật");
            break;
        case 1:
            console.log("Hôm nay là: Thứ hai");
            break;
        case 2:
            console.log("Hôm nay là: Thứ ba");
            break;
        case 3:
            console.log("Hôm nay là: Thứ tư");
            break;
        case 4:
            console.log("Hôm nay là: Thứ năm");
            break;
        case 5:
            console.log("Hôm nay là: Thứ sáu");
            break;
        case 6:
            console.log("Hôm nay là: Thứ bảy");
            break;
    }
//

