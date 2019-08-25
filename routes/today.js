const express = require('express');
const router = express.Router();
const RecordDataService = require('../services/record.data.service');
const UserDataService = require('../services/user.data.services');
// const FoodDataService = require('../services/food.data.services');

/* GET home page. */
router.get('/', (req, res) => {
  if (!req.user.current_diet_record) {
    create_new_record(req.user._id).then(record => {
      res.render('today', {
        title: 'PHE Logs',
        user: req.user,
        record: record.data,
        tot_board: RecordDataService.calc_tot_board(record.data)
      });
    }).catch(err => {
      console.log(err);
      res.redirect('/');
    });

  } else {
    RecordDataService.get_diet_record(req.user.current_diet_record).then(record => {
      res.render('today', {
        title: 'PHE Logs',
        user: req.user,
        record: record.data,
        tot_board: RecordDataService.calc_tot_board(record.data)
      });
    }).catch(err => {
      console.log(err);
      res.redirect('/');
    });
  }
});

router.get('/addfood/:food_id', (req, res) => {
  RecordDataService.get_diet_record(req.user.current_diet_record).then(record => {
    if (!record) {
      // Create new current diet record for user
      record = create_new_record(req.user._id);
    }
    record.data.diet_record_details.push({weight: 0.0, phe: 0.0, food: req.params.food_id});
    RecordDataService.update_diet_record(record.data);

    // we don't know what the new food id is, so just redirect to today, and let the user edit the weight
    res.redirect('/today');
  });
});

router.get('/editfood/:detail_id', (req, res) => {
  // display food on screen
});

router.post('/editfood/:detail_id', (req, res) => {
  // update food settings
  // commit update to diet record
  // redirect to today
});

function create_new_record(user_id) {
  return new Promise(function (resolve, reject) {
    RecordDataService.create_diet_record(user_id).then(record => {
      set_user_current_record(user_id, record.data._id);
      resolve(record);
    })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
}

function set_user_current_record(user_id, record_id) {
  UserDataService.findById(user_id).then(record => {
    record.data.current_diet_record = record_id;
    UserDataService.update(record.data);
  })
    .catch(err => {
      console.log(err);
      return null;
    });
}

module.exports = router;
