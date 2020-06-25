---
path: "/lesson05/16-exercise--add-livedata-encapsulation-to-gameviewmodel"
title: "Exercise: Add LiveData Encapsulation to GameViewModel"
---

<youtube id="CaKnDHAXrmw"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>Let's <a href="https://en.wikipedia.org/wiki/Encapsulation_(computer_programming))" target="_blank">encapsulate</a> our variables as LiveData in GameViewModel. The point of this exercise is to not expose <a target="_blank" href="https://developer.android.com/reference/android/arch/lifecycle/MutableLiveData">MutableLiveData</a> outside of the view model.</p>
<p><strong>1. Make internal and external versions of <code>word</code> and <code>score</code>:</strong> </p>
<p>Open up GameViewModel. The internal version should be a MutableLiveData, have an underscore in front of its name, and be private. The underscore is our convention for marking the variable as the internal version of a variable.</p>
<p>The external version should be a LiveData and <strong>not</strong> have an underscore in front of its name. </p>
<p>For example, here’s the internal and external version of <code>score</code>:</p>

```ts
// internal
private val _score = MutableLiveData<Int>()
//external
val score: LiveData<Int>
```

<p><strong>2. Make a backing property for the external version that returns the internal MutableLiveData as a LiveData:</strong></p>
<p><a target="_blank" href="https://kotlinlang.org/docs/reference/properties.html#getters-and-setters">Kotlin automatically makes getters and setters for your fields</a>. If you want to override the getter for <code>score</code>, you can do so using a <a target="_blank" href="https://kotlinlang.org/docs/reference/properties.html#backing-properties">backing property</a>. You've actually already defined your backing properties (<code>_score</code> and <code>_word</code>).  Now you can take your public versions of the variables (<code>score</code> and <code>word</code>) and override <code>get</code> to return the backing properties. </p>
<p>For example, here’s the full encapsulated <code>score</code>:</p>

```ts
private val _score = MutableLiveData<Int>()
val score: LiveData<Int>
    get() = _score
```

<p>By making the return type <strong>LiveData</strong> rather than MutableLiveData, you've exposed only <code>score</code> and <code>word</code> as LiveData.</p>
<p><strong>3. In the view model, use the internal, mutable versions of <code>score</code> and <code>word</code>:</strong></p>
<p>In GameViewModel, update the code so that you use the mutable versions, <code>_score</code> and <code>_word</code>, throughout the view model. When you’re finished, make sure to run your code!</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.04-Exercise-Add-LiveData-Encapsulation.zip">Step.04-Exercise-Add-LiveData-Encapsulation</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.04-Solution-Add-LiveData-Encapsulation">Step.04-Solution-Add-LiveData-Encapsulation</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.04-Exercise-Add-LiveData-Encapsulation...Step.04-Solution-Add-LiveData-Encapsulation">git diff</a>.</p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Make internal and external versions of word and score.
- Make a backing property for the external version that returns the internal MutableLiveData as a LiveData.
- In the view model, use the internal, mutable versions of score and word.

</text-box>

<p>You've encapsulated your  LiveData for score and word! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.04-Solution-Add-LiveData-Encapsulation">Step.04-Solution-Add-LiveData-Encapsulation</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.04-Exercise-Add-LiveData-Encapsulation...Step.04-Solution-Add-LiveData-Encapsulation">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)"> Wikipedia - Encapsulation</a></li>
<li><a target="_blank" href="https://kotlinlang.org/docs/reference/properties.html#backing-properties">Documentation - Backing properties</a></li>
<li><a target="_blank" href="https://developer.android.com/kotlin/style-guide#backing-properties">Documentation - Backing properties in Android Style Guide</a></li>
</ul>
