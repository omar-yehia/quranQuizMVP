const mainSuraId = 19;
const nearbySurasNames = {
    18: 'الكَهف',
    19: 'مَريَم',
    20: 'طه',
    21: 'الأنبيَاء',
};
const choicesObjects = {
    "306": "يايحيي خذ الكتاب بقوه واتيناه",
    "307": "فكلي واشربي وقري عينا فاما",
    "309": "وناديناه من جانب الطور الايمن",
    "310": "رب السموات والارض وما بينهما",
};
const ayas = [{"aya_id": 2289, "coordinates": [[80, 83, 322, 34], [114, 385, 21, 34]], "aya_moshaf": "وَأَنذِرۡهُمۡ يَوۡمَ ٱلۡحَسۡرَةِ إِذۡ قُضِيَ ٱلۡأَمۡرُ وَهُمۡ فِي غَفۡلَةٖ وَهُمۡ لَا يُؤۡمِنُونَ "}, {"aya_id": 2290, "coordinates": [[114, 123, 262, 34]], "aya_moshaf": "إِنَّا نَحۡنُ نَرِثُ ٱلۡأَرۡضَ وَمَنۡ عَلَيۡهَا وَإِلَيۡنَا يُرۡجَعُونَ "}, {"aya_id": 2291, "coordinates": [[114, 83, 40, 34], [149, 180, 226, 34]], "aya_moshaf": "وَٱذۡكُرۡ فِي ٱلۡكِتَٰبِ إِبۡرَٰهِيمَۚ إِنَّهُۥ كَانَ صِدِّيقٗا نَّبِيًّا "}, {"aya_id": 2292, "coordinates": [[149, 83, 97, 34], [183, 124, 282, 34]], "aya_moshaf": "إِذۡ قَالَ لِأَبِيهِ يَٰٓأَبَتِ لِمَ تَعۡبُدُ مَا لَا يَسۡمَعُ وَلَا يُبۡصِرُ وَلَا يُغۡنِي عَنكَ شَيۡـٔٗا "}, {"aya_id": 2293, "coordinates": [[183, 83, 41, 34], [217, 83, 322, 34], [252, 351, 55, 34]], "aya_moshaf": "يَٰٓأَبَتِ إِنِّي قَدۡ جَآءَنِي مِنَ ٱلۡعِلۡمِ مَا لَمۡ يَأۡتِكَ فَٱتَّبِعۡنِيٓ أَهۡدِكَ صِرَٰطٗا سَوِيّٗا "}, {"aya_id": 2294, "coordinates": [[252, 83, 268, 34], [286, 345, 61, 34]], "aya_moshaf": "يَٰٓأَبَتِ لَا تَعۡبُدِ ٱلشَّيۡطَٰنَۖ إِنَّ ٱلشَّيۡطَٰنَ كَانَ لِلرَّحۡمَٰنِ عَصِيّٗا "}, {"aya_id": 2295, "coordinates": [[286, 83, 262, 34], [320, 252, 154, 34]], "aya_moshaf": "يَٰٓأَبَتِ إِنِّيٓ أَخَافُ أَن يَمَسَّكَ عَذَابٞ مِّنَ ٱلرَّحۡمَٰنِ فَتَكُونَ لِلشَّيۡطَٰنِ وَلِيّٗا "}, {"aya_id": 2296, "coordinates": [[320, 83, 169, 34], [355, 114, 292, 34]], "aya_moshaf": "قَالَ أَرَاغِبٌ أَنتَ عَنۡ ءَالِهَتِي يَٰٓإِبۡرَٰهِيمُۖ لَئِن لَّمۡ تَنتَهِ لَأَرۡجُمَنَّكَۖ وَٱهۡجُرۡنِي مَلِيّٗا "}, {"aya_id": 2297, "coordinates": [[355, 83, 31, 34], [389, 83, 322, 34]], "aya_moshaf": "قَالَ سَلَٰمٌ عَلَيۡكَۖ سَأَسۡتَغۡفِرُ لَكَ رَبِّيٓۖ إِنَّهُۥ كَانَ بِي حَفِيّٗا "}, {"aya_id": 2298, "coordinates": [[423, 83, 322, 34], [458, 234, 172, 34]], "aya_moshaf": "وَأَعۡتَزِلُكُمۡ وَمَا تَدۡعُونَ مِن دُونِ ٱللَّهِ وَأَدۡعُواْ رَبِّي عَسَىٰٓ أَلَّآ أَكُونَ بِدُعَآءِ رَبِّي شَقِيّٗا "}, {"aya_id": 2299, "coordinates": [[458, 83, 151, 34], [492, 83, 322, 34]], "aya_moshaf": "فَلَمَّا ٱعۡتَزَلَهُمۡ وَمَا يَعۡبُدُونَ مِن دُونِ ٱللَّهِ وَهَبۡنَا لَهُۥٓ إِسۡحَٰقَ وَيَعۡقُوبَۖ وَكُلّٗا جَعَلۡنَا نَبِيّٗا "}, {"aya_id": 2300, "coordinates": [[526, 83, 322, 34]], "aya_moshaf": "وَوَهَبۡنَا لَهُم مِّن رَّحۡمَتِنَا وَجَعَلۡنَا لَهُمۡ لِسَانَ صِدۡقٍ عَلِيّٗا "}, {"aya_id": 2301, "coordinates": [[561, 83, 322, 34]], "aya_moshaf": "وَٱذۡكُرۡ فِي ٱلۡكِتَٰبِ مُوسَىٰٓۚ إِنَّهُۥ كَانَ مُخۡلَصٗا وَكَانَ رَسُولٗا نَّبِيّٗا "}]