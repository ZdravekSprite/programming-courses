---
path: "/lesson08/08-exercise--parsing-the-json-response"
title: "Exercise: Parsing the JSON Response"
---

<youtube id="X47zNWT0Q_8"></youtube>

Now it's your turn to complete this exercise yourself!

In this step you'll make all that JSON text a little more readable. If you want to start at this step, you can download this exercise code from: [Step.02-Exercise-Parsing-JSON-With-Moshi](https://github.com/udacity/andfun-kotlin-mars-real-estate/archive/Step.02-Exercise-Parsing-JSON-With-Moshi.zip). You will find plenty of `//TODO` comments to help you complete things.

**1. In `app/build.gradle`, add dependencies for Moshi, Moshi-Kotlin, and the Retrofit Moshi converter, then sync your project.**

```ts
implementation "com.squareup.moshi:moshi:$version_moshi"
implementation "com.squareup.moshi:moshi-kotlin:$version_moshi"

implementation "com.squareup.retrofit2:retrofit:$version_retrofit"
implementation "com.squareup.retrofit2:converter-moshi:$version_retrofit"
```

**2. In `MarsProperty.kt`, convert the class to a Kotlin data class with properties that match the JSON response fields:**

```ts
data class MarsProperty(
    val id: String,
    val img_src: String,
    val type: String,
    val price: Double)
```

**3. Rename the img_src class property to imgSrcUrl, and add a @Json annotation to remap the img_src JSON field to it:**

```ts
@Json(name = "img_src")
    val imgSrcUrl: String,
```

**4. In `MarsApiService.kt`, use the Moshi Builder to create a Moshi object with the `KotlinJsonAdapterFactory`:**

```ts
private val moshi = Moshi.Builder()
    .add(KotlinJsonAdapterFactory())
    .build()
```

**5. In the `retrofit` object, change the `ConverterFactory` to a `MoshiConverterFactory` with our `moshi` Object:**

```ts
.addConverterFactory(MoshiConverterFactory.create(moshi))
```

**6. Update `MarsApiService` `getProperties()` method to return a List of `MarsProperty` objects instead of `String`:**

```ts
@GET("realestate")
fun getProperties():
    Call<List<MarsProperty>>
```

**7. In `OverviewModel.kt`, update `getMarsRealEstateProperties()` to handle list of `MarsProperty` instead of `String`.**

A successful response should include the number of real estate properties returned, `response.body().size`:

```ts
private fun getMarsRealEstateProperties() {
    MarsApi.retrofitService.getProperties().enqueue( object: Callback<List<MarsProperty>> {
        override fun onFailure(call: Call<List<MarsProperty>>, t: Throwable) {
            _response.value = "Failure: " + t.message
        }

        override fun onResponse(call: Call<List<MarsProperty>>, response: Response<List<MarsProperty>>) {
            _response.value = "Success: ${response.body()?.size} Mars properties retrieved"
        }
    })
}
```

**8. Build and run the app. You should see a single message showing the number of properties in the response.**

If you get stuck, go back and watch the video again. Once you’re done, you can check your solution against the solution we’ve provided here: [Step.02-Solution-Parsing-JSON-With-Moshi](https://github.com/udacity/andfun-kotlin-mars-real-estate/tree/Step.02-Solution-Parsing-JSON-With-Moshi), or using this [git diff](https://github.com/udacity/andfun-kotlin-mars-real-estate/compare/Step.02-Exercise-Parsing-JSON-With-Moshi...Step.02-Solution-Parsing-JSON-With-Moshi).

<text-box variant='learningObjectives' name='Complete the tasks below to parse the JSON that's returned from your internet request.'>

- Add Gradle dependencies for Moshi.
- Convert the empty MarsProperty class into a data class that contains properties that match the JSON returned by the server. (See: [https://mars.udacity.com/realestate]).
- Use @Json to remap the img_src field to imgSrcUrl in the data class.
- Use the Moshi Builder to create a Moshi object with the KotlinJsonAdapterFactory.
- Update the MarsApiService @GET getProperties() to return List<marsproperty>.</marsproperty>
- Update the getProperties call in getMarsRealEstateProperties to handle a callback that returns a List of MarsProperty objects.

</text-box>

Great job!

<button>Continue</button>

Reference documentation

- [Moshi - A Modern JSON Library for Kotlin and Java](https://github.com/square/moshi)
- [Retrofit](https://square.github.io/retrofit/)
- [MoshiConverterFactory](http://square.github.io/retrofit/2.x/converter-moshi/index.html?retrofit2/converter/moshi/MoshiConverterFactory.html)
