const ASSETS = {
  poster: 'assets/tribute-poster.webp',
  performer: 'assets/performer-cutout.webp',
  stage: 'assets/stage-dragon.webp',
  makeup: 'assets/makeup-mirror.webp',
  costumes: 'assets/costume-rack.webp',
  warrior: 'assets/warrior-cutout.webp',
  musicians: 'assets/musicians.webp',
  battle: 'assets/battle-scene.webp',
  visit: 'assets/group-visit.webp',
  finalStage: 'assets/final-stage.webp',
  artist: 'assets/artist-profile.jpg',
  grandson: 'assets/Cháu Nội NNUT Vũ Linh Tâm - Đời thứ Năm Hát Bội Đồng Thinh.webp',
  makeupBlue: 'assets/makeup-blue-mirror.webp',
  action: 'assets/stage-action.webp',
  performerRed: 'assets/performer-red.webp',
  ensemble: 'assets/costume-ensemble.webp',
  maskHero: 'assets/mask-hero.webp',
  maskFire: 'assets/mask-fire.webp',
  maskPale: 'assets/mask-pale.webp',
  maskInk: 'assets/mask-ink.webp',
  maskGreen: 'assets/mask-green.webp',
  pair: 'assets/performer-pair.webp',
  localStage: 'assets/602337863_33549115661353641_2554198357669656418_n.jpg',
  troupeGroup: 'assets/601866007_33549116671353540_7077332285019542542_n.jpg',
  video: 'assets/IMG_8185_converted.mp4',
  videoPoster: 'assets/hatboi-motion-poster.webp'};

// Image orientation metadata: portrait images get a taller frame, landscape get a wider one
const IMAGE_ORIENT = {
  poster: 'portrait',
  performer: 'portrait',
  artist: 'portrait',
  grandson: 'portrait',
  performerRed: 'portrait',
  stage: 'landscape',
  makeup: 'landscape',
  costumes: 'landscape',
  musicians: 'landscape',
  battle: 'landscape',
  visit: 'landscape',
  finalStage: 'landscape',
  action: 'landscape',
  makeupBlue: 'landscape',
  ensemble: 'landscape',
  pair: 'landscape',
  localStage: 'landscape',
  troupeGroup: 'landscape'
};

