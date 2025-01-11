const nearbySurasNames = {
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
};
const choicesObjects = {
    "101": "الذين يتربصون بكم فان كان",
    "102": "لا يحب الله الجهر بالسوء",
    "104": "انا اوحينا اليك كما اوحينا",
    "105": "يااهل الكتاب لا تغلوا في",
};
const ayas = [{"aya_id": 648, "coordinates": [[87, 46, 322, 34], [121, 46, 322, 34], [156, 216, 153, 34]], "aya_moshaf": "فَبِمَا نَقۡضِهِم مِّيثَٰقَهُمۡ وَكُفۡرِهِم بِـَٔايَٰتِ ٱللَّهِ وَقَتۡلِهِمُ ٱلۡأَنۢبِيَآءَ بِغَيۡرِ حَقّٖ وَقَوۡلِهِمۡ قُلُوبُنَا غُلۡفُۢۚ بَلۡ طَبَعَ ٱللَّهُ عَلَيۡهَا بِكُفۡرِهِمۡ فَلَا يُؤۡمِنُونَ إِلَّا قَلِيلٗا "}, {"aya_id": 649, "coordinates": [[156, 46, 170, 34], [190, 270, 99, 34]], "aya_moshaf": "وَبِكُفۡرِهِمۡ وَقَوۡلِهِمۡ عَلَىٰ مَرۡيَمَ بُهۡتَٰنًا عَظِيمٗا "}, {"aya_id": 650, "coordinates": [[190, 46, 224, 34], [224, 46, 322, 34], [259, 46, 322, 34], [293, 262, 107, 34]], "aya_moshaf": "وَقَوۡلِهِمۡ إِنَّا قَتَلۡنَا ٱلۡمَسِيحَ عِيسَى ٱبۡنَ مَرۡيَمَ رَسُولَ ٱللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمۡۚ وَإِنَّ ٱلَّذِينَ ٱخۡتَلَفُواْ فِيهِ لَفِي شَكّٖ مِّنۡهُۚ مَا لَهُم بِهِۦ مِنۡ عِلۡمٍ إِلَّا ٱتِّبَاعَ ٱلظَّنِّۚ وَمَا قَتَلُوهُ يَقِينَۢا "}, {"aya_id": 651, "coordinates": [[293, 46, 216, 34], [327, 340, 29, 34]], "aya_moshaf": "بَل رَّفَعَهُ ٱللَّهُ إِلَيۡهِۚ وَكَانَ ٱللَّهُ عَزِيزًا حَكِيمٗا "}, {"aya_id": 652, "coordinates": [[327, 46, 294, 34], [362, 190, 179, 34]], "aya_moshaf": "وَإِن مِّنۡ أَهۡلِ ٱلۡكِتَٰبِ إِلَّا لَيُؤۡمِنَنَّ بِهِۦ قَبۡلَ مَوۡتِهِۦۖ وَيَوۡمَ ٱلۡقِيَٰمَةِ يَكُونُ عَلَيۡهِمۡ شَهِيدٗا "}, {"aya_id": 653, "coordinates": [[362, 46, 144, 34], [396, 46, 322, 34], [430, 315, 54, 34]], "aya_moshaf": "فَبِظُلۡمٖ مِّنَ ٱلَّذِينَ هَادُواْ حَرَّمۡنَا عَلَيۡهِمۡ طَيِّبَٰتٍ أُحِلَّتۡ لَهُمۡ وَبِصَدِّهِمۡ عَن سَبِيلِ ٱللَّهِ كَثِيرٗا "}, {"aya_id": 654, "coordinates": [[430, 46, 269, 34], [465, 93, 276, 34]], "aya_moshaf": "وَأَخۡذِهِمُ ٱلرِّبَوٰاْ وَقَدۡ نُهُواْ عَنۡهُ وَأَكۡلِهِمۡ أَمۡوَٰلَ ٱلنَّاسِ بِٱلۡبَٰطِلِۚ وَأَعۡتَدۡنَا لِلۡكَٰفِرِينَ مِنۡهُمۡ عَذَابًا أَلِيمٗا "}, {"aya_id": 655, "coordinates": [[465, 46, 47, 34], [499, 46, 322, 34], [533, 46, 322, 34], [568, 46, 322, 34]], "aya_moshaf": "لَّٰكِنِ ٱلرَّٰسِخُونَ فِي ٱلۡعِلۡمِ مِنۡهُمۡ وَٱلۡمُؤۡمِنُونَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَۚ وَٱلۡمُقِيمِينَ ٱلصَّلَوٰةَۚ وَٱلۡمُؤۡتُونَ ٱلزَّكَوٰةَ وَٱلۡمُؤۡمِنُونَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِ أُوْلَٰٓئِكَ سَنُؤۡتِيهِمۡ أَجۡرًا عَظِيمًا "}]
const ayasRanges = [{"ayas_ids_range": [648, 655], "sura_id": 4}];
