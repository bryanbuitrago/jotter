let bodyParser   = require('body-parser'),
expressSanitizer = require('express-sanitizer'),
methodOverride   = require('method-override'),
// mongoose         = require('mongoose'),
express          = require('express'),
app              = express(),
routes           = require('./routes/index'),
port             = process.env.PORT || 3000;


// APP CONFIG
// mongoose.connect('mongodb://localhost/jotter');

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', routes)
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer()); // must go after bodyParser
app.use(methodOverride('_method'));

// MONGOOSE/MODEL CONFIG
// let blogSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   body: String,
//   created: {type: Date, default: Date.now}
// });
// let Blog = mongoose.model('Blog', blogSchema);

app.listen(port, ()=> {
  console.log(`Listening on PORT: ${port}!`);
});
