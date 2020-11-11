"use strict";
/**
  HTTPRepository
  @describe An implimentation of the Repository interface that utilizes an http client for persistence
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPRepository = void 0;
class HTTPRepository {
    /**
      Creates a reference to the initialized HTTP client used in requests
      @constructor
      @param {HTTPClient} client - The preconfigured http based client for the http API
    */
    constructor(client) {
        /**
          Continually request all resources by sending the specified next cursor value until the
          API stops responding with the specified cursor header
          @async
          @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
          @returns {Promise<HTTPRepositoryEntity[]>} - Eventually returns an array of resources
          returns empty list if there was a problem executing the request
        */
        this.Query = (request) => __awaiter(this, void 0, void 0, function* () {
            let { data, headers, status } = yield this.client.Do({
                url: request.url,
                params: request.data,
                method: "get"
            });
            let result = Array.isArray(data) ? data : [data];
            if (headers[request.cursor]) {
                for (;;) {
                    let { data, headers, status } = yield this.client.Do({
                        url: request.url,
                        method: "get",
                        params: Object.assign({ cursor: request.cursor }, request.data)
                    });
                    result = result.concat(data);
                    if (status >= 400 || !headers[request.cursor])
                        break;
                }
            }
            if (status < 400) {
                return { data: result };
            }
            else {
                console.log("There was a problem retrieving all the results", data.message);
            }
        });
        /**
          Request a resource by id, or via some query parameters
          @async
          @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
          @returns {Promise<HTTPRepositoryEntity>} - Eventually returns the resource
          returns nothing if there was a problem executing the request
        */
        this.ReadResource = (request) => __awaiter(this, void 0, void 0, function* () {
            let { data, status } = yield this.client.Do({
                url: request.id ? `${request.url}/${request.id}` : request.url,
                params: request.data,
                method: "get",
            });
            if (status < 400) {
                return { data };
            }
            else {
                console.log("There was a problem reading the resource", data.message);
            }
        });
        /**
          Create or Update a resource by id
          @async
          @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
          @returns {Promise<HTTPRepositoryEntity>} - Eventually returns some indication that the write request was accepted.
          returns nothing if there was a problem executing the request
        */
        this.WriteResource = (request) => __awaiter(this, void 0, void 0, function* () {
            let { data, status } = yield this.client.Do({
                url: request.id ? `${request.url}/${request.id}` : request.url,
                data: request.data,
                method: request.id ? "put" : "post",
            });
            if (status < 400) {
                return { data };
            }
            else {
                console.log("There was a problem writing the resource", data.message);
            }
        });
        /**
          Destroy a resource by id
          @async
          @param {HTTPRepositoryEntity} request - The information including endpoint, ID, query parameters, and payload for the request
        */
        this.DestroyResource = (request) => __awaiter(this, void 0, void 0, function* () {
            let { data, status } = yield this.client.Do({
                url: `${request.url}/${request.id}`,
                method: "delete"
            });
            if (status < 400) {
                return { data: {} };
            }
            else {
                console.log("There was a problem destorying the resource", data.message);
            }
        });
        this.client = client;
    }
}
exports.HTTPRepository = HTTPRepository;
//# sourceMappingURL=http_repository.js.map