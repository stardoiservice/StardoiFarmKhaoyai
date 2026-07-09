// Stardoi Sheep Farm Khao Yai - Client Logic
// Features: Bilingual translations, Time-of-day theme controller, Interactive modals, Ticket estimator

// ==========================================================================
// 1. Multi-language Translations Dictionary
// ==========================================================================
const translations = {
  // Navigation Links
  'nav-home': { th: 'หน้าแรก', en: 'Home', zh: '首页', ja: 'ホーム' },
  'nav-about': { th: 'รู้จักสตาร์ดอย', en: 'About Stardoi', zh: '关于星山', ja: 'スタードイについて' },
  'nav-flock': { th: 'น้องแกะของเรา', en: 'Meet Our Flock', zh: '我们的羊群', ja: '羊たちに会う' },
  'nav-activities': { th: 'กิจกรรม', en: 'Activities', zh: '活动', ja: 'アクティビティ' },
  'nav-booking': { th: 'จองตั๋ว & พิกัด', en: 'Booking & Location', zh: '门票预订与位置', ja: 'チケット予約・アクセス' },

  // Hero Section
  'hero-tagline': { th: 'สัมผัสประสบการณ์พักผ่อนเหนือระดับ ท่ามกลางสายหมอกแห่งเขาใหญ่', en: 'Experience cuteness amidst the mist at Khao Yai', zh: '在考艾的云雾中体验无尽的可爱', ja: 'カオヤイの霧の中で可愛さを体験する' },
  'hero-title': { th: 'Stardoi Sheep Farm Khao Yai', en: 'Stardoi Sheep Farm', zh: '星山绵羊农场', ja: 'スタードイ羊牧場' },
  'hero-desc': { th: 'หลีกหนีความวุ่นวาย สู่ความสงบในฟาร์มแกะสไตล์สวิสอัลไพน์ โอบล้อมด้วยขุนเขาเขียวขจี เติมเต็มวันพักผ่อนด้วยคาเฟ่บรรยากาศอบอุ่น และความน่ารักของฝูงแกะสายพันธุ์แท้', en: 'Escape the bustle to our Swiss Alpine-inspired sheep farm. Surrounded by lush mountains, cozy cafe vibes, and our fluffy flock of sheep.', zh: '远离喧嚣，来到我们这座受瑞士阿尔卑斯风格启发的绵羊农场。被翠绿的山脉、温馨的咖啡馆氛围以及毛茸茸的羊群环绕着。', ja: '都会の喧騒から逃れて、スイス・アルプス風の羊牧場へ。緑豊かな山々、居心地の良いカフェ、そしてふわふわの羊の群れに囲まれてリラックスしましょう。' },
  'hero-cta': { th: 'จองบัตรเข้าชม', en: 'Book Ticket Now', zh: '立即订票', ja: 'チケットを予約する' },
  'hero-secondary-cta': { th: 'กิจกรรมในฟาร์ม', en: 'Explore Activities', zh: '探索活动', ja: 'アクティビティを見る' },

  // About Section
  'about-tag': { th: 'ยินดีต้อนรับสู่สตาร์ดอย', en: 'Welcome to Stardoi', zh: '欢迎来到星山', ja: 'スタードイへようこそ' },
  'about-title': { th: 'มนต์เสน่ห์แห่งสวิตเซอร์แลนด์ บนผืนป่าเขาใหญ่', en: 'Thailand\'s Little Switzerland in Khao Yai', zh: '考艾的“泰国小瑞士”', ja: 'タイのリトル・スイス、カオヤイ' },
  'about-badge-val': { th: 'ธรรมชาติ 100%', en: '100% Nature', zh: '100% 纯自然', ja: '100% 自然' },
  'about-badge-lbl': { th: 'โอบล้อมด้วยขุนเขา', en: 'Mountain Vibe', zh: '山脉环绕', ja: '山々に囲まれて' },
  'about-h3': { th: 'ทำไมต้องมาเช็คอินที่ สตาร์ดอย?', en: 'Why Check-in at Stardoi?', zh: '为什么要来星山打卡？', ja: 'なぜスタードイを訪れるべきなのか？' },
  'about-p1': { th: 'Stardoi Sheep Farm ตั้งตระหง่านบนเนินเขาที่งดงามที่สุดของเขาใหญ่ รังสรรค์พื้นที่ในสไตล์ยุโรปคันทรี เพื่อมอบประสบการณ์การพักผ่อนที่เหนือกว่า ให้คุณได้สัมผัสสายหมอกยามเช้าและทุ่งหญ้าเขียวขจีที่จะช่วยบำบัดจิตใจอย่างสมบูรณ์แบบ', en: 'Stardoi Sheep Farm is situated on one of the most scenic hills of Khao Yai. We designed our farm in a European countryside style, allowing visitors to touch nature. The morning mist and green meadows will soothe and refresh your soul.', zh: '星山绵羊农场位于考艾风景最美的山丘之一。我们以欧洲乡村风格设计农场，让游客能够真正接触自然。清晨的薄雾和翠绿的草地将抚慰和刷新您的心灵。', ja: 'スタードイ羊牧場は、カオヤイで最も美しい丘の1つに位置しています。ヨーロッパの田舎風にデザインされた牧場で、自然と触れ合うことができます。朝霧と緑の牧草地があなたの心を癒し、リフレッシュさせます。' },
  'about-p2': { th: 'จุดเด่นที่พลาดไม่ได้คือ ฝูงแกะสายพันธุ์คอร์ริเดล (Corriedale) กว่า 100 ตัว พร้อมลูกแกะแสนน่ารัก ที่รอให้คุณและครอบครัวได้สัมผัสและป้อนอาหารอย่างใกล้ชิด นอกจากนี้ เรายังพร้อมเสิร์ฟความสุขผ่าน Stardoi Cafe คาเฟ่เรือนไม้สไตล์โคซี่ที่อบอวลไปด้วยกลิ่นหอมของเบเกอรี่อบสดใหม่ทุกวัน', en: 'The main highlight is our flock of over 100 Corriedale sheep and numerous adorable lambs! Kids can get up close, touch, and feed them. Nowhere else offers more joy than Stardoi Farm! We also have a cozy wooden cafe serving freshly baked pastries daily.', zh: '最大的亮点是我们拥有100多只科里代尔羊（Corriedale）和众多可爱的小羊羔！孩子们可以近距离接触并给它们喂食。没有其他地方能比星山农场提供更多的欢乐了！我们还有一家舒适的木制咖啡馆，每天供应新鲜出炉的糕点。', ja: '最大のハイライトは、100頭以上のコリデール羊とたくさんの可愛い子羊たちです！子供たちは近くで触れ合い、エサをあげることができます。スタードイ牧場以上に楽しい場所はありません！また、毎日焼きたてのペストリーを提供する温かみのある木造カフェもあります。' },
  'feat-scenery-title': { th: 'วิวภูเขา 360 องศา', en: '360° Mountain View', zh: '360° 山景', ja: '360° のマウンテンビュー' },
  'feat-scenery-desc': { th: 'ถ่ายรูปมุมไหนก็สวยเหมือนอยู่สวิตเซอร์แลนด์', en: 'Photos look like Switzerland from every angle', zh: '从任何角度拍照都像在瑞士一样美', ja: 'どこから写真を撮ってもスイスのような美しさ' },
  'feat-organic-title': { th: 'อาหารแกะพรีเมียม', en: 'Premium Feeding', zh: '优质饲料', ja: 'プレミアムなエサやり' },
  'feat-organic-desc': { th: 'หญ้าและพืชผักออร์แกนิก ปลอดภัยต่อเด็กๆ และสัตว์เลี้ยง', en: 'Organic grass and vegetables, safe for kids & sheep', zh: '有机牧草和蔬菜，对孩子和羊群都很安全', ja: '子供と羊に安全なオーガニック牧草と野菜' },

  // Flock Section
  'flock-tag': { th: 'ดาวเด่นประจำฟาร์ม', en: 'Farm Stars', zh: '农场之星', ja: '牧場のスターたち' },
  'flock-title': { th: 'ทำความรู้จักสมาชิกคนสำคัญของเรา', en: 'Meet Our Fluffy Flock', zh: '认识我们毛茸茸的羊群', ja: 'ふわふわの羊たちに会いましょう' },
  'flock-card-mumu-tag': { th: 'สายกินจุ', en: 'Corriedale', zh: '科里代尔羊', ja: 'コリデール' },
  'flock-card-mumu-name': { th: 'น้องมูมู่ (Mumu)', en: 'Mumu', zh: '木木 (Mumu)', ja: 'ムム (Mumu)' },
  'flock-card-mumu-desc': { th: 'แกะคอร์ริเดลขนปุยหนานุ่มฟูที่สุดในฟาร์ม อ่อนโยนและน่ารัก...', en: 'The fluffiest Corriedale sheep in the farm. Extremely gentle and cute...', zh: '农场里毛最蓬松的科里代尔羊。极其温顺可爱...', ja: '牧場で最もふわふわなコリデール羊。とても穏やかで可愛い...' },
  'flock-card-mumu-btn': { th: 'ดูประวัติน้อง', en: 'View Profile', zh: '查看简介', ja: 'プロフィールを見る' },
  'flock-card-Kero-tag': { th: 'จอมซน', en: 'Corriedale', zh: '科里代尔羊', ja: 'コリデール' },
  'flock-card-Kero-name': { th: 'น้องเคโระ (Kero)', en: 'Kero', zh: '克罗 (Kero)', ja: 'ケロ (Kero)' },
  'flock-card-Kero-desc': { th: 'ลูกแกะคอร์ริเดลสุดซุกซนที่ชอบกระโดดเล่นและดึงเชือกรองเท้า...', en: 'The playful Corriedale lamb who loves jumping and playing around...', zh: '那只爱跳跃和玩耍的调皮科里代尔小羊羔...', ja: 'ジャンプして遊ぶのが大好きな遊び心のあるコリデールの子羊...' },
  'flock-card-Kero-btn': { th: 'ดูประวัติน้อง', en: 'View Profile', zh: '查看简介', ja: 'プロフィールを見る' },
  'flock-card-coco-tag': { th: 'ดาวเด่นไอจี', en: 'Instagrammer', zh: 'Instagram网红', ja: 'インスタグラマー' },
  'flock-card-coco-name': { th: 'น้องโกโก้ (Coco)', en: 'Coco', zh: '可可 (Coco)', ja: 'ココ (Coco)' },
  'flock-card-coco-desc': { th: 'ลูกแกะคอร์ริเดลขนสีน้ำตาลช็อกโกแลตสุดหล่อที่รู้มุมกล้อง โพสท่าเก่งสุดๆ...', en: 'Our chocolate-brown Corriedale photogenic star who strikes a pose instantly...', zh: '我们上镜的巧克力棕色科里代尔明星，随时准备摆姿势...', ja: 'すぐにポーズをとる、写真映えするチョコレートブラウンのコリデールスター...' },
  'flock-card-coco-btn': { th: 'ดูประวัติน้อง', en: 'View Profile', zh: '查看简介', ja: 'プロフィールを見る' },

  // Activities Section
  'act-tag': { th: 'ประสบการณ์สุดพิเศษ', en: 'Unforgettable Experiences', zh: '难忘的经历', ja: '忘れられない体験' },
  'act-title': { th: 'รังสรรค์กิจกรรมสุดพิเศษ เพื่อทุกความทรงจำ', en: 'Fun Activities for Everyone', zh: '适合所有人的趣味活动', ja: 'みんなで楽しめるアクティビティ' },
  'act-1-title': { th: 'ใกล้ชิดฝูงแกะท่ามกลางธรรมชาติ', en: 'Close Feeding Session', zh: '近距离喂食体验', ja: '間近でのエサやり体験' },
  'act-1-desc': { th: 'สัมผัสความน่ารักของฝูงแกะขนปุยในทุ่งหญ้ากว้างใหญ่ พร้อมป้อนอาหารด้วยหญ้าและแครอทออร์แกนิกที่คัดสรรมาเป็นพิเศษ เพื่อสุขภาพที่ดีของสัตว์น้อย และความปลอดภัยสูงสุด', en: 'Get up close with the fluffy sheep in our wide pasture. Feed them high-quality organic grass and carrots while taking cute photos.', zh: '在宽阔的牧场里与毛茸茸的羊群亲密接触。给它们喂食优质的有机牧草和胡萝卜，同时拍下可爱的照片。', ja: '広い牧場でふわふわの羊と触れ合えます。高品質なオーガニック牧草やニンジンをあげながら、可愛い写真を撮りましょう。' },
  'act-2-title': { th: 'พายเรือคายัค ผจญภัยน้ำผุดธรรมชาติ', en: 'Kayaking in Natural Springs', zh: '天然泉水皮划艇', ja: '天然泉でのカヤック' },
  'act-2-desc': { th: 'พายเรือคายัคสุดชิลในลำธารน้ำผุดธรรมชาติใสแจ๋ว ท่ามกลางบรรยากาศร่มรื่นของต้นไม้ใหญ่ สนุกและปลอดภัยสำหรับทุกคน', en: 'Relax and kayak in the crystal-clear natural spring stream surrounded by lush trees. Fun and safe for everyone.', zh: '在绿树成荫、清澈见底的天然泉水溪流中放松划皮划艇。安全又有趣，适合所有人。', ja: '緑豊かな木々に囲まれた透き通った天然泉の小川でリラックスしてカヤック。安全で誰でも楽しめます。' },
  'act-alpaca-title': { th: 'ป้อนอาหารอัลปาก้าอย่างใกล้ชิด', en: 'Alpaca Feeding', zh: '喂食羊驼', ja: 'アルパカのエサやり' },
  'act-alpaca-desc': { th: 'พบกับความน่ารักของฝูงอัลปาก้าคอยาวขนปุย ยิ้มเก่งแสนรู้ ป้อนอาหารจากมือและถ่ายรูปเซลฟี่ได้อย่างใกล้ชิด', en: 'Meet our adorable long-necked, fluffy alpacas. Hand-feed them and take selfies with these smiling, smart creatures.', zh: '遇见我们可爱的长脖子毛绒羊驼。亲手喂食，并与这些爱笑、聪明的动物自拍。', ja: '長首でふわふわの可愛いアルパカに会いましょう。手からエサをあげて、笑顔の賢い動物たちと自撮りしましょう。' },
  'act-rabbit-title': { th: 'ป้อนอาหารกระต่าย', en: 'Rabbit Feeding', zh: '喂食兔子', ja: 'ウサギのエサやり' },
  'act-rabbit-desc': { th: 'เอาใจเด็กๆ ด้วยบ้านกระต่ายสุดคิวท์ แวะมาป้อนแครอทและลูบขนกระต่ายน้อยหลากสายพันธุ์ที่กระโดดไปมาอย่างร่าเริง', en: 'A treat for kids with our cute rabbit house. Feed carrots and pet various breeds of joyful, hopping bunnies.', zh: '在可爱的兔子屋里给孩子们带来惊喜。喂胡萝卜并抚摸各种欢蹦乱跳的兔子。', ja: '可愛いウサギ小屋は子供たちに大人気。色々な種類の元気なウサギにニンジンをあげて撫でましょう。' },
  'act-horse-title': { th: 'ขี่ม้าชมวิว', en: 'Scenic Horseback Riding', zh: '观景骑马', ja: '絶景乗馬' },
  'act-horse-desc': { th: 'มีบริการขี่ม้าเพื่อถ่ายรูปและชมบรรยากาศทุ่งหญ้า มีเจ้าหน้าที่จูงให้ มือใหม่ก็เล่นได้สบายมาก ให้คุณรู้สึกเหมือนเป็นคาวบอยตัวจริง', en: 'Horseback riding service for photos and scenic views. Guided by staff, it’s perfect for beginners. Feel like a real cowboy!', zh: '提供骑马拍照和观赏美景的服务。由工作人员牵引，非常适合初学者。感觉就像个真正的牛仔！', ja: '写真撮影や絶景を楽しむ乗馬サービス。スタッフが案内するので初心者でも安心です。本物のカウボーイの気分を！' },
  'act-carousel-title': { th: 'ม้าหมุน', en: 'Classic Carousel', zh: '经典旋转木马', ja: 'クラシックメリーゴーランド' },
  'act-carousel-desc': { th: 'ให้ฟีลเหมือนอยู่ในสวนสนุกยุโรปท่ามกลางวิวภูเขา นั่งม้าหมุนสุดคลาสสิก ถ่ายรูปเก๋ๆ ย้อนวัยเด็กได้ทั้งครอบครัว', en: 'Feel like you are in a European amusement park amidst the mountains. Ride the classic carousel and take chic photos with the whole family.', zh: '仿佛置身于群山环抱的欧洲游乐园。乘坐经典的旋转木马，与全家人一起拍下别致的照片。', ja: '山々に囲まれたヨーロッパの遊園地にいるような気分に。クラシックなメリーゴーランドに乗って、家族みんなで素敵な写真を撮りましょう。' },
  'act-paint-title': { th: 'กิจกรรมระบายสีสร้างสรรค์', en: 'Creative Painting Activity', zh: '创意彩绘活动', ja: 'クリエイティブ・ペインティング' },
  'act-paint-desc': { th: 'ปลดปล่อยจินตนาการไปกับกิจกรรมระบายสีตุ๊กตาปูนปลาสเตอร์รูปน้องแกะและสัตว์น่ารักๆ สนุกสนานได้ทั้งครอบครัว พร้อมนำผลงานศิลปะชิ้นเดียวในโลกกลับบ้านเป็นที่ระลึก', en: 'Unleash your imagination with our plaster painting activity! Paint cute sheep and animals. It\'s fun for the whole family, and you can take your unique masterpiece home.', zh: '通过我们的石膏彩绘活动释放您的想象力！给可爱的羊和其他动物上色。这是一项适合全家的有趣活动，您还可以将这件独一无二的杰作带回家。', ja: '石膏ペインティングで想像力を解き放ちましょう！可愛い羊や動物たちに色を塗ります。家族みんなで楽しめ、世界に一つだけの作品を持ち帰ることができます。' },
  'act-photo-title': { th: 'ถ่ายรูปกับน้องแกะ', en: 'Photo with Sheep', zh: '与羊合影', ja: '羊と写真撮影' },
  'act-photo-desc': { th: 'บันทึกความทรงจำดีๆๆ สัมผัสความน่ารักของน้องแกะพันธุ์คอร์ริเดล ขนฟูนุ่มแสนเป็นมิตร พร้อมถ่ายรูปสวยๆ ท่ามกลางบรรยากาศธรรมชาติ', en: 'Capture great memories! Touch the cuteness of our friendly, fluffy Corriedale sheep and take beautiful photos amidst a natural atmosphere.', zh: '记录美好的回忆！触摸我们友好而毛茸茸的科里代尔羊，在自然的氛围中拍下美丽的照片。', ja: '素晴らしい思い出を写真に！フレンドリーでふわふわのコリデール羊と触れ合い、大自然の中で美しい写真を撮りましょう。' },
  'act-3-title': { th: 'Stardoi Cafe & Bakery', en: 'Stardoi Cafe & Bakery', zh: '星山咖啡与烘焙', ja: 'スタードイカフェ＆ベーカリー' },
  'act-3-tag': { th: 'ไฮไลท์ที่ห้ามพลาด', en: 'Must Visit', zh: '不容错过', ja: '必見' },
  'act-3-p': { th: 'ผ่อนคลายในคาเฟ่เรือนไม้โอ๊คดีไซน์อบอุ่น ลิ้มรสเบเกอรี่พรีเมียมอบสดใหม่ อย่างครัวซองต์เนยฝรั่งเศสแท้จับคู่กับชาผลไม้ซิกเนเจอร์ พร้อมดื่มด่ำวิวขุนเขาผ่านกระจกใสบานใหญ่แบบพาโนรามา', en: 'Relax in our oak wood cafe. Enjoy freshly baked pastries like butter French croissants, signature teas, and watch sheep graze right outside the glass window.', zh: '在我们温馨的橡木咖啡馆里放松。享用每天新鲜出炉的法式黄油牛角包、特色果茶，并透过大玻璃窗观看羊群吃草。', ja: '温かみのあるオーク材のカフェでリラックス。焼きたてのフレンチバタークロワッサンや特製フルーツティーを味わいながら、大きなガラス窓越しに羊たちが草をはむ様子を眺めましょう。' },
  'act-4-title': { th: 'ฟาร์มรักษ์โลก (Smart Farm)', en: 'Eco-Friendly Smart Farm', zh: '环保智能农场', ja: '環境に優しいスマートファーム' },
  'act-4-tag': { th: 'นวัตกรรมและธรรมชาติ', en: 'Innovation & Nature', zh: '创新与自然', ja: 'イノベーションと自然' },
  'act-4-p': { th: 'เราบริหารจัดการฟาร์มด้วยระบบที่ทันสมัย ใส่ใจสิ่งแวดล้อมและสวัสดิภาพของสัตว์ (Animal Welfare) น้องแกะและสัตว์ทุกตัวได้รับการดูแลอย่างดีเยี่ยมด้วยความรัก เพื่อส่งมอบรอยยิ้มให้กับผู้มาเยือนทุกคน', en: 'Our farm is managed with modern smart systems, prioritizing the environment and animal welfare. All our animals are raised with love and excellent care to bring smiles to every visitor.', zh: '我们的农场采用现代智能系统管理，优先考虑环境和动物福利。我们所有的动物都在充满爱和悉心的照料下成长，为每位游客带来微笑。', ja: '当牧場は最新のスマートシステムで管理されており、環境と動物福祉を最優先しています。すべての動物は愛情と細やかなケアを受けて育ち、訪れるすべての人に笑顔を届けます。' },

  // Slideshow Captions
  'slideshow-title': { th: 'ประมวลภาพบรรยากาศและกิจกรรม', en: 'Activity Photo Gallery', zh: '活动照片库', ja: 'アクティビティ写真ギャラリー' },
  'slide1-caption': { th: 'สัมผัสบรรยากาศฟาร์มแกะสุดชิลท่ามกลางขุนเขา', en: 'Experience the relaxing farm vibe amidst the mountains', zh: '体验群山之中令人放松的农场氛围', ja: '山々に囲まれたリラックスした牧場の雰囲気を体験' },
  'slide2-caption': { th: 'สนุกสนานไปกับกิจกรรมให้อาหารสัตว์นานาชนิด', en: 'Have fun feeding various friendly animals', zh: '享受喂食各种友好动物的乐趣', ja: '様々なフレンドリーな動物たちのエサやりを楽しむ' },
  'slide3-caption': { th: 'แวะพักจิบเครื่องดื่มและทานเบเกอรี่แสนอร่อยที่คาเฟ่', en: 'Enjoy delicious drinks and pastries at our cafe', zh: '在我们的咖啡馆享用美味的饮品和糕点', ja: 'カフェで美味しいドリンクとペストリーを楽しむ' },
  'slide4-caption': { th: 'มุมถ่ายรูปสวยๆ สไตล์ยุโรปมากมายทั่วฟาร์ม', en: 'Many beautiful European-style photo spots around the farm', zh: '农场周围有许多美丽的欧洲风情拍照点', ja: '牧場内には美しいヨーロッパ風の写真スポットがたくさんあります' },
  'slide5-caption': { th: 'เก็บความทรงจำดีๆ ที่ฟาร์มแกะสตาร์ดอย', en: 'Capture great memories at Stardoi Sheep Farm', zh: '在星山绵羊农场捕捉美好的回忆', ja: 'スタードイ羊牧場で素晴らしい思い出を記録しましょう' },

  // Branches Section
  'branches-tag': { th: 'ครอบครัวสตาร์ดอย', en: 'Stardoi Family', zh: '星山家族', ja: 'スタードイファミリー' },
  'branches-title': { th: 'สาขาอื่นๆ ของเรา', en: 'Our Other Branches', zh: '我们的其他分店', ja: 'その他の支店' },
  'branch-1-title': { th: 'Stardoi Coffee & Farmstay', en: 'Stardoi Coffee & Farmstay', zh: '星山咖啡与农场住宿', ja: 'スタードイ・コーヒー＆ファームステイ' },
  'branch-1-desc': { th: 'ที่พักฟาร์มแกะและคาเฟ่สุดชิล บรรยากาศดีบนดอยสะโง้ อ.เชียงแสน จ.เชียงราย', en: 'Relaxing sheep farm stay and cafe with great atmosphere at Doi Sa Ngo, Chiang Saen, Chiang Rai.', zh: '位于清莱清盛县多桑诺的放松绵羊农场住宿和氛围极佳的咖啡馆。', ja: 'チェンライ県チェンセーンのドイサゴにある、雰囲気抜群の羊牧場ステイとカフェ。' },
  'branch-1-loc': { th: '📍 ดอยสะโง้ เชียงแสน', en: '📍 Doi Sa Ngo, Chiang Saen', zh: '📍 清盛，多桑诺', ja: '📍 チェンセーン、ドイサゴ' },
  'branch-2-title': { th: 'Stardoi Farm Pattaya', en: 'Stardoi Farm Pattaya', zh: '星山农场芭提雅', ja: 'スタードイ牧場 パタヤ' },
  'branch-2-badge': { th: 'Coming Soon', en: 'Coming Soon', zh: '敬请期待', ja: '近日公開' },
  'branch-2-desc': { th: 'เตรียมพบกับฟาร์มแกะแห่งใหม่ใกล้ทะเล ที่พัทยา เร็วๆ นี้!', en: 'Get ready for a new sheep farm near the sea in Pattaya, coming soon!', zh: '准备好迎接即将在芭提雅海边开业的全新绵羊农场吧！', ja: '海に近いパタヤに新しい羊牧場がもうすぐオープンします！' },
  'branch-2-loc': { th: '📍 พัทยา (Pattaya)', en: '📍 Pattaya', zh: '📍 芭提雅 (Pattaya)', ja: '📍 パタヤ (Pattaya)' },

  // Visitor & Booking Section
  'booking-tag': { th: 'วางแผนการเดินทาง', en: 'Plan Your Visit', zh: '计划您的行程', ja: '訪問の計画' },
  'booking-title': { th: 'ข้อมูลการเข้าชม และสำรองสิทธิ์ล่วงหน้า', en: 'Visitor Info & Ticket Estimator', zh: '游客信息与门票估算', ja: '来場者情報とチケット見積もり' },
  'info-1-title': { th: 'เวลาทำการ', en: 'Opening Hours', zh: '营业时间', ja: '営業時間' },
  'info-1-desc': { th: 'เปิดให้บริการทุกวัน: 08:00 น. - 18:00 น.', en: 'Open Daily: 8:00 AM - 6:00 PM (No Holidays)', zh: '每日营业：上午 8:00 - 下午 6:00（无假日）', ja: '毎日営業：午前8:00〜午後6:00（無休）' },
  'info-2-title': { th: 'อัตราค่าเข้าชม', en: 'General Admission', zh: '普通门票', ja: '一般入場料' },
  'info-2-desc': { th: 'ผู้ใหญ่ : 120 บาท | เด็ก (สูงไม่เกิน 120 ซม.): เข้าชมฟรี', en: 'Adult: 120 THB | Child (under 120cm): FREE', zh: '成人：120泰铢 | 儿童（120厘米以下）：免费', ja: '大人：120バーツ | 子供（身長120cm以下）：無料' },
  'info-3-title': { th: 'ที่ตั้งฟาร์ม', en: 'Location Map', zh: '位置地图', ja: 'アクセスマップ' },
  'info-3-desc': { th: '161/2, หมูสี, ปากช่อง, นครราชสีมา 30130 (ใกล้น้ำผุดธรรมชาติบ้านท่าช้าง)', en: '161/2, Moosi, Pakchong, Nakhon Ratchasima, 30130 (Near Ban Tha Chang Natural Spring)', zh: '161/2, Moosi, Pakchong, Nakhon Ratchasima, 30130（靠近Ban Tha Chang天然泉水）', ja: '161/2, Moosi, Pakchong, Nakhon Ratchasima, 30130（バーン・ターチャーン天然泉近く）' },
  'calc-title': { th: 'ประเมินค่าใช้จ่ายเบื้องต้น', en: 'Entrance Fee Estimator', zh: '门票费用估算', ja: '入場料見積もり' },
  'calc-subtitle': { th: 'เพื่อการวางแผนทริปที่สมบูรณ์แบบ และรับสิทธิ์เข้าชมแบบ Fast Track', en: 'Estimate your visiting cost and get queue priority', zh: '估算您的游览费用并获得排队优先权', ja: '訪問費用を見積もり、優先入場キューを取得しましょう' },
  'label-adults': { th: 'บัตรเข้าชมปกติ (120 บาท/ท่าน)', en: 'Adult (120 THB/person)', zh: '成人 (120泰铢/人)', ja: '大人 (120バーツ/人)' },
  'label-kids': { th: 'เด็กเล็ก เข้าชมฟรี (สูงไม่เกิน 120 ซม.)', en: 'Small Child FREE (under 120cm)', zh: '幼童 免费 (120厘米以下)', ja: '幼児 無料 (身長120cm以下)' },
  'label-addons': { th: 'แพ็กเกจเสริมสุดพิเศษ', en: 'Special Value Add-ons', zh: '超值附加服务', ja: '特別バリューオプション' },
  'addon-feeding': { th: 'ชุดอาหารสัตว์ (100 บาท/ชุด)', en: 'Animal Feed (100 THB/set)', zh: '动物饲料 (100泰铢/套)', ja: '動物の餌 (100バーツ/セット)' },
  'addon-photo': { th: 'สิทธิ์กอดแกะถ่ายรูปใกล้ชิดแบบ VIP (+100 บาท)', en: 'VIP Close Sheep Hug & Photo Session (+100 THB/group)', zh: 'VIP 近距离拥抱羊群及拍照 (+100 泰铢/组)', ja: 'VIP 羊とのハグ＆写真撮影 (+100 バーツ/グループ)' },
  'label-total': { th: 'ยอดรวมทั้งสิ้น:', en: 'Estimated Total:', zh: '预估总计：', ja: 'お見積もり合計：' },
  'total-currency': { th: ' บาท', en: ' THB', zh: ' 泰铢', ja: ' バーツ' },
  'btn-estimate': { th: 'ยืนยันการจองสิทธิ์ (Fast Track)', en: 'Reserve Quick Pass', zh: '预订快速通行证', ja: 'クイックパスを予約する' },

  // Contact Form & Map
  'contact-title': { th: 'สอบถามข้อมูลเพิ่มเติม', en: 'Inquire Info', zh: '咨询信息', ja: 'お問い合わせ' },
  'label-name': { th: 'ชื่อ-นามสกุล', en: 'Your Name', zh: '您的姓名', ja: 'お名前' },
  'placeholder-name': { th: 'กรุณากรอกชื่อของคุณ', en: 'Enter your full name', zh: '请输入您的全名', ja: 'フルネームを入力してください' },
  'label-phone': { th: 'เบอร์โทรศัพท์', en: 'Phone Number', zh: '电话号码', ja: '電話番号' },
  'placeholder-phone': { th: 'กรุณากรอกเบอร์โทรศัพท์', en: 'Enter your phone number', zh: '请输入您的电话号码', ja: '電話番号を入力してください' },
  'label-msg': { th: 'ข้อความหรือคำถาม', en: 'Message / Special Requests', zh: '留言 / 特殊要求', ja: 'メッセージ / 特別なリクエスト' },
  'placeholder-msg': { th: 'สอบถามเรื่องการจอง หรือแพ็กเกจหมู่คณะ...', en: 'Inquire about glamping reservations or group tours...', zh: '咨询露营预订或团体旅游...', ja: 'グランピング予約や団体ツアーについて問い合わせる...' },
  'btn-send': { th: 'ส่งข้อมูลติดต่อ', en: 'Submit Inquiry', zh: '提交咨询', ja: 'お問い合わせを送信' },
  'map-placeholder-title': { th: 'แผนที่นำทาง Google Maps', en: 'Google Maps Navigation', zh: 'Google 地图导航', ja: 'Google マップ ナビゲーション' },
  'map-placeholder-desc': { th: 'คลิกปุ่มด้านล่างเพื่อเปิดแผนที่ในมือถือนำทางมายังฟาร์มทันที', en: 'Click the button below to navigate to the farm via Google Maps', zh: '点击下方按钮通过 Google 地图导航至农场', ja: '下のボタンをクリックしてGoogleマップで牧場へのナビを開く' },
  'btn-open-map': { th: 'เปิด Google Maps นำทาง', en: 'Navigate with Google Maps', zh: '使用 Google 地图导航', ja: 'Google マップでナビゲート' },

  // Modal stats translation
  'modal-stat-breed': { th: 'สายพันธุ์', en: 'Breed', zh: '品种', ja: '品種' },
  'modal-stat-char': { th: 'นิสัยเอกลักษณ์', en: 'Personality', zh: '性格特点', ja: '性格' },
  'modal-stat-food': { th: 'ของโปรด', en: 'Favorite Food', zh: '最喜欢的食物', ja: '好きな食べ物' },
};

