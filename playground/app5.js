console.log('inside app5.js');

const products = [{ id: 1, title: 'produt1', desc: 'abc', price: 145,review:'good product' },
{ id: 2, title: 'produt2', desc: 'abcd', price: 1456 },
{ id: 3, title: 'produt3', desc: 'abce', price: 1453 ,review:'bad product'},
{ id: 4, title: 'produt4', desc: 'abcf', price: 1454 },
{ id: 5, title: 'produt5', desc: 'abcg', price: 1455 ,review:'average product'}]



const template = (
    <div>
        <h3>App5</h3>
        {
            products.map((list) => {
                return <div>
                    <div>id:{list.id}</div>
                    <div>title:{list.ititle}</div>
                    <div>description:{list.desc}</div>
                    <div>price:{list.price}</div>
                    {list.review && <div>Review : {list.review}</div>}
                    <hr />
                </div>
            })
        }

    </div>
)
const root = document.getElementById('app')
ReactDOM.render(template, root)