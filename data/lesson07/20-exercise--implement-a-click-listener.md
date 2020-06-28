---
path: "/lesson07/20-exercise--implement-a-click-listener"
title: "Exercise: Implement a Click Listener"
---

<youtube id="g8GDLOMt600"></youtube>

<p>Now it’s your turn to complete this exercise yourself!</p>
<p>In this exercise you'll implement a ClickListener and bind it in the adapter.</p>
<ol>
<li><p><strong>In <code>SleepNightAdapter</code>, create a new class called <code>SleepNightListener</code>.</strong></p>
<p>The listener class receives a <code>SleepNight</code> object and passes its <code>nightId</code> field:</p>

```ts
 class SleepNightListener(val clickListener: (sleepId: Long) -> Unit) {
     fun onClick(night: SleepNight) = clickListener(night.nightId)
 }
```

<p><br></p>
</li>
<li><p><strong>Wire up the new listener to class to your <code>list_item_sleep_night.xml</code> by creating new variable.</strong></p>

```ts
<variable
     name="clickListener" type="com.example.android.trackmysleepquality.sleeptracker.SleepNightListener"/>
```

<p><br></p>
</li>
<li><p><strong>In order to tell the view to call your click listener, add your click listener to onClick property of the ConstaintLayout.</strong></p>

```ts
android:onClick="@{() -> clickListener.onClick(sleep)}"
```

<p><br></p>
</li>
<li><p><strong>Add a SleepNightListener reference to the SleepNightAdapter class declaration.</strong></p>

```ts
class SleepNightAdapter(val clickListener: SleepNightListener)
```

<p><br></p>
</li>
<li><p><strong>To finish the adapter, add clickListener to DataBinding in onBindViewHolder method.</strong></p>
<p>Edit the call to holder.bind to pass the click listener:</p>

```ts
holder.bind(clickListener,getItem(position)!!)
```

<p><br></p>
</li>
<li><p><strong>Following the prior step, pass the click listener to <code>bind()</code> and add it to the <code>binding</code>:</strong></p>

```ts
 fun bind(clickListener: SleepNightListener, item: SleepNight) {
       binding.sleep = item
       binding.clickListener = clickListener
       binding.executePendingBindings()
 }
```

<p><br></p>
</li>
<li><p><strong>In <code>SleepTrackerFragment</code>, fix the error on the <code>adapter = SleepNightAdapter()</code> declaration by passing the <code>SleepNightListener</code> object.</strong></p>
<p>Have the listener display the nightId in a toast message when the user clicks the item in the grid.</p>

```ts
 val adapter = SleepNightAdapter(SleepNightListener { nightId ->
      Toast.makeText(context, "${nightId}", Toast.LENGTH_LONG).show()
 })
```

<p><br></p>
</li>
<li><p><strong>Build and run the code, and try out your new click listener!</strong> </p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.11-Exercise-Implement-a-Click-Listener.zip">Step.11-Exercise-Implement-a-Click-Listener</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.11-Exercise-Implement-a-Click-Listener">Step.11-Solution-Implement-a-Click-Listener</a>, or using this  <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.11-Exercise-Implement-a-Click-Listener...Step.11-Solution-Implement-a-Click-Listener">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete the steps below to implement a ClickListener and bind it in the adapter.'>

- In <code>SleepNightAdapter</code>, create a new <code>SleepNightListener</code> class.
- In list_item_sleep_night, create <variable> <code>clickListener</code> of type <code>SleepNightListener</code>.</variable>
- In list_item_sleep_night, set <code>ConstrainLayout</code>'s <code>onClick</code> property to <code>clickListener</code>.
- In <code>SleepNightAdapter</code>, add <code>SleepNightListener</code> to the <code>SleepNightAdapter</code> class declaration.
- In <code>SleepNightAdapter</code>, add clickListener parameter to holder.bind().
- In <code>SleepNightAdapter</code>,  add a <code>clickListener</code> parameter to <code>bind()</code>,  and add a binding for the <code>clickListener</code>.
- In <code>SleepTrackerFragment</code>, pass a <code>SleepNightListener</code> callback to the <code>SleepNightAdapter</code>, and have it  display a toast message when an item is clicked.
- Run your app and click an item to see the <code>Toast</code> message.

</text-box>

<p>A toast to you!</p>
<button>Continue</button>