// ==========================================================================
// 2. Sheep Individual Profiles Data
// ==========================================================================
const sheepData = {
  mumu: {
    name: { th: 'น้องมูมู่ (Mumu)', en: 'Mumu', zh: '木木 (Mumu)', ja: 'ムム (Mumu)' },
    breed: { th: 'เมอริโน (Merino)', en: 'Merino', zh: '美利奴 (Merino)', ja: 'メリノ (Merino)' },
    char: { th: 'ขี้เซา รักสงบ อบอุ่น ขนหนาฟูที่สุด', en: 'Calm, sleepy, and extremely fluffy', zh: '平静、贪睡、毛发极度蓬松', ja: '穏やかで眠たがり、そして非常にふわふわ' },
    food: { th: 'ใบโคลเวอร์สด (Fresh Clover)', en: 'Fresh Clover', zh: '新鲜三叶草', ja: '新鮮なクローバー' },
    desc: {
      th: 'น้องมูมู่ เป็นแกะสายพันธุ์เมอริโนที่มีขนหนานุ่มฟูที่สุดในฟาร์มสตาร์ดอย วันๆ ของมูมู่มักหมดไปกับการหาเนินเขาแดดอุ่นๆ เพื่อนอนกลางวันฟินๆ มูมู่เชื่องมาก นักท่องเที่ยวสามารถกอด ขอยืมตัวถ่ายรูป หรือนอนพิงขนปุยๆ ของน้องได้โดยที่น้องจะไม่วิ่งหนีเลยล่ะ!',
      en: 'Mumu is a purebred Merino sheep carrying the densest and softest wool at Stardoi. Her daily routine consists of locating a sunny hill slope and taking long afternoon naps. She is incredibly gentle; feel free to hug her, take close photos, or lean on her fluffy coat!',
      zh: '木木是星山农场拥有最浓密、最柔软羊毛的纯种美利奴羊。她每天的日常就是找一个阳光充足的山坡睡个长长的午觉。她非常温顺；您可以随意拥抱她，拍近照，甚至靠在她蓬松的外套上！',
      ja: 'ムムは、スタードイで最も密度が高く柔らかいウールを持つ純血種のメリノ羊です。彼女の毎日は、日当たりの良い斜面を見つけて長い昼寝をすることで過ぎていきます。彼女は信じられないほど穏やかです。ハグしたり、近くで写真を撮ったり、ふわふわのコートに寄りかかったりしても大丈夫です！'
    },
    img: 'images/cute_sheep.jpg'
  },
  kero: {
    name: { th: 'น้องเคโระ (Kero)', en: 'Kero', zh: '克罗 (Kero)', ja: 'ケロ (Kero)' },
    breed: { th: 'คอร์ริเดล (Corriedale)', en: 'Corriedale', zh: '科里代尔 (Corriedale)', ja: 'コリデール (Corriedale)' },
    char: { th: 'ซน กระโดดเก่ง อยากรู้อยากเห็น', en: 'Playful, bouncy, and highly curious', zh: '调皮、爱跳跃，充满好奇心', ja: '遊び心があり、よく跳ね、好奇心旺盛' },
    food: { th: 'หญ้าอัลฟัลฟ่าแห้ง (Alfalfa Hay)', en: 'Alfalfa Hay', zh: '苜蓿干草', ja: 'アルファルファの干草' },
    desc: {
      th: 'น้องเคโระ ลูกแกะตัวจิ๋วแสนซนที่พกพาพลังงานมาเต็มร้อย เคโระชอบการกระโดดดีใจเวลาเห็นตระกร้าอาหารมาแต่ไกล และเนื่องจากความอยากรู้อยากเห็นเป็นเลิศ น้องมักจะชอบเข้ามาสูดดมกล้อง คาบเชือกรองเท้า หรือดึงขอบชายเสื้อยืดของพี่ๆ นักท่องเที่ยวมาเคี้ยวเล่นเพื่อทักทาย!',
      en: 'Kero is our energetic baby lamb who runs on a hundred percent batteries. She loves executing high jumps whenever she spots food baskets from afar. Highly curious, she will walk right up to inspect your camera lenses and playfully tug on your shoelaces or clothes!',
      zh: '克罗是我们充满活力的羊羔，总是精力充沛。每当她从远处看到食物篮时，她就喜欢高高跃起。强烈的好奇心驱使她会直接走到你面前检查你的相机镜头，并调皮地拉扯你的鞋带或衣服！',
      ja: 'ケロは、100%のエネルギーで走り回る元気いっぱいの子羊です。遠くからエサのバスケットを見つけると、高くジャンプして喜びます。好奇心旺盛で、カメラのレンズを覗き込んだり、靴紐や服を遊び半分で引っ張ったりします！'
    },
    img: 'images/star_sheep_kero.jpg'
  },
  coco: {
    name: { th: 'น้องโกโก้ (Coco)', en: 'Coco', zh: '可可 (Coco)', ja: 'ココ (Coco)' },
    breed: { th: 'บอนด์บราวน์ (Brown Sheep)', en: 'Brown Sheep', zh: '棕羊 (Brown Sheep)', ja: 'ブラウン・シープ' },
    char: { th: 'นายแบบประจำฟาร์ม รู้มุมกล้อง เฟรนด์ลี่', en: 'Instagram diva, knows camera angles, very social', zh: 'Instagram网红，懂镜头角度，非常善于交际', ja: 'インスタの歌姫、カメラの角度を知っている、とても社交的' },
    food: { th: 'แครอทหวานหั่นแว่น (Sweet Carrots)', en: 'Sweet Carrots', zh: '甜胡萝卜片', ja: '甘いニンジン' },
    desc: {
      th: 'น้องโกโก้ แกะหนึ่งเดียวในฟาร์มที่มีขนสีน้ำตาลช็อกโกแลตเข้มสวยงาม โกโก้มีฉายาว่า "เน็ตไอดอลขวัญใจสตาร์ดอย" เพราะเมื่อไรที่เห็นนักท่องเที่ยวหยิบสมาร์ทโฟนขึ้นมาเตรียมนิ้วเซลฟี่ โกโก้จะรีบยื่นหน้าเข้ามาโพสท่าเอียงคอรับกล้องประหนึ่งนายแบบมืออาชีพโดยทันที!',
      en: 'Coco is our absolute stunner sporting a rich chocolate-brown fleece. Nicknamed the "Instagram Star of Stardoi", he has an uncanny radar for smartphones. The moment you frame a selfie, Coco will glide right next to you and tilt his head like a professional model!',
      zh: '可可是一只拥有华丽深巧克力色羊毛的绝色美人。他被称为“星山的Instagram明星”，对智能手机有着不可思议的雷达。就在你准备自拍的那一刻，可可会滑到你身边，像专业模特一样歪着头摆姿势！',
      ja: 'ココは、豊かなチョコレートブラウンのフリースをまとった絶世の美羊です。「スタードイのインスタスター」というニックネームを持つ彼は、スマートフォンに対する驚くべきレーダーを持っています。自撮りの構図を決めた瞬間、ココはあなたの隣に滑り込み、プロのモデルのように首をかしげます！'
    },
    img: 'images/cute_sheep.jpg'
  }
};

