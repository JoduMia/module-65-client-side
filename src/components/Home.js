import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [product, setProduct] = useState({});
    const [datas,setData] = useState([]);

    useEffect(() => {
        fetch('https://module-65-server.vercel.app/products')
        .then(res => res.json())
        .then(data => setData(data))
    },[datas])
    // const datas = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://module-65-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                alert('user added succesfully');
            }
        })
        .catch(err => console.log(err.message))

        e.target.reset();
    };

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...product}
        newProduct[field] = value;
        console.log(newProduct);
        setProduct(newProduct)
    };

    const handleDelete = (data) => {
        const confirm = window.confirm(`Are Your sure to delete ${data.name}`);
        if(confirm) {
            console.log('deleting');
            fetch(`https://module-65-server.vercel.app/products/${data._id}`, {
                method: 'DELETE'
            })
            .then(() => console.log('user deleted successfully'))
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onBlur={handleBlur} type="text" name='name' placeholder='Enter product name' required /><br/><br/>
            <input onBlur={handleBlur} type="text" name='email' placeholder='Enter product email' required /><br/><br/>

            <input onSubmit={handleSubmit} type="submit" value='Submit' />
        </form>
        <br/>
        <br/>

        {
            datas.map((data) => (
                <div key={data._id} style={{padding:'0 20px', border:'2px solid green', width: '20%', margin:'5px auto'}}>
                    <h3>{data.name} - {data.email}</h3>
                    <h2 onClick={() => handleDelete(data)}>X</h2>
                </div>
            ))
        }
    </div>
  )
}

export default Home