const PAGES = [
  {
    "pageNumber": 2,
    "vi": {
      "kicker": "LỜI DẪN · MỜI BẠN BƯỚC VÀO",
      "title": "Mời bạn bước vào",
      "lead": "Cuốn sách tương tác đưa bạn từ câu chuyện Hát Bội Việt Nam đến dấu ấn riêng của Hát Bội Vĩnh Long và Gánh Hát Bội Đồng Thinh.",
      "paragraphs": [
        "Hãy mở cuốn sách này như mở cánh màn sân khấu – chậm rãi, tò mò và đầy trân trọng.",
        "Mỗi trang là một lát cắt của nghệ thuật Hát Bội: lịch sử, ngôn ngữ biểu diễn, phục trang, hóa trang và những con người đang gìn giữ di sản."
      ],
      "visual": "ornament",
      "caption": "Lật mở từng trang để bước vào không gian di sản."
    },
    "en": {
      "kicker": "A NOTE · COME ON IN",
      "title": "Welcome",
      "lead": "This interactive book takes you from the story of Vietnamese Hát Bội to the distinctive heritage of Hát Bội in Vĩnh Long and the Đồng Thinh troupe.",
      "paragraphs": [
        "Open this book as you would raise a theatre curtain — slowly, with curiosity and respect.",
        "Each page offers a glimpse of Hát Bội: its history, performance language, costumes, makeup, and the people who keep this heritage alive."
      ],
      "visual": "ornament",
      "caption": "Turn the pages and step into a living heritage."
    },
    "fr": {
      "kicker": "AVANT-PROPOS · ENTREZ",
      "title": "Bienvenue",
      "lead": "Ce livre interactif vous conduit de l’histoire du Hát Bội vietnamien à l’identité du Hát Bội de Vĩnh Long et de la troupe Đồng Thinh.",
      "paragraphs": [
        "Ouvrez ce livre comme on lève le rideau d’un théâtre — lentement, avec curiosité et respect.",
        "Chaque page révèle un aspect du Hát Bội : son histoire, son langage scénique, ses costumes, son maquillage et les personnes qui préservent cet héritage."
      ],
      "visual": "ornament",
      "caption": "Tournez les pages et entrez dans un patrimoine vivant."
    }
  },
  {
    "pageNumber": 1,
    "vi": {
      "kicker": "SAU LỚP PHẤN MÀU",
      "title": "HÁT BỘI VĨNH LONG",
      "lead": "Gánh Hát Bội Đồng Thinh · Công Thần Miếu",
      "body": "Vĩnh Long",
      "image": "poster",
      "alt": "Hình ảnh giới thiệu Gánh Hát Bội Đồng Thinh và nghệ thuật Hát Bội Vĩnh Long",
      "caption": "HÁT BỘI · VĨNH LONG",
      "cover": true
    },
    "en": {
      "kicker": "BEHIND THE PAINTED FACE",
      "title": "HÁT BỘI OF VĨNH LONG",
      "lead": "Đồng Thinh Hát Bội Troupe · Công Thần Miếu",
      "body": "Vĩnh Long",
      "image": "poster",
      "alt": "Introductory visual for the Đồng Thinh Hát Bội troupe and Hát Bội in Vĩnh Long",
      "caption": "HÁT BỘI · VĨNH LONG",
      "cover": true
    },
    "fr": {
      "kicker": "DERRIÈRE LE VISAGE MAQUILLÉ",
      "title": "HÁT BỘI DE VĨNH LONG",
      "lead": "Troupe Đồng Thinh · Công Thần Miếu",
      "body": "Vĩnh Long",
      "image": "poster",
      "alt": "Visuel de présentation de la troupe Đồng Thinh et du Hát Bội à Vĩnh Long",
      "caption": "HÁT BỘI · VĨNH LONG",
      "cover": true
    }
  },
  {
    "pageNumber": 3,
    "vi": {
      "kicker": "KHÁI QUÁT HÁT BỘI",
      "title": "Hát Bội là gì?",
      "lead": "Một loại hình sân khấu truyền thống giàu tính ước lệ và biểu cảm.",
      "paragraphs": [
        "Hát Bội – còn được gọi là tuồng trong một số ngữ cảnh kết hợp diễn xuất, lời ca, âm nhạc, phục trang, hóa trang và động tác sân khấu. Mỗi thành tố cùng góp phần kể chuyện và khắc họa nhân vật.",
        "Sân khấu Hát Bội thường sử dụng ngôn ngữ biểu đạt cách điệu. Người xem cảm nhận câu chuyện qua giọng hát, nhịp trống, sắc diện, y phục và cách nghệ sĩ làm chủ không gian."
      ],
      "image": "performer",
      "alt": "Nghệ sĩ Hát Bội trong phục trang và hóa trang truyền thống",
      "caption": "Hình tượng nghệ sĩ Hát Bội trong tư liệu hình ảnh."
    },
    "en": {
      "kicker": "HÁT BỘI AT A GLANCE",
      "title": "What is Hát Bội?",
      "lead": "A traditional theatre form rich in stylization and expression.",
      "paragraphs": [
        "Also referred to as Tuồng in some contexts, Hát Bội brings together acting, sung text, music, costumes, makeup and stylized stage movement. Each element helps tell the story and shape the characters.",
        "Hát Bội uses a highly stylized language of performance. Audiences follow the story through the voice, drum rhythms, painted faces, costumes and the performers’ command of space."
      ],
      "image": "performer",
      "alt": "Hát Bội performer in traditional costume and makeup",
      "caption": "A Hát Bội performer in the visual reference material."
    },
    "fr": {
      "kicker": "APERÇU DU HÁT BỘI",
      "title": "Qu’est-ce que le Hát Bội ?",
      "lead": "Un théâtre traditionnel riche en conventions et en expressivité.",
      "paragraphs": [
        "Également appelé Tuồng dans certains contextes, le Hát Bội associe jeu théâtral, texte chanté, musique, costumes, maquillage et mouvements scéniques stylisés. Chaque élément contribue au récit et à la caractérisation des personnages.",
        "Le Hát Bội possède un langage scénique très codifié. Le public découvre l’histoire à travers la voix, le rythme des tambours, les visages maquillés, les costumes et la maîtrise de l’espace par les artistes."
      ],
      "image": "performer",
      "alt": "Artiste de Hát Bội en costume et maquillage traditionnels",
      "caption": "Un artiste de Hát Bội dans les ressources visuelles."
    }
  },
  {
    "pageNumber": 4,
    "vi": {
      "kicker": "VỀ SÂN KHẤU",
      "title": "Nghệ thuật của sự ước lệ",
      "lead": "Không cần nhiều cảnh trí, chỉ cần người nghệ sĩ biết mở ra không gian bằng diễn xuất.",
      "paragraphs": [
        "Sân khấu Hát Bội truyền thống thường có cách bài trí giản dị, không phụ thuộc vào phông cảnh cầu kỳ. Chính người nghệ sĩ sẽ làm cho không gian sân khấu trở nên sống động.",
        "Một chiếc roi ngựa có thể tượng trưng cho hành trình cưỡi ngựa. Vài vòng di chuyển có thể gợi nên con đường xa. Một động tác chèo thuyền có thể đưa khán giả đến giữa dòng sông tưởng tượng.",
        "Sân khấu có thể đơn sơ, nhưng thế giới mà người nghệ sĩ tạo nên lại vô cùng rộng lớn."
      ],
      "image": "stage",
      "alt": "Không gian sân khấu Hát Bội trong tư liệu hình ảnh",
      "caption": "Sân khấu có thể giản dị, nhưng mở ra một thế giới rộng lớn."
    },
    "en": {
      "kicker": "THE STAGE",
      "title": "The art of suggestion",
      "lead": "A simple stage can open up an entire world through the performer’s craft.",
      "paragraphs": [
        "Traditional Hát Bội stages are often simply arranged and do not depend on elaborate scenery. It is the performers who bring the stage space to life.",
        "A riding crop can represent a journey on horseback. A few turns across the stage can suggest a distant road. A rowing gesture can take the audience onto an imagined river.",
        "The stage may be simple, yet the world created by the performer is immense."
      ],
      "image": "stage",
      "alt": "Hát Bội stage in the visual reference material",
      "caption": "A simple stage can open up an expansive world."
    },
    "fr": {
      "kicker": "LA SCÈNE",
      "title": "L’art de la suggestion",
      "lead": "Sans décors abondants, l’artiste peut faire naître tout un espace par son jeu.",
      "paragraphs": [
        "La scène traditionnelle du Hát Bội est souvent aménagée simplement et ne dépend pas de décors élaborés. Ce sont les artistes qui donnent vie à l’espace scénique.",
        "Une cravache peut symboliser un voyage à cheval. Quelques déplacements peuvent évoquer une longue route. Un geste de rame peut transporter le public au milieu d’un fleuve imaginaire.",
        "La scène peut être dépouillée, mais le monde créé par l’artiste est immense."
      ],
      "image": "stage",
      "alt": "Scène de Hát Bội dans les ressources visuelles",
      "caption": "Une scène simple peut ouvrir un monde immense."
    }
  },
  {
    "pageNumber": 5,
    "vi": {
      "kicker": "HÓA TRANG · SẮC DIỆN",
      "title": "Gương mặt kể chuyện",
      "lead": "Trên khuôn mặt người nghệ sĩ, mỗi đường nét đều góp phần hé lộ tính cách nhân vật.",
      "paragraphs": [
        "Trong Hát Bội, hóa trang không chỉ để làm đẹp hay tạo sự khác biệt. Đó là một ngôn ngữ biểu diễn đặc biệt.",
        "Những đường nét đối xứng, mảng màu đậm và hoa văn cách điệu giúp khán giả nhận biết thần thái, khí chất và vai diễn ngay từ khi nhân vật xuất hiện."
      ],
      "bullets": [
        "Đỏ: Thường gợi sự trung nghĩa, khí phách, lòng quả cảm.",
        "Trắng: Có thể biểu đạt sự gian xảo, mưu mô hoặc những tính cách phức tạp tùy kiểu vẽ.",
        "Đen: Thường gợi sự cương trực, mạnh mẽ, ngay thẳng.",
        "Xanh: Có thể gợi sự dữ dằn, mạnh bạo hoặc nét tính cách đặc biệt của nhân vật."
      ],
      "image": null,
      "visual": "masks",
      "afterBullets": [
        "Tuy nhiên, không nên hiểu màu sắc theo một quy tắc cố định. Ý nghĩa còn phụ thuộc vào đường nét, kiểu vẽ, vai diễn và từng nhân vật cụ thể."
      ],
      "caption": "Màu sắc và đường nét tạo nên ngôn ngữ riêng của từng gương mặt.",
      "bulletsIntro": "Một số màu sắc thường gặp:"
    },
    "en": {
      "kicker": "MAKEUP · FACIAL DESIGNS",
      "title": "Faces that tell stories",
      "lead": "Every line on a performer’s face helps reveal a character’s nature.",
      "paragraphs": [
        "In Hát Bội, makeup is not merely decoration or a way to look different. It is a distinctive language of performance.",
        "Symmetrical lines, bold colour fields and stylized patterns help audiences recognize a character’s bearing, temperament and role from the moment they appear."
      ],
      "bullets": [
        "Red: Often suggests loyalty, courage and noble spirit.",
        "White: Depending on the design, may suggest cunning, deceit or complex traits.",
        "Black: Often suggests uprightness, strength and honesty.",
        "Blue/green: May suggest fierceness, forcefulness or distinctive character traits."
      ],
      "visual": "masks",
      "afterBullets": [
        "However, colours should not be treated as a fixed code. Their meaning also depends on the lines, painting style, role and individual character."
      ],
      "caption": "Colours and lines form the distinctive language of each face.",
      "bulletsIntro": "Some commonly seen colours:"
    },
    "fr": {
      "kicker": "MAQUILLAGE · VISAGES",
      "title": "Des visages qui racontent",
      "lead": "Chaque trait sur le visage de l’artiste révèle une part du caractère du personnage.",
      "paragraphs": [
        "Dans le Hát Bội, le maquillage ne sert pas seulement à embellir ou à différencier. Il constitue un langage scénique particulier.",
        "Les lignes symétriques, les aplats de couleurs intenses et les motifs stylisés permettent au public de reconnaître l’allure, le tempérament et le rôle du personnage dès son entrée."
      ],
      "bullets": [
        "Rouge : évoque souvent la loyauté, le courage et la bravoure.",
        "Blanc : selon le dessin, peut exprimer la ruse, la tromperie ou des traits complexes.",
        "Noir : évoque souvent la droiture, la force et l’honnêteté.",
        "Bleu/vert : peut suggérer la férocité, la puissance ou des traits particuliers."
      ],
      "visual": "masks",
      "afterBullets": [
        "Il ne faut toutefois pas considérer les couleurs comme un code fixe. Leur sens dépend aussi des lignes, du style de peinture, du rôle et de chaque personnage."
      ],
      "caption": "Les couleurs et les lignes composent le langage de chaque visage.",
      "bulletsIntro": "Quelques couleurs courantes :"
    }
  },
  {
    "pageNumber": 6,
    "vi": {
      "kicker": "PHỤC TRANG",
      "title": "Chiếc áo mang theo thân phận",
      "lead": "Chiếc áo không chỉ khoác lên người nghệ sĩ, mà còn mang theo thân phận và khí chất của nhân vật.",
      "paragraphs": [
        "Phục trang Hát Bội thường nổi bật với màu sắc rực rỡ, hoa văn cầu kỳ và những đường thêu tinh xảo.",
        "Mỗi bộ trang phục góp phần thể hiện địa vị, thân phận và tính cách của nhân vật. Tùy vai diễn, nghệ sĩ có thể khoác lên mình áo giáp, chiến bào, áo quan văn, áo cung đình hoặc những bộ y phục dành cho các nhân vật đặc biệt.",
        "Mỗi bộ phục trang là một phần ký ức sân khấu, được nâng niu qua từng lần xuất hiện dưới ánh đèn."
      ],
      "image": "costumes",
      "alt": "Các bộ phục trang Hát Bội với màu sắc và hoa văn truyền thống",
      "caption": "Phục trang được chăm chút qua từng lần xuất hiện dưới ánh đèn."
    },
    "en": {
      "kicker": "COSTUMES",
      "title": "A costume carries a character’s identity",
      "lead": "A costume does more than dress the performer; it carries the character’s status and presence.",
      "paragraphs": [
        "Hát Bội costumes are often distinguished by vivid colours, elaborate patterns and delicate embroidery.",
        "Each costume helps express a character’s rank, identity and personality. Depending on the role, performers may wear armour, battle robes, scholar-official robes, court attire or special garments.",
        "Every costume is part of the stage’s memory, cherished each time it appears under the lights."
      ],
      "image": "costumes",
      "alt": "Hát Bội costumes with traditional colours and patterns",
      "caption": "Costumes are carefully maintained for every appearance under the lights."
    },
    "fr": {
      "kicker": "COSTUMES",
      "title": "Le costume porte l’identité du personnage",
      "lead": "Le costume ne fait pas qu’habiller l’artiste : il porte le statut et le caractère du personnage.",
      "paragraphs": [
        "Les costumes du Hát Bội se distinguent souvent par leurs couleurs éclatantes, leurs motifs élaborés et leurs broderies délicates.",
        "Chaque tenue contribue à exprimer le rang, l’identité et le caractère du personnage. Selon le rôle, l’artiste peut porter une armure, une robe de guerre, une tenue de lettré, un costume de cour ou un vêtement particulier.",
        "Chaque costume est une part de la mémoire du théâtre, précieusement entretenue à chacune de ses apparitions sous les projecteurs."
      ],
      "image": "costumes",
      "alt": "Costumes de Hát Bội aux couleurs et motifs traditionnels",
      "caption": "Les costumes sont entretenus avec soin pour chaque apparition."
    }
  },
  {
    "pageNumber": 7,
    "vi": {
      "kicker": "ÂM NHẠC",
      "title": "Nhịp đập của sân khấu",
      "lead": "Nếu sân khấu là nơi câu chuyện được kể, âm nhạc chính là nhịp đập giữ cho câu chuyện ấy sống động.",
      "paragraphs": [
        "Âm nhạc trong Hát Bội không chỉ làm nền cho lời ca mà còn dẫn dắt cảm xúc và hành động của nhân vật.",
        "Có lúc tiếng trống vang lên dồn dập, thúc giục bước chân của vị tướng ra trận. Có lúc nhịp điệu chậm rãi, nâng đỡ lời ca và nỗi lòng của nhân vật.",
        "Âm nhạc và diễn xuất vì thế không tách rời nhau mà cùng tạo nên ngôn ngữ riêng của Hát Bội."
      ],
      "image": "musicians",
      "alt": "Dàn nhạc biểu diễn nhạc truyền thống cho Hát Bội",
      "caption": "Âm nhạc và diễn xuất cùng tạo nên nhịp điệu của sân khấu."
    },
    "en": {
      "kicker": "MUSIC",
      "title": "The heartbeat of the stage",
      "lead": "If the stage is where the story is told, music is the heartbeat that brings it to life.",
      "paragraphs": [
        "Music in Hát Bội does more than accompany the singing; it guides the characters’ emotions and actions.",
        "At times, rapid drumbeats urge a general into battle. At other moments, a slower rhythm supports the character’s song and inner feelings.",
        "Music and acting are therefore inseparable; together they create Hát Bội’s distinctive language."
      ],
      "image": "musicians",
      "alt": "Traditional musicians accompanying Hát Bội",
      "caption": "Music and acting together shape the rhythm of the stage."
    },
    "fr": {
      "kicker": "MUSIQUE",
      "title": "Le battement de cœur de la scène",
      "lead": "Si la scène raconte l’histoire, la musique en est le battement de cœur.",
      "paragraphs": [
        "Dans le Hát Bội, la musique ne se contente pas d’accompagner le chant : elle guide les émotions et les actions des personnages.",
        "Parfois, les tambours accélèrent et poussent le général vers le combat. À d’autres moments, un rythme lent soutient le chant et les sentiments du personnage.",
        "La musique et le jeu ne sont donc pas séparés : ensemble, ils forment le langage propre au Hát Bội."
      ],
      "image": "musicians",
      "alt": "Musiciens traditionnels accompagnant le Hát Bội",
      "caption": "La musique et le jeu composent ensemble le rythme de la scène."
    }
  },
  {
    "pageNumber": 8,
    "vi": {
      "kicker": "SAU LỚP PHẤN MÀU",
      "title": "Từ nét vẽ đến sự hóa thân",
      "lead": "Đằng sau một khuôn mặt rực rỡ là hàng giờ chuẩn bị và cả một nghệ thuật hóa thân.",
      "paragraphs": [
        "Trước khi bước ra sân khấu, người nghệ sĩ phải trải qua quá trình hóa trang tỉ mỉ. Từng lớp màu, đường viền, nét vẽ đều cần sự chính xác và hiểu biết về nhân vật.",
        "Khi lớp phấn màu hoàn thành, người nghệ sĩ bắt đầu bước vào thế giới của nhân vật. Từ dáng đứng, ánh mắt đến cách đưa tay, xoay người đều thay đổi theo vai diễn.",
        "Một khuôn mặt có thể thay đổi bằng màu sắc, nhưng để trở thành nhân vật, người nghệ sĩ phải hóa thân bằng cả tâm sức."
      ],
      "image": "makeup",
      "alt": "Nghệ sĩ chuẩn bị hóa trang Hát Bội trước giờ biểu diễn",
      "caption": "Từng đường nét cần sự tỉ mỉ, hiểu biết và kinh nghiệm."
    },
    "en": {
      "kicker": "BEHIND THE PAINTED FACE",
      "title": "From painted lines to transformation",
      "lead": "Behind a vivid stage face are hours of preparation and the art of becoming someone else.",
      "paragraphs": [
        "Before stepping on stage, an artist goes through a meticulous makeup process. Every layer of colour, outline and painted detail requires precision and an understanding of the character.",
        "When the makeup is complete, the performer enters the character’s world. Posture, gaze, hand movements and turns all change according to the role.",
        "Colours can transform a face, but becoming a character requires the artist’s whole commitment."
      ],
      "image": "makeup",
      "alt": "Hát Bội artist preparing stage makeup before a performance",
      "caption": "Every line requires care, understanding and experience."
    },
    "fr": {
      "kicker": "DERRIÈRE LE VISAGE MAQUILLÉ",
      "title": "Du trait à la métamorphose",
      "lead": "Derrière un visage éclatant se cachent des heures de préparation et l’art de l’incarnation.",
      "paragraphs": [
        "Avant d’entrer en scène, l’artiste passe par une préparation minutieuse du maquillage. Chaque couche de couleur, contour et trait exige précision et connaissance du personnage.",
        "Une fois le maquillage terminé, l’artiste entre dans l’univers du personnage. La posture, le regard, les gestes des mains et les mouvements du corps changent selon le rôle.",
        "Les couleurs peuvent transformer un visage, mais devenir un personnage exige tout l’engagement de l’artiste."
      ],
      "image": "makeup",
      "alt": "Artiste de Hát Bội préparant son maquillage avant le spectacle",
      "caption": "Chaque trait demande précision, compréhension et expérience."
    }
  },
  {
    "pageNumber": 9,
    "vi": {
      "kicker": "DẤU ẤN ĐỊA PHƯƠNG",
      "title": "Hát Bội trên đất Vĩnh Long",
      "lead": "Giữa miền sông nước Cửu Long, tiếng trống Hát Bội từng vang lên trong những mùa lễ hội đình làng.",
      "paragraphs": [
        "Hát Bội đã bén rễ sâu trong đời sống văn hóa Vĩnh Long từ nhiều thế hệ trước. Đặc biệt, khoảng cuối thế kỷ XIX đến thế kỷ XX là giai đoạn loại hình nghệ thuật này phát triển mạnh mẽ tại địa phương.",
        "Với người dân, một đêm xem Hát Bội không chỉ là dịp thưởng thức nghệ thuật mà còn là một phần của lễ hội, của ký ức làng quê và sự gắn kết cộng đồng.",
        "Năm 2024, Nghệ thuật trình diễn dân gian Hát Bội tỉnh Vĩnh Long được đưa vào Danh mục Di sản văn hóa phi vật thể quốc gia.",
        "Hát Bội Vĩnh Long không chỉ nằm trong những trang sử cũ. Nghệ thuật ấy vẫn đang hiện diện trong những con người còn yêu nghề và mong muốn truyền lại tiếng hát cho mai sau."
      ],
      "image": "localStage",
      "alt": "Tư liệu hình ảnh về không gian Hát Bội tại Vĩnh Long",
      "caption": "Hát Bội gắn với đình làng, lễ hội và ký ức cộng đồng."
    },
    "en": {
      "kicker": "A LOCAL HERITAGE",
      "title": "Hát Bội in Vĩnh Long",
      "lead": "In the Mekong Delta, Hát Bội drums once echoed through village communal-house festivals.",
      "paragraphs": [
        "Hát Bội has been deeply rooted in Vĩnh Long’s cultural life for generations. The art form developed particularly strongly in the area from the late nineteenth century through the twentieth century.",
        "For local people, an evening of Hát Bội was not only an opportunity to enjoy art; it was also part of a festival, a village memory and a bond within the community.",
        "In 2024, the folk performance art of Hát Bội in Vĩnh Long was included in the National List of Intangible Cultural Heritage.",
        "Hát Bội in Vĩnh Long does not belong only to the past. It remains present through people who love the art and hope to pass its songs on to the future."
      ],
      "image": "localStage",
      "alt": "Visual reference of Hát Bội in Vĩnh Long",
      "caption": "Hát Bội is connected to communal houses, festivals and shared memory."
    },
    "fr": {
      "kicker": "UNE IDENTITÉ LOCALE",
      "title": "Le Hát Bội à Vĩnh Long",
      "lead": "Dans le delta du Mékong, les tambours du Hát Bội résonnaient autrefois lors des fêtes des maisons communales.",
      "paragraphs": [
        "Le Hát Bội est profondément enraciné dans la vie culturelle de Vĩnh Long depuis plusieurs générations. Il s’est particulièrement développé dans la région de la fin du XIXe siècle au XXe siècle.",
        "Pour les habitants, une soirée de Hát Bội n’était pas seulement un divertissement artistique : elle faisait partie des fêtes, des souvenirs du village et des liens communautaires.",
        "En 2024, l’art populaire du Hát Bội de la province de Vĩnh Long a été inscrit sur la Liste nationale du patrimoine culturel immatériel.",
        "Le Hát Bội de Vĩnh Long n’appartient pas seulement au passé. Il vit encore grâce aux personnes qui l’aiment et souhaitent transmettre ses chants aux générations futures."
      ],
      "image": "localStage",
      "alt": "Ressource visuelle sur le Hát Bội à Vĩnh Long",
      "caption": "Le Hát Bội est lié aux maisons communales, aux fêtes et à la mémoire collective."
    }
  },
  {
    "pageNumber": 10,
    "vi": {
      "kicker": "GÁNH HÁT BỘI ĐỒNG THINH",
      "title": "Một gánh hát, nhiều thế hệ",
      "lead": "Nhắc đến Hát Bội Vĩnh Long, không thể không nhắc đến Gánh Hát Bội Đồng Thinh – một cái tên gắn liền với hành trình gìn giữ nghệ thuật tuồng cổ ở vùng đất Nam Bộ.",
      "paragraphs": [
        "Đồng Thinh là một trong những gánh hát có bề dày lịch sử, gắn với truyền thống gia đình và nhiều thế hệ nghệ sĩ. Qua những biến động của thời cuộc, gánh hát đã trải qua không ít khó khăn để duy trì hoạt động và tiếp tục đưa Hát Bội đến với công chúng.",
        "Năm 2007, Gánh Hát Bội Đồng Thinh được lựa chọn tham gia biểu diễn tại Lễ hội Smithsonian ở Washington D.C., Hoa Kỳ, góp phần giới thiệu nghệ thuật Hát Bội Việt Nam đến bạn bè quốc tế.",
        "Một gánh hát có thể trải qua nhiều đổi thay, nhưng tình yêu dành cho sân khấu vẫn là sợi dây nối những thế hệ nghệ sĩ với nhau."
      ],
      "image": "troupeGroup",
      "alt": "Tư liệu sân khấu Hát Bội gắn với hành trình của Gánh Hát Bội Đồng Thinh",
      "caption": "Từ sân khấu quê nhà đến những chương trình giao lưu văn hóa."
    },
    "en": {
      "kicker": "ĐỒNG THINH HÁT BỘI TROUPE",
      "title": "One troupe, many generations",
      "lead": "The story of Hát Bội in Vĩnh Long is inseparable from the Đồng Thinh troupe and its work to preserve traditional theatre in the South.",
      "paragraphs": [
        "Đồng Thinh is a troupe with a long history, rooted in family tradition and generations of performers. Through changing times, it has faced many difficulties in maintaining its work and bringing Hát Bội to audiences.",
        "In 2007, the Đồng Thinh Hát Bội troupe was selected to perform at the Smithsonian Folklife Festival in Washington, D.C., helping introduce Vietnamese Hát Bội to international audiences.",
        "A troupe may go through many changes, but love for the stage remains the bond connecting generations of performers."
      ],
      "image": "troupeGroup",
      "alt": "Hát Bội stage reference connected with the Đồng Thinh troupe",
      "caption": "From the home stage to cultural exchange programmes."
    },
    "fr": {
      "kicker": "TROUPE DE HÁT BỘI ĐỒNG THINH",
      "title": "Une troupe, plusieurs générations",
      "lead": "L’histoire du Hát Bội à Vĩnh Long est indissociable de la troupe Đồng Thinh et de son engagement pour préserver le théâtre traditionnel du Sud.",
      "paragraphs": [
        "Đồng Thinh est une troupe à la longue histoire, liée à une tradition familiale et à plusieurs générations d’artistes. Au fil des changements de l’époque, elle a rencontré de nombreuses difficultés pour poursuivre ses activités et faire connaître le Hát Bội au public.",
        "En 2007, la troupe Đồng Thinh a été sélectionnée pour participer au Smithsonian Folklife Festival à Washington, D.C., contribuant à faire découvrir le Hát Bội vietnamien au public international.",
        "Une troupe peut connaître de nombreux changements, mais l’amour de la scène reste le lien entre les générations d’artistes."
      ],
      "image": "troupeGroup",
      "alt": "Image de scène liée à la troupe Đồng Thinh",
      "caption": "De la scène locale aux programmes d’échanges culturels."
    }
  },
  {
    "pageNumber": 11,
    "vi": {
      "kicker": "CON NGƯỜI PHÍA SAU GÁNH HÁT",
      "title": "Những người giữ lửa",
      "lead": "Ánh đèn chỉ chiếu sáng một khoảnh khắc biểu diễn. Nhưng để có khoảnh khắc ấy, biết bao con người đã âm thầm làm việc.",
      "paragraphs": [
        "Có người dành nhiều giờ để hóa trang. Có người chỉnh lại từng chiếc áo, chiếc mão. Có người kiểm tra nhạc cụ, đạo cụ. Và cũng có những nghệ sĩ miệt mài luyện tập từng lời ca, động tác để mỗi lần bước ra sân khấu đều thật trọn vẹn.",
        "Nghệ nhân Ưu tú Vũ Linh Tâm là một gương mặt tiêu biểu trong hành trình ấy. Gắn bó với Hát Bội từ nhỏ, ông không chỉ biểu diễn mà còn dành tâm huyết cho việc hướng dẫn, truyền dạy nghề cho lớp nghệ sĩ trẻ.",
        "Di sản không tự mình tồn tại. Di sản sống nhờ những con người dành cả cuộc đời để gìn giữ nó."
      ],
      "image": "artist",
      "alt": "Nghệ nhân Hát Bội trong tư liệu hình ảnh",
      "caption": "Những con người dành tâm huyết để gìn giữ và truyền dạy nghề."
    },
    "en": {
      "kicker": "THE PEOPLE BEHIND THE TROUPE",
      "title": "The people who keep the flame",
      "lead": "Stage lights illuminate a moment of performance. Many people work quietly to make that moment possible.",
      "paragraphs": [
        "Some spend hours applying makeup. Others adjust robes and headdresses. Some check the instruments and props. Performers practise every lyric and movement so that each appearance on stage can be complete.",
        "Meritorious Artisan Vũ Linh Tâm is a notable figure in this journey. Having been involved with Hát Bội since childhood, he not only performs but also devotes himself to guiding and teaching younger artists.",
        "Heritage does not sustain itself. It lives through people who devote their lives to preserving it."
      ],
      "image": "artist",
      "alt": "Hát Bội artisan in the visual reference material",
      "caption": "People who devote themselves to preserving and teaching the art."
    },
    "fr": {
      "kicker": "LES PERSONNES DERRIÈRE LA TROUPE",
      "title": "Les gardiens de la flamme",
      "lead": "Les projecteurs n’éclairent qu’un instant du spectacle. Pourtant, de nombreuses personnes travaillent dans l’ombre pour le rendre possible.",
      "paragraphs": [
        "Certains passent des heures à se maquiller. D’autres ajustent les robes et les coiffes. Certains vérifient les instruments et les accessoires. Les artistes répètent chaque chant et chaque geste afin que chaque apparition sur scène soit aboutie.",
        "L’Artisan méritant Vũ Linh Tâm est une figure importante de ce parcours. Attaché au Hát Bội depuis son enfance, il ne se contente pas de jouer : il consacre aussi son énergie à guider et à former les jeunes artistes.",
        "Le patrimoine ne se maintient pas tout seul. Il vit grâce aux personnes qui consacrent leur vie à le préserver."
      ],
      "image": "artist",
      "alt": "Artisan de Hát Bội dans les ressources visuelles",
      "caption": "Des personnes qui consacrent leur énergie à préserver et transmettre cet art."
    }
  },
  {
    "pageNumber": 12,
    "vi": {
      "kicker": "LƯU GIỮ VÀ TIẾP NỐI",
      "title": "Để tiếng trống còn vang",
      "lead": "Một buổi diễn có thể kết thúc, nhưng câu chuyện của Hát Bội không nên dừng lại.",
      "paragraphs": [
        "Trong nhịp sống hiện đại, Hát Bội đang đối mặt với nhiều thách thức: khán giả trẻ chưa có nhiều cơ hội tiếp cận, số lượng nghệ sĩ gắn bó lâu dài còn hạn chế và việc truyền dạy những kỹ thuật biểu diễn truyền thống đòi hỏi rất nhiều thời gian, tâm huyết.",
        "Việc bảo tồn không chỉ là giữ lại những bộ trang phục cũ, những tuồng tích xưa hay những khuôn mặt hóa trang đặc trưng. Quan trọng hơn, đó là làm cho nghệ thuật tiếp tục được biểu diễn, được tìm hiểu và được yêu mến.",
        "Cánh màn sân khấu có thể khép lại, nhưng tiếng trống Hát Bội vẫn đang chờ một lần vang lên nữa."
      ],
      "image": "finalStage",
      "alt": "Khoảnh khắc biểu diễn Hát Bội trên sân khấu",
      "caption": "Di sản tiếp tục sống khi được biểu diễn, tìm hiểu và yêu mến."
    },
    "en": {
      "kicker": "PRESERVING AND PASSING IT ON",
      "title": "Let the drums sound again",
      "lead": "A performance may end, but the story of Hát Bội should not stop there.",
      "paragraphs": [
        "In modern life, Hát Bội faces many challenges: young audiences have limited opportunities to encounter it, the number of artists committed to the art over the long term is limited, and teaching traditional performance techniques requires great time and dedication.",
        "Preservation is not only about keeping old costumes, traditional plays or distinctive painted faces. More importantly, it means ensuring that the art continues to be performed, explored and loved.",
        "The stage curtain may close, but the Hát Bội drums are waiting to sound once more."
      ],
      "image": "finalStage",
      "alt": "A Hát Bội performance on stage",
      "caption": "Heritage lives on when it is performed, explored and loved."
    },
    "fr": {
      "kicker": "PRÉSERVER ET TRANSMETTRE",
      "title": "Que les tambours résonnent encore",
      "lead": "Une représentation peut s’achever, mais l’histoire du Hát Bội ne doit pas s’arrêter là.",
      "paragraphs": [
        "Dans la vie moderne, le Hát Bội fait face à de nombreux défis : les jeunes publics ont peu d’occasions de le découvrir, le nombre d’artistes qui s’y consacrent durablement reste limité et la transmission des techniques traditionnelles demande beaucoup de temps et de dévouement.",
        "Préserver ne signifie pas seulement conserver de vieux costumes, des pièces anciennes ou des visages maquillés caractéristiques. Il s’agit surtout de permettre à cet art de continuer à être joué, découvert et aimé.",
        "Le rideau peut se fermer, mais les tambours du Hát Bội attendent de résonner à nouveau."
      ],
      "image": "finalStage",
      "alt": "Une représentation de Hát Bội sur scène",
      "caption": "Le patrimoine vit lorsqu’il est joué, découvert et aimé."
    }
  },
  {
    "pageNumber": 13,
    "vi": {
      "kicker": "LỜI KẾT",
      "title": "Cảm ơn bạn đã cùng lật mở",
      "lead": "Cảm ơn bạn đã cùng chúng tôi đi qua hành trình khám phá Hát Bội.",
      "paragraphs": [
        "Hy vọng rằng sau khi khép lại cuốn sách, bạn không chỉ nhớ đến những sắc màu rực rỡ hay những động tác đặc trưng, mà còn cảm nhận được tâm huyết của những con người đang gìn giữ một phần hồn cốt văn hóa Việt Nam.",
        "Hát Bội – Di sản của hôm qua, câu chuyện của hôm nay và niềm tự hào của ngày mai."
      ],
      "visual": "ornament",
      "caption": "HÁT BỘI · DI SẢN CỦA HÔM QUA, CÂU CHUYỆN CỦA HÔM NAY."
    },
    "en": {
      "kicker": "CLOSING WORDS",
      "title": "Thank you for turning these pages",
      "lead": "Thank you for joining us on this journey of discovering Hát Bội.",
      "paragraphs": [
        "We hope that after closing this book, you will remember not only the vivid colours and distinctive movements, but also feel the dedication of the people preserving a part of Vietnam’s cultural spirit.",
        "Hát Bội — a heritage of yesterday, a story of today and a source of pride for tomorrow."
      ],
      "visual": "ornament",
      "caption": "HÁT BỘI · A HERITAGE OF YESTERDAY, A STORY OF TODAY."
    },
    "fr": {
      "kicker": "MOT DE LA FIN",
      "title": "Merci d’avoir tourné ces pages",
      "lead": "Merci de nous avoir accompagnés dans cette découverte du Hát Bội.",
      "paragraphs": [
        "Nous espérons qu’en refermant ce livre, vous vous souviendrez non seulement des couleurs éclatantes et des gestes caractéristiques, mais que vous ressentirez aussi le dévouement des personnes qui préservent une part de l’âme culturelle du Vietnam.",
        "Le Hát Bội — un patrimoine d’hier, une histoire d’aujourd’hui et une fierté pour demain."
      ],
      "visual": "ornament",
      "caption": "HÁT BỘI · UN PATRIMOINE D’HIER, UNE HISTOIRE D’AUJOURD’HUI."
    }
  },
  {
    "pageNumber": null,
    "vi": {
      "backCover": true,
      "image": "finalStage",
      "caption": "HÁT BỘI · VĨNH LONG · ĐỒNG THINH"
    },
    "en": {
      "backCover": true,
      "image": "finalStage",
      "caption": "HÁT BỘI · VĨNH LONG · ĐỒNG THINH"
    },
    "fr": {
      "backCover": true,
      "image": "finalStage",
      "caption": "HÁT BỘI · VĨNH LONG · ĐỒNG THINH"
    }
  }
];
const UI = {  vi:{navBook:'Cuốn sách',navLanguage:'Ngôn ngữ Hát Bội',navDecoder:'Giải mã sắc diện',navStudio:'Xưởng vẽ mặt',navLocal:'Hát Bội Vĩnh Long',navVoices:'Cảm nghĩ',heroBookCta:'Mở sách tương tác',heroExploreCta:'Khám phá ngôn ngữ Hát Bội',exhibitEyebrow:'SẮC DIỆN & NGÔN NGỮ MẶT NẠ',exhibitTitle:'Ngôn ngữ sắc diện Hát Bội',exhibitLead:'Trong Hát Bội, lớp phấn màu và mặt nạ không che giấu con người mà mở ra một thực tại mới — nơi trung nghĩa, gian xảo, cương trực hay uy dũng được kể bằng đường nét và sắc màu.',mask1Tag:'SẮC ĐỎ · TRUNG NGHĨA',mask1Title:'Sắc Đỏ — Khí phách & Lòng trung',mask1Desc:'Thường gắn với những vị tướng trung nghĩa, quả cảm và giàu chính khí trên sân khấu tuồng.',mask1Story:'Mảng màu đỏ son rực rỡ kết hợp nét mày xếch mạnh mẽ giúp khán giả nhận ra ngay nhân vật trung thành, kiên định và sẵn sàng xả thân vì đại nghĩa.',mask2Tag:'SẮC HỎA · UY NGHI',mask2Title:'Sắc Hỏa — Uy nghi & Thần thái',mask2Desc:'Họa tiết rực cháy khắc họa khí chất oai phong, tạo cảm giác nhân vật bước ra từ sử thi.',mask2Story:'Những họa tiết rực cháy và đường viền đối xứng khắc họa khí chất oai phong, tạo cảm giác nhân vật bước ra từ sử thi và huyền thoại.',mask3Tag:'SẮC TRẮNG · ĐA DIỆN',mask3Title:'Sắc Trắng — Mưu mô & Đa diện',mask3Desc:'Tông trắng phấn thường gợi sự tính toán, mưu lược hoặc nét tính cách phức tạp tùy kiểu vẽ.',mask3Story:'Tông trắng phấn thường biểu đạt sự gian xảo, tính toán hoặc nội tâm phức tạp tùy theo kiểu vẽ mắt và khóe miệng.',mask4Tag:'SẮC ĐEN · CƯƠNG TRỰC',mask4Title:'Sắc Đen — Cương trực & Mạnh mẽ',mask4Desc:'Đường nét đậm dứt khoát gợi sự ngay thẳng, bộc trực và sức mạnh nội tại của bậc anh hùng.',mask4Story:'Đường nét đậm, dứt khoát trên nền tối gợi nên sự ngay thẳng, bộc trực và sức mạnh nội tại của những bậc anh hùng nghĩa hiệp.',mask5Tag:'SẮC XANH · SIÊU NHIÊN',mask5Title:'Sắc Xanh — Dữ dằn & Siêu nhiên',mask5Desc:'Sắc xanh mở ra ranh giới giữa đời thực và thần thoại, dùng cho nhân vật dữ dội hoặc đặc biệt.',mask5Story:'Sắc xanh lam hoặc xanh lục mở ra ranh giới giữa đời thực và thần thoại, thường dùng cho nhân vật dữ dội hoặc mang nét tính cách đặc biệt.',cinemaEyebrow:'CHUYỂN ĐỘNG & NHỊP TRỐNG',cinemaTitle:'Bộ pháp, ánh nhìn và nhịp phách sân khấu',cinemaDesc:'Từ cái phất tay áo, bước đi khoan thai đến tiếng trống chiến dồn dập, mọi chuyển động trong Hát Bội đều được ước lệ hóa để mở ra cả một không gian tưởng tượng.',craft1Title:'Bộ pháp giao tranh',craft1Desc:'Thế võ và vũ đạo cách điệu trên sân khấu ước lệ.',craft2Title:'Phục trang & Mũ mão',craft2Desc:'Họa tiết thêu tay định danh phẩm trật và thân phận nhân vật.',craft3Title:'Khoảnh khắc hóa thân',craft3Desc:'Sự tĩnh lặng trước gương khi người nghệ sĩ bước vào vai diễn.',craft4Title:'Đối diễn & Tung hứng',craft4Desc:'Nhịp tương tác ăn ý giữa các tuyến nhân vật.',craft5Title:'Thần thái sắc đỏ',craft5Desc:'Uy nghi và khí phách qua từng đường nét phục trang.',craft6Title:'Tạo hình võ tướng',craft6Desc:'Dáng đứng, cờ lệnh và thế bộ chuẩn mực của vai võ.',decoderEyebrow:'TƯƠNG TÁC · GIẢI MÃ SẮC DIỆN',decoderTitle:'Giải mã sắc diện',decoderLead:'Lọc khuôn mặt theo màu sắc để khám phá ý nghĩa từng lớp phấn, đặc điểm nhận dạng trên gương mặt và tuyến vai tương ứng trong Hát Bội.',filterAll:'Tất cả',filterRed:'Đỏ · Trung nghĩa',filterFire:'Hỏa · Uy nghi',filterWhite:'Trắng · Đa diện',filterBlack:'Đen · Cương trực',filterGreen:'Xanh · Siêu nhiên',decoderTraitsLabel:'Đặc điểm nhận dạng',decoderRolesLabel:'Thông tin loại vai',studioEyebrow:'TRẢI NGHIỆM SÁNG TẠO · XƯỞNG VẼ MẶT',studioTitle:'Xưởng vẽ mặt Hát Bội',studioLead:'Chọn dáng khuôn mặt, mẫu phối họa tiết và tô riêng từng vùng (Trán, Mắt, Má, Mũi, Miệng, Cằm) với 8 sắc màu truyền thống, sau đó tải về tác phẩm của riêng bạn.',studioUndo:'↶ Hoàn tác',studioRedo:'↷ Làm lại',studioReset:'↺ Đặt lại',studioHint:'Chạm trực tiếp vào Trán, Mắt, Má, Mũi, Miệng hoặc Cằm trên mặt nạ để tô màu đang chọn.',studioShapeLabel:'1. Dáng khuôn mặt',studioPatternLabel:'2. Mẫu phối họa tiết',studioRegionTitle:'3. Chọn vùng tô nhanh',studioColorLabel:'4. Bảng 8 màu cơ bản',studioExport:'XUẤT TÁC PHẨM PNG',localEyebrow:'DẤU ẤN HÁT BỘI VĨNH LONG',localTitle:'Hát Bội Vĩnh Long – Di sản đang được tiếp nối',localDesc:'Từ sân khấu Gánh Hát Bội Đồng Thinh tại Công Thần Miếu đến những nghệ nhân và khán giả hôm nay, mỗi cuộc gặp gỡ giúp câu chuyện Hát Bội tiếp tục được kể.',localCard1Title:'Gánh Hát Bội Đồng Thinh',localCard1Text:'Tại Công Thần Miếu, nhóm có dịp thưởng thức trích đoạn biểu diễn và lắng nghe câu chuyện từ những người gắn bó với Hát Bội.',localCard2Title:'Nghệ nhân Ưu tú Vũ Linh Tâm',localCard2Text:'Hơn 50 năm giữ lửa Hát Bội — gương mặt được nhóm tri ân qua những tư liệu và hình ảnh về hành trình gắn bó với Hát Bội tại Vĩnh Long.',localCard4Title:'Thế hệ kế thừa – Đời thứ năm',localCard4Text:'Cháu nội Nghệ nhân Ưu tú Vũ Linh Tâm tiếp nối ngọn lửa nghề của gia đình tại Gánh Hát Bội Đồng Thinh.',localCard3Title:'Hát Bội gặp gỡ công chúng',localCard3Text:'Những khoảnh khắc biểu diễn và giao lưu cho thấy di sản vẫn có thể chạm đến khán giả qua những trải nghiệm gần gũi.',localFootnote:'Hình ảnh được ghi nhận trong chuyến tìm hiểu Hát Bội Vĩnh Long của nhóm.',language:'Ngôn ngữ',closeCurtain:'Đóng màn',eyebrow:'TRIỂN LÃM SỐ & SÁCH LẬT DI SẢN · DIGITAL HERITAGE EXHIBITION',headline:'Sau Lớp Phấn Màu',introCopy:'Khám phá nghệ thuật Hát Bội Việt Nam qua ngôn ngữ mặt nạ, phục trang, nhịp trống và câu chuyện gìn giữ di sản tại Vĩnh Long.',stageLabel:'HÁT BỘI · TỪ NGHỆ THUẬT ĐẾN CÂU CHUYỆN ĐỊA PHƯƠNG',openStage:'MỞ MÀN',openHint:'CHẠM ĐỂ BẮT ĐẦU HÀNH TRÌNH',previous:'TRANG TRƯỚC',next:'TRANG SAU',turnHint:'Dùng phím mũi tên hoặc vuốt để lật trang',belowKicker:'GIỮ HỒN · ĐỔI HÌNH',belowText:'Đổi cách kể để Hát Bội đến gần hơn với người trẻ, nhưng luôn tôn trọng giá trị nghệ thuật, bối cảnh văn hóa và tiếng nói của nghệ nhân.',feedbackEyebrow:'TIẾNG NÓI NGƯỜI XEM',feedbackTitle:'Bạn cảm nhận điều gì?',feedbackDesc:'Một lời chia sẻ, một câu hỏi hay một góp ý đều có thể giúp câu chuyện Hát Bội được kể tiếp.',formLabel:'SỔ LƯU BÚT DI SẢN',nameLabel:'Tên của bạn',namePlaceholder:'Bạn muốn được gọi là gì?',ratingLabel:'Bạn đánh giá trải nghiệm này thế nào?',thoughtLabel:'Cảm nghĩ và góp ý',thoughtPlaceholder:'Điều gì khiến bạn nhớ nhất về Hát Bội?',formNote:'Lời nhắn sẽ được gửi đến nhóm và các nghệ nhân Đồng Thinh.',submit:'GỬI CẢM NGHĨ',thanks:'Cảm ơn bạn đã chia sẻ!',guestbookKicker:'LƯU BÚT KHÁN GIẢ',guestbookTitle:'Những tiếng lòng được gửi lại',emptyComments:'Chưa có lời nhắn nào. Bạn có thể là người đầu tiên.',guestbookNote:'Mỗi phản hồi là một góc nhìn. Xin cảm ơn bạn đã dành thời gian tìm hiểu Hát Bội.',creditsText:'Tư liệu hình ảnh và video do nhóm thực hiện cung cấp. Thông tin về Gánh Hát Bội Đồng Thinh và Nghệ nhân Ưu tú Vũ Linh Tâm được trình bày theo tư liệu nhóm ghi nhận; nên đối chiếu với nghệ nhân và tư liệu địa phương trước khi xuất bản chính thức.',footerText:'HÁT BỘI VIỆT NAM · HÁT BỘI VĨNH LONG · GÁNH HÁT ĐỒNG THINH',page:'TRANG',saved:'Đã lưu lời cảm nghĩ trên thiết bị này.'},
  en:{navBook:'The book',navLanguage:'Hát Bội Language',navDecoder:'Face Decoder',navStudio:'Mask Studio',navLocal:'Hát Bội in Vĩnh Long',navVoices:'Your thoughts',heroBookCta:'Open Interactive Book',heroExploreCta:'Explore Hát Bội Language',exhibitEyebrow:'FACIAL LANGUAGE & IDENTITY',exhibitTitle:'The Language of Painted Faces',exhibitLead:'In Hát Bội, painted lines and masks do not hide the person — they open an alternative reality where loyalty, cunning, uprightness, and valor are told through colour and form.',mask1Tag:'RED · LOYALTY',mask1Title:'Red — Courage & Loyalty',mask1Desc:'Often associated with loyal, courageous generals and noble spirit on the traditional stage.',mask1Story:'Vibrant crimson fields paired with sharp, upward brows immediately signal a faithful, steadfast character ready to sacrifice for a noble cause.',mask2Tag:'FIRE · MAJESTY',mask2Title:'Fire — Majesty & Presence',mask2Desc:'Blazing motifs convey commanding dignity, evoking figures stepping out of legend.',mask2Story:'Blazing motifs and symmetrical outlines project commanding dignity, making the character feel as though they stepped out of epic legend.',mask3Tag:'WHITE · COMPLEXITY',mask3Title:'White — Cunning & Complexity',mask3Desc:'Chalk-white tones often suggest calculation, deceit, or intricate traits depending on line work.',mask3Story:'Chalk-white tones often express cunning, calculation, or intricate inner motives depending on how the eyes and mouth are drawn.',mask4Tag:'BLACK · UPRIGHTNESS',mask4Title:'Black — Uprightness & Strength',mask4Desc:'Bold, decisive strokes on dark grounds suggest honesty, directness, and inner power.',mask4Story:'Bold, decisive strokes on a dark ground evoke honesty, directness, and the inner strength of righteous heroes.',mask5Tag:'BLUE & GREEN · MYTHIC',mask5Title:'Blue & Green — Fierceness & Myth',mask5Desc:'Blue and green bridge the real and mythic realms for fierce or extraordinary characters.',mask5Story:'Blue and green pigments bridge the everyday and mythic worlds, often reserved for fierce beings or characters with extraordinary temperaments.',cinemaEyebrow:'MOVEMENT & DRUMBEAT',cinemaTitle:'Stage choreography, gaze, and percussion rhythm',cinemaDesc:'From a sweeping sleeve to rapid war-drum beats, every movement in Hát Bội is stylized to conjure an entire imagined world.',craft1Title:'Stylized Combat',craft1Desc:'Martial stances and rhythmic choreography on an open stage.',craft2Title:'Costumes & Headdress',craft2Desc:'Hand-embroidered motifs signify rank and character identity.',craft3Title:'Moment of Transformation',craft3Desc:'Quiet focus before the mirror as the artist steps into character.',craft4Title:'Stage Dialogue',craft4Desc:'Precise, expressive interplay between performing roles.',craft5Title:'Crimson Presence',craft5Desc:'Dignity and command expressed through crimson costume details.',craft6Title:'Warrior Archetype',craft6Desc:'Standardized posture, command flags, and martial bearing.',decoderEyebrow:'INTERACTIVE · FACE DECODER',decoderTitle:'Decoding Painted Faces',decoderLead:'Filter masks by colour to explore the meaning of each pigment, key facial markings, and the corresponding character roles in Hát Bội.',filterAll:'All',filterRed:'Red · Loyalty',filterFire:'Fire · Majesty',filterWhite:'White · Complexity',filterBlack:'Black · Uprightness',filterGreen:'Blue/Green · Mythic',decoderTraitsLabel:'Visual Identifiers',decoderRolesLabel:'Character Role Archetype',studioEyebrow:'CREATIVE LAB · MASK STUDIO',studioTitle:'Hát Bội Mask Studio',studioLead:'Choose a face shape, pattern overlay, and paint six regions (Forehead, Eyes, Cheeks, Nose, Mouth, Chin) using 8 traditional colours, then export your artwork as PNG.',studioUndo:'↶ Undo',studioRedo:'↷ Redo',studioReset:'↺ Reset',studioHint:'Tap directly on Forehead, Eyes, Cheeks, Nose, Mouth, or Chin to apply the selected colour.',studioShapeLabel:'1. Face Shape',studioPatternLabel:'2. Pattern Overlay',studioRegionTitle:'3. Quick Region Select',studioColorLabel:'4. 8 Traditional Colours',studioExport:'EXPORT PNG ARTWORK',localEyebrow:'A LOCAL HÁT BỘI STORY',localTitle:'Hát Bội in Vĩnh Long — a living tradition',localDesc:'From the Đồng Thinh Hát Bội Troupe at Công Thần Miếu to the artists and audiences of today, each encounter keeps the story of Hát Bội alive.',localCard1Title:'Đồng Thinh Hát Bội Troupe',localCard1Text:'During the visit to Công Thần Miếu, the team watched a performance excerpt and listened to people closely connected to Hát Bội.',localCard2Title:'Meritorious Artisan Vũ Linh Tâm',localCard2Text:'Over 50 years keeping the Hát Bội flame alive — a central figure honored in the team’s Vĩnh Long field archive.',localCard4Title:'Fifth-Generation Successor',localCard4Text:'Grandchild of Meritorious Artisan Vũ Linh Tâm carrying forward the family craft in the Đồng Thinh troupe.',localCard3Title:'Hát Bội meets its audience',localCard3Text:'Performance and audience encounters show how traditional theatre can continue to reach people through direct, accessible experiences.',localFootnote:'Images recorded during the team’s exploration of Hát Bội in Vĩnh Long.',language:'Language',closeCurtain:'Close curtains',eyebrow:'DIGITAL HERITAGE EXHIBITION · INTERACTIVE FLIPBOOK',headline:'Behind the Painted Colours',introCopy:'Discover Vietnamese Hát Bội theatre through its masks, costumes, drumbeats, and the story of keeping this art alive in Vĩnh Long.',stageLabel:'HÁT BỘI · FROM THE ART FORM TO A LOCAL STORY',openStage:'OPEN THE CURTAINS',openHint:'TAP TO BEGIN THE JOURNEY',previous:'PREVIOUS',next:'NEXT',turnHint:'Use arrow keys or swipe to turn the page',belowKicker:'PRESERVE THE SPIRIT · RENEW THE FORM',belowText:'Find new ways to bring Hát Bội closer to young audiences while respecting its artistic values, cultural context and the voices of its artists.',feedbackEyebrow:'VISITOR VOICES',feedbackTitle:'What did you feel?',feedbackDesc:'A thought, a question or a suggestion can help the story of Hát Bội continue to be told.',formLabel:'HERITAGE GUESTBOOK',nameLabel:'Your name',namePlaceholder:'What should we call you?',ratingLabel:'How would you rate this experience?',thoughtLabel:'Your thoughts and suggestions',thoughtPlaceholder:'What will you remember most about Hát Bội?',formNote:'Feedback is saved in this browser on this device only.',submit:'SEND YOUR THOUGHTS',thanks:'Thank you for sharing!',guestbookKicker:'VISITOR GUESTBOOK',guestbookTitle:'Messages left by visitors',emptyComments:'No messages yet. You can be the first.',guestbookNote:'Every response offers a point of view. Thank you for taking time to discover Hát Bội.',creditsText:'Photos and video were supplied by the team. Information about the Đồng Thinh Hát Bội Troupe and Meritorious Artisan Vũ Linh Tâm follows the team’s field materials and should be checked with artists and local records before official publication.',footerText:'VIETNAMESE HÁT BỘI · HÁT BỘI IN VĨNH LONG · ĐỒNG THINH TROUPE',page:'PAGE',saved:'Your message has been saved on this device.'},
  fr:{navBook:'Le livre',navLanguage:'Langage du Hát Bội',navDecoder:'Décodeur',navStudio:'Atelier Masque',navLocal:'Hát Bội à Vĩnh Long',navVoices:'Vos impressions',heroBookCta:'Ouvrir le livre interactif',heroExploreCta:'Explorer le langage du Hát Bội',exhibitEyebrow:'LANGAGE DES VISAGES & IDENTITÉ',exhibitTitle:'Le langage des visages peints',exhibitLead:'Dans le Hát Bội, le maquillage et les masques ne dissimulent pas l’être — ils ouvrent une réalité alternative où loyauté, ruse, droiture et bravoure s’expriment par la couleur et le trait.',mask1Tag:'ROUGE · LOYAUTÉ',mask1Title:'Rouge — Courage et loyauté',mask1Desc:'Souvent associé aux généraux fidèles, courageux et animés d’un noble esprit.',mask1Story:'Les aplats rouge vermillon et les sourcils relevés signalent d’emblée un personnage fidèle, résolu et prêt au sacrifice.',mask2Tag:'FEU · MAJESTÉ',mask2Title:'Feu — Majesté et prestance',mask2Desc:'Les motifs flamboyants expriment une dignité imposante digne des récits épiques.',mask2Story:'Les motifs flamboyants et les tracés symétriques confèrent une autorité épique au personnage.',mask3Tag:'BLANC · COMPLEXITÉ',mask3Title:'Blanc — Ruse et complexité',mask3Desc:'Les tons blancs évoquent souvent le calcul, la ruse ou des traits complexes selon le dessin.',mask3Story:'Les tons blancs traduisent souvent la ruse, la stratégie ou des motivations intérieures complexes selon le dessin des yeux et de la bouche.',mask4Tag:'NOIR · DROITURE',mask4Title:'Noir — Droiture et force',mask4Desc:'Des traits affirmés sur fond sombre évoquent l’honnêteté et la force intérieure.',mask4Story:'Des traits francs sur fond sombre évoquent la droiture, la franchise et la force intérieure des héros justes.',mask5Tag:'BLEU & VERT · MYTHE',mask5Title:'Bleu & Vert — Férocité et mythe',mask5Desc:'Le bleu et le vert relient le réel au mythique pour des figures intenses ou singulières.',mask5Story:'Les pigments bleus et verts ouvrent la frontière entre le quotidien et le mythe pour des personnages fougueux ou singuliers.',cinemaEyebrow:'MOUVEMENT & TAMBOURS',cinemaTitle:'Gestuelle scénique, regard et rythme des percussions',cinemaDesc:'D’un mouvement de manche aux roulements rapides du tambour, chaque geste du Hát Bội est stylisé pour faire naître tout un monde imaginaire.',craft1Title:'Combats stylisés',craft1Desc:'Postures martiales et chorégraphie rythmée sur une scène épurée.',craft2Title:'Costumes et coiffes',craft2Desc:'Les broderies traditionnelles indiquent le rang et l’identité du rôle.',craft3Title:'Instant de métamorphose',craft3Desc:'Concentration devant le miroir avant d’entrer dans le rôle.',craft4Title:'Jeu en duo',craft4Desc:'Dialogue gestuel précis entre les personnages sur scène.',craft5Title:'Prestance écarlate',craft5Desc:'Noblesse et énergie portées par les détails du costume rouge.',craft6Title:'Figure du guerrier',craft6Desc:'Posture codifiée, étendards et allure martiale.',decoderEyebrow:'INTERACTIF · DÉCODEUR DES VISAGES',decoderTitle:'Décoder les visages peints',decoderLead:'Filtrez les masques par couleur pour comprendre la symbolique des pigments, les signes distinctifs du visage et les emplois scéniques associés.',filterAll:'Tous',filterRed:'Rouge · Loyauté',filterFire:'Feu · Majesté',filterWhite:'Blanc · Complexité',filterBlack:'Noir · Droiture',filterGreen:'Bleu/Vert · Mythe',decoderTraitsLabel:'Signes distinctifs',decoderRolesLabel:'Emploi théâtral associé',studioEyebrow:'ATELIER CRÉATIF · PEINTURE DE MASQUE',studioTitle:'Atelier de création de masque',studioLead:'Choisissez une forme de visage, un motif, puis peignez chaque zone (Front, Yeux, Joues, Nez, Bouche, Menton) avec 8 couleurs traditionnelles et exportez en PNG.',studioUndo:'↶ Annuler',studioRedo:'↷ Rétablir',studioReset:'↺ Réinitialiser',studioHint:'Touchez directement le Front, les Yeux, les Joues, le Nez, la Bouche ou le Menton pour appliquer la couleur.',studioShapeLabel:'1. Forme du visage',studioPatternLabel:'2. Motif ornemental',studioRegionTitle:'3. Zone rapide',studioColorLabel:'4. Palette de 8 couleurs',studioExport:'EXPORTER EN PNG',localEyebrow:'UNE HISTOIRE LOCALE DU HÁT BỘI',localTitle:'Le Hát Bội à Vĩnh Long — un patrimoine vivant',localDesc:'De la troupe Đồng Thinh au temple Công Thần Miếu aux artistes et au public d’aujourd’hui, chaque rencontre prolonge l’histoire du Hát Bội.',localCard1Title:'La troupe de Hát Bội Đồng Thinh',localCard1Text:'Lors de la visite à Công Thần Miếu, l’équipe a découvert un extrait de représentation et écouté des personnes profondément liées au Hát Bội.',localCard2Title:'Artiste méritant Vũ Linh Tâm',localCard2Text:'Plus de 50 ans au service du Hát Bội — une figure majeure honorée dans les archives de terrain à Vĩnh Long.',localCard4Title:'Cinquième génération',localCard4Text:'Le petit-enfant de l’artiste méritant Vũ Linh Tâm perpétue l’art familial au sein de la troupe Đồng Thinh.',localCard3Title:'Le Hát Bội à la rencontre du public',localCard3Text:'Les représentations et les échanges avec le public montrent comment le théâtre traditionnel peut toucher les spectateurs par des expériences directes et accessibles.',localFootnote:'Images prises lors de la découverte du Hát Bội à Vĩnh Long par l’équipe.',language:'Langue',closeCurtain:'Fermer le rideau',eyebrow:'EXPOSITION NUMÉRIQUE · LIVRE À FEUILLETER',headline:'Au-delà des couleurs du maquillage',introCopy:'Découvrez le théâtre vietnamien Hát Bội à travers ses masques, ses costumes, ses tambours et l’histoire de sa transmission à Vĩnh Long.',stageLabel:'HÁT BỘI · DE L’ART À L’HISTOIRE LOCALE',openStage:'OUVRIR LE RIDEAU',openHint:'TOUCHEZ POUR COMMENCER',previous:'PRÉCÉDENT',next:'SUIVANT',turnHint:'Utilisez les flèches ou faites glisser pour tourner la page',belowKicker:'PRÉSERVER L’ESPRIT · RENOUVELER LA FORME',belowText:'Trouver de nouvelles façons de rapprocher le Hát Bội des jeunes tout en respectant ses valeurs artistiques, son contexte culturel et la parole des artistes.',feedbackEyebrow:'VOIX DES VISITEURS',feedbackTitle:'Qu’avez-vous ressenti ?',feedbackDesc:'Une pensée, une question ou une suggestion peut aider à poursuivre le récit du Hát Bội.',formLabel:'LIVRE D’OR DU PATRIMOINE',nameLabel:'Votre nom',namePlaceholder:'Comment souhaitez-vous être appelé ?',ratingLabel:'Comment évaluez-vous cette expérience ?',thoughtLabel:'Vos impressions et suggestions',thoughtPlaceholder:'Que retiendrez-vous du Hát Bội ?',formNote:'Votre avis est enregistré uniquement dans ce navigateur sur cet appareil.',submit:'ENVOYER VOTRE AVIS',thanks:'Merci pour votre partage !',guestbookKicker:'LIVRE D’OR DES VISITEURS',guestbookTitle:'Les messages laissés par le public',emptyComments:'Aucun message pour le moment. Soyez le premier.',guestbookNote:'Chaque réponse apporte un regard différent. Merci d’avoir pris le temps de découvrir le Hát Bội.',creditsText:'Les photos et vidéos ont été fournies par l’équipe. Les informations sur la troupe Đồng Thinh et l’artiste méritant Vũ Linh Tâm suivent les documents de terrain de l’équipe et doivent être vérifiées auprès des artistes et des archives locales avant publication officielle.',footerText:'HÁT BỘI VIETNAMIEN · HÁT BỘI À VĨNH LONG · TROUPE ĐỒNG THINH',page:'PAGE',saved:'Votre avis a été enregistré sur cet appareil.'}
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const bookEl = $('#book');
const spreadEl = $('#bookSpread');
const sheetEl = $('#pageSheet');
const theaterEl = $('#book-section');
const languageSelect = $('#languageSelect');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentLang = 'vi';
let currentPage = 0;
let isAnimating = false;
let isOpen = false;
let curtainOpenTimer = 0;
let isMobile = window.matchMedia('(max-width:760px)').matches;
let pointerStart = null;
const imageDecodeCache = new Map();

function escapeHTML(value='') {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
const TOTAL_PAGES = 14;
const DISPLAY_TOTAL = 13;
function currentStep(){ return isMobile ? 1 : 2; }
function maxPage(){ return isMobile ? TOTAL_PAGES - 1 : TOTAL_PAGES - 2; }
function mobilePageIndex(step){ return step === 0 ? 1 : (step === 1 ? 0 : step); }
function pageContent(index){
  const page = PAGES[index];
  const content = page?.[currentLang] || page?.vi || {};
  return {...content, pageNumber: page?.pageNumber ?? content.pageNumber};
}
function pageImage(key){ return ASSETS[key] || ''; }

function visualMarkup(p){
  if (p.visual === 'ornament') return `<div class="ornament-panel"><div class="ornament-seal">H<span style="font-size:.56em">B</span></div><p class="ornament-caption">${escapeHTML(p.caption||'')}</p></div>`;
  if (p.visual === 'masks') return `<div class="page-visual"><div class="mask-grid"><div class="mask-tile"><img src="${pageImage('maskHero')}" alt="Mặt nạ Hát Bội họa tiết đỏ, đen và xanh" loading="eager"></div><div class="mask-tile"><img src="${pageImage('maskPale')}" alt="Mặt nạ Hát Bội tông sáng" loading="eager"></div><div class="mask-tile"><img src="${pageImage('maskInk')}" alt="Mặt nạ Hát Bội sắc tối" loading="eager"></div><div class="mask-tile"><img src="${pageImage('maskGreen')}" alt="Mặt nạ Hát Bội sắc xanh" loading="eager"></div><p class="mask-grid-note">${escapeHTML(p.caption||'')}</p></div></div>`;
  if (p.video) return `<div class="page-visual"><figure class="video-frame"><video controls playsinline preload="metadata" poster="${pageImage('videoPoster')}"><source src="${pageImage('video')}" type="video/mp4">Your browser does not support video playback.</video><figcaption class="video-caption">${escapeHTML(p.caption||'')}</figcaption></figure></div>`;
  if (p.image) {
    const orient = IMAGE_ORIENT[p.image] || 'landscape';
    const contain = p.image === 'performer' ? ' photo-frame--contain' : '';
    const portrait = orient === 'portrait' ? ' photo-frame--portrait' : '';
    const imageSrc = pageImage(p.image);
    const alt = escapeHTML(p.alt || 'Hình ảnh Hát Bội');
    const caption = escapeHTML(p.caption || '');
    const sticker = p.sticker ? `<img class="warrior-sticker" src="${pageImage(p.sticker)}" alt="${escapeHTML(p.stickerAlt||'')}" loading="eager">` : '';
    if (p.image === 'performer') return `<div class="page-visual"><div class="cutout-stage"><img src="${imageSrc}" alt="${alt}" loading="eager"><p class="cutout-caption">${caption}</p></div></div>`;
    return `<div class="page-visual"><figure class="photo-frame${portrait}${contain} photo-frame--${orient}"><img src="${imageSrc}" alt="${alt}" loading="eager">${sticker}<figcaption>${caption}</figcaption></figure></div>`;
  }
  return '';
}

function renderLeaf(index, side, number, mobileSingle=false){
  const p = pageContent(index);
  if (p.blank) {
    return `<article class="leaf leaf--${side} leaf--blank${mobileSingle?' leaf--single':''}" aria-hidden="true"></article>`;
  }
  if (p.backCover) {
    return `<article class="leaf leaf--${side} leaf--cover leaf--back-cover${mobileSingle?' leaf--single':''}" data-page="${index}">
      <div class="cover-art"><img src="${pageImage(p.image)}" alt="Hát Bội" loading="eager"><div class="cover-shade"></div></div>
      <div class="back-cover-content">
        <div class="back-cover-seal">HB</div>
        <p class="back-cover-title">SAU LỚP PHẤN MÀU</p>
        <p class="back-cover-sub">HÁT BỘI VĨNH LONG</p>
        <div class="back-cover-ornament">✦ GIỮ HỒN · ĐỔI HÌNH ✦</div>
        <p class="back-cover-caption">${escapeHTML(p.caption||'')}</p>
      </div>
    </article>`;
  }
  const pageNumber = p.pageNumber ?? number;
  const cover = !!p.cover;
  if (cover) {
    return `<article class="leaf leaf--${side} leaf--cover${mobileSingle?' leaf--single':''}" data-page="${index}">
      <div class="cover-art"><img src="${pageImage(p.image)}" alt="${escapeHTML(p.alt||'Poster Hát Bội')}" loading="eager"><div class="cover-shade"></div></div>
      <div class="page-topline"><span>${escapeHTML(p.kicker||'')}</span><span class="page-number">${String(pageNumber).padStart(2,'0')}</span></div>
      <div class="cover-copy"><p class="cover-kicker">SAU LỚP PHẤN MÀU</p><h2 class="cover-title">${escapeHTML(p.title||'HÁT BỘI VĨNH LONG')}</h2><p class="cover-subtitle">${escapeHTML(p.lead||'')}</p><span class="cover-stamp">✦ GIỮ HỒN · ĐỔI HÌNH ✦</span></div>
      <div class="page-footer"><span>HÁT BỘI · VĨNH LONG</span><span>${escapeHTML(p.caption||'')}</span></div>
    </article>`;
  }
  const bullets = p.bullets?.length ? `<ul class="page-bullets">${p.bullets.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul>` : '';
  const paragraphs = (p.paragraphs?.length ? p.paragraphs : (p.body ? [p.body] : []))
    .map(item=>`<p class="page-body-text">${escapeHTML(item)}</p>`).join('');
  const quote = p.quote ? `<blockquote class="page-quote">“${escapeHTML(p.quote)}”<small>${escapeHTML(p.by||'')}</small></blockquote>` : '';
  const bulletsIntro = p.bulletsIntro ? `<p class="page-body-text page-body-text--note">${escapeHTML(p.bulletsIntro)}</p>` : '';
  const afterBullets = (p.afterBullets||[]).map(item=>`<p class="page-body-text page-body-text--note">${escapeHTML(item)}</p>`).join('');
  const body = `<div class="page-copy"><p class="page-kicker">${escapeHTML(p.kicker||'')}</p><h2 class="page-title">${escapeHTML(p.title||'')}</h2><p class="page-lead">${escapeHTML(p.lead||'')}</p>${paragraphs}${bulletsIntro}${bullets}${afterBullets}${quote}</div>`;
  const visual = visualMarkup(p);
  return `<article class="leaf leaf--${side}${mobileSingle?' leaf--single':''}" data-page="${index}">
    <div class="page-topline"><span>SAU LỚP PHẤN MÀU</span><span class="page-number">${String(pageNumber).padStart(2,'0')}</span></div>
    <div class="page-body${visual?' has-visual':''}">${body}${visual}</div>
    <div class="page-footer"><span>HÁT BỘI · VĨNH LONG</span><span>${String(pageNumber).padStart(2,'0')} / ${DISPLAY_TOTAL}</span></div>
  </article>`;
}
function renderBook(){
  isMobile = window.matchMedia('(max-width:760px)').matches;
  if (!isMobile && currentPage % 2 === 1) currentPage -= 1;
  if (isMobile) {
    const pageIndex = mobilePageIndex(currentPage);
    spreadEl.innerHTML = renderLeaf(pageIndex,'single',currentPage+1,true);
    spreadEl.classList.add('single-page');
  } else {
    spreadEl.innerHTML = renderLeaf(currentPage,'left',currentPage+1)+renderLeaf(currentPage+1,'right',currentPage+2);
    spreadEl.classList.remove('single-page');
  }
  updateControls();
}
function updateControls(){
  const step = currentStep();
  const start = currentPage + 1;
  const end = isMobile ? start : Math.min(currentPage + step, TOTAL_PAGES);
  $('#pageCount').textContent = isMobile
    ? `${String(start).padStart(2,'0')} / ${String(TOTAL_PAGES).padStart(2,'0')}`
    : `${String(start).padStart(2,'0')} — ${String(end).padStart(2,'0')} / ${String(TOTAL_PAGES).padStart(2,'0')}`;
  $('#prevPage').disabled = currentPage <= 0;
  $('#nextPage').disabled = false;
  $('#nextPage').classList.toggle('is-finish', currentPage >= maxPage());
  $('#progressBar').style.width = `${((currentPage+step)/TOTAL_PAGES)*100}%`;
  if (typeof syncBookChapters === 'function') syncBookChapters();
}
function renderSheet(frontIndex, backIndex, dir, mobile){
  const front = renderLeaf(frontIndex, dir > 0 ? (mobile?'single':'right') : (mobile?'single':'left'), frontIndex+1, mobile);
  const back = renderLeaf(backIndex, dir > 0 ? (mobile?'single':'right') : (mobile?'single':'left'), backIndex+1, mobile);
  sheetEl.className = `page-sheet ${dir>0?'forward':'backward'}${mobile?' mobile-sheet':''}`;
  sheetEl.innerHTML = `<div class="sheet-face sheet-face--front">${front}</div><div class="sheet-face sheet-face--back">${back}</div>`;
}

function preloadPage(index){
  const p = pageContent(index);
  const sources = [];
  if(p?.image) sources.push(pageImage(p.image));
  if(p?.sticker) sources.push(pageImage(p.sticker));
  if(p?.video) sources.push(pageImage('videoPoster'));
  if(p?.visual === 'masks') ['maskHero','maskFire','maskPale','maskGreen'].forEach(key=>sources.push(pageImage(key)));
  return Promise.all(sources.map(src=>{
    if(!src) return Promise.resolve();
    if(imageDecodeCache.has(src)) return imageDecodeCache.get(src);
    const img = new Image();
    img.src = src;
    const promise = typeof img.decode === 'function'
      ? img.decode().catch(()=>{})
      : new Promise(resolve=>{ if(img.complete) resolve(); else {img.onload=resolve;img.onerror=resolve;} });
    imageDecodeCache.set(src,promise);
    return promise;
  }));
}

async function turnPage(dir){
  if (!isOpen || isAnimating) return;
  const mobile = window.matchMedia('(max-width:760px)').matches;
  const step = mobile ? 1 : 2;
  const target = currentPage + dir*step;
  if (dir > 0 && currentPage >= maxPage()) { closeBookAndCurtains(); return; }
  if (target < 0 || target > maxPage()) return;

  isAnimating = true;
  const currentRenderIndex = mobile ? mobilePageIndex(currentPage) : currentPage;
  const targetRenderIndex = mobile ? mobilePageIndex(target) : target;
  const nextIndexes = mobile ? [targetRenderIndex] : [target, target+1];
  await Promise.all(nextIndexes.map(preloadPage));
  if (!isOpen) { isAnimating = false; return; }

  const baseHTML = mobile
    ? renderLeaf(targetRenderIndex,'single',target+1,true)
    : (dir>0
      ? renderLeaf(currentPage,'left',currentPage+1)+renderLeaf(target+1,'right',target+2)
      : renderLeaf(target,'left',target+1)+renderLeaf(currentPage+1,'right',currentPage+2));
  spreadEl.innerHTML = baseHTML;
  spreadEl.classList.toggle('single-page',mobile);

  const frontIndex = mobile ? currentRenderIndex : (dir>0 ? currentPage+1 : currentPage);
  const backIndex = mobile ? targetRenderIndex : (dir>0 ? target : target+1);
  renderSheet(frontIndex,backIndex,dir,mobile);

  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    sheetEl.classList.add('is-turning');
  }));

  let completed = false;
  const finish = (event)=>{
    if (completed) return;
    if (event && (event.target !== sheetEl || event.propertyName !== 'transform')) return;
    completed = true;
    sheetEl.removeEventListener('transitionend',finish);
    window.clearTimeout(fallbackTimer);
    currentPage = target;
    sheetEl.innerHTML = '';
    sheetEl.className = 'page-sheet';
    renderBook();
    isAnimating = false;

    const warmStart = target + step;
    if (mobile) preloadPage(mobilePageIndex(warmStart));
    else {
      preloadPage(warmStart);
      preloadPage(warmStart+1);
    }
  };
  sheetEl.addEventListener('transitionend',finish);
  const fallbackTimer = window.setTimeout(()=>finish(), reducedMotion ? 100 : 1250);
}
function closeBookAndCurtains(){
  if (!isOpen || isAnimating) return;
  isAnimating = true;
  spreadEl.classList.add('is-book-closing');
  window.setTimeout(()=>{
    closeCurtains();
    window.setTimeout(()=>{
      currentPage = 0;
      spreadEl.classList.remove('is-book-closing');
      renderBook();
      isAnimating = false;
    }, reducedMotion ? 100 : 1700);
  }, reducedMotion ? 50 : 1100);
}
function openCurtains(){
  if (isOpen) return;
  isOpen = true;
  theaterEl.classList.add('is-opening','is-open');
  theaterEl.classList.remove('is-closed');
  $('#closeCurtainBtn').hidden = false;
  $('#openCurtainBtn').setAttribute('aria-hidden','true');
  const openButton = $('#openCurtainBtn');
  const hideOpenButton = ()=>{
    openButton.removeEventListener('transitionend',hideOpenButton);
    if (isOpen) openButton.style.display='none';
  };
  window.clearTimeout(curtainOpenTimer);
  openButton.addEventListener('transitionend',hideOpenButton);
  curtainOpenTimer = window.setTimeout(()=>{
    if (!isOpen) return;
    theaterEl.classList.remove('is-opening');
    hideOpenButton();
  }, reducedMotion ? 50 : 1550);
}
function closeCurtains(){
  if (!isOpen) return;
  window.clearTimeout(curtainOpenTimer);
  isOpen = false;
  theaterEl.classList.remove('is-open','is-opening');
  theaterEl.classList.add('is-closed');
  $('#closeCurtainBtn').hidden = true;
  $('#openCurtainBtn').style.display='flex';
  $('#openCurtainBtn').setAttribute('aria-hidden','false');
}

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  const ui = UI[lang];
  $$('[data-ui]').forEach(el=>{ const key=el.dataset.ui; if(ui[key]) el.textContent=ui[key]; });
  $('#visitorName').placeholder = ui.namePlaceholder;
  $('#visitorThought').placeholder = ui.thoughtPlaceholder;
  const rating = $('#visitorRating');
  const selected = rating.value || '5';
  const ratings = lang==='vi'
    ? ['★★★★★ · Rất ấn tượng','★★★★☆ · Ấn tượng','★★★☆☆ · Bình thường','★★☆☆☆ · Cần cải thiện','★☆☆☆☆ · Chưa phù hợp']
    : lang==='en'
      ? ['★★★★★ · Excellent','★★★★☆ · Good','★★★☆☆ · Fair','★★☆☆☆ · Needs improvement','★☆☆☆☆ · Not for me']
      : ['★★★★★ · Excellent','★★★★☆ · Bien','★★★☆☆ · Moyen','★★☆☆☆ · À améliorer','★☆☆☆☆ · Pas pour moi'];
  rating.innerHTML = ratings.map((label,i)=>`<option value="${5-i}">${label}</option>`).join('');
  rating.value = selected;
  renderBook();
  renderComments();
  if (typeof activateMaskStep === 'function') activateMaskStep(activeMaskIndex, false);
  if (typeof renderBookChapters === 'function') renderBookChapters();
  if (typeof renderDecoderGrid === 'function') renderDecoderGrid();
  if (typeof renderStudioControls === 'function') renderStudioControls();
}

