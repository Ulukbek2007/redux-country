import axios from "axios"
import { ADD_COUNTRY_REJECTED, ADD_COUNTRY_STARTED, ADD_COUNTRY_SUCCESS } from "../../types/types"

export const getCountry = () => {
    return async (dispatch) => {
        dispatch(addCountryStarted())
        try {
            const { data } = await axios('https://api.sampleapis.com/countries/countries')
            dispatch(addCountrySuccess(data))
        } catch (error) {
            dispatch(addCountryRejected(error))
        }
    }
}
const addCountryStarted = () => ({ type: ADD_COUNTRY_STARTED })
const addCountrySuccess = (data) => {
    return {
        type: ADD_COUNTRY_SUCCESS,
        payload: data
    }
}
const addCountryRejected = () => ({ type: ADD_COUNTRY_REJECTED, payload: err })