// ==========================================================================
// 3. State Variables & Initial Setup
// ==========================================================================
let currentLanguage = 'th'; // default language

document.addEventListener('DOMContentLoaded', () => {
  // Check local storage for settings
  const cachedLang = localStorage.getItem('stardoi_lang');
  const cachedTheme = localStorage.getItem('stardoi_theme');

  if (cachedLang) currentLanguage = cachedLang;
  
  // Set up initial language select value
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLanguage;
  }

  // Set up themes
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    if (cachedTheme) {
      themeSelect.value = cachedTheme;
      setTheme(cachedTheme);
    } else {
      // Smart Auto-Theme based on local time
      const hour = new Date().getHours();
      let autoTheme = 'sunny';
      if (hour >= 6 && hour < 9) autoTheme = 'mist';
      else if (hour >= 9 && hour < 16) autoTheme = 'sunny';
      else if (hour >= 16 && hour < 18) autoTheme = 'golden';
      else autoTheme = 'night';
      
      themeSelect.value = autoTheme;
      setTheme(autoTheme);
    }

    themeSelect.addEventListener('change', (e) => {
      setTheme(e.target.value);
    });
  }

  // Initialize translation
  updateTranslations();

  // Set up interactive ticket booking cost calculator
  initCalculator();

  // Set up interactive sheep modal triggers
  initSheepModal();

  // Set up scroll reveal animations
  initScrollReveal();

  // Set up smart features
  initSmartGreeting();
  initScrollProgress();

  // Set up Contact form simulation
  initContactForm();

  // Set up slideshow carousel
  initSlideshow();

  // Set up Hero Parallax
  initParallax();
});

