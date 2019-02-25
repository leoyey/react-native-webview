package com.reactnativecommunity.webview;

import android.graphics.Bitmap;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.webkit.HttpAuthHandler;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

class Web3WrapWebViewClient extends WebViewClient {
    private final Web3WebViewClient internalClient;
    private final WebViewClient externalClient;

    public Web3WrapWebViewClient(Web3WebViewClient internalClient, WebViewClient externalClient) {
        this.internalClient = internalClient;
        this.externalClient = externalClient;
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        return externalClient.shouldOverrideUrlLoading(view, url)
            || internalClient.shouldOverrideUrlLoading(view, url);
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        return externalClient.shouldOverrideUrlLoading(view, request)
            || internalClient.shouldOverrideUrlLoading(view, request);
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
        return internalClient.shouldInterceptRequest(view, request);
    }

    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        externalClient.onPageStarted(view, url, favicon);
    }

    @Override
    public void onPageFinished(WebView view, String url) {
        externalClient.onPageFinished(view, url);
    }

    @Override
    public void onLoadResource(WebView view, String url) {
        externalClient.onLoadResource(view, url);
    }

    @Override
    public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
        externalClient.onReceivedError(view, errorCode, description, failingUrl);
    }

    @Override
    public void onReceivedHttpAuthRequest(WebView view, HttpAuthHandler handler, String host, String realm) {
        externalClient.onReceivedHttpAuthRequest(view, handler, host, realm);
    }
}
