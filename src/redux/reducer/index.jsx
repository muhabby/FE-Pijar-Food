import { combineReducers } from "redux";
import menu from "./menu";
import menu_post from "./menu_post";
import auth_login from "./auth_login";
import auth_regist from "./auth_regist";
import menu_delete from "./menu_delete";
import menu_detail from "./menu_detail";
import menu_update from "./menu_update";

const rootReducers = combineReducers({
  auth_login,
  auth_regist,
  menu,
  menu_post,
  menu_delete,
  menu_detail,
  menu_update,
});

export default rootReducers;
