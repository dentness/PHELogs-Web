class RecordDataService {

  constructor() {
    this.records = [
      {
        id: '12038049830',
        date: '10/25/2019',
        goal: 790,
        final: 781,
        notes: 'Nothing to say here...',
        foods:
          [
            {
              id: '132287918279',
              food: {
                id: '123412341234',
                name: 'Bread',
                phe_multiplier: 1.32,
                source: {name: 'USDA', public: true},
                updated_on: '10/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '3884882888',
              food: {
                id: '089489289284',
                name: 'Potatoes',
                phe_multiplier: 0.5,
                source: {name: 'USDA', public: true},
                updated_on: '03/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '848488388333',
              food: {
                id: '483881881880',
                name: 'Milk',
                phe_multiplier: 4.2,
                source: {name: 'USDA', public: true},
                updated_on: '04/09/2006'
              },
              weight: 28,
              date: '10/25/2019'
            }
          ]
      },
      {
        id: '48759874987',
        date: '10/24/2019',
        goal: 790,
        final: 480,
        notes: 'Not feeling well.',
        foods:
          [
            {
              id: '132287918279',
              food: {
                id: '123412341234',
                name: 'Bread',
                phe_multiplier: 1.32,
                source: {name: 'USDA', public: true},
                updated_on: '10/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '3884882888',
              food: {
                id: '089489289284',
                name: 'Potatoes',
                phe_multiplier: 0.5,
                source: {name: 'USDA', public: true},
                updated_on: '03/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '848488388333',
              food: {
                id: '483881881880',
                name: 'Milk',
                phe_multiplier: 4.2,
                source: {name: 'USDA', public: true},
                updated_on: '04/09/2006'
              },
              weight: 28,
              date: '10/25/2019'
            }
          ]
      },
      {
        id: '38974987222',
        date: '10/25/2019',
        goal: 790,
        final: 821,
        notes: '',
        foods:
          [
            {
              id: '132287918279',
              food: {
                id: '123412341234',
                name: 'Bread',
                phe_multiplier: 1.32,
                source: {name: 'USDA', public: true},
                updated_on: '10/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '3884882888',
              food: {
                id: '089489289284',
                name: 'Potatoes',
                phe_multiplier: 0.5,
                source: {name: 'USDA', public: true},
                updated_on: '03/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '848488388333',
              food: {
                id: '483881881880',
                name: 'Milk',
                phe_multiplier: 4.2,
                source: {name: 'USDA', public: true},
                updated_on: '04/09/2006'
              },
              weight: 28,
              date: '10/25/2019'
            }
          ]
      }
    ];
    this.today =
      {
        id: '38974987222',
        date: '10/25/2019',
        goal: 790,
        final: 821,
        notes: '',
        foods:
          [
            {
              id: '132287918279',
              food: {
                id: '123412341234',
                name: 'Bread',
                phe_multiplier: 1.32,
                source: {name: 'USDA', public: true},
                updated_on: '10/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '3884882888',
              food: {
                id: '089489289284',
                name: 'Potatoes',
                phe_multiplier: 0.5,
                source: {name: 'USDA', public: true},
                updated_on: '03/20/2018'
              },
              weight: 28,
              date: '10/25/2019'
            },
            {
              id: '848488388333',
              food: {
                id: '483881881880',
                name: 'Milk',
                phe_multiplier: 4.2,
                source: {name: 'USDA', public: true},
                updated_on: '04/09/2006'
              },
              weight: 28,
              date: '10/25/2019'
            }
          ]
      }
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
