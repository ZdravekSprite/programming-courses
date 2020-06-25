---
path: "/lesson05/23-exercise--add-viewmodel-to-data-binding"
title: "Exercise: Add ViewModel to Data Binding"
---

<youtube id="gd2_OZN1pU4"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this exercise, you're going to use data binding in the layout xml code to communicate directly with the ViewModel. In particular, we're going to tell the ViewModel when various buttons are clicked!</p>
<p><strong>1. Add a GameViewModel data binding variable to GameFragment layout:</strong> </p>
<p>In the layout xml file for the GameFragment (game_fragment.xml), create a <code>gameViewModel</code> variable inside the layout. For example:</p>

```ts
<data>
    <variable
        name="gameViewModel"
        type="com.example.android.guesstheword.screens.game.GameViewModel" />
</data>
```

<p>You should rebuild the code so all of the generated data binding code is regenerated.</p>
<p><strong>2. In the GameFragment layout, use the view model variable and data binding to handle clicking:</strong></p>
<p>In xml, you can define an <code>onClick</code> attribute for buttons. Using data binding, you can define a <a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/expressions">data binding expression</a> which is a <a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/expressions#listener_bindings">Listener binding</a>. Essentially this means that you define the OnClickListener in the xml. You also have your view model variable available via data binding. So to create an onClick attribute that will call <code>onSkip</code> in the view model, you can use:</p>

```ts
android:onClick="@{() -> gameViewModel.onSkip()}"
```

<p>Update both the Correct and Skip buttons to call the appropriate methods in the view model when clicked.</p>
<p><strong>3. Pass the GameViewModel into the data binding:</strong></p>
<p>In the GameFragment.onCreate, pass in the view model to the GameFragmentBinding.</p>

```ts
binding.gameViewModel = viewModel
```

<p>Now you can (and should) <strong>remove</strong> the OnClickListener setup from the GameFragment. Everything should work just as before.</p>
<p><strong>4. Add a ScoreViewModel data binding variable to ScoreFragment layout:</strong></p>
<p>In score_fragment.xml, repeat the process you used for game_fragment.xml in Step 1.</p>
<p><strong>5. In the ScoreFragment layout, use the view model variable and data binding to handle clicking.</strong></p>
<p><strong>6. Pass the ScoreViewModel into the data binding and remove OnClickListener setup for <code>playAgainButton</code>.</strong></p>
<p>Now instead of defining OnClickListener code in the fragment, you're using data binding. Run your app and see how all the buttons still work. </p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.08-Exercise-Add-ViewModel-to-Data-Binding.zip">Step.08-Exercise-Add-ViewModel-to-Data-Binding</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.08-Solution-Add-ViewModel-to-Data-Binding">Step.08-Solution-Add-ViewModel-to-Data-Binding</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.08-Exercise-Add-ViewModel-to-Data-Binding...Step.08-Solution-Add-ViewModel-to-Data-Binding">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add a GameViewModel data binding variable to GameFragment layout.
- In the GameFragment layout, use the view model variable and data binding to handle clicking.
- Pass the GameViewModel into the data binding.
- Add a ScoreViewModel data binding variable to ScoreFragment layout.
- In the ScoreFragment layout, use the view model variable and data binding to handle clicking.
- Pass the ScoreViewModel into the data binding and remove OnClickListener setup for playAgainButton.

</text-box>

<p>Excellent! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.08-Solution-Add-ViewModel-to-Data-Binding">Step.08-Solution-Add-ViewModel-to-Data-Binding</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.08-Exercise-Add-ViewModel-to-Data-Binding...Step.08-Solution-Add-ViewModel-to-Data-Binding">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/expressions">Documentation - Layouts and binding expressions</a></li>
<li><a target="_blank" href="(https://developer.android.com/topic/libraries/data-binding/expressions#listener_bindings">Documentation - Listener bindings</a></li>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/architecture#viewmodel">Documentation - Use ViewModel to manage UI-related data</a></li>
</ul>
