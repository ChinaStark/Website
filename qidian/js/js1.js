function ban(){
    alert("暂未开放")
}
let name = ""
function destory(){
    document.getElementById("bt").style.display = "none";
    document.getElementById("tapp").style.filter = "none";
}
function confirm() {
    document.getElementById("d_log").style.display = "none";
    alert("您已成功预定'   "+this.name+"   '请尽快联系作者付款");
}
function buy(a,b){
    pic(b)
    this.name = a;
    console.log(this.name)
    document.getElementById("d_log").style.display = "block";
}
let s = "Image/a1.png";
function pic    (e) {
    document.getElementById("d_img").src = e;
    console.log(s)
}
function cancel(){
    document.getElementById("d_log").style.display = "none"
}