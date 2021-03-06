
exports.seed = function (knex, Promise) {
  return knex('classes').insert([
    {
      class_name: 'Power Ranger Pilates',
      class_duration: '1 hour',
      max_class_size: 15,
      class_date: '2021-11-17',
      start_time: '08:00:00',
      class_location: 'Central Park',
      class_instructor: 1,
      class_intensity: "Beginner",
      class_type: "pilates",
    },
    {
      class_name: 'Boxing Basics',
      class_duration: '45 min',
      max_class_size: 12,
      class_date: '2021-12-22',
      start_time: '10:30:00',
      class_location: 'YMCA',
      class_instructor: 2,
      class_intensity: "Beginner",
      class_type: "boxing",
    },
    {
      class_name: '80\'s at 8',
      class_duration: '1.5 hours',
      max_class_size: 25,
      class_date: '2021-11-19',
      start_time: '8:00:00',
      class_location: 'Gym Z',
      class_instructor: 1,
      class_intensity: "Advanced",
      class_type:"aerobics",
    },
    {
      class_name: 'Sychronized Swimming',
      class_duration: '2 hours',
      max_class_size: 10,
      class_date: '2022-01-07',
      start_time: '16:45:00',
      class_location: 'Community Pool',
      class_instructor: 2,
      class_intensity: "Intermediate",
      class_type: "swimming",
    },
    {
      class_name: 'Tik Tok Zumba',
      class_duration: '30 min',
      max_class_size: 20,
      class_date: '2022-02-08',
      start_time: '18:30:00',
      class_location: 'Gym Z',
      class_instructor: 2,
      class_intensity: "Advanced",
      class_type: "dance",
    },
  ]);
};
