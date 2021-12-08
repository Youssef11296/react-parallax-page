interface Post {
  id?: number;
  title: string;
  imageUrl: string;
}

interface Action {
  type: string;
  payload: any;
}
