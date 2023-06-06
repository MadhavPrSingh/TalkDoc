const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");



const app = express();


app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/admin/public', express.static(__dirname + '/admin/public'));
app.use(bodyParser.urlencoded({extended : true}));




app.get('/', function(request, response){
  response.sendFile(path.join(__dirname,'index.html'));
});

app.get('/index-2.html', function(request, response){
  response.sendFile(path.join(__dirname, 'index-2.html'));
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

app.get('/doctor-profile-settings.html', function(request, response){
  response.sendFile(path.join(__dirname, 'doctor-profile-settings.html'));
});

app.get('/reviews.html', function(request, response){
  response.sendFile(path.join(__dirname, 'reviews.html'));
});

app.get('/doctor-register.html', function(request, response){
  response.sendFile(path.join(__dirname, 'doctor-register.html'));
});

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

app.get('/voice-call.html', function(request, response){
  response.sendFile(path.join(__dirname, 'voice-call.html'));
});

app.get('/video-call.html', function(request, response){
  response.sendFile(path.join(__dirname, 'video-call.html'));
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

app.get('/login.html', function(request, response){
  response.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register.html', function(request, response){
  response.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/forgot-password.html', function(request, response){
  response.sendFile(path.join(__dirname, 'forgot-password.html'));
});

app.get('/social-media.html', function(request, response){
  response.sendFile(path.join(__dirname, 'social-media.html'));
});






app.get('/admin/index.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/index.html'));
});

app.get('/admin/specialities.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/specialities.html'));
});

app.get('/admin/appointment-list.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/appointment-list.html'));
});

app.get('/admin/doctor-list.html', function(request, response){
  response.sendFile(path.join(__dirname, '/admin/doctor-list.html'));
});

app.get('/admin/patient-list.html', function(request, response){
  response.sendFile(path.join(__dirname, '/admin/patient-list.html'));
});

app.get('/admin/reviews.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/reviews.html'));
});

app.get('/admin/transactions-list.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/transactions-list.html'));
});

app.get('/admin/settings.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/settings.html'));
});

app.get('/admin/invoice-report.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/invoice-report.html'));
});

app.get('/admin/profile.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/profile.html'));
});

app.get('/admin/login.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/login.html'));
});

app.get('/admin/register.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/register.html'));
});

app.get('/admin/forgot-password.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/forgot-password.html'));
});

app.get('/admin/lock-screen.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/lock-screen.html'));
});

app.get('/admin/error-404.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/error-404.html'));
});

app.get('/admin/error-500.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/error-500.html'));
});

app.get('/admin/blank-page.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/blank-page.html'));
});

app.get('/admin/components.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/components.html'));
});


app.get('/admin/form-basic-inputs.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/form-basic-inputs.html'));
});

app.get('/admin/form-horizontal.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/form-horizontal.html'));
});

app.get('/admin/form-vertical.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/form-vertical.html'));
});

app.get('/admin/form-mask.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/form-mask.html'));
});

app.get('/admin/form-validation.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/form-validation.html'));
});

app.get('/admin/tables-basic.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/tables-basic.html'));
});

app.get('/admin/data-tables.html', function(request, response){
  response.sendFile(path.join(__dirname, 'admin/data-tables.html'));
});







app.listen(300, function(){
  console.log("Server is up at port 300")
});
