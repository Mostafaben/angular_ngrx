import IMovie, { IActor } from '../core/interfaces/movie.interface';

import * as faker from 'faker';

function generateActors(n: number) {
  return new Array(n + 1).fill(null).map((_) => {
    return {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      imageUrl: faker.image.avatar(),
    };
  });
}

const MOVIES: IMovie[] = new Array(20).fill(null).map((_) => ({
  id: faker.datatype.uuid(),
  name: faker.random.word(),
  createdAt: faker.date.past(),
  actors: generateActors(Math.floor(Math.random() * 10)),
  description: faker.lorem.paragraph(),
}));

export { MOVIES };
