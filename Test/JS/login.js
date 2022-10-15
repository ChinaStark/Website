
let data = {
    '史湘琳' : [54,26],
    '曾祥国' : [64,12],
    '陈丽行' : [59,16],
    '郑洪轩' : [70,7
],    '余采霖' : [55,25],
    '邱芷若' : [80,4
],    '万秦轩' : [46,31],
    '魏传毅' : [58,19],
    '黄锦亮' : [61,15],
    '彭浩东' : [57,21],
    '刘伟康' : [42,34],
    '刘伟宝' : [62,13],
    '郭李豪' : [59,16],
    '汤玖满' : [70,7
],    '吴逸飞' : [68,10],
    '韩山':[41	,35],
    '朱礼林':[44,	33],
    '杨伊琳':[81,	2
],    '万里翔':[81,	2
],    '陈飞燕':[51,	30],
    '张子航':[66,	11],
    '代燕梅':[53,	28],
    '牟京京':[73,	6
],    '程慧敏':[54,	26],
    '卢一凯':[62,	13],
    '邹宇':[58,	19],
    '田良伟':[69,	9
],    '刘学通':[59,	16],
    '杨钰琳':[83,	1
],    '吴嘉宏':[56,	23],
    '王秀':[46,	31],
    '徐冰乐':[57,	21],
    '徐舒玲':[79,	5
],    '魏嘉豪':[56,	23],
    '李荣':[53,	28]

}
let sc = ''
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



