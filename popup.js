let probinput = document.getElementById("probinput");

chrome.storage.sync.get("probability", ({ probability }) => {
  probinput.value = probability;
});

changeProb.addEventListener("click", () => {
    chrome.storage.sync.set({ probability: probinput.value });
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        chrome.tabs.reload(arrayOfTabs[0].id);
    });
});

refresh.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        chrome.tabs.reload(arrayOfTabs[0].id);
    });
});

extrevert.addEventListener("click", () => {
    chrome.storage.sync.get("revert", ({ revert }) => {
        if(revert === "1") {
            chrome.storage.sync.set({ revert: '0' });
            extrevert.style.backgroundColor = "#f0f0f0";
            chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
                chrome.tabs.reload(arrayOfTabs[0].id);
            });
        } else {
            chrome.storage.sync.set({ revert: '1' });
            extrevert.style.backgroundColor = "#3aa757";
            chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
                chrome.tabs.reload(arrayOfTabs[0].id);
            });
        }
    });
});

chrome.storage.sync.get("revert", ({ revert }) => {
    if(revert === "1") {
        extrevert.style.backgroundColor ="#3aa757";
    }
});

advoption.addEventListener("click", () => {
    chrome.storage.sync.get("advanced", ({ advanced }) => {
        if(advanced === "1") {
            chrome.storage.sync.set({ advanced: '0' });
            advoption.style.backgroundColor = "#f0f0f0";
            chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
                chrome.tabs.reload(arrayOfTabs[0].id);
            });
        } else {
            chrome.storage.sync.set({ advanced: '1' });
            advoption.style.backgroundColor = "#3aa757";
            chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
                chrome.tabs.reload(arrayOfTabs[0].id);
            });
        }
    });
});

chrome.storage.sync.get("advanced", ({ advanced }) => {
    if(advanced === "1") {
        advoption.style.backgroundColor ="#3aa757";
    }
});

/*let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
        args: [],
    });
});

function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}*/

reconvert.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.sync.get(["probability"], function(result) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: convertsample,
            args: [result.probability],
        });
    });
});

function convertsample(prob) {
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
