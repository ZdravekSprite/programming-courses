---
path: "/lesson04/04-exercise--introduction-to-logging"
title: "Exercise: Introduction to Logging"
---

<youtube id="H2WDNSf16No"></youtube>

<p>Now it’s your turn to complete this exercise yourself. Links and instructions for downloading the starter code are in the <a target="_blank" href="https://classroom.udacity.com/courses/ud9012/lessons/e487c600-ed68-4576-a35a-12f211cf032e/concepts/163bcf64-f2b0-44b8-8005-a2444c006c75">previous step</a>.</p>
<p>In this exercise you'll add a log statement to the onStart and onCreate callback.</p>
<p><strong>1. Add a log message to onCreate: </strong></p>
<p>In MainActivity.kt file locate onCreate callback and add an info level log statement saying onCreate was called.</p>
<p>Below is an example:</p>

```ts
Log.i("MainActivity", "onCreate called")
```

<p><strong>2. Override the onStart callback method: </strong></p>
<p>The fastest way to do this is using the Override keyboard shortcut, which is Ctrl + O on all platforms.</p>
<p><strong>3. Add a log message to onCreate: </strong></p>
<p>Finish up by adding another log statement to your new onStart method. Make sure to run your code and open up logcat to affirm that both log statements are called when you open the app.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/archive/Step.01-Exercise-Logging-a-callback.zip">Step.01-Exercise-Logging-a-callback</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.01-Solution-Logging-a-callback">Step.01-Solution-Logging-a-callback</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.01-Exercise-Logging-a-callback...Step.01-Solution-Logging-a-callback">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add log message to onCreate callback in MainActivity.
- Add Override to onStart callback in MainActivity.
- Add log message to onStart callback.
- Pat yourself on the back!

</text-box>

<p>Great job!</p>
<p><em>Solution:</em> <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.01-Solution-Logging-a-callback">Step.01-Solution-Logging-a-callback</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.01-Exercise-Logging-a-callback...Step.01-Solution-Logging-a-callback">git diff</a>.</p>
<button>Continue</button>

<h2 id="more-about-logs">More about Logs</h2>
<p>Logs have different levels which are used in different situations. The levels and their usages are listed below:</p>
<ul>
<li><strong>Verbose</strong>: Show all log messages (the default).</li>
<li><strong>Debug</strong>: Show debug log messages that are useful during development only, as well as the message levels lower in this list.</li>
<li><strong>Info</strong>: Show expected log messages for regular usage, as well as the message levels lower in this list.</li>
<li><strong>Warn</strong>: Show possible issues that are not yet errors, as well as the message levels lower in this list.</li>
<li><strong>Error</strong>: Show issues that have caused errors, as well as the message level lower in this list.</li>
<li><strong>Assert</strong>: Show issues that the developer expects should never happen.</li>
</ul>
<p>For more information about logging in Android and logcat, check out <a target="_blank" href="https://developer.android.com/studio/debug/am-logcat">the documentation</a>.</p>
