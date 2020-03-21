import React from "react";
export interface ConstructorMethods<T> {
    (arg: T): void;
}
export declare class Main extends React.Component<IMain.IProps, IMain.IState> {
    search: ConstructorMethods<object>;
    setTextInputRef: (element: any) => void;
    setURLInputRef: (element: any) => void;
    textInput: {
        value: string;
    };
    urlInput: {
        value: string;
    };
    constructor(props: any);
    static contextType: React.Context<any>;
    setLimit: (e: any) => void;
    searchHandler: (e: any) => void;
    handleNewLink: (e: any) => void;
    render(): JSX.Element;
}
declare const mainRefetchContainer: any;
export default mainRefetchContainer;
