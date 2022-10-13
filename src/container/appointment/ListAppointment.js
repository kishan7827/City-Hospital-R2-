import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import Button from '@mui/material/Button';

function ListAppointment(props) {
    const [data, setdata] = useState([]);
    const [nav,setnav] = useState(false)

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

        localStorage.setItem("apt", JSON.stringify(data))

        getData()
    }

    const handleEdit = (data) => {
        console.log(data);

        history.push("/appointment", data)
    }
    // checked={values.gender === 'mail' ? true : false}

    return (
        <div className='container'>
            <div className="section-title">
                <h2>List of Appointment</h2>
            </div>
            {
                        nav?<div className="col-md-6 link-title mt-3">
                        <NavLink active to={'/list_Appointment'}>List of Appointment</NavLink>
                    </div>:
                        <div className="col-mb-3 link-title">
                        <NavLink active to={'/appointment'}>Make an Appointment</NavLink>
                    </div>
                    }
            {/* <div className="row">
                <div className="col-md-6 link-title mt-3 navbar">
                    <NavLink active to={'/appointment'}>Make an Appointment</NavLink>
                </div>
                <div className="col-md-6 link-title mt-3 navbar">
                    <NavLink active to={'/list_Appointment'}>List of Appointment</NavLink>
                </div>
            </div> */}
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
                                <Button variant="contained" className='me-2' size='small' onClick={() => handleEdit(d)}>Edit</Button>
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