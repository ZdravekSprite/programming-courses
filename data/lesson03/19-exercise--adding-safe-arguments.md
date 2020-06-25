---
path: "/lesson03/19-exercise--adding-safe-arguments"
title: "Exercise: Adding Safe Arguments"
---

<youtube id="ss8I7NglEJY"></youtube>

<p><strong>1. Add safe-args dependency to project Gradle file</strong></p>
<p>SafeArgs is implemented as a Gradle plugin, which means that it is a two-step process to add.  First, we need to add the navigation-save-args-gradle-plugin dependency into the <strong>project</strong> Gradle file, which shows up in the Android view labeled Project: andfun-kotlin-android-trivia.
SC - Project Gradle</p>

```ts
// Adding the safe-args dependency to the project Gradle file
dependencies {
   …
"android.arch.navigation:navigation-safe-args-gradle-plugin:$version_navigation"

   // NOTE: Do not place your application dependencies here; they belong
   // in the individual module build.gradle files
}
```

<p><strong>2. Add safeargs plugin to app Gradle file</strong></p>
<p>At the top of your app Gradle file, after all of the other plugins, add the apply plugin statement with the androidx navigation safeargs plugin.</p>

```ts
// Adding the apply plugin statement for safeargs
apply plugin: 'kotlin-kapt'
apply plugin: 'androidx.navigation.safeargs'
```

<p><strong>3. Switch the GameFragment to use generated NavDirections when navigating to the GameOver and GameWon fragments.</strong></p>
<p>Next, go to the code for the Game fragment.  First, replace the action ID for the game won state with GameFragmentDirections.actionGameFragmentToGameWonFragment().</p>

```ts
// Using directions to navigate to the GameWonFragment
view.findNavController().navigate(GameFragmentDirections.actionGameFragmentToGameWonFragment())
```

<p>Next, do the same thing for the game over state.</p>

```ts
// Using directions to navigate to the GameOverFragment
view.findNavController().navigate(GameFragmentDirections.actionGameFragmentToGameOverFragment())
```

<p><strong>4. Add the numQuestions and numCorrect Integer Arguments using the navigation editor</strong> Next, go to the navigation editor and select the GameWon fragment. Click the little triangle next to arguments to expand the argument section. Add a numQuestions and a numCorrect argument, both with integer type.  If you try to build the app now, you should get two compile errors.</p>

```ts
No value passed for parameter 'numQuestions'
No value passed for parameter 'numCorrect'
```

<p><strong>5. Add the parameters to the gameFragment to gameWonFragment action</strong></p>
<p>Let’s add those parameters!  Click on the error link in the Build tab to go right to the correct place in GameFragment.kt.</p>

```ts
// Adding the parameters to the Action
view.findNavController().navigate(GameFragmentDirections.actionGameFragmentToGameWonFragment(numQuestions, questionIndex))
```

<p><strong>6. Fetch the args and expand into a class in onCreate within the GameWonFragment</strong></p>
<p>So, now it will compile, but we haven’t yet extracted the parameters after the navigation is complete. We’ll use a Toast so we can see them get there successfully.  Move to onCreate in GameWonFragment.kt.</p>
<p><strong>7. Display the arguments using a Toast</strong></p>
<p>We’ll use GameWonFragmentArgs to extract the args class from the Bundle, which we can then display in a Toast.  </p>

```ts
val args = GameWonFragmentArgs.fromBundle(arguments!!)
Toast.makeText(context, "NumCorrect: ${args.numCorrect}, NumQuestions: ${args.numQuestions}", Toast.LENGTH_LONG).show()
```

<p>If Android Studio display an error, you may have to rebuild your project to make GameWonFragmentArgs available.</p>
<p>Run the app and see that the arguments got passed successfully to your GameWonFragment. You do have to win the Trivia game first though.  (If you want, you can change it to a single question game by setting numQuestions to 1 in gameFragment to make things easier)</p>
<p><strong>8. Replace navigation to action IDs with NavDirections in GameOverFragment, GameWonFragment, and TitleFragment</strong></p>
<p>Since we're using safe arguments, let's use NavDirections everywhere.  Replace navigation to an action ID in GameOverFragment, GameWonFragment, and TitleFragment.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/archive/Step.07.Exercise-Adding-Safe-Arguments.zip">Step.07.Exercise-Adding-Safe-Arguments</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.07.Solution-Adding-Safe-Arguments">Step.07.Solution-Adding-Safe-Arguments</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.07.Exercise-Adding-Safe-Arguments...Step.07.Solution-Adding-Safe-Arguments">git diff</a>.</p>


<text-box variant='learningObjectives' name='Now it's your turn to add safe arguments to the GameWonFragment and pass them through from the GameFragment.  Check the steps below as you implement them to complete this exercise.'>

- Add safe-args dependency to project Gradle file.

- Add safeargs plugin to app Gradle file.

- Switch the GameFragment to use generated NavDirections when navigating to the GameOver and GameWon fragments.

- Add the numQuestions and numCorrect Integer Arguments using the navigation editor.

- Add the parameters to the gameFragment to gameWonFragment action.

- Fetch the args and expand into a class in onCreate within the GameWonFragment.

- Display the arguments using a Toast.

- Replace navigation to action IDs with NavDirections in GameOverFragment, GameWonFragment, and TitleFragment.

</text-box>

<p>That’s it! We’re passing arguments with our safety fully engaged!</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.07.Solution-Adding-Safe-Arguments">Step.07.Solution-Adding-Safe-Arguments</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.07.Exercise-Adding-Safe-Arguments...Step.07.Solution-Adding-Safe-Arguments">git diff</a></p>
CONTINUE
