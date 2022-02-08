
arr=[];

function addData(){
    var pId = document.getElementById('pid').value;
    var pName = document.getElementById('pname').value;
    var pPrice = document.getElementById('pprice').value;

    

    condition(pId,pName,pPrice);
    display(arr);

}

function condition(pId,pName,pPrice)
{
    for(var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
        if (arr[i].pId == pId)
        {
            alert("duplicate data is invalid");
            return;
        }
    }
    obj = {};
    obj["pId"] = pId;
    obj["pName"] = pName;
    obj["pPrice"] = pPrice;
    arr.push(obj);

}



function display(result){
    var text=document.getElementById("table");
    text.innerHTML="<tr>\
    <td>Product ID</td>\
    <td>Product Name</td>\
    <td>Product Price</td>\
    </tr>"
    for(let i=0;i<result.length; i++){
        text.innerHTML+='<tr>\
        <td>' + result[i].pId + '</td>\
        <td>' + result[i].pName + '</td>\
        <td>' + result[i].pPrice + '</td>\
        </tr>';
    }
}