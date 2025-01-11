const mainSuraId = 9;
const nearbySurasNames = {
    8: 'الأنفَال',
    9: 'التوبَة',
    10: 'يُونس',
    11: 'هُود',
};
const choicesObjects = {
    "192": "يريدون ان يطفئوا نور الله",
    "193": "انما النسيء زياده في الكفر",
    "195": "لقد ابتغوا الفتنه من قبل",
    "196": "فلا تعجبك اموالهم ولا اولادهم",
};
const ayas = [{"aya_id": 1276, "coordinates": [[80, 92, 322, 34], [114, 92, 322, 34]], "aya_moshaf": "ٱنفِرُواْ خِفَافٗا وَثِقَالٗا وَجَٰهِدُواْ بِأَمۡوَٰلِكُمۡ وَأَنفُسِكُمۡ فِي سَبِيلِ ٱللَّهِۚ ذَٰلِكُمۡ خَيۡرٞ لَّكُمۡ إِن كُنتُمۡ تَعۡلَمُونَ "}, {"aya_id": 1277, "coordinates": [[149, 92, 322, 34], [183, 92, 322, 34], [217, 92, 322, 34]], "aya_moshaf": "لَوۡ كَانَ عَرَضٗا قَرِيبٗا وَسَفَرٗا قَاصِدٗا لَّٱتَّبَعُوكَ وَلَٰكِنۢ بَعُدَتۡ عَلَيۡهِمُ ٱلشُّقَّةُۚ وَسَيَحۡلِفُونَ بِٱللَّهِ لَوِ ٱسۡتَطَعۡنَا لَخَرَجۡنَا مَعَكُمۡ يُهۡلِكُونَ أَنفُسَهُمۡ وَٱللَّهُ يَعۡلَمُ إِنَّهُمۡ لَكَٰذِبُونَ "}, {"aya_id": 1278, "coordinates": [[252, 92, 322, 34], [286, 220, 195, 34]], "aya_moshaf": "عَفَا ٱللَّهُ عَنكَ لِمَ أَذِنتَ لَهُمۡ حَتَّىٰ يَتَبَيَّنَ لَكَ ٱلَّذِينَ صَدَقُواْ وَتَعۡلَمَ ٱلۡكَٰذِبِينَ "}, {"aya_id": 1279, "coordinates": [[286, 92, 128, 34], [320, 92, 322, 34], [355, 220, 195, 34]], "aya_moshaf": "لَا يَسۡتَـٔۡذِنُكَ ٱلَّذِينَ يُؤۡمِنُونَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِ أَن يُجَٰهِدُواْ بِأَمۡوَٰلِهِمۡ وَأَنفُسِهِمۡۗ وَٱللَّهُ عَلِيمُۢ بِٱلۡمُتَّقِينَ "}, {"aya_id": 1280, "coordinates": [[355, 92, 128, 34], [389, 92, 322, 34], [423, 259, 156, 34]], "aya_moshaf": "إِنَّمَا يَسۡتَـٔۡذِنُكَ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِ وَٱرۡتَابَتۡ قُلُوبُهُمۡ فَهُمۡ فِي رَيۡبِهِمۡ يَتَرَدَّدُونَ "}, {"aya_id": 1281, "coordinates": [[423, 92, 167, 34], [458, 92, 322, 34], [492, 192, 223, 34]], "aya_moshaf": "۞ وَلَوۡ أَرَادُواْ ٱلۡخُرُوجَ لَأَعَدُّواْ لَهُۥ عُدَّةٗ وَلَٰكِن كَرِهَ ٱللَّهُ ٱنۢبِعَاثَهُمۡ فَثَبَّطَهُمۡ وَقِيلَ ٱقۡعُدُواْ مَعَ ٱلۡقَٰعِدِينَ "}, {"aya_id": 1282, "coordinates": [[492, 92, 100, 34], [526, 92, 322, 34], [561, 92, 322, 34]], "aya_moshaf": "لَوۡ خَرَجُواْ فِيكُم مَّا زَادُوكُمۡ إِلَّا خَبَالٗا وَلَأَوۡضَعُواْ خِلَٰلَكُمۡ يَبۡغُونَكُمُ ٱلۡفِتۡنَةَ وَفِيكُمۡ سَمَّٰعُونَ لَهُمۡۗ وَٱللَّهُ عَلِيمُۢ بِٱلظَّٰلِمِينَ "}]