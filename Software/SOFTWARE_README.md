This is the software guide to get started with software development for the HackMe project. The specifics for Windows and Mac are explained below, but this is a quick list of the software you will need:
- Android Studio 
- NativeScript 
- Angular 
- Git 

#SmartPhone 

On the app store, find and install the NativeScript Playground. This will allow you to debug the app on your device.

#Windows 10

First, install Android Studio from the following link: https://developer.android.com/studio/

It is imperative that you have the newest version. Once that is finished setting up, open a command prompt terminal in Administrator mode (right click on the windows key and then hit Command Prompt (Admin)"

We will now install the dependencies for NativeScript. Run the following commands in the terminal. 

```npm install -g nativescript``` 

After this, running 

```tns```

should reveal the NativeScript CLI. Now run 

```@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"```

and carefully monitor the install. There will be several parts where you will have to give it permission. Now, run 

```tns doctor```

and your terminal will tell you if there any issues with your install. 

#Android emulator 

If you don't want to use your smartphone to debug, you can also set up an Android emulator that runs right on your computer. Assuming you've installed Android Studio, open a command prompt terminal with administrator priveleges. 

The first step is to find your Android Home directory. Run 

```echo $ANDROID_HOME``` and then navigate to the directory that shows up. Once you are in $ANDROID_HOME, run 

```cd tools/bin``` 

and then run 

```sdkmanager "system-images;android-25;google_apis;x86"```

and

```avdmanager create avd -n debug -k "system-images;android-25;google_apis;x86"```

Finally, run 

```avdmanager create avd -n debug -k "system-images;android-25;google_apis;x86"```

You can confirm the creation of your Android Virtual Device with 

```tns devices```

#Angular 

In a command prompt terminal, run 

```npm install -g @angular/cli```

and then run 

```npm install --save-dev @angular-devkit/build-angular```

#Finished

Congratulations, your system has the tools you need to add to the HackMe project! 
