---
path: "/lesson01/28-exercise--vector-drawables"
title: "Exercise: Vector Drawables"
---
<youtube id="wckKpEe-Ux8"></youtube>

<p>Now it’s your turn to complete this exercise.</p>
<p><strong>1. Enable the use of support library for vector drawables in build.gradle file (app level):</strong></p>

```ts
vectorDrawables.useSupportLibrary = true
```

<p><strong>2. Use app:srcCompat in the image tag in the layout file:</strong></p>

```ts
app:srcCompat="@drawable/empty_dice"
```

<p><strong>3. You’ll also need to add the namespace to the root of the layout:</strong></p>

```ts
xmlns:app="http://schemas.android.com/apk/res-auto"
```

<p>If you want to start at this step, you can download this exercise code here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/archive/Step.06-Exercise-Use-Vector-Drawable-Compat.zip">Step.06-Exercise-Use-Vector-Drawable-Compat</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.06-Solution-Use-Vector-Drawable-Compat">Step.06-Solution-Use-Vector-Drawable-Compat</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.06-Exercise-Use-Vector-Drawable-Compat...Step.06-Solution-Use-Vector-Drawable-Compat">git diff</a>.</p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise'>

- Enable support library for vector drawables in the app level build.gradle.

- Use the support library to reference the image resource in the layout file.

</text-box>

<p>Woo hoo! You've completed your first app!</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/tree/Step.06-Solution-Use-Vector-Drawable-Compat">Step.06-Solution-Use-Vector-Drawable-Compat</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dice-roller/compare/Step.06-Exercise-Use-Vector-Drawable-Compat...Step.06-Solution-Use-Vector-Drawable-Compat">git diff</a>.</p>

CONTINUE
