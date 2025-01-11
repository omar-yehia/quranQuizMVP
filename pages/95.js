const mainSuraId = 4;
const nearbySurasNames = {
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
};
const choicesObjects = {
    "93": "وما كان لمؤمن ان يقتل",
    "94": "لا يستوي القاعدون من المؤمنين",
    "96": "واستغفر الله ان الله كان",
    "97": "لا خير في كثير من",
};
const ayas = [{"aya_id": 595, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 49, 322, 34], [190, 49, 322, 34], [224, 49, 322, 34], [259, 49, 322, 34], [293, 49, 322, 34], [327, 49, 322, 34]], "aya_moshaf": "وَإِذَا كُنتَ فِيهِمۡ فَأَقَمۡتَ لَهُمُ ٱلصَّلَوٰةَ فَلۡتَقُمۡ طَآئِفَةٞ مِّنۡهُم مَّعَكَ وَلۡيَأۡخُذُوٓاْ أَسۡلِحَتَهُمۡۖ فَإِذَا سَجَدُواْ فَلۡيَكُونُواْ مِن وَرَآئِكُمۡ وَلۡتَأۡتِ طَآئِفَةٌ أُخۡرَىٰ لَمۡ يُصَلُّواْ فَلۡيُصَلُّواْ مَعَكَ وَلۡيَأۡخُذُواْ حِذۡرَهُمۡ وَأَسۡلِحَتَهُمۡۗ وَدَّ ٱلَّذِينَ كَفَرُواْ لَوۡ تَغۡفُلُونَ عَنۡ أَسۡلِحَتِكُمۡ وَأَمۡتِعَتِكُمۡ فَيَمِيلُونَ عَلَيۡكُم مَّيۡلَةٗ وَٰحِدَةٗۚ وَلَا جُنَاحَ عَلَيۡكُمۡ إِن كَانَ بِكُمۡ أَذٗى مِّن مَّطَرٍ أَوۡ كُنتُم مَّرۡضَىٰٓ أَن تَضَعُوٓاْ أَسۡلِحَتَكُمۡۖ وَخُذُواْ حِذۡرَكُمۡۗ إِنَّ ٱللَّهَ أَعَدَّ لِلۡكَٰفِرِينَ عَذَابٗا مُّهِينٗا "}, {"aya_id": 596, "coordinates": [[362, 49, 322, 34], [396, 49, 322, 34], [430, 127, 245, 34]], "aya_moshaf": "فَإِذَا قَضَيۡتُمُ ٱلصَّلَوٰةَ فَٱذۡكُرُواْ ٱللَّهَ قِيَٰمٗا وَقُعُودٗا وَعَلَىٰ جُنُوبِكُمۡۚ فَإِذَا ٱطۡمَأۡنَنتُمۡ فَأَقِيمُواْ ٱلصَّلَوٰةَۚ إِنَّ ٱلصَّلَوٰةَ كَانَتۡ عَلَى ٱلۡمُؤۡمِنِينَ كِتَٰبٗا مَّوۡقُوتٗا "}, {"aya_id": 597, "coordinates": [[430, 49, 78, 34], [465, 49, 322, 34], [499, 49, 322, 34], [533, 304, 68, 34]], "aya_moshaf": "وَلَا تَهِنُواْ فِي ٱبۡتِغَآءِ ٱلۡقَوۡمِۖ إِن تَكُونُواْ تَأۡلَمُونَ فَإِنَّهُمۡ يَأۡلَمُونَ كَمَا تَأۡلَمُونَۖ وَتَرۡجُونَ مِنَ ٱللَّهِ مَا لَا يَرۡجُونَۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًا "}, {"aya_id": 598, "coordinates": [[533, 49, 255, 34], [568, 49, 322, 34]], "aya_moshaf": "إِنَّآ أَنزَلۡنَآ إِلَيۡكَ ٱلۡكِتَٰبَ بِٱلۡحَقِّ لِتَحۡكُمَ بَيۡنَ ٱلنَّاسِ بِمَآ أَرَىٰكَ ٱللَّهُۚ وَلَا تَكُن لِّلۡخَآئِنِينَ خَصِيمٗا "}]