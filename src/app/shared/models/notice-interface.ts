import { Link } from './link-interface'

export interface Notice {
    id: number,
    title: string,
    description: string,
    detailDescription: string,
    callNumber: number,
    callYear: number,
    initDate: number,
    endDate: number,
    active: boolean,
    links: Link[]
}