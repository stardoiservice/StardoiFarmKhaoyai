// Stardoi Sheep Farm Khao Yai - Client Logic
// Features: Bilingual translations, Time-of-day theme controller, Interactive modals, Ticket estimator

// ==========================================================================
// 1. Multi-language Translations Dictionary
// ==========================================================================
const translations = {
  // Navigation Links
  'nav-home': { th: 'หน้าแรก', en: 'Home' },
  'nav-about': { th: 'รู้จักสตาร์ดอย', en: 'About Stardoi' },
  'nav-flock': { th: 'น้องแกะของเรา', en: 'Meet Our Flock' },
  'nav-activities': { th: 'กิจกรรม', en: 'Activities' },
  'nav-booking': { th: 'จองตั๋ว & พิกัด', en: 'Booking & Location' },

  // Hero Section
  'hero-tagline': { th: 'สัมผัสความน่ารักท่ามกลางสายหมอกที่ เขาใหญ่', en: 'Experience cuteness amidst the mist at Khao Yai' },
  'hero-title': { th: 'ฟาร์มแกะสตาร์ดอย', en: 'Stardoi Sheep Farm' },
  'hero-desc': { th: 'หลบหนีความวุ่นวายมาพักผ่อนในฟาร์มแกะสไตล์สวิสอัลไพน์ โอบล้อมด้วยขุนเขาเขียวขจีและบรรยากาศแสนอบอุ่น ผ่อนคลายไปกับคาเฟ่สุดคิวท์และเหล่าน้องแกะฟูนุ่ม', en: 'Escape the bustle to our Swiss Alpine-inspired sheep farm. Surrounded by lush mountains, cozy cafe vibes, and our fluffy flock of sheep.' },
  'hero-cta': { th: 'จองบัตรเข้าชม', en: 'Book Ticket Now' },
  'hero-secondary-cta': { th: 'กิจกรรมในฟาร์ม', en: 'Explore Activities' },

  // About Section
  'about-tag': { th: 'ยินดีต้อนรับสู่สตาร์ดอย', en: 'Welcome to Stardoi' },
  'about-title': { th: 'สวิตเซอร์แลนด์เมืองไทยที่เขาใหญ่', en: 'Thailand\'s Little Switzerland in Khao Yai' },
  'about-badge-val': { th: 'ธรรมชาติ 100%', en: '100% Nature' },
  'about-badge-lbl': { th: 'โอบล้อมด้วยขุนเขา', en: 'Mountain Vibe' },
  'about-h3': { th: 'ทำไมต้องมาเช็คอินที่ สตาร์ดอย?', en: 'Why Check-in at Stardoi?' },
  'about-p1': { th: 'ฟาร์มแกะสตาร์ดอย ตั้งอยู่บนเนินเขาที่สวยที่สุดในอุทยานแห่งชาติเขาใหญ่ เราออกแบบฟาร์มในสไตล์ยุโรปชนบทเพื่อให้นักท่องเที่ยวได้สัมผัสธรรมชาติอย่างแท้จริง สายหมอกยามเช้าและหญ้าเขียวขจีจะช่วยเยียวยาจิตใจของคุณให้ผ่อนคลาย', en: 'Stardoi Sheep Farm is situated on one of the most scenic hills of Khao Yai. We designed our farm in a European countryside style, allowing visitors to touch nature. The morning mist and green meadows will soothe and refresh your soul.' },
  'about-p2': { th: 'ไฮไลท์สำคัญคือ แกะสายพันธุ์คอร์ริเดล (Corriedale) มากกว่า 100 ตัว และลูกแกะอีกมากมาย ให้น้องๆ หนูๆ ได้สัมผัสและป้อนอาหารอย่างใกล้ชิด ไม่มีที่ไหนให้ความสุขได้มากกว่าที่ Stardoi Farm อีกแล้ว! นอกจากนี้เรายังมีคาเฟ่ไม้สไตล์อบอุ่นพร้อมเสิร์ฟขนมอบใหม่ๆ ทุกวัน', en: 'The main highlight is our flock of over 100 Corriedale sheep and numerous adorable lambs! Kids can get up close, touch, and feed them. Nowhere else offers more joy than Stardoi Farm! We also have a cozy wooden cafe serving freshly baked pastries daily.' },
  'feat-scenery-title': { th: 'วิวภูเขา 360 องศา', en: '360° Mountain View' },
  'feat-scenery-desc': { th: 'ถ่ายรูปมุมไหนก็สวยเหมือนอยู่สวิตเซอร์แลนด์', en: 'Photos look like Switzerland from every angle' },
  'feat-organic-title': { th: 'อาหารแกะพรีเมียม', en: 'Premium Feeding' },
  'feat-organic-desc': { th: 'หญ้าและพืชผักออร์แกนิก ปลอดภัยต่อเด็กๆ และสัตว์เลี้ยง', en: 'Organic grass and vegetables, safe for kids & sheep' },

  // Flock Section
  'flock-tag': { th: 'ดาวเด่นประจำฟาร์ม', en: 'Farm Stars' },
  'flock-title': { th: 'ทำความรู้จักน้องแกะตัวโปรด', en: 'Meet Our Fluffy Flock' },
  'flock-card-mumu-tag': { th: 'สายกินจุ', en: 'Merino Wool' },
  'flock-card-mumu-name': { th: 'น้องมูมู่ (Mumu)', en: 'Mumu' },
  'flock-card-mumu-desc': { th: 'แกะเมอริโนขนปุยหนานุ่มฟูที่สุดในฟาร์ม อ่อนโยนและน่ารัก...', en: 'The fluffiest Merino sheep in the farm. Extremely gentle and cute...' },
  'flock-card-mumu-btn': { th: 'ดูประวัติน้อง', en: 'View Profile' },
  'flock-card-Kero-tag': { th: 'จอมซน', en: 'Corriedale' },
  'flock-card-Kero-name': { th: 'น้องเคโระ (Kero)', en: 'Kero' },
  'flock-card-Kero-desc': { th: 'ลูกแกะคอร์ริเดลสุดซุกซนที่ชอบกระโดดเล่นและดึงเชือกรองเท้า...', en: 'The playful Corriedale lamb who loves jumping and playing around...' },
  'flock-card-Kero-btn': { th: 'ดูประวัติน้อง', en: 'View Profile' },
  'flock-card-coco-tag': { th: 'ดาวเด่นไอจี', en: 'Instagrammer' },
  'flock-card-coco-name': { th: 'น้องโกโก้ (Coco)', en: 'Coco' },
  'flock-card-coco-desc': { th: 'แกะขนสีน้ำตาลช็อกโกแลตสุดหล่อที่รู้มุมกล้อง โพสท่าเก่งสุดๆ...', en: 'Our chocolate-brown photogenic star who strikes a pose instantly...' },
  'flock-card-coco-btn': { th: 'ดูประวัติน้อง', en: 'View Profile' },

  // Activities Section
  'act-tag': { th: 'ประสบการณ์สุดพิเศษ', en: 'Unforgettable Experiences' },
  'act-title': { th: 'กิจกรรมสนุกๆ สำหรับทุกคน', en: 'Fun Activities for Everyone' },
  'act-1-title': { th: 'ป้อนอาหารแกะอย่างใกล้ชิด', en: 'Close Feeding Session' },
  'act-1-desc': { th: 'สัมผัสแกะขนฟูอย่างใกล้ชิดในทุ่งหญ้ากว้างขวาง ป้อนอาหารหญ้าและแครอทออร์แกนิกที่คัดสรรมาอย่างดี พร้อมถ่ายรูปคู่สุดน่ารัก', en: 'Get up close with the fluffy sheep in our wide pasture. Feed them high-quality organic grass and carrots while taking cute photos.' },
  'act-2-title': { th: 'พายเรือคายัค ผจญภัยน้ำผุดธรรมชาติ', en: 'Kayaking in Natural Springs' },
  'act-2-desc': { th: 'พายเรือคายัคสุดชิลในลำธารน้ำผุดธรรมชาติใสแจ๋ว ท่ามกลางบรรยากาศร่มรื่นของต้นไม้ใหญ่ สนุกและปลอดภัยสำหรับทุกคน', en: 'Relax and kayak in the crystal-clear natural spring stream surrounded by lush trees. Fun and safe for everyone.' },
  'act-alpaca-title': { th: 'ป้อนอาหารอัลปาก้าอย่างใกล้ชิด', en: 'Alpaca Feeding' },
  'act-alpaca-desc': { th: 'พบกับความน่ารักของฝูงอัลปาก้าคอยาวขนปุย ยิ้มเก่งแสนรู้ ป้อนอาหารจากมือและถ่ายรูปเซลฟี่ได้อย่างใกล้ชิด', en: 'Meet our adorable long-necked, fluffy alpacas. Hand-feed them and take selfies with these smiling, smart creatures.' },
  'act-rabbit-title': { th: 'ป้อนอาหารกระต่าย', en: 'Rabbit Feeding' },
  'act-rabbit-desc': { th: 'เอาใจเด็กๆ ด้วยบ้านกระต่ายสุดคิวท์ แวะมาป้อนแครอทและลูบขนกระต่ายน้อยหลากสายพันธุ์ที่กระโดดไปมาอย่างร่าเริง', en: 'A treat for kids with our cute rabbit house. Feed carrots and pet various breeds of joyful, hopping bunnies.' },
  'act-horse-title': { th: 'ขี่ม้าชมวิว', en: 'Scenic Horseback Riding' },
  'act-horse-desc': { th: 'มีบริการขี่ม้าเพื่อถ่ายรูปและชมบรรยากาศทุ่งหญ้า มีเจ้าหน้าที่จูงให้ มือใหม่ก็เล่นได้สบายมาก ให้คุณรู้สึกเหมือนเป็นคาวบอยตัวจริง', en: 'Horseback riding service for photos and scenic views. Guided by staff, it’s perfect for beginners. Feel like a real cowboy!' },
  'act-carousel-title': { th: 'ม้าหมุน', en: 'Classic Carousel' },
  'act-carousel-desc': { th: 'ให้ฟีลเหมือนอยู่ในสวนสนุกยุโรปท่ามกลางวิวภูเขา นั่งม้าหมุนสุดคลาสสิก ถ่ายรูปเก๋ๆ ย้อนวัยเด็กได้ทั้งครอบครัว', en: 'Feel like you are in a European amusement park amidst the mountains. Ride the classic carousel and take chic photos with the whole family.' },
  'act-paint-title': { th: 'กิจกรรมระบายสีสร้างสรรค์', en: 'Creative Painting Activity' },
  'act-paint-desc': { th: 'ปลดปล่อยจินตนาการไปกับกิจกรรมระบายสีตุ๊กตาปูนปลาสเตอร์รูปน้องแกะและสัตว์น่ารักๆ สนุกสนานได้ทั้งครอบครัว พร้อมนำผลงานศิลปะชิ้นเดียวในโลกกลับบ้านเป็นที่ระลึก', en: 'Unleash your imagination with our plaster painting activity! Paint cute sheep and animals. It\'s fun for the whole family, and you can take your unique masterpiece home.' },
  'act-photo-title': { th: 'ถ่ายรูปกับน้องแกะ', en: 'Photo with Sheep' },
  'act-photo-desc': { th: 'บันทึกความทรงจำดีๆๆ สัมผัสความน่ารักของน้องแกะพันธุ์คอร์ริเดล ขนฟูนุ่มแสนเป็นมิตร พร้อมถ่ายรูปสวยๆ ท่ามกลางบรรยากาศธรรมชาติ', en: 'Capture great memories! Touch the cuteness of our friendly, fluffy Corriedale sheep and take beautiful photos amidst a natural atmosphere.' },
  'act-3-title': { th: 'สตาร์ดอยคาเฟ่ & เบเกอรี่', en: 'Stardoi Cafe & Bakery' },
  'act-3-tag': { th: 'ห้ามพลาด', en: 'Must Visit' },
  'act-3-p': { th: 'นั่งชิลในร้านกาแฟสไตล์ไม้โอ๊คอบอุ่น ชิมเบเกอรี่อบสดใหม่ทุกเช้า เช่น ครัวซองต์เนยฝรั่งเศส และชาผลไม้หอมชื่นใจ พร้อมชมวิวเนินเขาและฝูงแกะเดินเล่นผ่านหน้ากระจกใสบานใหญ่', en: 'Relax in our oak wood cafe. Enjoy freshly baked pastries like butter French croissants, signature teas, and watch sheep graze right outside the glass window.' },
  'act-4-title': { th: 'ฟาร์มรักษ์โลก (Smart Farm)', en: 'Eco-Friendly Smart Farm' },
  'act-4-tag': { th: 'นวัตกรรมและธรรมชาติ', en: 'Innovation & Nature' },
  'act-4-p': { th: 'เราบริหารจัดการฟาร์มด้วยระบบที่ทันสมัย ใส่ใจสิ่งแวดล้อมและสวัสดิภาพของสัตว์ (Animal Welfare) น้องแกะและสัตว์ทุกตัวได้รับการดูแลอย่างดีเยี่ยมด้วยความรัก เพื่อส่งมอบรอยยิ้มให้กับผู้มาเยือนทุกคน', en: 'Our farm is managed with modern smart systems, prioritizing the environment and animal welfare. All our animals are raised with love and excellent care to bring smiles to every visitor.' },

  // Slideshow Captions
  'slideshow-title': { th: 'ประมวลภาพบรรยากาศและกิจกรรม', en: 'Activity Photo Gallery' },
  'slide1-caption': { th: 'สัมผัสบรรยากาศฟาร์มแกะสุดชิลท่ามกลางขุนเขา', en: 'Experience the relaxing farm vibe amidst the mountains' },
  'slide2-caption': { th: 'สนุกสนานไปกับกิจกรรมให้อาหารสัตว์นานาชนิด', en: 'Have fun feeding various friendly animals' },
  'slide3-caption': { th: 'แวะพักจิบเครื่องดื่มและทานเบเกอรี่แสนอร่อยที่คาเฟ่', en: 'Enjoy delicious drinks and pastries at our cafe' },
  'slide4-caption': { th: 'มุมถ่ายรูปสวยๆ สไตล์ยุโรปมากมายทั่วฟาร์ม', en: 'Many beautiful European-style photo spots around the farm' },
  'slide5-caption': { th: 'เก็บความทรงจำดีๆ ที่ฟาร์มแกะสตาร์ดอย', en: 'Capture great memories at Stardoi Sheep Farm' },

  // Branches Section
  'branches-tag': { th: 'ครอบครัวสตาร์ดอย', en: 'Stardoi Family' },
  'branches-title': { th: 'สาขาอื่นๆ ของเรา', en: 'Our Other Branches' },
  'branch-1-title': { th: 'Stardoi Coffee & Farmstay', en: 'Stardoi Coffee & Farmstay' },
  'branch-1-desc': { th: 'ที่พักฟาร์มแกะและคาเฟ่สุดชิล บรรยากาศดีบนดอยสะโง้ อ.เชียงแสน จ.เชียงราย', en: 'Relaxing sheep farm stay and cafe with great atmosphere at Doi Sa Ngo, Chiang Saen, Chiang Rai.' },
  'branch-1-loc': { th: '📍 ดอยสะโง้ เชียงแสน', en: '📍 Doi Sa Ngo, Chiang Saen' },
  'branch-2-title': { th: 'Stardoi Farm Pattaya', en: 'Stardoi Farm Pattaya' },
  'branch-2-badge': { th: 'Coming Soon', en: 'Coming Soon' },
  'branch-2-desc': { th: 'เตรียมพบกับฟาร์มแกะแห่งใหม่ใกล้ทะเล ที่พัทยา เร็วๆ นี้!', en: 'Get ready for a new sheep farm near the sea in Pattaya, coming soon!' },
  'branch-2-loc': { th: '📍 พัทยา (Pattaya)', en: '📍 Pattaya' },

  // Visitor & Booking Section
  'booking-tag': { th: 'วางแผนการเดินทาง', en: 'Plan Your Visit' },
  'booking-title': { th: 'ข้อมูลผู้เข้าชม & จองตั๋วล่วงหน้า', en: 'Visitor Info & Ticket Estimator' },
  'info-1-title': { th: 'เวลาทำการ', en: 'Opening Hours' },
  'info-1-desc': { th: 'เปิดบริการทุกวัน: 08:00 น. - 18:00 น. (ไม่มีวันหยุด)', en: 'Open Daily: 8:00 AM - 6:00 PM (No Holidays)' },
  'info-2-title': { th: 'ค่าเข้าชมปกติ', en: 'General Admission' },
  'info-2-desc': { th: 'ผู้ใหญ่ | เด็ก : 120 บาท | เด็ก (สูงไม่เกิน 120 ซม.): 0 บาท (ฟรี)', en: 'Adult | Child: 120 THB | Child (under 120cm): FREE' },
  'info-3-title': { th: 'ที่ตั้งของฟาร์ม', en: 'Location Map' },
  'info-3-desc': { th: '161/2, หมูสี, ปากช่อง, นครราชสีมา, 30130 (ใกล้น้ำผุดธรรมชาติบ้านท่าช้าง)', en: '161/2, Moosi, Pakchong, Nakhon Ratchasima, 30130 (Near Ban Tha Chang Natural Spring)' },
  'calc-title': { th: 'คำนวณราคาบัตรเข้าชม', en: 'Entrance Fee Estimator' },
  'calc-subtitle': { th: 'วางแผนค่าใช้จ่ายล่วงหน้าและรับบัตรเข้าคิวพิเศษทันที', en: 'Estimate your visiting cost and get queue priority' },
  'label-adults': { th: 'ผู้ใหญ่ | เด็ก(120 บาท/คน)', en: 'Adult | Child (120 THB/person)' },
  'label-kids': { th: 'เด็ก เล็ก ฟรี (สูงไม่เกิน 120 ซม.)', en: 'Small Child FREE (under 120cm)' },
  'label-addons': { th: 'แพ็กเกจเสริมสุดคุ้ม', en: 'Special Value Add-ons' },
  'addon-feeding': { th: 'หญ้าและอาหารเม็ดแสนอร่อย (+100 บาท/คน)', en: 'Grass & Delicious Feed Pellets (+100 THB/person)' },
  'addon-cafe': { th: 'คูปองพายเรือ (+140 บาท/คน)', en: 'Kayak Voucher (+140 THB/person)' },
  'addon-photo': { th: 'สิทธิ์กอดแกะถ่ายรูปใกล้ชิด VIP (+100 บาท/กลุ่ม)', en: 'VIP Close Sheep Hug & Photo Session (+100 THB/group)' },
  'label-total': { th: 'ยอดรวมทั้งสิ้น:', en: 'Estimated Total:' },
  'total-currency': { th: ' บาท', en: ' THB' },
  'btn-estimate': { th: 'จองสิทธิ์เข้าชมด่วน', en: 'Reserve Quick Pass' },

  // Contact Form & Map
  'contact-title': { th: 'สอบถามข้อมูลเพิ่มเติม', en: 'Inquire Info' },
  'label-name': { th: 'ชื่อ-นามสกุล', en: 'Your Name' },
  'placeholder-name': { th: 'กรุณากรอกชื่อของคุณ', en: 'Enter your full name' },
  'label-phone': { th: 'เบอร์โทรศัพท์', en: 'Phone Number' },
  'placeholder-phone': { th: 'กรุณากรอกเบอร์โทรศัพท์', en: 'Enter your phone number' },
  'label-msg': { th: 'ข้อความหรือคำถาม', en: 'Message / Special Requests' },
  'placeholder-msg': { th: 'สอบถามเรื่องการจองเต็นท์ หรือแพ็กเกจหมู่คณะ...', en: 'Inquire about glamping reservations or group tours...' },
  'btn-send': { th: 'ส่งข้อมูลติดต่อ', en: 'Submit Inquiry' },
  'map-placeholder-title': { th: 'แผนที่นำทาง Google Maps', en: 'Google Maps Navigation' },
  'map-placeholder-desc': { th: 'คลิกปุ่มด้านล่างเพื่อเปิดแผนที่ในมือถือนำทางมายังฟาร์มทันที', en: 'Click the button below to navigate to the farm via Google Maps' },
  'btn-open-map': { th: 'เปิด Google Maps นำทาง', en: 'Navigate with Google Maps' },

  // Modal stats translation
  'modal-stat-breed': { th: 'สายพันธุ์', en: 'Breed' },
  'modal-stat-char': { th: 'นิสัยเอกลักษณ์', en: 'Personality' },
  'modal-stat-food': { th: 'ของโปรด', en: 'Favorite Food' },
};

