export interface ProductDetailsResponse{
  productId: number,
  productNameBG: string,
  productNameEN: string,
  productDescriptionBG: string,
  productDescriptionEN: string,
  categoryNameBG: string,
  categoryNameEN: string,
  similarProducts: SimilarProductResponse[];
}

export interface SimilarProductResponse {
  productId: number,
  productNameBG: string,
  productNameEN: string,
}
