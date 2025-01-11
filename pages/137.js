const mainSuraId = 6;
const nearbySurasNames = {
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
};
const choicesObjects = {
    "135": "وهو الذي يتوفاكم بالليل ويعلم",
    "136": "وما علي الذين يتقون من",
    "138": "الذين امنوا ولم يلبسوا ايمانهم",
    "139": "وما قدروا الله حق قدره",
};
const ayas = [{"aya_id": 863, "coordinates": [[87, 49, 322, 34], [121, 185, 187, 34]], "aya_moshaf": "۞ وَإِذۡ قَالَ إِبۡرَٰهِيمُ لِأَبِيهِ ءَازَرَ أَتَتَّخِذُ أَصۡنَامًا ءَالِهَةً إِنِّيٓ أَرَىٰكَ وَقَوۡمَكَ فِي ضَلَٰلٖ مُّبِينٖ "}, {"aya_id": 864, "coordinates": [[121, 49, 136, 34], [156, 49, 322, 34]], "aya_moshaf": "وَكَذَٰلِكَ نُرِيٓ إِبۡرَٰهِيمَ مَلَكُوتَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَلِيَكُونَ مِنَ ٱلۡمُوقِنِينَ "}, {"aya_id": 865, "coordinates": [[190, 49, 322, 34], [224, 230, 142, 34]], "aya_moshaf": "فَلَمَّا جَنَّ عَلَيۡهِ ٱلَّيۡلُ رَءَا كَوۡكَبٗاۖ قَالَ هَٰذَا رَبِّيۖ فَلَمَّآ أَفَلَ قَالَ لَآ أُحِبُّ ٱلۡأٓفِلِينَ "}, {"aya_id": 866, "coordinates": [[224, 49, 181, 34], [259, 49, 322, 34], [293, 297, 75, 34]], "aya_moshaf": "فَلَمَّا رَءَا ٱلۡقَمَرَ بَازِغٗا قَالَ هَٰذَا رَبِّيۖ فَلَمَّآ أَفَلَ قَالَ لَئِن لَّمۡ يَهۡدِنِي رَبِّي لَأَكُونَنَّ مِنَ ٱلۡقَوۡمِ ٱلضَّآلِّينَ "}, {"aya_id": 867, "coordinates": [[293, 49, 248, 34], [327, 51, 321, 34]], "aya_moshaf": "فَلَمَّا رَءَا ٱلشَّمۡسَ بَازِغَةٗ قَالَ هَٰذَا رَبِّي هَٰذَآ أَكۡبَرُۖ فَلَمَّآ أَفَلَتۡ قَالَ يَٰقَوۡمِ إِنِّي بَرِيٓءٞ مِّمَّا تُشۡرِكُونَ "}, {"aya_id": 868, "coordinates": [[327, 49, 2, 34], [362, 49, 322, 34], [396, 159, 213, 34]], "aya_moshaf": "إِنِّي وَجَّهۡتُ وَجۡهِيَ لِلَّذِي فَطَرَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ حَنِيفٗاۖ وَمَآ أَنَا۠ مِنَ ٱلۡمُشۡرِكِينَ "}, {"aya_id": 869, "coordinates": [[396, 49, 110, 34], [430, 49, 322, 34], [465, 49, 322, 34], [499, 265, 107, 34]], "aya_moshaf": "وَحَآجَّهُۥ قَوۡمُهُۥۚ قَالَ أَتُحَٰٓجُّوٓنِّي فِي ٱللَّهِ وَقَدۡ هَدَىٰنِۚ وَلَآ أَخَافُ مَا تُشۡرِكُونَ بِهِۦٓ إِلَّآ أَن يَشَآءَ رَبِّي شَيۡـٔٗاۚ وَسِعَ رَبِّي كُلَّ شَيۡءٍ عِلۡمًاۚ أَفَلَا تَتَذَكَّرُونَ "}, {"aya_id": 870, "coordinates": [[499, 49, 216, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "وَكَيۡفَ أَخَافُ مَآ أَشۡرَكۡتُمۡ وَلَا تَخَافُونَ أَنَّكُمۡ أَشۡرَكۡتُم بِٱللَّهِ مَا لَمۡ يُنَزِّلۡ بِهِۦ عَلَيۡكُمۡ سُلۡطَٰنٗاۚ فَأَيُّ ٱلۡفَرِيقَيۡنِ أَحَقُّ بِٱلۡأَمۡنِۖ إِن كُنتُمۡ تَعۡلَمُونَ "}]