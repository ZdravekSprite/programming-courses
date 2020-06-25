---
path: "/lesson01/23-exercise--finding-views-efficiently"
title: "Exercise: Finding Views Efficiently"
---
<youtube id="1mM_iQSp_3Q"></youtube>

<p>Here is  additional information on the topic of late initialization if you are curious: <a target="_blank" href="https://kotlinlang.org/docs/reference/properties.html#late-initialized-properties-and-variables">late-initialized-properties-and-variables</a>.</p>
<p>Now it’s your turn to complete this exercise yourself.</p>
<p><strong>1. Use lateinit to extract the image view variable:</strong></p>

```ts
lateinit var diceImage: ImageView
```

<p><strong>2. Initialize the image view variable:</strong></p>

```ts
diceImage = findViewById(R.id.dice_image)
```

<p>If you want to start at this step, you can download this exercise code here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/archive/Step.05-Exercise-Finding-Views-Efficiently.zip">Step.05-Exercise-Finding-Views-Efficiently</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.05-Solution-Finding-Views-Efficiently">Step.05-Solution-Finding-Views-Efficiently</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.05-Exercise-Finding-Views-Efficiently...Step.05-Solution-Finding-Views-Efficiently">git diff</a>.</p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Use lateinit to extract the image view variable.

- Initialize the image view variable.

</text-box>

<p>That’s all there is to it!</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.05-Solution-Finding-Views-Efficiently">Step.05-Solution-Finding-Views-Efficiently</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.05-Exercise-Finding-Views-Efficiently...Step.05-Solution-Finding-Views-Efficiently">git diff</a>.</p>
