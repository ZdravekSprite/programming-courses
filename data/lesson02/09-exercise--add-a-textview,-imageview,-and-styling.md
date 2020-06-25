---
path: "/lesson02/09-exercise--add-a-textview,-imageview,-and-styling"
title: "Exercise: Add a TextView, ImageView, and Styling"
---
<youtube id="JRiiAWYyVwQ"></youtube>

<h3 id="android-developer-documentation-">Android Developer Documentation:</h3>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/android/widget/ImageView">ImageView</a></li>
</ul>

<h3>Quiz Question</h3>
<p>Match each term with its correct definition.</p>
<h3>Submit to check your answer choices!</h3>
<h3>Term</h3>   <h3>Definition</h3>
<p>ImageView</p>    <p>A view for displaying images.</p>
<p>contentDescription</p>   <p>Property of ImageView used by screen readers to describe an image to the user.</p>
<p>drawable</p> <p>Resource type that can be displayed in an ImageView.</p>
<p>Right-click &gt; Refactor &gt; Rename</p>    <p>Always refactor when renaming a view or resource so that all references are changed in the code.</p>
<button>Submit</button>

<p>Now it’s your turn to complete this exercise.</p>
<p>You are going to do the following with AboutMe:</p>
<ol>
<li>Add a TextView. Give it an id of name_text. Set the width to match_parent and the height to wrap_content.  Add a top margin of 16dp and top padding of 8dp. Set the text to your name.</li>
<li>Style the TextView. Add the roboto font to your project and use it for the TextView. Set the text size to 20sp and change the text alignment to center.</li>
<li>Add the textColor to @android:color/black. </li>
<li>Create a style and extract all common resources as shown below.</li>
<li>Add an ImageView below the TextView. Choose the <strong>btn_star_big_on</strong> resource as the image. Set the id to star_image and set the width to match_parent and the height to wrap_content.</li>
<li>Get rid of the warning by adding a contentDescription; remember to extract it as a string resource.</li>
<li>Run your app.</li>
</ol>
<p>Here is how your style and extracted dimensions should look.</p>

```xml
<style name="NameStyle">
   <item name="android:fontFamily">@font/roboto</item>
   <item name="android:paddingTop">@dimen/small_padding</item>
   <item name="android:textSize">@dimen/text_size</item>
   <item name="android:textColor">@android:color/black</item>
   <item name="android:layout_marginTop">@dimen/layout_margin</item>
</style>
```

```xml
<resources>
   <dimen name="text_size">20sp</dimen>
   <dimen name="small_padding">8dp</dimen>
   <dimen name="layout_margin">16dp</dimen>
</resources>
```

<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/archive/Step.02-Exercise-Add-TextView-ImageView-Style.zip">Step.02-Exercise-Add-TextView-ImageView-Style</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/tree/Step.02-Solution-Add-TextView-ImageView-Style">Step.02-Solution-Add-TextView-ImageView-Style</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/compare/Step.02-Exercise-Add-TextView-ImageView-Style...Step.02-Solution-Add-TextView-ImageView-Style">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add and style a TextView, and extract string resources.

- Connect the layout to the activity using setContentView().

- Create NameStyle, and extract all dimensions resources.

- Add ImageView with star image.

</text-box>

<p>Great work!</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/tree/Step.02-Solution-Add-TextView-ImageView-Style">Step.02-Solution-Add-TextView-ImageView-Style</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/compare/Step.02-Exercise-Add-TextView-ImageView-Style...Step.02-Solution-Add-TextView-ImageView-Style">diff</a></p>
