export interface Models {
  code: string,
  description: string,
  colors: ModelColor[]
}

export interface ModelColor {
  code: string,
  description: string,
  price: number
}

export interface TeslaOptions{
  selectedModel?: Models;
  selectedColor?: ModelColor;
  modelImage?: string;
  selectedConfig?: ConfigOptions;
  includeTow?: boolean;
  includeYoke?: boolean;
}

export interface ConfigOptions {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}

export interface TeslaConfig {
  configs: ConfigOptions[];
  towHitch: boolean;
  yoke: boolean;
}
