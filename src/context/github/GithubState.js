import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './gitubReducer';
import {
    SEARCH_USERS,
    GET_USERS,
    GET_REPOS,
    CLEAR_USERS,
    SET_LOADING
} from '../types';

let clientId;
let clientSecret;
if (process.env.NODE_ENV !== 'production') {
    clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    clientId = process.env.GITHUB_CLIENT_ID;
    clientSecret = process.env.GITHUB_CLIENT_SECRET;

}
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //SET LOADING
    const setLoading = () => dispatch({ type: SET_LOADING })

    //SEARCH USER
    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    //CLEAR USERS
    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    //GET USER
    const getUser = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }

    //GET USER REPOS
    const getUserRepos = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }
    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            repos: state.repos,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;