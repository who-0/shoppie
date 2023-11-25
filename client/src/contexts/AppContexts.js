import { useReducer, createContext } from "react";
import reducer from "./reducers";
import axios from "axios";

import {
  USER_SIGNUP,
  OPEN_MENU,
  OPEN_SUB_MENU,
  SUBMIT_AUTH_SUCCESS,
  SUBMIT_AUTH_START,
  SUBMIT_AUTH_ERROR,
  DISPLAY_ERROR,
  DISPLAY_SUCCESS,
  CLEAR_ERROR,
  UPDATE_PROFILE,
  CANCEL_UPDATE_PROFILE,
  LOGOUT_USER_SUCCESS,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
  SEARCH_PRODUCT_START,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_ERROR,
  GET_PRODUCT_INFO_START,
  GET_PRODUCT_INFO_SUCCESS,
  GET_PRODUCT_INFO_ERROR,
  CLOSE_PRODUCT_INFO,
  GET_ALL_CATEGORIES_START,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_ERROR,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  CHANGE_PAGE,
  CHANGE_SHOW_IMAGE,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  IS_CART_OPEN,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  CHECK_INFO,
  ORDER_START,
  ORDER_SUCCESS,
  ORDER_ERROR,
  GET_ALL_USER_ORDERS_START,
  GET_ALL_USER_ORDERS_SUCCESS,
  GET_ALL_USER_ORDERS_ERROR,
  GET_STATUS_START,
  GET_STATUS_SUCCESS,
  GET_STATUS_ERROR,
} from "./actions";
// import { useCookies } from "react-cookie";

const data = localStorage.getItem("user");
const dataCart = localStorage.getItem("cart");
const item = JSON.parse(dataCart);
const user = JSON.parse(data);

const initialState = {
  color: "",
  loading: false,
  logo: "logo_1",
  home_active: true,
  shop_active: false,
  auth_active: false,
  profile_active: false,
  menu_open: false,
  sub_menu_open:false,
  admin_active:false,
  admin_status:false,
  admin_products:false,
  admin_users:false,
  admin_orders:false,
  signup: false,
  isLogined: false,
  alert: false,
  alert_msg: "",
  alert_type: "",
  user: user || "",
  token: null,
  isEdited: false,
  products: [],
  showProduct: false,
  showImage: null,
  singleProduct: null,
  categories: [],
  total: 0,
  skip: 0,
  limit: 20,
  acitvePage: 1,
  cartItem: item || [],
  isCartOpen: false,
  order: false,
  totalPrice: 0,
  orderHistoryStart: false,
  userOrders: [],
  orderStatus:{},
  userStatus:[],
  orderTimes:[],
  orderCreatedTime:[],
  userCreatedTime:[],
};
const Context = createContext();

