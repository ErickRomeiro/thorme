//importar bibliotecas e funções
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//exportar função de organizar classnames
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
