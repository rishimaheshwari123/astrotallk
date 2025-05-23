const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");



dotenv.config();

const PORT = process.env.PORT || 8080
connectDB();



app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors({
    origin: "*",
    credentials: true,
}))




app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/razorpay", require("./routes/razorpayRoute"))
app.use("/api/v1/order", require("./routes/orderRoute"))
app.use("/api/v1/contact", require("./routes/contactRoute"))



app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ..."
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})
