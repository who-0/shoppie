import colors from "colors";
import {
  HOME,
  SHOP,
  AUTH,
  PROFILE,
  USER_SIGNUP,
  OPEN_MENU,
  DISPLAY_ERROR,
  DISPLAY_SUCCESS,
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
  ADMIN_DASHBOARD,
  OPEN_SUB_MENU,
  ADMIN_PRODUCTS,
  ADMIN_USERS,
  ADMIN_ORDERS,
  GET_STATUS_ERROR,
  GET_STATUS_SUCCESS,
  GET_STATUS_START,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
  DELETE_USER_SUCCESS,
  ADMIN_UPDATE_USER_START,
  ADMIN_UPDATE_USER_SUCCESS,
  GET_ALL_ORDERS_ADMIN_START,
  GET_ALL_ORDERS_ADMIN_SUCCESS,
  SET_ORDER_INFO,
  UPDATE_ORDER_BY_ADMIN_ERROR,
  UPDATE_ORDER_BY_ADMIN_START,
  UPDATE_ORDER_BY_ADMIN_SUCCESS,
  CHANGE_PAGE_BY_ADMIN,
  OPEN_UPDATE_PRODUCT_ADMIN
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
    case DISPLAY_SUCCESS:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload,
        alert_type: "success",
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
        admin_active:false,
        menu_open: false,
        sub_menu_open:false,
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
        admin_active:false,
        menu_open: false,
        sub_menu_open:false,
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
        admin_active:false,
        menu_open: false,
        sub_menu_open:false,
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
        admin_active:false,
        menu_open: false,
        sub_menu_open:false,
        alert: false,
        alert_msg: "",
        alert_type: "",
      };
      case ADMIN_DASHBOARD:
        return {
          ...state,
          color: colors.admin_color,
          logo: "logo_4",
          home_active: false,
          shop_active: false,
          auth_active: false,
          profile_active: false,
          admin_active:true,
          admin_status:true,
          admin_products:false,
          admin_users:false,
          admin_orders:false,
          menu_open: false,
          sub_menu_open:false,
          alert: false,
          alert_msg: "",
          alert_type: "",
        };
    case ADMIN_PRODUCTS:
      return {
        ...state,
        admin_status:false,
        admin_products:true,
        admin_users:false,
        admin_orders:false,
        menu_open: false,
        sub_menu_open:false,
      }
    case ADMIN_USERS:
      return {
        ...state,
        admin_status:false,
        admin_products:false,
        admin_users:true,
        admin_orders:false,
        menu_open: false,
        sub_menu_open:false,
      }
      case ADMIN_ORDERS:
        return {
          ...state,
          admin_status:false,
          admin_products:false,
          admin_users:false,
          admin_orders:true,
          menu_open: false,
          sub_menu_open:false,
        }
    case USER_SIGNUP:
      return { ...state, signup: !state.signup };
    case OPEN_MENU:
      return { ...state, menu_open: !state.menu_open, sub_menu_open:false };
    case  OPEN_SUB_MENU:
      return { ...state, sub_menu_open: !state.sub_menu_open };
    case SUBMIT_AUTH_START:
      return { ...state, loading: true  };
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
        isCartOpen: false,
        cartItem: [],
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
      const { products, limit, skip, total } = action.payload;
      return {
        ...state,
        products: products,
        limit,
        skip,
        total,
        loading: false,
      };
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
      return { ...state, loading: true, isCartOpen: false };
    case GET_PRODUCT_INFO_SUCCESS:
      return {
        ...state,
        showProduct: true,
        loading: false,
        singleProduct: action.payload,
        showImage: action.payload.images[0],
      };
    case GET_PRODUCT_INFO_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    case CLOSE_PRODUCT_INFO:
      return {
        ...state,
        showProduct: false,
        singleProduct: null,
      };
    case GET_ALL_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case GET_ALL_CATEGORIES_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    case GET_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    case CHANGE_PAGE:
      return {
        ...state,
        acitvePage: action.payload.number,
        skip: action.payload.changeSkip,
        isCartOpen: false,
      };
    case CHANGE_SHOW_IMAGE:
      return {
        ...state,
        showImage: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        isCartOpen: false,
        cartItem: action.payload,
      };
    case IS_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen };
    case ADD_QUANTITY:
      return { ...state, cartItem: action.payload };
    case REMOVE_QUANTITY:
      return { ...state, cartItem: action.payload };
    case CHECK_INFO:
      return {
        ...state,
        order: !state.order,
        totalPrice: action.payload,
        isCartOpen: false,
      };
    case ORDER_START:
      return { ...state, loading: true };
    case ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: false,
        orderHistoryStart: true,
        cartItem: [],
        alert: true,
        alert_msg: action.payload,
        alert_type: "success",
      };
    case ORDER_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    case GET_ALL_USER_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USER_ORDERS_SUCCESS:
      return {
        ...state,
        userOrders: action.payload,
        loading: false,
      };
    case GET_ALL_USER_ORDERS_ERROR:
      return {
        ...state,
        alert: true,
        alert_msg: action.payload.msg,
        alert_type: "danger",
      };
    case GET_STATUS_START:
      return {
        ...state,
        loading:true,
      }
    case GET_STATUS_SUCCESS:
        return {
          ...state,
          loading:false,
          orderStatus:action.payload.order,
          userStatus:action.payload.user,
          orderTimes:action.payload.orderTime,
          orderCreatedTime:action.payload.orderCreatedTime,
          userCreatedTime:action.payload.userStatusTime
        }
    case GET_USER_DATA_START:
      return {
        ...state,
        loading:true,
      }
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading:false,
        usersData:[action.payload],
      }
    case GET_ALL_USERS_START:
      return {
        ...state,
        loading:true,
      }
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading:false,
        usersData:action.payload,
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
      }
    case ADMIN_UPDATE_USER_START:
      return {
        ...state,
        loading:true,
      }
    case ADMIN_UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading:false,
      }
    case GET_ALL_ORDERS_ADMIN_START:
      return {
        ...state,
        loading:true,
      }
    case GET_ALL_ORDERS_ADMIN_SUCCESS:
      return {
        ...state,
        loading:false,
        allOrders:action.payload,
      }
    case SET_ORDER_INFO:
      return {
        ...state,
        orderInfo:action.payload,
      }
    case  UPDATE_ORDER_BY_ADMIN_START:
      return {
        ...state,
        loading:true
      }
      case  UPDATE_ORDER_BY_ADMIN_SUCCESS:
        return {
          ...state,
          loading:false,
          updateOrder:!state.updateOrder,
        }
      case CHANGE_PAGE_BY_ADMIN:
        return {
          ...state,
          skip:action.payload
        }
      case OPEN_UPDATE_PRODUCT_ADMIN:
        return {
          ...state,
          isUpdateProduct:true,
          updateProduct:action.payload,
        }
    default:
      return state;
  }
};

export default reducer;
