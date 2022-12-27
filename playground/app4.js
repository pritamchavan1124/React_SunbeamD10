console.log('inside app4.js');

const person={
    Name:'pritam',
    address:'pune',
    //phone:'147852',
    Email:'user@gamil.com'

}
   


const template=(
    <div> 
        <h3>App4</h3>
        <div>name: {person.Name}</div>
        <div>address: {person.address}</div>
        {/* //conditional compilation */}
       {person.phone && <div>phone: {person.phone}</div>} 
       {person.Email && <div>Email: {person.Email}</div>} 
    </div>
)
const root=document.getElementById('app')
ReactDOM.render(template,root)