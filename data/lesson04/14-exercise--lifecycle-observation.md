---
path: "/lesson04/14-exercise--lifecycle-observation"
title: "Exercise: Lifecycle Observation"
---

<youtube id="AmKrsXqMOVI"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>You're going to use <a target="_blank" href="https://developer.android.com/topic/libraries/architecture/lifecycle">Lifecycle Observation</a> to start and stop the timer.</p>
<p><strong>1. Make DessertTimer a LifecycleObserver: </strong></p>
<p>In order to achieve this, DessertTimer should implement a LifecycleObserver, take in a Lifecycle as a parameter and establish observer relationship in init block.</p>

```java
class DessertTimer(lifecycle: Lifecycle) : LifecycleObserver {
    init {
        lifecycle.addObserver(this)
    }
}
```

<p><strong>2. Annotate startTimer and stopTimer with <a target="_blank" href="https://developer.android.com/reference/android/arch/lifecycle/OnLifecycleEvent">@OnLifecycleEvent</a> and the correct event:</strong></p>

```java
@OnLifecycleEvent(Lifecycle.Event.ON_START)
fun startTimer() {...}

@OnLifecycleEvent(Lifecycle.Event.ON_STOP)
fun stopTimer() {...}
```

<p><strong>3. Pass in 'this' MainActivity's lifecycle so that it is observed:</strong></p>

```ts
dessertTimer = DessertTimer(this.lifecycle)
```

<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-L4/archive/Step.04-Exercise-Add-the-lifecycle-library.zip">Step.04-Exercise-Add-the-lifecycle-library</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.04-Solution-Add-the-lifecycle-library">Step.04-Solution-Add-the-lifecycle-library</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.04-Exercise-Add-the-lifecycle-library...Step.04-Solution-Add-the-lifecycle-library">git diff</a></p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Make DessertTimer implement a LifecycleObserver.
- Have DessertTimer take in a Lifecycle as a parameter and set up the observer relationship.
- Annotate startTimer and stopTimer with @OnLifecycleEvent and the correct event.
- Pass in MainActivity's lifecycle to DessertTimer.
- Remove the calls to startTimer and stopTimer.

</text-box>

<p>Great work!</p>
<p><em>Solution:</em> <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.04-Solution-Add-the-lifecycle-library">Step.04-Solution-Add-the-lifecycle-library</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.04-Exercise-Add-the-lifecycle-library...Step.04-Solution-Add-the-lifecycle-library">git diff</a></p>
<button>Continue</button>
