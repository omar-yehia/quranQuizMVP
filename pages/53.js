const mainSuraId = 3;
const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "51": "ان الذين كفروا لن تغني",
    "52": "الذين يقولون ربنا اننا امنا",
    "54": "يوم تجد كل نفس ما",
    "55": "هنالك دعا زكريا ربه قال",
};
const ayas = [{"aya_id": 316, "coordinates": [[86, 56, 322, 34], [120, 56, 322, 34]], "aya_moshaf": "أَلَمۡ تَرَ إِلَى ٱلَّذِينَ أُوتُواْ نَصِيبٗا مِّنَ ٱلۡكِتَٰبِ يُدۡعَوۡنَ إِلَىٰ كِتَٰبِ ٱللَّهِ لِيَحۡكُمَ بَيۡنَهُمۡ ثُمَّ يَتَوَلَّىٰ فَرِيقٞ مِّنۡهُمۡ وَهُم مُّعۡرِضُونَ "}, {"aya_id": 317, "coordinates": [[155, 56, 322, 34], [189, 173, 206, 34]], "aya_moshaf": "ذَٰلِكَ بِأَنَّهُمۡ قَالُواْ لَن تَمَسَّنَا ٱلنَّارُ إِلَّآ أَيَّامٗا مَّعۡدُودَٰتٖۖ وَغَرَّهُمۡ فِي دِينِهِم مَّا كَانُواْ يَفۡتَرُونَ "}, {"aya_id": 318, "coordinates": [[189, 56, 117, 34], [223, 56, 322, 34], [258, 260, 119, 34]], "aya_moshaf": "فَكَيۡفَ إِذَا جَمَعۡنَٰهُمۡ لِيَوۡمٖ لَّا رَيۡبَ فِيهِ وَوُفِّيَتۡ كُلُّ نَفۡسٖ مَّا كَسَبَتۡ وَهُمۡ لَا يُظۡلَمُونَ "}, {"aya_id": 319, "coordinates": [[258, 56, 204, 34], [292, 56, 322, 34], [326, 122, 257, 34]], "aya_moshaf": "قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلۡمُلۡكِ تُؤۡتِي ٱلۡمُلۡكَ مَن تَشَآءُ وَتَنزِعُ ٱلۡمُلۡكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُۖ بِيَدِكَ ٱلۡخَيۡرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ "}, {"aya_id": 320, "coordinates": [[326, 56, 66, 34], [361, 56, 322, 34], [395, 56, 322, 34]], "aya_moshaf": "تُولِجُ ٱلَّيۡلَ فِي ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِي ٱلَّيۡلِۖ وَتُخۡرِجُ ٱلۡحَيَّ مِنَ ٱلۡمَيِّتِ وَتُخۡرِجُ ٱلۡمَيِّتَ مِنَ ٱلۡحَيِّۖ وَتَرۡزُقُ مَن تَشَآءُ بِغَيۡرِ حِسَابٖ "}, {"aya_id": 321, "coordinates": [[429, 56, 322, 34], [464, 56, 322, 34], [498, 82, 297, 34]], "aya_moshaf": "لَّا يَتَّخِذِ ٱلۡمُؤۡمِنُونَ ٱلۡكَٰفِرِينَ أَوۡلِيَآءَ مِن دُونِ ٱلۡمُؤۡمِنِينَۖ وَمَن يَفۡعَلۡ ذَٰلِكَ فَلَيۡسَ مِنَ ٱللَّهِ فِي شَيۡءٍ إِلَّآ أَن تَتَّقُواْ مِنۡهُمۡ تُقَىٰةٗۗ وَيُحَذِّرُكُمُ ٱللَّهُ نَفۡسَهُۥۗ وَإِلَى ٱللَّهِ ٱلۡمَصِيرُ "}, {"aya_id": 322, "coordinates": [[498, 56, 26, 34], [532, 56, 322, 34], [567, 56, 322, 34]], "aya_moshaf": "قُلۡ إِن تُخۡفُواْ مَا فِي صُدُورِكُمۡ أَوۡ تُبۡدُوهُ يَعۡلَمۡهُ ٱللَّهُۗ وَيَعۡلَمُ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ "}]