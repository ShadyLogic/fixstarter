# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create()

marshall = User.new(email: "marshall@trash.org", first_name: "Mash", last_name: "Hannersly", bio: "I live in a trash can. Life. I live for derelict (my balls). I'm a derelict vagabond.", avatar_url: "https://avatars2.githubusercontent.com/u/9030453?v=3&s=460")
marshall.password = "trashcan"
marshall.save!

tim = User.new(email: "tim@trash.org", first_name: "Smash", last_name: "Canada")
tim.password = "trashcan"
tim.save!

jacob = User.new(email: "jacob@trash.org", first_name: "Fist", last_name: "Punchersly")
jacob.password = "trashcan"
jacob.save!

andrea = User.new(email: "andrea@trash.org", first_name: "Doctor", last_name: "Draaay")
andrea.password = "trashcan"
andrea.save!

global = Community.create(title: "global")

trashcan = Issue.create(user_id: 1, community_id: 1, title: "Trashcan fell down at 633 Folsom St", description: "It was a ghastly sight. Please help.", image_url: "http://dogcare.dailypuppy.com/DM-Resize/photos.demandstudios.com/getty/article/178/251/87794711.jpg?w=600&h=600&keep_ratio=1&webp=1", latitude: "1.1", longitude: "1.2", status: "closed" )
smashcan = Issue.create(user_id: 1, community_id: 1, title: "Marshall got smashed", description: "Trashcan had a long night. Someone needs to press his clothes.", image_url: "https://s-media-cache-ak0.pinimg.com/736x/af/70/d0/af70d0c1d52a1c60016b46a6207c0b30.jpg", latitude: "1.1", longitude: "1.2", status: "open" )
screwloose = Issue.create(user_id: 1, community_id: 1, title: "Marshall unscrewed the cookie jarlette", description: "He was hungry. It needs to be refilled and re-screwed", image_url: "http://2.bp.blogspot.com/-97Vou7CtPVI/TZxkaclKLTI/AAAAAAAAAO4/Mk6NaGRtamg/s1600/cute%2Bpuppy%2Bin%2Bjar%2Bvase%2Bbucket%2Bfunny%2Blol.jpg", latitude: "1.1", longitude: "1.2", status: "open" )

trashcanfix = Fix.create(user_id: 2, issue_id: trashcan.id, title: "Picked up trashcan", description: "Pulled him up and sent him off", image_url: "http://puppypicsonline.com/wp-content/uploads/2012/12/image.jpg")
trashcanfix2 = Fix.create(user_id: 3, issue_id: trashcan.id, title: "Marshall was still dirty", description: "Cleaned him off.", image_url: "http://www.effectivecreations.com/tattarga/images/labrador-puppy8.jpg")
smashcanfix = Fix.create(user_id: 2, issue_id: smashcan.id, title: "Ironed the Marshall", description: "Needed at least 30 minutes to iron properly. But he's good to go now.", image_url: "https://s-media-cache-ak0.pinimg.com/736x/a5/b9/c2/a5b9c26880b0213c1c967f4da56a94e6.jpg")

trashcanfixcomment = FixComment.create(fix_id: trashcanfix.id, user_id: 1, content: "Yay! You did a nice job cleaning me up. Thanks yo.")
trashcanfixcomment2 = FixComment.create(fix_id: trashcanfix.id, user_id: 2, content: "Yo. MARSHALL. Did you post your own issue?!")

trancancomment = IssueComment.create(issue_id: trashcan.id, user_id: 3, content: "Oh the huge manatee!")
smashcancomment = IssueComment.create(issue_id: smashcan.id, user_id: 4, content: "He so wrinkly.")

bump1 = UsersBump.create(user_id: 1, issue_id: 1)
bump2 = UsersBump.create(user_id: 1, issue_id: 2)
bump3 = UsersBump.create(user_id: 1, issue_id: 3)
bump4 = UsersBump.create(user_id: 2, issue_id: 1)
bump5 = UsersBump.create(user_id: 2, issue_id: 2)

watch1 = IssuesWatch.create(user_id: 1, issue_id: 1)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 2)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 3)
watch4 = IssuesWatch.create(user_id: 2, issue_id: 1)
watch5 = IssuesWatch.create(user_id: 2, issue_id: 2)

heavy = Category.create(name: "Heavy", description: "Needs someone who can lift over 50 lbs.")
dirty = Category.create(name: "Dirty", description: "Needs to be cleaned. Badly.")

manatee = CategoriesIssue.create(issue_id: 1, category_id: heavy.id)
filth = CategoriesIssue.create(issue_id: 2, category_id: dirty.id)
