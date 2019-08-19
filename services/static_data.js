exports.getStaticFoods = function () {
  return [
    {
      "public": true,
      "_id": "5d5331424ed1de3aeef51cac",
      "description": "Munchos",
      "phe_multiplier": 0.33,
      "source_user": {
        "_id": "5d5329d520e3363a08501a00",
        "first_name": "Bubba",
        "last_name": "Duck",
        "email": "me@not.here",
        "current_target_phe_level": {
          "$numberDecimal": "600"
        },
        "__v": 0
      },
      "__v": 0
    },
    {
      "public": true,
      "_id": "5d53316e4ed1de3aeef51cad",
      "description": "Apples",
      "phe_multiplier": 0.05,
      "source_user": {
        "_id": "5d5329d520e3363a08501a00",
        "first_name": "Bubba",
        "last_name": "Duck",
        "email": "me@not.here",
        "current_target_phe_level": {
          "$numberDecimal": "600"
        },
        "__v": 0
      },
      "__v": 0
    }
  ];

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

