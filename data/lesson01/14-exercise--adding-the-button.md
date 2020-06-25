---
path: "/lesson01/14-exercise--adding-the-button"
title: "Exercise: Adding the Button"
---

<p>In this exercise, you will add a button to your app the same way we have done in the video. </p>
<p><strong>1. Copy the layout XML code below if you haven’t done so already:</strong></p>

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="30sp"
        android:text="1" />

</LinearLayout>
```

<p><strong>2. Add another XML tag for the button:</strong></p>
<p>Make sure you set the text to “Roll” by extracting the string to resources and aligning the button horizontally towards the center of the screen.</p>

```xml
<Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:text="@string/roll" />
```

<p><strong>3. Position all views in LinearLayout:</strong></p>
<p>To do so, set the orientation of the LinearLayout to vertical and use layout_gravity to align the elements so they are centered as expected.</p>

```ts
android:layout_gravity="center_vertical"
android:orientation="vertical"
```

<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/archive/Step.01-Exercise-Adding-the-button.zip">Step.01-Exercise-Adding-the-button</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.01-Solution-Adding-the-button">Step.01-Solution-Adding-the-button</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.01-Exercise-Adding-the-button...Step.01-Solution-Adding-the-button">git diff</a>.</p>
</div>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Copy the initial layout code to your layout file.

- Add the Button with text Roll.

- Make the views display as in our design.

- Extract the Button text to strings.xml.

- Run the app.

</text-box>

Well done!
Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.01-Solution-Adding-the-button">Step.01-Solution-Adding-the-button</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.01-Exercise-Adding-the-button...Step.01-Solution-Adding-the-button">git diff</a>.

Let's move to next step

CONTINUE
