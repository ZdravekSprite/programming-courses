---
path: "/lesson07/09-exercise--refactor-onbindviewholder"
title: "Exercise: Refactor onBindViewHolder"
---

<youtube id="z_sNxTCU9PQ"></youtube>

<p>In this exercise, you’ll begin refactoring the ViewHolder in the SleepNightAdapter. By encapsulating the logic in onBindViewHolder in this exercise, and onCreateViewHolder in the next exercise, you’ll create code that’s easier to maintain and enhance.</p>
<p>Let’s start by encapsulating the logic for binding the ViewHolder into a <code>bind()</code> method. When you’re done, <code>onBindViewHolder</code> will call <code>holder.bind(holder,item,res)</code>.</p>
<p>Watch the video to see how to use Android Studio tools to do most of this refactor for you.</p>
<ol>
<li><strong>Refactor logic in <code>onBind()</code> to a separate function called bind()</strong>:</li>
</ol>

```ts
     private fun bind(holder: ViewHolder, item: SleepNight, res: Resources) {
        holder.sleepLength.text = convertDurationToFormatted(item.startTimeMilli, item.endTimeMilli, res)
        holder.quality.text = convertNumericQualityToString(item.sleepQuality, res)
        holder.qualityImage.setImageResource(when (item.sleepQuality) {
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

<p><br></p>
<ol>
<li><p><strong>In new <code>bind()</code> function, convert the <code>holder</code> parameter to a receiver.</strong></p>
<p>Place the cursor over (but don’t select) the <code>holder</code> parameter.  Use keyboard <em>Option-Enter</em>, and select <em>Convert parameter to receiver</em>.</p>
<p>onBindViewHolder, will now call <code>holder.*bind*(item,res)</code>.
<br><br></p>
</li>
<li><strong>Cut the entire <code>bind()</code> function and paste it into the <code>ViewHolder</code> class, then remove its <code>ViewHolder</code> and <code>private</code> modifiers.</strong>
<br><br></li>
<li><p><strong>Cut the line <code>val res = holder.itemView.context.resources</code> from onBindViewHolder(), and paste it into the bind() function, then remove the `res’ parameter from bind().</strong></p>
<p>Your <code>ViewHolder</code> class should now look like this:</p>

```ts
 class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
   val res = itemView.context.resources

   val sleepLength: TextView = itemView.findViewById(R.id.sleep_length)
   val quality: TextView = itemView.findViewById(R.id.quality_string)
   val qualityImage: ImageView = itemView.findViewById(R.id.quality_image)

   fun bind(item: SleepNight) {
       sleepLength.text = convertDurationToFormatted(item.startTimeMilli, item.endTimeMilli, res)
       quality.text = convertNumericQualityToString(item.sleepQuality, res)
       qualityImage.setImageResource(when (item.sleepQuality) {
           0 -> R.drawable.ic_sleep_0
           1 -> R.drawable.ic_sleep_1
           2 -> R.drawable.ic_sleep_2
           3 -> R.drawable.ic_sleep_3
           4 -> R.drawable.ic_sleep_4
           5 -> R.drawable.ic_sleep_5
           else -> R.drawable.ic_sleep_active
      })
   }
 }
```

<p><br></p>
</li>
<li><strong>Build and run the app and verify it runs exactly as before.</strong></li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.05-Exercise-Refactor-onBindViewHolder.zip">Step.05-Exercise-Refactor-onBindViewHolder</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.05-Solution-Refactor-onBindViewHolder">Step.05-Solution-Refactor-onBindViewHolder</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.05-Exercise-Refactor-onBindViewHolder...Step.05-Solution-Refactor-onBindViewHolder">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these steps to refactor onBindViewHolder().'>

- In <code>SleepNightAdapter</code>, refactor binding logic into a separate function called <code>bind()</code>.
- In <code>SleepNightAdapter</code>, convert the <code>bind()</code> function's <code>holder</code> parameter to a <code>receiver</code>.
- In <code>SleepNightAdapter</code>, move <code>bind()</code> into the<code>ViewHolder</code> class.
- In <code>SleepNightAdapter</code>, move the <code>res</code> variable to <code>ViewHolder.bind()</code>.
- My app works after refactoring!

</text-box>

<p>Great job! In the next section you'll refactor onCreateViewHolder().</p>
<button>Continue</button>
