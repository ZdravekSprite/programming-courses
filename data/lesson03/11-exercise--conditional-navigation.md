---
path: "/lesson03/11-exercise--conditional-navigation"
title: "Exercise: Conditional Navigation"
---

<youtube id="cQtA7qA-TGg"></youtube>

<p>You’ll conditionally navigate to a different fragment based upon whether the player answers all of the questions correctly or not.</p>
<p><strong>1. Add the GameWonFragment and  GameOverFragment to the navigation graph.</strong></p>
<p>Create actions connecting the GameFragment to the GameWonFragment and GameOverFragment. Move to the GameFragment Kotlin file.</p>
<p><strong>2. Navigate from the gameFragment to the gameWonFragment under the “We’ve won!” comment</strong></p>
<p>Under the “We’ve won!” comment, find the nav controller from the view, and then navigate to the action.  To do this, call view.findNavController().navigate( R.id.action_gameFragment_to_gameWonFragment).</p>

```ts
// We've won!  Navigate to the gameWonFragment.
view.findNavController()
   .navigate(R.id.action_gameFragment_to_gameWonFragment)
```

<p><strong>3. Navigate from the gameFragment to the gameOverFragment under the “GameOver” comment</strong></p>
<p>Under the “GameOver” comment, call</p>

```ts
view.findNavController().navigate(R.id.action_gameFragment_to_gameOverFragment)
```

```ts
// Game over! A wrong answer sends us to the gameOverFragment.
view.findNavController().
   navigate(R.id.action_gameFragment_to_gameOverFragment)
```

<p>Now the game is more functional.  When all the questions are answered correctly, the gameWonFragment is displayed.  An incorrect answer causes the display of the GameOverFragment.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/archive/Step.03-Exercise-Conditional-Navigation.zip">Step.03-Exercise-Conditional-Navigation</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.03-Solution-Conditional-Navigation">Step.03-Solution-Conditional-Navigation</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.03-Exercise-Conditional-Navigation...Step.03-Solution-Conditional-Navigation">git diff</a>.</p>

<text-box variant='learningObjectives' name='You it's your turn to implement Navigation.  Check the steps below as you implement them to complete this exercise.'>

- Add the GameWonFragment and the GameOverFragment to the navigation graph.

- Navigate from the gameFragment to the gameWonFragment under the “We’ve won!” comment.

- Navigate from the gameFragment to the gameOverFragment under the “GameOver” comment.

</text-box>

<p>Great!  Now the user can win and lose the trivia game.</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.03-Solution-Conditional-Navigation">Step.03-Solution-Conditional-Navigation</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.03-Exercise-Conditional-Navigation...Step.03-Solution-Conditional-Navigation">git diff</a></p>
<button>Continue</button>
