export type ProductType = "SMOOTHIE" | "ICE_CREAM";

export type NutrientType = "MACRO" | "MICRO";

export type MacroNutrient = "FAT" | "CARB" | "FIBRE" | "PROTEIN";

export type MicroNutrient = "VIT_D" | "VIT_A" | "CALCIUM" | "POTASSIUM";

export type NutritionalValue = {
  id: number;
  nutrientType: NutrientType;
  macroNutrient?: MacroNutrient;
  microNutrient?: MicroNutrient;
  nutrientUnit: string;
  nutrientValue: number;
};

export type Product = {
  id: number;
  productType: ProductType;
  name: string;
  basicDetails: string;
  nutritionalValues: NutritionalValue[];
};
