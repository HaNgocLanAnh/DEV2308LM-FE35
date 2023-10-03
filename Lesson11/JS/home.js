// cú pháp khi sử dụng jquery
//$('selector').action()
// cú pháp khi sử dụng jquery
// $('selector').action()

function summary(){
    debugger;
    var sum = 0;

    for(let i = 0; i < listProduct.length; i++){
        var x = $('.item-card-' + listProduct[i].id + ' .quantity').val();   //.item-card-1 .quantity
        // var temp = document.getElementById('quantity').value;
        // var y = $('.item-card-' + i + ' .item-price .price').text().replaceAll('.','');
        var p = $('.item-card-' + listProduct[i].id + ' .item-price .price').attr('data-price');
        var s = parseInt(x) * parseInt(p);
        sum = sum + s;
    }
    $('.sum-product .text-price .all-price').text(sum);
}   

function blockBottom(className){
    var number = $('.' + className + ' .quantity').val();
    if(number <= 0){
        alert("khong duoc am");
        $('.' + className + ' .quantity').val(0);
        return;
    }
}

var listProduct = [
    {
        id : 1,
        name : "Đồng hồ 1",
        price : 8000000,
        priceTemp: "8.000.000",
        cate: "Phụ kiện",
        number: 4,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.calm.png&w=640&q=75' 
    },
    {
        id : 2,
        name : "Đồng hồ 2",
        price : 9000000,
        priceTemp: "9.000.000",
        cate: "Phụ kiện",
        number: 6,
        img: 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.gallant.png&w=640&q=75'
    },
    {
        id : 3,
        name : "Đồng hồ 3",
        price : 10000000,
        priceTemp: "10.000.000",
        cate: "Phụ kiện",
        number: 2,
        img : 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Fx%2Fbx.swank.png&w=640&q=75'
    },
    {
        id : 4,
        name : "Đồng hồ 4",
        price : 11000000,
        priceTemp: "11.000.000",
        cate: "Phụ kiện",
        number: 1,
        img : 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=640&q=75'
    },
    {
        id : 5,
        name : "Đồng hồ 5",
        price : 15000000,
        priceTemp: "15.000.000",
        cate: "Phụ kiện",
        number: 1,
        img : 'https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fg%2Fr%2Fgrace.png&w=640&q=75'
    }
];


    for(let i = 0; i < listProduct.length ; i++){
        debugger;
        var view = `<div class="item item-card-${listProduct[i].id}" >
                        <div class="item-img">
                            <img class="w-100" src="${listProduct[i].img}" alt="item">
                        </div>
                        <div class="item-content">
                            <div class="item-cate">
                                <h3>${listProduct[i].cate}</h3>
                            </div>
                            <div class="item-name">
                                <h4>${listProduct[i].name}</h4>
                            </div>
                            <div class="item-price">
                                <p>
                                    <span class="price" data-price="${listProduct[i].price}">${listProduct[i].priceTemp}</span> 
                                    <span class="unit">vnđ</span>
                                </p>
                            </div>
                        </div>
                        <div class="item-quantity">
                            <input onchange="blockBottom('item-card-${listProduct[i].id}')" type="number" name="quantity" value="${listProduct[i].number}" class="quantity">
                        </div>
                    </div>`
                    ;
        $('.list-item').append(view);
    }
//btvn: tạo 1 ds tin tức (arrayObject)
//hiện thị all tin tức lên giao diện với các tham số tg ứng