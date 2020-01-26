var express = require('express');
var router = express.Router();

/* GET customers listing. */
router.get('/api/customer/list', function(req, res, next) {
  res.send('Show Customers');
});

router.post('/api/customer/create', (req, res, next) => 
  res.send('Create Customer')
);

router.put('/api/customer/update', (req, res, next) => 
  res.send('Update Customer')
);

router.delete('/api/customer/delete', (req, res, next) => 
  res.send('Delete Customer')
);

module.exports = router;
