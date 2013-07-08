require 'sinatra'
require 'mongoid'
require 'oj'
require "sinatra/reloader" if development?

Mongoid.load!("mongoid.yml")

class Doc
  include Mongoid::Document

  field :name_first, type: String
  # field :name_middle, type: String
  field :name_last, type: String
  # field :phone, type: String
  # field :email, type: String
  # field :linked_in, type: String 
  # field :website, type: String

 # embedded_in :Doc

end

# class StreetAddress
#   include Mongoid::Document
#   field :street, type: String
#   # field :city,  type: String
#   # field :state, type: String
#   # field :zip,   type: String


  # embeds_many :street_address

# end


get '/' do 
  content_type :json 

  docs = Doc.all

  docs.to_json
  
end

get '/:id' do
  content_type :json

  doc = Doc.find params[:id]

  doc.to_json
end

post '/' do
  content_type :json
  data = JSON.parse(request.body.read)["resume"] 
  doc = Doc.create!(data)
  doc.to_json 
end

 put '/:id' do
  content_type :json
  data = JSON.parse(request.body.read)["resume"] 
  doc = Doc.find params[:id]
  doc.update_attributes!(data)
  doc.to_json

end

delete '/:id' do
  doc = Doc.find (params[:id])
  doc.destroy
  "Goodbye!"
end
# DONT UN COMMENT BELOW

# var data = {"resume:" {"name_first":"Bob"}}

#implement POST, PUT, DELETE



#create
# data = JSON.parse(request.body,read)["resume"]
#doc = Doc.create!(data)

#update:
#data = JSON.parse(request.body.read)["resume"]
#doc = Doc.find params[:id]
#doc.update_attributes!(data)

#destroy:
#data = JSON.parse(request.body.read)["resume"]
#doc.destroy

# def field(name, options)
# Post /api/resumes
# Get  /api/resumes/id
# PUT  /api/resumes/id
# DELETE /api/resumes/id
# $(function(){

#   })