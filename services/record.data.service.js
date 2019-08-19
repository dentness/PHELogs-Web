const axios = require('axios');

class RecordDataService {

  constructor(URL) {
    this.DATA_URL = URL;
    this.records = require('./static_data').getStaticRecords();
  }

  get_todays_record() {
    // return
    return this.today;
  }

  get_diet_record(id) {
    return axios.get(this.DATA_URL + '/records/' + id);
  }

  get_diet_records(from, to) {
    return axios.get(this.DATA_URL + '/records');
  }

  calc_tot_board(record) {
    var daily_total = 0.0;
    for (var i = 0; i < record.diet_record_details.length; i++) {
      daily_total += record.diet_record_details[i].phe;
    }

    return {
      target_phe: record.target_phe_level,
      daily_total: daily_total,
      remaining_goal: record.target_phe_level - daily_total
    };
  }
}

module.exports = RecordDataService;
