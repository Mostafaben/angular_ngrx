export interface IActor {
  id: string;
  name: string;
  imageUrl: string;
}

export default interface IMovie {
  id: string;
  name: string;
  createdAt: Date;
  description: string;
  actors: Array<IActor>;
}
