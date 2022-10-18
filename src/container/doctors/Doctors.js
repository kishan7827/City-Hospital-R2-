import React from 'react';
import { NavLink } from 'react-router-dom';

function Doctors(props) {
  const DoctorsData = [
    {
      id: '1',
      name: 'Atha Smith',
      designation: 'Chief Medical Officer',
      description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
      img: "../assets/img/doctors/doctors-1.jpg",
      phone: '2524528244',
      address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
    },
    {
      id: '2',
      name: 'John White',
      designation: 'Anesthesiologist',
      description: 'Aenean ac turpis ante. Mauris velit sapien.',
      img: "../assets/img/doctors/doctors-2.jpg",
      phone: '2524458244',
      address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
    },
    {
      id: '3',
      name: 'Umika Loha',
      designation: 'Cardiology',
      description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
      img: "../assets/img/doctors/doctors-3.jpg",
      phone: '3697528244',
      address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
    },
    {
      id: '4',
      name: 'Daimy Smith',
      designation: 'Neurosurgeon',
      description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
      img: "../assets/img/doctors/doctors-4.jpg",
      phone: '8924528244',
      address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016'
    },
  ]
  return (
    <div>
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
              tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
              ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
          </div>
          <div className="row">
            {
              DoctorsData.map((d, i) => (
                <div className="col-lg-6">
                  <NavLink to={{ pathname: '/doctorsdetails', state: { id: d.id } }}>
                    <div className="member d-flex align-items-start">
                      <div className="pic"><img src={d.img} className="img-doctor" alt /></div>
                      <div className="member-info">
                        <h4>{d.name}</h4>
                        <span>{d.designation}</span>
                        <p>{d.description}</p>
                        <div className="social">
                          <a href><i className="ri-twitter-fill" /></a>
                          <a href><i className="ri-facebook-fill" /></a>
                          <a href><i className="ri-instagram-fill" /></a>
                          <a href> <i className="ri-linkedin-box-fill" /> </a>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );

}

export default Doctors;