let text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

const arr = [['아', 'あ', 'ア'], ['이', 'い', 'イ'], ['우', 'う', 'ウ'], ['에', 'え', 'エ'], ['오', 'お', 'オ'],
    ['카', 'か', 'カ'], ['키', 'き', 'キ'], ['쿠', 'く', 'ク'], ['케', 'け', 'ケ'], ['코', 'こ', 'コ'], ['캬', 'きゃ', 'キャ'], ['큐', 'きゅ', 'キュ'], ['쿄', 'きょ', 'キョ'],
    ['가', 'が', 'ガ'], ['기', 'ぎ', 'ギ'], ['구', 'ぐ', 'グ'], ['게', 'げ', 'ゲ'], ['고', 'ご', 'ゴ'], ['갸', 'ぎゃ', 'ギャ'], ['규', 'ぎゅ', 'ギュ'], ['교', 'ぎょ', 'ギョ'],
    ['사', 'さ', 'サ'], ['시', 'し', 'シ'], ['스', 'す', 'ス'], ['세', 'せ', 'セ'], ['소', 'そ', 'ソ'], ['샤', 'しゃ', 'シャ'], ['슈', 'しゅ', 'シュ'], ['쇼', 'しょ', 'ショ'],
    ['자', 'ざ', 'ザ'], ['지', 'じ', 'ジ'], ['즈', 'ず', 'ズ'], ['제', 'ぜ', 'ゼ'], ['조', 'ぞ', 'ゾ'], ['자', 'じゃ', 'ジャ'], ['주', 'じゅ', 'ジュ'], ['조', 'じょ', 'ジョ'],
    ['타', 'た', 'タ'], ['치', 'ち', 'チ'], ['츠', 'つ', 'ツ'], ['테', 'て', 'テ'], ['토', 'と', 'ト'], ['차', 'ちゃ', 'チャ'], ['추', 'ちゅ', 'チュ'], ['초', 'ちょ', 'チョ'],
    ['다', 'だ', 'ダ'], ['지', 'ぢ', 'ヂ'], ['즈', 'づ', 'ヅ'], ['데', 'で', 'デ'], ['도', 'ど', 'ド'], ['자', 'ぢゃ', 'ヂャ'], ['주', 'ぢゅ', 'ヂュ'], ['조', 'ぢょ', 'ヂョ'],
    ['나', 'な', 'ナ'], ['니', 'に', '二'], ['누', 'ぬ', 'ヌ'], ['네', 'ね', 'ネ'], ['노', 'の', 'ノ'], ['냐', 'にゃ', '二ャ'], ['뉴', 'にゅ', '二ュ'], ['뇨', 'にょ', '二ョ'],
    ['하', 'は', 'ハ'], ['히', 'ひ', 'ヒ'], ['후', 'ふ', 'フ'], ['헤', 'へ', 'ヘ'], ['호', 'ほ', 'ホ'], ['햐', 'ひゃ', 'ヒャ'], ['휴', 'ひゅ', 'ヒュ'], ['효', 'ひょ', 'ヒョ'],
    ['바', 'ば', 'バ'], ['비', 'び', 'ビ'], ['부', 'ぶ', 'ブ'], ['베', 'べ', 'ベ'], ['보', 'ぼ', 'ボ'], ['뱌', 'びゃ', 'ビャ'], ['뷰', 'びゅ', 'ビュ'], ['뵤', 'びょ', 'ビョ'],
    ['파', 'ぱ', 'パ'], ['피', 'ぴ', 'ピ'], ['푸', 'ぷ', 'プ'], ['페', 'ぺ', 'ペ'], ['포', 'ぽ', 'ポ'], ['퍄', 'ぴゃ', 'ピャ'], ['퓨', 'ぴゅ', 'ピュ'], ['표', 'ぴょ', 'ピョ'],
    ['마', 'ま', 'マ'], ['미', 'み', 'ミ'], ['무', 'む', 'ム'], ['메', 'め', 'メ'], ['모', 'も', 'モ'], ['먀', 'みゃ', 'ミャ'], ['뮤', 'みゅ', 'ミュ'], ['묘', 'みょ', 'ミョ'],
    ['야', 'や', 'ヤ'], ['유', 'ゆ', 'ユ'], ['요', 'よ', 'ヨ'],
    ['라', 'ら', 'ラ'], ['리', 'り', 'リ'], ['루', 'る', 'ル'], ['레', 'れ', 'レ'], ['로', 'ろ', 'ロ'], ['랴', 'りゃ', 'リャ'], ['류', 'りゅ', 'リュ'], ['료', 'りょ', 'リョ'],
    ['와', 'わ', 'ワ'], ['이', 'ゐ', 'ヰ'], ['에', 'ゑ', 'ヱ'], ['오', 'を', 'ヲ'],
    ['예', 'イェ'], ['위', 'ウィ'], ['웨', 'ウェ'], ['워', 'ウォ'],
    ['콰', 'クァ'], ['과', 'グァ'], ['퀴', 'クィ'], ['퀘', 'クェ'], ['쿼', 'クォ'],
    ['세', 'シェ'], ['제', 'ジェ'], 
    ['체', 'チェ'], ['차', 'ツァ'], ['치', 'ツィ'], ['체', 'ツェ'], ['초', 'ツォ'], ['티', 'ティ'], ['디', 'ディ'], ['튜', 'テュ'], ['듀', 'デュ'], ['투', 'トゥ'], ['두', 'ドゥ'],
    ['화', 'ファ'], ['휘', 'フィ'], ['훼', 'フェ'], ['호', 'フォ'], ['휴', 'フュ'],
    ['바', 'ヴァ'], ['비', 'ヴィ'], ['부', 'ゔ', 'ヴ'], ['베', 'ヴェ'], ['보', 'ヴォ'], ['뷰', 'ヴュ'],
    ['시', 'スィ'], ['지', 'ズィ'],
    ['케', 'キェ'], ['네', 'ニェ'], ['헤', 'ヒェ'], ['메', 'ミェ'], ['레', 'リェ'], ['게', 'ギェ'], ['베', 'ビェ'], ['페', 'ピェ']];