// ===== Google Forms: gửi cảm nghĩ về Google Form để nghệ nhân xem trong tab "Câu trả lời" =====
// Điền 4 giá trị bên dưới (xem hướng dẫn trong phản hồi). Để trống = chỉ lưu trên trình duyệt.
const GOOGLE_FORM = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSc2zic3sInJ8LR4Uz4fi_KJeJJ94_Wk8Q41CH3vRUPrE5BjQQ/formResponse', // vd: https://docs.google.com/forms/d/e/XXXXXXXX/formResponse
  name: 'entry.278367960', // vd: entry.1111111111
  rating: 'entry.1423223294', // vd: entry.2222222222
  thought: 'entry.281578090' // vd: entry.3333333333
};
function sendToGoogleForm({name,text,rating}){
  if (!GOOGLE_FORM.action || !GOOGLE_FORM.name || !GOOGLE_FORM.thought) return;
  const data = new URLSearchParams();
  data.append(GOOGLE_FORM.name, name);
  if (GOOGLE_FORM.rating) data.append(GOOGLE_FORM.rating, String(rating));
  data.append(GOOGLE_FORM.thought, text);
  fetch(GOOGLE_FORM.action, {method:'POST', mode:'no-cors', body:data}).catch(()=>{});
}

function getComments(){
  try { return JSON.parse(localStorage.getItem('hatboiGuestbookV3') || '[]'); }
  catch { return []; }
}
function renderComments(){
  const target = $('#commentsList');
  const comments = getComments();
  target.innerHTML = '';
  if (!comments.length){
    const p = document.createElement('p'); p.className='empty-comments'; p.textContent=UI[currentLang].emptyComments; target.appendChild(p); return;
  }
  comments.slice(-4).reverse().forEach(item=>{
    const article = document.createElement('article'); article.className='comment-item';
    const strong = document.createElement('strong'); strong.textContent = `${item.name} · ${'★'.repeat(item.rating)}${'☆'.repeat(5-item.rating)}`;
    const p = document.createElement('p'); p.textContent = item.text;
    const small = document.createElement('small'); small.textContent = item.date;
    article.append(strong,p,small); target.appendChild(article);
  });
}

