---
path: "/lesson05/24-exercise--add-livedata-data-binding"
title: "Exercise: Add LiveData Data Binding"
---

<youtube id="VvIUJDHX5Yw"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this step, you'll use <a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/architecture#livedata">LiveData to auto-magically update your layout via data binding</a>. This will allow you to remove all of your observation lambdas for simple UI updates.</p>
<p><strong>1. For <code>score_text</code> and <code>word_text</code> use the LiveData from GameViewModel to set the text attribute:</strong> </p>
<p>Open up the game_fragment layout. You can use the word LiveData to set the text for the word_text and score_text TextViews. For example, for word_text:</p>

```ts
android:text="@{@string/quote_format(gameViewModel.word)}"
```

<p>Notice we used quote_format from the string resource to add quotes to each word.</p>
<p>Do the same for score_text using the score_format from the string resources.</p>
<p><strong>2. Call binding.setLifecycleOwner to make the data binding lifecycle aware:</strong></p>
<p>Open GameFragment. To make your data binding lifecycle aware and to have it play nicely with LiveData, you need to call binding.setLifecycleOwner. You must pass in <code>this</code> -- which refers to GameFragment. This looks like:</p>

```ts
binding.setLifecycleOwner(this)
```

<p><strong>3. Remove the score and word observers:</strong></p>
<p>Note that we'll fix the <code>currentTime</code> observation in the next exercise. Once you've removed the score and word observers, you should be able to run your app and see that the score and word text still updates.</p>
<p>Now it's time to update the Score screen.</p>
<p><strong>4. Use the LiveData from ScoreViewModel to set the score_text text attribute:</strong></p>
<p>This is very similar to what you just did with <code>word_text</code> and <code>score_text</code>. Repeat in score_fragment.xml. Note that since score is a an Int, you'll need to use <code>String.valueOf()</code> in your binding expression to convert the Int to a String.</p>
<p><strong>5. Call binding.setLifecycleOwner and remove the score observer.</strong></p>
<p>Repeat steps 2 and 3 in the ScoreFragment code. Run your app again to make sure it compiles and runs.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.09-Exercise-Add-LiveData-Data-Binding.zip">Step.09-Exercise-Add-LiveData-Data-Binding</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.09-Solution-Add-LiveData-Data-Binding">Step.09-Solution-Add-LiveData-Data-Binding</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.09-Exercise-Add-LiveData-Data-Binding...Step.09-Solution-Add-LiveData-Data-Binding">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- For score_text and word_text use the LiveData from GameViewModel to set the text attribute.
- Call binding.setLifecycleOwner, then remove the score and word observers.
- Use the LiveData from ScoreViewModel to set the score_text text attribute.

</text-box>

<p>Great work! Almost done! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.09-Solution-Add-LiveData-Data-Binding">Step.09-Solution-Add-LiveData-Data-Binding</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.09-Exercise-Add-LiveData-Data-Binding...Step.09-Solution-Add-LiveData-Data-Binding">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/architecture#livedata">Documentation - Use LiveData to notify the UI about data changes</a></li>
<li><a target="_blank" href="https://developer.android.com/guide/topics/resources/string-resource#formatting-strings">Documentation - Formatting strings </a></li>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/expressions#resources">Documentation - Using resources with data binding </a></li>
</ul>
