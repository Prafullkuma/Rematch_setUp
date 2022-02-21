import { init } from "@rematch/core";
import users from "../models/users";

const models = {
  users,
};

const store = init({
  models,
});
export default store;
