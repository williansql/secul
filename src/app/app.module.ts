import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';


export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;


registerLocaleData(localePT);

@NgModule({
    declarations: [AppComponent],
    imports: [
        NgxSkeletonLoaderModule.forRoot({
            animation: 'progress-dark',
        }),
        SwiperModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot({
            dropSpecialCharacters: true
        })

    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, DatePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
