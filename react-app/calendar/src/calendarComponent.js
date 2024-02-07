// import React, { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import { Modal, Button } from 'react-bootstrap';
// import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const CalendarComponent = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isModalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/events');
//       console.log(response.data)
//       setEvents(response.data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const handleDateClick = (info) => {
//     setModalOpen(true);
//   };

//   const handleEventClick = (info) => {
//     setSelectedEvent(info.event);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         dateClick={handleDateClick}
//         eventClick={handleEventClick}
//       />

//       <Modal show={isModalOpen} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedEvent ? selectedEvent.title : 'Event Details'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedEvent && (
//             <div>
//               <p>Date: {selectedEvent.start.toLocaleDateString()}</p>
//               <p>Time: {selectedEvent.start.toLocaleTimeString()}</p>
//               {selectedEvent.location && <p>Location: {selectedEvent.location}</p>}
              
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={closeModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default CalendarComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Modal from 'react-modal';

// const localizer = momentLocalizer(moment);
// const API_URL = 'http://localhost:5000/events'; // Update with your API URL

// function App() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setEvents(response.data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const handleEventClick = event => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="App">
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         onSelectEvent={handleEventClick}
//       />
//       <Modal
//         isOpen={!!selectedEvent}
//         onRequestClose={closeModal}
//         contentLabel="Event Details"
//       >
//         {selectedEvent && (
//           <div>
//             <h2>{selectedEvent.title}</h2>
//             <p>Start: {selectedEvent.start}</p>
//             <p>End: {selectedEvent.end}</p>
//             <p>location: {selectedEvent.location}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// }

// export default App;



// App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import { Modal, Button } from 'react-bootstrap';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const localizer = momentLocalizer(moment);

// function App() {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/events'); // API endpoint to fetch events
//       setEvents(response.data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const handleEventClick = event => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="container">
//       <h1>Calendar</h1>
//       <Calendar
//       localizer={localizer}
//       events={events}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//       onSelectEvent={handleEventClick}
//     />
//       <Modal show={!!selectedEvent} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Event Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedEvent && (
//             <div>
//               <h2>{selectedEvent.title}</h2>
//               <p>Start: {selectedEvent.date}</p>
//               <p>End: {selectedEvent.time}</p>
//               <p>location: {selectedEvent.location}</p>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={closeModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './styles.css';


const localizer = momentLocalizer(moment);

const App = () => {

  const views = ['month', 'agenda']; // Only include the 'month' view


    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
   

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleEventClick = event => {
        setSelectedEvent(event);
    };

    const closeModal = () => {
        setSelectedEvent(null);
    };

    
    

    return (
        <div className="app">
          <div className='container'>
            <h1>Calendar!!</h1>
            <Calendar
            className="calendar"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 630 }}
                views={views}
                onSelectEvent={handleEventClick}
                // onSelectEvent={handleDateClick}t
            />
            <Modal   size="lg"  show={!!selectedEvent} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal_box'>
                {selectedEvent && (
                      <div className='container'>
                          <h2>{selectedEvent.title}</h2>

                          <Table responsive striped>
                        <thead>
                            <tr>
                            <th>Tamil Year</th>
                            <th>Tamil Month</th>
                            <th>Tamil Ritu</th>
                            </tr>
                        </thead>
                        <tbody  style={{alignItems:'center'}}>
                            <tr >
                            <td>{selectedEvent.tamil_year}</td>
                            <td>{selectedEvent.tamil_month}</td>
                            <td>{selectedEvent.tamil_ritu}</td>
                            </tr>
                        </tbody>
                        </Table>

                          <Table responsive striped>
                        <thead>
                            <tr>
                            <th>Nakshatram</th>
                            <th>Nakshatram time</th>
                            <th>Yogam</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                            
                            <td>{selectedEvent.nakshatra}</td>
                            <td>{selectedEvent.nakshatra_starttime}</td>
                            <td>{selectedEvent.yogam}</td>
                            </tr>
                        </tbody>
                        </Table>

                          <Table responsive striped>
                        <thead>
                            <tr>
                            <th>Raghu start/end time</th>
                            <th>Yamakandam start/end time</th>
                            <th>Gulikai start/end time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                            
                            <td>{selectedEvent.rahukalam_starttime}</td>
                            <td>{selectedEvent.yamakandam_starttime}</td>
                            <td>{selectedEvent.gulikai_starttime}</td>
                            </tr>
                        </tbody>
                        </Table>
                          {/* <table className="table">
                              <tbody>
                                 
                                  <tr>
                                      <td>Location:</td>
                                      <td>{selectedEvent.location}</td>
                                  </tr>
                                  <tr>
                                      <td>raghu_start time:</td>
                                      <td>{selectedEvent.raghu_starttime}</td>
                                  </tr>
                                  <tr>
                                      <td>raghu_end time:</td>
                                      <td>{selectedEvent.rahukalam_endtime}</td>
                                  </tr>
                                  <tr>
                                      <td>yamakandam_start time:</td>
                                      <td>{selectedEvent.yamakandam_starttime}</td>
                                  </tr>
                                  <tr>
                                      <td>yamakandam_end time:</td>
                                      <td>{selectedEvent.yamakandam_endtime}</td>
                                  </tr>
                                  <tr>
                                      <td>yamakandam_end time:</td>
                                      <td>{selectedEvent.yamakandam_endtime}</td>
                                  </tr>
                                  
                                  <tr>
                                      <td>Start:</td>
                                      <td>{selectedEvent.start}</td>
                                  </tr>
                                  <tr>
                                      <td>End:</td>
                                      <td>{selectedEvent.end}</td>
                                  </tr>
                              </tbody>
                          </table> */}
                           <div className='container special_events'>
                             <h3>Feburary Special days</h3>
                          <div className='row' style={{padding:'5px'}}>
                            <div className='col-md-4'>
                            <p className='specal_days'>Feb 8: {selectedEvent.MahaShivaratri}</p>
                            <p>Feb 9: {selectedEvent.Thiruvona_Vratham}</p>
                           
                            </div>
                            <div className='col-md-4'>
                            <p>Feb 9: {selectedEvent.Shula_Vratam}</p>
                            <p>Feb 13: {selectedEvent.Ganesh_Jayanti_Chaturthi_Vratham}</p>
                            </div>
                            <div className='col-md-4'>
                            <p>Feb 15: {selectedEvent.Shashti_Vratham}</p>
                            <p>Feb 28:{selectedEvent.National_ScienceDay}</p>
                            </div>
                            </div>
                            </div>
                      </div>
                  )}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
};

export default App; 





