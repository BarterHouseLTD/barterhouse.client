export interface CategoryResponse {
  categoryId: number,
  categoryNameBG: string,
  categoryNameEN: string,
  products: ProductResponse[];
}

export interface ProductResponse {
  productId: number,
  productNameBG: string,
  productNameEN: string,
}
