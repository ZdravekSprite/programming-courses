---
path: "/lesson03/12-exercise--back-stack-manipulation"
title: "Exercise: Back Stack Manipulation"
---

<youtube id="7w3EEsVCXHo"></youtube>

<p>Now it’s your turn to complete this exercise!</p>
<p><strong>1. For the action connecting the gameFragment to the gameOverFragment, set the pop behavior to popTo gameFragment inclusive</strong></p>
<p>Go to the navigation editor and select the action for navigating from the GameFragment to the GameOverFragment. Select PopTo GameFragment in the attributes pane with the inclusive flag to tell the Navigation component to pop fragments off of the fragment back stack until it finds the GameFragment, and then pop off the gameFragment transaction.  </p>
<p><strong>2. For the action connecting the gameFragment to the gameWonFragment, set the pop behavior to popTo gameFragment inclusive</strong></p>
<p>Do the same thing with action from the GameFragment to the to the GameWonFragment.</p>
<p><strong>3. Create an action connecting the gameWonFragment to the gameFragment and from gameOverFragment to the gameFragment with pop behavior set to popTo titleFragment exclusive</strong></p>
<p>Add an action connecting the gameOverFragment to the gameFragment, and from the gameWonFragment to the game fragment.  For each fragment, Select PopTo TitleFragment with the inclusive flag turned off.</p>
<p><strong>4. Add an onClick Handler for the tryAgain button that navigates to the gameFragment</strong></p>
<p><strong>5. Add an onClick Handler for the nextMatch button that navigates to the gameWonFragment</strong></p>
<p>And you’ve now implemented all of the navigation we’ll do with buttons.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/archive/Step.04-Exercise-Back-Stack-Manipulation.zip">Step.04-Exercise-Back-Stack-Manipulation</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.04-Solution-Back-Stack-Manipulation">Step.04-Solution-Back-Stack-Manipulation</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.04-Exercise-Back-Stack-Manipulation...Step.04-Solution-Back-Stack-Manipulation">git diff</a>.</p>

<text-box variant='learningObjectives' name='Match user expectations with back stack manipulation.  Check the steps below as you implement them to complete this exercise.'>

- For the action connecting the gameFragment to the gameOverFragment, set the pop behavior to popTo gameFragment inclusive.

- For the action connecting the gameFragment to the gameWonFragment, set the pop behavior to popTo gameFragment inclusive.

- Create an action connecting the gameWonFragment to the gameFragment with pop behavior set to popTo titleFragment not inclusive.

- Create an action connecting the gameOverFragment to the gameFragment, with the pop behavior set to popTo titleFragment not inclusive.

- Add an onClick Handler for the tryAgain button that navigates to the gameFragment.

- Add an onClick Handler for the nextMatch button that navigates to the gameWonFragment.

</text-box>

<p>Great! You’ve learned how to manipulate the back stack.</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.04-Solution-Back-Stack-Manipulation">Step.04-Solution-Back-Stack-Manipulation</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.04-Exercise-Back-Stack-Manipulation...Step.04-Solution-Back-Stack-Manipulation">git diff</a></p>
<button>Continue</button>
