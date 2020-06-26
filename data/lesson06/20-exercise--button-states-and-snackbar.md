---
path: "/lesson06/20-exercise--button-states-and-snackbar"
title: "Exercise: Button States and SnackBar"
---

<youtube id="Yhz_p31SdME"></youtube>

<youtube id="i8Xp5WSjXPg"></youtube>

<p>Now it's your turn to complete this exercise yourself.</p>
<p>In this step, you'll add states to show and hide the buttons, and use a <code>SnackBar</code> to notify the user when they clear the data. </p>
<p><strong>Button States</strong></p>
<ol>
<li><p><strong>Open <code>fragment_sleep_tracker.xml</code>.</strong></p>
</li>
<li><p><strong>Add the <code>enabled</code> property to each button, and give it the value of a state variable:</strong></p>

```ts
android:enabled="@{sleepTrackerViewModel.startButtonVisible}"
android:enabled="@{sleepTrackerViewModel.stopButtonVisible}"
android:enabled="@{sleepTrackerViewModel.clearButtonVisible}"
```

</li>
<li><p><strong>Open <code>SleepTrackerViewModel.kt</code> and create three corresponding variables.</strong></p>
<p>Assign them a <code>Transformations</code> that tests it against the value of <code>tonight</code>.</p>
<p>The START button should be <code>visible</code> when <code>tonight</code> is null, the STOP button when <code>tonight</code> is not null, and the CLEAR button if <code>nights</code> contains any <code>nights</code>:</p>

```ts
val startButtonVisible = Transformations.map(tonight) {
null == it
}
val stopButtonVisible = Transformations.map(tonight) {
null != it
}
val clearButtonVisible = Transformations.map(nights) {
it?.isNotEmpty()
}
```

</li>
<li><p><strong>Run your app, and that's all there is to it!</strong></p>
</li>
</ol>
<p><strong>Snackbar</strong></p>
<p>Use the same pattern as for navigation  to set up and trigger a snackbar when the data is cleared.</p>
<ol>
<li><p><strong>In the <code>SleepTrackerViewModel</code>, create the encapsulated event:</strong></p>

```ts
private var _showSnackbarEvent = MutableLiveData<Boolean>()

val showSnackBarEvent: LiveData<Boolean>
   get() = _showSnackbarEvent
```

</li>
<li><p><strong>Then implement <code>doneShowingSnackbar()</code>:</strong></p>

```ts
fun doneShowingSnackbar() {
_showSnackbarEvent.value = false
}
```

</li>
<li><p><strong>In the <code>SleepTrackerFragment</code>, add an observer:</strong></p>

```ts
sleepTrackerViewModel.showSnackBarEvent.observe(this, Observer { })
```

</li>
<li><p><strong>Display the snackbar and immediately reset the event:</strong></p>

```ts
if (it == true) { // Observed state is true.
    Snackbar.make(
            activity!!.findViewById(android.R.id.content),
            getString(R.string.cleared_message),
            Snackbar.LENGTH_SHORT // How long to display the message.
    ).show()
    sleepTrackerViewModel.doneShowingSnackbar()
}
```

</li>
<li><p><strong>To trigger the event, in <code>onClear()</code>, set the event value to <code>true</code>:</strong></p>

```ts
_showSnackbarEvent.value = true
```

</li>
<li><p><strong>Build and run your app!</strong></p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/Step.07-Exercise-Add-Button-States-and-SnackBar.zip">Step.07-Exercise-Add-Button-States-and-SnackBar</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/tree/Step.07-Solution-Add-Button-States-and-SnackBar">Step.07-Add-Button-States-and-SnackBar</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/compare/Step.07-Exercise-Add-Button-States-and-SnackBar...Step.07-Solution-Add-Button-States-and-SnackBar">git diff</a>.</p>

<text-box variant='learningObjectives' name='Learning objectives'>

- In <strong>fragment_sleep_tracker.xml</strong>, add the <code>enabled</code> property to each button and give it the value of a state variable.
- In <code>SleepTrackerViewModel</code>, create three corresponding state variables. Assign them a <code>Transformations</code> that tests it against the value of <code>tonight</code>.
- Verify app build and runs without error.
- In <code>SleepTrackerViewModel</code>, using the familiar pattern, create encapsulated <code>showSnackBarEvent</code> variable and <code>doneShowingSnackbar()</code> function.
- In <code>SleepTrackerFragment</code>, add an observer that shows a <code>Snackbar</code>.
- In <code>SleepTrackerViewModel</code>, in <code>onClear()</code>, set the value of <code>_showOnSnackbarEvent</code> to <code>true</code>.
- Verify app builds and runs and the <code>SnackBar</code> displays correctly.

</text-box>

<p>Congratulations! This lesson introduced coroutines and other more advanced topics, and you've completed it all.</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><p><a target="_blank" href="https://developer.android.com/guide/topics/ui/controls/button">Buttons</a></p>
</li>
<li><p><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/architecture">Bind layout views to Architecture Components</a></p>
</li>
<li><p><a target="_blank" href="https://material.io/develop/android/components/snackbar/">SnackBar</a> </p>
</li>
</ul>
