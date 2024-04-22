export interface models { code: "S",
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