const API = axios.create({ baseURL: "/api/v1" });

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (action) => {
    dispatch({ type: action });
  };

  const menuOpen = () => {
    dispatch({ type: OPEN_MENU });
  };

  const subMenuOpen = () => {
    dispatch({type:OPEN_SUB_MENU })
  }

  const signUpUser = () => {
    dispatch({ type: USER_SIGNUP });
  };

  const submitAuth = async (data) => {
    dispatch({ type: SUBMIT_AUTH_START });
    try {
      const authEndPoint = state.signup ? "signup" : "login";
      const response = await API.post(`/auth/${authEndPoint}`, data);
      const { user, token } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      let alertMsg;
      if (authEndPoint === "signup") {
        alertMsg = "User Created! Redirecting...";
      } else {
        alertMsg = "Login Successful! Redirecting....";
      }
      dispatch({
        type: SUBMIT_AUTH_SUCCESS,
        payload: { token, user, success: alertMsg },
      });
    } catch (error) {
      dispatch({
        type: SUBMIT_AUTH_ERROR,
        payload: { msg: error.response.data.msg },
      });
      clearAlert();
    }
  };

  // const googleAuth = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     console.log("response", response);
  //     const userInfo = await API.get("/auth/google", {
  //       headers: { Authorization: `Bearer ${response.access_token}` },
  //     });
  //     console.log(userInfo);
  //   },
  //   onError: (error) => console.log(error),
  // });

  const googleAuth = () => {
    window.open(`http://localhost:4000/api/v1/auth/google`, "_self");
  };

  const userGoogle = async () => {
    const response = await API.get("/auth/success");
    console.log(response);
    const { user, token } = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: SUBMIT_AUTH_SUCCESS,
      payload: { token, user, success: "Successful Login" },
    });
  };

  const displayAlert = (type, msg) => {
    dispatch({ type, payload: msg });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 2000);
  };

  const editeProfile = () => {
    dispatch({ type: UPDATE_PROFILE });
  };
  const cancelEditeProfile = () => {
    dispatch({ type: CANCEL_UPDATE_PROFILE });
  };

  const logoutUser = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  dispatch({ type: LOGOUT_USER_SUCCESS });
  };

  const updateUser = async (user) => {
    dispatch({ type: UPDATE_USER_START });
    let updatedInfo;
    if (user.password) {
      updatedInfo = user;
    } else {
      const { password, ...info } = user;
      updatedInfo = info;
    }

    try {
      const response = await API.patch("/user", {
        ...updatedInfo,
        _id: state.user._id,
      });

      await localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { data: response.data, msg: "Update Successful!" },
      });

      clearAlert();
    } catch (error) {
      dispatch({ type: UPDATE_USER_ERROR });
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    dispatch({ type: GET_ALL_PRODUCTS_START });
    try {
      const response = await API.get(
        `/products?limit=${state.limit}&skip=${state.skip}`
      );
      const { products, skip, limit, total } = response.data;
      await getAllCategories();
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: { products, skip, limit, total },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_PRODUCTS_ERROR, payload: error.message });
    }
  };

  const searchProduct = async (name) => {
    dispatch({ type: SEARCH_PRODUCT_START });
    try {
      const response = await API.get(`/products?name=${name}`);
      const { products } = response.data;
      dispatch({ type: SEARCH_PRODUCT_SUCCESS, payload: products });
    } catch (error) {
      console.log(error);
      dispatch({ type: SEARCH_PRODUCT_ERROR, payload: { msg: error.message } });
    }
  };

  const showProductInfo = async (id) => {
    dispatch({ type: GET_PRODUCT_INFO_START });
    try {
      const response = await API.get(`/products/${id}`);
      const { data } = response;
      dispatch({ type: GET_PRODUCT_INFO_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PRODUCT_INFO_ERROR,
        payload: { msg: error.message },
      });
    }
  };

  const closeProductInfo = (_) => dispatch({ type: CLOSE_PRODUCT_INFO });

  const getAllCategories = async () => {
    dispatch({ type: GET_ALL_CATEGORIES_START });
    try {
      const response = await API.get("/products/categories");
      const data = response.data;
      dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ALL_CATEGORIES_ERROR,
        payload: { msg: error.message },
      });
    }
  };

  const getCategoryByName = async (name) => {
    dispatch({ type: GET_CATEGORY_START });
    try {
      const response = await API.get(`/products/categories/${name}`);
      const { products } = response.data;

      dispatch({ type: GET_CATEGORY_SUCCESS, payload: products });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_CATEGORY_ERROR, payload: { msg: error.message } });
    }
  };

  const changePage = (number) => {
    const changeSkip = state.limit * number - state.limit;
    dispatch({ type: CHANGE_PAGE, payload: { number, changeSkip } });
  };

  const changeShowImage = (img) => {
    dispatch({ type: CHANGE_SHOW_IMAGE, payload: img });
  };

  const addToCart = (item) => {
    // if (!state.user) Navigate("/auth");
    const notFoundData = handleQuantity(item.id, "next");
    if (notFoundData) {
      const newData = { ...item, quantity: 1 };
      state.cartItem.push(newData);
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
      dispatch({ type: ADD_TO_CART, payload: state.cartItem });
    }
    displayAlert(DISPLAY_SUCCESS, "success to cart");
  };

  const CartOpenorNot = () => {
    dispatch({ type: IS_CART_OPEN });
  };

  const handleQuantity = (id, action) => {
    const foundData = state.cartItem.findIndex((item) => item.id === id);

    if (isNaN(foundData) || foundData < 0) return true;
    if (action === "next") {
      state.cartItem[foundData].quantity += 1;
      dispatch({ type: ADD_QUANTITY, payload: state.cartItem });
    } else if (action === "prev") {
      state.cartItem[foundData].quantity -= 1;
      if (state.cartItem[foundData].quantity === 0) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      }
      dispatch({ type: REMOVE_QUANTITY, payload: state.cartItem });
    } else return;
    localStorage.setItem("cart", JSON.stringify([...state.cartItem]));
  };

  const checkInfo = (totalCost = 0) =>
    dispatch({ type: CHECK_INFO, payload: totalCost });

  const confirmeOrder = async (orderItems, totalPrice) => {
    let userOrder = [];
    dispatch({ type: ORDER_START });
    try {
      orderItems.forEach((item) => {
        const { id, title, price, quantity } = item;
        userOrder.push({ id, title, price, quantity });
      });
      await API.post("/order", {
        userOrder,
        totalPrice,
        userId: state.user._id,
      });
      dispatch({
        type: ORDER_SUCCESS,
        payload:
          "Your Order is Successfully.Please wait contact from seller to you.",
      });
      localStorage.removeItem("cart");
    } catch (error) {
      console.log(error);
      dispatch({ type: ORDER_ERROR, payload: { msg: error.message } });
    }
    // console.log(response.data);
  };

  const updatePhone = async (phone) => await updateUser({ phone });

  const getAllUserOrders = async () => {
    dispatch({ type: GET_ALL_USER_ORDERS_START });
    try {
      const response = await API.get("/order");
      dispatch({ type: GET_ALL_USER_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ALL_USER_ORDERS_ERROR,
        payload: { msg: error.message },
      });
    }
  };
  
  const getStatusUser = async () => {
    dispatch({ type: GET_STATUS_START });
    try {
      const userResponse = await API.get('/user/status');
      const orderResponse = await API.get('/order/status');
      dispatch({type:GET_STATUS_SUCCESS,
        payload:{
          order:orderResponse.data.orders,
          orderTime:orderResponse.data.orderTime, 
          orderCreatedTime:orderResponse.data.createTime,
          user:userResponse.data.status,
          userStatusTime:userResponse.data.statusTime,
        }});
    } catch (error) {
      console.log(error);
      dispatch({type:GET_STATUS_ERROR,payload:{msg:error.message}});
    }
  }

  return (
    <Context.Provider
      value={{
        ...state,
        changeColor,
        menuOpen,
        subMenuOpen,
        signUpUser,
        submitAuth,
        displayAlert,
        editeProfile,
        cancelEditeProfile,
        logoutUser,
        updateUser,
        googleAuth,
        userGoogle,
        getAllProducts,
        searchProduct,
        showProductInfo,
        closeProductInfo,
        getAllCategories,
        getCategoryByName,
        changePage,
        changeShowImage,
        addToCart,
        CartOpenorNot,
        handleQuantity,
        checkInfo,
        confirmeOrder,
        updatePhone,
        getAllUserOrders,
        getStatusUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
