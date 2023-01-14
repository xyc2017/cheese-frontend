import {Form, Link, useLoaderData} from 'react-router-dom'

function Index(prop){
    const cheeses=useLoaderData()
    return (
        <div>
            <h2>Add a cheese</h2>
            <div className="index">
            <Form 
                action='/create'
                method='post'
            >
                <input type='input' name='name' placeholder='cheese name' />
                <input type='input' name='countryOfOrigin' placeholder='country of origin' />
                <input type='text' name='image' placeholder='cheese image' />
                <input type='submit' value='Add' />
            </Form>
            </div>
            <h2>Cheeses</h2>
            <div className="container">
                {cheeses.map((cheese)=>(
                    <div className="card" key={cheese._id}>
                    <Link to={`/${cheese._id}`} className="cheese">
                        <h1>{cheese.name}</h1>
                    </Link>
                    <img src={cheese.image} alt={cheese.name} />
                    <h3>{cheese.countryOfOrigin}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Index