const nearbySurasNames = {
    37: 'الصَّافَات',
    38: 'صٓ',
    39: 'الزُّمَر',
    40: 'غَافِر',
};
const choicesObjects = {
    "451": "فكذبوه فانهم لمحضرون",
    "452": "ما لكم كيف تحكمون",
    "454": "اصبر علي ما يقولون واذكر",
    "455": "وما خلقنا السماء والارض وما",
};
const ayas = [{"aya_id": 3971, "coordinates": [[121, 222, 150, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ صٓۚ وَٱلۡقُرۡءَانِ ذِي ٱلذِّكۡرِ "}, {"aya_id": 3972, "coordinates": [[121, 49, 173, 34]], "aya_moshaf": "بَلِ ٱلَّذِينَ كَفَرُواْ فِي عِزَّةٖ وَشِقَاقٖ "}, {"aya_id": 3973, "coordinates": [[156, 93, 279, 34]], "aya_moshaf": "كَمۡ أَهۡلَكۡنَا مِن قَبۡلِهِم مِّن قَرۡنٖ فَنَادَواْ وَّلَاتَ حِينَ مَنَاصٖ "}, {"aya_id": 3974, "coordinates": [[156, 49, 44, 34], [190, 49, 322, 34]], "aya_moshaf": "وَعَجِبُوٓاْ أَن جَآءَهُم مُّنذِرٞ مِّنۡهُمۡۖ وَقَالَ ٱلۡكَٰفِرُونَ هَٰذَا سَٰحِرٞ كَذَّابٌ "}, {"aya_id": 3975, "coordinates": [[224, 108, 264, 34]], "aya_moshaf": "أَجَعَلَ ٱلۡأٓلِهَةَ إِلَٰهٗا وَٰحِدًاۖ إِنَّ هَٰذَا لَشَيۡءٌ عُجَابٞ "}, {"aya_id": 3976, "coordinates": [[224, 49, 59, 34], [259, 49, 322, 34]], "aya_moshaf": "وَٱنطَلَقَ ٱلۡمَلَأُ مِنۡهُمۡ أَنِ ٱمۡشُواْ وَٱصۡبِرُواْ عَلَىٰٓ ءَالِهَتِكُمۡۖ إِنَّ هَٰذَا لَشَيۡءٞ يُرَادُ "}, {"aya_id": 3977, "coordinates": [[293, 93, 279, 34]], "aya_moshaf": "مَا سَمِعۡنَا بِهَٰذَا فِي ٱلۡمِلَّةِ ٱلۡأٓخِرَةِ إِنۡ هَٰذَآ إِلَّا ٱخۡتِلَٰقٌ "}, {"aya_id": 3978, "coordinates": [[293, 49, 44, 34], [327, 49, 322, 34], [362, 344, 28, 34]], "aya_moshaf": "أَءُنزِلَ عَلَيۡهِ ٱلذِّكۡرُ مِنۢ بَيۡنِنَاۚ بَلۡ هُمۡ فِي شَكّٖ مِّن ذِكۡرِيۚ بَل لَّمَّا يَذُوقُواْ عَذَابِ "}, {"aya_id": 3979, "coordinates": [[362, 105, 239, 34]], "aya_moshaf": "أَمۡ عِندَهُمۡ خَزَآئِنُ رَحۡمَةِ رَبِّكَ ٱلۡعَزِيزِ ٱلۡوَهَّابِ "}, {"aya_id": 3980, "coordinates": [[362, 49, 56, 34], [396, 49, 322, 34]], "aya_moshaf": "أَمۡ لَهُم مُّلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَاۖ فَلۡيَرۡتَقُواْ فِي ٱلۡأَسۡبَٰبِ "}, {"aya_id": 3981, "coordinates": [[430, 140, 232, 34]], "aya_moshaf": "جُندٞ مَّا هُنَالِكَ مَهۡزُومٞ مِّنَ ٱلۡأَحۡزَابِ "}, {"aya_id": 3982, "coordinates": [[430, 49, 91, 34], [465, 195, 177, 34]], "aya_moshaf": "كَذَّبَتۡ قَبۡلَهُمۡ قَوۡمُ نُوحٖ وَعَادٞ وَفِرۡعَوۡنُ ذُو ٱلۡأَوۡتَادِ "}, {"aya_id": 3983, "coordinates": [[465, 49, 146, 34], [499, 207, 165, 34]], "aya_moshaf": "وَثَمُودُ وَقَوۡمُ لُوطٖ وَأَصۡحَٰبُ لۡـَٔيۡكَةِۚ أُوْلَٰٓئِكَ ٱلۡأَحۡزَابُ "}, {"aya_id": 3984, "coordinates": [[499, 49, 158, 34], [533, 275, 97, 34]], "aya_moshaf": "إِن كُلٌّ إِلَّا كَذَّبَ ٱلرُّسُلَ فَحَقَّ عِقَابِ "}, {"aya_id": 3985, "coordinates": [[533, 49, 226, 34], [568, 304, 68, 34]], "aya_moshaf": "وَمَا يَنظُرُ هَٰٓؤُلَآءِ إِلَّا صَيۡحَةٗ وَٰحِدَةٗ مَّا لَهَا مِن فَوَاقٖ "}, {"aya_id": 3986, "coordinates": [[568, 49, 255, 34]], "aya_moshaf": "وَقَالُواْ رَبَّنَا عَجِّل لَّنَا قِطَّنَا قَبۡلَ يَوۡمِ ٱلۡحِسَابِ "}]
const ayasRanges = [{"ayas_ids_range": [3971, 3986], "sura_id": 38}];
