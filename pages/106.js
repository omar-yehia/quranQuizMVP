const mainSuraId = 4;
const nearbySurasNames = {
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
};
const choicesObjects = {
    "104": "انا اوحينا اليك كما اوحينا",
    "105": "يااهل الكتاب لا تغلوا في",
    "107": "حرمت عليكم الميته والدم ولحم",
    "108": "ياايها الذين امنوا اذا قمتم",
};
const ayas = [{"aya_id": 669, "coordinates": [[84, 89, 322, 34], [118, 89, 322, 34], [153, 89, 322, 34], [187, 89, 322, 34], [221, 89, 322, 34]], "aya_moshaf": "يَسۡتَفۡتُونَكَ قُلِ ٱللَّهُ يُفۡتِيكُمۡ فِي ٱلۡكَلَٰلَةِۚ إِنِ ٱمۡرُؤٌاْ هَلَكَ لَيۡسَ لَهُۥ وَلَدٞ وَلَهُۥٓ أُخۡتٞ فَلَهَا نِصۡفُ مَا تَرَكَۚ وَهُوَ يَرِثُهَآ إِن لَّمۡ يَكُن لَّهَا وَلَدٞۚ فَإِن كَانَتَا ٱثۡنَتَيۡنِ فَلَهُمَا ٱلثُّلُثَانِ مِمَّا تَرَكَۚ وَإِن كَانُوٓاْ إِخۡوَةٗ رِّجَالٗا وَنِسَآءٗ فَلِلذَّكَرِ مِثۡلُ حَظِّ ٱلۡأُنثَيَيۡنِۗ يُبَيِّنُ ٱللَّهُ لَكُمۡ أَن تَضِلُّواْۗ وَٱللَّهُ بِكُلِّ شَيۡءٍ عَلِيمُۢ "}, {"aya_id": 670, "coordinates": [[324, 89, 322, 34], [359, 89, 322, 34], [393, 316, 96, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ أَوۡفُواْ بِٱلۡعُقُودِۚ أُحِلَّتۡ لَكُم بَهِيمَةُ ٱلۡأَنۡعَٰمِ إِلَّا مَا يُتۡلَىٰ عَلَيۡكُمۡ غَيۡرَ مُحِلِّي ٱلصَّيۡدِ وَأَنتُمۡ حُرُمٌۗ إِنَّ ٱللَّهَ يَحۡكُمُ مَا يُرِيدُ "}, {"aya_id": 671, "coordinates": [[393, 89, 227, 34], [427, 89, 322, 34], [462, 89, 322, 34], [496, 89, 322, 34], [530, 89, 322, 34], [565, 89, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تُحِلُّواْ شَعَٰٓئِرَ ٱللَّهِ وَلَا ٱلشَّهۡرَ ٱلۡحَرَامَ وَلَا ٱلۡهَدۡيَ وَلَا ٱلۡقَلَٰٓئِدَ وَلَآ ءَآمِّينَ ٱلۡبَيۡتَ ٱلۡحَرَامَ يَبۡتَغُونَ فَضۡلٗا مِّن رَّبِّهِمۡ وَرِضۡوَٰنٗاۚ وَإِذَا حَلَلۡتُمۡ فَٱصۡطَادُواْۚ وَلَا يَجۡرِمَنَّكُمۡ شَنَـَٔانُ قَوۡمٍ أَن صَدُّوكُمۡ عَنِ ٱلۡمَسۡجِدِ ٱلۡحَرَامِ أَن تَعۡتَدُواْۘ وَتَعَاوَنُواْ عَلَى ٱلۡبِرِّ وَٱلتَّقۡوَىٰۖ وَلَا تَعَاوَنُواْ عَلَى ٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِۚ وَٱتَّقُواْ ٱللَّهَۖ إِنَّ ٱللَّهَ شَدِيدُ ٱلۡعِقَابِ "}]