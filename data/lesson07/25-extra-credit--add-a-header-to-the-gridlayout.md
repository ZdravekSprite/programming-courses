---
path: "/lesson07/25-extra-credit--add-a-header-to-the-gridlayout"
title: "Extra Credit: Add a Header to the GridLayout"
---

<youtube id="sC2j-snQHi4"></youtube>

<p><strong>This EXTRA CREDIT exercise builds off the prior exercise.</strong></p>
<p>In this exercise you'll need only a few simple steps to configure your GridLayoutManager to display the header in a row by itself.</p>
<ol>
<li><p><strong>Create a SpanSizeLookup.</strong> </p>
<p>Open <code>SleepTrackerFragment</code> and configure a new <code>SpanSizeLookup</code> object:</p>

```ts
gridLayoutManager.spanSizeLookup = object : GridLayoutManager.SpanSizeLookup() {
}
```

</li>
<li><p><strong>Use Alt-Enter to override the method getSpanSize.</strong></p>
<p>The intention menu can help you override missing methods without a lot of typing.</p>
</li>
<li><p><strong>Return the correct span size for each position.</strong>  </p>
<p>Position 0 should have a span size of 3. The others should have a span size of 1.</p>

```ts
 manager.spanSizeLookup = object : GridLayoutManager.SpanSizeLookup() {
     override fun getSpanSize(position: Int) =  when (position) {
         0 -> 3
         else -> 1
     }
 }
```

<p><br></p>
</li>
<li><p><strong>Run the app again and check out your 3-column header!</strong> </p>
</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.14-Exercise-Add-Header-to-GridLayout.zip">Step.14-Exercise-Add-Header-to-GridLayout</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.14-Solution-Add-Header-to-GridLayout">Step.14-Solution-Add-Header-to-GridLayout</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.14-Exercise-Add-Header-to-GridLayout...Step.14-Solution-Add-Header-to-GridLayout">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these tasks to display a 3 column <code>Header</code> in a row by itself.'>

- In <code>SleepTrackerFragment</code>, create a <code>SpanSizeLookup</code> to return the span size for each position, and assign it to <code>manager.spanSizeLookup</code>.
- Run the app and see that the header now spans 3 columns.

</text-box>

<p>You're done! Give yourself a pat on the back!!</p>
<button>Continue</button>
