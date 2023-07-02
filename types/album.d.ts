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
  id: string
  tracks: {
    href: string;
    items: Track[];
  };
 
}

export interface Track {
  artists: {
    [index: number]: {
      name: string;
    };
  };
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export type AlbumArray = Album[];