$('#feedbackForm').addEventListener('submit', event=>{
  event.preventDefault();
  const name = $('#visitorName').value.trim();
  const text = $('#visitorThought').value.trim();
  const rating = Number($('#visitorRating').value);
  if(!name || !text) return;
  const comments = getComments();
  comments.push({name,text,rating,date:new Date().toLocaleDateString()});
  sendToGoogleForm({name,text,rating});
  try { localStorage.setItem('hatboiGuestbookV3',JSON.stringify(comments.slice(-40))); }
  catch { $('#formSuccess').textContent = UI[currentLang].formNote; return; }
  $('#visitorThought').value = '';
  $('#formSuccess').textContent = UI[currentLang].saved;
  renderComments();
});

$('#openCurtainBtn').addEventListener('click',openCurtains);
$('#closeCurtainBtn').addEventListener('click',closeCurtains);
$('#nextPage').addEventListener('click',()=>turnPage(1));
$('#prevPage').addEventListener('click',()=>turnPage(-1));
languageSelect.addEventListener('change',e=>setLanguage(e.target.value));
document.addEventListener('keydown',e=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if(e.key==='ArrowRight'){e.preventDefault();turnPage(1)}
  if(e.key==='ArrowLeft'){e.preventDefault();turnPage(-1)}
});

