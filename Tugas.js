var product = []


function addNewProduct(){
    var namaProduct = document.getElementById('name').value;
    var hargaProduct = document.getElementById('price').value;
    var category    = document.getElementById('category').value;
    var condition = document.querySelector('input[name=condition]:checked').value;

    var obj ={
        namaProduct,
        hargaProduct,
        category,
        condition
    }
    product.push(obj)
    showListProduct()
}

function showListProduct(){
    var list = product.map(function(element){
        return (
            `
            <tr>
                <td>${element.namaProduct}</td>
                <td>${element.hargaProduct}</td>
                <td>${element.category}</td>
                <td>${element.condition}</td>
            </tr>
            `
        )
    })
    document.getElementById('hasilProduct').innerHTML = list.join('')
}

var hewan = []


function addNewAnimal(){
    var namaHewan = document.getElementById('nameHewan').value;
    var hargaHewan = document.getElementById('priceHewan').value;
    var kelamin    = document.querySelector('input[name=kelamin]:checked').value;
    var status = document.querySelector('input[name=status]:checked').value;

    var objHewan ={
        namaHewan,
        hargaHewan,
        kelamin,
        status
    }
    hewan.push(objHewan)
    showListAnimal()
    
}

function showListAnimal(){
    var list = hewan.map(function(element){
        return (
            `
            <tr>
                <td>${element.namaHewan}</td>
                <td>${element.hargaHewan}</td>
                <td>${element.kelamin}</td>
                <td>${element.status}</td>
            </tr>
            `
        )
    })
    document.getElementById('hasilAnimal').innerHTML = list.join('')
}
