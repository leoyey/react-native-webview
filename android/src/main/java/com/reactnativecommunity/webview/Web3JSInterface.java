package com.reactnativecommunity.webview;

import android.webkit.JavascriptInterface;

public class Web3JSInterface {

    private final RNCWebViewManager.RNCWebView webView;

    public Web3JSInterface(RNCWebViewManager.RNCWebView webView) {
        this.webView = webView;
    }

    @JavascriptInterface
    public void signTransaction(String data) {
        webView.onMessage(data);
    }

    @JavascriptInterface
    public void signMessage(String data) {
        webView.onMessage(data);
    }

    @JavascriptInterface
    public void signPersonalMessage(String data) {
        webView.onMessage(data);
    }

    @JavascriptInterface
    public void signTypedMessage(String data) {
        webView.onMessage(data);
    }
}
