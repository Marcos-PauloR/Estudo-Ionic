import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDTO } from "../../models/cliente.dto";
import { StorageService } from "../storage.services";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient, public storage:StorageService){

    }

    findByEmail(email:string ):Observable<ClienteDTO>{
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/cliente/email?value=${email}`)
    }


    getImageFromBucket(id:string):Observable<any>{
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType:'blob'})
    }

}