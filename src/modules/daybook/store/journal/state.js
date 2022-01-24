export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti, consectetur, deleniti veritatis, doloremque ullam praesentium vel sit nam mollitia laboriosam. Sint voluptates distinctio quis eligendi explicabo eius, quisquam expedita?',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString,
      text: 'Sed corrupti, consectetur, deleniti veritatis, doloremque ullam praesentium vel sit nam mollitia laboriosam. Sint voluptates distinctio quis eligendi explicabo eius, quisquam expedita?',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString,
      text: 'Doloremque ullam praesentium vel sit nam mollitia laboriosam. Sint voluptates distinctio quis eligendi explicabo eius, quisquam expedita?',
      picture: null,
    },
  ],
});
