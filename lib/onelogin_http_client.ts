import express, {Request, Response, NextFunction} from 'express'
import axios from 'axios'

type QueryStringPair = [string, string]

interface QueryRequst {
  id: string;
  queryParams: QueryStringPair[];

}
export class OneLoginHTTPClient {
  authToken: string
  baseURL: string

  constructor(){

  }

  ReadResource(path: string, query: object){}
  WriteResource(path: string, payload: object){}
  DestroyResource(path: string, query: object){}

  AuthOneLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let clientCredentials = `${process.env.ONELOGIN_CLIENT_ID}:${process.env.ONELOGIN_CLIENT_SECRET}`
    let encodedCredentials = Buffer.from(clientCredentials).toString('base64')
    let url = `${process.env.ONELOGIN_API_URL}/auth/oauth2/v2/token`
    let requestBody = {"grant_type": "client_credentials"}
    console.log(url)
    let headers = {
      "Content-Type": `application/json`,
      "Authorization": `Basic ${encodedCredentials}`
    }
    try {
      let bearerResponse = await axios.post(url, requestBody, {headers})
      req.olBearerToken = bearerResponse.data.access_token
    } catch(err) {
      console.log("Unable to authenticate request to OneLogin.", err.message)
    } finally {
      next()
    }
  }

}
