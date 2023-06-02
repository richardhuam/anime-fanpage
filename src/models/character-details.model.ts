interface AnimeImages {
  jpg: {
    image_url: string;
  };
  webp?: {
    image_url: string;
    small_image_url: string;
  };
}

interface AnimeEntry {
  role: string;
  anime: {
    mal_id: number;
    url: string;
    images: AnimeImages;
    title: string;
  };
}

interface MangaEntry {
  role: string;
  manga: {
    mal_id: number;
    url: string;
    images: AnimeImages;
    title: string;
  };
}

interface VoiceEntry {
  person: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  language: string;
}

export interface AnimeCharacterDetails {
  mal_id: number;
  url: string;
  images: AnimeImages;
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
  anime: AnimeEntry[];
  manga: MangaEntry[];
  voices: VoiceEntry[];
}