// ==========================================================================
// 4. Atmosphere Theme Controller
// ==========================================================================
function setTheme(themeName) {
  // Clear all theme classes from body
  document.body.className = '';
  
  // Apply theme class
  const themeClass = `theme-${themeName}`;
  document.body.classList.add(themeClass);
  
  // Save preference
  localStorage.setItem('stardoi_theme', themeName);
}

// ==========================================================================
// 4.1 Smart Web Features
// ==========================================================================
function initSmartGreeting() {
  const greetingEl = document.getElementById('smartGreeting');
  if (!greetingEl) return;
  
  const hour = new Date().getHours();
  let greetingObj = {};
  
  if (hour >= 5 && hour < 12) {
    greetingObj = {
      th: '🌅 อรุณสวัสดิ์! อากาศยามเช้าที่เขาใหญ่กำลังเย็นสบาย',
      en: '🌅 Good Morning! Perfect cool weather at Khao Yai.',
      zh: '🌅 早上好！考艾的早晨天气很凉爽。',
      ja: '🌅 おはようございます！カオヤイの朝の天気は最高です。'
    };
  } else if (hour >= 12 && hour < 17) {
    greetingObj = {
      th: '☀️ สวัสดีตอนบ่าย! แวะมารับเครื่องดื่มเย็นๆ ที่คาเฟ่สิ',
      en: '☀️ Good Afternoon! Come grab a cold drink at our cafe.',
      zh: '☀️ 下午好！快来我们的咖啡馆喝杯冷饮吧。',
      ja: '☀️ こんにちは！カフェで冷たい飲み物をどうぞ。'
    };
  } else {
    greetingObj = {
      th: '🌌 สวัสดีตอนเย็น! พักผ่อนใต้แสงดาวที่ฟาร์มของเรา',
      en: '🌌 Good Evening! Relax under the stars at our farm.',
      zh: '🌌 晚上好！在我们的农场星空下放松。',
      ja: '🌌 こんばんは！星空の下でリラックスしてください。'
    };
  }
  
  // Register text to translations dictionary so it updates instantly when lang changes
  translations['smart-greeting-text'] = greetingObj;
  greetingEl.setAttribute('data-translate', 'smart-greeting-text');
  
  // Update translation for this element
  greetingEl.innerHTML = greetingObj[currentLanguage];
}

