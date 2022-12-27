console.log('inside app6.js');

let count=0

const increment=()=>{
   // console.log('inside increment')
   count=count+1
   render()
}
const decrement=()=>{
    //console.log('inside decrement')
    count=count-1
    render()
}
const doublevalue=()=>{
    count=count*2
    render()
}
const dTripleValue=()=>{
    count=count*3
    render()
}
const resetvalue=()=>{
    count=0
    render()
}
const render=()=>{

    const template=(
        <div> 
            <h3>Welcome to App-6</h3>
            <div>Counter :{count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <hr />
            <button onClick={doublevalue}>double</button>
            <button onClick={dTripleValue}>Triple</button>
            <button onClick={resetvalue}>Reset</button>
            
        </div>
    )
    const root=document.getElementById('app')
    ReactDOM.render(template,root)
}
render()