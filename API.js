//import post from 'axios';
import {post} from 'jquery';
import querystring from 'querystring';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks(){
        console.log("1.In API")
        //this method should read the links from the restAPI
        post("/graphql", {query:`{
                        links {
                            _id,
                            title,
                            url
                    }
                }`
        }).then(response => {
            ServerActions.receiveLinks(response.data.links)
        })

    }
};

export default API;