const axios = require('axios');

class RecordDataService {

  constructor() {
  }

  static get_diet_record(id) {
    return axios.get(process.env.DATA_URL + '/records/' + id);
  }

  static get_diet_records(from, to) {
    return axios.get(process.env.DATA_URL + '/records');
  }

  static calc_tot_board(record) {
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

  static create_diet_record(user, date) {

  }

  static update_diet_record( record ) {

  }
}

module.exports = RecordDataService;
