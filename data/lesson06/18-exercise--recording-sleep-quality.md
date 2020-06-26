---
path: "/lesson06/18-exercise--recording-sleep-quality"
title: "Exercise: Recording Sleep Quality"
---

<youtube id="CZOyJjZ-3PI"></youtube>

<youtube id="VhWmDxh2ZPE"></youtube>

<p>Now it's your turn to complete this exercise yourself.</p>
<p>In this step, you'll add navigation and sleep quality recording to your app. </p>
<p><strong>Navigation</strong></p>
<ol>
<li><p><strong>Inspect the provided <code>SleepQualityFragment.kt</code>.</strong></p>
</li>
<li><p><strong>Inspect the provided <code>fragment_sleep_quality.xml</code>.</strong></p>
</li>
<li><p><strong>Open <code>navigation.xml</code> and inspect the code.</strong></p>
<p>In particular, look for the <code>&lt;argument&gt;</code> where we are passing a <code>sleepNightKey</code> from the <code>SleepTrackerFragment</code> to the <code>SleepQualityFragment</code>.</p>
</li>
<li><p><strong>Open <code>SleepTrackerViewModel.kt</code>.</strong></p>
<p>You need to add Navigation, so that when the user taps the STOP button, you navigate to the <code>SleepQualityFragment</code> to collect a quality rating. </p>
</li>
<li><p><strong>In <code>SleepTrackerViewModel.kt</code>, in <code>onStopTracking()</code> set a <code>LiveData</code> that changes when you want to navigate.</strong></p>
<p>Use encapsulation to expose only a gettable version to the fragment:</p>

```ts
private val _navigateToSleepQuality = MutableLiveData<SleepNight>()

val navigateToSleepQuality: LiveData<SleepNight>
get() = _navigateToSleepQuality
```

</li>
<li><p><strong>Add a <code>doneNavigating()</code> function that resets the event.</strong></p>

```ts
fun doneNavigating() {
    _navigateToSleepQuality.value = null
}
```

</li>
<li><p><strong>In the click handler for the STOP button, <code>onStopTracking()</code>, trigger this navigation:</strong></p>

```ts
_navigateToSleepQuality.value = oldNight
```

</li>
<li><p><strong>In the <code>SleepTrackerFragment</code>, in <code>onCreateView()</code>, add an observer for <code>navigateToSleepQuality</code>.</strong></p>

```ts
sleepTrackerViewModel.navigateToSleepQuality.observe(this, Observer {
})
```

</li>
<li><p><strong>Inside the observer block, navigate and pass along the ID of the current <code>night</code>, and then call <code>doneNavigating()</code>:</strong></p>

```ts
night ->
night?.let {
this.findNavController().navigate(
        SleepTrackerFragmentDirections
                .actionSleepTrackerFragmentToSleepQualityFragment(night.nightId))
sleepTrackerViewModel.doneNavigating()
}
```

</li>
<li><p><strong>Build and run your app. Click START, then click STOP, which should take you to the SleepQualityFragment screen.</strong></p>
<p>To get back, use the Back button.</p>
</li>
</ol>
<p><strong>Record the Sleep Quality</strong></p>
<ol>
<li><p><strong>In the <code>sleepquality</code> package, open <code>SleepQualityViewModel.kt</code>.</strong></p>
</li>
<li><p><strong>Create a <code>SleepQualityViewModel</code> that takes  <code>sleepNightKey</code> and <code>database</code> as arguments:</strong></p>

```ts
class SleepQualityViewModel(
    private val sleepNightKey: Long = 0L,
    val database: SleepDatabaseDao) : ViewModel() {
}
```

</li>
<li><p><strong> Define a <code>Job</code>, <code>uiScope</code>, and override <code>onCleared()</code>, as previously:</strong></p>

```ts
private val viewModelJob = Job()
private val uiScope =  CoroutineScope(Dispatchers.Main + viewModelJob)

override fun onCleared() {
super.onCleared()

viewModelJob.cancel()
}
```

</li>
<li><p><strong>To navigate back to the <code>SleepTrackerFragment</code>, analogously implement <code>navigateToSleepTracker</code> and <code>_navigateToSleepTracker</code>, as well as <code>doneNavigating()</code>:</strong></p>

```ts
private val _navigateToSleepTracker =  MutableLiveData<Boolean?>()

val navigateToSleepTracker: LiveData<Boolean?>
get() = _navigateToSleepTracker

fun doneNavigating() {
     _navigateToSleepTracker.value = null
}
```

</li>
<li><p><strong>Now, create one click handler that you will use for all the smiley sleep quality images, <code>onSetSleepQuality()</code>.</strong></p>
<p>Use the same coroutine pattern. Launch a coroutine in <code>uiScope</code>, switch to the IO dispatcher, get <code>tonight</code> using the <code>sleepNightKey</code>, set the sleep quality, update the database, and trigger navigation:</p>

```ts
fun onSetSleepQuality(quality: Int) {
 uiScope.launch {
     withContext(Dispatchers.IO) {
        val tonight = database.get(sleepNightKey) ?: return@withContext
        tonight.sleepQuality = quality
        database.update(tonight)
     }
     _navigateToSleepTracker.value = true
   }
}
```

