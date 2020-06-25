---
path: "/lesson05/08-exercise--create-the-gameviewmodel"
title: "Exercise: Create the GameViewModel"
---

<youtube id="cEzxg8SAJDY"></youtube>

<p>Now it’s your turn to complete this exercise yourself. </p>
<p>In this exercise you'll be creating the <code>GameViewModel</code>, which will hold the UI-related data for your <code>GameFragment</code>.</p>
<p><strong>1. Add lifecycle-extensions gradle dependency:</strong></p>
<p>In the Module: app build.gradle file, add the lifecycle-extensions dependency. You can find the most current version of the dependency <a target="_blank" href="https://developer.android.com/jetpack/androidx/releases/lifecycle#declaring_dependencies">here</a>.</p>

```ts
implementation 'androidx.lifecycle:lifecycle-extensions:2.0.0'
```

<p>Don't forget to sync!</p>
<p><strong>2. Create the <code>GameViewModel</code> class, extending <code>ViewModel</code>:</strong>
Create a new file called <code>GameViewModel.kt</code> in the <code>java/com.example.android.guesstheword/game</code> package. Then in this file, create a class GameViewModel that extends ViewModel:</p>

```ts
class GameViewModel : ViewModel()
```

<p><strong>3. Add init block and override <code>onCleared</code>.  Add log statements to both:</strong> </p>
<p>Make an init block that prints out a log saying “GameViewModel created!”.  Then override onCleared so you can track the lifetime of this ViewModel. You can use the keyboard shortcut Ctrl + O to do the override. Then add the log statement saying "GameViewModel destroyed!" to onCleared.</p>
<p><strong>4.Create and initialize a <code>GameViewModel</code>, using <code>ViewModelProviders</code>.  Add a log statement:</strong> </p>
<p>Back in GameFragment use <code>lateinit</code> to create a field for GameViewModel called <code>viewModel</code>. Then in onCreateView, request the current GameViewModel using the <code>ViewModelProviders</code> class:</p>

```ts
viewModel = ViewModelProviders.of(this).get(GameViewModel::class.java)
```

<p>Add a log statement before calling viewModel, saying "Called ViewModelProviders.of"</p>
<p>Finally run your code, and make sure you see the expected logs. Rotate your device a few times and notice how the <code>GameViewModel</code> does <strong>not</strong> get created again. </p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.01-Exercise-Create-the-GameViewModel.zip">Step.01-Exercise-Create-the-GameViewModel</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.01-Solution-Create-the-GameViewModel">Step.01-Solution-Create-the-GameViewModel</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.01-Exercise-Create-the-GameViewModel...Step.01-Solution-Create-the-GameViewModel">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add lifecycle-extensions gradle dependency.
- Create the GameViewModel class, extending ViewModel.
- Add init and override onCleared.  Add log statements to both.
- Create and initialize a GameViewModel, using ViewModelProviders. Add a log statement.

</text-box>

<p>Great work! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.01-Solution-Create-the-GameViewModel">Step.01-Solution-Create-the-GameViewModel</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.01-Exercise-Create-the-GameViewModel...Step.01-Solution-Create-the-GameViewModel">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/architecture/viewmodel">Documentation - ViewModel documentation</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/ViewModel">Documentation - ViewModel reference documentation</a></li>
<li><a target="_blank" href="https://medium.com/androiddevelopers/viewmodels-a-simple-example-ed5ac416317e">Blog Post - ViewModels: A Simple Example</a></li>
</ul>
