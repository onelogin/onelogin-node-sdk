export {} // make this file a module

declare global{
    namespace Express {
        interface Request {
          olBearerToken: string // add bearer token field to req for middleware to pass to next handler
       }
   }
}
