const mainSuraId = 60;
const nearbySurasNames = {
    59: 'الحَشر',
    60: 'المُمتَحنَة',
    61: 'الصَّف',
    62: 'الجُمعَة',
};
const choicesObjects = {
    "549": "ياايها الذين امنوا لا تتخذوا",
    "550": "لقد كان لكم فيهم اسوه",
    "552": "واذ قال عيسي ابن مريم",
    "553": "يسبح لله ما في السموات",
};
const ayas = [{"aya_id": 5162, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 49, 322, 34], [190, 49, 322, 34], [224, 346, 26, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلنَّبِيُّ إِذَا جَآءَكَ ٱلۡمُؤۡمِنَٰتُ يُبَايِعۡنَكَ عَلَىٰٓ أَن لَّا يُشۡرِكۡنَ بِٱللَّهِ شَيۡـٔٗا وَلَا يَسۡرِقۡنَ وَلَا يَزۡنِينَ وَلَا يَقۡتُلۡنَ أَوۡلَٰدَهُنَّ وَلَا يَأۡتِينَ بِبُهۡتَٰنٖ يَفۡتَرِينَهُۥ بَيۡنَ أَيۡدِيهِنَّ وَأَرۡجُلِهِنَّ وَلَا يَعۡصِينَكَ فِي مَعۡرُوفٖ فَبَايِعۡهُنَّ وَٱسۡتَغۡفِرۡ لَهُنَّ ٱللَّهَۚ إِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ "}, {"aya_id": 5163, "coordinates": [[224, 49, 297, 34], [259, 49, 322, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَتَوَلَّوۡاْ قَوۡمًا غَضِبَ ٱللَّهُ عَلَيۡهِمۡ قَدۡ يَئِسُواْ مِنَ ٱلۡأٓخِرَةِ كَمَا يَئِسَ ٱلۡكُفَّارُ مِنۡ أَصۡحَٰبِ ٱلۡقُبُورِ "}, {"aya_id": 5164, "coordinates": [[362, 49, 322, 34], [396, 350, 22, 34]], "aya_moshaf": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ سَبَّحَ لِلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ "}, {"aya_id": 5165, "coordinates": [[396, 49, 301, 34]], "aya_moshaf": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لِمَ تَقُولُونَ مَا لَا تَفۡعَلُونَ "}, {"aya_id": 5166, "coordinates": [[430, 77, 295, 34]], "aya_moshaf": "كَبُرَ مَقۡتًا عِندَ ٱللَّهِ أَن تَقُولُواْ مَا لَا تَفۡعَلُونَ "}, {"aya_id": 5167, "coordinates": [[430, 49, 28, 34], [465, 49, 322, 34], [499, 256, 116, 34]], "aya_moshaf": "إِنَّ ٱللَّهَ يُحِبُّ ٱلَّذِينَ يُقَٰتِلُونَ فِي سَبِيلِهِۦ صَفّٗا كَأَنَّهُم بُنۡيَٰنٞ مَّرۡصُوصٞ "}, {"aya_id": 5168, "coordinates": [[499, 49, 207, 34], [533, 49, 322, 34], [568, 49, 322, 34]], "aya_moshaf": "وَإِذۡ قَالَ مُوسَىٰ لِقَوۡمِهِۦ يَٰقَوۡمِ لِمَ تُؤۡذُونَنِي وَقَد تَّعۡلَمُونَ أَنِّي رَسُولُ ٱللَّهِ إِلَيۡكُمۡۖ فَلَمَّا زَاغُوٓاْ أَزَاغَ ٱللَّهُ قُلُوبَهُمۡۚ وَٱللَّهُ لَا يَهۡدِي ٱلۡقَوۡمَ ٱلۡفَٰسِقِينَ "}]