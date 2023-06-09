import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../services/storage.services";



@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    
    constructor(public storage:StorageService){
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch((error, caught)=>{

            let errorObj = error

            if (errorObj.error){
                errorObj = errorObj.error
            }

            if(!errorObj.status){
                errorObj = JSON.parse(errorObj)
            }

            console.log("Error Detectado pelo Interceptor!");
            console.log(errorObj);

            switch(errorObj.status){
                case 403:
                this.handle403();
                break;
            }
            
            return Observable.throw(errorObj);
        }) as any;
    }

    handle403(){
        this.storage.setLocalUser(null)
    }

}

export const ErrorInterceptorProvider= {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi:true
}