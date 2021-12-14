
// Api
import {ListApi} from '../api/ListApi';

export const LoadListAction = ( data_list) => {
    return { type: "LIST:LOAD_LIST", payload: data_list};
}

export const LoadList = () => async (dispatch) => {

    ListApi()
    .then( (answer_list) => {
        dispatch( LoadListAction(answer_list.data));
    })
    .catch( ()  => {
    
    }
    )
    .finally( () => {

    })

}