import { ReactNode } from "react";

export interface ILegendaData {
    name: ReactNode;
    id?: number
    title?: string
    message?: string
    created_at?: string
    user?: {
      name: string
    }
    messageTopic?: {
      id: number
      name: string
    }[]
  }
  
  export interface ILegendaForm {
    id?: number
    title?: string
    message?: string
    created_at?: string
    topic?: number[] | undefined
  }