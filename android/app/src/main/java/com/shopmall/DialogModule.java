package com.shopmall;

import android.app.Dialog;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import androidx.annotation.NonNull;

/**
 * @author zhaosengshan
 */
public class DialogModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext context;
    private Dialog dialog;

    public DialogModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "DialogModule";
    }

    @ReactMethod
    public void showWindow(String content,Callback callback) {
        Log.e("native",content);
//        View view = View.inflate(getCurrentActivity(), R.layout.dialog, null);
//        dialog = new Dialog(context, R.style.Dialog_Blur);
//        dialog.setContentView(view);
//        dialog.setCancelable(false);
//        dialog.show();
        callback.invoke("向React Native返回React Native发来的 { "+content+"}");
    }
}
