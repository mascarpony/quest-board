# Quest Board

Second quest for the hero is to add new feature in existing project. Ready. Steady. GO!

## Running the App

Install [json-server](https://www.npmjs.com/package/json-server) and run `json-server --watch db.json`.
Run `ng serve` as usual.

## Requirements

For now we have app with quests board and form for creating new quests. But heroes should have opportunity to accept the quests, that's why we need you!

- Add `Accept` button to each quest
- On click status of the quest should be changed to accepted (at both frontend and backend)
- Accepted quests shouldn't be shown at the quests board
- Add button `My quests` to the header. It should lead to `/my-quests` page. Show here the list of accepted quests without any buttons

## If you are bored

- Add backend errors handling
- Make form more user-friendly
- Extend the quests workflow. For example, you may make `done` and `declined` statuses for quests

## Hints

- Use existing quest component for `My quests` page
- You can edit backend data directly in `db.json` file

## Useful API

To update the whole quest use PUT request to `http://localhost:3000/quests/:id` with updated quest object in the body. In response you'll get updated quest.

To add/update one field in quest use PATCH request to `http://localhost:3000/quests/:id` with updating field in the body. In response you'll get updated quest.

