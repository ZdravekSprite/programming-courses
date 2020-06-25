---
path: "/lesson01/18-exercise--change-the-text"
title: "Exercise: Change the Text"
---
<youtube id="7lYP9b2Ctps"></youtube>
<p>In this exercise, you will make your app show a random number in the result_text TextView.</p>
<p><strong>1. Assign an id to TextView in the layout:</strong></p>

```ts
android:id="@+id/result_text"
```

<p><strong>2. Remove the Toast and create a method called rollDice:</strong></p>
<p>You can do this by adding the following:</p>

```ts
rollButton.setOnClickListener {
    rollDice()
}
```

<p>And then using the keyboard shortcut, you can generate the method in Android Studio:</p>
<ul>
<li><strong>Windows/Linux:</strong> Alt + Enter</li>
<li><strong>Mac:</strong> Option + Enter</li>
</ul>
<p><strong>3. Write have the rollDice method to get a random number between 1 and 6:</strong></p>

```ts
val randomInt = Random().nextInt(6) + 1
```

<p><strong>4. Use findViewById to get a reference to the TextView and assign it to an immutable variable called resultText:</strong></p>

```ts
val resultText: TextView = findViewById(R.id.result_text)
```

<p><strong>5. Finally, set the random value that you got above as the text of the TextView:</strong></p>

```ts
resultText.text = randomInt.toString()
```

<p>If you want to start at this step, you can download this exercise code here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/archive/Step.03-Exercise-Rolling-the-dice.zip">Step.03-Exercise-Rolling-the-dice</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.03-Solution-Rolling-the-dice">Step.03-Solution-Rolling-the-dice</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.03-Exercise-Rolling-the-dice...Step.03-Solution-Rolling-the-dice">git diff</a></p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Make the rollDice method.

- Set result_text as the id of the TextView in the layout.

- Get a random Integer from 1 to 6 in rollDice.

- Make the result_text TextView show the random Integer.

</text-box>

Great job changing the text !

Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.03-Solution-Rolling-the-dice">Step.03-Solution-Rolling-the-dice</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.03-Exercise-Rolling-the-dice...Step.03-Solution-Rolling-the-dice">git diff</a>

CONTINUE
