
let data = {
    'name':[100,1]
}
let sc = 's'
function check(){
    sc = document.getElementById("username").value
    if(data[sc] !== undefined){
        document.getElementById("score").innerText = data[sc][0]
        document.getElementById("pos").innerText = data[sc][1].toString()+'/35'
        if(data[sc][1] <=  5){
            alert("Congratulations on your being accepted by us!!!")
        }
    }else {
        alert("not found you name")
    }

 }



