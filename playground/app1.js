console.log('inside app1.js');
const personName='pritam'
const address='pune'
const phone='147852'



const template=(
    <div> 
        <h3>App1</h3>
        <div>name: {personName}</div>
        <div>address: {address}</div>
        <div>phone: {phone}</div>

    </div>
)
const root=document.getElementById('app')
ReactDOM.render(template,root)