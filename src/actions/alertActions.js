import { SHOW_ALERT, HIDE_ALERT } from "../types";

export const showAlertError = (alert) => ({
    type: SHOW_ALERT,
    payload: alert
})

export const hideAlertError = () => ({
    type: HIDE_ALERT,
})

export const showAlert = (alert) => {
    return (dispatch) => {
        dispatch(showAlertError(alert))
    }
}

export const hideAlert = () => {
    return (dispatch) => {
        dispatch(hideAlertError())
    }
}