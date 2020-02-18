import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';
//use the API 

 let ServerActions = {
    receiveLinks(links){
        console.log("2. In ServerActions to dispatch actions")
        //dispatch action
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECIEVE_LINKS,
            links
        })

    }
}


export default ServerActions;