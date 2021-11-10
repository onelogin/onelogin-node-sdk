"use strict";
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
class OneLoginUsersRepository {
    constructor(repository) {
        this.List = () => __awaiter(this, void 0, void 0, function* () {
            let request = { url: this.endpoint };
            let result = yield this.repository.List(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.Query = (query) => __awaiter(this, void 0, void 0, function* () {
            let request = { data: query, url: this.endpoint };
            let result = yield this.repository.Query(request);
            if (result.error)
                return { data: null, error: result.error };
            let users = result.data;
            return { data: users };
        });
        this.FindByID = (id) => __awaiter(this, void 0, void 0, function* () {
            let request = { id, url: this.endpoint };
            let result = yield this.repository.ReadResource(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.Create = (user) => __awaiter(this, void 0, void 0, function* () {
            let request = { data: user, url: this.endpoint };
            let result = yield this.repository.WriteResource(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.Update = (user) => __awaiter(this, void 0, void 0, function* () {
            let userID = user.id;
            delete user.id;
            if (!userID)
                throw new Error("Resource ID must be given");
            let request = { id: userID, data: user, url: this.endpoint };
            let result = yield this.repository.WriteResource(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.Destroy = (id) => __awaiter(this, void 0, void 0, function* () {
            let request = { id, url: this.endpoint };
            let result = yield this.repository.DestroyResource(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.ListUserApps = (id) => __awaiter(this, void 0, void 0, function* () {
            let endpoint = `${this.endpoint}/${id}/apps`;
            let request = { url: endpoint };
            let result = yield this.repository.List(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.repository = repository;
        this.endpoint = "/api/2/users";
    }
}
exports.default = OneLoginUsersRepository;
//# sourceMappingURL=users.js.map