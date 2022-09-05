import React from 'react';
import List from '../../compnent/List/List';

function Medicens(props) {
    const orgData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021
        },
        {
            id: 106,
            name: 'Alloril',
            quantity: 68,
            price: 290,
            expiry: 2022
        },
    ]
    return (
        <section id="departments" className="departments">
            <div className="container">
                <div className="section-title">
                    <h2>Medicens</h2>
                </div>
                <div className="row">
                    <List data={orgData} />
                </div>
            </div>
        </section>
    );
}

export default Medicens;