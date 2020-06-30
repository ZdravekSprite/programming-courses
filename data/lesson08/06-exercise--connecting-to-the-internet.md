---
path: "/lesson08/06-exercise--connecting-to-the-internet"
title: "Exercise: Connecting to the Internet"
---

<youtube id="7-d3E9j5rss"></youtube>

**Download or check out the starter app:**

Before you begin the first exercise, you'll either need to download the **Mars Real Estate App** [starter app](https://github.com/udacity/andfun-kotlin-mars-real-estate/archive/Starter-Code.zip), clone the [GitHub repo](https://github.com/udacity/andfun-kotlin-mars-real-estate), checking out the <em>starter-code</em> branch, or you can download this exercise from: [Step.01-Exercise-Making-Mars-Web-Service-Contact](https://github.com/udacity/andfun-kotlin-mars-real-estate/archive/Step.01-Exercise-Making-Mars-Web-Service-Contact.zip). Downloading the exercise will give you `//TODO` comments to help you complete the steps. If you get stuck, you can always go back and watch the video again.

Now let's connect to the internet!

In this first step you'll add the Retrofit library so your app can talk to the Mars web service.

When you've completed the exercise, your app displays the returned JSON string for a successful request, or an error message if the request fails.

**1. In `app/build.gradle` add the Retrofit library dependencies.**

The variables that specify the library versions  are defined in the project level `build.gradle` file. The versions we're using work well together, and, most importantly, in this app.

```ts
implementation "com.squareup.retrofit2:retrofit: $version_retrofit"
implementation "com.squareup.retrofit2:converter-scalars:$version_retrofit"
```

**2. Open `MarsApiService.kt`. We've provided a variable there for the root web address of the Mars server endpoint:**

```ts
private const val BASE_URL = "https://mars.udacity.com/"
```

**3. Use `Retrofit.Builder` to create the Retrofit object.**

Add an instance of ScalarsConverterFactory and the BASE_URL we provided, then call build() to create the Retrofit object.

```ts
private val retrofit = Retrofit.Builder()
    .addConverterFactory(ScalarsConverterFactory.create())
    .baseUrl(BASE_URL)
    .build()
```

**4. Create a `MarsApiService` interface, and define a `getProperties()` method to request the JSON response string.**

Annotate the method with `@GET`, specifying the endpoint for the JSON real estate response, and create the Retrofit `Call` object that will start the HTTP request.

```ts
interface MarsApiService {
 @GET("realestate")
 fun getProperties():
         Call<String>
}
```

**5. Passing in the service API you just defined, create a public object called `MarsApi` to expose the `Retrofit` service to the rest of the app:**

```ts
object MarsApi {
 val retrofitService : MarsApiService by lazy {
    retrofit.create(MarsApiService::class.java)
 }
}
```

**6. In `OverviewViewModel.kt`, use `MarsApi.retrofitService` to enqueue the Retrofit request in `getMarsRealEstateProperties()`, overriding the required Retrofit callbacks to assign the JSON response or an error message to the _response LiveData value.  Make sure to import the Retrofit versions of `Callback`, `Call`, and `Response`.**

```ts
MarsApi.retrofitService.getProperties().enqueue( object: Callback<String> {
  override fun onFailure(call: Call<String>, t: Throwable) {
      _response.value = "Failure: " + t.message
  }

 override fun onResponse(call: Call<String>, response: Response<String>) {
     _response.value = response.body()
 }
})
```

**7. Don't forget to delete the response assignment placeholder, or you won't see your results!**

```ts
_response.value = "Set the Mars API Response here!"
```

**8. Finally, in `AndroidManifest.xml`, add the internet permission with the `uses-permission` tag inside of the root `manifest` tag.**

```ts
<uses-permission android:name="android.permission.INTERNET" />
```

**9. Build and run your app and you'll see the JSON response as a big string that fills up the screen. Connectivity with the web service is, therefore, working, and we can continue on to do more interesting things with our app.**

Once you’re done, you can check your solution against the solution we’ve provided here: [Step.01-Solution-Making-Mars-Web-Service-Contact](https://github.com/udacity/andfun-kotlin-mars-real-estate/tree/Step.01-Solution-Making-Mars-Web-Service-Contact), or using this [git diff](https://github.com/udacity/andfun-kotlin-mars-real-estate/compare/Step.01-Exercise-Making-Mars-Web-Service-Contact...Step.01-Solution-Making-Mars-Web-Service-Contact).

<text-box variant='learningObjectives' name='Complete the tasks below to connect your app to the internet.'>

- Add Gradle dependencies for Retrofit2 and the ScalarsConverterFactory.
- Build the Retrofit object with the ScalarsConverterFactory and BASE_URL.
- Implement the MarsApiService @GET getProperties().
- Create the MarsApi object using Retrofit to implement the MarsApiService.
- Call the MarsApi to enqueue the Retrofit request, implementing the callback.
- Add the Internet permission to the AndroidManifest.

</text-box>

Great job, now let's go shopping!

<button>Continue</button>

Reference documentation

- [Connect to the Network](https://developer.android.com/training/basics/network-ops/connecting)
