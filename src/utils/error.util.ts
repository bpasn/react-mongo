import { AxiosError } from "axios";

export interface Message {
    message?: string;
    status?: boolean;
    statusCode?: number;
    payload?: any;
}
export default class Helper {
    private message?: string | any;
    private status?: boolean;
    private statusCode?: number;
    private payload?: any

    public clearMessage() {
        this.message = undefined;
        this.payload = undefined;
        this.status = undefined;
        this.statusCode = undefined;
    }
    public setMessage(msg: any) {
        this.clearMessage();
        if (msg instanceof AxiosError) {
            console.log(msg.response)
            this.message = msg.response?.data
                ? msg.response.data
                : msg.response?.statusText;
            this.status = msg.response?.data && msg.response.data.status
                ? msg.response.data.status
                : false;
            this.statusCode = (msg.response?.data && msg.response.data.statusCode)
                ? msg.response.data.statusCode : msg.response?.status;
        } else if (msg instanceof Error) {
            const cause: any = msg.cause
            this.message = cause.message ? cause.message : msg.message
            this.status = cause.status ? cause.status : false;
            this.statusCode = cause.statusCode ? cause.statusCode : false
        }
        return this;
    }
    
    public setResponse(msg: any) {
        this.clearMessage();
        this.payload = msg.data;
        return this;
    }


    public report() {
        const report = {
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        } as any

        if (this.payload) {
            report.payload = this.payload
        }
        console.log(report)
        return report
    }
}