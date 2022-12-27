console.log('inside app7.js');


const submitdata=(e)=>{
    e.preventDefault()
    const personName=e.target.elements.personName.value

}

const template=(
    <div> 
         <h3>Welcome to App-6</h3>
        <form onSubmit={submitdata}>
        
        <div>name: <input type="text" name="name" />{' '}</div>
        <div>Address: <input type="text" name="address" />{' '}</div>
        <div>phone: <input type="text" name="phonr" />{' '}</div>
        <div>Email: <input type="text" name="email" />{' '}</div>
        <button type="submit">Submit</button>
        </form>

    </div>
)
const root=document.getElementById('app')
ReactDOM.render(template,root)