Rails.application.routes.draw do

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get '/users/:id', to: 'users#show', as: :user

  post '/issues_watches', to: 'users#create_watch'
  delete '/issues_watches/:id', to: 'users#delete_watch'

  post '/users_votes', to: 'users#create_vote'
  delete '/users_votes/:id', to: 'users#delete_vote'

  get '/my_profile', to: 'users#my_profile', as: :my_profile
  get '/profile', to: 'profile#show'
  get '/profile/edit', to: 'profile#edit'
  put '/profile', to: 'profile#update'


  resources :issues do
    resources :fixes
  end

  post '/issues/:issue_id/comments', to: 'comments#issue_create', as: :issue_comments
  delete '/issues/:issue_id/comments/:id', to: 'comments#issue_destroy', as: :issue_comment

  post '/issues/:issue_id/fixes/:fix_id/comments', to: 'comments#fix_create', as: :fix_comments
  delete '/issues/:issue_id/fixes/:fix_id/comments/:id', to: 'comments#fix_destroy', as: :fix_comment

  get 'welcome/index'
  get '/dashboard', to: 'welcome#show', as: :dashboard
  get '/discover', to: 'welcome#discover', as: :discover
  get '/registerlogin', to: 'welcome#register_login', as: :register_login

  post '/images', to: 'welcome#image', as: :image_post

  post '/search', to: 'welcome#search'

  match '*path' => 'welcome#show', via: [:get]

  root 'welcome#index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
