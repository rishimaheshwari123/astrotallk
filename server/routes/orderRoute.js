const express = require("express");
const { createOrderCtrl, getAllOrderCtrl, getOrderForUserCtrl, updateOrderStatusCtrl, returnAndRefundCtrl, getAllAppointmentCtrl } = require("../controllers/orderCtrl");
const router = express.Router();

router.post("/create", createOrderCtrl)
router.get("/getAll", getAllOrderCtrl)
router.get("/getAll-appointment", getAllAppointmentCtrl)
router.get("/get/:id", getOrderForUserCtrl)
router.put("/update/:id", updateOrderStatusCtrl)
router.put("/return/:id", returnAndRefundCtrl)
// router.delete("/delete/:id", auth, isadmin, deleteCategory)



module.exports = router
