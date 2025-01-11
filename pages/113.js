const mainSuraId = 5;
const nearbySurasNames = {
    4: 'النِّسَاء',
    5: 'المَائدة',
    6: 'الأنعَام',
    7: 'الأعرَاف',
};
const choicesObjects = {
    "111": "وقالت اليهود والنصاري نحن ابناء",
    "112": "قالوا ياموسي انا لن ندخلها",
    "114": "يريدون ان يخرجوا من النار",
    "115": "سماعون للكذب اكالون للسحت فان",
};
const ayas = [{"aya_id": 701, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 49, 322, 34], [190, 49, 322, 34], [224, 89, 283, 34]], "aya_moshaf": "مِنۡ أَجۡلِ ذَٰلِكَ كَتَبۡنَا عَلَىٰ بَنِيٓ إِسۡرَٰٓءِيلَ أَنَّهُۥ مَن قَتَلَ نَفۡسَۢا بِغَيۡرِ نَفۡسٍ أَوۡ فَسَادٖ فِي ٱلۡأَرۡضِ فَكَأَنَّمَا قَتَلَ ٱلنَّاسَ جَمِيعٗا وَمَنۡ أَحۡيَاهَا فَكَأَنَّمَآ أَحۡيَا ٱلنَّاسَ جَمِيعٗاۚ وَلَقَدۡ جَآءَتۡهُمۡ رُسُلُنَا بِٱلۡبَيِّنَٰتِ ثُمَّ إِنَّ كَثِيرٗا مِّنۡهُم بَعۡدَ ذَٰلِكَ فِي ٱلۡأَرۡضِ لَمُسۡرِفُونَ "}, {"aya_id": 702, "coordinates": [[224, 49, 40, 34], [259, 49, 322, 34], [293, 49, 322, 34], [327, 49, 322, 34], [362, 49, 322, 34], [396, 352, 20, 34]], "aya_moshaf": "إِنَّمَا جَزَٰٓؤُاْ ٱلَّذِينَ يُحَارِبُونَ ٱللَّهَ وَرَسُولَهُۥ وَيَسۡعَوۡنَ فِي ٱلۡأَرۡضِ فَسَادًا أَن يُقَتَّلُوٓاْ أَوۡ يُصَلَّبُوٓاْ أَوۡ تُقَطَّعَ أَيۡدِيهِمۡ وَأَرۡجُلُهُم مِّنۡ خِلَٰفٍ أَوۡ يُنفَوۡاْ مِنَ ٱلۡأَرۡضِۚ ذَٰلِكَ لَهُمۡ خِزۡيٞ فِي ٱلدُّنۡيَاۖ وَلَهُمۡ فِي ٱلۡأٓخِرَةِ عَذَابٌ عَظِيمٌ "}, {"aya_id": 703, "coordinates": [[396, 49, 303, 34], [430, 201, 171, 34]], "aya_moshaf": "إِلَّا ٱلَّذِينَ تَابُواْ مِن قَبۡلِ أَن تَقۡدِرُواْ عَلَيۡهِمۡۖ فَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 704, "coordinates": [[430, 49, 152, 34], [465, 49, 322, 34], [499, 213, 159, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ ٱللَّهَ وَٱبۡتَغُوٓاْ إِلَيۡهِ ٱلۡوَسِيلَةَ وَجَٰهِدُواْ فِي سَبِيلِهِۦ لَعَلَّكُمۡ تُفۡلِحُونَ "}, {"aya_id": 705, "coordinates": [[499, 49, 164, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "إِنَّ ٱلَّذِينَ كَفَرُواْ لَوۡ أَنَّ لَهُم مَّا فِي ٱلۡأَرۡضِ جَمِيعٗا وَمِثۡلَهُۥ مَعَهُۥ لِيَفۡتَدُواْ بِهِۦ مِنۡ عَذَابِ يَوۡمِ ٱلۡقِيَٰمَةِ مَا تُقُبِّلَ مِنۡهُمۡۖ وَلَهُمۡ عَذَابٌ أَلِيمٞ "}]