// Touch and pointer swipes turn one page without blocking vertical scrolling.
bookEl.addEventListener('pointerdown',e=>{ if(!isOpen || isAnimating) return; pointerStart={x:e.clientX,y:e.clientY}; });
bookEl.addEventListener('pointerup',e=>{
  if(!pointerStart) return;
  const dx=e.clientX-pointerStart.x, dy=e.clientY-pointerStart.y;
  pointerStart=null;
  if(Math.abs(dx)>42 && Math.abs(dx)>Math.abs(dy)*1.25) turnPage(dx<0?1:-1);
});
bookEl.addEventListener('pointercancel',()=>pointerStart=null);

// Responsive mode switch: keep the currently visible page, then normalize to a spread on desktop.
let resizeTimer;
window.addEventListener('resize',()=>{
  window.clearTimeout(resizeTimer);
  resizeTimer=window.setTimeout(()=>{
    const nextMobile=window.matchMedia('(max-width:760px)').matches;
    if(nextMobile!==isMobile){isMobile=nextMobile; if(!isMobile && currentPage%2===1) currentPage-=1; renderBook();}
  },120);
});

// Scroll reveal for editorial sections.
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);} });
},{threshold:.14});
$$('.reveal-on-scroll').forEach(el=>revealObserver.observe(el));

