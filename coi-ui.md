# coi ui

### general improvements
- some alerts could be clearer with a delta:
	- "Estimate: 6 in 0.5 months. 2.9 months without water. Crop will survive up to 3.0 months."
	- "Estimate: 6 in 0.5 months. Crop will survive up to 3 months without water (0.1 months left)." (clearer?)
- on the loading screen, show the tip that's most pertinent.
	- if I just ran out of food: "Tip #1 Make sure your people have food so they don't starve"
	- if I just ran out of crude: "Tip #3 If you're running low on crude oil, try using your ship to explore other islands" (???)
- start the game paused (first tutorial unpause the game?)
- when unity building things by dragging a rectangle, highlight the things that will be built in green (it's often times I notice only after releasing the mouse button that it only built half of it).
- food estimation should look at food storage inside of markets + all connected storages

### map editor
- the publish icon is of a paper airplane, which gives me the sense of "play/test this map" (like I would test the paper airplane by throwing it), but the text says "publish" -- which is confusing, because I didn't want to publish my map to coi-hub just yet, just test it.
	- separate the (play/test) map functionality from (publish/view) integration with coi-hub.
	- also, it'd be cool if I could directly view and download others' maps on coi-hub and edit/play/test those ones too (witrhout having to use the browser).
- it feels like the arrows that show up in the polygon editing mode are really big and bulky. I don't think the arrows need to be that long.
	- I would also like to see a stronger mouseover effect on the arrow so that I'm really certain that's the arrow/plane that I've selected (probably not increase the size, but change the color to something which differentiates it, like red or blue -- not sure exactly as I figure those things out by trial and error)
- "Max influence distance" is a confusing setting.
	- it took me a bit to figure out what it was. some times the generation was getting cut off and I was like "dude, how do I make the yellow square bigger" (it should be draggable), but also -- why doesen't this automatically set? shouldn't it know to increase the bounding box if the generation is larger, and decrease if the generation is small?
- the configuration is also extremely confusing.
	- it took me a while to figure out that each configuration corresponded to one of the items above.
	- "polygonDistanceTransform : Noise2dTransformParams" the first part is the item above ("polygon Distance Transform"), and the second one seems to be something found in unity or something (it's likely documented in .NET now that I think about it).
	- the next things appear to be a series of pipe (`|>`) functions, starting with `PolygonSignedDistance(polygon)`. `polygonDistance` seems to be the label, like the one above it `parameters` (which I see the list of parameters enumerated above), but I don't see anything about "polygon Distance" or anything like that. each one of the piped functions seem to get one of the parameters defined above, but I don't know what the functions are, what they do, or what they're doing.
	- it would be really helpful to be able to add the functions from like a dropdown or something with the .NET documentation beside it. I think I understand the code a little bit, and it seems like it'd be nice to have the paramets listed (they are), then the list of things that can be transformed (it looks like `finalNoise` and `polygonDistance` but there are probably others), and then a list of the functions that are being called (with the ability to disable/enable them), and their parameters directly below them. I should also be ale to drag the functions to reorder them too. it looks like as I change their values, the preview updates in real-time (so that's good). the preview may be able to be improved, but I'm not sure how right now because I'm not totally sure what the functions are doing, and so it's difficult to visualize it.


### mining and designations
- ability to drag a designation by pulling its edge (like resizing a window -- or like the arrow handles in the map editor)
- the ability to globally set designations and assign the designations to a tower
	- that way when I move/rebuild the tower, the designation doesn't get borked.
	- additionally, when I enable the designations view, I can just edit then right away without having to hunt for the exact tower
- ability to move around and change the designation like I can when editing a polygon in the map editor: (click on circle to split line and move vertices
	- probably this is a change in the designation code which is just a bounding box calculation, but a polygon also has a bounding box around it, and so if the collision is inside the bounding box and the designation is also a polygon, then do a second more expensive collision on the polygon


### notifications
- there was a new icon added to keep all new goals hidden, but it takes up even more screen space -- when I think a more intuitive design would be to just remember if the goal has been closed, and when a new one shows up, the player can just close it, and it stays closed (turns yellow when the goal is met and is ready to be collected)


### icons and things

### dialog boxes
- when renaming a machine/storage, if I click away from the dialog (and it closes), then it doesn't change the name (I have to remember to press enter or press the save button). when closing the dialog, it should save the name automatically.
