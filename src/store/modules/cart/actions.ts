import { IProduct } from "./types";

// requisição para adicionar o produto ao carrinho
export function addProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    }
  };
}

// disparado quando há sucesso na checagem de estoque
export function addProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    }
  };
}

// disparado quando há falha na checagem de estoque
export function addProductToCartFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    }
  };
}