function initScrollProgress() {
  const scrollBar = document.getElementById('scrollBar');
  if (!scrollBar) return;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollBar.style.width = scrollPercent + '%';
  });
}

// ==========================================================================
// 5. Bilingual Logic Handler
// ==========================================================================
function setLanguage(lang) {
  currentLanguage = lang;
  
  // Save selection
  localStorage.setItem('stardoi_lang', currentLanguage);

  // Update elements
  updateTranslations();

  // Update calculator output currency/label text
  calculateTotal();
}

function updateTranslations() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[key] && translations[key][currentLanguage]) {
      // Check if it is input or textarea placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translations[key][currentLanguage]);
      } else {
        el.innerHTML = translations[key][currentLanguage];
      }
    }
  });
}

// Global scope access for language toggle from HTML
window.toggleLanguage = toggleLanguage;

// ==========================================================================
// 6. Ticket Estimator Calculator
// ==========================================================================
function updateSpinner(id, change) {
  const input = document.getElementById(id);
  if (input) {
    let val = parseInt(input.value) || 0;
    val += change;
    if (val < parseInt(input.min || 0)) val = parseInt(input.min || 0);
    input.value = val;
    calculateTotal();
  }
}

function initCalculator() {
  const inputs = ['calcAdults', 'addonFeeding', 'addonPhoto'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calculateTotal);
      el.addEventListener('change', calculateTotal);
    }
  });
  
  calculateTotal(); // initial run
}

