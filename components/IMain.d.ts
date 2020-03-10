declare namespace IMain {
  export type IProps = {
    limit: number;
    state: IState;
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
