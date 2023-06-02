export interface MovieListImages {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface WebpImages extends MovieListImages {}

export interface JpgImages extends MovieListImages {}

interface TrailerImages {
  image_url: string | null;
  small_image_url: string | null;
  medium_image_url: string | null;
  large_image_url: string | null;
  maximum_image_url: string | null;
}

interface Trailer {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
  images: TrailerImages;
}

interface Title {
  type: string;
  title: string;
}

interface AiredDate {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface MovieListAired {
  from: string;
  to: string | null;
  prop: {
    from: AiredDate;
    to: AiredDate;
  };
  string: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface MovieListStudio extends Producer {}

export interface MovieListGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeMovieList {
  mal_id: number;
  url: string;
  images: {
    jpg: JpgImages;
    webp: WebpImages;
  };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: MovieListAired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: Producer[];
  licensors: Producer[];
  studios: MovieListStudio[];
  genres: MovieListGenre[];
  explicit_genres: MovieListGenre[];
  themes: MovieListGenre[];
  demographics: MovieListGenre[];
}
