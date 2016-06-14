# Angular2 Google reCaptcha V2 + Typecript + Webpack

A minimalist component for use reCaptcha V2 with Angular2

- Component
- Callback

## To do
- Service class for validate the token response

## Usage

- npm install
- npm start

### Example

```js
    <re-captcha sitekey="your public key" (tokenChange)="getToken($event);"></re-captcha>
```