# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do |i|
  collcetion = Collection.create(
    title: "おすすめラーメン3選",
    description: "2019年前半で食べたラーメンから、印象に残ったものをピックアップ。"
  )
  recommend = Recommend.create(
    name: "唐揚げ乗せ味噌ラーメン",
    price: 900,
    reco_image: open("#{Rails.root}/db/sample/sample02.jpg"),
    collection_id: Collection.last.id
  )
  recommend.shop = Shop.create(
    name: "ラーメンとうせんぼ",
    googlemap_link: "https://maps.google.com/?cid=2919324887577189048",
    prefecture: "福岡県"
  )

  recommend2 = Recommend.create(
    name: "きたなトラン的な豚骨ラーメン",
    price: 750,
    reco_image: open("#{Rails.root}/db/sample/sample03.jpg"),
    collection_id: Collection.last.id
  )
  recommend2.shop = Shop.create(
    name: "乙姫ラーメン",
    googlemap_link: "https://maps.google.com/?cid=1451368866080092245",
    prefecture: "熊本県"

  )
  
  recommend3 = Recommend.create(
    name: "オファー面談後に食べたラーメン",
    price: 850,
    reco_image: open("#{Rails.root}/db/sample/sample04.jpg"),
    collection_id: Collection.last.id
  )
  recommend3.shop = Shop.create(
    name: "ラーメン魁力屋 五反田店",
    googlemap_link: "https://maps.google.com/?cid=11501312251885737951",
    prefecture: "東京都"
  )

  
end 