// Pointer-driven 3D tilt and magnetic controls, scheduled through requestAnimationFrame.
if(!reducedMotion && window.matchMedia('(pointer:fine)').matches){
  $$('.feedback-form,.guestbook-card').forEach(card=>{
    let frame=0;
    card.addEventListener('pointermove',e=>{
      const rect=card.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{card.style.transform=`perspective(900px) rotateX(${(-y*2.4).toFixed(2)}deg) rotateY(${(x*2.8).toFixed(2)}deg) translateY(-2px)`;});
    });
    card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);card.style.transform='';});
  });
  $$('.gallery-card').forEach(card=>{
    let frame=0;
    card.addEventListener('pointermove',e=>{
      const rect=card.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{
        card.style.setProperty('--tilt-x',`${(-y*3.2).toFixed(2)}deg`);
        card.style.setProperty('--tilt-y',`${(x*4.2).toFixed(2)}deg`);
      });
    });
    card.addEventListener('pointerleave',()=>{
      cancelAnimationFrame(frame);
      card.style.setProperty('--tilt-x','0deg');
      card.style.setProperty('--tilt-y','0deg');
    });
  });
  $$('.magnetic').forEach(button=>{
    let frame=0;
    button.addEventListener('pointermove',e=>{
      const rect=button.getBoundingClientRect();
      const dx=(e.clientX-(rect.left+rect.width/2))/rect.width;
      const dy=(e.clientY-(rect.top+rect.height/2))/rect.height;
      cancelAnimationFrame(frame);
      frame=requestAnimationFrame(()=>{button.style.translate=`${dx*7}px ${dy*7}px`;});
    });
    button.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);button.style.translate='';});
  });
}

// Parallax ornaments follow scroll at different depths; content itself remains stationary and readable.
let parallaxFrame=0;
function updateParallax(){
  if(reducedMotion || parallaxFrame) return;
  parallaxFrame=requestAnimationFrame(()=>{
    const scrollY=window.scrollY||0;
    $$('[data-depth]').forEach(el=>{
      const depth=Number(el.dataset.depth||.1);
      el.style.setProperty('--parallax-y',`${(scrollY*depth*-0.16).toFixed(1)}px`);
    });
    parallaxFrame=0;
  });
}
window.addEventListener('scroll',updateParallax,{passive:true});

// Mobile menu opens and closes; links close it after navigation.
const menuToggle=$('#menuToggle'), mobileMenu=$('#mobileMenu');
menuToggle.addEventListener('click',()=>{
  const open=menuToggle.getAttribute('aria-expanded')!=='true';
  menuToggle.setAttribute('aria-expanded',String(open));
  mobileMenu.hidden=!open;
});
$$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{menuToggle.setAttribute('aria-expanded','false');mobileMenu.hidden=true;}));

// Scrollytelling Mask Exhibition (Google Arts & Culture inspired)
const MASK_STEPS = [
  { key: 'maskHero', tag: 'mask1Tag', title: 'mask1Title', desc: 'mask1Desc' },
  { key: 'maskFire', tag: 'mask2Tag', title: 'mask2Title', desc: 'mask2Desc' },
  { key: 'maskPale', tag: 'mask3Tag', title: 'mask3Title', desc: 'mask3Desc' },
  { key: 'maskInk', tag: 'mask4Tag', title: 'mask4Title', desc: 'mask4Desc' },
  { key: 'maskGreen', tag: 'mask5Tag', title: 'mask5Title', desc: 'mask5Desc' }
];
let activeMaskIndex = 0;

function activateMaskStep(index, animate = true) {
  const step = MASK_STEPS[index];
  if (!step) return;
  activeMaskIndex = index;
  const ui = UI[currentLang] || UI.vi;
  const img = $('#stickyMaskImg');
  const badge = $('#maskBadge');
  const tag = $('#maskTag');
  const title = $('#maskStickyTitle');
  const desc = $('#maskStickyDesc');
  if (badge) badge.textContent = `${String(index + 1).padStart(2, '0')} / 05`;
  if (tag && ui[step.tag]) tag.textContent = ui[step.tag];
  if (title && ui[step.title]) title.textContent = ui[step.title];
  if (desc && ui[step.desc]) desc.textContent = ui[step.desc];
  $$('.story-step').forEach((el, idx) => {
    el.classList.toggle('is-active', idx === index);
    el.setAttribute('aria-current', idx === index ? 'step' : 'false');
  });
  $$('.mask-dot').forEach((el, idx) => {
    el.classList.toggle('is-active', idx === index);
    el.setAttribute('aria-selected', String(idx === index));
  });
  if (img && img.getAttribute('src') !== pageImage(step.key)) {
    if (animate && !reducedMotion) {
      img.classList.add('is-switching');
      window.setTimeout(() => {
        img.src = pageImage(step.key);
        img.alt = ui[step.title] || 'Mặt nạ Hát Bội';
        img.classList.remove('is-switching');
      }, 160);
    } else {
      img.src = pageImage(step.key);
      img.alt = ui[step.title] || 'Mặt nạ Hát Bội';
    }
  }
}

$$('.story-step').forEach(el => {
  const idx = Number(el.dataset.maskIndex || 0);
  el.addEventListener('click', () => activateMaskStep(idx));
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activateMaskStep(idx);
    }
  });
});
$$('.mask-dot').forEach(el => {
  const idx = Number(el.dataset.maskIndex || 0);
  el.addEventListener('click', () => activateMaskStep(idx));
});

const maskObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = Number(entry.target.dataset.maskIndex || 0);
      activateMaskStep(idx);
    }
  });
}, { rootMargin: '-32% 0px -42% 0px', threshold: 0.1 });
$$('.story-step').forEach(el => maskObserver.observe(el));

// Preload the first two spreads so the first turns do not wait on image decoding.
[1,0,2,3,4,5].forEach(preloadPage);
renderBook();
renderComments();
activateMaskStep(0, false);

// Quick Chapter Jump for the Interactive Book
const BOOK_CHAPTERS = [
  { page: 0, vi: 'Bìa & Lời dẫn', en: 'Cover & Intro', fr: 'Couverture' },
  { page: 2, vi: 'Hát Bội & Sân khấu', en: 'Stage & Art', fr: 'La Scène' },
  { page: 4, vi: 'Mặt nạ & Phục trang', en: 'Masks & Costumes', fr: 'Masques & Costumes' },
  { page: 6, vi: 'Âm nhạc & Hóa thân', en: 'Music & Makeup', fr: 'Musique & Maquillage' },
  { page: 8, vi: 'Vĩnh Long & Đồng Thinh', en: 'Vĩnh Long & Troupe', fr: 'Vĩnh Long & Troupe' },
  { page: 10, vi: 'Nghệ nhân & Tiếp nối', en: 'Artisans & Legacy', fr: 'Artisans & Relève' },
  { page: 12, vi: 'Lời kết', en: 'Closing', fr: 'Conclusion' }
];

