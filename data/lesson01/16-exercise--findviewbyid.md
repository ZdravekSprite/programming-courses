---
path: "/lesson01/16-exercise--findviewbyid"
title: "Exercise: findViewById"
---
<youtube id="HEiKE1KIdgY"></youtube>
<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this exercise, you will use <a href="https://developer.android.com/reference/android/view/View.html#findViewById(int)" target="_blank"><code>findViewById</code></a> to get a reference to the button.</p>
<p><strong>1. Set button’s id in the activity_main.xml layout file:</strong></p>

```ts
android:id="@+id/roll_button"
```

<p><strong>2. Use findViewById to get a reference to the button and assign it to an immutable variable called rollButton:</strong></p>

```ts
val rollButton: Button = findViewById(R.id.roll_button)
```

<p><strong>3. (Optional) Dynamically modify the Button view:</strong></p>
<p>Set the button text to "Roll Button"</p>


```ts
rollButton.text = "Let's Roll"
```

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Set button’s id in the activity_main.xml layout file.

- Use findViewById to get a reference to the button and assign it to an immutable variable called rollButton.

- Dynamically modify the Button view (optional).

</text-box>

Great job connecting your first button!  Now let's make it display a message when the user clicks it!

CONTINUE
