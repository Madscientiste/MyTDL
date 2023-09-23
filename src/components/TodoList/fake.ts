type TTodoItem = {
  id: string;

  title: string;
  content?: string;

  createdAt: Date;
  updatedAt: Date;

  completedAt?: Date;
};

const generateDateFields = () => ({
  createdAt: new Date(),
  updatedAt: new Date(),

  completedAt: Math.floor(Math.random() * 2) ? new Date() : undefined,
});

const epoch = 1693519200 * 1000; // 01/09/2023
const sequenceMask = -1 ^ (-1 << 5);

let sequence = 0;
let lastTimestamp = 0;

/**
 * I like snowflakes...
 *
 * javascript is scary, bitwise operators and shift operators operate on 32-bit integers
 * soo .. an id cannot exceed 2,147,483,647
 */
const generateId = () => {
  let timestamp = new Date().getTime();

  if (lastTimestamp == timestamp) {
    timestamp = new Date().getTime();
    sequence = (sequence + 1) & sequenceMask;
  }

  lastTimestamp = timestamp;

  return (((timestamp - epoch) << 6) | sequence).toString();
};

export const fakeTodoItems: TTodoItem[] = [
  {
    id: generateId(),
    title: "Baking eggs using forks",

    ...generateDateFields(),
  },
  {
    id: generateId(),
    title: "Call uncle python to drink with java",

    ...generateDateFields(),
  },
  {
    id: generateId(),
    title: "Write a blog post about how C++ is slower than lua",

    ...generateDateFields(),
  },
  {
    id: generateId(),
    title: "Buy eggs from the soup store",

    ...generateDateFields(),
  },
];
