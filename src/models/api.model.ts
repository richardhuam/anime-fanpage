export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface GenericResponse<T> {
  ok: boolean;
  data: T;
}

export interface ApiResponse<T> {
  pagination?: Pagination;
  data: T;
}
