const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path')

const _dirname = path.dirname("")
const buildpath = path.join(_dirname, "../calendar/build");
app.use(express.static(buildpath))

const corsOptions = {
    origin: 'http://13.127.198.62' // Allow requests from this origin
  };

  app.use(cors(corsOptions));
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





