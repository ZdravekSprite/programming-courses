---
path: "/lesson07/14-exercise--add-binding-adapters"
title: "Exercise: Add Binding Adapters"
---

<youtube id="ylxkPMxd_NE"></youtube>

<p>Now it’s your turn to complete this exercise yourself!</p>
<p>In this exercise you'll create binding adapters and move data binding to logic to XML.</p>
<p>When you've completed this exercise you will have refactored the <code>SleepNightAdapter</code> to use DataBinding, and replaced <code>bind</code>.</p>
<ol>
<li><p><strong>In <code>BindingUtils</code>, define three Binding Adapters, one for each view in <code>list_item_sleep_night</code>:</strong> </p>
<p>For the <code>ImageView</code>, move the code from <code>SleepNightAdapter.ViewHolder bind()</code> function into an extension function:</p>

```ts
 @BindingAdapter("sleepImage")
 fun ImageView.setSleepImage(item: SleepNight) {
      setImageResource(when (item.sleepQuality) {
          0 -> R.drawable.ic_sleep_0
          1 -> R.drawable.ic_sleep_1
          2 -> R.drawable.ic_sleep_2
          3 -> R.drawable.ic_sleep_3
          4 -> R.drawable.ic_sleep_4
          5 -> R.drawable.ic_sleep_5
          else -> R.drawable.ic_sleep_active
     })
 }
```

<p>For the two <code>TextView</code>s, convert the data to formatted text using the functions provided in <code>Util.kt</code>:</p>

```ts
 @BindingAdapter("sleepDurationFormatted")
 fun TextView.setSleepDurationFormatted(item: SleepNight?) {
      item?.let {
          text = convertDurationToFormatted(item.startTimeMilli, item.endTimeMilli,context.resources)
      }
 }

 @BindingAdapter("sleepQualityString")
 fun TextView.setSleepQualityString(item: SleepNight?) {
      item?.let {
          text = convertNumericQualityToString(item.sleepQuality, context.resources)
      }
 }
```

<p><br></p>
</li>
<li><p><strong>Replace the code in <code>SleepNightAdapter.ViewHolder.bind</code> with a single binding to the SleepNight item,  followed by <code>executePendingBindings()</code>:</strong></p>

```ts
binding.sleep = item
binding.executePendingBindings()
```

<p><br></p>
</li>
<li><p><strong>In <code>list_item_sleep_night</code>, add attributes to bind the views to the adapters you created in BindingAdapters:</strong> </p>
<p>For example, for the <code>ImageView</code>, add <code>app:sleepImage="@{sleep}"</code>
<br><br></p>
</li>
<li><strong>Build and run your code.</strong></li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.09-Exercise-Add-Binding-Adapters.zip">Step.09-Exercise-Add-Binding-Adapters</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.09-Solution-Add-Binding-Adapters">Step.09-Solution-Add-Binding-Adapters</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.09-Exercise-Add-Binding-Adapters...Step.09-Solution-Add-Binding-Adapters">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these tasks to use binding adapters in the ViewHolder.'>

- In <code>BindingUtils</code>, define binding adapters for <code>sleepImage</code>, <code>sleepDurationFormatted</code>, and <code>sleepQualityString</code>.
- In <code>SleepNightAdapter</code>, replace <code>bind()</code> code with a single binding to <code>SleepNight</code>, then call <code>executePendingBindings().</code>
- In <code>list_item_sleep_night</code>, bind views to the binding adapters you created in <code>BindingUtils</code>.
- Run your code and verify that the app works as expected.

</text-box>

<p>Congrats! You've finished implementing data binding in your RecyclerView Adapter and used a DataBinding Adapter!</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding">Binding Adapters</a></li>
</ul>
