// Lecture 12

Redux creates a store which is accessible from all components. Redux store has various slices created according to the needs.

On click of a ADD button it dispatches an Action which calls a function(reducer) and the function will update ths slice of the redux store(cart) then as the header cart UI uses selector function to stay in sync with slice(cart) to stay updated.

Write: ADD button => dispatch(Action) => function(reducer) => Change in slice(Adds to cart)
Update: Slice(Cart) => selector (subcribing to the store) => show updated cart total in header UI

Whenever using useSelector make sure to subscribe only to the right portion of the store otherwise it will be a huge performance loss.

Redux uses Immer library behind the scenes.

Learn RTK Query from docs.
