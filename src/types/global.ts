/**
 * @url ?page=page&limit=limit&search=search&sort=asc
 */
export type FilterData = {
    page?: number,
    limit?: number,
    search?: string,
    sort?: string | 'asc' | 'desc',
}


/**
 * Modules Data
*/
type ModuleChildren = Array<{
    id: number | string
    name?: string
    href?: string
    initial?: string
    icon?: any
    new?: number | 0
    current?: boolean
}>

export type ModuleList = Array<
    Omit<ModuleChildren[0], "new" | "icon" | "initial">
    & {
        children: ModuleChildren
    }
>


type PagePrev = {
    status?: boolean
    url?: string
}

type PageNext = {
    status?: boolean
    url?: string
}

type PageItems = Array<{
    label?: string,
    url?: string,
    active?: boolean,
}>


/**
 * [<] [...] [1] [2] [3] [4] [...] [>]
*/
export type PaginationData = {
    prev?: PagePrev
    items?: PageItems
    next?: PageNext
}

export type AdminContainer = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export type ButtonType = AdminContainer & {
    props?: any
    href?: string
}

export type Breadcrumb = Array<{
    name: string;
    href?: string | undefined | null;
    current?: boolean
}>