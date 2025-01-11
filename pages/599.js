const mainSuraId = 98;
const nearbySurasNames = {
    97: 'القَدر',
    98: 'البَينَة',
    99: 'الزَّلزَلة',
    100: 'العَاديَات',
};
const choicesObjects = {
    "597": "الذي انقض ظهرك",
    "598": "ارايت ان كذب وتولي",
    "600": "ان الانسان لربه لكنود",
    "601": "والعصر",
};
const ayas = [{"aya_id": 6138, "coordinates": [[90, 46, 322, 34], [124, 46, 322, 34]], "aya_moshaf": "جَزَآؤُهُمۡ عِندَ رَبِّهِمۡ جَنَّٰتُ عَدۡنٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدٗاۖ رَّضِيَ ٱللَّهُ عَنۡهُمۡ وَرَضُواْ عَنۡهُۚ ذَٰلِكَ لِمَنۡ خَشِيَ رَبَّهُۥ "}, {"aya_id": 6139, "coordinates": [[227, 208, 161, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ إِذَا زُلۡزِلَتِ ٱلۡأَرۡضُ زِلۡزَالَهَا "}, {"aya_id": 6140, "coordinates": [[227, 46, 162, 34], [262, 347, 22, 34]], "aya_moshaf": "وَأَخۡرَجَتِ ٱلۡأَرۡضُ أَثۡقَالَهَا "}, {"aya_id": 6141, "coordinates": [[262, 212, 135, 34]], "aya_moshaf": "وَقَالَ ٱلۡإِنسَٰنُ مَا لَهَا "}, {"aya_id": 6142, "coordinates": [[262, 46, 166, 34]], "aya_moshaf": "يَوۡمَئِذٖ تُحَدِّثُ أَخۡبَارَهَا "}, {"aya_id": 6143, "coordinates": [[296, 231, 138, 34]], "aya_moshaf": "بِأَنَّ رَبَّكَ أَوۡحَىٰ لَهَا "}, {"aya_id": 6144, "coordinates": [[296, 46, 185, 34], [330, 250, 119, 34]], "aya_moshaf": "يَوۡمَئِذٖ يَصۡدُرُ ٱلنَّاسُ أَشۡتَاتٗا لِّيُرَوۡاْ أَعۡمَٰلَهُمۡ "}, {"aya_id": 6145, "coordinates": [[330, 46, 204, 34], [365, 309, 60, 34]], "aya_moshaf": "فَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٍ خَيۡرٗا يَرَهُۥ "}, {"aya_id": 6146, "coordinates": [[365, 46, 263, 34]], "aya_moshaf": "وَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٖ شَرّٗا يَرَهُۥ "}, {"aya_id": 6147, "coordinates": [[468, 253, 116, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلۡعَٰدِيَٰتِ ضَبۡحٗا "}, {"aya_id": 6148, "coordinates": [[468, 138, 115, 34]], "aya_moshaf": "فَٱلۡمُورِيَٰتِ قَدۡحٗا "}, {"aya_id": 6149, "coordinates": [[468, 46, 92, 34], [502, 345, 24, 34]], "aya_moshaf": "فَٱلۡمُغِيرَٰتِ صُبۡحٗا "}, {"aya_id": 6150, "coordinates": [[502, 247, 98, 34]], "aya_moshaf": "فَأَثَرۡنَ بِهِۦ نَقۡعٗا "}, {"aya_id": 6151, "coordinates": [[502, 135, 112, 34]], "aya_moshaf": "فَوَسَطۡنَ بِهِۦ جَمۡعًا "}, {"aya_id": 6152, "coordinates": [[502, 46, 89, 34], [536, 276, 93, 34]], "aya_moshaf": "إِنَّ ٱلۡإِنسَٰنَ لِرَبِّهِۦ لَكَنُودٞ "}, {"aya_id": 6153, "coordinates": [[536, 124, 152, 34]], "aya_moshaf": "وَإِنَّهُۥ عَلَىٰ ذَٰلِكَ لَشَهِيدٞ "}, {"aya_id": 6154, "coordinates": [[536, 46, 78, 34], [571, 273, 96, 34]], "aya_moshaf": "وَإِنَّهُۥ لِحُبِّ ٱلۡخَيۡرِ لَشَدِيدٌ "}, {"aya_id": 6155, "coordinates": [[571, 46, 227, 34]], "aya_moshaf": "۞ أَفَلَا يَعۡلَمُ إِذَا بُعۡثِرَ مَا فِي ٱلۡقُبُورِ "}]