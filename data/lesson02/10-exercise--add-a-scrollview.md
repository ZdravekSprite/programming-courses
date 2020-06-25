---
path: "/lesson02/10-exercise--add-a-scrollview"
title: "Exercise: Add a ScrollView"
---
<youtube id="INsCzEz_cJY"></youtube>

<h3 id="android-developer-documentation-">Android Developer Documentation:</h3>
<ul>
<li><a target="_blank" href="https://developer.android.com/guide/topics/ui/declaring-layout">Layouts</a></li>
<li><a target="_blank" href="https://developer.android.com/guide/topics/ui/layout/linear">LinearLayout</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/android/widget/ScrollView">ScrollView</a></li>
</ul>

<p>Now it’s your turn to complete this exercise.</p>
<ol>
<li>Add a ScrollView with a TextView showing information about yourself to the layout.</li>
<li>Style the TextView with NameStyle, and add additional styling to separate the scrollable text from the edges of the screen.</li>
<li>Add some spacing between the lines using the lineSpacingMultiplier property to the TextView.

```ts
android:lineSpacingMultiplier="1.2"/>
```

</li>
</ol>

<p>The "Extract dimension resource" menu option is not available for this attribute, so you will have to add it to dimens.xml by hand.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/archive/Step.03-Solution-Add-ScrollView.zip">Step.03-Exercise-Add-ScrollView</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/tree/Step.03-Solution-Add-ScrollView">Step.03-Solution-Add-ScrollView</a> or, using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/compare/Step.03-Exercise-Add-ScrollView...Step.03-Solution-Add-ScrollView">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add ScrollView.

- Add long text bio inside the ScrollView.

</text-box>

<p>Experiment with adding an ImageView above the TextView inside the ScrollView. When you run the app, this image, unlike the star, will scroll out of view as the text scrolls up. </p>
<p>Hint: You will need to wrap the two scrollable views into a LinearLayout inside the ScrollView. ScrollView &gt; LinerLayout &gt; ImageView + TextView</p>
<p>Below is a skeleton code version for this challenge.</p>
<p>The important thing to remember is that since ScrollView can only have one child, you have to wrap that ImageView and the TextView into a LinearLayout.</p>
<p>There is no solution code provided for this challenge, but the skeleton code below gives you the expected view hierarchy to use.</p>
<p>SKELETON code of view hierarchy:</p>


```xml
<ScrollView
   android:layout_width="match_parent"
   android:layout_height="match_parent">

   <LinearLayout
       android:layout_width="match_parent"
       android:layout_height="wrap_content"
       android:orientation="vertical">

       <ImageView
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           app:srcCompat="@android:drawable/ic_menu_view" />

       <TextView
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:text="@string/some_long_text"/>

   </LinearLayout>

</ScrollView>
```
