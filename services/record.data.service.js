

class RecordDataService {

  constructor() {
    this.records = require('./static_data').getStaticRecords();
  }

  get_todays_record() {
    return this.today;
  }

  get_diet_record(id) {
    return this.today;
  }

  get_diet_records(from, to) {
    return this.records;
  }

  calc_tot_board(record) {
    return {
      target_phe: 100,
      daily_total: 200,
      remaining_goal: 300
    };
  }
}

module.exports = RecordDataService;
