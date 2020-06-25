---
path: "/lesson01/17-exercise--onclicklistener"
title: "Exercise: OnClickListener"
---
<youtube id="2aIYupJ9Aco"></youtube>

<p>In this exercise, you will make your app show a Toast message every time the button is clicked.</p>
<ul>
<li><a target="_blank" href="]https://developer.android.com/reference/android/view/View.OnClickListener">OnClickListener</a></li>
<li><a target="_blank" href="https://developer.android.com/guide/topics/ui/notifiers/toasts">Toast Documentation</a></li>
</ul>
<p><strong>1. Make sure that you've completed the steps to findViewById:</strong></p>
<p>You'll need to  <a href="https://developer.android.com/reference/android/view/View.html#findViewById(int)" target="_blank"><code>findViewById</code></a> for the button, as described in the <a target="_blank" href="https://classroom.udacity.com/courses/ud9012/lessons/37a8fa57-7d18-4704-bfb7-da2864cb2e75/concepts/94f6f6e7-0ffc-4406-bb50-69d15e7fe877">last video</a>.</p>
<p><strong>3. Set the OnClickListener for the button:</strong></p>

```ts
rollButton.setOnClickListener {

}
```

<p><strong>4. Make the Toast:</strong></p>
<p>This code will make the rollButton show a Toast message.</p>


```ts
rollButton.setOnClickListener {
    Toast.makeText(this, "button clicked", Toast.LENGTH_SHORT).show()
}
```

<p>If you want to start at this step, you can download this exercise code here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/archive/Step.02-Exercise-OnClickListener.zip">Step.02-Exercise-OnClickListener</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.02-Solution-OnClickListener">Step.02-Solution-OnClickListener</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.02-Exercise-OnClickListener...Step.02-Solution-OnClickListener">git diff</a></p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Set roll_button as the id of the Button in the layout.

- Get a reference to the Button in the Activity’s onCreate method.

- Create an OnClickListener.

- Have the OnClickListener display a Toast.

</text-box>

Greate job!

Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.02-Solution-OnClickListener">Step.02-Solution-OnClickListener</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.02-Exercise-OnClickListener...Step.02-Solution-OnClickListener">git diff</a></p>

CONTINUE
