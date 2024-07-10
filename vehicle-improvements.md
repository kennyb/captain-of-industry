# vehicle improvements

- excavators often drive quite a distance to go to another designation when an empty designation is right next to them
	- they should prioritise shortest distance
	- they shouldn't go to a designation that someone is already going/dumping to (though I haven't seen this behaviour in a while, so perhaps it's fixed)
- vehicles often times run all the way to the other side of the island to do a priority job, when it'd be *much* more efficient if jobs with low distance were to be prioritised.
	- ability to tell trucks prioritise jobs with low distance first (for example a truck should continue to extract parts from the deconstructing building in front of him repeatedly, instead of doing one load then driving to the other side of the map to something that is "higher priority"). implementation ideas (in "vehicles management" panel):
		- ability to elevate jobs that are [<.5km] away by [5] priorities, [.5-1km] away by [3] priorities, [1-2km] away by [1] priorities (etc).
		- ability set how many trucks (0-all) will prioritise based on distance.
	- ability to set max number of trucks per job -- so if I construct something, I don't want to see all of my trucks running over to get construction parts, when it's better for them to be doing something nearby. I only want to see a few trucks doing that work. implementation ideas (in "vehicles management" panel):
		- set max number of trucks per job (perhaps granular -- construction jobs, general jobs)
		- set max number of trucks per job based on priority (ex. `(16 - priority) * 0.5`) -- and potentialy make the equation editable
- vehicles often times calculate distances based on the diagonal, insatead of the actual path that they need to take, so a few machines (or mountains) in the way will cause them to take really long routes for something they think is short (usually these problems can be mitigated by setting the export routes on the tower, so it's not as big of an issue)

ideally trucks should stay in their location and do jobs around there. for example, in the map I'm playing (armageddon), I have some jobs downstairs, and a bunch of jobs upstairs. trucks don't need to go up and down the hill all the time. the only things they should be doing going up and down the hill are bringing limestone down and sulfur/coal up -- that's it. however, I see trucks running up and down all the time because the system is based on priority.

another thing that'd really help vehicles being more optimised would be for a truck to calculate the whole route from each waypoint to another (let's say I pick up 20 cp1 and deliver 5 to a location), then since I still have cargo that can be carried, I carry on another 5 to another location and continue on. or, for example, a petrol truck should never return back to base with fuel. if there are other excavators in any range (or any item on the main diesel requests that's nearby), he should go top them up before returning home.
- pick up maximum load, assuming that I'll deliver to one of the locations.
- pick the nearest location, and subtract load, then (if load remains) continue on to next nearest.

that'll result in a route that has a few waypoints in it, but it'll be pretty optimal.
