export interface Pokemon{
    name: string;
    url : string;
}

export interface PokeResult {
  data: Pokemon[];
 }

export interface PokeCard{
  id: number;
  name: string;
  url:string;
  height:number;
  weight:number;
  type: string;
  desc: string;
  card_images: PokeCardImg[];
}

export interface PokeCardImg {
  image_url: string;
}

