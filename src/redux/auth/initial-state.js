export const initialState = {
  user: { name: null, email: null, avatarURL: "" },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  serverError: '',
  serverErrorStatus: null,
  resetForm: false,
};
