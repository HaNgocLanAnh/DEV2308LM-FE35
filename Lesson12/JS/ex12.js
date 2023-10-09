var listItems = [
    {
        id: 1,
        name: "CALM",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.calm.png&w=640&q=75",
        price: 2039000,
        priceTemp: "2.039.000 đ",
        amount: 3
    },
    {
        id: 2,
        name: "ROBUST",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fd%2F_%2Fd.robust.png&w=640&q=75",
        price: 2079000,
        priceTemp: "2.079.000 đ",
        amount: 10
    },
    {
        id: 3,
        name: "SWANK",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Fx%2Fbx.swank.png&w=640&q=75",
        price: 2129000,
        priceTemp: "2.129.000 đ",
        amount: 1
    },
    {
        id: 4,
        name: "GALLANT",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fb%2Ft%2Fbt.gallant.png&w=640&q=75",
        price: 1954000,
        priceTemp: "1.954.000 đ",
        amount: 8
    },
    {
        id: 5,
        name: "GRACE",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fg%2Fr%2Fgrace.png&w=640&q=75",
        price: 2599000,
        priceTemp: "2.599.000 đ",
        amount: 12
    },
    {
        id: 6,
        name: "AUTUMN",
        img: "https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fu%2Fautumn_1.png&w=640&q=75",
        price: 2159000,
        priceTemp: "2.159.000 đ",
        amount: 0
    }    
]

function showItems(size){
    $('#list-items').html('');
    for(let i = 0; i < size && i < listItems.length; i++){
        var item = `<div class="col-3">
                        <div class="card" id="test-${listItems[i].id}">
                            <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                            <div class="card-body" style="text-align: center;">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].priceTemp}</p>
                            <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
                            </div>
                        </div>
                    </div>`
        $('#list-items').append(item)
    }
}
function search(){
    var title = $(".search").val();
    $('#list-items').html('');
    var check_amount = false;
    for(let i = 0; i < listItems.length; i++){
        if(listItems[i].name.toLowerCase().includes(title.toLowerCase()) && listItems[i].amount >= 1){
                var item = `<div class="col-3">
                        <div class="card">
                            <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                            <div class="card-body" style="text-align: center;">
                            <h5 class="card-title">${listItems[i].name}</h5>
                            <p class="card-text">${listItems[i].priceTemp}</p>
                            <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
                            </div>
                        </div>
                    </div>`
                $('#list-items').append(item)
                check_amount = true;
        }
        }
        if(!check_amount) alert("Tên sản phẩm không trùng khớp hoặc sản phẩm hiện không còn hàng!");
    }

    function check(){
        var min =  $(".search-low-price").val();
        var max = $(".search-hight-price").val();
        $('#list-items').html('');
        var check_price = false;
        for(let i = 0; i < listItems.length; i++){
            if(listItems[i].price >= parseInt(min) && listItems[i].price <= parseInt(max)){
                var item = `<div class="col-3">
                                <div class="card">
                                    <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                                    <div class="card-body" style="text-align: center;">
                                    <h5 class="card-title">${listItems[i].name}</h5>
                                    <p class="card-text">${listItems[i].priceTemp}</p>
                                    <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
                                    </div>
                                </div>
                            </div>`
                $('#list-items').append(item)
                check_price = true; 
            }
        }
        if(!check_price) alert("No data");
    }