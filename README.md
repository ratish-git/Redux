# Redux
Practise for Redux


# Dummy Server
npm i -g json-server 
json-server --watch db.json --port 8900

# Redux flow
View-->we click button and call api and goesto --->(action)

action--> here api call returns type and payload --->(reducer)

reducer--> state management happnes and goes to ---->(store)

Store--> we save the upadated state--->view


now view will receive the updated state.
