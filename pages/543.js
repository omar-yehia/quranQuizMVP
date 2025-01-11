const mainSuraId = 58;
const nearbySurasNames = {
    57: 'الحدِيد',
    58: 'المُجَادلة',
    59: 'الحَشر',
    60: 'المُمتَحنَة',
};
const choicesObjects = {
    "541": "لقد ارسلنا رسلنا بالبينات وانزلنا",
    "542": "قد سمع الله قول التي",
    "544": "ياايها الذين امنوا اذا ناجيتم",
    "545": "لا تجد قوما يؤمنون بالله",
};
const ayas = [{"aya_id": 5111, "coordinates": [[87, 48, 322, 34], [121, 48, 322, 34], [156, 48, 322, 34], [190, 127, 244, 34]], "aya_moshaf": "أَلَمۡ تَرَ أَنَّ ٱللَّهَ يَعۡلَمُ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۖ مَا يَكُونُ مِن نَّجۡوَىٰ ثَلَٰثَةٍ إِلَّا هُوَ رَابِعُهُمۡ وَلَا خَمۡسَةٍ إِلَّا هُوَ سَادِسُهُمۡ وَلَآ أَدۡنَىٰ مِن ذَٰلِكَ وَلَآ أَكۡثَرَ إِلَّا هُوَ مَعَهُمۡ أَيۡنَ مَا كَانُواْۖ ثُمَّ يُنَبِّئُهُم بِمَا عَمِلُواْ يَوۡمَ ٱلۡقِيَٰمَةِۚ إِنَّ ٱللَّهَ بِكُلِّ شَيۡءٍ عَلِيمٌ "}, {"aya_id": 5112, "coordinates": [[190, 48, 79, 34], [224, 48, 322, 34], [259, 48, 322, 34], [293, 48, 322, 34], [327, 182, 189, 34]], "aya_moshaf": "أَلَمۡ تَرَ إِلَى ٱلَّذِينَ نُهُواْ عَنِ ٱلنَّجۡوَىٰ ثُمَّ يَعُودُونَ لِمَا نُهُواْ عَنۡهُ وَيَتَنَٰجَوۡنَ بِٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِ وَمَعۡصِيَتِ ٱلرَّسُولِۖ وَإِذَا جَآءُوكَ حَيَّوۡكَ بِمَا لَمۡ يُحَيِّكَ بِهِ ٱللَّهُ وَيَقُولُونَ فِيٓ أَنفُسِهِمۡ لَوۡلَا يُعَذِّبُنَا ٱللَّهُ بِمَا نَقُولُۚ حَسۡبُهُمۡ جَهَنَّمُ يَصۡلَوۡنَهَاۖ فَبِئۡسَ ٱلۡمَصِيرُ "}, {"aya_id": 5113, "coordinates": [[327, 48, 134, 34], [362, 48, 322, 34], [396, 119, 252, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِذَا تَنَٰجَيۡتُمۡ فَلَا تَتَنَٰجَوۡاْ بِٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِ وَمَعۡصِيَتِ ٱلرَّسُولِ وَتَنَٰجَوۡاْ بِٱلۡبِرِّ وَٱلتَّقۡوَىٰۖ وَٱتَّقُواْ ٱللَّهَ ٱلَّذِيٓ إِلَيۡهِ تُحۡشَرُونَ "}, {"aya_id": 5114, "coordinates": [[396, 48, 71, 34], [430, 48, 322, 34], [465, 128, 243, 34]], "aya_moshaf": "إِنَّمَا ٱلنَّجۡوَىٰ مِنَ ٱلشَّيۡطَٰنِ لِيَحۡزُنَ ٱلَّذِينَ ءَامَنُواْ وَلَيۡسَ بِضَآرِّهِمۡ شَيۡـًٔا إِلَّا بِإِذۡنِ ٱللَّهِۚ وَعَلَى ٱللَّهِ فَلۡيَتَوَكَّلِ ٱلۡمُؤۡمِنُونَ "}, {"aya_id": 5115, "coordinates": [[465, 48, 80, 34], [499, 48, 322, 34], [533, 48, 322, 34], [568, 48, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِذَا قِيلَ لَكُمۡ تَفَسَّحُواْ فِي ٱلۡمَجَٰلِسِ فَٱفۡسَحُواْ يَفۡسَحِ ٱللَّهُ لَكُمۡۖ وَإِذَا قِيلَ ٱنشُزُواْ فَٱنشُزُواْ يَرۡفَعِ ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ مِنكُمۡ وَٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ دَرَجَٰتٖۚ وَٱللَّهُ بِمَا تَعۡمَلُونَ خَبِيرٞ "}]