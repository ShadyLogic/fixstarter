# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.create()

marshall = User.new(email: "marshall@fixstart.io", first_name: "Marshall", last_name: "Hattersly", bio: "I live in a trash can. Life. I live for derelict (my balls). I'm a derelict vagabond.", avatar_url: "http://i.imgur.com/hZ3fiKE.jpg", zip: '94122')
marshall.password = "trashcan"
marshall.badge_collection = BadgeCollection.new
marshall.save!

tim = User.new(email: "tim@fixstart.io", first_name: "Tim", last_name: "Cannady", bio: "I live in a trash can. Life. I live for derelict (my balls). I'm a derelict vagabond.", avatar_url: "http://i.imgur.com/iPtlfAt.jpg", zip: '94110')
tim.password = "trashcan"
tim.badge_collection = BadgeCollection.new
tim.save!

jacob = User.new(email: "jacob@fixstart.io", first_name: "Jacob", last_name: "Rogers", bio: "I live in a trash can. Life. I live for derelict (my balls). I'm a derelict vagabond.", avatar_url: "http://i.imgur.com/l56y9kj.jpg", zip: '94121')
jacob.password = "trashcan"
jacob.badge_collection = BadgeCollection.new
jacob.save!

andrea = User.new(email: "andrea@fixstart.io", first_name: "Andrea", last_name: "Coravos", bio: "I live in a trash can. Life. I live for derelict (my balls). I'm a derelict vagabond.", avatar_url: "http://i.imgur.com/bXVEy5u.jpg", zip: '94110')
andrea.password = "trashcan"
andrea.badge_collection = BadgeCollection.new
andrea.save!
#----------------------------------------------------------------------------------#



#-------------------------------- COMMUNITIES ---------------------------------------#
global = Community.create(title: "global")
#------------------------------------------------------------------------------------#



#-------------------------------- ISSUES -------------------------------------------#
trashcan = Issue.create(user_id: 2, community_id: 1, title: "Trash cans knocked over", description: "The wind knocked down all the trashcans. Garbage is scattered all over the street and it looks awful. Should only take about 10 minutes to pick it all up.", image_url: "http://i.imgur.com/EL8I4re.jpg", latitude: "37.753276150711926", longitude: "-122.41456031799316", status: "closed" )
fence = Issue.create(user_id: 1, community_id: 1, title: "Busted fence", description: "This fence has been broken for a long time. It would be great if somebody could fix it up. Most of the lumber is still there, it probably just needs some nails. Bring a hammer.", image_url: "http://i.imgur.com/MDgWvxy.jpg", latitude: "37.779805600955584", longitude: "-122.47713088989258", status: "open" )
graffiti = Issue.create(user_id: 3, community_id: 1, title: "Graffiti on the wall", description: "Some dumb punks tagged up this wall a couple weeks ago and I'm tired of looking at it.", image_url: "http://i.imgur.com/QGndXZr.jpg", latitude: "37.78821704497665", longitude: "-122.43327140808104", status: "closed" )
abandoned_seat = Issue.create(user_id: 4, community_id: 1, title: "Abandoned car seat", description: "This car seat has been here for a month. You'll probably need a truck to move it. Please get it out of here, it's an eyesore.", image_url: "http://i.imgur.com/PlxnYfH.jpg", latitude: "37.78414711095678", longitude: "-122.46348381042479", status: "open" )
lawn = Issue.create(user_id: 1, community_id: 1, title: "Old, rundown lawn", description: "Mr. Brewster's lawn looks bad, but he's too old to fix it himself. I know he'd appreciate it if a couple of Good Samaritans helped him out.", image_url: "http://i.imgur.com/1y58BFq.jpg", latitude: "37.77464972662077", longitude: "-122.45438575744627", status: "open" )
power_line = Issue.create(user_id: 2, community_id: 1, title: "Downed power line", description: "The storm knocked this power line down! Super dangerous, I've contacted the city of SF about it.", image_url: "http://i.imgur.com/aLznpvJ.jpg", latitude: "37.71383757727602", longitude: "-122.45412826538086", status: "open" )
tree = Issue.create(user_id: 3, community_id: 1, title: "Tree fell over", description: "Storm knocked down a tree! The thing is huge, you'll definitely need a chainsaw to cut it up and haul it out of here. Bring help.", image_url: "http://i.imgur.com/Hmjr16m.jpg", latitude: "37.745267951150964", longitude: "-122.47421264648439", status: "open" )
door = Issue.create(user_id: 4, community_id: 1, title: "Door off hinges", description: "This door came off its hinges. The screws don't seem to be anywhere around here, probably needs new ones anyway. Screwdriver / drill required.", image_url: "http://i.imgur.com/dCig2ZL.jpg", latitude: "37.75504055274351", longitude: "-122.41601943969727", status: "open" )
#---------------------------------------------------------------------------------#






