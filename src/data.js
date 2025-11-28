const data = [
  {
    id: 1,
    name: "Arjun",
    manager: -1,
    children: [
      {
        id: 2,
        name: "Shruthi",
        manager: 1,
        children: [
          { id: 4, name: "Ishita", manager: 2 },
          { id: 5, name: "Shreyaan", manager: 2 },
        ],
      },
      { id: 3, name: "Balu", manager: 1 },
    ],
  },
];

export default data;