---
path: "/lesson06/13-exercise--adding-a-viewmodel"
title: "Exercise: Adding a ViewModel"
---

<youtube id="mNGaZzB-EGo"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this step, you'll look at the <code>SleepTrackerViewModel</code> and <code>SleepTrackerViewModelFactory</code> classes, then create a view model in the <code>SleepTrackerFragment</code> and add it to data binding and the layout. </p>
<p><strong>In SleepTrackerViewModel</strong></p>
<ol>
<li><p><strong>In the <code>sleeptracker</code> package, open <code>SleepTrackerViewModel.kt</code>.</strong> </p>
</li>
<li><p><strong>Inspect the provided <code>SleepTrackerViewModel</code> class definition that extends <code>AndroidViewModel()</code>.</strong></p>
<p>This class is the same as <code>ViewModel</code>, but it takes the application context as a parameter and makes it available as a property. You are going to need this later on to access resources.  </p>
<p>The <code>ViewModel</code> needs access to the data in the database, so pass in an instance of the <code>SleepDatabaseDao</code>. And then pass this up to the superclass as well:</p>

```ts
class SleepTrackerViewModel(
    val database: SleepDatabaseDao,
    application: Application) : AndroidViewModel(application) {
}
```

</li>
</ol>
<p><strong>In SleepTrackerViewModelFactory</strong></p>
<ol>
<li><p><strong>In the <code>sleeptracker</code> package, open <code>SleepTrackerViewModelFactory.kt</code>.</strong></p>
<p>The provided <code>SleepTrackerViewModelFactory</code> takes the same argument as the <code>ViewModel</code> and extends <code>ViewModelProvider.Factory</code>.</p>
<p>Inside the factory, the code overrides <code>create()</code>, which takes any class type as an argument and returns a <code>ViewModel</code>.</p>
</li>
<li><p><strong>In the body of <code>create()</code>, we check that there is a <code>SleepTrackerViewModel</code> class available, and if there is, return an instance of it. Otherwise, we throw an exception.</strong> </p>
<p><strong>Tip:</strong> This is mostly boilerplate code, so it looks very similar to what you created in the previous lesson, and you can reuse it for future view model factories. </p>
</li>
</ol>
<p><strong>SleepTrackerFragment</strong></p>
<ol>
<li><p><strong>In the <code>SleepTrackerFragment</code>, in <code>onCreateView()</code>, get a reference to the application context.</strong></p>

```ts
val application = requireNotNull(this.activity).application
```

</li>
<li><p><strong>Define a <code>dataSource</code>.</strong></p>
<p>To get a reference to the DAO of the database, use <code>SleepDatabase.getInstance(application).sleepDatabaseDao</code>.</p>

```ts
val dataSource = SleepDatabase.getInstance(application).sleepDatabaseDao
```

</li>
<li><p><strong>Create an instance of the <code>viewModelFactory</code>.</strong> </p>
<p>You'll need to pass in <code>dataSource</code> as well as <code>application</code>.</p>

```ts
val viewModelFactory = SleepTrackerViewModelFactory(dataSource, application)
```

</li>
<li><p><strong>Get a reference to the <code>SleepTrackerViewModel</code>.</strong></p>
<p>To the <code>ViewModelProvider</code>, specify to use the <code>viewModelFactory</code> and get an instance of <code>SleepTrackerViewModel::class.java</code>.</p>

```ts
val sleepTrackerViewModel =
    ViewModelProviders.of(
            this, viewModelFactory).get(SleepTrackerViewModel::class.java)
```

</li>
<li><p><strong>Your finished code in the <code>SleepTrackerFragment</code> should look like this:</strong></p>

```ts
// Create an instance of the ViewModel Factory.
val dataSource = SleepDatabase.getInstance(application).sleepDatabaseDao
val viewModelFactory = SleepTrackerViewModelFactory(dataSource, application)

// Get a reference to the ViewModel associated with this fragment.
val sleepTrackerViewModel =
    ViewModelProviders.of(
            this, viewModelFactory).get(SleepTrackerViewModel::class.java)
```

</li>
</ol>
<p><strong>Data Binding for ViewModel</strong></p>
<ol>
<li><p><strong>In <code>SleepTrackerFragment</code> inside <code>onCreateView()</code>:</strong></p>
<p>Set the current activity as the lifecycle owner of the binding.</p>

```ts
binding.setLifecycleOwner(this)
```

</li>
<li><p><strong>In <code>fragment_sleep_tracker.xml</code>:</strong></p>
<p>Inside the <code>&lt;data&gt;</code> block, create a <code>&lt;variable&gt;</code> that references the <code>SleepTrackerViewModel</code> class.</p>

```ts
<data>
<variable
    name="sleepTrackerViewModel"
    type="com.example.android.trackmysleepquality.sleeptracker.SleepTrackerViewModel" />
</data>
```

</li>
<li><p><strong>In <code>SleepTrackerFragment</code> inside <code>onCreateView()</code>:</strong></p>
<p>Assign the <code>sleepTrackerViewModel</code> binding variable to the <code>sleepTrackerViewModel</code>.</p>

```ts
binding.sleepTrackerViewModel = sleepTrackerViewModel
```

</li>
<li><p><strong>Finally, as always, make sure your code builds and runs without errors.</strong></p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/Step.04-Exercise-Add-ViewModel.zip">Step.04-Exercise-Add-ViewModel</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/tree/Step.04-Solution-Add-ViewModel">Step.04-Solution-Add-ViewModel</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/compare/Step.04-Exercise-Add-ViewModel...Step.04-Solution-Add-ViewModel">git diff</a>.</p>


<text-box variant='learningObjectives' name='Learning objectives'>

- Open and inspect the <code>SleepTrackerViewModel</code>.
- Open and inspect <code>SleepTrackerViewModelFactory</code>.
- In <code>SleepTrackerFragment</code>, update <code>onCreateView()</code> to get an instance of <code>SleepTrackerViewModel</code> using the factory.
- In <code>SleepTrackerFragment</code>, update to set <code>this</code> as the lifecycle owner of the <code>binding</code>.
- In <strong>fragment_sleep_tracker.xml</strong>, create a <code>&lt;variable&gt;</code> that references the SleepTrackerViewModel class.
- In <code>SleepTrackerFragment</code>, update to assign <code>binding.sleepTrackerViewModel</code>  variable to the <code>sleepTrackerViewModel</code>.
- Verify your app builds and runs without errors.

</text-box>

<p>Great!</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><p><a target="_blank" href="https://developer.android.com/reference/android/arch/lifecycle/ViewModelProvider.Factory">ViewModelProvider.Factory</a></p>
</li>
<li><p><a target="_blank" href="https://en.wikipedia.org/wiki/Factory_method_pattern">Factory Pattern</a></p>
</li>
</ul>
