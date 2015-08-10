# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.create()

#---------------------------------- USERS ----------------------------------------#
marshall = User.new(email: "marshall@trash.org", first_name: "Mash", last_name: "Hannersly", bio: "I live in a trash can. Life. I live for derelict (my balls). I'm a derelict vagabond.", avatar_url: "https://avatars2.githubusercontent.com/u/9030453?v=3&s=460")
marshall.password = "trashcan"
marshall.save!

tim = User.new(email: "tim@trash.org", first_name: "Smash", last_name: "Canada", zip: '94110')
tim.password = "trashcan"
tim.save!

jacob = User.new(email: "jacob@trash.org", first_name: "Fist", last_name: "Punchersly", zip: '94121')
jacob.password = "trashcan"
jacob.save!

andrea = User.new(email: "andrea@trash.org", first_name: "Doctor", last_name: "Draaay", zip: '94110')
andrea.password = "trashcan"
andrea.save!
#----------------------------------------------------------------------------------#



#-------------------------------- COMMUNITIES ---------------------------------------#
global = Community.create(title: "global")
#------------------------------------------------------------------------------------#



#-------------------------------- ISSUES -------------------------------------------#
trashcan = Issue.create(user_id: 1, community_id: 1, title: "Trashcan fell down at 633 Folsom St", description: "It was a ghastly sight. Please help.", image_url: "http://dogcare.dailypuppy.com/DM-Resize/photos.demandstudios.com/getty/article/178/251/87794711.jpg?w=600&h=600&keep_ratio=1&webp=1", latitude: "37.753276150711926", longitude: "-122.41456031799316", status: "closed" )
smashcan = Issue.create(user_id: 1, community_id: 1, title: "Marshall got smashed", description: "Trashcan had a long night. Someone needs to press his clothes.", image_url: "https://s-media-cache-ak0.pinimg.com/736x/af/70/d0/af70d0c1d52a1c60016b46a6207c0b30.jpg", latitude: "37.779805600955584", longitude: "-122.47713088989258", status: "open" )
screwloose = Issue.create(user_id: 1, community_id: 1, title: "Marshall unscrewed the cookie jarlette", description: "He was hungry. It needs to be refilled and re-screwed", image_url: "http://2.bp.blogspot.com/-97Vou7CtPVI/TZxkaclKLTI/AAAAAAAAAO4/Mk6NaGRtamg/s1600/cute%2Bpuppy%2Bin%2Bjar%2Bvase%2Bbucket%2Bfunny%2Blol.jpg", latitude: "37.78821704497665", longitude: "-122.43327140808104", status: "open" )
spilt_dirt = Issue.create(user_id: 1, community_id: 1, title: "Someone spilled dirt", description: "There's dirt all over", image_url: "https://mattalltrades.files.wordpress.com/2010/07/dirt1.jpg", latitude: "37.78414711095678", longitude: "-122.46348381042479", status: "open" )
lawn_fix = Issue.create(user_id: 1, community_id: 1, title: "Fix The Lawn", description: "DOG DID IT", image_url: "http://cdn2.caninejournal.com/wp-content/uploads/dog-digging-hole.jpg", latitude: "37.77464972662077", longitude: "-122.45438575744627", status: "open" )
manatee = Issue.create(user_id: 1, community_id: 1, title: "Move this Huge Manatee", description: "someone put a manatee where it shouldnt be", image_url: "http://media.treehugger.com/assets/images/2012/03/orphaned-manatee.jpg", latitude: "37.71383757727602", longitude: "-122.45412826538086", status: "open" )
wood = Issue.create(user_id: 1, community_id: 1, title: "Pile of Wood", description: "Come de-wood this stuff", image_url: "http://i.ytimg.com/vi/AlwnReWZQ7w/maxresdefault.jpg", latitude: "37.745267951150964", longitude: "-122.47421264648439", status: "open" )
dumb_cat = Issue.create(user_id: 1, community_id: 1, title: "HHELP", description: "IZ STUK N BAGg", image_url: "http://40.media.tumblr.com/tumblr_lpkjwr7ITo1r09ghoo1_500.jpg", latitude: "37.75504055274351", longitude: "-122.41601943969727", status: "open" )
#---------------------------------------------------------------------------------#






