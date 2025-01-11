const mainSuraId = 53;
const nearbySurasNames = {
    52: 'الطُّور',
    53: 'النَّجم',
    54: 'القَمَر',
    55: 'الرَّحمٰن',
};
const choicesObjects = {
    "524": "افسحر هذا ام انتم لا",
    "525": "ام تامرهم احلامهم بهذا ام",
    "527": "ان الذين لا يؤمنون بالاخره",
    "528": "وانه خلق الزوجين الذكر والانثي",
};
const ayas = [{"aya_id": 4785, "coordinates": [[125, 308, 104, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَٱلنَّجۡمِ إِذَا هَوَىٰ "}, {"aya_id": 4786, "coordinates": [[125, 147, 161, 34]], "aya_moshaf": "مَا ضَلَّ صَاحِبُكُمۡ وَمَا غَوَىٰ "}, {"aya_id": 4787, "coordinates": [[125, 89, 58, 34], [160, 338, 74, 34]], "aya_moshaf": "وَمَا يَنطِقُ عَنِ ٱلۡهَوَىٰٓ "}, {"aya_id": 4788, "coordinates": [[160, 215, 123, 34]], "aya_moshaf": "إِنۡ هُوَ إِلَّا وَحۡيٞ يُوحَىٰ "}, {"aya_id": 4789, "coordinates": [[160, 89, 126, 34]], "aya_moshaf": "عَلَّمَهُۥ شَدِيدُ ٱلۡقُوَىٰ "}, {"aya_id": 4790, "coordinates": [[194, 307, 105, 34]], "aya_moshaf": "ذُو مِرَّةٖ فَٱسۡتَوَىٰ "}, {"aya_id": 4791, "coordinates": [[194, 185, 122, 34]], "aya_moshaf": "وَهُوَ بِٱلۡأُفُقِ ٱلۡأَعۡلَىٰ "}, {"aya_id": 4792, "coordinates": [[194, 89, 96, 34]], "aya_moshaf": "ثُمَّ دَنَا فَتَدَلَّىٰ "}, {"aya_id": 4793, "coordinates": [[228, 256, 156, 34]], "aya_moshaf": "فَكَانَ قَابَ قَوۡسَيۡنِ أَوۡ أَدۡنَىٰ "}, {"aya_id": 4794, "coordinates": [[228, 89, 167, 34]], "aya_moshaf": "فَأَوۡحَىٰٓ إِلَىٰ عَبۡدِهِۦ مَآ أَوۡحَىٰ "}, {"aya_id": 4795, "coordinates": [[263, 276, 136, 34]], "aya_moshaf": "مَا كَذَبَ ٱلۡفُؤَادُ مَا رَأَىٰٓ "}, {"aya_id": 4796, "coordinates": [[263, 143, 133, 34]], "aya_moshaf": "أَفَتُمَٰرُونَهُۥ عَلَىٰ مَا يَرَىٰ "}, {"aya_id": 4797, "coordinates": [[263, 89, 54, 34], [297, 331, 81, 34]], "aya_moshaf": "وَلَقَدۡ رَءَاهُ نَزۡلَةً أُخۡرَىٰ "}, {"aya_id": 4798, "coordinates": [[297, 209, 122, 34]], "aya_moshaf": "عِندَ سِدۡرَةِ ٱلۡمُنتَهَىٰ "}, {"aya_id": 4799, "coordinates": [[297, 89, 120, 34]], "aya_moshaf": "عِندَهَا جَنَّةُ ٱلۡمَأۡوَىٰٓ "}, {"aya_id": 4800, "coordinates": [[331, 264, 148, 34]], "aya_moshaf": "إِذۡ يَغۡشَى ٱلسِّدۡرَةَ مَا يَغۡشَىٰ "}, {"aya_id": 4801, "coordinates": [[331, 135, 129, 34]], "aya_moshaf": "مَا زَاغَ ٱلۡبَصَرُ وَمَا طَغَىٰ "}, {"aya_id": 4802, "coordinates": [[331, 89, 46, 34], [366, 275, 137, 34]], "aya_moshaf": "لَقَدۡ رَأَىٰ مِنۡ ءَايَٰتِ رَبِّهِ ٱلۡكُبۡرَىٰٓ "}, {"aya_id": 4803, "coordinates": [[366, 134, 141, 34]], "aya_moshaf": "أَفَرَءَيۡتُمُ ٱللَّٰتَ وَٱلۡعُزَّىٰ "}, {"aya_id": 4804, "coordinates": [[366, 89, 45, 34], [400, 302, 110, 34]], "aya_moshaf": "وَمَنَوٰةَ ٱلثَّالِثَةَ ٱلۡأُخۡرَىٰٓ "}, {"aya_id": 4805, "coordinates": [[400, 158, 144, 34]], "aya_moshaf": "أَلَكُمُ ٱلذَّكَرُ وَلَهُ ٱلۡأُنثَىٰ "}, {"aya_id": 4806, "coordinates": [[400, 89, 69, 34], [434, 354, 58, 34]], "aya_moshaf": "تِلۡكَ إِذٗا قِسۡمَةٞ ضِيزَىٰٓ "}, {"aya_id": 4807, "coordinates": [[434, 89, 265, 34], [469, 89, 322, 34], [503, 236, 176, 34]], "aya_moshaf": "إِنۡ هِيَ إِلَّآ أَسۡمَآءٞ سَمَّيۡتُمُوهَآ أَنتُمۡ وَءَابَآؤُكُم مَّآ أَنزَلَ ٱللَّهُ بِهَا مِن سُلۡطَٰنٍۚ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَمَا تَهۡوَى ٱلۡأَنفُسُۖ وَلَقَدۡ جَآءَهُم مِّن رَّبِّهِمُ ٱلۡهُدَىٰٓ "}, {"aya_id": 4808, "coordinates": [[503, 119, 117, 34]], "aya_moshaf": "أَمۡ لِلۡإِنسَٰنِ مَا تَمَنَّىٰ "}, {"aya_id": 4809, "coordinates": [[503, 89, 30, 34], [537, 302, 110, 34]], "aya_moshaf": "فَلِلَّهِ ٱلۡأٓخِرَةُ وَٱلۡأُولَىٰ "}, {"aya_id": 4810, "coordinates": [[537, 89, 213, 34], [572, 89, 322, 34]], "aya_moshaf": "۞ وَكَم مِّن مَّلَكٖ فِي ٱلسَّمَٰوَٰتِ لَا تُغۡنِي شَفَٰعَتُهُمۡ شَيۡـًٔا إِلَّا مِنۢ بَعۡدِ أَن يَأۡذَنَ ٱللَّهُ لِمَن يَشَآءُ وَيَرۡضَىٰٓ "}]