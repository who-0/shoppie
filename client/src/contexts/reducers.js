import colors from "colors";
import {
  HOME,
  SHOP,
  AUTH,
  PROFILE,
  USER_SIGNUP,
  OPEN_MENU,
  DISPLAY_ERROR,
  CLEAR_ERROR,
  SUBMIT_AUTH_SUCCESS,
  SUBMIT_AUTH_START,
  SUBMIT_AUTH_ERROR,
  UPDATE_PROFILE,
  CANCEL_UPDATE_PROFILE,
  LOGOUT_USER_SUCCESS,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_ERROR,
  SEARCH_PRODUCT_START,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_ERROR,
  GET_PRODUCT_INFO_START,
  GET_PRODUCT_INFO_SUCCESS,
  GET_PRODUCT_INFO_ERROR,
} from "./actions";
const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload,
        alert_type: "error",
      };
    case CLEAR_ERROR:
      return { ...state, alert: false, alert_msg: "", alert_type: "" };
    case HOME:
      return {
        ...state,
        logo: "logo_1",
        color: colors.home_color,
        home_active: true,
        shop_active: false,
        auth_active: false,
        profile_active: false,
        menu_open: false,
        alert: false,
        alert_msg: "",
        alert_type: "",
      };
    case SHOP:
      return {
        ...state,
        color: colors.shop_color,
        logo: "logo_2",
        home_active: false,
        shop_active: true,
        auth_active: false,
        profile_active: false,
        menu_open: false,
        alert: false,
        alert_msg: "",
        alert_type: "",
      };
    case AUTH:
      return {
        ...state,
        color: colors.login_color,
        logo: "logo_3",
        home_active: false,
        shop_active: false,
        auth_active: true,
        profile_active: false,
        menu_open: false,
        alert: false,
        alert_msg: "",
        alert_type: "",
      };
    case PROFILE:
      return {
        ...state,
        color: colors.login_color,
        logo: "logo_3",
        home_active: false,
        shop_active: false,
        auth_active: false,
        profile_active: true,
        menu_open: false,
        alert: false,
        alert_msg: "",
        alert_type: "",
      };
    case USER_SIGNUP:
      return { ...state, signup: !state.signup };
    case OPEN_MENU:
      return { ...state, menu_open: !state.menu_open };
    case SUBMIT_AUTH_START:
      return { ...state, loading: true };
    case SUBMIT_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        alert: true,
        alert_type: "success",
        alert_msg: action.payload.success,
      };
    case SUBMIT_AUTH_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "error",
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        isEdited: true,
      };
    case CANCEL_UPDATE_PROFILE:
      return {
        ...state,
        isEdited: false,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        token: null,
        user: null,
      };
    case UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "success",
        user: action.payload.data,
        isEdited: false,
      };
    case GET_ALL_PRODUCTS_START:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    case SEARCH_PRODUCT_START:
      return { ...state, loading: true };
    case SEARCH_PRODUCT_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case SEARCH_PRODUCT_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    case GET_PRODUCT_INFO_START:
      return { ...state, loading: true };
    case GET_PRODUCT_INFO_SUCCESS:
      return { ...state, showProduct: true, loading: false };
    case GET_PRODUCT_INFO_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    default:
      return state;
  }
};

export default reducer;
