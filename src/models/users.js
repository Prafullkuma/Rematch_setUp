const model = {
  state: [],
  reducers: {
    loaded: (state, payload) => payload,
    followToggled: (state, payload) =>
      state.map((ele) => {
        if (ele.id === payload.id) {
          return {
            ...state,
            isFollowed: !ele.isFollowing,
          };
        }
        return state;
      }),
  },

  effects: (dispatch) => ({
    async load() {
      const users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      dispatch.users.loaded(users);
    },
  }),
};

export default model;
