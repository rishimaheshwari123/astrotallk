const express = require("express")
const { createRazorpayOrderCtrl, verifyPaymentCtrl, verifyPaymentForAppimentCtrl } = require("../controllers/paymentRazorpayCtrl")
const router = express.Router()







router.post("/capturePayment", createRazorpayOrderCtrl)
router.post("/verifyPayment", verifyPaymentCtrl)
router.post("/verifyPayment-appiment", verifyPaymentForAppimentCtrl)



module.exports = router