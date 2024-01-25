# ApplicationRecord.transaction do

require "open-uri"

  puts "Destroying tables..."
  User.destroy_all
  Product.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('products')

  puts "Creating users..."
  User.create!(
    name: 'Demo User', 
    email: 'demo@user.io', 
    password: 'password'
  )

  10.times do
    User.create!({
      name: Faker::Name.unique.name,
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  m1000rr = Product.create!({
    name: 'M 1000 RR',
    description: 'For all those driven by their passion and ready to take on challenges. For all those who refuse to give up one single millimeter or millisecond: The BMW M RR is the superbike homologated for racing. It was optimized in the wind tunnel and further developed on the circuit. It has optimized aerodynamics and uses carbon, resulting in a higher top speed. Its engine and chassis remain as powerful and direct as ever. The M RR stands for absolute performance and exclusivity down to the last detail. Just the typical M. ',
    price: '38740',
    category: 'Motorcycle',
    brand: 'BMW',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  m1000rr.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/2023-BMW-M1000RR-18-scaled.webp"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  desertx = Product.create!({
    name: 'DesertX Rally',
    description: 'Whether you’re looking for off-road adventure or the competition of a rally-raid, the DesertX Rally is here to help you conquer the toughest challenges and push yourself beyond every limit.',
    price: '22995',
    category: 'Motorcycle',
    brand: 'Ducati',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  desertx.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/DesertX-Rally-MY23-Model-Preview-1050x650.png"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  diavel = Product.create!({
    name: 'Diavel V4',
    description: 'Muscular, gritty, with its broad "shoulders" and proudly visible four-exit exhaust, the Diavel V4 is designed to convey boldness and not go unnoticed. Starting with the new front and rear light cluster, to the retractable passenger footpegs and the retractable rear grab bar are the details that make the difference and make the design of this bike even more unique and unmistakable.',
    price: '26995',
    category: 'Motorcycle',
    brand: 'Ducati',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  diavel.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/SPIN_DIAVEL_V4_RED.01.webp"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  superl = Product.create!({
    name: 'Superleggera V4',
    description: 'The epitome of engineering excellence, cutting-edge technology and aerodynamic design. The new Superleggera V4 represents the dream of designing the only motorcycle in the world approved for road use with carbon fiber frame, swinging arm and rims with an unbeatable power/weight ratio of 1.54 hp/kg.',
    price: '100000',
    category: 'Motorcycle',
    brand: 'Ducati',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  superl.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/MY-21-Superleggera-V4-01-Model-Blocks-630x390-v03.png"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  v4r = Product.create!({
    name: 'Panigale V4 R',
    description: 'Ducati presents the new Panigale V4 R: the bike that adopts technical solutions previously reserved for MotoGP and WorldSBK Championship.

    The closest production model to a competition bike ever.',
    price: '45495',
    category: 'Motorcycle',
    brand: 'Ducati',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  v4r.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/Panigale-V4R-MY23-Model-Preview-1050x650.png"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

s1000rr = Product.create!({
    name: 'S 1000 RR',
    description: 'The RR is now even more focused and more precisely geared towards pure performance. For those who increasingly demand more. More from themselves. More each lap. And more from their RR. Simply put: #NeverStopChallenging. Leading the way is a matter of millimeters, especially in the circles the RR has always been a part of. That’s why we have streamlined and evolved the RR where it matters most: from the new steering angle sensor with Brake Slide Assist and Slide Control as well as the integration of M components and improvements to the electronics and crucial processes for modifying the bike for the race track. And all this with a clear goal in mind – claiming the pole position over and over again.',
    price: '25980',
    category: 'Motorcycle',
    brand: 'BMW',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  s1000rr.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/bmw-s1000rr-23-03.jpg"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  m1000r = Product.create!({
    name: 'M 1000 R',
    description: 'Pushes you to the limit: the M 1000 R. In short, the M R. Superbike meets dynamic roadster. Its heritage stems from M racing developers and the race track. A stunning 205 hp with a top speed of 174 mph and you’re in control – whether within the speed limit on country roads or the race track. The bike is very forgiving, but it will never forgive you for not riding it. Maximum performance: a must. Your objective: exceed – dominate the road. M colors clearly signal this. Unmissable: the sound of the M R four-cylinder engine. Can you hear it calling you? Start the engine!',
    price: '26945',
    category: 'Motorcycle',
    brand: 'BMW',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  m1000r.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/2023-BMW-M1000R-29-scaled.webp"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  r1300 = Product.create!({
    name: 'R 1300 GS',
    description: 'No compromises; everything is tailored to your needs. How would you like to sit while you reach new personal heights? Higher? Lower? Single-seat? With a passenger? Do you prefer to ride with just the essentials or with a lot of luggage? Would you rather go on comfortable long-distance journeys or sporty off-road runs? The innovative modular frame concept can fulfil all of your desires. Tell me what the perfect touring enduro would be – you may well be right.',
    price: '19890',
    category: 'Motorcycle',
    brand: 'BMW',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  r1300.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/1300gs.jpg"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  rush = Product.create!({
    name: 'Rush 10000',
    description: 'Designed for heart-stopping, tarmac-burning take-offs. Its untamed beastly power and its arrogant, irreverent appeal, make it totally irresistible.',
    price: '50098',
    category: 'Motorcycle',
    brand: 'MV Agusta',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  rush.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/rush-xl.png"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  brutale = Product.create!({
    name: '1000 RR Assen',
    description: 'Hand-built in Italy as a numbered run of just 300 units, this prestigious limited edition is the result of direct collaboration with the Assen circuit and characterised by a specific colour scheme on a blue and silver base.',
    price: '58998',
    category: 'Motorcycle',
    brand: 'MV Agusta',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  brutale.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/download+(1).png"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  superveloce = Product.create!({
    name: 'Superveloce',
    description: 'Modern shapes and traces of the past combine in one timeless, and therefore very contemporary, design. But the appeal of the Superveloce goes beyond its aesthetics, to its performance, acceleration and speed.',
    price: '24598',
    category: 'Motorcycle',
    brand: 'MV Agusta',
    dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
    weight: "#{rand(1..10)}kg"
  })
  
  superveloce.photos.attach(
    io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/download+(2).png"),
    filename: "2023-BMW-M1000RR-18-scaled.webp"
  )

  dragster = Product.create!({
  name: 'Dragster RC SCS',
  description: 'Unimaginably compact, it is designed for blistering acceleration, with a front end that skims the asphalt and the dominating sound of the in-line three-cylinder engine. Its particularly short tail section is unmistakable as it darts away towards the horizon.',
  price: '24799',
  category: 'Motorcycle',
  brand: 'MV Agusta',
  dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
  weight: "#{rand(1..10)}kg"
})

dragster.photos.attach(
  io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/download+(3).png"),
  filename: "2023-BMW-M1000RR-18-scaled.webp"
)

r1m = Product.create!({
  name: 'R1M',
  description: 'Featuring iconic R‑Series styling, sophisticated electronic controls, Supersport braking and suspension performance, and the world-renowned crossplane CP4 engine.',
  price: '27399',
  category: 'Motorcycle',
  brand: 'Yamaha',
  dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
  weight: "#{rand(1..10)}kg"
})

r1m.photos.attach(
  io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/24-YZF1000M-BWM-360-03-1.JPG.webp"),
  filename: "2023-BMW-M1000RR-18-scaled.webp"
)

mt10 = Product.create!({
  name: 'MT-10 SP',
  description: "The highest specification Master of Torque is here. Once you experience the MT‑10 SP's total performance, you'll know you've truly entered the Dark Side.",
  price: '16999',
  category: 'Motorcycle',
  brand: 'Yamaha',
  dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
  weight: "#{rand(1..10)}kg"
})

mt10.photos.attach(
  io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/24-YAM-MT10SPNS-US-BWM2-360-03-1.JPG.webp"),
  filename: "2023-BMW-M1000RR-18-scaled.webp"
)

xsr = Product.create!({
  name: 'XSR900',
  description: "With timeless design inspired by Yamaha’s legendary racing heritage and the sheer power of its renowned CP3 powerplant, the XSR900 is the rebirth of a legend.",
  price: '10299',
  category: 'Motorcycle',
  brand: 'Yamaha',
  dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
  weight: "#{rand(1..10)}kg"
})

xsr.photos.attach(
  io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/24-XSR900-SW-360-03-1.JPG.webp"),
  filename: "2023-BMW-M1000RR-18-scaled.webp"
)

tracer = Product.create!({
  name: 'Tracer 9 GT+',
  description: "The new 2024 TRACER 9 GT+ is Yamaha’s ultimate Sport Tourer with a best-in-class specification that delivers unprecedented levels of versatility, functionality, comfort and control.",
  price: '16499',
  category: 'Motorcycle',
  brand: 'Yamaha',
  dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
  weight: "#{rand(1..10)}kg"
})

tracer.photos.attach(
  io: URI.open("https://amasphere-seeds1.s3.amazonaws.com/24-TRACER9GT--US-PGD-360-03-1.JPG.webp"),
  filename: "2023-BMW-M1000RR-18-scaled.webp"
)



  # puts "Creating products..."
  # 50.times do
  #   Product.create!({
  #     name: Faker::Commerce.product_name,
  #     description: Faker::Lorem.sentence,
  #     price: Faker::Commerce.price(range: 0.99..99.99),
  #     category: Faker::Commerce.department,
  #     brand: Faker::Company.name,
  #     dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
  #     weight: "#{rand(1..10)}kg"
  #   })
  # end

  puts "Done!"



