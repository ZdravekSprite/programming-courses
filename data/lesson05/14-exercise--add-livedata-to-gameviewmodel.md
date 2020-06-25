---
path: "/lesson05/14-exercise--add-livedata-to-gameviewmodel"
title: "Exercise: Add LiveData to GameViewModel"
---

<youtube id="FSVaha1P8Rk"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this exercise you'll add your first LiveData.</p>
<p><strong>1. Wrap <code>word</code> and <code>score</code> in MutableLiveData:</strong> </p>
<p>In GameViewModel, set up <code>word</code> and <code>score</code> as MutableLiveData. <code>word</code> should be a String and <code>score</code> should be a integer.</p>
<p>For example:
<code>val score = MutableLiveData&lt;Int&gt;()</code></p>
<p><strong>2. Change references to <code>score</code> and <code>word</code> to <code>score.value</code> and <code>word.value</code> and add the required null safety checks:</strong></p>
<p>Check the onSkip() and onCorrect() methods and change references.  Add null safety checks, then call the minus and plus functions, respectively. For example:</p>

```ts
fun onSkip() {
    score.value = (score.value)?.minus(1)
    nextWord()
}
```

<p><strong>3. Initialize score.value to 0.</strong></p>
<p><strong>4. Set up the observation relationship for the <code>score</code> and <code>word</code> LiveDatas:</strong></p>
<p>Move over to GameFragment. UI controllers are where you'll set up the observation relationship. Get the LiveData from your view model and call the <code>observe</code> method.  Make sure to pass in <code>this</code> and then an observer lambda.  Here's the code to set up an observation relationship for score. This should be in GameFragment.onCreate:</p>

```ts
viewModel.score.observe(this, Observer { newScore ->
})
```

<p><strong>5. Move UI update code to your observers and delete unnecessary code:</strong></p>
<p>You can now move the code to update the score TextView and the word TextView to your Observers. For example, your completed observer for score LiveData should look like this:</p>


```ts
viewModel.score.observe(this, Observer { newScore ->
    binding.scoreText.text = newScore.toString()
})
```

<p>Once you've done this, you can delete updateWordText and updateScoreText and any references to them - you shouldn't need them!</p>
<p><strong>6. Add a null safety check when passing <code>currentScore</code> in the <code>gameFinished</code> method:</strong></p>
<p>viewModel.score.value can possibly be null, so add a null safety check in the gameFinished method:</p>

```ts
val currentScore = viewModel.score.value ?: 0
```

<p>As always, run your code. If you set up the observation relationships correctly, it should compile and work exactly the same. By using LiveData, your code is less error prone, because you are ensured that whenever the score or word changes, the UI will update to match.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.03-Exercise-Add-LiveData-to-GameViewModel.zip">Step.03-Exercise-Add-LiveData-to-GameViewModel</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.03-Solution-Add-LiveData-to-GameViewModel">Step.03-Solution-Add-LiveData-to-GameViewModel</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.03-Exercise-Add-LiveData-to-GameViewModel...Step.03-Solution-Add-LiveData-to-GameViewModel">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Wrap word and score in MutableLiveData.
- Change references to score and word to score.value and word.value and add the required null safety checks.
- Initialize score.value to 0.
- Set up the observation relationship for the score and word LiveDatas.
- Move UI update code to your observers and delete unnecessary code.
- Add a null safety check when passing currentScore in the gameFinished method.

</text-box>

<p>You did it! Congratulations! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.03-Solution-Add-LiveData-to-GameViewModel">Step.03-Solution-Add-LiveData-to-GameViewModel</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.03-Exercise-Add-LiveData-to-GameViewModel...Step.03-Solution-Add-LiveData-to-GameViewModel">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/architecture/livedata">Documentation - LiveData Overview</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/LiveData">Documentation - LiveData reference documentation </a></li>
</ul>
