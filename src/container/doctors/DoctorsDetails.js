import React, { useEffect, useState } from 'react';

function DoctorsDetails(props) {
    const [details,setdetails] = useState('')
    const DoctorsData = [
        {
          id: '1',
          name: 'Atha Smith',
          designation: 'Chief Medical Officer',
          description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
          img: "../assets/img/doctors/doctors-1.jpg",
          phone:'2524528244',
          address:'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
        },
        {
          id: '2',
          name: 'John White',
          designation: 'Anesthesiologist',
          description: 'Aenean ac turpis ante. Mauris velit sapien.',
          img: "../assets/img/doctors/doctors-2.jpg",
          phone:'2524458244',
          address:'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
        },
        {
          id: '3',
          name: 'Umika Loha',
          designation: 'Cardiology',
          description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
          img: "../assets/img/doctors/doctors-3.jpg",
          phone:'3697528244',
          address:'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
        },
        {
          id: '4',
          name: 'Daimy Smith',
          designation: 'Neurosurgeon',
          description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
          img: "../assets/img/doctors/doctors-4.jpg",
          phone:'8924528244',
          address:'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
        },
      ]
    

    let data = props.location.state
    
    console.log(data);

    useEffect(()=>{
         DoctorsData.map((d) => {
            if (d.id === data.id) {
                setdetails(d);
            }
        })
    },[])
    console.log(details);
    return (
        <section id="doctors" className="d-doctors">
            <div className="container">
                <div className="col-12 row">
                    <div className="member d-flex">
                        <div className='col-6 d-doctors-align'>
                            <div className="member-info">
                                <h4>Name: {details.name}</h4>
                                <span>Designation: {details.designation}</span>
                                <p>Description: {details.description}</p>
                                <p className='wd'>Address: {details.address}</p>
                                <p className='wd'>Phone: {details.phone}</p>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 d-doctors-align'>
                            <div className="pic"><img src={details.img} className="img-d-doctor" alt /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoctorsDetails;