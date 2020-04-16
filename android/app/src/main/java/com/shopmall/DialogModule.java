package com.shopmall;

import android.app.Dialog;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

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
    public void showWindow() {
        Log.e("native","调用没");
//        View view = View.inflate(getCurrentActivity(), R.layout.dialog, null);
//        dialog = new Dialog(context, R.style.Dialog_Blur);
//        dialog.setContentView(view);
//        dialog.setCancelable(false);
//        dialog.show();
        Toast.makeText(getCurrentActivity(),"Toast",Toast.LENGTH_SHORT);
    }

    @ReactMethod
    public void closeWindow() {
        if (dialog != null) {
            dialog.dismiss();
        }
    }
}
