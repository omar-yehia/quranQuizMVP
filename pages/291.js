const mainSuraId = 17;
const nearbySurasNames = {
    16: 'النَّحل',
    17: 'الإسرَاء',
    18: 'الكَهف',
    19: 'مَريَم',
};
const choicesObjects = {
    "289": "واذا مسكم الضر في البحر",
    "290": "وان كادوا ليستفزونك من الارض",
    "292": "ومن يهد الله فهو المهتد",
    "293": "وبالحق انزلناه وبالحق نزل وما",
};
const ayas = [{"aya_id": 2116, "coordinates": [[87, 72, 300, 34]], "aya_moshaf": "إِلَّا رَحۡمَةٗ مِّن رَّبِّكَۚ إِنَّ فَضۡلَهُۥ كَانَ عَلَيۡكَ كَبِيرٗا "}, {"aya_id": 2117, "coordinates": [[87, 49, 23, 34], [121, 49, 322, 34], [156, 84, 288, 34]], "aya_moshaf": "قُل لَّئِنِ ٱجۡتَمَعَتِ ٱلۡإِنسُ وَٱلۡجِنُّ عَلَىٰٓ أَن يَأۡتُواْ بِمِثۡلِ هَٰذَا ٱلۡقُرۡءَانِ لَا يَأۡتُونَ بِمِثۡلِهِۦ وَلَوۡ كَانَ بَعۡضُهُمۡ لِبَعۡضٖ ظَهِيرٗا "}, {"aya_id": 2118, "coordinates": [[156, 49, 35, 34], [190, 49, 322, 34], [224, 265, 107, 34]], "aya_moshaf": "وَلَقَدۡ صَرَّفۡنَا لِلنَّاسِ فِي هَٰذَا ٱلۡقُرۡءَانِ مِن كُلِّ مَثَلٖ فَأَبَىٰٓ أَكۡثَرُ ٱلنَّاسِ إِلَّا كُفُورٗا "}, {"aya_id": 2119, "coordinates": [[224, 49, 216, 34], [259, 269, 103, 34]], "aya_moshaf": "وَقَالُواْ لَن نُّؤۡمِنَ لَكَ حَتَّىٰ تَفۡجُرَ لَنَا مِنَ ٱلۡأَرۡضِ يَنۢبُوعًا "}, {"aya_id": 2120, "coordinates": [[259, 49, 220, 34], [293, 180, 192, 34]], "aya_moshaf": "أَوۡ تَكُونَ لَكَ جَنَّةٞ مِّن نَّخِيلٖ وَعِنَبٖ فَتُفَجِّرَ ٱلۡأَنۡهَٰرَ خِلَٰلَهَا تَفۡجِيرًا "}, {"aya_id": 2121, "coordinates": [[293, 49, 131, 34], [327, 49, 322, 34]], "aya_moshaf": "أَوۡ تُسۡقِطَ ٱلسَّمَآءَ كَمَا زَعَمۡتَ عَلَيۡنَا كِسَفًا أَوۡ تَأۡتِيَ بِٱللَّهِ وَٱلۡمَلَٰٓئِكَةِ قَبِيلًا "}, {"aya_id": 2122, "coordinates": [[362, 49, 322, 34], [396, 49, 322, 34], [430, 239, 133, 34]], "aya_moshaf": "أَوۡ يَكُونَ لَكَ بَيۡتٞ مِّن زُخۡرُفٍ أَوۡ تَرۡقَىٰ فِي ٱلسَّمَآءِ وَلَن نُّؤۡمِنَ لِرُقِيِّكَ حَتَّىٰ تُنَزِّلَ عَلَيۡنَا كِتَٰبٗا نَّقۡرَؤُهُۥۗ قُلۡ سُبۡحَانَ رَبِّي هَلۡ كُنتُ إِلَّا بَشَرٗا رَّسُولٗا "}, {"aya_id": 2123, "coordinates": [[430, 49, 190, 34], [465, 119, 253, 34]], "aya_moshaf": "وَمَا مَنَعَ ٱلنَّاسَ أَن يُؤۡمِنُوٓاْ إِذۡ جَآءَهُمُ ٱلۡهُدَىٰٓ إِلَّآ أَن قَالُوٓاْ أَبَعَثَ ٱللَّهُ بَشَرٗا رَّسُولٗا "}, {"aya_id": 2124, "coordinates": [[465, 49, 70, 34], [499, 49, 322, 34], [533, 176, 196, 34]], "aya_moshaf": "قُل لَّوۡ كَانَ فِي ٱلۡأَرۡضِ مَلَٰٓئِكَةٞ يَمۡشُونَ مُطۡمَئِنِّينَ لَنَزَّلۡنَا عَلَيۡهِم مِّنَ ٱلسَّمَآءِ مَلَكٗا رَّسُولٗا "}, {"aya_id": 2125, "coordinates": [[533, 49, 127, 34], [568, 49, 322, 34]], "aya_moshaf": "قُلۡ كَفَىٰ بِٱللَّهِ شَهِيدَۢا بَيۡنِي وَبَيۡنَكُمۡۚ إِنَّهُۥ كَانَ بِعِبَادِهِۦ خَبِيرَۢا بَصِيرٗا "}]