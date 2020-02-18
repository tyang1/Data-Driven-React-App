import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

let _links = [];

class EventEmitter {
    constructor(){
        this.events = {};
    }
    subscribe(eventName, callback){
       if(!this.events[eventName]){
           this.events[eventName] = [callback]
       }else{
           this.events[eventName].push(callback)
       }
    }
    emit(eventName){
        let fns = this.events[eventName]
        fns.forEach( event => {
            event()
        })
    }
}

class LinkStores extends EventEmitter{
    constructor(props){
        super(props);
        AppDispatcher.register(action => {
                //telling the dispatcher that I'm interested in certain action
            if(action.actionType === ActionTypes.RECIEVE_LINKS){
               console.log("3. LinkStore recieves the link action")
               _links = action.links
               this.emit("change")
            }
            })
    }
    getAll(){
        return _links;
    }
}

let eventEmitter = new EventEmitter();

export default new LinkStores();
export { eventEmitter}