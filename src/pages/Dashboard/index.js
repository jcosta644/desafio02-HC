import React, { useEffect, useState } from 'react';
import { Container, Board } from './styles';

const Dashboard = () => {
    const [clients, setClients] = useState(0);
    const [client, setClient] = useState('');
    const [address, setAddress] = useState('');

    const [products, setProducts] = useState(0);
    const [product, setProduct] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        let c = JSON.parse(localStorage.getItem('clients'));
        let p = JSON.parse(localStorage.getItem('products'));

        if(c) {
            setClients(c.length);
        }

        if (p) {
            setProducts(p.length);
        }
    }, []);

    const submitClient = (e) => {
        if (client.length === 0 || address.length === 0) {
            alert('Todos os campos devem ser preenchidos!');
            return;
        }

        let register = {
            client: client,
            address: address,
        };

        let registers = [];

        let exists = JSON.parse(localStorage.getItem('clients'));

        if(exists) {
            registers.push(exists);
        }

        registers.push(register);

        localStorage.setItem('clients', JSON.stringify(registers));

        alert('Cliente cadastrado com sucesso!');

        setClient('');
        setAddress('');
    }

    const submitProduct = (e) => {
        if (product.length === 0 || value.length === 0) {
            alert('Todos os campos devem ser preenchidos!');
            return;
        }

        let register = {
            product: product,
            value: value,
        };

        let registers = [];

        let exists = JSON.parse(localStorage.getItem('products'));

        if(exists) {
            registers.push(exists);
        }

        registers.push(register);

        localStorage.setItem('products', JSON.stringify(registers));

        alert('Produto cadastrado com sucesso!');


        setProduct('');
        setValue('');
    }

    return (
        <Container>
            <Board>
                <h2>{clients} Clientes</h2>
                <form onSubmit = { (e) => submitClient(e) }>
                    <input
                        type="text"
                        placeholder="Digite o nome"
                        name={client}
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Digite o endereço"
                        name={address}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <button type="submit">CADASTRAR</button>
                </form>
            </Board>
            <Board>
                <h2>{products} Produtos</h2>
                <form onSubmit = { (e) => submitProduct(e) }>
                    <input
                        type="text"
                        placeholder="Digite o nome"
                        name={product}
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Digite o preço"
                        name={value}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type="submit">CADASTRAR</button>
                </form>
            </Board>
        </Container>
    )
}

export default Dashboard;