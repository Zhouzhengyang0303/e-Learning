function search() {
    var search = document.getElementById('searchtext');
    console.log(search);
    var cells = search.value;
    console.log(cells);
    alert(" 暂未完成谢谢：" + cells);
}

function tiaozhuan1() {

    location.href = "https://www.mafengwo.cn/gonglve/ziyouxing/409826.html";
}
function tiaozhuan2() {
    //跳转代码
    location.href = "https://www.thepaper.cn/newsDetail_forward_26098028";
}
function tiaozhuan3() {

    location.href = "https://zhuanlan.zhihu.com/p/50061984";
}
function tiaozhuan4() {

    location.href = "https://www.gzstv.com/a/d6e582fb30474968b3e4397c713b40f7";
}
function tiaozhuan5() {

    location.href = "http://k4.goonatrip.cn/n/nmg1.html?bd_vid=9511417055292165978";
}
function a1() {
    alert("暂未完成谢谢");
}

function tiaozhuan6(button) {
    location.href = "旅行登记.HTML";
}
function queding(button)
{
    if  (wherechufa.value == "") {
        alert("出发地不能为空！");
        return false;
    }
    if  (wheredaona.value == "") {
        alert("目的地不能为空！");
        return false;
    }   
    if  (whenchufa.value == "") {
        alert("出发时间不能为空！");
        return false;
    }
        if  (whenfanhui.value == "") {
            alert("返回时间不能为空！");
            return false;  
    }  
    if  (wherechufa.value == wheredaona.value) {
        alert("出发地和目的地不能相同！");
        return false;
    }
    alert(`正在查询${wherechufa.value}到${wheredaona.value}的${whenchufa.value}和${whenfanhui.value}的航班信息`);
}