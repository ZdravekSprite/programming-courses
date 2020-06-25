---
path: "/lesson01/21-exercise--adding-the-imageview"
title: "Exercise: Adding the ImageView"
---
<youtube id="TzSs81rVEqo"></youtube>

<p>In this exercise, you will replace the TextView with an ImageView that will show the right drawable based on the random number.</p>
<p><strong>1. Add the dice images to the drawable folder</strong></p>
<p>Add the <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/raw/master/DiceImages.zip">Dice images file</a> as explained in the <a target="_blank" href="https://classroom.udacity.com/courses/ud9012/lessons/37a8fa57-7d18-4704-bfb7-da2864cb2e75/concepts/b59b9167-b574-4ff5-a95b-911852ad6bea">previous video</a>.</p>
<p><strong>2. Replace TextView with ImageView and assign empty_dice drawable to it:</strong></p>

```xml
<ImageView
        android:id="@+id/dice_image"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:src="@drawable/empty_dice" />
```

<p><strong>3. Replace reference to the TextView with the ImageView:</strong></p>

```ts
val diceImage: ImageView = findViewById(R.id.dice_image)
```

<p><strong>4. Choose the right drawable resource based on the value of randomInt:</strong></p>

```ts
val drawableResource = when (randomInt) {
            1 -> R.drawable.dice_1
            2 -> R.drawable.dice_2
            3 -> R.drawable.dice_3
            4 -> R.drawable.dice_4
            5 -> R.drawable.dice_5
            else -> R.drawable.dice_6
        }
```

<p><strong>5. Finally, assign the drawableResource from above to diceImage:</strong></p>

```ts
diceImage.setImageResource(drawableResource)
```

<p>If you want to start at this step, you can download this exercise code here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/archive/Step.04-Exercise-Adding-the-ImageView.zip">Step.04-Exercise-Adding-the-ImageView</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.04-Solution-Adding-the-ImageView">Step.04-Solution-Adding-the-ImageView</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.04-Exercise-Adding-the-ImageView...Step.04-Solution-Adding-the-ImageView">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Replace the TextView with an ImageView.

- Get a reference to the ImageView.

- Choose the right drawable based on the random number.

- Make the ImageView show the drawable.

</text-box>


<p>Great job!</p>
<p><a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.04-Solution-Adding-the-ImageView">Step.04-Solution-Adding-the-ImageView</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.04-Exercise-Adding-the-ImageView...Step.04-Solution-Adding-the-ImageView">git diff</a>.</p>

CONTINUE
