export type PaginationItem =
  | { type: 'page'; value: number }
  | { type: 'ellipsis' };
