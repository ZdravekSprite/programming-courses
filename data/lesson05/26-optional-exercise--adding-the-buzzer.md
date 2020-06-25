---
path: "/lesson05/26-optional-exercise--adding-the-buzzer"
title: "Optional Exercise: Adding the Buzzer"
---

<youtube id="GyPwwDdRFMc"></youtube>

<h3>Question 1 of 2</h3>
<p>You'll need some logic that determines when the phone should buzz. Where should that code go?</p>
<ul>
<li>-BindingAdapter</li>
<li>+ViewModel</li>
<li>-Fragment</li>
<li>-XML layout</li>
</ul>
<button>Submit</button>

<p>While the fragment is in charge of asking for the phone to buzz (since this requires communicating with the Android OS), the logic for <em>when</em> the phone should buzz goes elsewhere. In what part of the code do you have the information to know when the code should buzz?</p>
<button>Try Again</button>

<p>Great job!</p>
<button>Continue</button>

<h3>Question 2 of 2</h3>
<p>Is this an Event or a State?</p>
<ul>
<li>+Event</li>
<li>-State</li>
</ul>
<button>Submit</button>

<button>Try Again</button>

<p>That's it!</p>
<button>Continue</button>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>Let's add a buzzer! Before you start, check the reference documentation on how to use <a target="_blank" href="https://developer.android.com/reference/android/os/Vibrator">Vibration on Android</a>. This will mostly be a self-guided exercise, but we'll give you a few steps to get started.</p>
<p><strong>1. Add the Vibrate permission:</strong> </p>
<p>In the AndroidManifest.xml file, <em>above</em> the <code>application</code> tag, add the following tag:</p>

```ts
<uses-permission android:name="android.permission.VIBRATE" />
```

<p>This provides a <a target="_blank" href="https://developer.android.com/guide/topics/permissions/overview">permission</a> that lets us vibrate the phone. We will describe Permissions in greater detail later in this course - suffice it to say that without this, our app cannot cause the phone to vibrate on its own.</p>
<p><strong>2. You can also optionally lock the screen to landscape:</strong></p>
<p>While you're in the manifest, you can also optionally lock the phone to landscape mode. That is done by adding the following lines to the MainActivity tag:</p>

```ts
<activity
            android:name=".MainActivity"
            android:configChanges="keyboardHidden|orientation|screenSize"
            android:screenOrientation="landscape">
```

<p><strong>3. Copy over the different buzz pattern Long array constants:</strong></p>
<p>Vibration is controlled by passing in an array representing the number of milliseconds each interval of buzzing and non-buzzing takes. So the array [0, 200, 100, 300] will wait 0 milliseconds, then buzz for 200ms, then wait 100ms, then buzz fo 300ms. Here are some example buzz patterns you can copy over:</p>

```ts
private val CORRECT_BUZZ_PATTERN = longArrayOf(100, 100, 100, 100, 100, 100)
private val PANIC_BUZZ_PATTERN = longArrayOf(0, 200)
private val GAME_OVER_BUZZ_PATTERN = longArrayOf(0, 2000)
private val NO_BUZZ_PATTERN = longArrayOf(0)
```

<p>Put these in the GameViewModel, above the class.</p>
<p><strong>4. Make an enum called <code>BuzzType</code> in GameViewModel</strong></p>
<p>This enum will represent the different types of buzzing that can occur:</p>

```ts
enum class BuzzType(val pattern: LongArray) {
    CORRECT(CORRECT_BUZZ_PATTERN),
    GAME_OVER(GAME_OVER_BUZZ_PATTERN),
    COUNTDOWN_PANIC(PANIC_BUZZ_PATTERN),
    NO_BUZZ(NO_BUZZ_PATTERN)
}
```

<p><strong>5. Copy over the <code>buzz</code> method</strong></p>
<p>Given a pattern, this method will actually perform the buzz. It uses the activity to get a system service, so you should put this in your GameFragment:</p>

```ts
private fun buzz(pattern: LongArray) {
        val buzzer = activity?.getSystemService<Vibrator>()

        buzzer?.let {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                buzzer.vibrate(VibrationEffect.createWaveform(pattern, -1))
            } else {
                //deprecated in API 26
                buzzer.vibrate(pattern, -1)
            }
        }
    }
```

<p>At this point you should be able to call buzz to make the phone buzz. The rest of the exercise uses the concepts you've learned in this lesson - the ViewModel decides when to do things, and should communicate events and state changes to the fragment using LiveData. Use the appropriate pattern to model events so you don't end up with extra buzzing. Good Luck!</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.11-Exercise-Optional-Add-Buzzing.zip">Step.11-Exercise-Optional-Add-Buzzing</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.11-Solution-Optional-Add-Buzzing">Step.11-Solution-Optional-Add-Buzzing</a> or using this <a a="" target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.11-Exercise-Optional-Add-Buzzing...Step.11-Solution-Optional-Add-Buzzing">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add the Vibrate permission.
- You can also optionally lock the screen to landscape.
- Copy over the different buzz pattern Long array constants.
- Make an enum called BuzzType.
- Copy over the buzz method.
- Create a properly encapsulated LiveData for a buzz event - its type should be BuzzType.
- Add a function onBuzzComplete to tell the view model when the buzz event has completed.
- Create an observer for the buzz event to call the buzz method with the correct pattern. Remember to call onBuzzComplete!
- Trigger buzzing at the correct times in the GameViewModel.

</text-box>

<p>Excellent work! You've finished the Guess It app, along with this extra credit work! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.11-Solution-Optional-Add-Buzzing">Step.11-Solution-Optional-Add-Buzzing</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.11-Exercise-Optional-Add-Buzzing...Step.11-Solution-Optional-Add-Buzzing">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/guide/topics/permissions/overview">Permissions</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/android/os/Vibrator">Vibration on Android</a></li>
</ul>
