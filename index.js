class MyRedux {
    constructor() {
        this.name = 'demo';
    }
    static createStore = (fn) => {
        this.reducer = fn;
        this.state = fn&&fn(undefined, {});
        this.oldState = this.state;
        return this;
    }
    static reducer = undefined;
    static oldState = undefined;
    static state = undefined;
    static action = undefined;
    static callBack = undefined;

    static getState = () => {
        return this.state;
    }
    static subscribe = (fn) =>{
        this.callBack = fn;
        fn&&fn();
    }
    static dispatch = (action) => {
        this.newState = this.reducer(this.state, action);
        if(this.oldState == this.newState){
            return
        } else {
            this.state = this.newState;
            this.oldState = this.state;
            this.callBack();
        }
    }
}

export const createStore = MyRedux.createStore;
