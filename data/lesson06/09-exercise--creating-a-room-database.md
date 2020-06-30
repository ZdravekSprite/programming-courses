---
path: "/lesson06/09-exercise--creating-a-room-database"
title: "Exercise: Creating a Room Database"
---

<youtube id="DTD76rEQE6Y"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this step, you'll write the code to create a Room database for your app. </p>
<ol>
<li><p><strong>In <code>SleepDatabase.kt</code>, create an abstract class that extends <code>RoomDatabase</code>.</strong></p>
<p>Annotate the class with <code>@Database</code> and supply the <code>SleepNight</code> for <code>entities</code>, <code>version</code> as <code>1</code>, and <code>exportSchema</code> set to <code>false</code>.</p>

```ts
@Database(entities = [SleepNight::class], version = 1,  exportSchema = false)
abstract class SleepDatabase : RoomDatabase() {
```

</li>
<li><p><strong>Declare an <code>abstract</code> value that returns the <code>SleepDatabaseDao</code>:</strong></p>

```ts
abstract val sleepDatabaseDao: SleepDatabaseDao
```

</li>
<li><p><strong>Below, define a companion object:</strong></p>

```ts
companion object {}
```

</li>
<li><p><strong>Inside the companion object, declare a private nullable variable <code>INSTANCE</code> for the database.</strong></p>
<p>Initialize it to null, and annotate <code>INSTANCE</code> with <code>@Volatile</code>:</p>

```ts
@Volatile
private var INSTANCE: SleepDatabase? = null
```

</li>
<li><p><strong>Below, still inside the companion object, define the <code>getInstance()</code>method with a <code>Context</code> parameter, which will return a reference to the <code>SleepDatabase</code>:</strong></p>

```ts
fun getInstance(context: Context): SleepDatabase {}
```

</li>
<li><p><strong>Inside <code>getInstance()</code> add a <code>synchronized{}</code> block, and pass in <code>this</code>:</strong></p>

```ts
synchronized(this) {}
```

</li>
<li><p><strong>Inside the <code>synchronized</code> block, copy the current value of <code>INSTANCE</code> to a local variable, <code>instance</code>:</strong></p>

```ts
var instance = INSTANCE
```

</li>
<li><p><strong>At the end of the <code>synchronized</code> block, still inside the block, return <code>instance</code>:</strong></p>

```ts
return instance
```

</li>
<li><p><strong>Above the return statement, check if there is already a database stored in <code>instance</code>.</strong></p>
<p>If <code>instance</code> is <code>null</code>, use the database builder to get a database:</p>

```ts
if (instance == null) {}
```

</li>
<li><p><strong>Invoke Room’s <code>databaseBuilder</code> and supply the context that we passed in, the database class, and a name for the database:</strong></p>

```ts
instance = Room.databaseBuilder(
           context.applicationContext,
           SleepDatabase::class.java,
           "sleep_history_database"
           )
```

</li>
<li><p><strong>Add the required migration strategy to the builder:</strong></p>

```ts
.fallbackToDestructiveMigration()
```

</li>
<li><p><strong>And call <code>.build()</code>:</strong></p>

```ts
.build()
```

</li>
<li><p><strong>Assign <code>INSTANCE = instance</code> as the final step inside the <code>if</code> statement:</strong></p>

```ts
INSTANCE = instance
```

</li>
<li><p><strong>Your final code should look like this:</strong></p>

```ts
@Database(entities = [SleepNight::class], version = 1, exportSchema = false)
abstract class SleepDatabase : RoomDatabase() {

abstract val sleepDatabaseDao: SleepDatabaseDao

companion object {

    @Volatile
    private var INSTANCE: SleepDatabase? = null

    fun getInstance(context: Context): SleepDatabase {
        synchronized(this) {
            var instance = INSTANCE

            if (instance == null) {
                instance = Room.databaseBuilder(
                        context.applicationContext,
                        SleepDatabase::class.java,
                        "sleep_history_database"
                )
                        .fallbackToDestructiveMigration()
                        .build()
                INSTANCE = instance
            }
            return instance
        }
     }
  }
}
```

</li>
<li><p><strong>Build and run your code to make sure there are no basic errors.</strong></p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/Step.03-Exercise-Create-RoomDatabase.zip">Step.03-Exercise-Create-RoomDatabase</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/tree/Step.03-Solution-Create-RoomDatabase">Step.03-Solution-Create-RoomDatabase</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/compare/Step.03-Exercise-Create-RoomDatabase...Step.03-Solution-Create-RoomDatabase">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these tasks to create the Room database.'>

- Create an abstract class that extends <code>RoomDatabase</code>.
- Declare an abstract value that returns the <code>SleepDatabaseDao</code>.
- Declare a <code>companion object</code>.
- Declare a private, nullable, <code>@Volatile INSTANCE</code> variable and set it to <code>null</code>.
- Define a <code>getInstance()</code> method with a <code>synchronized</code> block.
- Inside the <code>synchronized</code> block, check whether the database already exists, and if it does not, use <code>Room.databaseBuilder</code> to create it. Return the database <code>instance</code>.
- Verify that your app builds and runs without errors.

</text-box>

<p>Great, you've just completed a key part of your app!</p>
<button>Continue</button>

<p>Android Developer Documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/android/arch/persistence/room/RoomDatabase">Room Database</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/android/arch/persistence/room/Database">Database</a> (annotations)</li>
<li><a target="_blank" you="" can="" use="" href="https://developer.android.com/reference/android/arch/persistence/room/RawQuery">Raw queries</a> with Room</li>
<li><a target="_blank" href="https://developer.android.com/reference/android/arch/persistence/room/RoomDatabase.Builder">RoomDatabase.Builder</a></li>
<li><a target="_blank" href="https://developer.android.com/training/data-storage/room/migrating-db-versions">Migrating Room Databases</a></li>
</ul>
<p>Other documentation and articles</p>
<ul>
<li><a target="_blank" href="https://en.wikipedia.org/wiki/Singleton_pattern">Singleton</a></li>
<li>From Google Developer Experts: <a target="_blank" href="https://developer.android.com/jetpack/docs/guide#separation-of-concerns"> On properly using volatile and synchronized</a></li>
<li><a target="_blank" href="https://kotlinlang.org/docs/reference/object-declarations.html#Companion-Objects">Companion objects</a></li>
<li><a target="_blank" href="https://medium.com/androiddevelopers/understanding-migrations-with-room-f01e04b07929">Understanding Migrations with Room</a></li>
<li><a target="_blank" href="https://medium.com/androiddevelopers/testing-room-migrations-be93cdb0d975">Testing Migrations with Room</a></li>
</ul>
