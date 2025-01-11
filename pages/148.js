const mainSuraId = 6;
const nearbySurasNames = {
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
    8: 'الأنفَال',
};
const choicesObjects = {
    "146": "وقالوا هذه انعام وحرث حجر",
    "147": "ثمانيه ازواج من الضان اثنين",
    "149": "ولا تقربوا مال اليتيم الا",
    "150": "هل ينظرون الا ان تاتيهم",
};
const ayas = [{"aya_id": 936, "coordinates": [[81, 83, 322, 34], [115, 202, 204, 34]], "aya_moshaf": "فَإِن كَذَّبُوكَ فَقُل رَّبُّكُمۡ ذُو رَحۡمَةٖ وَٰسِعَةٖ وَلَا يُرَدُّ بَأۡسُهُۥ عَنِ ٱلۡقَوۡمِ ٱلۡمُجۡرِمِينَ "}, {"aya_id": 937, "coordinates": [[115, 83, 119, 34], [150, 83, 322, 34], [184, 83, 322, 34], [218, 83, 322, 34], [253, 217, 189, 34]], "aya_moshaf": "سَيَقُولُ ٱلَّذِينَ أَشۡرَكُواْ لَوۡ شَآءَ ٱللَّهُ مَآ أَشۡرَكۡنَا وَلَآ ءَابَآؤُنَا وَلَا حَرَّمۡنَا مِن شَيۡءٖۚ كَذَٰلِكَ كَذَّبَ ٱلَّذِينَ مِن قَبۡلِهِمۡ حَتَّىٰ ذَاقُواْ بَأۡسَنَاۗ قُلۡ هَلۡ عِندَكُم مِّنۡ عِلۡمٖ فَتُخۡرِجُوهُ لَنَآۖ إِن تَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَإِنۡ أَنتُمۡ إِلَّا تَخۡرُصُونَ "}, {"aya_id": 938, "coordinates": [[253, 83, 134, 34], [287, 230, 176, 34]], "aya_moshaf": "قُلۡ فَلِلَّهِ ٱلۡحُجَّةُ ٱلۡبَٰلِغَةُۖ فَلَوۡ شَآءَ لَهَدَىٰكُمۡ أَجۡمَعِينَ "}, {"aya_id": 939, "coordinates": [[287, 83, 147, 34], [321, 83, 322, 34], [356, 83, 322, 34], [390, 132, 274, 34]], "aya_moshaf": "قُلۡ هَلُمَّ شُهَدَآءَكُمُ ٱلَّذِينَ يَشۡهَدُونَ أَنَّ ٱللَّهَ حَرَّمَ هَٰذَاۖ فَإِن شَهِدُواْ فَلَا تَشۡهَدۡ مَعَهُمۡۚ وَلَا تَتَّبِعۡ أَهۡوَآءَ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا وَٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ وَهُم بِرَبِّهِمۡ يَعۡدِلُونَ "}, {"aya_id": 940, "coordinates": [[390, 83, 49, 34], [424, 83, 322, 34], [459, 83, 322, 34], [493, 83, 322, 34], [527, 83, 322, 34], [562, 83, 322, 34]], "aya_moshaf": "۞ قُلۡ تَعَالَوۡاْ أَتۡلُ مَا حَرَّمَ رَبُّكُمۡ عَلَيۡكُمۡۖ أَلَّا تُشۡرِكُواْ بِهِۦ شَيۡـٔٗاۖ وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَٰنٗاۖ وَلَا تَقۡتُلُوٓاْ أَوۡلَٰدَكُم مِّنۡ إِمۡلَٰقٖ نَّحۡنُ نَرۡزُقُكُمۡ وَإِيَّاهُمۡۖ وَلَا تَقۡرَبُواْ ٱلۡفَوَٰحِشَ مَا ظَهَرَ مِنۡهَا وَمَا بَطَنَۖ وَلَا تَقۡتُلُواْ ٱلنَّفۡسَ ٱلَّتِي حَرَّمَ ٱللَّهُ إِلَّا بِٱلۡحَقِّۚ ذَٰلِكُمۡ وَصَّىٰكُم بِهِۦ لَعَلَّكُمۡ تَعۡقِلُونَ "}]