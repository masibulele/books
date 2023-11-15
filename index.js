// import required modules
import express from 'express'




const app = express();
const port = 3000;

//middleware
app.use(express.static('public'));

// home route
app.get("/",(req,res)=>{

    res.render("index.ejs");
});






app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});