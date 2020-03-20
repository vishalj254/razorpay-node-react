var router = require('express').Router()
// var razorpay=require('razorpay')
// // var r=fetch('https://checkout.razorpay.com/v1/checkout.js')
// var r=fetch("https://checkout.razorpay.com/v1/checkout.js")

// // var instance = new razorpay({
// //     key_id: 'rzp_test_fpns2C5y6KUTVK',
// //     key_secret: 'CJMz3gANA2YN7YcPtYz2fser',
// //   });

// //   instance.payments.fetch("paymentId");
router.get('/',function(req,res){
    res.render('pay')
})

router.post('/success',function(req,res){
    res.json(req.body)
})

module.exports = router;
