const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs");

require("./conn");

const PatientReg = require("./PatientReg");
const DoctorReg = require("./DoctorReg");
const { json } = require("express");

const templatePath = path.join(__dirname + '/templates/views/');
const partialPath =  path.join(__dirname + '/templates/partials/');

const app = express();

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}))
hbs.registerPartials(partialPath);


app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({extended : true}));






app.get('/', function(request, res){
  res.render("login");
});

app.get('/index.html', function(request, response){
  response.render("index");
});

app.get('/index-2.html', function(req, res){
  res.render("index-2");
});

app.get('/doctor-dashboard.html', function(request, response){
  response.sendFile(path.join(__dirname, 'doctor-dashboard.html'));
});

app.get('/appointments.html', function(request, response){
  response.sendFile(path.join(__dirname, 'appointments.html'));
});
app.get('/schedule-timings.html', function(request, response){
  response.sendFile(path.join(__dirname, 'schedule-timings.html'));
});
app.get('/my-patients.html', function(request, response){
  response.sendFile(path.join(__dirname, 'my-patients.html'));
});
app.get('/patient-profile.html', function(request, response){
  response.sendFile(path.join(__dirname, 'patient-profile.html'));
});
app.get('/chat-doctor.html', function(request, response){
  response.sendFile(path.join(__dirname, 'chat-doctor.html'));
});
app.get('/invoices.html', function(request, response){
  response.sendFile(path.join(__dirname, 'invoices.html'));
});
app.get('/add-prescription.html', function(request, response){
  response.sendFile(path.join(__dirname, 'add-prescription.html'));
});

app.get('/doctor-profile-settings.html', function(request, response){
  response.sendFile(path.join(__dirname, 'doctor-profile-settings.html'));
});

app.get('/reviews.html', function(request, response){
  response.sendFile(path.join(__dirname, 'reviews.html'));
});

app.get('/doctor-register.html', function(req, res){
  res.render("doctor-register")
});
app.post("/doctor-register", async (req, res) => {
    try{
            const registerDoctors = new DoctorReg({
                name : req.body.name,
                phone : req.body.phone,
                email : req.body.email,
                password : req.body.password
              });

              const doctor = await registerDoctors.save();
              res.status(201).render("login-doc");

    }catch(error) {
        res.status(400).send(error);
    }

})


app.get('/login-doc.html', function(req, res){
    res.render("login-doc");
});
app.post("/login-doc", async(req, res) => {
    try{
      const email = req.body.email;
      const password = req.body.password;

      const useremail = await DoctorReg.findOne({email:email});

      if(useremail.email !== email){
        res.status(400).sendFile(path.join(__dirname, 'error-500.html'));
      }

      if(useremail.password === password){
        res.status(201).render("index-2");
      }else{
        res.status(400).sendFile(path.join(__dirname, 'error-500.html'))
      }

    }catch (error){
        res.status(400).send(error);
    }
})

app.get('/search.html', function(request, response){
  response.sendFile(path.join(__dirname, 'search.html'));
});

app.get('/doctor-profile.html', function(request, response){
  response.sendFile(path.join(__dirname, 'doctor-profile.html'));
});

app.get('/booking.html', function(request, response){
  response.sendFile(path.join(__dirname, 'booking.html'));
});

app.get('/checkout.html', function(request, response){
  response.sendFile(path.join(__dirname, 'checkout.html'));
});

app.get('/booking-success.html', function(request, response){
  response.sendFile(path.join(__dirname, 'booking-success.html'));
});

app.get('/patient-dashboard.html', function(request, response){
  response.sendFile(path.join(__dirname, 'patient-dashboard.html'));
});

app.get('/favourites.html', function(request, response){
  response.sendFile(path.join(__dirname, 'favourites.html'));
});

app.get('/chat.html', function(request, response){
  response.sendFile(path.join(__dirname, 'chat.html'));
});

app.get('/profile-settings.html', function(request, response){
  response.sendFile(path.join(__dirname, 'profile-settings.html'));
});

app.get('/change-password.html', function(request, response){
  response.sendFile(path.join(__dirname, 'change-password.html'));
});




app.get('/calendar.html', function(request, response){
  response.sendFile(path.join(__dirname, 'calendar.html'));
});

app.get('/components.html', function(request, response){
  response.sendFile(path.join(__dirname, 'components.html'));
});

app.get('/invoice-view.html', function(request, response){
  response.sendFile(path.join(__dirname, 'invoice-view.html'));
});

app.get('/blank-page.html', function(request, response){
  response.sendFile(path.join(__dirname, 'blank-page.html'));
});

app.get('/login.html', function(req, res){
    res.render("login");
});
app.post('/login', async(req, res) => {
    try{
      const email = req.body.email;
      const password = req.body.password;

      const useremail = await PatientReg.findOne({email:email});
      if(useremail.email !== email){
        res.status(400).sendFile(path.join(__dirname, 'error-500.html'));
      }

      if(useremail.password === password){
        res.status(201).render("index");
      }else{
        res.status(400).sendFile(path.join(__dirname, 'error-500.html'));
      }

    }catch (error){
        res.status(400).send(error);
    }
})



app.get('/register.html', function(req, res){
  res.render("register");
});

app.post("/register", async (req, res) => {
    try{
            const registerPatients = new PatientReg({
                name : req.body.name,
                phone : req.body.phone,
                email : req.body.email,
                password : req.body.password
              });

              const register = await registerPatients.save();
              res.status(201).render("login");

    }catch(error) {
        res.status(400).send(error);
    }

})


app.get('/forgot-password.html', function(request, response){
  response.sendFile(path.join(__dirname, 'forgot-password.html'));
});

app.get('/social-media.html', function(request, response){
  response.sendFile(path.join(__dirname, 'social-media.html'));
});











app.listen(300, function(){
  console.log("Server is up at port 300")
});
