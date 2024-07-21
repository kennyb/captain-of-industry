# coi features

### essential things (IMO)
- ability to tell trucks to prioritise jobs based on distance over priority (for example a truck should continue to extract parts from the deconstructing building in front of him repeatedly, instead of driving to the other side of the map to something that is "higher priority"). implementation ideas:
	- (in general truck options) the ability to elevate jobs that are [<.5km] away by [5] priorities, [.5-1km] away by [3] priorities, [1-2km] away by [1] priorities (etc).
	- (in general truck options), set how much of the fleet will prioritise nearest jobs

### little things
- click on unbuilt loose/flat lift and have up/down arrows in the popup window allowing me to raise/lower it
- automatically connect two belt slices, just the same as if I connect a pipe/belt where the slices meet, and then remove the belt/pipe, so that they join again.
- pin a window, so it stays open
- ability to zoom out farther
- in new game on mouseover of the resource, put thr name and the quantity (ex. "Sand 110K")
- in save/load game dialog, next to "+NEW SAVE" also add "Rename" -- which allows me to rename the save
	- workaround is to click "Show in folder" button and rename it in windows explorer
- notification when excavator is complete in vehicle depot
- notification when truck assigned to box/bucket has no more jobs
- press a button (f?) to override the "incompatible port" (also nice if it could override "start and end are connected to the same transport)
- let fuel station trucks deliver fuel to fuel depot for building trucks (also delver to tanks and any other diesel request)
- ability to drag trucks around in vehicle depot queue
- ability to drag ports around in the materials sorter (the dropdown doesn't provide much info where the port is, and doesn't update until I deselect & reselect)
- when a digger is picking next designation, pick the nearest one *based on path length*, cause sometimes they really drive quite a distance to go when sometimes an available designation is right next to them
- ability to set minimum amount of fuel for excs in fuel station
	- instead of waiting until they're empty, it'd be nice if the fuel truck would go out to refill them as soon as there's a full truck worth of fuel he can take or minimum fuel tank is reached.


### bigger things
- inside of the island folder, save a replay file, which keeps track of every action the player makes.
	- intention is to watch (or make a video of) my island developing over time
	- maybe add hitkeys and mouse clicks? (probably not. though, it could be good for content creators)


### nice things to have
- diagonal bridges.
	- bridges in corner sitations are impassible
- ability to widen/narrow a bridge.
	- sometimes I want a bridge over a whole bunch of belts and want them to be able do drive diagonally over it, as if I buried the pipe
- 6-sided pipe connectors (!!!)
- on mouseover the resource layer bars, it puts a floating number, so I don't have to count.
- ability to put the pipes the color that I want them to be (the new pipe colors look way worse, IMO)


### stuff that would make the game feel better
- trees with a range of wood yield (each tree's amount determined probably by the game seed and the entity id) small/palm trees: 3-7, medium trees: 7-15, large trees: 10-20 (enabled with a difficulty setting?)

### QOL (only ui)
- ability to see at-a-glance how long each entity has been idle for (maybe place a colored glow and a numeric value next to each building/vehicle accordingly)
