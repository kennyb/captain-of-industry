# pragtical-coi

### 2024-06-28 09:10 - playing the game programmatically

I decided to [start over on YSNP](/clogs/Abandoned%20Expanse.md), and in the process of doing it (especially at the beginning), there's a lot of trial and error to the game, so I often go way back to a previous save and replay it from there -- so I take (mental) notes of things that need to be done, and how to accomplish them more rapidly. I approach the game a bit like speedrunning, seeing if I can be more efficient.
	I must say however, that at the beginning of the game, from run to run I can never remember the early-game (there's no blueprints, and I refuse to waste precious tech time on them until I have the extra resources), so I just kinda wing it at the beginning, and it turns out a bit different each time.
		this actually reminds me of an old video on node.js where two guys (substack and dominictarr) wrote their servers from the start many many times in the process of thier demonstrations in the talk -- so they got really used to starting from step one and turning it into something they like. I was one of the copy&paste types by then (I didn't used to be, but I picked it up from dani) -- and I was prolific about copy and pasting other people's code and then improving on it -- which denied me the experience of having to run all the sockets and stuff (kinda like pipes/belts) and -- I think my skill suffered a lot from that because I was always adapting someone else's creative energy.
			I've noticed that my creativity is really low when I'm copying (or iterating on) someone else's work. in a sense, that's kinda what I'm doing in this YSNP map, because I notice myself comparing my layout to his (I'm going to do a lot of things differently than he did).
		anyway, I noticed that substack always emitted a really good feeling when he starting from the very beginning (can't remember now about dominic) -- and that also impressed on me. another guy that frequently started at the beginning was dani -- cept once he got something that worked, he just copy and pasted it everywhere, which made code refactoring a nightmare (cause there were often minute differences between each paste) -- so lesson learned from him was (and this can be seen in the [awake-in-tenerife repo](../awake-in-tenerife)) to functionalize things and make them abstract features (dani had extreme difficulty with extremely abstract features (prolly cause he couldn't visualise them)).
	I've learned that starting over from the beginning is really good (as if I'm going to try and get the 4:23 or something) -- but along the way, it's good to have a TAS to know what maximum optimisation number (with the current strat) is going to give. I want the same thing for COI, where I record (at certain times) the item that needs to be done -- then I sorta tighten the timeline up in my mind, trying to figure out when is the earliest I could have done that -- like if I see a mistake, I want to go back to the time I made it, and not make it, or fix it before it becomes a problem.
what I want is a mod(e) record actions that I made, where I can give a group of actions a name and see them as a unit (ex. deconstruct smelter, change belts, build new smelter) and it'd be cool if (for 3d things like mining designations or placing a building, I would love to see a ghost of the previous spot I put it). -- and also an autoplay feature, so I can load the save, then it'll see that save's future segments (each save's segments can be included in the save, but also I want another file that stores all the actions performed in every branch of every segment I've played (and an ability to archive/retire a branch at any time)) see the actions replayed for me, or as a guide/coach for the realtime play that I'll do later (like if I'm recording a video).