

function kana2romaji(string) {

	var arrayedString = string.split('');
	var value = '';

	var triTable = {
		'う゛ぁ': 'va','う゛ぃ' : 'vi', 'う゛ぅ' : 'vu','う゛ぇ' : 've', 'う゛ぉ' : 'vo'
	};

	var biTable = {
		'きゃ' : 'kya','きゅ' : 'kyu','きょ' : 'kyo',
		'ぎゃ' : 'gya','ぎゅ' : 'gyu','ぎょ' : 'gyo',
		'しゃ' : 'sha','しゅ' : 'shu','しょ' : 'sho',
		'じゃ' : 'ja','じゅ' : 'ju','じょ' : 'jo',
		'ちゃ' : 'cha','ちゅ' : 'chu','ちょ' : 'cho',
		'ぢゃ' : 'dya','ぢゅ' : 'dyu','ぢょ' : 'dyo',
		'でゃ' : 'dha','でゅ' : 'dhu','でょ' : 'dho',
		'にゃ' : 'nya','にゅ' : 'nyu','にょ' : 'nyo',
		'ひゃ' : 'hya','ひゅ' : 'hyu','ひょ' : 'hyo',
		'びゃ' : 'pya','びゅ' : 'byu','びょ' : 'byo',
		'みゃ' : 'mya','みゅ' : 'myu','みょ' : 'myo',
		'りゃ' : 'rya','りゅ' : 'ryu','りょ' : 'ryo',
		'てぁ' : 'tha','てぃ' : 'thi','てぇ' : 'tee',
		'う゛' : 'vu','あ゛' : 'a"',
        'っか' : 'kka','っき' : 'kki','っく' : 'kku','っけ' : 'kke','っこ' : 'kko',
        'っさ' : 'ssa','っし' : 'sshi','っす' : 'ssu','っせ' : 'sse','っそ' : 'sso',
        'った' : 'tta','っち' : 'cchi','っつ' : 'ttu','って' : 'tte','っと' : 'tto',
        'っな' : 'nna','っに' : 'nni','っぬ' : 'nnu','っね' : 'nne','っの' : 'nno',
        'っは' : 'hha','っひ' : 'hhi','っふ' : 'ffu','っへ' : 'hhe','っほ' : 'hho',
        'っま' : 'mma','っみ' : 'mmi','っむ' : 'mmu','っめ' : 'mme','っも' : 'mmo',
        'っや' : 'yya', 'っゆ' : 'yyu','っよ' : 'yyo',
        'っら' : 'rra','っり' : 'rri','っる' : 'rru','っれ' : 'rre','っろ' : 'rro',
        'っわ' : 'wwa',
        'っが' : 'gga','っぎ' : 'ggi','っぐ' : 'ggu','っげ' : 'gge','っご' : 'ggo',
        'っざ' : 'zza','っじ' : 'zzi','っず' : 'zzu','っぜ' : 'zze','っぞ' : 'zzo',
        'っだ' : 'dda','っぢ' : 'ddi','っづ' : 'ddu','っで' : 'dde','っど' : 'ddo',
        'っば' : 'bba','っび' : 'bbi','っぶ' : 'bbu','っべ' : 'bbe','っぼ' : 'bbo',
        'っぱ' : 'ppa','っぴ' : 'ppi','っぷ' : 'ppu','っぺ' : 'ppe','っぽ' : 'ppo'
        
	};

	var uniTable = {
		'あ' : 'a','い' : 'i','う' : 'u','え' : 'e','お' : 'o',
		'か' : 'ka','き' : 'ki','く' : 'ku','け' : 'ke','こ' : 'ko',
		'さ' : 'sa','し' : 'shi','す' : 'su','せ' : 'se','そ' : 'so',
		'た' : 'ta','ち' : 'chi','つ' : 'tsu','て' : 'te','と' : 'to',
		'な' : 'na','に' : 'ni','ぬ' : 'nu','ね' : 'ne','の' : 'no',
		'は' : 'ha','ひ' : 'hi','ふ' : 'fu','へ' : 'he','ほ' : 'ho',
		'ま' : 'ma','み' : 'mi','む' : 'mu','め' : 'me','も' : 'mo',
		'や' : 'ya','ゆ' : 'yu','よ' : 'yo',
		'ら' : 'ra','り' : 'ri','る' : 'ru','れ' : 're','ろ' : 'ro',
		'わ' : 'wa','を' : 'wo','ん' : 'n',
		'が' : 'ga','ぎ' : 'gi','ぐ' : 'gu','げ' : 'ge','ご' : 'go',
		'ざ' : 'za','じ' : 'ji','ず' : 'zu','ぜ' : 'ze','ぞ' : 'zo',
		'だ' : 'da','ぢ' : 'di','づ' : 'du','で' : 'de','ど' : 'do',
		'ば' : 'ba','び' : 'bi','ぶ' : 'bu','べ' : 'be','ぼ' : 'bo',
		'ぱ' : 'pa','ぴ' : 'pi','ぷ' : 'pu','ぺ' : 'pe','ぽ' : 'po',
		'ぁ' : 'xa','ぃ' : 'xi','ぅ' : 'xu','ぇ' : 'xe','ぉ' : 'xo',
		'ゃ' : 'xya','ゅ' : 'xyu','ょ' : 'xyo','っ' : 'xtsu'
	};

	if(triTable[string] !== undefined){
		return triTable[string];
	} else if(biTable[string] !== undefined) {
		return biTable[string];
	}

    var biCheck = new Object();
    for (var k in biTable){
        var tmp = k.split('');
        biCheck[tmp[0]] = true;
    }

    var triCheck = new Object();
    for (var tk in triTable){
        var tmp = tk.split('');
        triCheck[tmp[0] + tmp[1]] = true;
        biCheck[tmp[0]] = true; 
    }
    

	var buf = '';
	for(var i = 0; i < arrayedString.length ; i++){
		var str = arrayedString[i];
        buf += str;
        if(buf.length == 3){
            if(triTable[buf] !== undefined){
                value += triTable[buf];
            } else {
                tmp = buf.split('');
                value += biTable[tmp[0] + tmp[1]];
                value += uniTable[tmp[2]] === undefined ? tmp[2] : uniTable[tmp[2]];
                
            }

        } else if(buf.length == 2) {
            if(triCheck[buf] !== undefined) { 
            } else if(biTable[buf] !== undefined) {
                    value += biTable[buf];
                    buf = '';
                } else {
                    tmp = buf.split('');
                    value += uniTable[tmp[0]]; 
                    value += uniTable[tmp[1]] === undefined ? tmp[1] : uniTable[tmp[1]]; 
                    buf = '';
                } 
        } else if(biCheck[buf] !== undefined){
        } else { 
                value += uniTable[str] === undefined ? str : uniTable[str];
                buf = '';
        }


        }

        value += buf !== '' ? uniTable[buf] : '';

	return value;
}
