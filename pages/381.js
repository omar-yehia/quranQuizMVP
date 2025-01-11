const mainSuraId = 27;
const nearbySurasNames = {
    26: 'الشعراء',
    27: 'النَّمل',
    28: 'القَصَص',
    29: 'العَنكبُوت',
};
const choicesObjects = {
    "379": "اني وجدت امراه تملكهم واوتيت",
    "380": "فلما جاء سليمان قال اتمدونن",
    "382": "فما كان جواب قومه الا",
    "383": "امن يبدا الخلق ثم يعيده",
};
const ayas = [{"aya_id": 3204, "coordinates": [[87, 49, 322, 34], [121, 197, 175, 34]], "aya_moshaf": "وَلَقَدۡ أَرۡسَلۡنَآ إِلَىٰ ثَمُودَ أَخَاهُمۡ صَٰلِحًا أَنِ ٱعۡبُدُواْ ٱللَّهَ فَإِذَا هُمۡ فَرِيقَانِ يَخۡتَصِمُونَ "}, {"aya_id": 3205, "coordinates": [[121, 49, 148, 34], [156, 49, 322, 34], [190, 280, 92, 34]], "aya_moshaf": "قَالَ يَٰقَوۡمِ لِمَ تَسۡتَعۡجِلُونَ بِٱلسَّيِّئَةِ قَبۡلَ ٱلۡحَسَنَةِۖ لَوۡلَا تَسۡتَغۡفِرُونَ ٱللَّهَ لَعَلَّكُمۡ تُرۡحَمُونَ "}, {"aya_id": 3206, "coordinates": [[190, 49, 231, 34], [224, 185, 187, 34]], "aya_moshaf": "قَالُواْ ٱطَّيَّرۡنَا بِكَ وَبِمَن مَّعَكَۚ قَالَ طَٰٓئِرُكُمۡ عِندَ ٱللَّهِۖ بَلۡ أَنتُمۡ قَوۡمٞ تُفۡتَنُونَ "}, {"aya_id": 3207, "coordinates": [[224, 49, 136, 34], [259, 85, 287, 34]], "aya_moshaf": "وَكَانَ فِي ٱلۡمَدِينَةِ تِسۡعَةُ رَهۡطٖ يُفۡسِدُونَ فِي ٱلۡأَرۡضِ وَلَا يُصۡلِحُونَ "}, {"aya_id": 3208, "coordinates": [[259, 49, 36, 34], [293, 49, 322, 34], [327, 145, 227, 34]], "aya_moshaf": "قَالُواْ تَقَاسَمُواْ بِٱللَّهِ لَنُبَيِّتَنَّهُۥ وَأَهۡلَهُۥ ثُمَّ لَنَقُولَنَّ لِوَلِيِّهِۦ مَا شَهِدۡنَا مَهۡلِكَ أَهۡلِهِۦ وَإِنَّا لَصَٰدِقُونَ "}, {"aya_id": 3209, "coordinates": [[327, 49, 96, 34], [362, 137, 235, 34]], "aya_moshaf": "وَمَكَرُواْ مَكۡرٗا وَمَكَرۡنَا مَكۡرٗا وَهُمۡ لَا يَشۡعُرُونَ "}, {"aya_id": 3210, "coordinates": [[362, 49, 88, 34], [396, 49, 322, 34], [430, 345, 27, 34]], "aya_moshaf": "فَٱنظُرۡ كَيۡفَ كَانَ عَٰقِبَةُ مَكۡرِهِمۡ أَنَّا دَمَّرۡنَٰهُمۡ وَقَوۡمَهُمۡ أَجۡمَعِينَ "}, {"aya_id": 3211, "coordinates": [[430, 49, 296, 34], [465, 201, 171, 34]], "aya_moshaf": "فَتِلۡكَ بُيُوتُهُمۡ خَاوِيَةَۢ بِمَا ظَلَمُوٓاْۚ إِنَّ فِي ذَٰلِكَ لَأٓيَةٗ لِّقَوۡمٖ يَعۡلَمُونَ "}, {"aya_id": 3212, "coordinates": [[465, 49, 152, 34], [499, 230, 142, 34]], "aya_moshaf": "وَأَنجَيۡنَا ٱلَّذِينَ ءَامَنُواْ وَكَانُواْ يَتَّقُونَ "}, {"aya_id": 3213, "coordinates": [[499, 49, 181, 34], [533, 128, 244, 34]], "aya_moshaf": "وَلُوطًا إِذۡ قَالَ لِقَوۡمِهِۦٓ أَتَأۡتُونَ ٱلۡفَٰحِشَةَ وَأَنتُمۡ تُبۡصِرُونَ "}, {"aya_id": 3214, "coordinates": [[533, 49, 79, 34], [568, 49, 322, 34]], "aya_moshaf": "أَئِنَّكُمۡ لَتَأۡتُونَ ٱلرِّجَالَ شَهۡوَةٗ مِّن دُونِ ٱلنِّسَآءِۚ بَلۡ أَنتُمۡ قَوۡمٞ تَجۡهَلُونَ "}]