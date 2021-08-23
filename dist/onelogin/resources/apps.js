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
class OneLoginAppsRepository {
    constructor(repository) {
        this.Query = (query) => __awaiter(this, void 0, void 0, function* () {
            let request = { data: query, url: this.endpoint };
            let result = yield this.repository.Query(request);
            if (result.error)
                return { data: null, error: result.error };
            let apps = result.data;
            return { data: apps };
        });
        this.FindByID = (id) => __awaiter(this, void 0, void 0, function* () {
            let request = { id, url: this.endpoint };
            let result = yield this.repository.ReadResource(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.Create = (app) => __awaiter(this, void 0, void 0, function* () {
            let request = { data: app, url: this.endpoint };
            let result = yield this.repository.WriteResource(request);
            if (result.error)
                return { data: null, error: result.error };
            return { data: result.data };
        });
        this.Update = (app) => __awaiter(this, void 0, void 0, function* () {
            let appID = app.id;
            delete app.id;
            if (!appID)
                throw new Error("Resource ID must be given");
            let request = { id: appID, data: app, url: this.endpoint };
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
        this.repository = repository;
        this.endpoint = "/api/2/apps";
    }
}
exports.default = OneLoginAppsRepository;
//# sourceMappingURL=apps.js.map