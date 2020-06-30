---
path: "/lesson06/05-exercise--creating-the-sleepnight-entity"
title: "Exercise: Creating the SleepNight Entity"
---

<youtube id="zSpW0ctZKz8"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this step you'll be creating a data class to define the sleep data entity.</p>
<ol>
<li><p><strong>In the <code>database</code> package, find and open the <code>SleepNight.kt</code> file.</strong> </p>
</li>
<li><p><strong>Create the <code>SleepNight</code> data class with parameters for an ID, start time and end time in milliseconds, and a numerical sleep quality rating:</strong></p>

```ts
data class SleepNight  (
    var nightId: Long = 0L,
    val startTimeMilli: Long =  System.currentTimeMillis(),
    var endTimeMilli: Long = startTimeMilli,
    var sleepQuality: Int = -1
)
```

</li>
<li><p><strong>Annotate the data class with <code>@Entity</code>, and name the table <code>daily_sleep_quality_table</code>.</strong></p>
<p>(Remember to perform the necessary imports for this and all the following annotations.)</p>

```ts
@Entity(tableName = "daily_sleep_quality_table")
```

</li>
<li><p><strong>Identify the <code>nightId</code> as the primary key by annotating it with <code>@PrimaryKey</code>, and set the <code>autoGenerate</code> parameter to <code>true</code>:</strong></p>
<p><code>@PrimaryKey(autoGenerate = true)</code></p>
</li>
<li><p><strong>Annotate the remaining properties with <code>@ColumnInfo</code> and customize their names as shown below.</strong></p>
<p>Your finished code should look like this: </p>

```ts
@Entity(tableName = "daily_sleep_quality_table")
data class SleepNight(
    @PrimaryKey(autoGenerate = true)
    var nightId: Long = 0L,

    @ColumnInfo(name = "start_time_milli")
    val startTimeMilli: Long = System.currentTimeMillis(),

    @ColumnInfo(name = "end_time_milli")
    var endTimeMilli: Long = startTimeMilli,

    @ColumnInfo(name = "quality_rating")
    var sleepQuality: Int = -1
)
```

</li>
<li><p><strong>Build and run your code to make sure it has no errors.</strong> </p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/Step.01-Exercise-Create-Night-Data-Entity.zip">Step.01-Exercise-Create-Night-Data-Entity</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/tree/Step.01-Solution-Create-Night-Data-Entity">Step.01-Solution-Create-Night-Data-Entity</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/compare/Step.01-Exercise-Create-Night-Data-Entity...Step.01-Solution-Create-Night-Data-Entity">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these tasks to add a <code>SleepNight</code> entity to your app.'>

- Create <code>SleepNight</code> data class.
- Annotate <code>SleepNight</code> data class with <code>Room</code> annotations.
- Verify app builds and runs without errors.

</text-box>

<p>Great!  Now you're ready to create the Room database!</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/training/data-storage/room/defining-data.html">Defining data using Room entities</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/android/arch/persistence/room/ColumnInfo">ColumnInfo</a></li>
<li>How to <a target="_blank" href="https://developer.android.com/reference/android/arch/persistence/room/PrimaryKey.html">auto-generate</a> a unique key</li>
<li><a target="_blank" href="https://developer.android.com/reference/android/arch/persistence/room/package-summary#annotations">List of all Room annotations</a></li>
</ul>
