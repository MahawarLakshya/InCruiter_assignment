const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser =require('cookie-parser')
const dotenv=require('dotenv')

dotenv.config()
const PORT=3000

const app=express()
app.use(express.json())
app.use(cookieParser ())
app.use(cors({origin:true}))

//Routes
const allRoutes=require('./routes/allRoutes')
app.use('/test',allRoutes);

// MongoDB connection
const connection = async() => {
    try {
        await mongoose.connect(process.env.mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Database connected');
    } catch (err) {

        console.log('Database connection failed', err);

    }
};
connection();

//Start Server
app.listen(PORT,(err)=>{
    if(err)
    {
        console.log("Server Failed to start",err)
    }
    else
    {
        console.log(`Server is running on PORT ${PORT}`);
        console.log(`Go to http://localhost:${PORT}`);
    }
})
