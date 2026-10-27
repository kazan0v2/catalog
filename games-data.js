// بيانات ألعاب PS4 - تم التحديث من لوحة إدارة الألعاب
const GAMES = [
  {
    "id": 1,
    "title": "Ghost of Tsushima Director's Cut",
    "cover": "https://j.top4top.io/p_3938p8jcr1.jpg",
    "badge": "مترجمة",
    "description": "لعبة مغامرات وعالم مفتوح، بتعيش فيها قصة محارب ساموراي بيدافع عن جزيرته ضد الغزو. فيها قتال بالسيوف واستكشاف وعالم جميل",
    "videos": [
      "https://youtu.be/MamonBeCaAQ?si=MgeFfwONMRlnX7zR"
    ],
    "images": [
      "https://e.top4top.io/p_3937ub8zl1.jpg",
      "https://b.top4top.io/p_3937wz3bf1.jpg",
      "https://c.top4top.io/p_3937laeew2.jpg",
      "https://d.top4top.io/p_39371orf23.jpg",
      "https://i.top4top.io/p_3937ce2tb1.jpg",
      "https://j.top4top.io/p_3937bukel2.jpg",
      "https://k.top4top.io/p_3937sgh1f3.jpg",
      "https://l.top4top.io/p_3937tw0ri4.jpg"
    ],
    "highlights": [
      "جديدة",
      "مميزة"
    ],
    "genre": "أكشن – مغامرات – عالم مفتوح – ساموراي",
    "players": "1",
    "size": "49GB",
    "online": "بدون انترنت"
  },
  {
    "id": 2,
    "title": "It Takes Two",
    "cover": "https://d.top4top.io/p_390134w3c2.jpg",
    "badge": "مترجمة",
    "description": "مغامرة تعاونية ممتعة لشخصين، بتلعب فيها بشخصيتين لازم يساعدوا بعض عشان يتجاوزوا التحديات ويحلوا الألغاز. كل مرحلة فيها أفكار جديدة ومواقف مضحكة ومفاجآت، ودي من أجمل الألعاب اللي ممكن تلعبها مع صاحبك أو حد من عيلتك.",
    "videos": [
      "https://youtu.be/GAWHzGNcTEw?si=UIhh9ornX7GtZu68"
    ],
    "images": [
      "https://g.top4top.io/p_3937e93fo1.jpg",
      "https://h.top4top.io/p_3937o744c2.jpg",
      "https://i.top4top.io/p_3937fvsum3.jpg",
      "https://j.top4top.io/p_3937oh37p4.jpg",
      "https://k.top4top.io/p_3937xgqrz5.jpg",
      "https://l.top4top.io/p_3937thbxu6.jpg",
      "https://a.top4top.io/p_3937cwzig7.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "مغامرات – ألغاز – تعاونية لشخصين",
    "players": "2",
    "size": "32GB",
    "online": "بدون انترنت"
  },
  {
    "id": 3,
    "title": "Need.for.Speed",
    "cover": "https://e.top4top.io/p_3901q34hn3.jpg",
    "description": "لو بتحب السرعة والعربيات، هتعيش أجواء سباقات شوارع مليانة حماس ومطاردات مع الشرطة. اختار عربيتك، وعدّل شكلها وأداءها على مزاجك، ونافس في سباقات بالنهار والليل وسط مدينة مفتوحة مليانة تحديات.",
    "videos": [
      "https://youtu.be/YLMAvMZlCMY?si=ay2kgT6mCSSANY6i"
    ],
    "images": [
      "https://h.top4top.io/p_3937zx1ik1.jpg",
      "https://i.top4top.io/p_3937ei82d2.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "سباقات – سيارات – عالم مفتوح",
    "players": "1",
    "size": "13GB",
    "online": "بدون انترنت"
  },
  {
    "id": 4,
    "title": "Road Redemption",
    "cover": "https://k.top4top.io/p_39389cbv02.jpg",
    "description": "سباقات موتوسيكلات مليانة أكشن وقتال على الطريق، مش مجرد سباق عادي. هتسابق منافسين شرسين وتستخدم أسلحة مختلفة عشان تتغلب عليهم، وتطوّر شخصيتك وموتوسيكلاتك مع كل تحدي جديد.",
    "videos": [
      "https://youtu.be/ZDquuLDnRv4?si=wEQd1cqwVU7sg810"
    ],
    "images": [
      "https://h.top4top.io/p_39378n5ac1.jpg",
      "https://i.top4top.io/p_3937op7zr2.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "سباقات – دراجات نارية – قتال",
    "players": "1-4",
    "size": "6GB",
    "online": "بدون انترنت"
  },
  {
    "id": 5,
    "title": "Rocket League",
    "cover": "https://i.top4top.io/p_3901pyskn1.jpg",
    "description": "تخيل تلعب كورة قدم، لكن بدل اللاعبين فيه عربيات سريعة بتطير وتقفز في الهوا! لعبة رياضية ممتعة بتجمع بين القيادة والمهارة والمنافسة، وتقدر تتحدى أصحابك في ماتشات سريعة مليانة أهداف وحركات مجنونة.",
    "videos": [
      "https://youtu.be/NC82dWrFqCE?si=6SnN81ubSCNnT1YJ"
    ],
    "images": [
      "https://e.top4top.io/p_3937tn5lr1.jpg",
      "https://f.top4top.io/p_39376l4482.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "رياضة – سيارات – كرة قدم – جماعية",
    "players": "1-4",
    "size": "32GB",
    "online": "بدون انترنت"
  },
  {
    "id": 6,
    "title": "Stray",
    "cover": "https://j.top4top.io/p_39015isx62.jpg",
    "description": "مغامرة مختلفة بتتحكم فيها في قطة ضايعة وسط مدينة غامضة مليانة روبوتات وأسرار. هتستكشف الشوارع والأسطح، وتحل الألغاز، وتحاول تلاقي طريق الرجوع لعالمك. تجربة هادية ومميزة بقصة جميلة وتفاصيل بصرية رائعة.",
    "videos": [
      "https://youtu.be/Rda52S3Jah8?si=SdKkkWmgfJc5nEJ-"
    ],
    "images": [
      "https://a.top4top.io/p_39376dyuo1.jpg",
      "https://b.top4top.io/p_39376b2b22.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "مغامرات – استكشاف – ألغاز",
    "players": "1",
    "size": "7GB",
    "online": "بدون انترنت"
  },
  {
    "id": 7,
    "title": "UNCHARTED THE LOST LEGACY",
    "cover": "https://k.top4top.io/p_3901u7n1j3.png",
    "description": "مغامرة سينمائية مليانة أكشن واستكشاف، بتسافر فيها وسط آثار ومعابد قديمة بحثًا عن كنز أسطوري. هتواجه أعداء، وتحل ألغاز، وتدخل مطاردات ومواقف خطيرة، وسط مناظر طبيعية رائعة وأحداث مشوقة من البداية للنهاية.",
    "videos": [
      "https://youtu.be/i8qzBkHjk_0?si=YUjv7EfmF3xcRYL2"
    ],
    "images": [
      "https://k.top4top.io/p_3937osv3q1.jpg",
      "https://l.top4top.io/p_3937h9eaz2.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "أكشن – مغامرات – استكشاف – قصة",
    "players": "1",
    "size": "45GB",
    "online": "بدون انترنت"
  },
  {
    "id": 8,
    "title": "World.War-Z",
    "cover": "https://l.top4top.io/p_39010h2i64.jpg",
    "description": "استعد لمواجهة جيوش ضخمة من الزومبي في معارك مليانة إثارة وتوتر. اختار أسلحتك وتعاون مع فريقك عشان تنجو من الهجمات وتكمل المهمات في أماكن مختلفة حول العالم. لعبة أكشن سريعة لمحبي الزومبي والتحديات الجماعية.",
    "videos": [
      "https://youtu.be/d3ciw_v7MF0?si=HhVKbfQLmCJMB0pu"
    ],
    "images": [
      "https://e.top4top.io/p_3937kqcbx1.jpg",
      "https://f.top4top.io/p_3937t50kj2.png"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "أكشن – تصويب – زومبي – تعاونية",
    "players": "1",
    "size": "45GB",
    "online": "بدون انترنت"
  },
  {
    "id": 9,
    "title": "wwe 25",
    "cover": "https://l.top4top.io/p_3938od0pe3.jpg",
    "badge": "مترجمة",
    "description": "ادخل عالم المصارعة الحرة وعيش أجواء WWE مع مجموعة كبيرة من النجوم والمصارعين. نفّذ الضربات والحركات القاضية، ونافس على البطولات، والعب ضد أصحابك في مواجهات مليانة حماس ومتعة داخل الحلبة.",
    "videos": [
      "https://youtu.be/vvx8Vj2hk0k?si=h-vDrAJiLDgW23aS"
    ],
    "images": [
      "https://e.top4top.io/p_3937bl0y81.jpg",
      "https://f.top4top.io/p_3937hq7h32.jpg"
    ],
    "highlights": [
      "مناسبة لشخصين"
    ],
    "genre": "مصارعة – رياضة – قتال",
    "players": "1-4",
    "size": "50GB",
    "online": "بدون انترنت"
  },
  {
    "id": 10,
    "title": "بيس 19",
    "cover": "https://e.top4top.io/p_3901ialkg2.jpg",
    "badge": "مترجمة",
    "description": "عيش متعة كرة القدم بأسلوب لعب سلس وحركات واقعية للاعبين، وادخل مباريات مليانة منافسة وحماس. اختار فريقك المفضل، وحط خطتك، واستمتع بالتمريرات والتسديدات والمراوغات في تجربة كروية مناسبة لجلسات اللعب مع أصحابك.",
    "videos": [
      "https://youtu.be/ZJ6jM9GNK2w?si=pX3yoEW63RRvxuTd"
    ],
    "images": [
      "https://g.top4top.io/p_3937wk0qa1.jpg",
      "https://h.top4top.io/p_3937ztjri2.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "كرة قدم – رياضة",
    "players": "1-4",
    "size": "28GB",
    "online": "بدون انترنت"
  },
  {
    "id": 11,
    "title": "بيس 26",
    "cover": "https://f.top4top.io/p_3901wybzj3.jpg",
    "badge": "مترجمة",
    "description": "استمتع بأجواء كرة القدم في نسخة بيس 2026 الموجودة بالكتالوج، وخوض مباريات قوية مع أصحابك. اختار فريقك، وظبط تشكيلتك، ونافس في ماتشات مليانة مهارات وأهداف وحماس لحد آخر دقيقة.",
    "videos": [
      "https://youtu.be/q565g_CVfhw?si=3OiAm-Ny_TCIlMNC&t=15"
    ],
    "images": [],
    "highlights": [
      "الأكثر طلبًا"
    ],
    "genre": "كرة قدم – رياضة",
    "players": "1-4",
    "size": "77GB",
    "online": "بدون انترنت"
  },
  {
    "id": 12,
    "title": "بيس 27",
    "cover": "https://a.top4top.io/p_3938jj0094.jpg",
    "badge": "مترجمة",
    "description": "منافسة كروية وحماس مستمر مع نسخة بيس 2027 الموجودة بالكتالوج. اختار فريقك المفضل، وجهّز خطتك، وادخل تحديات ومباريات ضد أصحابك عشان تثبت مين الأفضل في الملعب.",
    "videos": [
      "https://youtu.be/Nn3VVL3kKI4?si=n6StcqQM9o-cC8A3&t=16"
    ],
    "images": [],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "كرة قدم – رياضة",
    "players": "1-4",
    "size": "51GB",
    "online": "بدون انترنت"
  },
  {
    "id": 13,
    "title": "تكن",
    "cover": "https://i.top4top.io/p_3901vluf61.jpg",
    "badge": "مترجمة",
    "description": "لعبة قتال ومواجهات مباشرة بتجمع شخصيات متنوعة، وكل شخصية ليها أسلوبها الخاص وحركاتها القوية. اتعلم الكومبوهات، ونفّذ الضربات المميزة، وتحدى أصحابك في جولات مليانة سرعة وتركيز وتنافس.",
    "videos": [
      "https://youtu.be/1V-_q3SKh5w?si=QGJx26FOK_OKMWDd"
    ],
    "images": [
      "https://e.top4top.io/p_3937l4mqf1.jpg",
      "https://f.top4top.io/p_39372huyr2.jpg"
    ],
    "highlights": [
      "مناسبة لشخصين"
    ],
    "genre": "قتال – فنون قتالية",
    "players": "1-2",
    "size": "60GB",
    "online": "بدون انترنت"
  },
  {
    "id": 14,
    "title": "جاتا",
    "cover": "https://b.top4top.io/p_3938he6qz5.jpg",
    "description": "ادخل عالم مفتوح ضخم مليان مغامرات ومهمات ومطاردات بالعربيات. عيش قصص ثلاث شخصيات مختلفة، واستكشف مدينة لوس سانتوس، وجرّب القيادة والأكشن والأنشطة المتنوعة في واحدة من أشهر ألعاب العالم المفتوح.",
    "videos": [
      "https://youtu.be/hBvMSP7cI-Q?si=KzBChjP0p1IH38NZ"
    ],
    "images": [
      "https://a.top4top.io/p_3937jgj0y5.jpg",
      "https://l.top4top.io/p_3937weue94.jpg",
      "https://k.top4top.io/p_3937lr3k13.jpg",
      "https://j.top4top.io/p_3937kf1zv2.jpg",
      "https://i.top4top.io/p_3937ullas1.jpg",
      "https://d.top4top.io/p_39377hq1s8.jpg",
      "https://b.top4top.io/p_3937xkj2j6.jpg",
      "https://c.top4top.io/p_393730pd17.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا"
    ],
    "genre": "أكشن – عالم مفتوح – سيارات – جريمة",
    "players": "1",
    "size": "42GB",
    "online": "بدون انترنت"
  },
  {
    "id": 15,
    "title": "سبايدر مان",
    "cover": "https://c.top4top.io/p_3938hfiex6.jpg",
    "badge": "مترجمة",
    "description": "عيش تجربة سبايدر مان الحقيقية وانت بتتأرجح بين ناطحات السحاب في نيويورك. واجه المجرمين والأشرار، واستخدم قدراتك الخارقة في القتال والتنقل، واستمتع بقصة مشوقة وعالم مفتوح مليان مهمات وتحديات.",
    "videos": [
      "https://youtu.be/oZXyrAfuHOo?si=MEjW4o6AjPDW2l3r"
    ],
    "images": [
      "https://k.top4top.io/p_3937lk4l64.jpg",
      "https://j.top4top.io/p_3937ik1zg3.jpg",
      "https://i.top4top.io/p_393739dm22.jpg",
      "https://h.top4top.io/p_3937pqfl81.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا"
    ],
    "genre": "أكشن – مغامرات – عالم مفتوح – أبطال خارقون",
    "players": "1",
    "size": "39GB",
    "online": "بدون انترنت"
  },
  {
    "id": 16,
    "title": "فيفا 26",
    "cover": "https://l.top4top.io/p_3901ikllu4.jpg",
    "badge": "مترجمة",
    "description": "استمتع بمنافسات كرة القدم مع نسخة فيفا 26 الموجودة بالكتالوج. اختار فريقك المفضل، ونظّم تشكيلتك، وادخل مباريات ضد أصحابك مليانة تسديدات ومراوغات وأهداف، وعيش أجواء المنافسة لحد صافرة النهاية.",
    "videos": [
      "https://youtu.be/F2Q4xrASt94?si=LQ4N33iww02v7owL"
    ],
    "images": [
      "https://g.top4top.io/p_3937zshju3.jpg",
      "https://f.top4top.io/p_3937bjtlo2.jpg",
      "https://e.top4top.io/p_3937nix081.jpg",
      "https://k.top4top.io/p_3937a36o36.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "كرة قدم – رياضة",
    "players": "1-4",
    "size": "75GB",
    "online": "بدون انترنت"
  },
  {
    "id": 17,
    "title": "فيفا 27",
    "cover": "https://e.top4top.io/p_39164zwdo1.jpg",
    "badge": "مترجمة",
    "description": "لو بتحب التحدي الكروي، استمتع بنسخة فيفا 27 الموجودة بالكتالوج. العب بفريقك المفضل، وجرّب الخطط المختلفة، وتحدى أصحابك في مباريات حماسية تحدد فيها مين ملك الملعب.",
    "videos": [
      "https://youtu.be/zEcmpr1Ssr8?si=lXqQGp6HeJknlnns"
    ],
    "images": [
      "https://b.top4top.io/p_39379pkkm1.jpg",
      "https://c.top4top.io/p_393790rt42.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "كرة قدم – رياضة",
    "players": "1-4",
    "size": "64GB",
    "online": "بدون انترنت"
  },
  {
    "id": 18,
    "title": "كراش",
    "cover": "https://f.top4top.io/p_3901n6ttk1.jpg",
    "badge": "مترجمة",
    "description": "مغامرات مليانة جري وقفز وتحديات مع شخصية كراش المحبوبة. عدّي العقبات، واجمع المكافآت، وواجه الأعداء في مراحل ملونة وممتعة، لكن خلي بالك لأن كل مرحلة محتاجة سرعة وتركيز وتوقيت مضبوط.",
    "videos": [
      "https://youtu.be/dr2BCMRk_xc?si=rQ1C19Ap7uFsAwwc"
    ],
    "images": [
      "https://i.top4top.io/p_3937y82g41.jpg",
      "https://j.top4top.io/p_3937pm8x32.jpg",
      "https://k.top4top.io/p_3937ru8lq3.jpg",
      "https://l.top4top.io/p_3937ar6zj4.jpg",
      "https://a.top4top.io/p_3937afc2z5.jpg",
      "https://b.top4top.io/p_39370h8cv6.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "منصات – مغامرات – تحديات",
    "players": "1-4",
    "size": "14GB",
    "online": "بدون انترنت"
  },
  {
    "id": 19,
    "title": "كولف ديوتي بلاك اوبس 3",
    "cover": "https://g.top4top.io/p_3901zq3kw2.jpg",
    "description": "ادخل معارك مستقبلية مليانة أكشن وأسلحة متطورة ومواجهات نارية. خوض مهمات قتالية مشوقة، وواجه الأعداء باستخدام قدرات وتقنيات مختلفة، واستمتع بأجواء الحرب السريعة اللي بتحتاج تركيز ورد فعل قوي.",
    "videos": [
      "https://youtu.be/qAUYNIDEJ6o?si=0gviHoknkT0Puyh2"
    ],
    "images": [
      "https://j.top4top.io/p_3937ii9c71.jpg",
      "https://k.top4top.io/p_3937seuxx2.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "تصويب – أكشن – حرب – زومبي",
    "players": "1-4",
    "size": "42GB",
    "online": "بدون انترنت"
  },
  {
    "id": 20,
    "title": "كولف ديوتي بلاك اوبس 4",
    "cover": "https://h.top4top.io/p_3901qd01c3.jpg",
    "description": "تجربة تصويب مليانة معارك سريعة ومنافسات قوية، مع شخصيات وأسلحة وأساليب قتال متنوعة. ادخل مواجهات جماعية، وجرّب طور الزومبي، واختبر مهاراتك في التصويب والتخطيط وسط أجواء أكشن مستمرة.",
    "videos": [
      "https://youtu.be/sH7nfJmPWek?si=8OEfqYJazPgop2A4"
    ],
    "images": [
      "https://g.top4top.io/p_3937vtwiw1.jpg",
      "https://h.top4top.io/p_3937z0d202.jpg",
      "https://i.top4top.io/p_39374hr123.jpg",
      "https://j.top4top.io/p_3937uhflw4.jpg",
      "https://k.top4top.io/p_3937000mi5.jpg",
      "https://a.top4top.io/p_3937a0dzr7.jpg",
      "https://b.top4top.io/p_3937qlu2p8.jpg"
    ],
    "highlights": [
      "مناسبة لشخصين"
    ],
    "genre": "تصويب – أكشن – جماعية – زومبي",
    "players": "1-4",
    "size": "88GB",
    "online": "بدون انترنت"
  },
  {
    "id": 21,
    "title": "مورتال كومبات",
    "cover": "https://i.top4top.io/p_39015vwej4.jpg",
    "description": "استعد لمواجهات قتالية قوية بين شخصيات أسطورية، كل واحدة ليها قدرات وحركات خاصة. نفّذ الكومبوهات والضربات القاضية، وتحدى أصحابك في جولات مليانة إثارة، واثبت مين الأقوى في ساحة القتال.",
    "videos": [
      "https://youtu.be/U_-tQDcslk8?si=J3Xbxk8wMCcyLiuu&t=134"
    ],
    "images": [
      "https://l.top4top.io/p_3937sxx9a1.jpg",
      "https://a.top4top.io/p_393741p442.jpg",
      "https://b.top4top.io/p_3937elg2m3.jpg",
      "https://c.top4top.io/p_3937268to4.jpg",
      "https://d.top4top.io/p_3937pss575.jpg",
      "https://e.top4top.io/p_3937ph6te6.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "قتال – فنون قتالية",
    "players": "1-2",
    "size": "42GB",
    "online": "بدون انترنت"
  },
  {
    "id": 22,
    "title": "Naruto.Shippuden.Ultimate.Ninja.Storm.4",
    "cover": "https://g.top4top.io/p_390620h8n1.jpg",
    "badge": "مترجمة",
    "description": "ادخل عالم ناروتو وعيش أشهر المعارك بين شخصيات الأنمي المحبوبة. استخدم تقنيات النينجا والهجمات الخاصة، وواجه خصومك في قتالات سريعة ومليانة مؤثرات بصرية، واستمتع بلحظات مميزة من قصة ناروتو شيبودن.",
    "videos": [
      "https://youtu.be/m7VNHLrERZY?si=B8elckuhIiKTegFY&t=311"
    ],
    "images": [
      "https://d.top4top.io/p_39373vtfv1.jpg",
      "https://e.top4top.io/p_3937d1vai2.jpg"
    ],
    "highlights": [
      "مناسبة لشخصين"
    ],
    "genre": "قتال – أنمي – أكشن",
    "players": "1-2",
    "size": "32GB",
    "online": "بدون انترنت"
  },
  {
    "id": 23,
    "title": "car mechanic simulator",
    "cover": "https://d.top4top.io/p_3938afmbk7.jpg",
    "badge": "مترجمة",
    "description": "لو بتحب العربيات والميكانيكا، اللعبة دي هتخليك تدير ورشتك بنفسك. استقبل العربيات، واكتشف الأعطال، وفكّ وركّب قطع الغيار، وصلّح المحركات، وطوّر ورشتك مع كل شغلانة جديدة في تجربة محاكاة مليانة تفاصيل.",
    "videos": [
      "https://youtu.be/LCTF8wKWFSU?si=9f6LUsxrBp4ZBQUi"
    ],
    "images": [
      "https://f.top4top.io/p_3937l82ha1.jpg",
      "https://g.top4top.io/p_39377spmk2.jpg"
    ],
    "genre": "محاكاة – سيارات – ميكانيكا",
    "players": "1",
    "size": "9GB",
    "online": "بدون انترنت"
  },
  {
    "id": 24,
    "title": "Dynamic Days Gone",
    "cover": "https://f.top4top.io/p_39060inhz1.jpg",
    "description": "مغامرة بقاء وعالم مفتوح بعد انتشار وباء حوّل أعداد ضخمة من البشر لمخلوقات خطيرة. هتلعب بشخصية راكب موتوسيكل بيحاول ينجو وسط عالم قاسي، وتواجه جحافل من المصابين، وتستكشف الأماكن المهجورة وتطور أسلحتك وموتوسيكلِك.",
    "videos": [
      "https://youtu.be/D3_EFHlDBFg?si=oiHe8XRpmTBoE9ek"
    ],
    "images": [
      "https://h.top4top.io/p_3937m4yd41.jpg",
      "https://i.top4top.io/p_39379c46n2.jpg",
      "https://j.top4top.io/p_3937301zu3.jpg",
      "https://k.top4top.io/p_3937aj3l34.jpg",
      "https://l.top4top.io/p_3937xox9b5.jpg"
    ],
    "genre": "أكشن – بقاء – زومبي – عالم مفتوح",
    "players": "1",
    "size": "36GB",
    "online": "بدون انترنت"
  },
  {
    "id": 25,
    "title": "Red.Dead.Redemption 1",
    "cover": "https://e.top4top.io/p_3938ibd4q8.jpg",
    "description": "عيش حياة الغرب الأمريكي القديم في مغامرة مليانة مطاردات ومعارك بالمسدسات وركوب الخيل. هتدخل قصة جون مارستون، الخارج عن القانون سابقًا، وتتنقل بين المدن والصحاري وتواجه عصابات خطيرة في عالم مفتوح مليان أحداث.",
    "videos": [
      "https://youtu.be/jbi2Hqmcyq8?si=_ApXneZHg5g20uDJ"
    ],
    "images": [
      "https://g.top4top.io/p_3937dlnm91.jpg",
      "https://h.top4top.io/p_39372hw9j2.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "أكشن – مغامرات – عالم مفتوح – غرب أمريكي",
    "players": "1",
    "size": "10GB",
    "online": "بدون انترنت"
  },
  {
    "id": 26,
    "title": "Red.Dead.Redemption 2",
    "cover": "https://g.top4top.io/p_3906hdln72.png",
    "description": "واحدة من أروع تجارب العالم المفتوح، بتعيش فيها حياة آرثر مورجان وسط عصابة في الغرب الأمريكي. استكشف الجبال والغابات والمدن، واركب الخيل، وادخل معارك ومطاردات، واستمتع بقصة قوية وعالم مليان تفاصيل واقعية.",
    "videos": [
      "https://youtu.be/ASAJfbLILg8?si=VDvC3TdemMdC2Hqb"
    ],
    "images": [
      "https://c.top4top.io/p_3937ciysp1.jpg",
      "https://d.top4top.io/p_3937v4prh2.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "أكشن – مغامرات – عالم مفتوح – غرب أمريكي",
    "players": "1",
    "size": "80GB",
    "online": "بدون انترنت"
  },
  {
    "id": 27,
    "title": "toy story 3",
    "cover": "https://j.top4top.io/p_39062fma91.jpg",
    "description": "انطلق في مغامرة ممتعة مع وودي وباز وشخصيات توي ستوري المحبوبة. استكشف الأماكن المختلفة، وحل الألغاز، واجمع العناصر، وعيش أجواء الفيلم في لعبة خفيفة ومسلية مناسبة للأطفال ومحبي عالم ديزني وبيكسار.",
    "videos": [
      "https://youtu.be/6h1vOAXufAI?si=XqeBlur2iF5OqwgX"
    ],
    "images": [
      "https://a.top4top.io/p_3937f62yn1.jpg",
      "https://b.top4top.io/p_3937oslc22.jpg"
    ],
    "genre": "مغامرات – منصات – عائلية",
    "players": "1",
    "size": "1GB",
    "online": "بدون انترنت"
  },
  {
    "id": 28,
    "title": "Neighbours Back From Hell",
    "cover": "https://a.top4top.io/p_3906o2s2j1.jpg",
    "badge": "مترجمة",
    "description": "لعبة كوميدية بتعتمد على الذكاء والمقالب، وهدفك إنك تعمل مقالب مضحكة لجارك من غير ما يمسكك. استخدم الأدوات الموجودة في البيت، وخطط لتحركاتك، واستخبى في الوقت المناسب عشان تنفذ أكبر عدد من المقالب وتعدّي المراحل.",
    "videos": [
      "https://youtu.be/2rAh4SkvOWM?si=c0bFc2BDMGEU1IQt"
    ],
    "images": [
      "https://g.top4top.io/p_3937cttzi1.jpg",
      "https://h.top4top.io/p_393733ojx2.jpg"
    ],
    "genre": "كوميديا – ألغاز – تخطيط",
    "players": "1",
    "size": "2GB",
    "online": "بدون انترنت"
  },
  {
    "id": 29,
    "title": "Assassin’s Creed IV - Black Flag",
    "cover": "https://l.top4top.io/p_3919sgdk31.jpg",
    "description": "عيش حياة القراصنة في عالم مفتوح وسط البحار والجزر الاستوائية. قُد سفينتك، وادخل معارك بحرية، واستكشف الجزر والكنوز، وخوض مغامرات البطل إدوارد كينواي في واحدة من أجمل تجارب القتال والاستكشاف البحري.",
    "videos": [
      "https://youtu.be/wIhHSDt03WM?si=96nhSaj73KmQCfU2"
    ],
    "images": [
      "https://h.top4top.io/p_3937hhd8f1.jpg",
      "https://i.top4top.io/p_39373hirq2.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "أكشن – مغامرات – عالم مفتوح – قراصنة",
    "players": "1",
    "size": "7GB",
    "online": "بدون انترنت"
  },
  {
    "id": 30,
    "title": "Assassins Creed Mirage",
    "cover": "https://a.top4top.io/p_3919l22br2.jpg",
    "description": "ارجع لأجواء بغداد القديمة في مغامرة مليانة أسرار وتخفي واغتيالات. العب بشخصية باسم، واتنقل فوق أسطح المباني وبين الأسواق والشوارع، ونفّذ مهماتك بذكاء وسرعة، واكتشف قصة مشوقة وسط عالم تاريخي مليان تفاصيل.",
    "videos": [
      "https://youtu.be/PPoU4EFeVEI?si=_r0Qw59zEVe4AwSN",
      "https://youtu.be/-JprUTktB3M?si=q7UOokLC1K7mgmVx"
    ],
    "images": [
      "https://b.top4top.io/p_3937h4c5u1.jpg",
      "https://c.top4top.io/p_3937syr952.jpg",
      "https://d.top4top.io/p_3937oi39c3.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "أكشن – مغامرات – تسلل – تاريخي",
    "players": "1",
    "size": "40GB",
    "online": "بدون انترنت"
  },
  {
    "id": 31,
    "title": "Assassin's Creed Origins",
    "cover": "https://b.top4top.io/p_3919qkysg3.jpg",
    "description": "سافر لزمن مصر القديمة وعيش مغامرة وسط الأهرامات والمعابد والصحاري والمدن التاريخية. العب بشخصية بايك، واكتشف أسرار قصة مليانة أحداث، وخوض معارك ضد الأعداء، واستكشف عالم مفتوح ضخم مستوحى من الحضارة المصرية.",
    "videos": [
      "https://youtu.be/L8CQnwqFhJ8?si=Hgw8k6V10jc_B3IR"
    ],
    "images": [
      "https://l.top4top.io/p_3937jvec91.jpg",
      "https://a.top4top.io/p_3937bz0e82.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "أكشن – مغامرات – عالم مفتوح – تاريخي",
    "players": "1",
    "size": "40GB",
    "online": "بدون انترنت"
  },
  {
    "id": 32,
    "title": "A Way Out",
    "cover": "https://i.top4top.io/p_3934gb2eb1.jpg",
    "badge": "مترجمة",
    "description": "مغامرة تعاونية لشخصين بتبدأ بمحاولة هروب جريئة من السجن، وبعدها بتتحول لرحلة مليانة مطاردات وأكشن ومواقف غير متوقعة. كل لاعب بيتحكم في شخصية مختلفة، ولازم تتعاونوا مع بعض عشان تتجاوزوا العقبات وتكملوا القصة للنهاية.",
    "videos": [
      "https://youtu.be/-r5fY05t_7g?si=l5yMHW8d6OcaxcAI"
    ],
    "images": [
      "https://i.top4top.io/p_3937zlooo1.jpg",
      "https://j.top4top.io/p_3937y04j12.jpg"
    ],
    "highlights": [
      "مناسبة لشخصين"
    ],
    "genre": "أكشن – مغامرات – تعاونية لشخصين – قصة",
    "players": "2",
    "size": "15GB",
    "online": "بدون انترنت"
  },
  {
    "id": 33,
    "title": "Fortnite",
    "cover": "https://k.top4top.io/p_3937x4rhs1.jpg",
    "description": "ادخل عالم Fortnite وعيش أجواء الباتل رويال المليانة أكشن ومغامرات. انزل ساحة المعركة، واجمع الأسلحة والمعدات، وابنِ دفاعاتك، وواجه المنافسين عشان تكون آخر لاعب صامد. لعبة مليانة تحديات ومفاجآت، تقدر تستمتع فيها بمواجهات حماسية لوحدك أو مع أصحابك.",
    "videos": [
      "https://youtu.be/NylPGoNlGvc?si=wJUaBPYWQEf_4NAP"
    ],
    "images": [
      "https://c.top4top.io/p_3937r972b1.jpg",
      "https://d.top4top.io/p_3937dq1s32.jpg"
    ],
    "highlights": [
      "مميزة"
    ],
    "genre": "باتل رويال – تصويب – بقاء – أونلاين",
    "players": "1-4",
    "size": "17GB",
    "online": "تحتاج نت"
  },
  {
    "id": 34,
    "title": "Truck Driver",
    "cover": "https://e.top4top.io/p_3939k1nsn1.jpg",
    "badge": "مترجمة",
    "description": "عيش تجربة قيادة الشاحنات العملاقة في عالم مليان بالطرق والتحديات! ابدأ مشوارك كسائق شاحنات محترف، واستلم مهام نقل البضائع وتوصيل الشحنات بين أماكن مختلفة، واتعلم إزاي تتحكم في شاحنتك وتتغلب على صعوبات الطريق. طوّر شاحنتك وحسّن أداءها، واكتشف متعة القيادة الواقعية في تجربة محاكاة مناسبة لكل عشاق الشاحنات والسواقة.",
    "videos": [
      "https://youtu.be/hXle0PedlCQ?si=QTcVpSYpW0QMSEba"
    ],
    "images": [
      "https://i.top4top.io/p_3939g1kwy1.jpg",
      "https://j.top4top.io/p_3939lmadu2.jpg"
    ],
    "highlights": [
      "جديدة"
    ],
    "genre": "محاكاة – قيادة شاحنات – نقل بضائع – عالم مفتوح",
    "players": "1",
    "size": "3GB",
    "online": "بدون نت"
  },
  {
    "id": 35,
    "title": "naruto x Boruto Ultimate",
    "cover": "https://a.top4top.io/p_395206soe1.jpg",
    "badge": "مترجمة",
    "description": "لعبة قتال وأكشن حماسية تجمع بين شخصيات أنمي ناروتو وبوروتو. وتضم أكبر عدد من الشخصيات القابلة للعب في سلسلة Ultimate Ninja STORM، بالإضافة إلى طور قصة مميز يغطي أبرز أحداث قصة ناروتو وساسكي وطور قصة خاص وجديد كلياً لـ بوروتو.",
    "videos": [
      "https://youtu.be/b7WhbaDuqkg?si=uBzn5Aft5nnBWJVt"
    ],
    "images": [
      "https://b.top4top.io/p_3952s2uwg2.jpg",
      "https://c.top4top.io/p_3952abbbz3.jpg",
      "https://d.top4top.io/p_3952z2qp84.jpg",
      "https://e.top4top.io/p_3952me7835.jpg"
    ],
    "highlights": [
      "الأكثر طلبًا",
      "مناسبة لشخصين"
    ],
    "genre": "أكشن / قتال / مغامرات",
    "players": "1-2",
    "size": "33GB",
    "online": "بدون نت"
  }
];
