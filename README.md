## Fixstart

Crowdsourced Community Upkeep

## Demo

Check out our [Fixstart](http://fixstart.herokuapp.com/) demo on Heroku. Please be patient as we spin up our servers after you click.

## Technologies

**Frontend:**
* HTML + CSS
* JavaScript
* jQuery + Ajax
* React

**Backend:**
* Ruby
* PostgreSQL
* Rails
* Node & Socket.io
* Redis

**Testing:**
* Rspec

## How it Works

**Models:**
  * **User** - Incorporates Devise for user authentication
  * **UsersVote** - Manages community "up votes" for individual issues
  * **Issue**
  * **IssueComment** - Packages comments for a given issue
  * **Fix**
  * **FixComment** - Packages comments for a given fix
  * **IssuesWatch** - This model allows users to "watch" or track a given issue over time
  * **Category** - This is our list of categories for a given issue
  * **Communities** - For our Beta version, we only have a "global" or public community, but overtime we are planning on releasing individual and private communities

## Invitation

Feel free to get in touch [on Twitter](https://twitter.com/fixtart)!

To setup locally:

* fork + clone
* bundle install
* bundle exec rake db:create db:migrate db:seed
* bundle exec rails s
* browser -> localhost:3000

## References

**Schema:**

![Schema](http://i.imgur.com/xnhuHuy.png)

**General app structure:**

<!-- ![Appstructure]() -->

**React tree:**

<!-- ![Reacttree]() -->

**Homepage wireframe:**

<!-- ![Wireframe]() -->

**Docs**

**Gems**

**Tutorials**

**General**
