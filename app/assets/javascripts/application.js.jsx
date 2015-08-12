// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require semantic-ui
// = require semantic-ui/sidebar
//= require semantic-ui/modal
//= require semantic-ui/dropdown
//= require components
//= require_tree .


$(function(){
  $('#m_btn').on('click',function(){
    $('#m_menu').sidebar('toggle')
  })
})



//  require semantic-ui/accordion
//  require semantic-ui/checkbox
//  require semantic-ui/dimmer
//  require semantic-ui/embed
//  require semantic-ui/modal
//  require semantic-ui/nag
//  require semantic-ui/popup
//  require semantic-ui/progress
//  require semantic-ui/rating
//  require semantic-ui/search
//  require semantic-ui/shape
//  require semantic-ui/sticky
//  require semantic-ui/tab
//  require semantic-ui/transition