function calculateTotal() {
  const adultsInput = document.getElementById('calcAdults');
  const addonFeeding = document.getElementById('addonFeeding');
  const addonPhoto = document.getElementById('addonPhoto');
  const totalPriceEl = document.getElementById('totalPrice');

  if (!adultsInput || !totalPriceEl) return;

  const people = parseInt(adultsInput.value) || 0;

  // Base tickets: 120 THB per person (kids under 120cm are free, not counted here)
  let total = people * 120;

  // Add-ons calculations
  if (addonFeeding) {
    const feedingSets = parseInt(addonFeeding.value) || 0;
    total += feedingSets * 100;
  }
if (addonPhoto && addonPhoto.checked && people > 0) {
    total += 100;
  }

  // Render total
  totalPriceEl.textContent = total.toLocaleString();

  // Add a nice jump micro-animation to price
  totalPriceEl.style.transform = 'scale(1.15)';
  setTimeout(() => {
    totalPriceEl.style.transform = 'scale(1)';
  }, 150);
}

// Global scope access for quick registration
window.submitReservation = function(e) {
  if (e) e.preventDefault();
  const people = document.getElementById('calcAdults').value || 0;
  const total = document.getElementById('totalPrice').textContent;
  
  if (parseInt(people) === 0) {
    alert(currentLanguage === 'th' ? 'กรุณาระบุจำนวนผู้เข้าชมอย่างน้อย 1 คน' : 'Please enter at least 1 visitor.');
    return;
  }

  const successMsg = currentLanguage === 'th' 
    ? `🎉 จองสิทธิ์ Quick Pass สำเร็จ!\nยอดรวมโดยประมาณ: ${total} บาท\nกรุณาแสดงหน้าจอนี้กับพนักงานจำหน่ายตั๋วเมื่อเดินทางมาถึงฟาร์มแกะสตาร์ดอย`
    : `🎉 Quick Pass Reservation Confirmed!\nEstimated Total: ${total} THB\nPlease show this confirmation screen to the cashier upon arrival at Stardoi Sheep Farm.`;
  
  alert(successMsg);
};

