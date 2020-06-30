---
path: "/lesson07/05-exercise--display-sleepquality-data"
title: "Exercise: Display SleepQuality Data"
---

<youtube id="Cb7phrYBSkk"></youtube>

<ol>
<li><p><strong>In SleepNightAdapter, onCreateViewHolder(), inflate the <code>text_item_view</code> layout and return the ViewHolder.</strong> </p>
<p>Get the <code>LayoutInflater</code> from <code>parent.context</code> and inflate <code>R.layout.text_item_view</code>.</p>
<p>Remember to pass <code>false</code> to <code>attachParent</code> since the <code>RecyclerView</code> will take care of attaching it for us.</p>

```ts
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TextItemViewHolder {
       val layoutInflater = LayoutInflater.from(parent.context)
       val view = layoutInflater
            .inflate(R.layout.text_item_view, parent, false) as TextView
       return TextItemViewHolder(view)
 }
```

<p><br></p>
</li>
<li><p><strong>In <code>SleepNightAdapter</code>, add a custom setter to <code>data</code> that calls <code>notifyDataSetChanged()</code> and tell Kotlin to save the new value by setting <code>field = value</code>.</strong></p>

```ts
set(value) {
   field = value
   notifyDataSetChanged()
 }
```

<p><br></p>
</li>
<li><p><strong>In <code>SleepTrackerFragment</code>, create a new <code>SleepNightAdapter</code>, and use binding to associate it with the <code>RecyclerView</code>:</strong></p>

```ts
binding.sleepList.adapter = adapter
```

<p><br></p>
</li>
<li><p><strong>Create an observer on <code>sleepTrackerViewModel.nights</code> that sets the <code>Adapter</code> when there is new data.</strong></p>
<p><code>LiveData</code> observers are sometimes passed <code>null</code>, so make sure you check for <code>null</code>.
<br></p>
</li>
</ol>
<p><strong>Debugging tips</strong> </p>
<p> If your app compiles but doesn't work, here are a few things to check:</p>
<ul>
<li>Make sure you've added at least one night of sleep.</li>
<li>Do you call <code>notifyDataSetChanged()</code> in <code>SleepNightAdapter</code>? </li>
<li>Try setting a breakpoint to make sure it's getting called.</li>
<li>Did you register an observer on <code>sleepTrackerViewModel.nights</code> in <code>SleepTrackerFragment</code>?</li>
<li>Did you set the adapter in <code>SleepTrackerFragment</code> with <code>binding.sleepList.adapter = adapter</code>?</li>
<li>Does <code>data</code> in <code>SleepNightAdapter</code> hold a non-empty list? </li>
<li>Try setting a breakpoint in the setter and <code>getItemCount()</code>.</li>
</ul>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.02-Exercise-Display-Data.zip">Step.02-Exercise-Display-Data</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.02-Solution-Display-Data">Step.02-Solution-Display-Data</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.02-Exercise-Display-Data...Step.02-Solution-Display-Data">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete the following steps to create to implement the adapter.'>

- In <code>SleepNightAdapter</code>, inflate the<code>text_item_view</code> layout.
- In <code>SleepNightAdapter</code>, In <code>onCreateViewHolder()</code>, return the new <code>ViewHolder</code>.
- In <code>SleepNightAdapter</code>, add a custom setter to data that calls <code>notifyDataSetChanged()</code>.
- In <code>SleepTrackerFragment</code>, create a new <code>SleepNightAdapter</code> variable, and bind it to the adapter.
- In <code>SleepTrackerFragment</code>, create an observer on <code>sleepTrackerViewModel.nights</code> that tells the adapter when there is new data.
- In <code>SleepTrackerViewModel</code>, remove <code>private</code> visibility modifier from the <code>night</code> variable.
- Run the app, see a list of sleep quality values (make sure you've added at least one night).

</text-box>

<p>Congrats! You've finished your RecyclerView adapter! Next we'll we'll take another look at onBindViewHolder to explore it further.</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/guide/topics/ui/layout/recyclerview">Create a List with RecyclerView</a></li>
</ul>
