import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";
import { api } from "../../Config/apiConfig"

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_REQUEST})
  const {
    category,
    minPrice,
    maxPrice,
    minDiscount,
    sortBy,
    stock,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const {data} = await api.get(`/api/products?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sortBy=${sortBy}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    console.log("products : ",data)
    dispatch({type:FIND_PRODUCT_SUCCESS, payload:data})
    
} catch (error) {
    dispatch({type:FIND_PRODUCT_FAILURE, payload:error.message})
}
};


export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
  const {
    productId
  } = reqData;
  console.log(productId)
  try {
    const {data} =await api.get(`/api/product/id/${productId}`)
    console.log(data)
    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
} catch (error) {
    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
}
};