export interface ReduxAction {
    type: string;
    payload: any;
    error?: boolean;
}
