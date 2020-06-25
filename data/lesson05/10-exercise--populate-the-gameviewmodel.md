---
path: "/lesson05/10-exercise--populate-the-gameviewmodel"
title: "Exercise: Populate the GameViewModel"
---

<youtube id="Hk7O7SZEcLk"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>Let's move code from the GameFragment over to the GameViewModel!</p>
<p><strong>1. Move the <code>word</code>, <code>score</code>, and <code>wordList</code> variables to the <code>GameViewModel</code>:</strong> </p>
<p>In the GameFragment find the <code>word</code>, <code>score</code>, and <code>wordList</code> variables, and move them to GameViewModel. Make sure you delete the versions of these variables in GameFragment.  Remember, <em>do not move the binding</em>!  This is because the binding contains references to views.</p>
<p><strong>2. Move methods <code>resetList</code>, <code>nextWord</code>, <code>onSkip</code>, and <code>onCorrect</code> to the <code>GameViewModel</code>:</strong></p>
<p>In GameFragment, find each of the methods: <code>resetList</code>, <code>nextWord</code>, <code>onSkip</code> and <code>onCorrect</code>.  Move them to GameViewModel.</p>
<p>Remove the private modifier <code>onSkip</code> and <code>onCorrect</code> methods so they can be called from the GameFragment.</p>
<p><strong>3. Move the initialization methods to the <code>GameViewModel</code>:</strong></p>
<p>Initialization in the GameFragment involved calling <code>resetList</code> and <code>nextWord</code>.  Now that they are both in the GameViewModel, call them in the GameViewModel when it is created.</p>
<p><strong>4. Update the onClickListeners to refer to call methods in the ViewModel, and then update the UI:</strong></p>
<p>Now that onSkip and onCorrect have been moved to the GameViewModel, the OnClickListeners in the GameFragment, refer to method that aren't there.  Update the OnClickListeners to call the methods in the GameViewModel. Then in the OnClickListeners, update the score and word texts so that they have the newest data.</p>
<p><strong>5. Update the methods to get <code>word</code> and <code>score</code> from the <code>viewModel</code>:</strong></p>
<p>In the GameViewModel, remove the private modifier from <code>word</code> and <code>score</code>.</p>
<p>In the GameFragment, update <code>gameFinished</code>, <code>updateWordText</code> and <code>updateScoreText</code> to get the data from the gameViewModel.</p>
<p><strong>6. Do final cleanup in the <code>GameViewModel</code>:</strong></p>
<p>Once you've copied over the variables and methods, remove any code that refers to the GameFragment.  In the GameViewModel, comment out the reference to <code>gameFinished</code> in <code>nextWord</code>. You'll deal with this later.  You can also clean up the log statements from the prior step.</p>
<p>Now run your app, go to the game screen, and change the score. Then rotate your device. Notice how the word and score data is preserved in the view model and no longer resets itself! </p>
<p>Note: The game does <em>not</em> finish because we don’t know how to handle the gameFinished() method. It needs to run from GameFragment because it contains navigation code, but the game finishing is triggered from the view model. We’ll resolve this soon.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.02-Exercise-Populate-the-GameViewModel.zip">Step.02-Exercise-Populate-the-GameViewModel</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.02-Solution-Populate-the-GameViewModel">Step.02-Solution-Populate-the-GameViewModel</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.02-Exercise-Populate-the-GameViewModel...Step.02-Solution-Populate-the-GameViewModel">git diff</a>.</p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Move the word, score, and wordList variables to the GameViewModel.
- Move methods resetList, nextWord, onSkip, and onCorrect to the GameViewModel.
- Move the initialization methods to the GameViewModel.
- Update the onClickListeners to refer to call methods in the ViewModel, and then update the UI.
- Update the methods to get word and score from the ViewModel.
- Do final cleanup in the GameViewModel.

</text-box>

<p>Nice job! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.02-Solution-Populate-the-GameViewModel">Step.02-Solution-Populate-the-GameViewModel</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.02-Exercise-Populate-the-GameViewModel...Step.02-Solution-Populate-the-GameViewModel">git diff</a>.</p>
<button>Continue</button>
