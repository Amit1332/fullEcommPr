const express =require('express')
const cors  =require('cors')
const app = express()
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
app.use(cors())

const cookieParser = require('cookie-parser')
const errorMiddleware =require("./middleware/error")

app.use(express.json({limit: '25mb'}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({limit: '25mb', extended: true }));
app.use(fileUpload());

// user
const userRoutes = require("./routes/userRoutes/userRoutes")
const productUserRoutes = require("./routes/userRoutes/productRoutes")


// seller
const sellerRoutes = require("./routes/sellerRoutes/sellerRoutes")
const productSellerRoutes = require("./routes/sellerRoutes/productRoutes")
const couponSellerRoutes = require("./routes/sellerRoutes/couponRoutes")


// admin
const adminRoutes = require("./routes/adminRoutes/adminRoutes")
const productAdminRoutes = require("./routes/adminRoutes/productRoutes")
const categoryRoutes = require("./routes/adminRoutes/categoryRoutes")
const attributeRoutes = require("./routes/adminRoutes/attributeRoutes")
const blogRoutes = require("./routes/adminRoutes/blogRoutes")





// uses of routes or make api 
// users
app.use("/api/flippy/v1/",userRoutes)
app.use("/api/flippy/v1/",productUserRoutes)


// seller
app.use("/api/flippy/v1/",sellerRoutes)
app.use("/api/flippy/v1/",productSellerRoutes) 
app.use("/api/flippy/v1/",couponSellerRoutes) 


// admin
app.use("/api/flippy/v1/",adminRoutes)
app.use("/api/flippy/v1/",productAdminRoutes)
app.use("/api/flippy/v1/",categoryRoutes)
app.use("/api/flippy/v1/",attributeRoutes)
app.use("/api/flippy/v1/",blogRoutes) 




  




app.use(errorMiddleware)


module.exports = app 