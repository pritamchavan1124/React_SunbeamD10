console.log('inside app3.js');

const persons=['person1','person2','person3','pritam4','person5']
   


const template=(
    <div> 
        <h3>App3</h3>
        {
            persons.map((list)=>{
                return <p>{list}</p>
            })
        }

    </div>
)
const root=document.getElementById('app')
ReactDOM.render(template,root)