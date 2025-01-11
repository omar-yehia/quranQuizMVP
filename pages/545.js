const mainSuraId = 58;
const nearbySurasNames = {
    57: 'الحدِيد',
    58: 'المُجَادلة',
    59: 'الحَشر',
    60: 'المُمتَحنَة',
};
const choicesObjects = {
    "543": "الم تر ان الله يعلم",
    "544": "ياايها الذين امنوا اذا ناجيتم",
    "546": "ذلك بانهم شاقوا الله ورسوله",
    "547": "والذين جاءوا من بعدهم يقولون",
};
const ayas = [{"aya_id": 5126, "coordinates": [[83, 44, 322, 34], [117, 44, 322, 34], [152, 44, 322, 34], [186, 44, 322, 34], [220, 44, 322, 34], [255, 44, 322, 34]], "aya_moshaf": "لَّا تَجِدُ قَوۡمٗا يُؤۡمِنُونَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِ يُوَآدُّونَ مَنۡ حَآدَّ ٱللَّهَ وَرَسُولَهُۥ وَلَوۡ كَانُوٓاْ ءَابَآءَهُمۡ أَوۡ أَبۡنَآءَهُمۡ أَوۡ إِخۡوَٰنَهُمۡ أَوۡ عَشِيرَتَهُمۡۚ أُوْلَٰٓئِكَ كَتَبَ فِي قُلُوبِهِمُ ٱلۡإِيمَٰنَ وَأَيَّدَهُم بِرُوحٖ مِّنۡهُۖ وَيُدۡخِلُهُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَاۚ رَضِيَ ٱللَّهُ عَنۡهُمۡ وَرَضُواْ عَنۡهُۚ أُوْلَٰٓئِكَ حِزۡبُ ٱللَّهِۚ أَلَآ إِنَّ حِزۡبَ ٱللَّهِ هُمُ ٱلۡمُفۡلِحُونَ "}, {"aya_id": 5127, "coordinates": [[358, 44, 322, 34], [392, 341, 26, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ سَبَّحَ لِلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 5128, "coordinates": [[392, 44, 297, 34], [426, 44, 322, 34], [461, 44, 322, 34], [495, 44, 322, 34], [529, 202, 165, 34]], "aya_moshaf": "هُوَ ٱلَّذِيٓ أَخۡرَجَ ٱلَّذِينَ كَفَرُواْ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ مِن دِيَٰرِهِمۡ لِأَوَّلِ ٱلۡحَشۡرِۚ مَا ظَنَنتُمۡ أَن يَخۡرُجُواْۖ وَظَنُّوٓاْ أَنَّهُم مَّانِعَتُهُمۡ حُصُونُهُم مِّنَ ٱللَّهِ فَأَتَىٰهُمُ ٱللَّهُ مِنۡ حَيۡثُ لَمۡ يَحۡتَسِبُواْۖ وَقَذَفَ فِي قُلُوبِهِمُ ٱلرُّعۡبَۚ يُخۡرِبُونَ بُيُوتَهُم بِأَيۡدِيهِمۡ وَأَيۡدِي ٱلۡمُؤۡمِنِينَ فَٱعۡتَبِرُواْ يَٰٓأُوْلِي ٱلۡأَبۡصَٰرِ "}, {"aya_id": 5129, "coordinates": [[529, 44, 158, 34], [564, 44, 322, 34]], "aya_moshaf": "وَلَوۡلَآ أَن كَتَبَ ٱللَّهُ عَلَيۡهِمُ ٱلۡجَلَآءَ لَعَذَّبَهُمۡ فِي ٱلدُّنۡيَاۖ وَلَهُمۡ فِي ٱلۡأٓخِرَةِ عَذَابُ ٱلنَّارِ "}]