package com.reactnativecommunity.webview;

class Web3JsInjectorResponse {
    final String data;
    final String url;
    final String mime;
    final String charset;
    final boolean isRedirect;

    Web3JsInjectorResponse(String data, int code, String url, String mime, String charset, boolean isRedirect) {
        this.data = data;
        this.url = url;
        this.mime = mime;
        this.charset = charset;
        this.isRedirect = isRedirect;
    }
}
