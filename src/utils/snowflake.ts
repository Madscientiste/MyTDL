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
export const generateId = () => {
  let timestamp = new Date().getTime();

  if (lastTimestamp == timestamp) {
    timestamp = new Date().getTime();
    sequence = (sequence + 1) & sequenceMask;
  }

  lastTimestamp = timestamp;

  return (((timestamp - epoch) << 6) | sequence).toString();
};
