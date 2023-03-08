const express = require('express')
const app = express();
const path = require('path')
const port = 4000;
const multer  = require('multer')

const cors = require('cors');
app.use(cors());

//Connecting Data Base
require('./DataBase/dbconnect')
const BlogData = require('./Schema/blogSchema')


//Sarve Static File from Node.js
const staticPath = path.join(__dirname,'./public')
app.use(express.static(staticPath))

//Convert Json And Save MongoDB
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/blog', async (req, res) => {
  BlogData.find({}, function (err, data) {
      // console.log(err, data, data.length); 
      res.send(data);
  });

})


var upload = multer({
  storage:multer.diskStorage({
    destination: function(req, file, cb){
      cb(null,"uploads")
    },
    filename: function(req, file, cb){
  cb(null, file.filename +"-" + ".jpg")
    }
  })
  }).single('filename');
  // app.post('/upload',upload,(req, res)=>{
  //   res.send('uploads files')
  // })

app.post('/saveblog',upload, (req, res) => {
    const thing = new BlogData({
      title: req.body.title,
      content: req.body.content,
      time: new Date().toLocaleTimeString(),
      filename:req.file.filename
    });
    console.log(thing)
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(402).json({
          error: error
        });
      }
    );
  });
  

// app.post('/saveblog', async (req,res)=>{
//     // console.log(req.body.title, req.body.content)
//   const Savedata = new BlogData({
//     title:req.body.title,
//     content:req.body.content,
//   })
//      console.log(Savedata)
//      res.send(Savedata)

// })


 app.listen(port,()=>{
    console.log('start server')
 })