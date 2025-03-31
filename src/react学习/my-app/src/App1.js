/*列表渲染*/
const list =[
{id:1001,name:'Vue'},
{id:1002,name:'afanda'},
{id:1003,name:'wukong'},
]

function App1()
{
    return(
        <div className="App1">
            this is app
            <ul>
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
}
export default App1

