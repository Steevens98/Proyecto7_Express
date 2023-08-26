var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var MedicoRouter = require('./routes/rest_medico');
var PacienteRouter = require('./routes/rest_paciente');
var CitaRouter = require('./routes/rest_cita');
var EspecialidadRouter = require('./routes/rest_especialidad');
var TituloRouter = require('./routes/rest_titulo');

var app = express();

/* AGREGUE EL MIDDLEWARE CORS */
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rest/Medico', MedicoRouter);
app.use('/rest/Paciente', PacienteRouter);
app.use('/rest/Cita', CitaRouter);
app.use('/rest/Especialidad', EspecialidadRouter);
app.use('/rest/Titulo', TituloRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
