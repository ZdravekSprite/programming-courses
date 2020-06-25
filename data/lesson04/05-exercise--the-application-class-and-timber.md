---
path: "/lesson04/05-exercise--the-application-class-and-timber"
title: "Exercise: The Application Class and Timber"
---

<youtube id="fhiwalwj_Xw"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this exercise you'll add logging for the most important lifecycle callbacks, using the <a target="_blank" href="https://github.com/JakeWharton/timber">logging library Timber</a>.</p>
<p><strong>1. Add Timber library to gradle file (Module: app): </strong></p>
<p>You can find latest Timber dependency version <a target="_blank" href="https://github.com/JakeWharton/timber#download">here</a>. Open up your Module app build.gradle file and add to the <code>dependencies {}</code> block.</p>
<p><strong>2. Make an Application class: </strong></p>

```java
class PusherApplication : Application() {

   override fun onCreate() {
       super.onCreate()
   }
}
```

<p><strong>3. Add the application class to the manifest: </strong></p>
<p>Make sure you add it to the <code>&lt;application&gt;</code> tag.</p>

```ts
android:name=".PusherApplication"
```

<p><strong>4. Initialize Timber in the application class: </strong></p>
<p>Installation of logging trees should be done as early as possible. The onCreate of your <strong>application</strong> is the most logical choice. Go ahead, locate the onCreate callback in your application class and plant Timber tree there.</p>

```ts
Timber.plant(Timber.DebugTree())
```

<p><strong>5. Update log statements from previous exercise to timber logs: </strong></p>
<p>These log statements are in onCreate and onStart. Change them to Timber log statements which look like this for info level log statements:</p>

```ts
Timber.i("message here")
```

<p><strong>6. Override the rest of the lifecycle methods and use Timber to print log statements for all: </strong></p>
<p>Here are the callback methods to override: </p>
<ul>
<li>onResume</li>
<li>onPause</li>
<li>onStart</li>
<li>onDestroy</li>
<li>onRestart</li>
<li>onStop</li>
</ul>
<p>Remember you can use the keyboard shortcut Ctrl + O for overriding methods.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/archive/Step.02-Exercise-Timber-for-logging.zip">Step.02-Exercise-Timber-for-logging</a>.</p>
<p>You will find plenty of <code>// TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.02-Solution-Timber-for-logging">Step.02-Solution-Timber-for-logging</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.02-Exercise-Timber-for-logging...Step.02-Solution-Timber-for-logging">git diff</a></p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add Timber library to gradle file.
- Make an application class.
- Add the application class to the manifest.
- Initialize Timber in the application class.
- Update log statements in onCreate and onStart to use Timber.
- Add Override to the rest of the callbacks and add timber log statements to them.

</text-box>

<p>Well done!</p>
<p><em>Solution:</em> <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.02-Solution-Timber-for-logging">Step.02-Solution-Timber-for-logging</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.02-Exercise-Timber-for-logging...Step.02-Solution-Timber-for-logging">git diff</a></p>
<button>Continue</button>
