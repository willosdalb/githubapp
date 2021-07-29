import axios from "axios";
import { githubActions } from "../reducers/github-reducer";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get("https://api.github.com/users");
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUser = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/" + username
      );
      dispatch(githubActions.fillUser(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};


export const getRepositories = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      dispatch(githubActions.fillRepositories(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getStarred = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/starred`
      );
      dispatch(githubActions.filLStarredRepos(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

