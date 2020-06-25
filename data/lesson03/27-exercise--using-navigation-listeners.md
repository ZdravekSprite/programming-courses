---
path: "/lesson03/27-exercise--using-navigation-listeners"
title: "Exercise: Using Navigation Listeners"
---

<youtube id="2b5g3BOoSF0"></youtube>

<p>You can prevent the drawer from being swiped anywhere other than the startDestination. All we need to do is call addOnDestinationChangedListener with a lambda that sets the DrawerLockMode depending on what destination we’re navigating to.  When the id of our NavDestination matches the startDestination of our graph, we’ll unlock the drawerLayout;  otherwise, we’ll lock and close the drawerLayout.</p>

```java
// prevent nav gesture if not on start destination
navController.addOnDestinationChangedListener { nc: NavController, nd: NavDestination, args: Bundle? ->
   if (nd.id == nc.graph.startDestination) {
       drawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_UNLOCKED)
   } else {
       drawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_LOCKED_CLOSED)
   }
}
```

<p>And that’s it!  Having listeners like this makes it powerful to do lots of cool stuff when the user navigates, and keeps the code in a single place in the app.</p>

<text-box variant='learningObjectives' name='Learning objectives'>

- Call addOnNavigatedListener with a lambda that specifies the NavController and NavDestination parameters

- In the lambda, check to see if the id of our NavDestination matches the startDestination of our graph, and lock/unlock the drawerLayout accordingly

</text-box>

Thanks!
CONTINUE
