interface Character {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  name: string;
}

interface Person {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  name: string;
}

interface VoiceActor {
  person: Person;
  language: string;
}

export interface MovieCharacters {
  character: Character;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}
