console.log('inside app2.js');

const person={
    Name:'pritam',
    address:'pune',
    phone:'147852',
    Email:'user@gamil.com'

}




const template=(
    <div> 
        <h3>App2</h3>
        <div>name: {person.Name}</div>
        <div>address: {person.address}</div>
        <div>phone: {person.phone}</div>
        <div>Email: {person.Email}</div>

    </div>
)
const root=document.getElementById('app')
ReactDOM.render(template,root)