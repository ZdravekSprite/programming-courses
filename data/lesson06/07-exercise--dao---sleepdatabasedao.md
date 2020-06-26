---
path: "/lesson06/07-exercise--dao---sleepdatabasedao"
title: "Exercise: DAO - SleepDatabaseDao"
---

<youtube id="FOkrFmczOmw"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this step, you'll create queries for inserting, requesting,, and updating sleep data.</p>
<ol>
<li><p><strong>Create an interface <code>SleepDatabaseDao</code> and annotate it with <code>@Dao</code>:</strong></p>

```ts
@Dao
interface SleepDatabaseDao {}
```

</li>
<li><p><strong>Add an <code>@Insert annotation</code>, and an <code>insert()</code> function that takes one <code>SleepNight</code>.</strong></p>
<p>That's it. <code>Room</code> will generate all the necessary code to insert the passed-in <code>SleepNight</code> into the database. <strong>Note</strong> that you can call the function anything you want:</p>

```ts
@Insert
fun insert(night: SleepNight)
```

</li>
<li><p><strong>In the same way, add an <code>@Update</code> annotation with an <code>update()</code> function for one <code>SleepNight</code>:</strong></p>

```ts
@Update
fun update(night: SleepNight)
```

</li>
<li><p><strong>Add a <code>@Query</code> annotation with a function <code>get()</code> that takes a <code>Long</code> key argument and returns a nullable <code>SleepNight</code>:</strong></p>

```ts
@Query
fun get(key: Long): SleepNight?
```

</li>
<li><p><strong>Add a parameter to <code>@Query</code>.</strong></p>
<p>Make it a <code>String</code> that is a SQLite query that selects all columns from the <code>daily_sleep_quality_table WHERE</code> the <code>nightId</code> matches the <code>:key</code> argument.</p>

```ts
@Query("SELECT * from daily_sleep_quality_table WHERE nightId = :key")
fun get(key: Long): SleepNight?
```

</li>
<li><p><strong>Add another <code>@Query</code> with a <code>clear()</code> function and a SQLite query to delete everything from the <code>daily_sleep_quality_table</code>:</strong></p>

```ts
@Query("DELETE FROM daily_sleep_quality_table")
fun clear()
```

</li>
<li><p><strong>Add a <code>@Query</code> to <code>getAllNights()</code>. </strong></p>
<p>The SQLite query should return all columns from the <code>daily_sleep_quality_table</code>, ordered in descending order. Let <code>getAllNights()</code> return a list of <code>SleepNight</code> as <code>LiveData</code>. <code>Room</code> keeps this <code>LiveData</code> updated for us, and we don't have to specify an observer for it.</p>

```ts
@Query("SELECT * FROM daily_sleep_quality_table ORDER BY nightId DESC")
fun getAllNights(): LiveData<List<SleepNight>>
```

</li>
<li><p><strong>Add a <code>@Query</code> to <code>getTonight()</code>. Make the returned <code>SleepNight</code> nullable, so that it can handle if the table is empty.</strong></p>
<p>You get tonight by writing a SQLite query that returns the first element of a list of results ordered by nightId in descending order. Use <code>LIMIT 1</code> to return only one element.</p>

```ts
@Query("SELECT * FROM daily_sleep_quality_table ORDER BY nightId DESC LIMIT 1")
fun getTonight(): SleepNight?
```

</li>
<li><p><strong>Run your app to make sure it has no errors.</strong></p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/Step.02-Exercise-Create-SleepDatabaseDao.zip">Step.02-Exercise-Create-SleepDatabaseDao</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/tree/Step.02-Solution-Create-SleepDatabaseDao">Step.02-Solution-Create-SleepDatabaseDao</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/compare/Step.02-Exercise-Create-SleepDatabaseDao...Step.02-Solution-Create-SleepDatabaseDao">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete the following tasks to create a <code>SleepDatabase</code> DAO.'>

- Create an interface <code>SleepDatabaseDao</code> and annotate it with <code>@Dao</code>.
- Add an annotated <code>insert()</code> method.
- Add an annotated <code>update()</code> method.
- Add an annotated <code>get()</code> method and query.
- Add an annotated <code>clear()</code> method and query.
- Add an annotated <code>getAllNights()</code> method and query.
- Add an annotated <code>getTonight()</code> method and query.
- Verify your app builds and runs without errors.

</text-box>

<p>Great, you have defined how your app is going to interact with the database!</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><p><a target="_blank" href="https://developer.android.com/reference/android/arch/persistence/room/Dao.html">Dao</a></p>
</li>
<li><p><a target="_blank" href="https://developer.android.com/training/data-storage/room/index.html">Room persistence library</a></p>
</li>
</ul>
