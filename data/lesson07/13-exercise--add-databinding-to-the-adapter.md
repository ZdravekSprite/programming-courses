---
path: "/lesson07/13-exercise--add-databinding-to-the-adapter"
title: "Exercise: Add DataBinding to the Adapter"
---

<youtube id="OadUWmaxm84"></youtube>

<p>Now it’s your turn to complete this exercise yourself!</p>
<p>In this exercise you'll take the Adapter you finished in the last exercise and update it to use Data Binding. This is a refactor, and it won't change the behavior of your list.</p>
<ol>
<li><p><strong>In <code>list_item_sleep_night.xml</code>, wrap the <code>ConstraintLayout</code> in a <code>layout</code> tag.</strong> </p>
<p>You can use the intention menu via <code>Alt+Enter</code> to "Convert to data binding layout".
<br><br></p>
</li>
<li><p><strong>Add a data tag and a variable called <code>sleep</code>, then rebuild the app.</strong></p>

```ts
 <data>

    <variable
         name=”sleep” type="com.example.android.trackmysleepquality.database.SleepNight" />
 </data>
```

</li>
</ol>
<p><strong>In <code>SleepNightAdapter.ViewHolder</code></strong></p>
<ol>
<li><p><strong>In the <code>companion object</code>, Replace <code>LayoutInflater</code> with <code>ListItemSleepNightBinding</code>:</strong></p>

```ts
class ViewHolder private constructor(val binding: ListItemSleepNightBinding)
```

<p><br></p>
</li>
<li><p><strong>In the <code>from()</code> function, use <code>ListItemSleepNightBinding.inflate</code> to create a binding object.</strong></p>

```ts
 fun from(parent: ViewGroup): ViewHolder {
     val layoutInflater = LayoutInflater.from(parent.context)
     val binding = ListItemSleepNightBinding.inflate(layoutInflater, parent, false)
     return ViewHolder(binding)
 }
```

<p><br></p>
</li>
<li><p><strong>Refactor and rename the ViewHolder class’s constructor parameter to take a <code>ListItemSleepNightBinding</code> parameter called <code>binding.root</code>.</strong></p>
<p>Remember to pass the parameter to the parent constructor:</p>

```ts
 class ViewHolder private constructor(val binding: ListItemSleepNightBinding):
       RecyclerView.ViewHolder(binding.root) {
 }
```

<p><em>Note</em> Your app won't compile after this step. We'll fix that next.
<br><br></p>
</li>
<li><p><strong>In <code>ViewHolder</code>, replace <code>findViewById</code> calls with references to binding object fields, then inline them:</strong> </p>

```ts
val sleepLength: TextView = binding.sleepLength
val quality: TextView = binding.qualityString
val qualityImage: ImageView = binding.qualityImage
```

<p>Once your code is compiling you can inline the new definitions. Do this by right clicking on each field, then selecting <em>Refactor &gt; Inline</em>. Select <em>Inline all references and remove the property</em> to tell Android studio to remove the property.</p>
<p>Inline is a very common refactor.  It's worth taking a moment to learn the keyboard shortcut. You can find the keyboard shortcut in the context menu next to <em>Inline</em>.</p>
<p>Your refactored <code>ViewHolder</code> should now look like this:</p>

```ts
 class ViewHolder private constructor(val binding: ListItemSleepNightBinding): RecyclerView.ViewHolder(binding.root) {

    fun bind(item: SleepNight) {
        val res = itemView.context.resources
        binding.sleepLength.text = convertDurationToFormatted(item.startTimeMilli, item.endTimeMilli, res)
        binding.qualityString.text = convertNumericQualityToString(item.sleepQuality, res)
        binding.qualityImage.setImageResource(when (item.sleepQuality) {
            0 -> R.drawable.ic_sleep_0
            1 -> R.drawable.ic_sleep_1
            2 -> R.drawable.ic_sleep_2
            3 -> R.drawable.ic_sleep_3
            4 -> R.drawable.ic_sleep_4
            5 -> R.drawable.ic_sleep_5
            else -> R.drawable.ic_sleep_active
        })
    }

    companion object {
          fun from(parent: ViewGroup): ViewHolder {
               val layoutInflater = LayoutInflater.from(parent.context)
               val binding = ListItemSleepNightBinding.inflate(layoutInflater, parent, false)
               return ViewHolder(binding)
         }
    }
 }
```

<p><br></p>
</li>
<li><p><strong>Build and run the app, and verify the refactor has not changed anything visible to the user.</strong></p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.08-Exercise-Add-DataBinding-to-Adapter.zip">Step.08-Exercise-Add-DataBinding-to-Adapter</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.08-Solution-Add-DataBinding-to-Adapter">Step.08-Solution-Add-DataBinding-to-Adapter</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.08-Exercise-Add-DataBinding-to-Adapter...Step.08-Solution-Add-DataBinding-to-Adapter">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these steps to add DataBinding and use it in the ViewHolder.'>

- In <code>list_item_sleep_night</code>, wrap the ConstraintLayout in a layout tag and add data binding tag.
- In <code>list_item_sleep_night</code>,  add a <code>sleep</code>  data variable, then rebuild the app.
- In <code>SleepNightAdapter</code>,  inflate the layout using <code>ListItemSleepNightBinding</code>.
- In <code>SleepNightAdapter</code>,  replace the ViewHolder constructor itemView parameter with a ListItemSleepNightBinding.
- In <code>SleepNightAdapter</code>, replace <code>findViewById()</code> calls with inline references to binding object fields.
- Run the app again and see that nothing has changed for the user!

</text-box>

<p>Congrats! You've implemented data binding in your RecyclerView Adapter!</p>
<button>Continue</button>
