import { init } from "@rematch/core";
import users from "../models/users";
import post from "../models/Post/Post";

const models = {
  users,
  post,
};

const store = init({
  models,
});

export default store;
