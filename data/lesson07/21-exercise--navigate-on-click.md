---
path: "/lesson07/21-exercise--navigate-on-click"
title: "Exercise: Navigate on Click"
---

<youtube id="FlE9Z1TPtfo"></youtube>

<p>Now it’s your turn to complete this exercise yourself!</p>
<p>In this exercise you'll change your listener to navigate to a new fragment and pass the data. </p>
<ol>
<li><p>**Open fragment_sleep_detail.xml and uncomment the code inside the ConstraintLayout.
<br><br></p>
</li>
<li><p><strong>In SleepTrackerFragment, update the SleepNightListener code to pass the data to view model.</strong></p>

```ts
 val adapter = SleepNightAdapter(SleepNightListener {
     nightId ->  sleepTrackerViewModel.onSleepNightClicked(nightId)
 })
```

<p><br></p>
</li>
<li><p><strong>In SleepTrackerViewModel, add a handler for the click event.</strong></p>
<p>You also need to add a <code>MutableLiveData</code> object to control the navigation.</p>

```ts
 private val _navigateToSleepDataQuality = MutableLiveData<Long>()
 val navigateToSleepDataQuality
    get() = _navigateToSleepDataQuality
```

<p><br></p>
</li>
<li><p><strong>Define method to initiate and complete naviattion.</strong></p>
<p>Initiate navigation by setting _navigateToSleepDataQuality.value to <code>id</code>:</p>

```ts
 fun onSleepNightClicked(id: Long){
     _navigateToSleepDataQuality.value = id
 }
```

<p>and then set it to <code>null</code> once navigation is completed:</p>

```ts
 fun onSleepDataQualityNavigated() {
     _navigateToSleepDataQuality.value = null
 }
```

<p><br></p>
</li>
<li><p><strong>In <code>SleepTrackerFragment</code>, add an observer to trigger navigation when the listener passes the data to <code>ViewModel</code>.</strong></p>
<p>Make sure you call <code>onSleepDataQualityNavigated</code> when navigation is complete.</p>

```ts
 sleepTrackerViewModel.navigateToSleepDataQuality.observe(this, Observer {night ->
       night?.let {
          this.findNavController().navigate(SleepTrackerFragmentDirections
                          .actionSleepTrackerFragmentToSleepDetailFragment(night))
          sleepTrackerViewModel.onSleepDataQualityNavigated()
       }
 })
```

<p><br></p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.12-Exercise-Navigate-on-Click.zip">Step.12-Exercise-Navigate-on-Click</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.12-Solution-Navigate-on-Click">Step.12-Solution-Navigate-on-Click</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.12-Exercise-Navigate-on-Click...Step.12-Solution-Navigate-on-Click">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these tasks to navigate to a new fragment and pass data.'>

- In <code>fragment_sleep_detail</code>, uncomment the code inside the <code>ConstraintLayout</code>.
- In <code>SleepTrackerFragment</code>, replace the <code>Toast</code> with code to pass <code>nightId</code> to the view model.
- In <code>SleepTrackerViewModel</code>, add an encapsulated <code>navigateToSleepDataQuality</code> <code>LiveData</code>, that changes  when you want to navigate.
- In <code>SleepTrackerViewModel</code>, define <code>onSleepNightClicked()</code> and <code>onSleepDataQualityNavigated()</code> for initiating and completing navigation.
- In <code>SleepTrackerFragment</code>, add an observer for <code>navigateToSleepDataQuality</code>.
- In <code>navigation.xml</code>,  add an action for navigating to <code>sleep_datail_fragment</code>.
- Run your app, click an item, and verify navigation to the detail screen.

</text-box>

<p>Congratulations, you now have a working RecyclerView with navigation!</p>
<button>Continue</button>
