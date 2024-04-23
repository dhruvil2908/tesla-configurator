export interface models {
  code: string,
  description: string,
  colors: modelColor[]
}

export interface modelColor {
  code: string,
  description: string,
  price: number
}

export interface modelWithImage {
  modelCode: string;
  modelImage: string;
}

export interface TeslaOptions{
  selectedModel?: models;
  selectedColor?: modelColor;
  modelImage?: string;
}
