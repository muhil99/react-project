// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());


// const calendarEvents = [
//     { id: 1, title: 'Event 1', date: '2024-02-01', time: '10:00 AM', location: 'Room A'},
//     { id: 2, title: 'Event 2', date: '2024-02-15', time: '02:30 PM' },
// ];

// app.get('/api/events', (req, res) => {
//     res.json(calendarEvents);
// });

// app.post('/api/events', (req, res) => {
//     const newEvent = req.body;
//     newEvent.id = calendarEvents.length + 1;
//     calendarEvents.push(newEvent);
//     res.json(newEvent);
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// const express = require('express');
// const cors = require('cors'); // Import the cors middleware
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Sample event data
// const events = [
//   { id: 1, title: 'events', start: '2024-02-06T10:00:00', end: '2024-02-06T12:00:00' ,location: 'erode'},
//   { id: 2, title: 'events', start: '2024-02-07T12:00:00', end: '2024-02-07T13:00:00' }
// ];

// app.use(cors({
//     origin: 'http://localhost:3000' // Allow requests only from this origin
//   }));

// app.get('/events', (req, res) => {
//   res.json(events);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// server.js
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// Sample event data
// let events = [
//     { id:1,name: 'John', title: 'Meeting', location: 'Office', time: '2024-02-06T10:00:00', auspiciousDay: '2024-02-06' },
//     { id:2,name: 'Alice', title: 'Conference', location: 'Conference Hall', time: '2024-02-07T12:00:00', auspiciousDay: '2024-02-07' }
//   ];

// GET /events - Get all events
// app.get('/events', (req, res) => {
//   res.json(events);
// });

// POST /events - Create a new event
// app.post('/events', (req, res) => {
//   const newEvent = req.body;
//   events.push(newEvent);
//   res.status(201).json(newEvent);
// });

// PUT /events/:id - Update an event
// app.put('/events/:id', (req, res) => {
//   const { id } = req.params;
//   const updatedEvent = req.body;
//   events = events.map(event => (event.id === parseInt(id) ? updatedEvent : event));
//   res.json(updatedEvent);
// });

// DELETE /events/:id - Delete an event
// app.delete('/events/:id', (req, res) => {
//   const { id } = req.params;
//   events = events.filter(event => event.id !== parseInt(id));
//   res.sendStatus(204);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// server.js
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const events = [
//     { id: 1, title: 'Meeting', start: '2024-02-06T10:00:00', end: '2024-02-06T12:00:00' },
//     { id: 2, title: 'Conference', start: '2024-02-07T12:00:00', end: '2024-02-07T13:00:00' }
// ];

// app.get('/events', (req, res) => {
//     res.json(events);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const events = [
    { 
        id: 1, 
        title: '3 more events',
        tamil_year: 'Sobakiruthu',
        tamil_month: 'Tai/Masi',
        tamil_ritu: 'Vasant Ritu',
        Today_special: 'pradosham',
        start: '2024-02-06T10:00:00',
        end: '2024-02-06T12:00:00', 
        nakshatra: 'p.phalguni',
        nakshatra_starttime: '00.47AM',
        yogam: 'Subha/Nasa',
        rahukalam_starttime: '12.10PM - 13.27PM',
        yamakandam_starttime: '08.16AM - 09.34AM',
        gulikai_starttime: '10.52AM - 12:10PM',
        Auspicious_Day_: 'Yes',
        MahaShivaratri: 'MahaShivaratri',
        Thiruvona_Vratham: 'Thiruvona Vratha',
        Shula_Vratam: 'Shula Vratam',
        Ganesh_Jayanti_Chaturthi_Vratham : 'Ganesh Jayanti , Chaturthi Vratham',
        Shashti_Vratham: 'Shashti Vratham',
        National_ScienceDay: 'National ScienceDay'




    },
    { 
        id: 2, 
        title: 'Conference', 
        title: 'Meeting',
        tamil_year: 'Sobakiruthu',
        tamil_month: 'Tai/Masi',
        tamil_ritu: 'Vasant Ritu',
        Today_special: 'pradosham',
        start: '2024-02-07T12:00:00',
        end: '2024-02-07T13:00:00', 
        nakshatra: 'p.phalguni',
        nakshatram_start_time: '0.47AM',
        yogam: 'Subha/Nasa',
        rahukalam_starttime: '13.28PM - 14.46PM',
        yamakandam_starttime: '06.58AM - 08.16AM',
        gulikai_starttime: '09.34AM - 10.52AM',
        Auspicious_Day_: 'No',
        MahaShivaratri: 'MahaShivaratri',
        Thiruvona_Vratham: 'Thiruvona Vratha',
        Shula_Vratam: 'Shula Vratam',
        Ganesh_Jayanti_Chaturthi_Vratham : 'Ganesh Jayanti , Chaturthi Vratham',
        Shashti_Vratham: 'Shashti Vratham',
        National_ScienceDay: 'National ScienceDay'

    }
];

app.get('/events', (req, res) => {
    res.json(events);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





