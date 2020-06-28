---
path: "/lesson07/06-exercise--recycling-viewholders"
title: "Exercise: Recycling ViewHolders"
---

<youtube id="sPhKtEvsft8"></youtube>

<p>In this lesson, we'll explore how onBindViewHolder works when views get recycled.</p>
<ol>
<li><p><strong>Update <code>onBindViewHolder</code> to show low sleep quality in red.</strong> </p>
<p>Add an if block and set the sleep quality to red if sleepQuality is 1 or less:</p>

```ts
if (item.sleepQuality <= 1) {
   holder.textView.setTextColor(Color.RED)
 }
```

<p><br></p>
</li>
<li><p><strong>Run your app again to see your <code>RecyclerView Adapter</code> in action:</strong> </p>
<p>Add enough items that you can scroll up and down. Notice that rows that scroll back onto the screen are in red, regardless of their sleepQuality value. We’ll fix that now.
<br><br></p>
</li>
<li><p><strong>Add an <code>else</code> block to reset the color:</strong> </p>
<p>This will fix the bug we just introduced by making sure to always set the text color correctly, based on the value of sleepQuality.</p>

```ts
if (item.sleepQuality <= 1) {
    holder.textView.setTextColor(Color.RED)
 } else {
    holder.textView.setTextColor(Color.BLACK)
 }
```

<p><br></p>
</li>
<li><p><strong>Run your app again to see your <code>RecyclerView Adapter</code> in action:</strong> </p>
<p>You will see that the color is always set correctly now!</p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.03-Exercise-Recycling-ViewHolders.zip">Step.03-Exercise-Recycling-ViewHolders</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.03-Solution-Recycling-ViewHolders">Step.03-Solution-Recycling-ViewHolders</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.03-Exercise-Recycling-ViewHolders...Step.03-Solution-Recycling-ViewHolders">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these steps to update colors in <code>onBindViewHolder()</code> when view is recycled.'>

- In <code>SleepNightAdapter</code>, add an if block and set the sleep quality to red  if <code>sleepQuality</code> is 1 or less.
- Run the app and verify that the color does not reset to black.
- In <code>SleepNightAdapter</code>,  add an else clause and reset the color if <code>sleepQuality</code> is 2 or higher.
- Run the app again and verify that the color displays correctly for all <code>sleepQuality</code> values.

</text-box>

<p>Congrats! In the next exercise you'll dive into how ViewHolders work and implement your own!</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/android/support/v7/widget/RecyclerView.ViewHolder">RecyclerView.ViewHolder</a></li>
</ul>
