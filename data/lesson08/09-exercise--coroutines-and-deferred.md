---
path: "/lesson08/09-exercise--coroutines-and-deferred"
title: "Exercise: Coroutines and Deferred"
---

<youtube id="xZPO2hdvB8E"></youtube>

Now it's your turn to complete this exercise yourself!

In this lesson, you're going streamline your Retrofit API service by replacing the callback and interfaces with coroutines and exception handling. If you want to start at this step, you can download this exercise from: [Step.03-Exercise-Using-Retrofit-With-Coroutines](https://github.com/udacity/andfun-kotlin-mars-real-estate/archive/Step.03-Exercise-Using-Retrofit-With-Coroutines.zip). You will find plenty of `//TODO` comments to help you complete things.

**1. Add dependencies for Coroutines and the Retrofit Coroutines Adapter:**

```ts
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:$version_kotlin_coroutines"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:$version_kotlin_coroutines"
implementation "com.jakewharton.retrofit:retrofit2-kotlin-coroutines-adapter:$version_retrofit_coroutines_adapter"
```

**2. In `MarsApiService`, add a `CoroutineCallAdapterFactory` to the `Retrofit` builder:**

```ts
.addCallAdapterFactory(CoroutineCallAdapterFactory())
```

**3. Change `getProperties()` `Call<List<MarsProperty>>` to a `Deferred` list of `MarsProperty`:**

```ts
Deferred<List<MarsProperty>>
```

In `OverviewViewModel`, let's add the coroutine code.

**1. Add variables for a coroutine Job and a CoroutineScope using the Main Dispatcher:**

```ts
private var viewModelJob = Job()
private val coroutineScope = CoroutineScope(viewModelJob + Dispatchers.Main )
```

**2. In `getMarsRealEstateProperties()`, replace the `enque()` code with a coroutine for making the API request:**

```ts
coroutineScope.launch {

}
```

**3. Inside the coroutine, create a `getPropertiesDeferred` variable and assign it a call to `getProperties()`:**

```ts
var getPropertiesDeferred = MarsApi.retrofitService.getProperties()
```

**4. Add a `try/catch` block with a call to `getPropertiesDeferred.await()`.**

Catch a generic `Exception`. Save the result from `await()`.

```ts
var listResult = getPropertiesDeferred.await()
```

**5. Then return the list size (as before) in the success message, and the message from the exception in the failure message.**

Your new `getMarsRealEstateProperties()` function should look like this:

```ts
private fun getMarsRealEstateProperties() {
    coroutineScope.launch {
        var getPropertiesDeferred = MarsApi.retrofitService.getProperties()
        try {
             var listResult = getPropertiesDeferred.await()
            _response.value = "Success: ${listResult.size} Mars properties retrieved"
        } catch (e: Exception) {
            _response.value = "Failure: ${e.message}"
        }
    }
}
```

**6. Finally, override `onCleared()` and cancel the `Job` when the `ViewModel` is finished.**

You can use Control-O in Android Studio to select a method to override.

```ts
override fun onCleared() {
    super.onCleared()
    viewModelJob.cancel()
}
```

**7. Build and run your code and verify the app works exactly as it did before.**


If you get stuck, go back and watch the video again. Once you’re done, you can check your solution against the solution we’ve provided here: [Step.03-Solution-Using-Retrofit-With-Coroutines](https://github.com/udacity/andfun-kotlin-mars-real-estate/tree/Step.03-Solution-Using-Retrofit-With-Coroutines), or using this [git diff](https://github.com/udacity/andfun-kotlin-mars-real-estate/compare/Step.03-Exercise-Using-Retrofit-With-Coroutines...Step.03-Solution-Using-Retrofit-With-Coroutines).

<text-box variant='learningObjectives' name='Complete the tasks below to launch retrofit requests in a coroutine.'>

- Add Gradle dependencies for both Coroutines and for the Retrofit Coroutines Adapter.
- Use .addCallAdapterFactory in the Retrofit.Builder to add the CoroutineCallAdapterFactory.
- Change the return type from our getProperties call in the MarsApiService to Deferred.
- Create a Job and a Main Dispatcher CoroutineScope before the init block in OverviewViewModel.
- Replace callback code with call to  coroutineScope.launch.  Place the MarsApi code inside the coroutine.
- Call MarsApi.retrofitService.getProperties and call await() on the Deferred to get the propertyList.
- Surround the MarsApi code with a try/catch, and set the _status appropriately (with record counts).
- Cancel the coroutine Job when the ViewModel is finished by overriding the onCleared method.

</text-box>

Good work!

<button>Continue</button>

Reference documentation

- [Kotlin Coroutines Adapter](https://github.com/JakeWharton/retrofit2-kotlin-coroutines-adapter)
