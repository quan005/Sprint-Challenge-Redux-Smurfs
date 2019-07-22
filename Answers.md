1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
        [x] 1. array.map creates a new array and does not mutate the original array.
            2. array.slice returns items in the array without mutating the original array, as opposed to array.splice which does mutate the array
            3. array.concact adds items to the array without mutation.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        [x] 'Actions' - are objects that send data from your application to your store. They are the only source of information for the store.
            'Reducers' - are pure functions that specify how the state changes in response to the actions that are sent to the store.
            'Store' - is an object that the applications state ,and its known as the "Single Source of Truth" because there can only be one store, as opposed to many reducers.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
        [x] 'Application state' is a centralised global store which is accessible to any component that subscribes to the store. Whereas 'Component state' is stored locally within a component and is not accessible from other components unless it’s actually passed as props to it’s child components. So when the number of components increases, the passing of props becomes a nightmare, which is when you would use 'Application State'.

4.  What is middleware?
        [x] 'Middleware' provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        [x] 'Redux-Thunk' is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators. It allows us to make API calls from our action creators.

6.  Which `react-redux` method links up our `components` with our `redux store`?
        [x] 'Connect' is a react-redux method that allows us to pass our state from store to our components. 
