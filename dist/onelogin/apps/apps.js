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
exports.OneLoginAppsRepository = void 0;
class OneLoginAppsRepository {
    constructor(repository) {
        this.Query = (query) => __awaiter(this, void 0, void 0, function* () {
            let request = { data: query, url: this.endpoint };
            let result = yield this.repository.Query(request);
            let apps = result.data;
            return apps;
        });
        this.FindByID = (id) => __awaiter(this, void 0, void 0, function* () {
            let request = { id, url: this.endpoint };
            let result = yield this.repository.ReadResource(request);
            if (!result)
                throw new Error("Unable to locate resource");
            return Object.assign({}, result.data);
        });
        this.Create = (app) => __awaiter(this, void 0, void 0, function* () {
            let request = { data: app, url: this.endpoint };
            let result = yield this.repository.WriteResource(request);
            if (!result)
                throw new Error("Unable to create resource");
            return Object.assign({}, result.data);
        });
        this.Update = (app) => __awaiter(this, void 0, void 0, function* () {
            let appID = this.pluckID(app);
            if (!appID)
                throw new Error("Resource ID must be given");
            let request = { id: appID, data: app, url: this.endpoint };
            let result = yield this.repository.WriteResource(request);
            if (!result)
                throw new Error("Unable to update resource");
            return Object.assign({}, result.data);
        });
        this.Destroy = (id) => __awaiter(this, void 0, void 0, function* () {
            let request = { id, url: this.endpoint };
            let result = yield this.repository.DestroyResource(request);
            return Object.assign({}, result.data);
        });
        this.pluckID = (a) => {
            let id = a.id;
            delete a.id;
            return id;
        };
        this.repository = repository;
        this.endpoint = "/api/2/apps";
    }
}
exports.OneLoginAppsRepository = OneLoginAppsRepository;
//# sourceMappingURL=apps.js.map