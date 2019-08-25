const express = require('express');
const router = express.Router();
const RecordDataService = require('../services/record.data.service');

/* GET records page. */
router.get('/', (req, res) => {
  RecordDataService.get_diet_records().then(records => {
    res.render('records', {title: 'PHE Logs', user: req.user, records: records.data});
  });
});

/* GET record_details page. */
router.get('/details/:id', (req, res) => {
  const rs = new RecordDataService();
  RecordDataService.get_diet_record(req.params.id).then(record => {
    res.render('record_details', {title: 'PHE Logs', user: req.user, record: record.data, tot_board: RecordDataService.calc_tot_board(record.data)});
  }).catch(reason => {
    console.log(reason);
  });
});

module.exports = router;
