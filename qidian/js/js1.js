let time = setTimeout("showImg()", 2000);

const changePic = ['1.png', '2.jpg', '3.jpg', '4.jpg', '5.jpg','bg1.jpg'];
let i = -1;
function ban() {
    alert("暂未开放")
}

let name = ""

function destory() {
    document.getElementById("bt").style.display = "none";
    document.getElementById("tapp").style.filter = "none";
}

function confirm() {
    document.getElementById("d_log").style.display = "none";
    alert("您已成功预定'   " + this.name + "   '请尽快联系作者付款");
}

function buy(a, b) {
    pic(b)
    this.name = a;
    document.getElementById("d_log").style.display = "block";
}

let s = "Image/a1.png";

function pic(e) {
    document.getElementById("d_img").src = e;
}

function cancel() {
    document.getElementById("d_log").style.display = "none"
}

function login() {
    document.getElementById("login").style.display = "block"
}

function cancelForlogin() {
    document.getElementById("login").style.display = "none"
}

function clear_content() {
    alert('暂未开放')
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


function showImg() {
    i++;
    if (i === 6) {
        i = 1;
    }
    // document.getElementById("mouseout").setAttribute("src", "Image/"+changePic[i]);

    document.getElementById("mouseout").style.backgroundImage = 'url("Image/'+changePic[i]+'")';
    time = setTimeout("showImg()", 4000);
}