#-------------------------------- FIXES ------------------------------------------#
trashcanfix = Fix.create(user_id: 4, issue_id: trashcan.id, title: "Picked up trashcan", description: "Got most of the trash, but the can keeps falling over.", image_url: "http://i.imgur.com/VnowEZ2.jpg")
trashcanfix2 = Fix.create(user_id: 3, issue_id: trashcan.id, title: "Fixed it!", description: "It took a litte bit of industrial adhesive, but I got the can to stay again.", image_url: "http://i.imgur.com/aYluzcZ.jpg")
graffitifix = Fix.create(user_id: 1, issue_id: graffiti.id, title: "Graffiti gone now", description: "Got my friends together and we scrubbed the wall. It's looking pretty good now!", image_url: "http://i.imgur.com/TE2OAXt.jpg")
lawnfix = Fix.create(user_id: 2, issue_id: lawn.id, title: "Fixed up the lawn", description: "I had some sod leftover from my lawn reno. I knocked on Mr. Brewsters door and asked him if I could fix up his lawn. He was really great, sweet man he is.", image_url: "http://i.imgur.com/Iu2pQN3.jpg")
#----------------------------------------------------------------------------------#





#-------------------------------- FIX COMMENTS ---------------------------------------#
trashcanfixcomment = FixComment.create(fix_id: trashcanfix.id, user_id: 3, content: "Thanks for getting the trash, I'll come by with some adhesive to stick the can back down.")
trashcanfixcomment2 = FixComment.create(fix_id: trashcanfix.id, user_id: 4, content: "Cool, thanks a lot!")
#-------------------------------------------------------------------------------------#





#-------------------------------- ISSUE COMMENTS -------------------------------------#
trancancomment = IssueComment.create(issue_id: trashcan.id, user_id: 1, content: "What an eyesore, somebody get on this.")
smashcancomment = IssueComment.create(issue_id: trashcan.id, user_id: 2, content: "Looks like it's all fixed now!")
#-------------------------------------------------------------------------------------#





#-------------------------------- USER VOTES ----------------------------------------#
vote1 = UsersVote.create(user_id: 1, issue_id: 1)
vote2 = UsersVote.create(user_id: 1, issue_id: 2)
vote3 = UsersVote.create(user_id: 1, issue_id: 3)
vote4 = UsersVote.create(user_id: 2, issue_id: 4)
vote5 = UsersVote.create(user_id: 2, issue_id: 5)
vote6 = UsersVote.create(user_id: 3, issue_id: 1)
vote7 = UsersVote.create(user_id: 3, issue_id: 2)
vote8 = UsersVote.create(user_id: 3, issue_id: 3)
vote9 = UsersVote.create(user_id: 4, issue_id: 1)
vote10 = UsersVote.create(user_id: 4, issue_id: 2)
#------------------------------------------------------------------------------------#





#-------------------------------- USER WATCHES ---------------------------------------#
watch1 = IssuesWatch.create(user_id: 1, issue_id: 1)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 2)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 3)
watch4 = IssuesWatch.create(user_id: 2, issue_id: 4)
watch5 = IssuesWatch.create(user_id: 2, issue_id: 5)
watch6 = IssuesWatch.create(user_id: 3, issue_id: 6)
watch7 = IssuesWatch.create(user_id: 3, issue_id: 7)
watch8 = IssuesWatch.create(user_id: 3, issue_id: 8)
watch9 = IssuesWatch.create(user_id: 4, issue_id: 1)
watch10 = IssuesWatch.create(user_id: 4, issue_id: 2)
#-------------------------------------------------------------------------------------#





#-------------------------------- CATEGORIES -----------------------------------------#
heavy =         Category.create(name: "Heavy", description: "Our hero will need to lift >50 lbs.")
very_heavy =    Category.create(name: "Very Heavy", description: "Our hero will need to lift >100 lbs.")
dirty =         Category.create(name: "Dirty", description: "Our hero will need to clean the area or item.")
tools =         Category.create(name: "Tools", description: "Our hero will need to bring a tool (e.g., screwdriver, hammer). See description for the submitter’s opinion for what tools are required..")
yard_work =     Category.create(name: "Yard Work & Removal", description: "Our hero can clean up the community area and remove any yard waste or rubbish.")
handyman =      Category.create(name: "General Handyman", description: "Our hero would perform minor repairs.")
escalate =      Category.create(name: "Escalate", description: "This issue is bigger than what someone in our community can solve, and needs a hero to alert the city / public officials.")
uncategorized = Category.create(name: "Uncategorized", description: "A home for all orphaned fixes.")
#-------------------------------------------------------------------------------------#





#-------------------------------- CATEGORIES-ISSUES ----------------------------------#
heavy.issues << trashcan
heavy.issues << abandoned_seat
very_heavy.issues << tree
dirty.issues << trashcan
dirty.issues << graffiti
tools.issues << fence
tools.issues << door
yard_work.issues << tree
yard_work.issues << lawn
handyman.issues << door
escalate.issues << power_line
escalate.issues << tree
#-------------------------------------------------------------------------------------#
