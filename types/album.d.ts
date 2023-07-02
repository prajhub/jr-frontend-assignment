export interface TopAlbum {
    name: string;
    images: {
      [index: number]: {
        height: number;
        url: string;
        width: number;
      };
    };
    artists: {
      [index: number]: {
        name: string;
      };
    };
    id: string
  }



export interface Album {
  name: string,
  images: {
    [index: number]: {
      height: number;
      url: string;
      width: number;
    };
  };

  artists: {
    [index: number]: {
      name: string;
    };
  };
  release_date: string;
}