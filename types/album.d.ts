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
  }

export interface Album {
    name: string,
    release_date: string,
    images: {
        image: {
            height: number,
            width: number,
            url: string,
        }
    },
    artists: {
        artist: {
            name: string
        }
    }
    
}