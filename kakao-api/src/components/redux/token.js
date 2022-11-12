const SET_TOKEN = "SET_TOKEN";

const initialState = {
  access_token: "",
  expires_in: 0,
  id_token: "",
  refresh_token: "",
  refresh_token_expires_in: 0,
  scope: "",
  token_type: "",
};

const token = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        //...state,
        data: action.data.access_token,
        access_token: action.data.access_token,
        expires_in: action.data.expires_in,
        id_token: action.data.id_token,
        refresh_token: action.data.refresh_token,
        refresh_token_expires_in: action.data.refresh_token_expires_in,
        scope: action.data.scope,
        token_type: action.data.token_type,
      };
    default:
      return state;
  }
};

export default token;
