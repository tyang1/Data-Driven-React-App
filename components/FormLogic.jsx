import React from 'react';

const validationLogic = {
    email:(email)=> {
       return `email validation! ${email}`
    },
    password: (pwd) => {
       return `password validation! ${pwd}`

    }
}

function createLogic(){
    return Object.assign({},{
        logicStore: {},
        set (logic){
            this.logicStore = Object.assign({}, this.logicStore, logic)
        },
        get (logic){
            return this.logicStore[logic]
        }
    
})
}

export const FormLogicContext = React.createContext(createLogic())

export  class FormLogic extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { logic } = this.props;
        return(
            <FormLogicContext.Provider value={logic}>
                {this.props.children}
            </FormLogicContext.Provider>
        )
    }
}

export async function login(name, password) {
    const { token } = await fetchCreate(
      'authentication',
      { name, password }
    );
  
    rememberToken(token);
    history.goToEntry();
  };


export function withLogic(mapLogicToProps){
    //Map logic to props for children component,
    //here we need the validation function as props to the wrappedComponent;
    let mappedCompProps = {};
    if (!isObject(mapLogicToProps) || !isFunction(mapLogicToProps)) {
		throw new Error('withLogic expects an argument and it must be a function');
	}

    for (let [key, value] of Object.entries(mapLogicToProps)){
        mappedCompProps[value] = validationLogic[key]
    }
    return (WrappedComponent) => {
        class withLogic extends React.Component{
            render(){
                return <WrappedComponent {...mappedCompProps}/>
            }
        }
        return withLogic;
    }
}