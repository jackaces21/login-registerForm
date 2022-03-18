import axios from 'axios'
import Axios from 'axios'
import { API_URL } from '../../constants/API'

export const registerUser = ({ fullName, username, email, password }) => {
    return (dispatch) => {
        Axios.post(`${API_URL}/users`, {
            fullName,
            username,
            email,
            password,
            role: "user"
        })
            .then((result) => {
                delete result.data.password

                dispatch({
                    type: "USER_LOGIN",
                    payload: result.data
                })
                alert("Berhasil mendafkarkan user!")
            })
            .catch(() => {
                alert("Gagal mendaftarkan user!")
            })
    }
}

export const loginUser = ({ username, password }) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
            }
        })
            .then((result) => {
                if (result.data.length) {
                    if (password === result.data[0].password) {
                        delete result.data[0].password

                        localStorage.setItem("userDataLogin", JSON.stringify(result.data[0]))

                        dispatch({
                            type: "USER_LOGIN",
                            payload: result.data[0]
                        })
                    } else {
                        //Handle error wrong password
                        dispatch({
                            type: "USER_ERROR",
                            payload: "Wrong password!",
                        })
                    }
                } else {
                    //Handle error username not found
                    dispatch({
                        type: "USER_ERROR",
                        payload: "User not found",
                    })
                }
            })
            .catch((err) => {
                alert("Terjadi kesalahan di server")
            })
    }
}

export const logoutUser = () => {
    localStorage.removeItem("userDataLogin");

    return {
        type: "USER_LOGOUT"
    }
}

export const userKeepLogin = (userData) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                id: userData.id
            }
        })
            .then((result) => {
                delete result.data[0].password

                localStorage.setItem("userDataLogin", JSON.stringify(result.data[0]))

                dispatch({
                    type: "USER_LOGIN",
                    payload: result.data[0]
                })
            })
            .catch((err) => {
                alert("Terjadi kesalahan di server")
            })
    }
}