# mod-ideas

### pillars optimiser

after a lot of construction and deconstruction (or many copy pastes) I often times have many many pillars in a row (usually 4 in a row). add a mod function which can delete pillars that are unnecessary, or reorganise the pillars so that they prioritise 2 supports being near to a barrier, instead of one in the middle -- or (for the cheaters) delete all the pillars :)

### connector balancers

my intention is to use this on belt connectors, but there's no reason why it couldn't work for pipes too. when clicking on the connector, show the connector like the balancer and add the ability to set a priority just like on a balancer. if it's easier to code (or takes less space/memory) limit the connector to one direction priority (I could have 1 in and with 2 out priorities and a remaining in/out unpriorited, but that seems like a rare use-case). for simplicity, I think one priority is enough cause they can accomplish a dual priority with an extra pipe/belt, if they really want it.

### vehicle priority optimiser

often times I notice vehicles doing weird things. I want to be able to setup how my vehicles order the jobs. I'd like the ability to add and remove various of these options:
1. find all jobs in [x metres] radius, order by [priority/distance] and go to [nearest/farthest|highest/lowest]
2. go to [highest/lowest] priority job in global queue

cause then I could try out what I think would be the most optimal setup:
1. find all jobs in 100m radius, order by distance and go to nearest
2. find all jobs in 500m radius, order by priority and go to nearest
3. find all jobs in 5km radius, order by priority and go to highest
4. go to highest priority job in global queue

there may be more optimal setups, and depending on the island, it could be different (for example on armageddon insane start, there's an top and bottom level and I'd like to minimise traffic going up and down if possible).

the next thing this project could work on is the pathfinder. right now it calculates distances on "as the crow flies" -- when I'd want it to look based on the real path distance. to do that, I think a sort of fractal graph where each node is a vicinity -- and the connector between each node is the real distance. now if I want to look at the real path, the edge is split into more and more precise blocks. so let's say that I want to go from one node to another and they're 1k tiles between the two -- so the edge between these graphs is split into 512, then say 64 (not sure the increment), then 8, then 1 tile wide block sections of passable/impassable blocks along the path. that way, a truck can know that there is a path in the 128 block section, thern when getting there, it goes to the 16 block section and then to find the nodes to navigate around buildings, but then to get around pillars and stuff, it'll load up the 1 tile block sections to get around pillars. the advantage of this is that pathfinding only needs to be calculated once, and can be invalidated easily on the nodes that have terrain/building modifications to them.

### forestry improvements

when clicking on a forestry tower, I'd like to know
1. how many active designations there are with planted and unplanted
2. how many trees are at the target age (and if possible, for each 100%,80%,60%,40% category how many trees are that age, so I can do simple maths to calculate how much wood I have available)
3. total amount of wood available to be cut
