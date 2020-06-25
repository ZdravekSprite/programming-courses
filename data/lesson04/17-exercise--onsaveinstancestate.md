---
path: "/lesson04/17-exercise--onsaveinstancestate"
title: "Exercise: onSaveInstanceState"
---

<youtube id="T6kNBq6Nvdg"></youtube>

<p>Now it’s your turn to complete this exercise yourself. </p>
<p>In this exercise you'll make sure that your data is saved and restored, even if your app is shut down in the background.</p>
<p><strong>1. Override onSaveInstanceState and onRestoreInstanceState: </strong></p>
<p>You can use the keyboard shortcut Ctrl + O to do this. For onSaveInstanceState, you can use the <a href="https://developer.android.com/reference/android/app/Activity.html#onSaveInstanceState(android.os.Bundle)" target="_blank">version that has one parameter</a>, the Bundle.</p>
<p><strong>2. Save the data in onSaveInstanceState: </strong></p>
<p>You should save the revenue, dessertsSold and dessertTimer.secondsCount in the state Bundle. Here's an example of saving the revenue:</p>

```ts
outState.putInt(KEY_REVENUE, revenue)
```

<p>Note that <code>KEY_REVENUE</code> is a string constant.</p>
<p><strong>3. Retrieve and use the data in onCreate if you're restarting to Activity: </strong></p>
<p>Check that the Bundle is not null in onCreate, and then retrieve and use the data. For example:</p>

```java
if (savedInstanceState != null) {
        revenue = savedInstanceState.getInt(KEY_REVENUE, 0)
    }
```

<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-L4/archive/Step.05-Exercise-Implement-onSaveInstanceState.zip">Step.05-Exercise-Implement-onSaveInstanceState</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.05-Solution-Implement-onSaveInstanceState">Step.05-Solution-Implement-onSaveInstanceState</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.05-Exercise-Implement-onSaveInstanceState...Step.05-Solution-Implement-onSaveInstanceState">git diff</a></p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add lifecycle callback methods for onSaveInstanceState and onRestoreInstanceState.
- In onSaveInstanceState, put the revenue, dessertsSold and dessertTimer.secondsCount in the state Bundle.
- And, finally, restore data from the bundle in onCreate if it is there!

</text-box>

<p>Great job!</p>
<p><em>Solution:</em> <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.05-Solution-Implement-onSaveInstanceState">Step.05-Solution-Implement-onSaveInstanceState</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.05-Exercise-Implement-onSaveInstanceState...Step.05-Solution-Implement-onSaveInstanceState">git diff</a></p>
<button>Continue</button>
