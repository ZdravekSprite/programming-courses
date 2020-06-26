---
path: "/lesson06/15-exercise--coroutines-for-long-running-operations"
title: "Exercise: Coroutines for Long-running Operations"
---

<youtube id="FXI_SiPKDsI"></youtube>

<youtube id="Q8vaK5TKVag"></youtube>

<p>Now it's your turn to complete this exercise yourself.</p>
<p>In this step, you'll use coroutines to implement the app's database calls and display the sleep data.</p>
<ol>
<li><p><strong>Open the <code>SleepTrackerViewModel.kt</code> file.</strong></p>
</li>
<li><p>Define <code>viewModelJob</code> and assign it an instance of <code>Job</code>.</p>

```ts
private var viewModelJob = Job()
```

</li>
<li><p><strong>Override <code>onCleared()</code> and cancel all coroutines.</strong></p>

```ts
override fun onCleared() {
   super.onCleared()
   viewModelJob.cancel()
 }
```

</li>
<li><p><strong>Define a <code>uiScope</code> for the coroutines:</strong></p>

```ts
private val uiScope = CoroutineScope(Dispatchers.Main + viewModelJob)
```

</li>
<li><p><strong>Define a variable, <code>tonight</code>, to hold the current night, and make it <code>MutableLiveData</code>:</strong></p>

```ts
private var tonight = MutableLiveData<SleepNight?>()
```

</li>
<li><p><strong>Define a variable, <code>nights</code>. Then <code>getAllNights()</code> from the database and assign to the <code>nights</code> variable:</strong></p>

```ts
private val nights = database.getAllNights()
```

</li>
<li><p><strong>To initialize the <code>tonight</code> variable, create an <code>init</code> block and call <code>initializeTonight()</code>, which you'll define in the next step:</strong></p>

```ts
init {
 initializeTonight()
}
```

</li>
<li><p><strong>Implement <code>initializeTonight()</code>. In the <code>uiScope</code>, launch a coroutine.</strong></p>
<p>Inside, get the value for <code>tonight</code> from the database by calling <code>getTonightFromDatabase()</code>, which you will define in the next step, and assign it to <code>tonight.value</code>:</p>

```ts
private fun initializeTonight() {
 uiScope.launch {
     tonight.value = getTonightFromDatabase()
 }
}
```

</li>
<li><p><strong>Implement <code>getTonightFromDatabase()</code>. Define is as a private suspend function that returns a nullable <code>SleepNight</code>, if there is no current started <code>sleepNight</code>.</strong></p>
<p>This leaves you with an error, because you will have to return something.</p>

```ts
private suspend fun getTonightFromDatabase(): SleepNight? { }
```

</li>
<li><p><strong>Inside the function body, return the result from a coroutine that runs in the <code>Dispatchers.IO</code> context:</strong></p>

```ts
return withContext(Dispatchers.IO) {}
```

</li>
<li><p><strong>Let the coroutine get tonight from the database. If the start and end times are the not the same, meaning, the night has already been completed, return null.  Otherwise, return <code>night</code>:</strong></p>

```ts
var night = database.getTonight()

if (night?.endTimeMilli != night?.startTimeMilli) {
 night = null
}
night
```

</li>
<li><p><strong>Implement <code>onStartTracking()</code>, the click handler for the Start button:</strong></p>

```ts
fun onStartTracking() {}
```

</li>
<li><p><strong>Inside <code>onStartTracking()</code>, launch a coroutine in <code>uiScope</code>:</strong></p>

```ts
uiScope.launch {}
```

</li>
<li><p><strong>Inside the coroutine, create a new <code>SleepNight</code>,  which captures the current time as the start time:</strong></p>

```ts
val newNight = SleepNight()
```

</li>
<li><p><strong>Call <code>insert()</code> to insert it into the database. You will define <code>insert()</code> shortly:</strong></p>

```ts
insert(newNight)
```

</li>
<li><p><strong>Set tonight to the new night:</strong></p>

```ts
tonight.value = getTonightFromDatabase()
```

</li>
<li><p><strong>Define <code>insert()</code> as a private suspend function that takes a <code>SleepNight</code> as its argument:</strong> </p>

```ts
private suspend fun insert(night: SleepNight)
```

</li>
<li><p><strong>For the body of <code>insert()</code>, launch a coroutine in the IO context and insert the <code>night</code> into the database:</strong></p>

```ts
withContext(Dispatchers.IO) {
  database.insert(night)
}
```

</li>
</ol>
<p><strong>Add Click Handlers for the Buttons</strong></p>
<ol>
<li><p><strong>Add <code>onStopTracking()</code> to the view model.  Launch a coroutine in the <code>uiScope</code>.</strong></p>
<p>If it hasn't been set yet, set the <code>endTimeMilli</code> to the current system time and call <code>update()</code> with the night. There are several ways to implement this, and one is shown below:</p>

```ts
fun onStopTracking() {
 uiScope.launch {
     val oldNight = tonight.value ?: return@launch
     oldNight.endTimeMilli = System.currentTimeMillis()
    update(oldNight)
 }
}
```

</li>
<li><p><strong>Implement <code>update()</code> using the same pattern as <code>insert()</code>:</strong></p>

```ts
private suspend fun update(night: SleepNight) {
 withContext(Dispatchers.IO) {
     database.update(night)
 }
}
```

