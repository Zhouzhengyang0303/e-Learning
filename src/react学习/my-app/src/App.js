const count = 100
function Getname()
{
    return "jack"
}
function App()
{
    return(
        <div className="App">
            this is App
            {'this is message'}
            {count}
            {Getname()}
            {new Date().getSeconds()}
            <div style={{color:'red'}}>this is my app</div>
        </div>

    );
}
export default App


     




