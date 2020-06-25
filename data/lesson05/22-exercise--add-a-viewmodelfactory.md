---
path: "/lesson05/22-exercise--add-a-viewmodelfactory"
title: "Exercise: Add a ViewModelFactory"
---

<youtube id="rICbM_Xh5I4"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this exercise you'll pass data into a ViewModel. You'll create a <a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/ViewModelProvider.Factory.html">view model factory</a> that allows you to define a custom constructor for a ViewModel that gets called when you use ViewModelProviders.</p>
<p>You can learn more about the factory pattern <a target="_blank" href="https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)">here</a>.</p>
<p><strong>1. Create the ScoreViewModel class and have it take in an integer constructor parameter called <code>finalScore</code>:</strong> </p>
<p>Make sure to create the ScoreViewModel class file in the same package as the ScoreFragment.</p>
<p><strong>2. Copy over ScoreViewModelFactory:</strong></p>
<p>Create ScoreViewModel factory in the same package as the ScoreFragment. You can use this code later if you ever need to create a view model factory.</p>
<p>Copy the following code:</p>

```ts
class ScoreViewModelFactory(private val finalScore: Int) : ViewModelProvider.Factory {
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(ScoreViewModel::class.java)) {
            // TODO Construct and return the ScoreViewModel
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}
```

<p>Note that the <strong>constructor</strong> of your view model factory should take any parameters you want to pass into your ScoreViewModel. In this case, it takes in the final score.</p>
<p><strong>3. In the overridden create method, construct and return an instance of <code>ScoreViewModel</code>, passing in <code>finalScore</code>:</strong></p>
<p>The create method's purpose is to create and return your view model. So you should construct a new ScoreViewModel and return it. You'll also need to deal with the generics, so the statement will be:</p>

```ts
return ScoreViewModel(finalScore) as T
```

<p><strong>4. Create and construct a ScoreViewModelFactory:</strong></p>
<p>In ScoreFragment, create viewModelFactory from ScoreViewModelFactory. For example:</p>

```ts
viewModelFactory = ScoreViewModelFactory(<final score here>)
```

<p>Remember, you need to pass in the final score. It gets passed through with the ScoreFragmentArgs bundle when you navigate.</p>
<p><strong>5. Create ScoreViewModel by using ViewModelProviders.of as usual, except you’ll also pass in your ScoreViewModelFactory:</strong></p>

```ts
ViewModelProviders.of(this, viewModelFactory).get(ScoreViewModel::class.java)
```

<p>By passing in the ViewModel factory, you're telling ViewModelProviders to use this factory to create ScoreViewModel.</p>
<p><strong>6. Add a LiveData for the score and the play again event:</strong></p>
<p>Create LiveData for <code>score</code> and <code>eventPlayAgain</code> using the best practices for encapsulation and event handling that you've learned. Make sure to initialize <code>score</code>’s value to the <code>finalScore</code> you pass into the view model.</p>
<p><strong>7. Convert ScoreFragment to properly observe and use ScoreViewModel to update the UI:</strong></p>
<p>In ScoreFragment, add observers for <code>score</code> and <code>eventPlayAgain</code> LiveData. Use them to update the UI.</p>
<p>Make sure to run your app, and confirm that everything is working!</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.07-Exercise-Add-a-ViewModelFactory.zip">Step.07-Exercise-Add-a-ViewModelFactory</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.07-Solution-Add-a-ViewModelFactory">Step.07-Solution-Add-a-ViewModelFactory</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.07-Exercise-Add-a-ViewModelFactory...Step.07-Solution-Add-a-ViewModelFactory">git diff.</a></p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Create the ScoreViewModel class and have it take an integer constructor parameter called finalScore.
- Copy over ScoreViewModelFactory.
- In the overridden create method, construct an instance of ScoreViewModel, passing in finalScore.
- Create and construct a ScoreViewModelFactory.
- Create ScoreViewModel by using ViewModelProviders.of as usual, except you’ll also pass in your ScoreViewModelFactory.
- Add a LiveData for the score and the play again event.
- Convert ScoreFragment to properly observe and use ScoreViewModel to update the UI.

</text-box>

<p>Nice work! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.07-Solution-Add-a-ViewModelFactory">Step.07-Solution-Add-a-ViewModelFactory</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.07-Exercise-Add-a-ViewModelFactory...Step.07-Solution-Add-a-ViewModelFactory">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/ViewModelProvider.Factory.html">Documentation - ViewModelProvider.Factory</a></li>
<li><a target="_blank" href="https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)">Wikipedia - Factory pattern</a></li>
</ul>
