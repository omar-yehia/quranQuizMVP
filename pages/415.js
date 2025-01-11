const mainSuraId = 32;
const nearbySurasNames = {
    31: 'لُقمَان',
    32: 'السَّجدة',
    33: 'الأحزَاب',
    34: 'سَبإ',
};
const choicesObjects = {
    "413": "الم تروا ان الله سخر",
    "414": "الم تر ان الله يولج",
    "416": "ولو تري اذ المجرمون ناكسوا",
    "417": "ولنذيقنهم من العذاب الادني دون",
};
const ayas = [{"aya_id": 3504, "coordinates": [[121, 312, 56, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ الٓمٓ "}, {"aya_id": 3505, "coordinates": [[121, 46, 266, 34], [156, 334, 34, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ تَنزِيلُ ٱلۡكِتَٰبِ لَا رَيۡبَ فِيهِ مِن رَّبِّ ٱلۡعَٰلَمِينَ "}, {"aya_id": 3506, "coordinates": [[156, 46, 288, 34], [190, 79, 289, 34]], "aya_moshaf": "أَمۡ يَقُولُونَ ٱفۡتَرَىٰهُۚ بَلۡ هُوَ ٱلۡحَقُّ مِن رَّبِّكَ لِتُنذِرَ قَوۡمٗا مَّآ أَتَىٰهُم مِّن نَّذِيرٖ مِّن قَبۡلِكَ لَعَلَّهُمۡ يَهۡتَدُونَ "}, {"aya_id": 3507, "coordinates": [[190, 46, 33, 34], [224, 46, 322, 34], [259, 46, 322, 34], [293, 290, 78, 34]], "aya_moshaf": "ٱللَّهُ ٱلَّذِي خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَمَا بَيۡنَهُمَا فِي سِتَّةِ أَيَّامٖ ثُمَّ ٱسۡتَوَىٰ عَلَى ٱلۡعَرۡشِۖ مَا لَكُم مِّن دُونِهِۦ مِن وَلِيّٖ وَلَا شَفِيعٍۚ أَفَلَا تَتَذَكَّرُونَ "}, {"aya_id": 3508, "coordinates": [[293, 46, 244, 34], [327, 86, 282, 34]], "aya_moshaf": "يُدَبِّرُ ٱلۡأَمۡرَ مِنَ ٱلسَّمَآءِ إِلَى ٱلۡأَرۡضِ ثُمَّ يَعۡرُجُ إِلَيۡهِ فِي يَوۡمٖ كَانَ مِقۡدَارُهُۥٓ أَلۡفَ سَنَةٖ مِّمَّا تَعُدُّونَ "}, {"aya_id": 3509, "coordinates": [[327, 46, 40, 34], [362, 125, 243, 34]], "aya_moshaf": "ذَٰلِكَ عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِ ٱلۡعَزِيزُ ٱلرَّحِيمُ "}, {"aya_id": 3510, "coordinates": [[362, 46, 79, 34], [396, 110, 258, 34]], "aya_moshaf": "ٱلَّذِيٓ أَحۡسَنَ كُلَّ شَيۡءٍ خَلَقَهُۥۖ وَبَدَأَ خَلۡقَ ٱلۡإِنسَٰنِ مِن طِينٖ "}, {"aya_id": 3511, "coordinates": [[396, 46, 64, 34], [430, 182, 186, 34]], "aya_moshaf": "ثُمَّ جَعَلَ نَسۡلَهُۥ مِن سُلَٰلَةٖ مِّن مَّآءٖ مَّهِينٖ "}, {"aya_id": 3512, "coordinates": [[430, 46, 136, 34], [465, 46, 322, 34], [499, 259, 109, 34]], "aya_moshaf": "ثُمَّ سَوَّىٰهُ وَنَفَخَ فِيهِ مِن رُّوحِهِۦۖ وَجَعَلَ لَكُمُ ٱلسَّمۡعَ وَٱلۡأَبۡصَٰرَ وَٱلۡأَفۡـِٔدَةَۚ قَلِيلٗا مَّا تَشۡكُرُونَ "}, {"aya_id": 3513, "coordinates": [[499, 46, 213, 34], [533, 144, 224, 34]], "aya_moshaf": "وَقَالُوٓاْ أَءِذَا ضَلَلۡنَا فِي ٱلۡأَرۡضِ أَءِنَّا لَفِي خَلۡقٖ جَدِيدِۭۚ بَلۡ هُم بِلِقَآءِ رَبِّهِمۡ كَٰفِرُونَ "}, {"aya_id": 3514, "coordinates": [[533, 46, 98, 34], [568, 46, 322, 34]], "aya_moshaf": "۞ قُلۡ يَتَوَفَّىٰكُم مَّلَكُ ٱلۡمَوۡتِ ٱلَّذِي وُكِّلَ بِكُمۡ ثُمَّ إِلَىٰ رَبِّكُمۡ تُرۡجَعُونَ "}]