function isKorean(syllable) {
    let unicode = syllable.charCodeAt(0);
    if(/*(unicode >= 12593 && unicode <= 12643) ||*/ (unicode >= 44032 && unicode <= 55203)) {
        return true;
    } else {
        return false;
    }
}

function separate(syllable) {
    let cho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
    let jung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
    let jong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
    let unicode = syllable.charCodeAt(0);
    if(!isKorean(syllable)) {
        return syllable;
    } else {
        unicode = unicode - 44032;
        const choseong = parseInt(unicode / 588);
        return [cho[choseong], jung[parseInt((unicode - (choseong * 588)) / 28)], jong[parseInt(unicode % 28)]];
    }
}

/*function dropjongseong(syllable) {
    if(!isKorean(syllable)) {
        return syllable;
    } else {
        let unicode = syllable.charCodeAt(0);
        return (String.fromCharCode(unicode - parseInt((unicode - 44032) % 28)));
    }
}*/

function combine(choseong, jungseong, jongseong) {
    let cho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
    let jung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ']
    let jong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
    return (String.fromCharCode(cho.indexOf(choseong) * 588 + jung.indexOf(jungseong) * 28 + jong.indexOf(jongseong) + 44032));
}

/*let universe = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['', 'ㄱ', 'ㄴ', 'ㅅ', 'ㅂ', 'ㅁ', 'ㅇ']]
let tsufirst = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['ㄱ']]
let tsusecond = [['ㅋ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['']]
let tsuthird = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['ㄴ']]
let tsufourth = [['ㅅ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['']]
let tsufifth = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['ㅅ']]
let tsusixth = [['ㅌ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['']]
let tsuseventh = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['ㅂ']]
let tsueighth = [['ㅍ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['']]

let ngfirst = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['ㅁ']]
let ngsecond = [['ㅂ', 'ㅍ', 'ㅁ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['']]
let ngthird = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['ㄴ']]
let ngfourth = [['ㅈ', 'ㅌ', 'ㄷ', 'ㄴ', 'ㄹ', 'ㅇ', 'ㅅ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['']]
let ngfifth = [['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['ㅇ']]
let ngsixth = [['ㅋ', 'ㄱ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅔ', 'ㅗ'], ['']]

function makecombarr(uniarr1, uniarr2, hiragana, katakana) {
    let ran = 0;
    let combarr1 = [];
    let combarr2 = [];
    for(let a=0; a<uniarr1[0].length; a++){
        for(let b=0; b<uniarr1[1].length; b++){
            for(let c=0; c<uniarr1[2].length; c++){
                combarr1.push(combine(uniarr1[0][a], uniarr1[1][b], uniarr1[2][c]));
            }
        }
    }
    for(let d=0; d<uniarr2[0].length; d++){
        for(let e=0; e<uniarr2[1].length; e++){
            for(let f=0; f<uniarr1[2].length; f++){
                combarr2.push(combine(uniarr2[0][d], uniarr2[1][e], uniarr2[2][f]));
            }
        }
    }
    let combarr = [];
    for(let g=0; g<combarr1.length; g++){
        for(let h=0; h<combarr2.length; h++){
            ran = Math.random();
            if(ran < 0.5) {
                combarr.push([combarr1[g]+combarr2[h], dropjongseong(combarr1[g])+hiragana+combarr2[h]]);
            } else {
                combarr.push([combarr1[g]+combarr2[h], dropjongseong(combarr1[g])+katakana+combarr2[h]]);
            }
        }
    }
    return combarr;
}

let uniarr = [
    ...makecombarr(tsufirst, tsusecond, 'っ', 'ッ'),
    ...makecombarr(tsuthird, tsufourth, 'っ', 'ッ'),
    ...makecombarr(tsufifth, tsusixth, 'っ', 'ッ'),
    ...makecombarr(tsuseventh, tsueighth, 'っ', 'ッ'),
    ...makecombarr(ngfirst, ngsecond, 'ん', 'ン'),
    ...makecombarr(ngthird, ngfourth, 'ん', 'ン'),
    ...makecombarr(ngfifth, ngsixth, 'ん', 'ン'),
];*/

