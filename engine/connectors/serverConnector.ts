import { StaticConfig, debug, ExecutionConfig } from "../../common";
import 'isomorphic-fetch';
import { IConnector } from "../../interfaces";
import { CompileProject } from "../compiling";

export class ServerConnector extends IConnector {

    async invoke(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getTemporaryUrlToUpload(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    abstract async deploy(url: string, project: CompileProject, sourceFile: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    /**
     * @param user user name
     * @param password
     *
     * @returns token
     */
    async login(user?: string, password?: string): Promise<string> {
        debug("login token process");
        const resp = await fetch(StaticConfig.remoteServerEndPoint + StaticConfig.loginPath, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user })
        });

        const responce = await resp.json();
        return responce.token;
    }

    static async upload() {

    }
}