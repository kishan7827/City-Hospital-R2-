import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import Button from '@mui/material/Button';

function ListAppointment(props) {
    const [data, setdata] = useState([]);

    const history = useHistory()

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem('apt'));

        setdata(localData);
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("apt"))

        let data = localData.filter((l) => l.id !== id)

        localStorage.setItem("apt",JSON.stringify(data))

        getData()
    }

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
                                <Button variant="contained" className='me-2' size='small'>Edit</Button>
                                <Button variant="contained" color='error' size='small' onClick={() => handleDelete(d.id)}>Delete</Button>
                            </CardBody>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}

export default ListAppointment;