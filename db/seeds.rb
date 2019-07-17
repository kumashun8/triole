# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

collcetion = Collection.create(title: "サンプルだお")
[1,2,3].each do |i|
  recommend = Recommend.create(
    name: i.to_s,
    price: i * 100,
    reco_image: open("#{Rails.root}/db/sample/sample01.jpg"),
    collection_id: Collection.last.id
  )
  recommend.shop = Shop.create(
    name: "どこか",
    googlemap_link: "https://maps.google.com/?cid=11668355302196308635"
  )
end 

