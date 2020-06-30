---
path: "/lesson07/21-exercise--navigate-on-click"
title: "Exercise: Navigate on Click"
---


<youtube id="FlE9Z1TPtfo"></youtube>

Now it’s your turn to complete this exercise yourself!

In this exercise you'll change your listener to navigate to a new fragment and pass the data.

**1. Open fragment\_sleep\_detail.xml and uncomment the code inside the ConstraintLayout.**

**2. In SleepTrackerFragment, update the SleepNightListener code to pass the data to view model.**

```ts
val adapter = SleepNightAdapter(SleepNightListener {
    nightId ->  sleepTrackerViewModel.onSleepNightClicked(nightId)
})
```

**3. In SleepTrackerViewModel, add a handler for the click event.**

You also need to add a `MutableLiveData` object to control the navigation.

```ts
private val _navigateToSleepDataQuality = MutableLiveData<Long>()
val navigateToSleepDataQuality
    get() = _navigateToSleepDataQuality
```

**4. Define method to initiate and complete naviattion.**

Initiate navigation by setting _navigateToSleepDataQuality.value to `id`:

```ts
fun onSleepNightClicked(id: Long){
    _navigateToSleepDataQuality.value = id
}
```

and then set it to `null` once navigation is completed:

```ts
fun onSleepDataQualityNavigated() {
    _navigateToSleepDataQuality.value = null
}
```

**5. In `SleepTrackerFragment`, add an observer to trigger navigation when the listener passes the data to `ViewModel`.**

Make sure you call `onSleepDataQualityNavigated` when navigation is complete.

```ts
sleepTrackerViewModel.navigateToSleepDataQuality.observe(this, Observer {night ->
    night?.let {
        this.findNavController().navigate(SleepTrackerFragmentDirections
                        .actionSleepTrackerFragmentToSleepDetailFragment(night))
        sleepTrackerViewModel.onSleepDataQualityNavigated()
    }
})
```

If you want to start at this step, you can download this exercise from: [Step.12-Exercise-Navigate-on-Click](https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.12-Exercise-Navigate-on-Click.zip).

You will find plenty of `//TODO` comments to help you complete this exercise, and if you get stuck, go back and watch the video again.

Once you’re done, you can check your solution against the solution we’ve provided here: [Step.12-Solution-Navigate-on-Click](https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.12-Solution-Navigate-on-Click), or using this [git diff](https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.12-Exercise-Navigate-on-Click...Step.12-Solution-Navigate-on-Click).

<text-box variant='learningObjectives' name='Complete these tasks to navigate to a new fragment and pass data.'>

- In `fragment_sleep_detail`, uncomment the code inside the `ConstraintLayout`.
- In `SleepTrackerFragment`, replace the `Toast` with code to pass `nightId` to the view model.
- In `SleepTrackerViewModel`, add an encapsulated `navigateToSleepDataQuality` `LiveData`, that changes  when you want to navigate.
- In `SleepTrackerViewModel`, define `onSleepNightClicked()` and `onSleepDataQualityNavigated()` for initiating and completing navigation.
- In `SleepTrackerFragment`, add an observer for `navigateToSleepDataQuality`.
- In `navigation.xml`,  add an action for navigating to `sleep_datail_fragment`.
- Run your app, click an item, and verify navigation to the detail screen.

</text-box>

Congratulations, you now have a working RecyclerView with navigation!

<button>Continue</button>
