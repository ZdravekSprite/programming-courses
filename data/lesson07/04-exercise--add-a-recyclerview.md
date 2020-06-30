---
path: "/lesson07/04-exercise--add-a-recyclerview"
title: "Exercise: Add a RecyclerView"
---

<youtube id="TDe4t-fbHmY"></youtube>

<p>Now it's your turn to complete this exercise yourself!</p>
<p><strong>NOTE: This lesson is a continuation of the code you completed in Lesson 6</strong>, and includes additional code  that you’ll need to complete this lesson. To get started, make sure you clone the <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview">GitHub repository</a> and check out the starter-code branch, or you can download the <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/starter-code.zip">zip File</a>.</p>
<p><strong>This exercise in completed in two parts. After this part, there won't be any data on the screen, but have no fear, that's coming right up!</strong></p>
<p>In this first exercise, you will replace your main ScrollView with a RecyclerView, then implement an Adapter for displaying list items.  There are quite a few steps, but when you're done, you'll have a working app that uses a RecyclerView to display data.</p>
<ol>
<li><p><strong>Add RecyclerView to layout.</strong>
Open <code>fragment_sleep_tracker.xml</code> and replace the entire ScrollView, including the enclosed TextView, with a <code>RecyclerView</code>:</p>

```ts
<androidx.recyclerview.widget.RecyclerView
  android:id="@+id/sleep_list"
  android:layout_width="0dp"
  android:layout_height="0dp"
  app:layout_constraintBottom_toTopOf="@+id/clear_button"
  app:layout_constraintEnd_toEndOf="parent"
  app:layout_constraintStart_toStartOf="parent"
  app:layout_constraintTop_toBottomOf="@+id/stop_button"
  app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"/>
```

<p>You should be able to see that it's constrained correctly in the Design tab. The <code>RecyclerView</code> should fill all the space between the buttons. There should not be a <code>ScrollView</code> anymore.</p>
</li>
</ol>
<p><strong>In SleepNightAdapter.kt</strong></p>
<ol>
<li><p><strong>Create the SleepNightAdapter class.</strong> </p>
<p>The class should extend RecyclerView.Adapter and hold a TextItemViewHolder.</p>

```ts
class SleepNightAdapter: RecyclerView.Adapter<TextItemViewHolder>()
```

<p>The code won’t compile yet, since you haven’t implemented all of the required overrides yet. We'll do that below.
<br><br></p>
</li>
<li><strong>Define a data source.</strong>
Create  variable <code>data</code> and assign it to <code>listOf&lt;SleepNight&gt;</code>.
<br><br></li>
<li><strong>Override <code>getItemCount()</code> and have it return <code>data.size</code>.</strong>
<br><br></li>
<li><p><strong>Override onBindViewHolder()</strong> </p>
<p>The function should retrieve the item from the data list, and set <code>holder.textView.text</code> to <code>item.sleepQuality.toString()</code>.
<br><br></p>
</li>
<li><p><strong>Override <code>onCreateViewHolder()</code>.</strong></p>
<p><strong><em>NOTE</em></strong> The Adapter requires this method, but we won't fill it in here.  We’ll cover it in a later exercise, but for now it just make sure it contains the line, <code>TODO("not implemented")</code>, so the code will compile.
<br><br></p>
</li>
<li><p><strong>Verify that the code compiles and runs without errors.</strong></p>
<p><strong><em>NOTE</em></strong> You should be able to click <code>START</code> and <code>STOP</code>, and assign sleep quality, but <strong>items will not appear on the screen yet</strong> because we’ve removed the ScrollView.  In the next exercise,  you'll display data in the RecyclerView.</p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.01-Exercise-Add-a-RecyclerView.zip">Step.01-Exercise-Add-a-RecyclerView</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.01-Solution-Add-a-RecyclerView">Step.01-Solution-Add-a-RecyclerView</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.01-Exercise-Add-a-RecyclerView...Step.01-Solution-Add-a-RecyclerView">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these tasks to implement a RecyclerView.'>

- Replace the <code>ScrollView</code> with a <code>RecyclerView</code>.
- Create <code>SleepNightAdapter</code> class and extend it from <code>RecyclerView.Adapter&lt;TextItemViewHolder&gt;</code>.
- Create a variable, <code>data</code>, that holds a list of <code>SleepNight</code>.
- Override <code>getItemCount()</code> to return the total number of items in the data set.
- Override <code>onBindViewHolder()</code> and have it update the contents of the <code>ViewHolder</code>.
- Override <code>onCreateViewHolder()</code>, <em>to be completed in the next exercise</em>.

</text-box>

<p>Great job! Next you'll finish the Adapter interface with onCreateViewHolder() and tell RecyclerView how to use your adapter to display a list of SleepNight.</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><p><a target="_blank" href="https://developer.android.com/reference/android/support/v7/widget/RecyclerView">RecyclerView</a></p>
</li>
<li><p><a target="_blank" href="https://developer.android.com/reference/android/support/v7/widget/RecyclerView.Adapter">RecyclerView.Adapter</a></p>
</li>
</ul>
