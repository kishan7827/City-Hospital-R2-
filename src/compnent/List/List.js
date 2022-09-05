import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function List({ data }) {
    console.log(data);
    return (
        <>
            {
                data.map((d, i) => (
                    <div className='col-4 mb-4'>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5" style={{color:"#FF6337"}}>{d.name}</CardTitle>
                                <CardSubtitle>Price:{d.price}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                ))
            }
        </>
    );
}

export default List;