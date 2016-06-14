import {Component} from '@angular/core';
import {recaptcha} from './recaptcha.component';

@Component({
    selector: 'app',
    template: '<re-captcha sitekey="<public_key>" (tokenChange)="getToken($event);"></re-captcha>',
    directives: [recaptcha]
})

export class app {
    public token:string = null;

    getToken(event) {
        console.log(event);
    }
}