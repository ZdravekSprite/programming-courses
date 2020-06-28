---
path: "/lesson07/12-exercise--refresh-data-with-diffutil"
title: "Exercise: Refresh Data with DiffUtil"
---

<youtube id="5bCMZOv9WkE"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this step you'll take the <code>Adapter</code> you finished in the last section and add <code>DiffUtil</code>s to calculate changes when the list changes.</p>
<p>When you've completed this exercise you will have refactored the <code>SleepNightAdapter</code> to use <code>ListAdapter</code>, and replaced <code>notifyDataSetChanced</code> with the more optimized <code>DiffUtil</code>.</p>
<ol>
<li><p><strong>At the bottom of <code>SleepNightAdapter.kt</code>, create a new class <code>SleepNightDiffCallback</code> that extends <code>DiffUtil.ItemCallback&lt;SleepNight&gt;</code>.</strong></p>

```ts
 class SleepNightDiffCallback :
        DiffUtil.ItemCallback<SleepNight>() {
 }
```

<p><br></p>
</li>
<li><p><strong>In <code>SleepNightDiffCallback</code> override <code>areItemsTheSame</code>.</strong></p>
<p>Two items are the same if their <code>nightId</code> values are equal.
<br><br></p>
</li>
<li><p><strong>Override <code>areContentsTheSame</code> in <code>SleepNightDiffCallback</code>.</strong></p>
<p>Two items are the same if they have the same value, <code>oldItem == newItem</code>.
<br><br></p>
</li>
<li><p><strong>Update <code>SleepNightAdapter</code> to extend <code>ListAdapter</code> with a <code>SleepNightDiffCallback()</code> parameter:</strong></p>

```ts
class SleepNightAdapter : ListAdapter<SleepNight, SleepNightAdapter.ViewHolder>(SleepNightDiffCallback())
```

<p>Make sure to import <code>ListAdapter</code> from <code>androidx.recyclerview.widget.ListAdapter</code>.
<br></p>
</li>
<li><p><strong>Delete the data field and getItemCount().</strong> </p>
<p>Remove the code for <code>val data</code> and <code>getItemCount</code>.</p>
<p><strong>NOTE:</strong> Your code will not compile after this step. We'll fix that in the next few steps.
<br><br></p>
</li>
<li><p><strong>In <code>onBindViewHolder()</code> replace <code>data[position]</code> with a call to <code>getItem()</code>.</strong>
<br><br></p>
</li>
<li><p><strong>In <code>SleepTrackerFragment</code> <code>nights</code> observer, replace <code>adapter.data</code> assignment with a call to <code>adapter.submitList()</code>.</strong><br><br></p>
</li>
<li><p><strong>Run the app again! You should see the items animate when you start a sleep night.</strong></p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.07-Exercise-Add-DiffUtil-to-Adapter.zip">Step.07-Exercise-Add-DiffUtil-to-Adaptera</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.07-Solution-Add-DiffUtil-to-Adapter">Step.07-Solution-Add-DiffUtil-to-Adapter</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.07-Exercise-Add-DiffUtil-to-Adapter...Step.07-Solution-Add-DiffUtil-to-Adapter">git diff</a>.</p>


<text-box variant='learningObjectives' name='Complete these tasks to implement DiffUtil to calculate changes when the list changes.'>

- In <code>SleepNightAdapter</code>, create a <code>SleepNightDiffCallback</code> class that extends <code>DiffUtil.ItemCallback&lt;SleepNight&gt;</code>.
- In <code>SleepNightAdapter</code>, SleepNightDiffCallback, override <code>areItemsTheSame()</code> and <code>areContentsTheSame()</code>.
- In <code>SleepNightAdapter</code>, update <code>SleepNightAdapter</code> to be a <code>ListAdapter</code>.
- In <code>SleepNightAdapter</code>, delete the <code>data</code> field and <code>getItemCount()</code> function.
- In <code>SleepNightAdapter</code>, replace <code>data[position]</code> with <code>getItem()</code>.
- In <code>SleepTrackerFragment</code>, replace <code>adapter.data</code> assignment with <code>adapter.submitList()</code>.
- My app builds and runs correctly!

</text-box>

<p>Great job! Add a few items to see RecyclerView animate the changes!</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/android/support/v7/util/DiffUtil">DiffUtil</a></li>
</ul>
