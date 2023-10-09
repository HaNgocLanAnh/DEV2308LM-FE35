var listTtems = [
    {
        id: 1,
        name: "Sản phẩm 1",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 2000000
    },
    {
        id: 2,
        name: "Sản phẩm 6",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 3000000
    },
    {
        id: 3,
        name: "Sản phẩm 5",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 5000000
    },
    {
        id: 4,
        name: "Sản phẩm 7",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 1000000
    },
    {
        id: 5,
        name: "Sản phẩm 5",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 7000000
    },
    {
        id: 6,
        name: "Sản phẩm 5",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 9000000
    },
    {
        id: 7,
        name: "Sản phẩm 5",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 6000000
    },
    {
        id: 8,
        name: "Sản phẩm 5",
        img: "https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
        content: "test devmaster htlm css",
        price: 10000000
    }
]
function showItems(size){
    $('#list-items').html('');
    for(let i = 0; i < size && i < listTtems.length; i++){
        var item = `<div class="col-3">
                    <div class="card">
                        <img src="${listTtems[i].img}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${listTtems[i].name}</h5>
                        <p class="card-text">${listTtems[i].content}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`
        $('#list-items').append(item)
    }
}

function search(){
    var title = $(".search").val();
    $('#list-items').html('');
// includes: "chuỗi giá trị".includes("gía trị so sánh")
// convert string: uper / lower
//"dev master" != "dev   master" => replaceAll(" ","") 
    for(let i = 0; i < listTtems.length; i++){
        if(listTtems[i].name.toLowerCase().includes(title.toLowerCase())){
            // if(listTtems[i].name == title ){
                var item = `<div class="col-3">
                        <div class="card">
                            <img src="${listTtems[i].img}" class="card-img-top w-100" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${listTtems[i].name}</h5>
                            <p class="card-text">${listTtems[i].content}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`
                $('#list-items').append(item)
        }
        }
    }

function check(){
    var max = $(".search-price").val();
    $('#list-items').html('');
    var check_price = false;
    for(let i = 0; i < listTtems.length; i++){
        if(listTtems[i].price <= parseInt(max)){
            var item = `<div class="col-3">
                        <div class="card" id="test-${listTtems[i].id}">
                            <img src="${listTtems[i].img}" class="card-img-top w-100" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${listTtems[i].name}</h5>
                            <p class="card-text">${listTtems[i].content}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`
                $('#list-items').append(item)
                check_price = true; 
        }
    }
    if(!check_price) alert("No data");
}