function renderBookChapters() {
  const wrap = $('#bookChapters');
  if (!wrap) return;
  wrap.innerHTML = BOOK_CHAPTERS.map((ch, idx) => {
    const label = ch[currentLang] || ch.vi;
    return `<button class="chapter-chip" type="button" data-chapter-page="${ch.page}" data-chapter-idx="${idx}">${escapeHTML(label)}</button>`;
  }).join('');
  $$('.chapter-chip', wrap).forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!isOpen || isAnimating) return;
      const target = Number(btn.dataset.chapterPage || 0);
      const mobile = window.matchMedia('(max-width:760px)').matches;
      const normalized = mobile ? target : (target % 2 === 1 ? target - 1 : target);
      if (normalized === currentPage) return;
      await Promise.all(mobile ? [preloadPage(mobilePageIndex(normalized))] : [preloadPage(normalized), preloadPage(normalized + 1)]);
      currentPage = Math.max(0, Math.min(normalized, maxPage()));
      renderBook();
    });
  });
  syncBookChapters();
}

function syncBookChapters() {
  const chips = $$('.chapter-chip');
  if (!chips.length) return;
  let activeIdx = 0;
  BOOK_CHAPTERS.forEach((ch, idx) => {
    if (currentPage >= ch.page) activeIdx = idx;
  });
  chips.forEach((chip, idx) => chip.classList.toggle('is-active', idx === activeIdx));
}

// Topbar reading progress (rAF-throttled) & active nav highlight (IntersectionObserver)
const readBar = $('#readProgressBar');
let progressFrame = 0;
function updateReadProgress() {
  if (progressFrame) return;
  progressFrame = requestAnimationFrame(() => {
    if (readBar) {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      readBar.style.transform = `scaleX(${ratio.toFixed(4)})`;
    }
    progressFrame = 0;
  });
}
window.addEventListener('scroll', updateReadProgress, { passive: true });
updateReadProgress();

const navSectionIds = ['book-section', 'hat-boi-language', 'face-decoder', 'mask-studio', 'vinh-long-focus', 'visitor-voices'];
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      $$('.desktop-nav a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
    }
  });
}, { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 });
navSectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});

// Museum Lightbox Modal for high-res artwork inspection
const lightboxEl = $('#museumLightbox');
const lightboxImg = $('#lightboxImg');
const lightboxKicker = $('#lightboxKicker');
const lightboxTitle = $('#lightboxTitle');
const lightboxDesc = $('#lightboxDesc');
let lastFocusedEl = null;

function openLightbox({ src, alt, kicker, title, desc }) {
  if (!lightboxEl || !src) return;
  lastFocusedEl = document.activeElement;
  lightboxImg.src = src;
  lightboxImg.alt = alt || title || '';
  lightboxKicker.textContent = kicker || '';
  lightboxTitle.textContent = title || '';
  lightboxDesc.textContent = desc || '';
  lightboxEl.hidden = false;
  document.body.style.overflow = 'hidden';
  $('#lightboxClose')?.focus();
}

function closeLightbox() {
  if (!lightboxEl || lightboxEl.hidden) return;
  lightboxEl.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
}

$('#lightboxClose')?.addEventListener('click', closeLightbox);
$('#lightboxBackdrop')?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightboxEl && !lightboxEl.hidden) closeLightbox();
});

$('#stickyMaskImg')?.addEventListener('click', () => {
  const step = MASK_STEPS[activeMaskIndex];
  const ui = UI[currentLang] || UI.vi;
  openLightbox({
    src: pageImage(step.key),
    alt: ui[step.title],
    kicker: ui[step.tag],
    title: ui[step.title],
    desc: ui[step.story || step.desc] || ui[step.desc]
  });
});

$$('.craft-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = $('img', card);
    const title = $('strong', card)?.textContent || '';
    const desc = $('span', card)?.textContent || '';
    const ui = UI[currentLang] || UI.vi;
    openLightbox({ src: img?.src, alt: img?.alt, kicker: ui.cinemaEyebrow, title, desc });
  });
});

$$('.gallery-card').forEach(card => {
  $('figure', card)?.addEventListener('click', () => {
    const img = $('img', card);
    const title = $('h3', card)?.textContent || '';
    const desc = $('.gallery-card-copy p', card)?.textContent || '';
    const ui = UI[currentLang] || UI.vi;
    openLightbox({ src: img?.src, alt: img?.alt, kicker: ui.localEyebrow, title, desc });
  });
});

renderBookChapters();

// ---------------------------------------------------------
// Section 1: Giải mã sắc diện (#face-decoder)
// ---------------------------------------------------------
const DECODER_MASKS = [
  {
    id: 'red',
    color: 'red',
    image: 'maskHero',
    vi: {
      badge: 'SẮC ĐỎ',
      name: 'Mặt Đỏ Trung Nghĩa',
      short: 'Vai Trung · Quả cảm',
      meaning: 'Màu đỏ son là biểu tượng của lòng trung thành, chính khí và sự quả cảm. Người mang sắc diện đỏ thường đặt đại nghĩa lên trên tính mạng.',
      traits: ['Nền má đỏ son rực rỡ, đối xứng hai bên gò má', 'Chân mày xếch cao, đuôi mày uốn cong sắc nét', 'Vầng trán kết hợp vân mây vàng – xanh lam tạo thế uy nghi'],
      roles: 'Vai Trung quân, Võ tướng chính trực (ví dụ: Quan Công, các vị trung thần bảo vệ triều đình).'
    },
    en: {
      badge: 'RED',
      name: 'Crimson Loyalty Face',
      short: 'Loyal General · Valor',
      meaning: 'Crimson pigment symbolizes loyalty, righteousness, and courage. Characters with red faces place honour and duty above all else.',
      traits: ['Vibrant crimson cheeks balanced symmetrically', 'Sharply angled, upward-sweeping eyebrows', 'Forehead adorned with gold and teal cloud motifs'],
      roles: 'Loyal generals and upright heroes defending justice and the realm.'
    },
    fr: {
      badge: 'ROUGE',
      name: 'Visage Rouge de Loyauté',
      short: 'Général fidèle · Bravoure',
      meaning: 'Le rouge vermillon incarne la loyauté, la droiture et le courage. Ces personnages placent le devoir au-dessus de leur propre vie.',
      traits: ['Pommettes rouge vif parfaitement symétriques', 'Sourcils relevés et tracés avec vigueur', 'Front orné de volutes dorées et turquoise'],
      roles: 'Généraux fidèles et héros justes défendant le royaume.'
    }
  },
  {
    id: 'fire',
    color: 'fire',
    image: 'maskFire',
    vi: {
      badge: 'SẮC HỎA · VÀNG',
      name: 'Mặt Hỏa Uy Nghi',
      short: 'Vai Tướng · Thần thái',
      meaning: 'Sắc cam hỏa và vàng kim thể hiện khí phách bùng cháy, sức mạnh tinh thần và vị thế đặc biệt của nhân vật trên chiến trường.',
      traits: ['Họa tiết ngọn lửa lan từ sống mũi lên giữa trán', 'Đường viền vàng – đen tạo chiều sâu cho hốc mắt', 'Khóe miệng mở rộng, toát lên khí thế lẫm liệt'],
      roles: 'Mãnh tướng tiên phong, nhân vật mang sức mạnh phi thường hoặc hộ pháp.'
    },
    en: {
      badge: 'FIRE · GOLD',
      name: 'Blazing Majesty Face',
      short: 'Vanguard · Command',
      meaning: 'Fiery orange and gold reflect blazing spirit, inner authority, and commanding presence on the battlefield.',
      traits: ['Flame-like motifs rising from nose bridge to forehead', 'Bold gold and black eye contours for intense gaze', 'Expressive mouth lines projecting heroic force'],
      roles: 'Fierce vanguard generals and commanding legendary champions.'
    },
    fr: {
      badge: 'FEU · OR',
      name: 'Visage de Majesté Flamboyante',
      short: 'Avant-garde · Autorité',
      meaning: 'L’orange ardent et l’or expriment une énergie flamboyante et une autorité naturelle sur le champ de bataille.',
      traits: ['Motifs de flammes du nez vers le front', 'Contours dorés et noirs intensifiant le regard', 'Bouche expressive projetant une force héroïque'],
      roles: 'Généraux d’avant-garde et figures légendaires imposantes.'
    }
  },
  {
    id: 'white',
    color: 'white',
    image: 'maskPale',
    vi: {
      badge: 'SẮC TRẮNG',
      name: 'Mặt Trắng Đa Diện',
      short: 'Vai Nịnh · Mưu lược',
      meaning: 'Lớp phấn trắng phủ rộng thường biểu đạt sự mưu mô, toan tính hoặc tâm lý phức tạp, che giấu toan tính sau vẻ ngoài điềm tĩnh.',
      traits: ['Nền mặt trắng phấn tương phản mạnh với nét đen mảnh', 'Đôi mắt hẹp, đuôi mắt kéo dài hoặc xếch nhẹ', 'Nét vẽ vùng miệng và râu thanh mảnh, sắc sảo'],
      roles: 'Vai Nịnh thần, gian hùng mưu lược hoặc nhân vật phản diện có chiều sâu tâm lý.'
    },
    en: {
      badge: 'WHITE',
      name: 'Chalk-White Cunning Face',
      short: 'Schemer · Complex',
      meaning: 'Broad chalk-white pigment often signifies calculation, cunning, or layered motives hidden behind a composed exterior.',
      traits: ['Pale white base contrasting with fine black ink lines', 'Narrowed, elongated eye contours', 'Sharp, slender mouth and beard strokes'],
      roles: 'Cunning court officials, strategists, and complex antagonists.'
    },
    fr: {
      badge: 'BLANC',
      name: 'Visage Blanc de Ruse',
      short: 'Stratège · Complexe',
      meaning: 'Le fond blanc poudré évoque souvent le calcul, la ruse ou une psychologie complexe dissimulée sous un calme apparent.',
      traits: ['Base blanche contrastant avec de fins traits noirs', 'Yeux allongés et dessinés avec finesse', 'Bouche et barbe aux lignes acérées'],
      roles: 'Courtisans rusés, stratèges et antagonistes complexes.'
    }
  },
  {
    id: 'black',
    color: 'black',
    image: 'maskInk',
    vi: {
      badge: 'SẮC ĐEN',
      name: 'Mặt Đen Cương Trực',
      short: 'Vai Võ · Bộc trực',
      meaning: 'Màu đen mực đại diện cho tính cách bộc trực, không khuất phục cường quyền, tấm lòng ngay thẳng và sức mạnh thể chất.',
      traits: ['Mảng đen đậm phủ quanh hốc mắt và vầng trán', 'Nét trắng uốn lượn tách biệt các khối cơ mặt', 'Dáng mày rậm, dứt khoát và gân guốc'],
      roles: 'Vai anh hùng nghĩa hiệp, võ tướng tính tình thẳng thắn, nóng nảy nhưng nghĩa khí.'
    },
    en: {
      badge: 'BLACK',
      name: 'Ink-Black Upright Face',
      short: 'Righteous · Fierce',
      meaning: 'Ink black represents blunt honesty, defiance against tyranny, and raw physical strength.',
      traits: ['Bold black fields around eyes and forehead', 'Crisp white dividing lines sculpting facial muscles', 'Thick, decisive, rugged eyebrow strokes'],
      roles: 'Outspoken heroes, righteous warriors, and fiercely loyal protectors.'
    },
    fr: {
      badge: 'NOIR',
      name: 'Visage Noir de Droiture',
      short: 'Justicier · Fougueux',
      meaning: 'Le noir d’encre incarne la franchise absolue, le refus de la tyrannie et une force physique indomptable.',
      traits: ['Larges aplats noirs autour des yeux et du front', 'Lignes blanches sculptant les traits du visage', 'Sourcils épais et énergiques'],
      roles: 'Héros francs, guerriers justiciers et protecteurs intrépides.'
    }
  },
  {
    id: 'green',
    color: 'green',
    image: 'maskGreen',
    vi: {
      badge: 'SẮC XANH',
      name: 'Mặt Xanh Siêu Nhiên',
      short: 'Vai Thần · Dữ dằn',
      meaning: 'Sắc xanh lam hoặc xanh lục đưa nhân vật vượt khỏi ranh giới đời thường, gợi sự dữ dội, bí ẩn hoặc nguồn gốc thần linh.',
      traits: ['Tông xanh lục/lam phủ khắp trán và gò má', 'Hoa văn xoắn ốc quanh mắt và thái dương', 'Nét viền đỏ hoặc vàng tạo sự tương phản siêu thực'],
      roles: 'Vai Thần linh, Yêu quái, Sơn thần hoặc những nhân vật mang bản chất phi phàm.'
    },
    en: {
      badge: 'BLUE / GREEN',
      name: 'Emerald Mythic Face',
      short: 'Deity · Supernatural',
      meaning: 'Blue and green pigments elevate the figure beyond everyday reality, evoking fierceness, mystery, or divine origin.',
      traits: ['Deep green or teal tones across forehead and cheeks', 'Spiraling motifs around eyes and temples', 'Contrasting red or gold outlines for mythic intensity'],
      roles: 'Deities, mountain spirits, supernatural beings, and fierce mythical figures.'
    },
    fr: {
      badge: 'BLEU / VERT',
      name: 'Visage Vert Mythique',
      short: 'Divinité · Surnaturel',
      meaning: 'Les pigments bleus et verts placent le personnage au-delà du réel, évoquant férocité, mystère ou origine divine.',
      traits: ['Tons vert émeraude ou bleu sarcelle sur le front et les joues', 'Motifs en spirale autour des yeux et des tempes', 'Contours rouges ou dorés d’une intensité mythique'],
      roles: 'Divinités, esprits de la montagne et créatures surnaturelles.'
    }
  }
];

let activeDecoderColor = 'all';
let activeDecoderId = 'red';

function renderDecoderDetail(maskId) {
  const mask = DECODER_MASKS.find(m => m.id === maskId) || DECODER_MASKS[0];
  if (!mask) return;
  activeDecoderId = mask.id;
  const copy = mask[currentLang] || mask.vi;
  const img = $('#decoderMaskImg');
  if (img) {
    img.src = pageImage(mask.image);
    img.alt = copy.name;
  }
  const badge = $('#decoderBadge');
  const name = $('#decoderName');
  const meaning = $('#decoderMeaning');
  const traits = $('#decoderTraits');
  const roles = $('#decoderRoles');
  if (badge) badge.textContent = copy.badge;
  if (name) name.textContent = copy.name;
  if (meaning) meaning.textContent = copy.meaning;
  if (traits) traits.innerHTML = copy.traits.map(t => `<li>${escapeHTML(t)}</li>`).join('');
  if (roles) roles.textContent = copy.roles;
  $$('.decoder-card').forEach(card => {
    const selected = card.dataset.maskId === mask.id;
    card.classList.toggle('is-active', selected);
    card.setAttribute('aria-selected', String(selected));
  });
}

function renderDecoderGrid() {
  const grid = $('#decoderGrid');
  if (!grid) return;
  const filtered = activeDecoderColor === 'all'
    ? DECODER_MASKS
    : DECODER_MASKS.filter(m => m.color === activeDecoderColor);
  if (!filtered.some(m => m.id === activeDecoderId) && filtered[0]) {
    activeDecoderId = filtered[0].id;
  }
  grid.innerHTML = filtered.map(m => {
    const copy = m[currentLang] || m.vi;
    const isSelected = m.id === activeDecoderId;
    return `<button class="decoder-card${isSelected ? ' is-active' : ''}" type="button" role="option" aria-selected="${isSelected}" data-mask-id="${m.id}">
      <div class="decoder-card-thumb"><img src="${pageImage(m.image)}" alt="${escapeHTML(copy.name)}"></div>
      <strong>${escapeHTML(copy.name)}</strong>
      <span>${escapeHTML(copy.short)}</span>
    </button>`;
  }).join('');
  $$('.decoder-card', grid).forEach(card => {
    card.addEventListener('click', () => renderDecoderDetail(card.dataset.maskId));
  });
  renderDecoderDetail(activeDecoderId);
}

