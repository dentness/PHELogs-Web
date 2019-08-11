exports.getStaticFoods = function () {
  return [
    {
      id: '123412341234',
      name: 'Bread',
      phe_multiplier: 1.32,
      source: {id: '10313801803', name: 'USDA', public: true},
      updated_on: '10/20/2018'
    },
    {
      id: '483974982374',
      name: 'Carrots',
      phe_multiplier: 0.33,
      source: {id: '10313801803', name: 'USDA', public: true},
      updated_on: '01/25/2017'
    },
    {
      id: '089489289284',
      name: 'Potatoes',
      phe_multiplier: 0.5,
      source: {id: '10313801803', name: 'USDA', public: true},
      updated_on: '03/20/2018'
    },
    {
      id: '483881881880',
      name: 'Milk',
      phe_multiplier: 4.2,
      source: {id: '12332987198273', name: 'USER', public: true},
      updated_on: '04/09/2006'
    },
    {
      id: '9393939933',
      name: 'Ice Cream',
      phe_multiplier: 9.2,
      source: {id: '123', name: 'USER', public: true},
      updated_on: '04/09/2006'
    }
  ]
};

exports.getStaticRecords = function () {
  return [{
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
    }];
};

