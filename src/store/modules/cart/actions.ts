import { ActionTypes, IProduct } from "./types";

// requisição para adicionar o produto ao carrinho
export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  };
}

// disparado quando há sucesso na checagem de estoque
export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  };
}

// disparado quando há falha na checagem de estoque
export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  };
}