// ==========================================================================
// 7. Interactive Sheep Modal
// ==========================================================================
function initSheepModal() {
  const modalBackdrop = document.getElementById('sheepModal');
  const closeBtn = document.getElementById('modalClose');

  if (!modalBackdrop || !closeBtn) return;

  // Set up click handlers on cards
  const cards = document.querySelectorAll('.sheep-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const sheepId = card.getAttribute('data-sheep-id');
      if (sheepData[sheepId]) {
        openModal(sheepData[sheepId]);
      }
    });
  });

  // Set up close triggers
  closeBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Escape key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('show')) {
      closeModal();
    }
  });
}

function openModal(data) {
  const modalBackdrop = document.getElementById('sheepModal');
  const modalImg = document.getElementById('modalImg');
  const modalName = document.getElementById('modalName');
  const modalDesc = document.getElementById('modalDesc');
  const statBreed = document.getElementById('statBreed');
  const statChar = document.getElementById('statChar');
  const statFood = document.getElementById('statFood');

  if (!modalBackdrop) return;

  // Set values based on active language
  modalImg.src = data.img;
  modalName.textContent = data.name[currentLanguage];
  modalDesc.textContent = data.desc[currentLanguage];
  statBreed.textContent = data.breed[currentLanguage];
  statChar.textContent = data.char[currentLanguage];
  statFood.textContent = data.food[currentLanguage];

  // Show modal
  modalBackdrop.classList.add('show');
  document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
}

