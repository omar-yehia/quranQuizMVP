const nearbySurasNames = {
    10: 'يُونس',
    11: 'هُود',
    12: 'يُوسُف',
    13: 'الرَّعد',
};
const choicesObjects = {
    "225": "وياقوم لا اسالكم عليه مالا",
    "226": "ويصنع الفلك وكلما مر عليه",
    "228": "ان نقول الا اعتراك بعض",
    "229": "قال ياقوم ارايتم ان كنت",
};
const ayas = [{"aya_id": 1519, "coordinates": [[91, 52, 322, 34], [125, 52, 322, 34]], "aya_moshaf": "قَالَ يَٰنُوحُ إِنَّهُۥ لَيۡسَ مِنۡ أَهۡلِكَۖ إِنَّهُۥ عَمَلٌ غَيۡرُ صَٰلِحٖۖ فَلَا تَسۡـَٔلۡنِ مَا لَيۡسَ لَكَ بِهِۦ عِلۡمٌۖ إِنِّيٓ أَعِظُكَ أَن تَكُونَ مِنَ ٱلۡجَٰهِلِينَ "}, {"aya_id": 1520, "coordinates": [[160, 52, 322, 34], [194, 112, 263, 34]], "aya_moshaf": "قَالَ رَبِّ إِنِّيٓ أَعُوذُ بِكَ أَنۡ أَسۡـَٔلَكَ مَا لَيۡسَ لِي بِهِۦ عِلۡمٞۖ وَإِلَّا تَغۡفِرۡ لِي وَتَرۡحَمۡنِيٓ أَكُن مِّنَ ٱلۡخَٰسِرِينَ "}, {"aya_id": 1521, "coordinates": [[194, 52, 60, 34], [228, 52, 322, 34], [263, 95, 280, 34]], "aya_moshaf": "قِيلَ يَٰنُوحُ ٱهۡبِطۡ بِسَلَٰمٖ مِّنَّا وَبَرَكَٰتٍ عَلَيۡكَ وَعَلَىٰٓ أُمَمٖ مِّمَّن مَّعَكَۚ وَأُمَمٞ سَنُمَتِّعُهُمۡ ثُمَّ يَمَسُّهُم مِّنَّا عَذَابٌ أَلِيمٞ "}, {"aya_id": 1522, "coordinates": [[263, 52, 43, 34], [297, 52, 322, 34], [331, 111, 264, 34]], "aya_moshaf": "تِلۡكَ مِنۡ أَنۢبَآءِ ٱلۡغَيۡبِ نُوحِيهَآ إِلَيۡكَۖ مَا كُنتَ تَعۡلَمُهَآ أَنتَ وَلَا قَوۡمُكَ مِن قَبۡلِ هَٰذَاۖ فَٱصۡبِرۡۖ إِنَّ ٱلۡعَٰقِبَةَ لِلۡمُتَّقِينَ "}, {"aya_id": 1523, "coordinates": [[331, 52, 59, 34], [366, 52, 322, 34], [400, 180, 195, 34]], "aya_moshaf": "وَإِلَىٰ عَادٍ أَخَاهُمۡ هُودٗاۚ قَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥٓۖ إِنۡ أَنتُمۡ إِلَّا مُفۡتَرُونَ "}, {"aya_id": 1524, "coordinates": [[400, 52, 128, 34], [434, 52, 322, 34]], "aya_moshaf": "يَٰقَوۡمِ لَآ أَسۡـَٔلُكُمۡ عَلَيۡهِ أَجۡرًاۖ إِنۡ أَجۡرِيَ إِلَّا عَلَى ٱلَّذِي فَطَرَنِيٓۚ أَفَلَا تَعۡقِلُونَ "}, {"aya_id": 1525, "coordinates": [[469, 52, 322, 34], [503, 52, 322, 34], [537, 284, 91, 34]], "aya_moshaf": "وَيَٰقَوۡمِ ٱسۡتَغۡفِرُواْ رَبَّكُمۡ ثُمَّ تُوبُوٓاْ إِلَيۡهِ يُرۡسِلِ ٱلسَّمَآءَ عَلَيۡكُم مِّدۡرَارٗا وَيَزِدۡكُمۡ قُوَّةً إِلَىٰ قُوَّتِكُمۡ وَلَا تَتَوَلَّوۡاْ مُجۡرِمِينَ "}, {"aya_id": 1526, "coordinates": [[537, 52, 232, 34], [572, 62, 313, 34]], "aya_moshaf": "قَالُواْ يَٰهُودُ مَا جِئۡتَنَا بِبَيِّنَةٖ وَمَا نَحۡنُ بِتَارِكِيٓ ءَالِهَتِنَا عَن قَوۡلِكَ وَمَا نَحۡنُ لَكَ بِمُؤۡمِنِينَ "}]
const ayasRanges = [{"ayas_ids_range": [1519, 1526], "sura_id": 11}];