$$('#decoderFilters .filter-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    activeDecoderColor = btn.dataset.color || 'all';
    $$('#decoderFilters .filter-chip').forEach(c => c.classList.toggle('is-active', c === btn));
    renderDecoderGrid();
  });
});

renderDecoderGrid();

// ---------------------------------------------------------
// Section 2: Xưởng vẽ mặt (#mask-studio)
// ---------------------------------------------------------
const STUDIO_PALETTE = [
  { hex: '#B81D24', vi: 'Đỏ son', en: 'Crimson', fr: 'Vermillon' },
  { hex: '#F5EFE2', vi: 'Trắng phấn', en: 'Chalk White', fr: 'Blanc' },
  { hex: '#1B181A', vi: 'Đen mực', en: 'Ink Black', fr: 'Noir' },
  { hex: '#1E5A78', vi: 'Xanh lam', en: 'Teal Blue', fr: 'Bleu' },
  { hex: '#D8A338', vi: 'Vàng kim', en: 'Imperial Gold', fr: 'Or' },
  { hex: '#2A6F4E', vi: 'Xanh lục', en: 'Jade Green', fr: 'Vert' },
  { hex: '#D95B26', vi: 'Cam hỏa', en: 'Flame Orange', fr: 'Orange' },
  { hex: '#5C2A52', vi: 'Tím trầm', en: 'Deep Plum', fr: 'Prune' }
];

const STUDIO_SHAPES = [
  { id: 'round', vi: 'Mặt Tròn Võ Tướng', en: 'Round General', fr: 'Rond Guerrier', path: 'M250,48 C375,48 430,148 424,295 C418,430 348,542 250,552 C152,542 82,430 76,295 C70,148 125,48 250,48 Z' },
  { id: 'oval', vi: 'Mặt Trái Xoan Văn Quan', en: 'Oval Scholar', fr: 'Ovale Lettré', path: 'M250,44 C354,44 404,142 396,290 C388,435 326,548 250,556 C174,548 112,435 104,290 C96,142 146,44 250,44 Z' },
  { id: 'angular', vi: 'Mặt Góc Cạnh Uy Nghi', en: 'Angular Fierce', fr: 'Anguleux Fier', path: 'M250,46 L388,108 L422,272 L378,448 L250,554 L122,448 L78,272 L112,108 Z' }
];

const STUDIO_PATTERNS = [
  { id: 'minimal', vi: 'Cổ điển tối giản', en: 'Minimal Classic', fr: 'Classique' },
  { id: 'cloud', vi: 'Mày xếch & Vân trán', en: 'Cloud & Brows', fr: 'Nuages & Sourcils' },
  { id: 'flame', vi: 'Hỏa văn đối xứng', en: 'Symmetrical Flame', fr: 'Flammes' },
  { id: 'general', vi: 'Tướng quân uy dũng', en: 'Warrior Crest', fr: 'Blason Guerrier' }
];

const STUDIO_REGIONS = [
  { id: 'forehead', vi: 'Trán', en: 'Forehead', fr: 'Front' },
  { id: 'eyes', vi: 'Mắt', en: 'Eyes', fr: 'Yeux' },
  { id: 'cheeks', vi: 'Má', en: 'Cheeks', fr: 'Joues' },
  { id: 'nose', vi: 'Mũi', en: 'Nose', fr: 'Nez' },
  { id: 'mouth', vi: 'Miệng', en: 'Mouth', fr: 'Bouche' },
  { id: 'chin', vi: 'Cằm', en: 'Chin', fr: 'Menton' }
];

const DEFAULT_REGIONS = {
  forehead: '#1E5A78',
  eyes: '#1B181A',
  cheeks: '#B81D24',
  nose: '#D8A338',
  mouth: '#B81D24',
  chin: '#F5EFE2'
};

let studioState = {
  shape: 'round',
  pattern: 'cloud',
  regions: { ...DEFAULT_REGIONS }
};
let studioSelectedColor = STUDIO_PALETTE[0].hex;
let studioSelectedRegion = 'forehead';
let studioHistory = [JSON.parse(JSON.stringify(studioState))];
let studioHistoryIdx = 0;

function pushStudioHistory() {
  studioHistory = studioHistory.slice(0, studioHistoryIdx + 1);
  studioHistory.push(JSON.parse(JSON.stringify(studioState)));
  if (studioHistory.length > 40) studioHistory.shift();
  studioHistoryIdx = studioHistory.length - 1;
  syncStudioHistoryButtons();
}

function syncStudioHistoryButtons() {
  const undoBtn = $('#studioUndoBtn');
  const redoBtn = $('#studioRedoBtn');
  if (undoBtn) undoBtn.disabled = studioHistoryIdx <= 0;
  if (redoBtn) redoBtn.disabled = studioHistoryIdx >= studioHistory.length - 1;
}

function patternOverlaySVG(patternId) {
  if (patternId === 'minimal') return '';
  if (patternId === 'cloud') {
    return `<g fill="none" stroke="#D8A338" stroke-width="5" stroke-linecap="round">
      <path d="M250,74 L250,152"/>
      <path d="M214,132 C192,108 164,118 172,140 C178,155 202,152 204,138"/>
      <path d="M286,132 C308,108 336,118 328,140 C322,155 298,152 296,138"/>
      <path d="M112,188 Q168,148 228,186"/>
      <path d="M388,188 Q332,148 272,186"/>
    </g>`;
  }
  if (patternId === 'flame') {
    return `<g fill="none" stroke="#F0D69A" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M250,64 C230,104 238,136 250,164 C262,136 270,104 250,64 Z" fill="#D95B26" fill-opacity="0.72"/>
      <path d="M132,152 C154,126 184,138 194,174"/>
      <path d="M368,152 C346,126 316,138 306,174"/>
      <path d="M118,324 C146,358 176,348 188,376"/>
      <path d="M382,324 C354,358 324,348 312,376"/>
    </g>`;
  }
  return `<g fill="none" stroke="#D8A338" stroke-width="5" stroke-linecap="round">
    <path d="M250,66 L264,114 L250,158 L236,114 Z" fill="#D8A338" fill-opacity="0.32"/>
    <path d="M108,176 Q170,128 232,184" stroke="#1B181A" stroke-width="8"/>
    <path d="M392,176 Q330,128 268,184" stroke="#1B181A" stroke-width="8"/>
    <path d="M108,176 Q170,128 232,184" stroke="#F0D69A" stroke-width="2.5"/>
    <path d="M392,176 Q330,128 268,184" stroke="#F0D69A" stroke-width="2.5"/>
    <path d="M174,458 Q250,492 326,458" stroke="#1B181A" stroke-width="6"/>
  </g>`;
}

function buildMaskSVGString() {
  const shapeObj = STUDIO_SHAPES.find(s => s.id === studioState.shape) || STUDIO_SHAPES[0];
  const r = studioState.regions;
  const sel = id => (studioSelectedRegion === id ? ' is-selected' : '');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" role="img" aria-label="Mặt nạ Hát Bội tự thiết kế">
    <defs>
      <clipPath id="faceClip"><path d="${shapeObj.path}"/></clipPath>
    </defs>
    <path d="${shapeObj.path}" fill="#F5EFE2" stroke="#1B181A" stroke-width="6"/>
    <g clip-path="url(#faceClip)">
      <!-- Trán (Forehead) -->
      <path class="mask-region${sel('forehead')}" data-region="forehead" d="M60,30 L440,30 L440,185 Q250,165 60,185 Z" fill="${r.forehead}" stroke="#1B181A" stroke-width="3"/>
      <!-- Má (Cheeks) -->
      <path class="mask-region${sel('cheeks')}" data-region="cheeks" d="M60,185 Q250,165 440,185 L440,425 Q250,385 60,425 Z" fill="${r.cheeks}" stroke="#1B181A" stroke-width="3"/>
      <!-- Cằm (Chin) -->
      <path class="mask-region${sel('chin')}" data-region="chin" d="M60,425 Q250,385 440,425 L440,570 L60,570 Z" fill="${r.chin}" stroke="#1B181A" stroke-width="3"/>
      <!-- Mắt (Eyes) -->
      <g class="mask-region${sel('eyes')}" data-region="eyes" fill="${r.eyes}" stroke="#1B181A" stroke-width="3">
        <path d="M104,218 Q162,178 218,216 Q188,256 116,248 Z"/>
        <path d="M396,218 Q338,178 282,216 Q312,256 384,248 Z"/>
      </g>
      <!-- Mũi (Nose) -->
      <path class="mask-region${sel('nose')}" data-region="nose" d="M250,182 L276,292 Q250,318 224,292 Z" fill="${r.nose}" stroke="#1B181A" stroke-width="3.5" stroke-linejoin="round"/>
      <!-- Miệng (Mouth) -->
      <path class="mask-region${sel('mouth')}" data-region="mouth" d="M188,368 Q250,342 312,368 Q284,412 250,404 Q216,412 188,368 Z" fill="${r.mouth}" stroke="#1B181A" stroke-width="3.5" stroke-linejoin="round"/>
      ${patternOverlaySVG(studioState.pattern)}
      <!-- Con mắt trắng đặc trưng Hát Bội -->
      <g pointer-events="none">
        <path d="M132,226 Q164,212 198,226 Q164,240 132,226 Z" fill="#FFFDF8" stroke="#1B181A" stroke-width="2.5"/>
        <path d="M368,226 Q336,212 302,226 Q336,240 368,226 Z" fill="#FFFDF8" stroke="#1B181A" stroke-width="2.5"/>
      </g>
    </g>
    <path d="${shapeObj.path}" fill="none" stroke="#D8A338" stroke-width="4" pointer-events="none"/>
  </svg>`;
}

function updateStudioRegionStatus() {
  const labelEl = $('#studioRegionLabel');
  if (!labelEl) return;
  const reg = STUDIO_REGIONS.find(r => r.id === studioSelectedRegion) || STUDIO_REGIONS[0];
  const regName = reg[currentLang] || reg.vi;
  const prefix = currentLang === 'en' ? 'Active region:' : (currentLang === 'fr' ? 'Zone active :' : 'Đang chọn vùng:');
  labelEl.innerHTML = `${escapeHTML(prefix)} <strong>${escapeHTML(regName)}</strong>`;
}

function renderStudioCanvas() {
  const stage = $('#studioSvgStage');
  if (!stage) return;
  stage.innerHTML = buildMaskSVGString();
  $$('.mask-region', stage).forEach(el => {
    el.addEventListener('click', () => {
      const regionId = el.dataset.region;
      if (!regionId) return;
      studioSelectedRegion = regionId;
      if (studioState.regions[regionId] !== studioSelectedColor) {
        studioState.regions[regionId] = studioSelectedColor;
        pushStudioHistory();
      }
      renderStudioCanvas();
      renderStudioControls();
    });
  });
  updateStudioRegionStatus();
}

function renderStudioControls() {
  const shapeWrap = $('#shapeSelector');
  const patternWrap = $('#patternSelector');
  const regionWrap = $('#regionSelector');
  const paletteWrap = $('#paletteGrid');

  if (shapeWrap) {
    shapeWrap.innerHTML = STUDIO_SHAPES.map(s => `<button class="studio-pill${studioState.shape === s.id ? ' is-active' : ''}" type="button" data-shape="${s.id}">${escapeHTML(s[currentLang] || s.vi)}</button>`).join('');
    $$('.studio-pill', shapeWrap).forEach(btn => btn.addEventListener('click', () => {
      if (studioState.shape === btn.dataset.shape) return;
      studioState.shape = btn.dataset.shape;
      pushStudioHistory();
      renderStudioCanvas();
      renderStudioControls();
    }));
  }

  if (patternWrap) {
    patternWrap.innerHTML = STUDIO_PATTERNS.map(p => `<button class="studio-pill${studioState.pattern === p.id ? ' is-active' : ''}" type="button" data-pattern="${p.id}">${escapeHTML(p[currentLang] || p.vi)}</button>`).join('');
    $$('.studio-pill', patternWrap).forEach(btn => btn.addEventListener('click', () => {
      if (studioState.pattern === btn.dataset.pattern) return;
      studioState.pattern = btn.dataset.pattern;
      pushStudioHistory();
      renderStudioCanvas();
      renderStudioControls();
    }));
  }

  if (regionWrap) {
    regionWrap.innerHTML = STUDIO_REGIONS.map(r => `<button class="studio-pill${studioSelectedRegion === r.id ? ' is-active' : ''}" type="button" data-region-btn="${r.id}">${escapeHTML(r[currentLang] || r.vi)}</button>`).join('');
    $$('.studio-pill', regionWrap).forEach(btn => btn.addEventListener('click', () => {
      studioSelectedRegion = btn.dataset.regionBtn;
      renderStudioCanvas();
      renderStudioControls();
    }));
  }

  if (paletteWrap) {
    paletteWrap.innerHTML = STUDIO_PALETTE.map(c => `<button class="swatch-btn${studioSelectedColor === c.hex ? ' is-active' : ''}" type="button" data-color="${c.hex}"><span class="swatch-color" style="background:${c.hex}"></span><span>${escapeHTML(c[currentLang] || c.vi)}</span></button>`).join('');
    $$('.swatch-btn', paletteWrap).forEach(btn => btn.addEventListener('click', () => {
      studioSelectedColor = btn.dataset.color;
      studioState.regions[studioSelectedRegion] = studioSelectedColor;
      pushStudioHistory();
      renderStudioCanvas();
      renderStudioControls();
    }));
  }

  updateStudioRegionStatus();
  syncStudioHistoryButtons();
}

$('#studioUndoBtn')?.addEventListener('click', () => {
  if (studioHistoryIdx <= 0) return;
  studioHistoryIdx -= 1;
  studioState = JSON.parse(JSON.stringify(studioHistory[studioHistoryIdx]));
  renderStudioCanvas();
  renderStudioControls();
});

$('#studioRedoBtn')?.addEventListener('click', () => {
  if (studioHistoryIdx >= studioHistory.length - 1) return;
  studioHistoryIdx += 1;
  studioState = JSON.parse(JSON.stringify(studioHistory[studioHistoryIdx]));
  renderStudioCanvas();
  renderStudioControls();
});

$('#studioResetBtn')?.addEventListener('click', () => {
  studioState = { shape: 'round', pattern: 'cloud', regions: { ...DEFAULT_REGIONS } };
  pushStudioHistory();
  renderStudioCanvas();
  renderStudioControls();
});

$('#studioExportBtn')?.addEventListener('click', () => {
  const svgMarkup = buildMaskSVGString().replace(/is-selected/g, '');
  const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1200;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(500, 480, 60, 500, 540, 620);
    grad.addColorStop(0, '#4d141d');
    grad.addColorStop(1, '#140508');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(216, 163, 56, 0.55)';
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

    ctx.drawImage(img, 100, 60, 800, 960);

    ctx.fillStyle = '#e6c584';
    ctx.font = '600 28px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('SAU LỚP PHẤN MÀU · HÁT BỘI VIỆT NAM', 500, 1110);
    ctx.fillStyle = '#cbb086';
    ctx.font = '18px Arial, sans-serif';
    ctx.fillText('Xưởng vẽ mặt tương tác', 500, 1146);

    URL.revokeObjectURL(url);
    const link = document.createElement('a');
    link.download = 'hat-boi-mask.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  img.src = url;
});

renderStudioCanvas();
renderStudioControls();
