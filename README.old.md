# React Giphy

**In this lab we will practice:**
* using `create-react-app` to build a component based React app.
* sharing properties through prop drilling
* updating state and lifting state
* calling apis and passing data through component lifecycle methods

 - *Before getting started:* Take a look at the [completed app here](https://react-giphy-app.herokuapp.com/) repo.

## Part 1

In the first part you will be creating an app that mirrors the app above, but searches a given JSON object instead of the Giphy API (*we will integrate the Giphy API in Part 2*). 

### App Structure
Build an app with the following component hierarchy: 
```
|--Home
-----SearchContainer
---------Search
---------Result(s)
```

The components should do the following: 
- `Home`: Render header and visual layout + child `SearchContainer` component;
- `SearchContainer`: Render Search and Result child components; 
- `Search`: Render input tag for user to search for gif. 
- `Result`: Represent and render an individual result. 


### Data and Data Search:
Your app should take a user input and search the following JS object and return and render the gif and name of the gif if the search parameter is found in the url of said gif (aka the name of the gif). If no gif is found, an error message should be returned instead. 

<details><summary>click for js object</summary>

```js
{
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
}
```

</details>

## Building the App
In building this app you will have to consider the following: 
* How to capture user inputed data in a form/input field in React. 
* Using `state` in React to keep tracking of changing data values. 
* Rendering data in child components through prop drilling. 

In the second part of our app we will update our search to search the Giphy API proper, not our static JS object. 

## Part 2

### Search the Giphy API

- With the API we're using, you will need to [register for an API key](https://developers.giphy.com/). The API key is free, and only takes a minute or two to setup.
- Go ahead an look at the [documentation](https://developers.giphy.com/docs/) to determine the API's proper usage.
- We're going to be searching the giphy API based on a word or phrase to return a collection of results.
- Load in Axios, and use it to make an HTTP request to the API search endpoint using the user's query.
- Pass the data to the Results component to be displayed.

### Finish Search

- Lets get rid of Search button and call the external API whenever User is entering string to search (Hint: you may have to make some changes in onInput()).
- Now that you have that working, lets introduce some performance optimization. Make changes such that component is only re-rendered if the User changes the search string (Hint: use a lifecycle hook. Also, you may have to set the value of `state.query` in another method).
- After you have made these changes you will notice that even though you are not re-rendering the component, but your app is still making the third-party API call. Use one of the other lifecycle hooks to prevent that from happening (Hint: think about componentDidUpdate() lifecycle method).


