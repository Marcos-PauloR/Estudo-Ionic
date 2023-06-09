import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { CategoriaService } from '../services/domain/categoria.service';
import { ClienteService } from '../services/domain/cliente.service';
import { StorageService } from '../services/storage.services';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService
  ]
})
export class AppModule {}
