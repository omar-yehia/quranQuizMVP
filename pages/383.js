const mainSuraId = 27;
const nearbySurasNames = {
    26: 'الشعراء',
    27: 'النَّمل',
    28: 'القَصَص',
    29: 'العَنكبُوت',
};
const choicesObjects = {
    "381": "ولقد ارسلنا الي ثمود اخاهم",
    "382": "فما كان جواب قومه الا",
    "384": "وانه لهدي ورحمه للمؤمنين",
    "385": "من جاء بالحسنه فله خير",
};
const ayas = [{"aya_id": 3223, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34]], "aya_moshaf": "أَمَّن يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥ وَمَن يَرۡزُقُكُم مِّنَ ٱلسَّمَآءِ وَٱلۡأَرۡضِۗ أَءِلَٰهٞ مَّعَ ٱللَّهِۚ قُلۡ هَاتُواْ بُرۡهَٰنَكُمۡ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 3224, "coordinates": [[156, 49, 322, 34], [190, 255, 117, 34]], "aya_moshaf": "قُل لَّا يَعۡلَمُ مَن فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ ٱلۡغَيۡبَ إِلَّا ٱللَّهُۚ وَمَا يَشۡعُرُونَ أَيَّانَ يُبۡعَثُونَ "}, {"aya_id": 3225, "coordinates": [[190, 49, 206, 34], [224, 158, 214, 34]], "aya_moshaf": "بَلِ ٱدَّٰرَكَ عِلۡمُهُمۡ فِي ٱلۡأٓخِرَةِۚ بَلۡ هُمۡ فِي شَكّٖ مِّنۡهَاۖ بَلۡ هُم مِّنۡهَا عَمُونَ "}, {"aya_id": 3226, "coordinates": [[224, 49, 109, 34], [259, 119, 253, 34]], "aya_moshaf": "وَقَالَ ٱلَّذِينَ كَفَرُوٓاْ أَءِذَا كُنَّا تُرَٰبٗا وَءَابَآؤُنَآ أَئِنَّا لَمُخۡرَجُونَ "}, {"aya_id": 3227, "coordinates": [[259, 49, 70, 34], [293, 49, 322, 34]], "aya_moshaf": "لَقَدۡ وُعِدۡنَا هَٰذَا نَحۡنُ وَءَابَآؤُنَا مِن قَبۡلُ إِنۡ هَٰذَآ إِلَّآ أَسَٰطِيرُ ٱلۡأَوَّلِينَ "}, {"aya_id": 3228, "coordinates": [[327, 49, 322, 34], [362, 339, 33, 34]], "aya_moshaf": "قُلۡ سِيرُواْ فِي ٱلۡأَرۡضِ فَٱنظُرُواْ كَيۡفَ كَانَ عَٰقِبَةُ ٱلۡمُجۡرِمِينَ "}, {"aya_id": 3229, "coordinates": [[362, 49, 290, 34]], "aya_moshaf": "وَلَا تَحۡزَنۡ عَلَيۡهِمۡ وَلَا تَكُن فِي ضَيۡقٖ مِّمَّا يَمۡكُرُونَ "}, {"aya_id": 3230, "coordinates": [[396, 95, 277, 34]], "aya_moshaf": "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلۡوَعۡدُ إِن كُنتُمۡ صَٰدِقِينَ "}, {"aya_id": 3231, "coordinates": [[396, 49, 46, 34], [430, 99, 273, 34]], "aya_moshaf": "قُلۡ عَسَىٰٓ أَن يَكُونَ رَدِفَ لَكُم بَعۡضُ ٱلَّذِي تَسۡتَعۡجِلُونَ "}, {"aya_id": 3232, "coordinates": [[430, 49, 50, 34], [465, 78, 294, 34]], "aya_moshaf": "وَإِنَّ رَبَّكَ لَذُو فَضۡلٍ عَلَى ٱلنَّاسِ وَلَٰكِنَّ أَكۡثَرَهُمۡ لَا يَشۡكُرُونَ "}, {"aya_id": 3233, "coordinates": [[465, 49, 29, 34], [499, 119, 253, 34]], "aya_moshaf": "وَإِنَّ رَبَّكَ لَيَعۡلَمُ مَا تُكِنُّ صُدُورُهُمۡ وَمَا يُعۡلِنُونَ "}, {"aya_id": 3234, "coordinates": [[499, 49, 70, 34], [533, 143, 229, 34]], "aya_moshaf": "وَمَا مِنۡ غَآئِبَةٖ فِي ٱلسَّمَآءِ وَٱلۡأَرۡضِ إِلَّا فِي كِتَٰبٖ مُّبِينٍ "}, {"aya_id": 3235, "coordinates": [[533, 49, 94, 34], [568, 49, 322, 34]], "aya_moshaf": "إِنَّ هَٰذَا ٱلۡقُرۡءَانَ يَقُصُّ عَلَىٰ بَنِيٓ إِسۡرَٰٓءِيلَ أَكۡثَرَ ٱلَّذِي هُمۡ فِيهِ يَخۡتَلِفُونَ "}]