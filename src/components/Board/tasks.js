const getCategory = () => {
    const arr = ["NOT STARTED", "FINISHED", "IN PROGRESS"];
    return arr[Math.floor(Math.random() * 3)]
};

const generateId = () => Math.floor(Math.random() * 10000);

const tasks = [
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Sleep",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Code",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Read a book",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Watch Movies",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Go to the Store",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Buy a car",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Go to School",
    },
    {
        id: generateId(),
        type: getCategory(),
        name: "Running",
    },
];


export default tasks;