let time = setTimeout("showImg()", 2000);
textdetaillt = ['政策查询','保养维修','原厂精品','日常充电及保养']
textdetailrt = ['手机端服务体验','车辆救援','原厂选装配件','维修及救援']

const changePic = ['1.png', '2.jpg', '3.jpg', '4.jpg', '5.jpg','bg1.jpg'];
let i = -1;
function ban() {
    alert("暂未开放")
}

let name = "b"

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

let s = "images/a1.png";

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
    // alert('暂未开放')
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value ;
    if(username === ""|| password === ""){
        alert("用户名或密码不能为空")
    }else {
        document.getElementById("username_id").innerText = username+'  你好!'
        cancelForlogin();
    }
    // document.getElementById("username").value = "";
    // document.getElementById("password").value = "";
}


function showImg() {
    i++;
    if (i === 6) {
        i = 0;
    }
    // document.getElementById("mouseout").setAttribute("src", "images/"+changePic[i]);
    if(i === 0){
        document.getElementById("id5").style.background = "rgba(255,255,255,.4)";
    }else {
        document.getElementById("id"+(i-1).toString()).style.background = "rgba(255,255,255,.4)";
    }

    document.getElementById("mouseout").style.backgroundImage = 'url("images/'+changePic[i]+'")';

    document.getElementById("id"+(i).toString()).style.background = "white";
    time = setTimeout("showImg()", 4000);
}
function over(e){
    document.getElementById("mouseout").style.backgroundImage = 'url("images/'+changePic[e-1]+'")';
}



function ChangePicinSerive(e){
    document.getElementById("1").style.color = "rgb(151,151,151)";
    document.getElementById("2").style.color = "rgb(151,151,151)";
    document.getElementById("3").style.color = "rgb(151,151,151)";
    document.getElementById("4").style.color = "rgb(151,151,151)";
    document.getElementById(e).style.color = "white";
    document.getElementById("leftPic").src = "images/left"+e+".jpg";
    if(e === 3){
        document.getElementById("rightPic").style.width = "77%"
        document.getElementById("rightPic").src = "images/right"+e+".jpg"
    }else {
        document.getElementById("rightPic").style.width = "100%"
        document.getElementById("rightPic").src = "images/right"+e+".jpg";
    }
    console.log(e)
    document.getElementById("funl").innerText = textdetaillt[e-1]
    document.getElementById("funr").innerText = textdetailrt[e-1]

}