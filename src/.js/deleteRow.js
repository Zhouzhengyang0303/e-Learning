//删除
function delete_Row(button)
{   
    //回到表格的父亲的父亲节点，即row
    console.log(button);
    var row=button.parentNode.parentNode;
    console.log(row);
    var faker=row.parentNode;//获取row的父亲节点，即table
//再利用表格删除button这一行，即为row
    faker.removeChild(row);
}