#-------------------------------- FIXES ------------------------------------------#
trashcanfix = Fix.create(user_id: 2, issue_id: trashcan.id, title: "Picked up trashcan", description: "Pulled him up and sent him off", image_url: "http://puppypicsonline.com/wp-content/uploads/2012/12/image.jpg")
trashcanfix2 = Fix.create(user_id: 3, issue_id: trashcan.id, title: "Marshall was still dirty", description: "Cleaned him off.", image_url: "http://www.effectivecreations.com/tattarga/images/labrador-puppy8.jpg")
smashcanfix = Fix.create(user_id: 2, issue_id: smashcan.id, title: "Ironed the Marshall", description: "Needed at least 30 minutes to iron properly. But he's good to go now.", image_url: "https://s-media-cache-ak0.pinimg.com/736x/a5/b9/c2/a5b9c26880b0213c1c967f4da56a94e6.jpg")
screwloosefix = Fix.create(user_id: 1, issue_id: screwloose.id, title: "I rescrewed the jarlette", description: "After I ate all the cookies, I was able to close my own issue", image_url: "http://2.bp.blogspot.com/-97Vou7CtPVI/TZxkaclKLTI/AAAAAAAAAO4/Mk6NaGRtamg/s1600/cute%2Bpuppy%2Bin%2Bjar%2Bvase%2Bbucket%2Bfunny%2Blol.jpg")
#----------------------------------------------------------------------------------#





#-------------------------------- FIX COMMENTS ---------------------------------------#
trashcanfixcomment = FixComment.create(fix_id: trashcanfix.id, user_id: 1, content: "Yay! You did a nice job cleaning me up. Thanks yo.")
trashcanfixcomment2 = FixComment.create(fix_id: trashcanfix.id, user_id: 2, content: "Yo. MARSHALL. Did you post your own issue?!")
#-------------------------------------------------------------------------------------#





#-------------------------------- ISSUE COMMENTS -------------------------------------#
trancancomment = IssueComment.create(issue_id: trashcan.id, user_id: 3, content: "Oh the huge manatee!")
smashcancomment = IssueComment.create(issue_id: smashcan.id, user_id: 4, content: "He so wrinkly.")
#-------------------------------------------------------------------------------------#





#-------------------------------- USER BUMPS ----------------------------------------#
bump1 = UsersBump.create(user_id: 1, issue_id: 1)
bump2 = UsersBump.create(user_id: 1, issue_id: 2)
bump3 = UsersBump.create(user_id: 1, issue_id: 3)
bump4 = UsersBump.create(user_id: 2, issue_id: 1)
bump5 = UsersBump.create(user_id: 2, issue_id: 2)
#------------------------------------------------------------------------------------#





#-------------------------------- USER WATCHES ---------------------------------------#
watch1 = IssuesWatch.create(user_id: 1, issue_id: 1)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 2)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 3)
watch4 = IssuesWatch.create(user_id: 2, issue_id: 1)
watch5 = IssuesWatch.create(user_id: 2, issue_id: 2)
#-------------------------------------------------------------------------------------#





#-------------------------------- CATEGORIES -----------------------------------------#
heavy =      Category.create(name: "Heavy", description: "Our hero will need to lift >50 lbs.")
very_heavy = Category.create(name: "Very Heavy", description: "Our hero will need to lift >100 lbs.")
dirty =      Category.create(name: "Dirty", description: "Our hero will need to clean the area or item.")
tools =      Category.create(name: "Tools", description: "Our hero will need to bring a tool (e.g., screwdriver, hammer). See description for the submitter’s opinion for what tools are required..")
yard_work =  Category.create(name: "Yard Work & Removal", description: "Our hero can clean up the community area and remove any yard waste or rubbish.")
handyman =   Category.create(name: "General Handyman", description: "Our hero would perform minor repairs.")
escalate =   Category.create(name: "Escalate", description: "This issue is bigger than what someone in our community can solve, and needs a hero to alert the city / public officials.")
#-------------------------------------------------------------------------------------#





#-------------------------------- CATEGORIES-ISSUES ----------------------------------#
heavy.issues << trashcan
very_heavy.issues << manatee
dirty.issues << spilt_dirt
tools.issues << wood
yard_work.issues << lawn_fix
handyman.issues << screwloose
escalate.issues << smashcan
escalate.issues << dumb_cat
#-------------------------------------------------------------------------------------#