// ==========================================================================
// 2. Sheep Individual Profiles Data
// ==========================================================================
const sheepData = {
  mumu: {
    name: { th: 'น้องมูมู่ (Mumu)', en: 'Mumu' },
    breed: { th: 'เมอริโน (Merino)', en: 'Merino' },
    char: { th: 'ขี้เซา รักสงบ อบอุ่น ขนหนาฟูที่สุด', en: 'Calm, sleepy, and extremely fluffy' },
    food: { th: 'ใบโคลเวอร์สด (Fresh Clover)', en: 'Fresh Clover' },
    desc: {
      th: 'น้องมูมู่ เป็นแกะสายพันธุ์เมอริโนที่มีขนหนานุ่มฟูที่สุดในฟาร์มสตาร์ดอย วันๆ ของมูมู่มักหมดไปกับการหาเนินเขาแดดอุ่นๆ เพื่อนอนกลางวันฟินๆ มูมู่เชื่องมาก นักท่องเที่ยวสามารถกอด ขอยืมตัวถ่ายรูป หรือนอนพิงขนปุยๆ ของน้องได้โดยที่น้องจะไม่วิ่งหนีเลยล่ะ!',
      en: 'Mumu is a purebred Merino sheep carrying the densest and softest wool at Stardoi. Her daily routine consists of locating a sunny hill slope and taking long afternoon naps. She is incredibly gentle; feel free to hug her, take close photos, or lean on her fluffy coat!'
    },
    img: 'images/cute_sheep.jpg'
  },
  kero: {
    name: { th: 'น้องเคโระ (Kero)', en: 'Kero' },
    breed: { th: 'คอร์ริเดล (Corriedale)', en: 'Corriedale' },
    char: { th: 'ซน กระโดดเก่ง อยากรู้อยากเห็น', en: 'Playful, bouncy, and highly curious' },
    food: { th: 'หญ้าอัลฟัลฟ่าแห้ง (Alfalfa Hay)', en: 'Alfalfa Hay' },
    desc: {
      th: 'น้องเคโระ ลูกแกะตัวจิ๋วแสนซนที่พกพาพลังงานมาเต็มร้อย เคโระชอบการกระโดดดีใจเวลาเห็นตระกร้าอาหารมาแต่ไกล และเนื่องจากความอยากรู้อยากเห็นเป็นเลิศ น้องมักจะชอบเข้ามาสูดดมกล้อง คาบเชือกรองเท้า หรือดึงขอบชายเสื้อยืดของพี่ๆ นักท่องเที่ยวมาเคี้ยวเล่นเพื่อทักทาย!',
      en: 'Kero is our energetic baby lamb who runs on a hundred percent batteries. She loves executing high jumps whenever she spots food baskets from afar. Highly curious, she will walk right up to inspect your camera lenses and playfully tug on your shoelaces or clothes!'
    },
    img: 'images/star_sheep_kero.jpg'
  },
  coco: {
    name: { th: 'น้องโกโก้ (Coco)', en: 'Coco' },
    breed: { th: 'บอนด์บราวน์ (Brown Sheep)', en: 'Brown Sheep' },
    char: { th: 'นายแบบประจำฟาร์ม รู้มุมกล้อง เฟรนด์ลี่', en: 'Instagram diva, knows camera angles, very social' },
    food: { th: 'แครอทหวานหั่นแว่น (Sweet Carrots)', en: 'Sweet Carrots' },
    desc: {
      th: 'น้องโกโก้ แกะหนึ่งเดียวในฟาร์มที่มีขนสีน้ำตาลช็อกโกแลตเข้มสวยงาม โกโก้มีฉายาว่า "เน็ตไอดอลขวัญใจสตาร์ดอย" เพราะเมื่อไรที่เห็นนักท่องเที่ยวหยิบสมาร์ทโฟนขึ้นมาเตรียมนิ้วเซลฟี่ โกโก้จะรีบยื่นหน้าเข้ามาโพสท่าเอียงคอรับกล้องประหนึ่งนายแบบมืออาชีพโดยทันที!',
      en: 'Coco is our absolute stunner sporting a rich chocolate-brown fleece. Nicknamed the "Instagram Star of Stardoi", he has an uncanny radar for smartphones. The moment you frame a selfie, Coco will glide right next to you and tilt his head like a professional model!'
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
  
  // Set up initial language button text
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = currentLanguage === 'th' ? 'EN' : 'TH';
  }

  // Set up themes
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    if (cachedTheme) {
      themeSelect.value = cachedTheme;
      setTheme(cachedTheme);
    } else {
      // Default to sunny
      setTheme('sunny');
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

  // Set up Contact form simulation
  initContactForm();

  // Set up slideshow carousel
  initSlideshow();
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
// 5. Bilingual Logic Handler
// ==========================================================================
function toggleLanguage() {
  currentLanguage = currentLanguage === 'th' ? 'en' : 'th';
  
  // Update button visual
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = currentLanguage === 'th' ? 'EN' : 'TH';
  }

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
function initCalculator() {
  const inputs = ['calcAdults', 'calcKids', 'addonFeeding', 'addonKayak', 'addonPhoto'];
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
  const addonKayak = document.getElementById('addonKayak');
  const addonPhoto = document.getElementById('addonPhoto');
  const totalPriceEl = document.getElementById('totalPrice');

  if (!adultsInput || !totalPriceEl) return;

  const people = parseInt(adultsInput.value) || 0;

  // Base tickets: 120 THB per person (kids under 120cm are free, not counted here)
  let total = people * 120;

  // Add-ons calculations
  if (addonFeeding && addonFeeding.checked) {
    total += people * 100;
  }
  if (addonKayak && addonKayak.checked) {
    total += people * 140;
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
    submitBtn.innerHTML = currentLanguage === 'th' ? 'กำลังส่งข้อมูล...' : 'Sending...';
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
  // Stardoi Sheep Farm simulated location coordinates near Khao Yai Pakchong
  const url = "https://maps.google.com/?q=Stardoi+Sheep+Farm+Khao+Yai";
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