function closeModal() {
  const modalBackdrop = document.getElementById('sheepModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = ''; // restore scrolling
  }
}

// ==========================================================================
// 8. Intersection Observer for Scroll Reveals
// ==========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.15, // trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px' // adjust for smoother trigger
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

// ==========================================================================
// 9. Contact Form Validation and Simulation
// ==========================================================================
function initContactForm() {
  const contactForm = document.getElementById('contactFormElement');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const msg = document.getElementById('contactMessage').value.trim();

    if (!name || !phone) {
      alert(currentLanguage === 'th' ? 'กรุณากรอกชื่อและเบอร์โทรศัพท์ติดต่อ' : 'Please fill in both name and phone number.');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    let sendingText = 'Sending...';
    if(currentLanguage === 'th') sendingText = 'กำลังส่งข้อมูล...';
    if(currentLanguage === 'zh') sendingText = '正在发送...';
    if(currentLanguage === 'ja') sendingText = '送信中...';
    
    submitBtn.innerHTML = sendingText;
    submitBtn.disabled = true;

    // Prepend single quote to phone so Google Sheet treats it as text and keeps the leading 0
    const formattedPhone = "'" + phone;
    const payload = { name: name, phone: formattedPhone, message: msg };
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwOJJ9aMg_lp-oGvta7TbAZ4U3IVMB9fXpnliedSttpXLgpAG7cb-any2-llgu0C_rF/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(() => {
      const successMsg = currentLanguage === 'th'
        ? `📬 ส่งคำถามของคุณเรียบร้อยแล้ว!\nขอบคุณคุณ ${name} ที่สนใจฟาร์มแกะสตาร์ดอย เจ้าหน้าที่จะโทรติดต่อกลับที่เบอร์ ${phone} โดยเร็วที่สุด`
        : `📬 Inquiry Sent Successfully!\nThank you ${name} for contacting Stardoi Sheep Farm. Our staff will call you back at ${phone} shortly.`;
      alert(successMsg);
      contactForm.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert(currentLanguage === 'th' ? 'เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง' : 'Error sending inquiry. Please try again.');
    })
    .finally(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
  });
}

// Google Maps navigator external call
window.openGoogleMaps = function() {
  const url = "https://maps.google.com/?q=StardoiFarm+Khaoyai,+161+2,+Mu+Si,+Pak+Chong+District,+Nakhon+Ratchasima+30130";
  window.open(url, '_blank');
};

// ==========================================================================
// 10. Slideshow / Gallery Controller
// ==========================================================================
let slideIndex = 1;
let slideInterval;

function initSlideshow() {
  showSlides(slideIndex);
  
  // Start automatic slide show
  startSlideShow();
  
  // Pause automatic show when user hovers over slideshow container
  const container = document.querySelector('.slideshow-container');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.addEventListener('mouseleave', () => startSlideShow());
  }
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 4000); // changes every 4 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slide");
  let dots = document.getElementsByClassName("slide-dot");
  
  if (slides.length === 0) return;
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Make slideshow functions globally accessible for HTML onclick attributes
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;

// Fix for LINE and other in-app browsers not starting at the top of the page
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100); // Slight delay to override native browser automatic scroll jumps
});

// ==========================================================================
// 10. Hero Parallax Effect
// ==========================================================================
function initParallax() {
  const hero = document.getElementById('hero') || document.querySelector('.hero');
  const mist = document.querySelector('.mist-overlay');
  const stars = document.querySelector('.stars-overlay');

  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = hero.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    if (mist) {
      mist.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    }
    if (stars) {
      stars.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    }
  });
}
