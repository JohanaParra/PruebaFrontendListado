
const list_state = {
    list_data: []
}

export default function ListReducer( state = list_state, action) {

    switch( action.type) {
        
        case "LIST:LOAD_LIST": {
            var new_state = {
                list_data: action.payload
            };
            return new_state;
        }
    }

    return state;

}
