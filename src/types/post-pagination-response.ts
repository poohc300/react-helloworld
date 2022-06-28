import {IPost} from "./post-type";

export interface PostPaginationResponse{
    items: IPost[],
    meta: PaginationMeta
}

export interface PaginationMeta{
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}