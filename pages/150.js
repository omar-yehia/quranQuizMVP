const mainSuraId = 6;
const nearbySurasNames = {
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
};
const choicesObjects = {
    "148": "فان كذبوك فقل ربكم ذو",
    "149": "ولا تقربوا مال اليتيم الا",
    "151": "المص",
    "152": "قال ما منعك الا تسجد",
};
const ayas = [{"aya_id": 947, "coordinates": [[78, 87, 322, 34], [112, 87, 322, 34], [147, 87, 322, 34], [181, 316, 94, 34]], "aya_moshaf": "هَلۡ يَنظُرُونَ إِلَّآ أَن تَأۡتِيَهُمُ ٱلۡمَلَٰٓئِكَةُ أَوۡ يَأۡتِيَ رَبُّكَ أَوۡ يَأۡتِيَ بَعۡضُ ءَايَٰتِ رَبِّكَۗ يَوۡمَ يَأۡتِي بَعۡضُ ءَايَٰتِ رَبِّكَ لَا يَنفَعُ نَفۡسًا إِيمَٰنُهَا لَمۡ تَكُنۡ ءَامَنَتۡ مِن قَبۡلُ أَوۡ كَسَبَتۡ فِيٓ إِيمَٰنِهَا خَيۡرٗاۗ قُلِ ٱنتَظِرُوٓاْ إِنَّا مُنتَظِرُونَ "}, {"aya_id": 948, "coordinates": [[181, 87, 229, 34], [215, 87, 322, 34], [250, 386, 24, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ فَرَّقُواْ دِينَهُمۡ وَكَانُواْ شِيَعٗا لَّسۡتَ مِنۡهُمۡ فِي شَيۡءٍۚ إِنَّمَآ أَمۡرُهُمۡ إِلَى ٱللَّهِ ثُمَّ يُنَبِّئُهُم بِمَا كَانُواْ يَفۡعَلُونَ "}, {"aya_id": 949, "coordinates": [[250, 87, 299, 34], [284, 199, 211, 34]], "aya_moshaf": "مَن جَآءَ بِٱلۡحَسَنَةِ فَلَهُۥ عَشۡرُ أَمۡثَالِهَاۖ وَمَن جَآءَ بِٱلسَّيِّئَةِ فَلَا يُجۡزَىٰٓ إِلَّا مِثۡلَهَا وَهُمۡ لَا يُظۡلَمُونَ "}, {"aya_id": 950, "coordinates": [[284, 87, 112, 34], [318, 87, 322, 34], [353, 329, 81, 34]], "aya_moshaf": "قُلۡ إِنَّنِي هَدَىٰنِي رَبِّيٓ إِلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ دِينٗا قِيَمٗا مِّلَّةَ إِبۡرَٰهِيمَ حَنِيفٗاۚ وَمَا كَانَ مِنَ ٱلۡمُشۡرِكِينَ "}, {"aya_id": 951, "coordinates": [[353, 87, 242, 34], [387, 317, 93, 34]], "aya_moshaf": "قُلۡ إِنَّ صَلَاتِي وَنُسُكِي وَمَحۡيَايَ وَمَمَاتِي لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 952, "coordinates": [[387, 87, 230, 34], [421, 392, 18, 34]], "aya_moshaf": "لَا شَرِيكَ لَهُۥۖ وَبِذَٰلِكَ أُمِرۡتُ وَأَنَا۠ أَوَّلُ ٱلۡمُسۡلِمِينَ "}, {"aya_id": 953, "coordinates": [[421, 87, 305, 34], [456, 87, 322, 34], [490, 214, 196, 34]], "aya_moshaf": "قُلۡ أَغَيۡرَ ٱللَّهِ أَبۡغِي رَبّٗا وَهُوَ رَبُّ كُلِّ شَيۡءٖۚ وَلَا تَكۡسِبُ كُلُّ نَفۡسٍ إِلَّا عَلَيۡهَاۚ وَلَا تَزِرُ وَازِرَةٞ وِزۡرَ أُخۡرَىٰۚ ثُمَّ إِلَىٰ رَبِّكُم مَّرۡجِعُكُمۡ فَيُنَبِّئُكُم بِمَا كُنتُمۡ فِيهِ تَخۡتَلِفُونَ "}, {"aya_id": 954, "coordinates": [[490, 87, 127, 34], [524, 87, 322, 34], [559, 87, 322, 34]], "aya_moshaf": "وَهُوَ ٱلَّذِي جَعَلَكُمۡ خَلَٰٓئِفَ ٱلۡأَرۡضِ وَرَفَعَ بَعۡضَكُمۡ فَوۡقَ بَعۡضٖ دَرَجَٰتٖ لِّيَبۡلُوَكُمۡ فِي مَآ ءَاتَىٰكُمۡۗ إِنَّ رَبَّكَ سَرِيعُ ٱلۡعِقَابِ وَإِنَّهُۥ لَغَفُورٞ رَّحِيمُۢ "}]