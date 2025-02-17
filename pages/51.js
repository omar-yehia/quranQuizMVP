const nearbySurasNames = {
    2: 'البَقَرَة',
    3: 'آل عِمران',
    4: 'النِّسَاء',
    5: 'المَائدة',
};
const choicesObjects = {
    "49": "وان كنتم علي سفر ولم",
    "50": "الم",
    "52": "الذين يقولون ربنا اننا امنا",
    "53": "الم تر الي الذين اوتوا",
};
const ayas = [{"aya_id": 303, "coordinates": [[86, 53, 322, 34], [120, 145, 230, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ كَفَرُواْ لَن تُغۡنِيَ عَنۡهُمۡ أَمۡوَٰلُهُمۡ وَلَآ أَوۡلَٰدُهُم مِّنَ ٱللَّهِ شَيۡـٔٗاۖ وَأُوْلَٰٓئِكَ هُمۡ وَقُودُ ٱلنَّارِ "}, {"aya_id": 304, "coordinates": [[120, 53, 92, 34], [155, 53, 322, 34], [189, 239, 136, 34]], "aya_moshaf": "كَدَأۡبِ ءَالِ فِرۡعَوۡنَ وَٱلَّذِينَ مِن قَبۡلِهِمۡۚ كَذَّبُواْ بِـَٔايَٰتِنَا فَأَخَذَهُمُ ٱللَّهُ بِذُنُوبِهِمۡۗ وَٱللَّهُ شَدِيدُ ٱلۡعِقَابِ "}, {"aya_id": 305, "coordinates": [[189, 53, 186, 34], [223, 125, 250, 34]], "aya_moshaf": "قُل لِّلَّذِينَ كَفَرُواْ سَتُغۡلَبُونَ وَتُحۡشَرُونَ إِلَىٰ جَهَنَّمَۖ وَبِئۡسَ ٱلۡمِهَادُ "}, {"aya_id": 306, "coordinates": [[223, 53, 72, 34], [258, 53, 322, 34], [292, 53, 322, 34], [326, 53, 322, 34], [361, 293, 82, 34]], "aya_moshaf": "قَدۡ كَانَ لَكُمۡ ءَايَةٞ فِي فِئَتَيۡنِ ٱلۡتَقَتَاۖ فِئَةٞ تُقَٰتِلُ فِي سَبِيلِ ٱللَّهِ وَأُخۡرَىٰ كَافِرَةٞ يَرَوۡنَهُم مِّثۡلَيۡهِمۡ رَأۡيَ ٱلۡعَيۡنِۚ وَٱللَّهُ يُؤَيِّدُ بِنَصۡرِهِۦ مَن يَشَآءُۚ إِنَّ فِي ذَٰلِكَ لَعِبۡرَةٗ لِّأُوْلِي ٱلۡأَبۡصَٰرِ "}, {"aya_id": 307, "coordinates": [[361, 53, 240, 34], [395, 53, 322, 34], [429, 53, 322, 34], [464, 113, 262, 34]], "aya_moshaf": "زُيِّنَ لِلنَّاسِ حُبُّ ٱلشَّهَوَٰتِ مِنَ ٱلنِّسَآءِ وَٱلۡبَنِينَ وَٱلۡقَنَٰطِيرِ ٱلۡمُقَنطَرَةِ مِنَ ٱلذَّهَبِ وَٱلۡفِضَّةِ وَٱلۡخَيۡلِ ٱلۡمُسَوَّمَةِ وَٱلۡأَنۡعَٰمِ وَٱلۡحَرۡثِۗ ذَٰلِكَ مَتَٰعُ ٱلۡحَيَوٰةِ ٱلدُّنۡيَاۖ وَٱللَّهُ عِندَهُۥ حُسۡنُ ٱلۡمَـَٔابِ "}, {"aya_id": 308, "coordinates": [[464, 53, 60, 34], [498, 53, 322, 34], [532, 53, 322, 34], [567, 71, 304, 34]], "aya_moshaf": "۞ قُلۡ أَؤُنَبِّئُكُم بِخَيۡرٖ مِّن ذَٰلِكُمۡۖ لِلَّذِينَ ٱتَّقَوۡاْ عِندَ رَبِّهِمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَا وَأَزۡوَٰجٞ مُّطَهَّرَةٞ وَرِضۡوَٰنٞ مِّنَ ٱللَّهِۗ وَٱللَّهُ بَصِيرُۢ بِٱلۡعِبَادِ "}]
const ayasRanges = [{"ayas_ids_range": [303, 308], "sura_id": 3}];
