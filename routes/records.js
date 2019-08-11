const express = require('express');
const router = express.Router();
const RecordDataService = require('../services/record.data.service');

/* GET records page. */
router.get('/', (req, res) => {
  res.render('records', { title: 'PHE Logs', records:  new RecordDataService().get_diet_records() });
});

/* GET record_details page. */
router.get('/details/:id', (req, res) => {
  const rs = new RecordDataService();
  const record = rs.get_diet_record(req.params.id);
  res.render('record_details', { title: 'PHE Logs', record: record, tot_board: rs.calc_tot_board(record) } );
});

module.exports = router;
