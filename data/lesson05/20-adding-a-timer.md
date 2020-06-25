---
path: "/lesson05/20-adding-a-timer"
title: "Adding a Timer"
---

<youtube id="bIA6D4K0vPY"></youtube>

<h3>Quiz Question</h3>
<p>In what class should the timer go?</p>
<ul>
<li>-GameFragment</li>
<li>+GameViewModel</li>
</ul>
<button>Submit</button>

<p>Remember that the GameFragment should be doing as little as possible. While the logic that redraws the timer TextView should be in the GameFragment, the actual count down code doesn’t belong there. Think about what would happen if you had the current count down time in your GameFragment and then rotated the phone.</p>
<button>Try Again</button>

<p>Nice work! While the logic that redraws the timer TextView should be in the GameFragment, the actual count down code belongs in the view model. That way, if you ever rotate your phone, you won’t lose your current count down time.</p>
<button>Continue</button>

<youtube id="CdoW6NiS8v0"></youtube>