</li>
<li><p><strong>Analogously, implement <code>onClear()</code> and <code>clear()</code>:</strong></p>

```ts
fun onClear() {
   uiScope.launch {
     clear()
     tonight.value = null
   }
}

suspend fun clear() {
 withContext(Dispatchers.IO) {
     database.clear()
 }
}
```

</li>
<li><p><strong>Open <code>fragment_sleep_tracker.xml</code> and add click handlers to the three buttons:</strong></p>

```ts
android:onClick="@{() ->  sleepTrackerViewModel.onStartTracking()}"
android:onClick="@{() -> sleepTrackerViewModel.onStopTracking()}"
android:onClick="@{() -> sleepTrackerViewModel.onClear()}"
```

</li>
</ol>
<p><strong>Display the data</strong></p>
<ol>
<li><p><strong>Add code to transform <code>nights</code> into a <code>nightsString</code> using the <code>formatNights()</code> function from <code>Util.kt</code>:</strong></p>

```ts
val nightsString = Transformations.map(nights) { nights ->
 formatNights(nights, application.resources)
}
```

</li>
<li><p><strong>In <code>fragment_sleep_tracker.xml</code>, in the <code>TextView</code>, in the <code>android:text</code> property, replace the resource string with a reference to <code>nightsString</code>:</strong></p>

```ts
"@{sleepTrackerViewModel.nightsString}"
```

</li>
<li><p><strong>In <code>Util.kt</code> and uncomment the commented code.</strong></p>
</li>
<li><p><strong> Rebuild and run your code.</strong>  </p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/Step.05-Exercise-Coroutines.zip">Step.05-Exercise-Coroutines</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/tree/Step.05-Solution-Coroutines">Step.05-Solution-Coroutines</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/compare/Step.05-Exercise-Coroutines...Step.05-Solution-Coroutines">git diff</a>.</p>

<text-box variant='learningObjectives' name='Learning objectives'>

- In SleepTrackerViewModel:
- Declare <code>Job()</code> and cancel jobs in <code>onCleared()</code>.
- Define <code>uiScope</code> for coroutines.
- Create <code>MutableLiveData</code> variable <code>tonight</code> for one <code>SleepNight</code>.
- Define a variable, <code>nights</code>. Then <code>getAllNights()</code> from the database and assign to the <code>nights</code> variable.
- In an <code>init</code> block, call <code>initializeTonight()</code>, and implement it to launch a coroutine to <code>getTonightFromDatabase()</code>.
- Implement <code>getTonightFromDatabase()</code> as a <code>suspend</code> function.
- Implement the click handler for the START button, <code>onStartTracking()</code>, using coroutines. Define the <code>suspend</code> function <code>insert()</code>, to insert a new <code>night</code> into the database.
- Create <code>onStopTracking()</code> for the STOP button with an <code>update()</code> suspend function.
- For the CLEAR button, create <code>onClear()</code> with a <code>clear()</code> suspend function.
- In <strong>fragment_sleep_tracker.xml</strong>, add the click handlers to the buttons.
- In <code>Util.kt</code>, uncomment the code.
- In <strong>SleepTrackerViewModel.kt</strong>, in <code>SleepTrackerViewModel</code>, transform nights into a <code>nightsString</code> using <code>formatNights()</code>.
- In <strong>fragment_sleep_tracker.xml</strong>, display <code>nightsString</code> in the  text view.
- Verify your app builds and runs without errors.

</text-box>

<p>Well done! This was a big task!</p>
<button>Continue</button>

<p>Android Developer Documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/java/text/SimpleDateFormat">SimpleDateFormat</a></li>
</ul>
<p>Other documentation and articles</p>
<ul>
<li><p><a target="_blank" href="https://codelabs.developers.google.com/codelabs/kotlin-coroutines/">Coroutines codelab</a></p>
</li>
<li><p><a target="_blank" href="https://kotlinlang.org/docs/reference/coroutines-overview.html">Coroutines official documentation</a></p>
</li>
<li><p><a target="_blank" href="https://kotlinlang.org/docs/reference/coroutines/coroutine-context-and-dispatchers.html">Coroutines context and dispatchers</a></p>
</li>
<li><p><a target="_blank" href="https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-dispatchers/index.html">Dispatchers</a></p>
</li>
<li><p><a target="_blank" href="https://medium.com/androiddevelopers/exceed-the-android-speed-limit-b73a0692abc1">Exceed the Android Speed Limit</a></p>
</li>
<li><p><a target="_blank" href="https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/">Job</a></p>
</li>
<li><p><a target="_blank" href="https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/launch.html">launch</a></p>
</li>
<li><p><a target="_blank" href="https://developer.android.com/reference/androidx/core/text/HtmlCompat">HtmlCompat</a></p>
</li>
<li><p><a target="_blank" href="https://kotlinlang.org/docs/reference/returns.html#return-at-labels">Returns and Jumps in Kotlin</a></p>
</li>
<li><p><a target="_blank" href="http://www.w3.org/TR/REC-xml/#sec-cdata-sect">CDATA</a> stands for <a target="_blank" href="http://www.w3.org/TR/REC-xml/#dt-chardata">Character Data</a> and it means that the data in between these strings includes data that could be interpreted as XML markup, but should not be.</p>
</li>
</ul>
