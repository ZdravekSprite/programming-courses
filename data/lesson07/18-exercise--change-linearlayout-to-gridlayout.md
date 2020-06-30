---
path: "/lesson07/18-exercise--change-linearlayout-to-gridlayout"
title: "Exercise: Change LinearLayout to GridLayout"
---

<youtube id="-IhExBcqdKY"></youtube>

<p>Now it’s your turn to complete this exercise yourself!</p>
<p>In this exercise you'll take the RecyclerView you finished in the last exercise and update it display using a GridLayoutManager.</p>
<p>When you've completed this exercise your app will display the data using a grid.</p>
<ol>
<li><p><strong>In <code>fragment_sleep_tracker.xml</code>, remove <code>LinearLayoutManager</code>.</strong> </p>
<p>Delete the line <code>app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"</code>.
<br><br></p>
</li>
<li><p><strong>In <code>SleepTrackerFragment</code> <code>onCreateView</code>, create a new <code>GridLayoutManager</code> and bind it to the <code>RecyclerView</code>.</strong></p>
<p>Access the <code>RecyclerView</code> in the binding object using <code>binding.sleepList</code>.</p>

```ts
val manager = GridLayoutManager(activity, 3)
binding.sleepList.layoutManager = manager
```

<p><br></p>
</li>
<li><p><strong>In <code>list_item_sleep_night</code>, delete the <code>sleep_length</code> <code>TextView</code> because it is not used in the new design.</strong>
<br><br></p>
</li>
<li><p><strong>In <code>list_item_sleep_night</code>, edit the <code>quality_string</code> TextView to display to place it underneath the ImageView so it displays correctly in the <code>GridView</code>.</strong></p>
<p>For a challenge, you can update the XML yourself to create the layout in the design surface view below:</p>
</li>
</ol>
</div>

<img src="screen-shot-2019-01-08-at-5.52.07-pm.png" alt="" width="1174px">

<p> Your updated layout should look like this:</p>

```ts
<?xml version="1.0" encoding="utf-8"?>

<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <data>

        <variable
            name="sleep"
            type="com.example.android.trackmysleepquality.database.SleepNight" />

    </data>

    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical">

        <ImageView
            android:id="@+id/quality_image"
            android:layout_width="@dimen/icon_size"
            android:layout_height="60dp"
            android:layout_marginStart="16dp"
            android:layout_marginTop="8dp"
            android:layout_marginBottom="8dp"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent"
            tools:srcCompat="@drawable/ic_sleep_5"
            app:sleepImage="@{sleep}"/>

        <TextView
            android:id="@+id/quality_string"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginTop="8dp"
            app:layout_constraintEnd_toEndOf="@+id/quality_image"
            app:layout_constraintStart_toStartOf="@+id/quality_image"
            app:layout_constraintTop_toBottomOf="@+id/quality_image"
            app:sleepQualityString="@{sleep}"/>

    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```

<p><br></p>
<ol start="5">
<li><p><strong>Build and run the app. You should now see the data in your new grid layout!</strong></p>
<p>Try adding an item by starting sleep and see the animation for yourself!</p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.10-Exercise-Replace-LinearLayout-with-GridLayout.zip">Step.10-Exercise-Replace-LinearLayout-with-GridLayout</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.10-Solution-Replace-LinearLayout-with-GridLayout">Step.10-Solution-Replace-LinearLayout-with-GridLayout</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.10-Exercise-Replace-LinearLayout-with-GridLayout...Step.10-Solution-Replace-LinearLayout-with-GridLayout">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete the tasks below to replace the <code>LinearLayoutManager</code> with a <code>GridLayoutManager</code>.'>

- In <code>fragment_sleep_tracker</code>, remove the <code>layoutManager</code> from the <code>RecyclerView</code>.
- In <code>SleepTrackerFragment</code>, create a 3 column <code>GridLayoutManager</code> and bind it to the <code>RecyclerView</code>.
- In <code>list_item_sleep_night</code>, delete sleep_length TextView.
- In <code>list_item_sleep_night</code>, move <code>quality_string</code> underneath the <code>ImageView</code>.
- Build your app to see your new GridLayout!

</text-box>

<p>Congrats! Make sure you check out the animation when you start a new night of sleep.</p>
<button>Continue</button>

<p>Reference Documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/guide/topics/ui/layout/recyclerview#customizing">Customize Your RecyclerView</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/android/support/v7/widget/GridLayout">Customize Your GridLayout</a></li>
</ul>
