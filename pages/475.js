const mainSuraId = 40;
const nearbySurasNames = {
    39: 'الزُّمَر',
    40: 'غَافِر',
    41: 'فُصِّلَت',
    42: 'الشُّوري',
};
const choicesObjects = {
    "473": "قالوا او لم تك تاتيكم",
    "474": "ان الساعه لاتيه لا ريب",
    "476": "ولقد ارسلنا رسلا من قبلك",
    "477": "حم",
};
const ayas = [{"aya_id": 4200, "coordinates": [[87, 49, 322, 34], [121, 49, 322, 34], [156, 49, 322, 34], [190, 213, 159, 34]], "aya_moshaf": "هُوَ ٱلَّذِي خَلَقَكُم مِّن تُرَابٖ ثُمَّ مِن نُّطۡفَةٖ ثُمَّ مِنۡ عَلَقَةٖ ثُمَّ يُخۡرِجُكُمۡ طِفۡلٗا ثُمَّ لِتَبۡلُغُوٓاْ أَشُدَّكُمۡ ثُمَّ لِتَكُونُواْ شُيُوخٗاۚ وَمِنكُم مَّن يُتَوَفَّىٰ مِن قَبۡلُۖ وَلِتَبۡلُغُوٓاْ أَجَلٗا مُّسَمّٗى وَلَعَلَّكُمۡ تَعۡقِلُونَ "}, {"aya_id": 4201, "coordinates": [[190, 49, 164, 34], [224, 161, 211, 34]], "aya_moshaf": "هُوَ ٱلَّذِي يُحۡيِۦ وَيُمِيتُۖ فَإِذَا قَضَىٰٓ أَمۡرٗا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ "}, {"aya_id": 4202, "coordinates": [[224, 49, 112, 34], [259, 149, 223, 34]], "aya_moshaf": "أَلَمۡ تَرَ إِلَى ٱلَّذِينَ يُجَٰدِلُونَ فِيٓ ءَايَٰتِ ٱللَّهِ أَنَّىٰ يُصۡرَفُونَ "}, {"aya_id": 4203, "coordinates": [[259, 49, 100, 34], [293, 49, 322, 34], [327, 344, 28, 34]], "aya_moshaf": "ٱلَّذِينَ كَذَّبُواْ بِٱلۡكِتَٰبِ وَبِمَآ أَرۡسَلۡنَا بِهِۦ رُسُلَنَاۖ فَسَوۡفَ يَعۡلَمُونَ "}, {"aya_id": 4204, "coordinates": [[327, 49, 295, 34]], "aya_moshaf": "إِذِ ٱلۡأَغۡلَٰلُ فِيٓ أَعۡنَٰقِهِمۡ وَٱلسَّلَٰسِلُ يُسۡحَبُونَ "}, {"aya_id": 4205, "coordinates": [[362, 151, 221, 34]], "aya_moshaf": "فِي ٱلۡحَمِيمِ ثُمَّ فِي ٱلنَّارِ يُسۡجَرُونَ "}, {"aya_id": 4206, "coordinates": [[362, 49, 102, 34], [396, 257, 115, 34]], "aya_moshaf": "ثُمَّ قِيلَ لَهُمۡ أَيۡنَ مَا كُنتُمۡ تُشۡرِكُونَ "}, {"aya_id": 4207, "coordinates": [[396, 49, 208, 34], [430, 49, 322, 34]], "aya_moshaf": "مِن دُونِ ٱللَّهِۖ قَالُواْ ضَلُّواْ عَنَّا بَل لَّمۡ نَكُن نَّدۡعُواْ مِن قَبۡلُ شَيۡـٔٗاۚ كَذَٰلِكَ يُضِلُّ ٱللَّهُ ٱلۡكَٰفِرِينَ "}, {"aya_id": 4208, "coordinates": [[465, 49, 322, 34], [499, 295, 77, 34]], "aya_moshaf": "ذَٰلِكُم بِمَا كُنتُمۡ تَفۡرَحُونَ فِي ٱلۡأَرۡضِ بِغَيۡرِ ٱلۡحَقِّ وَبِمَا كُنتُمۡ تَمۡرَحُونَ "}, {"aya_id": 4209, "coordinates": [[499, 49, 246, 34], [533, 242, 130, 34]], "aya_moshaf": "ٱدۡخُلُوٓاْ أَبۡوَٰبَ جَهَنَّمَ خَٰلِدِينَ فِيهَاۖ فَبِئۡسَ مَثۡوَى ٱلۡمُتَكَبِّرِينَ "}, {"aya_id": 4210, "coordinates": [[533, 49, 193, 34], [568, 49, 322, 34]], "aya_moshaf": "فَٱصۡبِرۡ إِنَّ وَعۡدَ ٱللَّهِ حَقّٞۚ فَإِمَّا نُرِيَنَّكَ بَعۡضَ ٱلَّذِي نَعِدُهُمۡ أَوۡ نَتَوَفَّيَنَّكَ فَإِلَيۡنَا يُرۡجَعُونَ "}]