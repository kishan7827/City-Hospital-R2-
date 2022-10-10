import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';

function ListAppointment(props) {
    const [data, setdata] = useState([]);

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem('apt'));

        setdata(localData);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {
                    data.map((d, i) => (
                        <Card className='my-3 mx-3 col-3 border-3 border-primary'>
                            <CardBody>
                                <CardTitle tag="h5" className='text-primary'>
                                    {d.name}
                                </CardTitle>
                                <CardText>
                                    Gender: {d.gender}
                                </CardText>
                            </CardBody>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}

export default ListAppointment;