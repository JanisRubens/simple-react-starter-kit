import { EventEmitter } from "events";
import dispatcher from "../utilities/dispatcher";

class LoginStore extends EventEmitter {
    constructor() {
        super()
        this.userData = null;
    }

    getData() {
        return this.userData;
    }


    handleLoginData( loginData ) {
        this.userData = loginData;
        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case "USER_LOGIN": {
                console.log("STORE", action);
                this.handleLoginData( action.loginData );
                break;
            }
        }
    }

}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));
console.log(dispatcher);
export default loginStore;