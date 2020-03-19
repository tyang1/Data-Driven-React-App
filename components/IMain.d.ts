declare namespace IMain {
  export type IProps = {
    limit: number;
    state: IState;
    relay: IRelayType;
    store: any;
  };

 
  export type IRelayType = {
    refetch: any;
    environment: any;
  };

  export type IState = {
    links: Array<LinkType>;
  };

  export type LinkType = {
    _id: string;
    url: string;
    title: string;
  };
}
