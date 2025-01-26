import { ReactNode } from "react";


export type TRoute = {

    path: string,
    element: ReactNode;
  
};

export type TsidebarItem = {

    key: string;
    label: ReactNode;
    children?: TsidebarItem[];
  
} | undefined;
  
export type TUserPath = {
    name?: string,
    path?: string,
    element?: ReactNode;
Children ?: TUserPath[];
}