package com.shopmall;

import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Log.e("ReactActivity","onCreate");
  }

  @Override
  protected void onStart() {
    super.onStart();
    Log.e("ReactActivity","onStart");
  }

  @Override
  protected void onResume() {
    super.onResume();
    Log.e("ReactActivity","onResume");
  }

  @Override
  protected void onPause() {
    super.onPause();
    Log.e("ReactActivity","onPause");
  }

  @Override
  protected void onStop() {
    super.onStop();
    Log.e("ReactActivity","onStop");
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    Log.e("ReactActivity","onDestroy");
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ShopMall";
  }
}
