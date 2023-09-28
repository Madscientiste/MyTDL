import { faker } from "@faker-js/faker";

import { generateId } from "@/utils/snowflake";

type Overrides = Record<string, any>;

export const todoGenerator = (overrides?: Overrides) => ({
  id: generateId(),
  title: faker.lorem.sentence(2),
  content: faker.lorem.sentence({ min: 1, max: 10 }),
  ...overrides,
});