// っ, ッ은 카행 앞에서 k, 사행 앞에서 s, 타행 앞에서 t, 파행 앞에서 p이다.
// ん은 바, 파, 마행 앞에서 m, 자, 타, 다, 나, 라행 앞에서 n, 카, 가행 앞에서 ng, 아, 사, 하, 야, 와행 앞이나 단어 끝에서 n이다.
// 아단의 장음은 아, 이단의 장음은 이, 우단의 장음은 우, 에단의 장음은 에나 이, 오단의 장음은 오나 우로 표기한다.

/*function convert(prob) {
    let ran = 0;
    for(let i=0; i<text.length; i++) {
        for(let a=0; a<uniarr.length; a++) {
            if(text[i].innerHTML.includes(uniarr[a][0])) {
                ran = Math.random();
                if(ran < prob) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(uniarr[a][0], uniarr[a][1]);
                }
            } 
        }
        for(let j=0; j<arr.length; j++) {
            if(text[i].innerHTML.includes(arr[j][0])) {
                ran = Math.random();
                if(ran < prob/2) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(arr[j][0], arr[j][1]);
                } else if(ran < prob && arr[j][2] !== undefined) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(arr[j][0], arr[j][2]);
                }
            }
        }
    }
}*/

function convert(prob) {
    function checking(sequence) {
        let seqarray = [];
        let ran = 0;
        for(let i=0; i<sequence.length; i++){
            if(isKorean(sequence.charAt(i))) {
                seqarray.push(separate(sequence.charAt(i)));
            } else {
                seqarray.push(sequence.charAt(i));
            }
        }
        for(let j=0; j<seqarray.length; j++){
            ran = Math.random();
            if(seqarray[j] !== undefined && seqarray[j+1] !== undefined) {
                if(seqarray[j].length === 3 && seqarray[j+1].length === 3){
                    if((seqarray[j][2] == 'ㄱ' && seqarray[j+1][0] == 'ㅋ') || (seqarray[j][2] == 'ㄴ' && seqarray[j+1][0] == 'ㅅ') || (seqarray[j][2] == 'ㅅ' && seqarray[j+1][0] == 'ㅌ') || (seqarray[j][2] == 'ㅂ' && seqarray[j+1][0] == 'ㅍ')) {
                        if(ran < prob*prob/2) {
                            seqarray[j][2] = '';
                            seqarray.splice(j+1, 0, 'っ');
                            j++;
                        } else if(ran < prob*prob) {
                            seqarray[j][2] = '';
                            seqarray.splice(j+1, 0, 'ッ');
                            j++;
                        }
                    }
                    if((seqarray[j][2] == 'ㅁ' && (seqarray[j+1][0] == 'ㅂ' || seqarray[j+1][0] == 'ㅍ' || seqarray[j+1][0] == 'ㅁ')) || (seqarray[j][2] == 'ㄴ' && (seqarray[j+1][0] == 'ㅈ' || seqarray[j+1][0] == 'ㅌ' || seqarray[j+1][0] == 'ㄷ' || seqarray[j+1][0] == 'ㄴ' || seqarray[j+1][0] == 'ㄹ' || seqarray[j+1][0] == 'ㅇ' || seqarray[j+1][0] == 'ㅅ' || seqarray[j+1][0] == 'ㅎ')) || (seqarray[j][2] == 'ㅇ' && (seqarray[j+1][0] == 'ㅋ' || seqarray[j+1][0] == 'ㄱ'))) {                        if(ran < prob*prob/2) {
                            seqarray[j][2] = '';
                            seqarray.splice(j+1, 0, 'ん');
                            j++;
                        } else if(ran < prob*prob) {
                            seqarray[j][2] = '';
                            seqarray.splice(j+1, 0, 'ン');
                            j++;
                        }
                    }
                }
            }
        }
        let seqreturn = '';
        for(let k=0; k<seqarray.length; k++){
            if(seqarray[k].length === 3) {
                seqreturn = seqreturn.concat(combine(seqarray[k][0], seqarray[k][1], seqarray[k][2]));
            } else {
                seqreturn = seqreturn.concat(seqarray[k]);
            }
        }
        return seqreturn;
    }
    for(let i=0; i<text.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(text[i].innerHTML.includes(arr[j][0])) {
                ran = Math.random();
                if(ran < prob/2) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(arr[j][0], arr[j][1]);
                } else if(ran < prob && arr[j][2] !== undefined) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(arr[j][0], arr[j][2]);
                }
            }
        }
        text[i].innerHTML = checking(text[i].innerHTML);
    }
}

function convertlightweight(prob) {
    let ran = 0;
    for(let i=0; i<text.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(text[i].innerHTML.includes(arr[j][0])) {
                ran = Math.random();
                if(ran < prob/2) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(arr[j][0], arr[j][1]);
                } else if(ran < prob && arr[j][2] !== undefined) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(arr[j][0], arr[j][2]);
                }
            }
        }
    }
}

function convertdoc(prob, rev, adv){
    if(rev !== "1") {
        if(adv !== "1") {
            convertlightweight(prob);
        } else {
            convert(prob);
        }
    }
}

chrome.storage.sync.get(["probability", "revert", "advanced"], function(result) {
  convertdoc(result.probability, result.revert, result.advanced);
});