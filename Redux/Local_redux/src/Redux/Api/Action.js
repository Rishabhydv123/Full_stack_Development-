import axios from "axios";

export const USER_DATA_REQUEST = "USER_DATA_REQUEST";
export const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";
export const USER_DATA_FAILURE = "USER_DATA_FAILURE";

const getUserData_success = (value) => {
  return { type: USER_DATA_SUCCESS, payload: value };
};

const getUserData_request = () => {
  return { type: USER_DATA_REQUEST };
};

const getUserData_failure = () => {
  return { type: USER_DATA_FAILURE };
};

const userData = (dispatch) => {
  dispatch(getUserData_request());

  return axios({
    method: "GET",
    url: "/api/users",
    baseURL: "https://reqres.in",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  })
    .then((res) =>
      dispatch(getUserData_success(res.data.data))
    )
    .catch(() => dispatch(getUserData_failure()));
};

export { userData };