</li>
<li><p><strong>Create a <code>SleepQualityViewModelFactory</code>.</strong></p>
<p>Since this is a version of the same boilerplate code, here is the code. Inspect the code before you move on:</p>

```ts
class SleepQualityViewModelFactory(
    private val sleepNightKey: Long,
    private val dataSource: SleepDatabaseDao) : ViewModelProvider.Factory {

@Suppress("unchecked_cast")
override fun <T : ViewModel?> create(modelClass: Class<T>): T {
    if (modelClass.isAssignableFrom(SleepQualityViewModel::class.java)) {
        return SleepQualityViewModel(sleepNightKey, dataSource) as T
    }
    throw IllegalArgumentException("Unknown ViewModel class")
  }
}
```

</li>
<li><p><strong>Open <code>SleepQualityFragment</code>.</strong></p>
</li>
<li><p><strong>Get the <code>arguments</code>:</strong></p>

```ts
val arguments = SleepQualityFragmentArgs.fromBundle(arguments!!)
```

</li>
<li><p><strong>Get the <code>dataSource</code>:</strong></p>

```ts
val dataSource = SleepDatabase.getInstance(application).sleepDatabaseDao
```

</li>
<li><p><strong>And create a factory passing in the <code>dataSource</code> and <code>sleepNightKey</code>:</strong></p>

```ts
val viewModelFactory = SleepQualityViewModelFactory(arguments.sleepNightKey, dataSource)
```

</li>
<li><p><strong>Get a <code>SleepQualityViewModel</code> reference:</strong></p>

```ts
val sleepQualityViewModel =
    ViewModelProviders.of(
            this, viewModelFactory).get(SleepQualityViewModel::class.java)
```

</li>
<li><p><strong>Add the <code>sleepQualityViewModel</code> to the <code>binding</code> object:</strong></p>

```ts
binding.sleepQualityViewModel = sleepQualityViewModel
```

</li>
<li><p><strong>And add the observer, as before:</strong></p>

```ts
sleepQualityViewModel.navigateToSleepTracker.observe(this,  Observer {
if (it == true) { // Observed state is true.
    this.findNavController().navigate(
            SleepQualityFragmentDirections.actionSleepQualityFragmentToSleepTrackerFragment())
    sleepQualityViewModel.doneNavigating()
  }
})
```

</li>
<li><p><strong>Open <code>fragment_sleep_quality.xml</code> and add a variable for the <code>SleepQualityViewModel</code> to the <code>&lt;data&gt;</code> block:</strong></p>

```ts
<data>

    <variable
        name="sleepQualityViewModel"
        type="com.example.android.trackmysleepquality.sleepquality.SleepQualityViewModel" />
</data>
```

</li>
<li><p><strong>Add a click handler like the one below to each image.</strong></p>
<p>Match the quality rating to the image.</p>

```ts
android:onClick="@{() -> sleepQualityViewModel.onSetSleepQuality(5)}"
```

</li>
<li><p><strong>Clear cache, rebuild your app, and make sure it runs without errors.</strong> </p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/Step.06-Exercise-Record-SleepQuality.zip">Step.06-Exercise-Record-SleepQuality</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/tree/Step.06-Solution-Record-SleepQuality">Step.06-Solution-Record-SleepQuality</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/compare/Step.06-Exercise-Record-SleepQuality..Step.06-Solution-Record-SleepQuality">git diff</a>.</p>

<text-box variant='learningObjectives' name='Learning objectives'>

- In <strong>SleepTrackerViewModel</strong>, create encapsulated <code>LiveData</code>, <code>navigateToSleepQuality</code> and <code>doneNavigating()</code> function. Use them in <code>onStopTracking()</code> to trigger navigation.
- In <strong>SleepTrackerFragment</strong>, add an observer for <code>navigateToSleepQuality</code>.
- In <strong>SleepQualityViewModel</strong>, using the code in <strong>SleepTrackerViewModel</strong> for reference, create <code>SleepQualityViewModel</code> with coroutine setup and navigation setup.
- In <code>SleepQualityViewModel</code>, implement the <code>onSetSleepQuality()</code> click handler using coroutines.
- Using the code in <strong>SleepTrackerViewModelFactory</strong> as a reference, create the <strong>SleepQualityViewModelFactory</strong>.
- In <strong>SleepQualityFragment</strong>, using the <strong>SleepTrackerFragment</strong> code as a reference, get the passed in <code>arguments</code>, and get the <code>SleepQualityViewModel</code> and add it to data binding.
- In <strong>SleepQualityFragment</strong>, implement an observer for <code>navigateToSleepTracker</code>.
- In <strong>fragment_sleep_quality.xml</strong>, Create a <code>&lt;variable&gt;</code> that references the <code>SleepQualityViewModel</code> class.
- In <strong>fragment_sleep_quality.xml</strong>, update all the images to use the <code>onSetSleepQuality()</code> click handler.
- Clean and rebuild, then verify the app builds and runs without errors.

</text-box>

<p>Congratulations! You've just built a complete Room database app, using coroutines, and applied just about everything you've learned in the previous lessons!</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><p><a target="_blank" href="https://developer.android.com/topic/libraries/architecture/navigation/">Navigation</a></p>
</li>
<li><p><a target="_blank" href="https://developer.android.com/training/design-navigation/ancestral-temporal">Designing back and up navigation</a></p>
</li>
</ul>
