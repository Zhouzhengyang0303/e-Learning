//添加
function add_Row()
{       
    var table1=document.getElementById("table1");
    console.log(table1);  
    //获取表格  
    var row = table1.rows.length;
    console.log(row);
    //获取行数
    var newrow= table1.insertRow(row);
    console.log(newrow);
    //获取添加新行
    
    var namecell = newrow.insertCell(0);
    var phonecell1 = newrow.insertCell(1);
    var actioncell1 = newrow.insertCell(2);
    namecell.innerHTML = "未命名";
    phonecell1.innerHTML = "未获得联系方式";
    actioncell1.innerHTML = "<button onclick='edit_Row(this)'>编辑</button><button onclick='delete_Row(this)'>删除</button>";
    //添加新行的内容

    

}