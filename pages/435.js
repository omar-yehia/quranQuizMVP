const mainSuraId = 35;
const nearbySurasNames = {
    34: 'سَبإ',
    35: 'فَاطِر',
    36: 'يسٓ',
    37: 'الصَّافَات',
};
const choicesObjects = {
    "433": "ويوم يحشرهم جميعا ثم يقول",
    "434": "قل جاء الحق وما يبدئ",
    "436": "وما يستوي البحران هذا عذب",
    "437": "وما يستوي الاعمي والبصير",
};
const ayas = [{"aya_id": 3664, "coordinates": [[87, 54, 322, 34], [121, 352, 25, 34]], "aya_moshaf": "وَإِن يُكَذِّبُوكَ فَقَدۡ كُذِّبَتۡ رُسُلٞ مِّن قَبۡلِكَۚ وَإِلَى ٱللَّهِ تُرۡجَعُ ٱلۡأُمُورُ "}, {"aya_id": 3665, "coordinates": [[121, 54, 298, 34], [156, 225, 152, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّ وَعۡدَ ٱللَّهِ حَقّٞۖ فَلَا تَغُرَّنَّكُمُ ٱلۡحَيَوٰةُ ٱلدُّنۡيَا وَلَا يَغُرَّنَّكُم بِٱللَّهِ ٱلۡغَرُورُ "}, {"aya_id": 3666, "coordinates": [[156, 54, 171, 34], [190, 86, 291, 34]], "aya_moshaf": "إِنَّ ٱلشَّيۡطَٰنَ لَكُمۡ عَدُوّٞ فَٱتَّخِذُوهُ عَدُوًّاۚ إِنَّمَا يَدۡعُواْ حِزۡبَهُۥ لِيَكُونُواْ مِنۡ أَصۡحَٰبِ ٱلسَّعِيرِ "}, {"aya_id": 3667, "coordinates": [[190, 54, 32, 34], [224, 54, 322, 34], [259, 257, 120, 34]], "aya_moshaf": "ٱلَّذِينَ كَفَرُواْ لَهُمۡ عَذَابٞ شَدِيدٞۖ وَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ لَهُم مَّغۡفِرَةٞ وَأَجۡرٞ كَبِيرٌ "}, {"aya_id": 3668, "coordinates": [[259, 54, 203, 34], [293, 54, 322, 34], [327, 148, 229, 34]], "aya_moshaf": "أَفَمَن زُيِّنَ لَهُۥ سُوٓءُ عَمَلِهِۦ فَرَءَاهُ حَسَنٗاۖ فَإِنَّ ٱللَّهَ يُضِلُّ مَن يَشَآءُ وَيَهۡدِي مَن يَشَآءُۖ فَلَا تَذۡهَبۡ نَفۡسُكَ عَلَيۡهِمۡ حَسَرَٰتٍۚ إِنَّ ٱللَّهَ عَلِيمُۢ بِمَا يَصۡنَعُونَ "}, {"aya_id": 3669, "coordinates": [[327, 54, 94, 34], [362, 54, 322, 34], [396, 248, 129, 34]], "aya_moshaf": "وَٱللَّهُ ٱلَّذِيٓ أَرۡسَلَ ٱلرِّيَٰحَ فَتُثِيرُ سَحَابٗا فَسُقۡنَٰهُ إِلَىٰ بَلَدٖ مَّيِّتٖ فَأَحۡيَيۡنَا بِهِ ٱلۡأَرۡضَ بَعۡدَ مَوۡتِهَاۚ كَذَٰلِكَ ٱلنُّشُورُ "}, {"aya_id": 3670, "coordinates": [[396, 54, 194, 34], [430, 54, 322, 34], [465, 54, 322, 34], [499, 354, 23, 34]], "aya_moshaf": "مَن كَانَ يُرِيدُ ٱلۡعِزَّةَ فَلِلَّهِ ٱلۡعِزَّةُ جَمِيعًاۚ إِلَيۡهِ يَصۡعَدُ ٱلۡكَلِمُ ٱلطَّيِّبُ وَٱلۡعَمَلُ ٱلصَّٰلِحُ يَرۡفَعُهُۥۚ وَٱلَّذِينَ يَمۡكُرُونَ ٱلسَّيِّـَٔاتِ لَهُمۡ عَذَابٞ شَدِيدٞۖ وَمَكۡرُ أُوْلَٰٓئِكَ هُوَ يَبُورُ "}, {"aya_id": 3671, "coordinates": [[499, 54, 300, 34], [533, 54, 322, 34], [568, 54, 322, 34]], "aya_moshaf": "وَٱللَّهُ خَلَقَكُم مِّن تُرَابٖ ثُمَّ مِن نُّطۡفَةٖ ثُمَّ جَعَلَكُمۡ أَزۡوَٰجٗاۚ وَمَا تَحۡمِلُ مِنۡ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلۡمِهِۦۚ وَمَا يُعَمَّرُ مِن مُّعَمَّرٖ وَلَا يُنقَصُ مِنۡ عُمُرِهِۦٓ إِلَّا فِي كِتَٰبٍۚ إِنَّ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرٞ "}]