const mainSuraId = 15;
const nearbySurasNames = {
    14: 'إبراهِيم',
    15: 'الحِجر',
    16: 'النَّحل',
    17: 'الإسرَاء',
};
const choicesObjects = {
    "260": "واتاكم من كل ما سالتموه",
    "261": "مهطعين مقنعي رءوسهم لا يرتد",
    "263": "ولقد جعلنا في السماء بروجا",
    "264": "قال ياابليس ما لك الا",
};
const ayas = [{"aya_id": 1803, "coordinates": [[154, 158, 257, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ الٓرۚ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ وَقُرۡءَانٖ مُّبِينٖ "}, {"aya_id": 1804, "coordinates": [[154, 92, 66, 34], [188, 205, 210, 34]], "aya_moshaf": "رُّبَمَا يَوَدُّ ٱلَّذِينَ كَفَرُواْ لَوۡ كَانُواْ مُسۡلِمِينَ "}, {"aya_id": 1805, "coordinates": [[188, 92, 113, 34], [222, 164, 251, 34]], "aya_moshaf": "ذَرۡهُمۡ يَأۡكُلُواْ وَيَتَمَتَّعُواْ وَيُلۡهِهِمُ ٱلۡأَمَلُۖ فَسَوۡفَ يَعۡلَمُونَ "}, {"aya_id": 1806, "coordinates": [[222, 92, 72, 34], [257, 205, 210, 34]], "aya_moshaf": "وَمَآ أَهۡلَكۡنَا مِن قَرۡيَةٍ إِلَّا وَلَهَا كِتَابٞ مَّعۡلُومٞ "}, {"aya_id": 1807, "coordinates": [[257, 92, 113, 34], [291, 269, 146, 34]], "aya_moshaf": "مَّا تَسۡبِقُ مِنۡ أُمَّةٍ أَجَلَهَا وَمَا يَسۡتَـٔۡخِرُونَ "}, {"aya_id": 1808, "coordinates": [[291, 92, 177, 34], [325, 278, 137, 34]], "aya_moshaf": "وَقَالُواْ يَٰٓأَيُّهَا ٱلَّذِي نُزِّلَ عَلَيۡهِ ٱلذِّكۡرُ إِنَّكَ لَمَجۡنُونٞ "}, {"aya_id": 1809, "coordinates": [[325, 92, 186, 34], [360, 310, 105, 34]], "aya_moshaf": "لَّوۡمَا تَأۡتِينَا بِٱلۡمَلَٰٓئِكَةِ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ "}, {"aya_id": 1810, "coordinates": [[360, 92, 218, 34], [394, 324, 91, 34]], "aya_moshaf": "مَا نُنَزِّلُ ٱلۡمَلَٰٓئِكَةَ إِلَّا بِٱلۡحَقِّ وَمَا كَانُوٓاْ إِذٗا مُّنظَرِينَ "}, {"aya_id": 1811, "coordinates": [[394, 92, 232, 34]], "aya_moshaf": "إِنَّا نَحۡنُ نَزَّلۡنَا ٱلذِّكۡرَ وَإِنَّا لَهُۥ لَحَٰفِظُونَ "}, {"aya_id": 1812, "coordinates": [[428, 171, 244, 34]], "aya_moshaf": "وَلَقَدۡ أَرۡسَلۡنَا مِن قَبۡلِكَ فِي شِيَعِ ٱلۡأَوَّلِينَ "}, {"aya_id": 1813, "coordinates": [[428, 92, 79, 34], [463, 216, 199, 34]], "aya_moshaf": "وَمَا يَأۡتِيهِم مِّن رَّسُولٍ إِلَّا كَانُواْ بِهِۦ يَسۡتَهۡزِءُونَ "}, {"aya_id": 1814, "coordinates": [[463, 92, 124, 34], [497, 292, 123, 34]], "aya_moshaf": "كَذَٰلِكَ نَسۡلُكُهُۥ فِي قُلُوبِ ٱلۡمُجۡرِمِينَ "}, {"aya_id": 1815, "coordinates": [[497, 92, 200, 34], [531, 392, 23, 34]], "aya_moshaf": "لَا يُؤۡمِنُونَ بِهِۦ وَقَدۡ خَلَتۡ سُنَّةُ ٱلۡأَوَّلِينَ "}, {"aya_id": 1816, "coordinates": [[531, 92, 300, 34], [566, 394, 21, 34]], "aya_moshaf": "وَلَوۡ فَتَحۡنَا عَلَيۡهِم بَابٗا مِّنَ ٱلسَّمَآءِ فَظَلُّواْ فِيهِ يَعۡرُجُونَ "}, {"aya_id": 1817, "coordinates": [[566, 92, 302, 34]], "aya_moshaf": "لَقَالُوٓاْ إِنَّمَا سُكِّرَتۡ أَبۡصَٰرُنَا بَلۡ نَحۡنُ قَوۡمٞ مَّسۡحُورُونَ "}]