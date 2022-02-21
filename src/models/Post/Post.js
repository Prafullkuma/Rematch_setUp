const model = {
  state: [],
  reducers: {
    loadPost: (state, payload) => payload,
    // no async operation
    removePost: (state, payload) => {
      return state.filter((ele) => {
        if (ele.id !== payload) {
          return ele;
        }
      });
    },
  },

  effects: (dispatch) => ({
    // async operation
    async load() {
      const postList = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((response) => response.json());
      dispatch.post.loadPost(postList);
    },

    async editPost(payload, state) {
      //getting state value by passing second parameter to async function
      const editPost = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then((response) => response.json());
      const list = state?.post.map((ele) => {
        if (ele.id === editPost.id) {
          return { ...state, title: payload.title };
        } else {
          return ele;
        }
      });
      dispatch.post.loadPost(list);
    },
  }),
};

export default model;
