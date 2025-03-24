 function edit_Row(button)
{   
    //回到按钮的父类的父类就是这一排
    var row=button.parentNode.parentNode;
    //表格第一个0
    var name=row.cells[0];
    var phone=row.cells[1];
   
    //获取表格的内容
    var inputName=prompt("请输入你的名字")
    var inputPhone=prompt("请输入你的联系方式")
    if(!inputName.trim()||!inputPhone.trim())
    {
        alert("请输入内容");
    }
    else
    {   
        //写入表格
        name.innerHTML=inputName;
        phone.innerHTML=inputPhone;
    }
    
    
    
}