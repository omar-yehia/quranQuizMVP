const mainSuraId = 7;
const nearbySurasNames = {
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
    9: 'التوبَة',
};
const choicesObjects = {
    "162": "قال الملا الذين استكبروا من",
    "163": "ولو ان اهل القري امنوا",
    "165": "قالوا امنا برب العالمين",
    "166": "فاذا جاءتهم الحسنه قالوا لنا",
};
const ayas = [{"aya_id": 1059, "coordinates": [[83, 89, 322, 34], [117, 161, 251, 34]], "aya_moshaf": "حَقِيقٌ عَلَىٰٓ أَن لَّآ أَقُولَ عَلَى ٱللَّهِ إِلَّا ٱلۡحَقَّۚ قَدۡ جِئۡتُكُم بِبَيِّنَةٖ مِّن رَّبِّكُمۡ فَأَرۡسِلۡ مَعِيَ بَنِيٓ إِسۡرَٰٓءِيلَ "}, {"aya_id": 1060, "coordinates": [[117, 89, 72, 34], [152, 143, 269, 34]], "aya_moshaf": "قَالَ إِن كُنتَ جِئۡتَ بِـَٔايَةٖ فَأۡتِ بِهَآ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ "}, {"aya_id": 1061, "coordinates": [[152, 89, 54, 34], [186, 232, 180, 34]], "aya_moshaf": "فَأَلۡقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعۡبَانٞ مُّبِينٞ "}, {"aya_id": 1062, "coordinates": [[186, 89, 143, 34], [220, 333, 79, 34]], "aya_moshaf": "وَنَزَعَ يَدَهُۥ فَإِذَا هِيَ بَيۡضَآءُ لِلنَّٰظِرِينَ "}, {"aya_id": 1063, "coordinates": [[220, 89, 244, 34], [255, 361, 51, 34]], "aya_moshaf": "قَالَ ٱلۡمَلَأُ مِن قَوۡمِ فِرۡعَوۡنَ إِنَّ هَٰذَا لَسَٰحِرٌ عَلِيمٞ "}, {"aya_id": 1064, "coordinates": [[255, 89, 272, 34]], "aya_moshaf": "يُرِيدُ أَن يُخۡرِجَكُم مِّنۡ أَرۡضِكُمۡۖ فَمَاذَا تَأۡمُرُونَ "}, {"aya_id": 1065, "coordinates": [[289, 138, 274, 34]], "aya_moshaf": "قَالُوٓاْ أَرۡجِهۡ وَأَخَاهُ وَأَرۡسِلۡ فِي ٱلۡمَدَآئِنِ حَٰشِرِينَ "}, {"aya_id": 1066, "coordinates": [[289, 89, 49, 34], [323, 287, 125, 34]], "aya_moshaf": "يَأۡتُوكَ بِكُلِّ سَٰحِرٍ عَلِيمٖ "}, {"aya_id": 1067, "coordinates": [[323, 89, 198, 34], [358, 186, 226, 34]], "aya_moshaf": "وَجَآءَ ٱلسَّحَرَةُ فِرۡعَوۡنَ قَالُوٓاْ إِنَّ لَنَا لَأَجۡرًا إِن كُنَّا نَحۡنُ ٱلۡغَٰلِبِينَ "}, {"aya_id": 1068, "coordinates": [[358, 89, 97, 34], [392, 299, 113, 34]], "aya_moshaf": "قَالَ نَعَمۡ وَإِنَّكُمۡ لَمِنَ ٱلۡمُقَرَّبِينَ "}, {"aya_id": 1069, "coordinates": [[392, 89, 210, 34], [426, 275, 137, 34]], "aya_moshaf": "قَالُواْ يَٰمُوسَىٰٓ إِمَّآ أَن تُلۡقِيَ وَإِمَّآ أَن نَّكُونَ نَحۡنُ ٱلۡمُلۡقِينَ "}, {"aya_id": 1070, "coordinates": [[426, 89, 186, 34], [461, 89, 322, 34]], "aya_moshaf": "قَالَ أَلۡقُواْۖ فَلَمَّآ أَلۡقَوۡاْ سَحَرُوٓاْ أَعۡيُنَ ٱلنَّاسِ وَٱسۡتَرۡهَبُوهُمۡ وَجَآءُو بِسِحۡرٍ عَظِيمٖ "}, {"aya_id": 1071, "coordinates": [[495, 89, 322, 34], [529, 343, 69, 34]], "aya_moshaf": "۞ وَأَوۡحَيۡنَآ إِلَىٰ مُوسَىٰٓ أَنۡ أَلۡقِ عَصَاكَۖ فَإِذَا هِيَ تَلۡقَفُ مَا يَأۡفِكُونَ "}, {"aya_id": 1072, "coordinates": [[529, 142, 201, 34]], "aya_moshaf": "فَوَقَعَ ٱلۡحَقُّ وَبَطَلَ مَا كَانُواْ يَعۡمَلُونَ "}, {"aya_id": 1073, "coordinates": [[529, 89, 53, 34], [564, 258, 154, 34]], "aya_moshaf": "فَغُلِبُواْ هُنَالِكَ وَٱنقَلَبُواْ صَٰغِرِينَ "}, {"aya_id": 1074, "coordinates": [[564, 89, 169, 34]], "aya_moshaf": "وَأُلۡقِيَ ٱلسَّحَرَةُ سَٰجِدِينَ "}]