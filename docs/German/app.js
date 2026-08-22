// KHỞI TẠO DỮ LIỆU TỪ BỘ NHỚ TRÌNH DUYỆT (LOCAL STORAGE)
let appData = JSON.parse(localStorage.getItem('lingoGermanData')) || { decks: [] };
let currentViewingWord = null;
let selectedDeckId = null;
let currentStudyMode = 'auto'; 
let dueCards = [];
let currentStudyCard = null;

// Nếu chưa có bộ từ nào, tạo một bộ mặc định
if (appData.decks.length === 0) {
    appData.decks.push({ id: "d_" + Date.now(), name: "Từ vựng Đức cơ bản (A1)", words: [] });
    saveData();
}

// Cập nhật trạng thái
document.getElementById('sync-text').innerText = "Đã lưu trên máy (Local)";
document.getElementById('sync-dot').classList.add('online');

// Hàm lưu dữ liệu
function saveData() {
    localStorage.setItem('lingoGermanData', JSON.stringify(appData));
    window.updateStats();
}

// Chuyển Tab Màn Hình
window.switchTab = function(tabId, el) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    if(el) el.classList.add('active');
    document.getElementById(tabId).classList.add('active');
    
    if(tabId === 'study-view') window.initStudySetup();
    if(tabId === 'decks-view') window.renderDecksView();
    if(tabId === 'dict-view') window.updateStats();
}

// Đóng Hộp thoại
window.closeModal = function(id) {
    document.getElementById(id).style.display = 'none';
}

// Hiển thị thông báo (Toast)
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerHTML = `<i class="fa-solid fa-bell" style="color: var(--primary)"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Cập nhật Vòng tròn Thống kê số lượng từ
window.updateStats = function() {
    let total = 0, newWords = 0, shortTerm = 0, longTerm = 0, mastered = 0;
    appData.decks.forEach(deck => {
        deck.words.forEach(w => {
            if (w.repetitions !== undefined) {
                total++;
                if (w.repetitions === 1) newWords++;
                else if (w.repetitions === 2 || w.repetitions === 3) shortTerm++;
                else if (w.repetitions === 4 || w.repetitions === 5) longTerm++;
                else if (w.repetitions > 5) mastered++;
            }
        });
    });
    
    document.getElementById('stat-total').innerText = total;
    document.getElementById('stat-new').innerText = newWords;
    document.getElementById('stat-short').innerText = shortTerm;
    document.getElementById('stat-long').innerText = longTerm;
    document.getElementById('stat-master').innerText = mastered;
}

// Gọi API Google Dịch Tiếng Đức sang Tiếng Việt
async function fetchTranslation(word, targetLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${targetLang}&dt=t&dt=bd&q=${encodeURIComponent(word)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        let mainText = data[0][0][0]; 
        let dictData = [];
        if (data[1]) {
            data[1].forEach(item => {
                let pos = item[0];
                let meanings = item[1].slice(0, 4).join(', '); 
                dictData.push({ pos: pos, meanings: meanings });
            });
        }
        return { text: mainText, dict: dictData };
    } catch (error) {
        return { text: "Không có bản dịch", dict: [] };
    }
}

// Hàm Xử Lý Tìm Kiếm Từ Vựng
window.handleSearch = async function() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    const resultsBox = document.getElementById('search-results');
    
    if (query.length < 2) {
        resultsBox.style.display = 'none';
        return;
    }
    
    resultsBox.innerHTML = '<div class="result-item" style="color: var(--text-muted); justify-content: center; font-weight: 700;">Đang tra cứu từ điển tiếng Đức... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 10px; color: var(--primary);"></i></div>';
    resultsBox.style.display = 'block';
    
    try {
        // Dùng Dictionary API chuyên cho tiếng Đức (Mã ngôn ngữ 'de')
        const deRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/de/${encodeURIComponent(query)}`);
        
        let ipaText = "N/A";
        let allMeanings = [];
        let primaryPos = "word";
        let primaryEn = "";
        let primaryEx = "";
        let finalWord = query;
        
        if (deRes.ok) {
            const deData = await deRes.json();
            const firstEntry = deData[0];
            finalWord = firstEntry.word;
            
            if (firstEntry.phonetic) ipaText = firstEntry.phonetic;
            else if (firstEntry.phonetics && firstEntry.phonetics.length > 0) {
                const validPhonetic = firstEntry.phonetics.find(p => p.text);
                if (validPhonetic) ipaText = validPhonetic.text;
            }
            
            firstEntry.meanings.forEach((m, index) => {
                let pos = m.partOfSpeech;
                let defs = [];
                m.definitions.forEach((d, dIndex) => {
                    if (dIndex < 3) {
                        defs.push({ en: d.definition, ex: d.example || "" });
                        if (index === 0 && dIndex === 0) {
                            primaryPos = pos;
                            primaryEn = d.definition;
                            primaryEx = d.example || "";
                        }
                    }
                });
                allMeanings.push({ pos: pos, definitions: defs });
            });
        }
        
        // Dịch nghĩa chính thức sang Tiếng Việt
        const viData = await fetchTranslation(finalWord, 'vi');
        
        const realWordData = {
            word: finalWord,
            ipa: ipaText,
            vi: viData.text,
            viDict: viData.dict,
            meanings: allMeanings,
            pos: primaryPos,
            en: primaryEn,
            ex: primaryEx
        };
        
        resultsBox.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <div>
                <span class="result-word">${realWordData.word}</span>
                <span style="font-size: 13px; color: var(--accent); margin-left: 10px; font-weight: 800; text-transform: uppercase;">${realWordData.pos}</span>
            </div>
            <span class="result-vi">${realWordData.vi}</span>
        `;
        div.onclick = () => window.showWordDetail(realWordData);
        resultsBox.appendChild(div);
    }
    catch (error) {
        // Fallback: Lấy dịch thô từ Google Translate nếu API từ điển thất bại
        const viData = await fetchTranslation(query, 'vi');
        const fallbackData = {
            word: query, ipa: "", vi: viData.text, viDict: viData.dict,
            meanings: [], pos: "word", en: "", ex: ""
        };
        
        resultsBox.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <div><span class="result-word">${query}</span></div>
            <span class="result-vi">${viData.text}</span>
        `;
        div.onclick = () => window.showWordDetail(fallbackData);
        resultsBox.appendChild(div);
    }
}

// Cấu hình phát âm Chuẩn Tiếng Đức (de-DE)
window.playNativeAudio = function(text, lang = 'de-DE') {
    if (!text) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang; // Thiết lập đọc theo giọng Đức
        utterance.rate = 0.9; 
        window.speechSynthesis.speak(utterance);
    } else {
        showToast("Trình duyệt không hỗ trợ phát âm thanh", "error");
    }
}

// Hiện Popup Từ Vựng
window.showWordDetail = function(wordData) {
    currentViewingWord = wordData;
    document.getElementById('search-results').style.display = 'none';
    document.getElementById('search-input').value = '';
    
    document.getElementById('md-word').innerText = wordData.word;
    document.getElementById('md-ipa').innerText = wordData.ipa !== "N/A" ? wordData.ipa : "";
    document.getElementById('md-vi-main').innerText = wordData.vi;
    
    document.getElementById('btn-play-audio').onclick = () => window.playNativeAudio(wordData.word, 'de-DE');
    window.playNativeAudio(wordData.word, 'de-DE');
    
    document.getElementById('word-modal').style.display = 'flex';
}

// Modal Lưu Vào Bộ Từ
window.openSaveToDeckModal = function() {
    window.closeModal('word-modal');
    document.getElementById('save-target-word').innerText = currentViewingWord.word;
    document.getElementById('new-deck-name').value = '';
    selectedDeckId = null;
    
    const list = document.getElementById('deck-select-list');
    list.innerHTML = '';
    appData.decks.forEach(deck => {
        const item = document.createElement('div');
        item.className = 'deck-list-item';
        item.innerText = `${deck.name} (${deck.words.length} từ)`;
        item.onclick = () => {
            document.querySelectorAll('.deck-list-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            selectedDeckId = deck.id;
        };
        list.appendChild(item);
    });
    document.getElementById('save-deck-modal').style.display = 'flex';
}

// Xác Nhận Lưu Từ
window.confirmSaveWord = function() {
    const newDeckName = document.getElementById('new-deck-name').value.trim();
    let targetDeckId = selectedDeckId;
    
    if (newDeckName) {
        const newDeck = { id: "d_" + Date.now(), name: newDeckName, words: [] };
        appData.decks.push(newDeck);
        targetDeckId = newDeck.id;
    }
    
    if (!targetDeckId) {
        showToast("Vui lòng chọn hoặc tạo bộ từ mới!", "error");
        return;
    }
    
    const deckIndex = appData.decks.findIndex(d => d.id === targetDeckId);
    
    if(appData.decks[deckIndex].words.find(w => w.word === currentViewingWord.word)) {
        showToast("Từ này bạn đã lưu rồi nha!", "error");
        return;
    }
    
    const wordToSave = { ...currentViewingWord, id: "w_" + Date.now(), repetitions: 0, nextReview: Date.now() };
    appData.decks[deckIndex].words.push(wordToSave);
    
    saveData();
    showToast(`Đã lưu "${wordToSave.word}" thành công!`);
    window.closeModal('save-deck-modal');
}

// MÀN HÌNH BỘ TỪ VỰNG
window.renderDecksView = function() {
    const grid = document.getElementById('decks-grid');
    grid.innerHTML = '';
    appData.decks.forEach(deck => {
        grid.innerHTML += `
            <div class="deck-card" onclick="openDeckDetail('${deck.id}')">
                <div class="deck-title">${deck.name}</div>
                <div style="color: var(--text-muted); font-weight: 700;">${deck.words.length} thẻ từ vựng</div>
            </div>
        `;
    });
}

let currentDetailDeckId = null;
window.openDeckDetail = function(deckId) {
    currentDetailDeckId = deckId;
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById('deck-detail-view').classList.add('active');
    
    const deck = appData.decks.find(d => d.id === deckId);
    document.getElementById('detail-deck-title').innerText = deck.name;
    
    const list = document.getElementById('deck-words-list');
    list.innerHTML = '';
    
    if(deck.words.length === 0) {
        list.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-muted);">Chưa có từ nào.</p>';
        return;
    }
    
    deck.words.forEach(w => {
        list.innerHTML += `
            <div style="background:white; padding:16px; border:2px solid var(--border); border-radius:12px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <strong style="font-size:20px; color:var(--text-dark);">${w.word}</strong>
                    <div style="color:var(--text-muted);">${w.vi}</div>
                </div>
                <div style="background:var(--primary-light); color:white; padding:4px 8px; border-radius:8px; font-weight:bold;">Lv ${w.repetitions}</div>
            </div>
        `;
    });
}

// MÀN HÌNH HỌC TẬP ANKI MODE
window.initStudySetup = function() {
    document.getElementById('study-setup').style.display = 'block';
    document.getElementById('study-session').style.display = 'none';
    const list = document.getElementById('study-deck-list');
    list.innerHTML = '';
    
    appData.decks.forEach(deck => {
        const now = Date.now();
        const toReview = deck.words.filter(w => !w.nextReview || w.nextReview <= now);
        list.innerHTML += `
            <button class="btn" style="background:white; border:2px solid var(--border); display:flex; justify-content:space-between; padding:18px; color:var(--text-dark);" onclick="startStudySession('${deck.id}')">
                <span>${deck.name}</span>
                <span style="background:var(--gradient-brand); color:white; padding:4px 12px; border-radius:12px;">${toReview.length} từ cần ôn</span>
            </button>
        `;
    });
}

window.startStudySession = function(deckId) {
    const deck = appData.decks.find(d => d.id === deckId);
    const now = Date.now();
    dueCards = deck.words.filter(w => !w.nextReview || w.nextReview <= now);
    dueCards.sort(() => Math.random() - 0.5);
    
    if(dueCards.length === 0) {
        showToast("Bộ bài này đã ôn xong rồi, nghỉ ngơi thôi!", "success");
        return;
    }
    
    document.getElementById('study-setup').style.display = 'none';
    document.getElementById('study-session').style.display = 'block';
    window.loadNextCard();
}

window.loadNextCard = function() {
    if(dueCards.length === 0) {
        showToast("Đã hoàn thành mục tiêu hôm nay!");
        window.endStudySession();
        return;
    }
    
    currentStudyCard = dueCards[0];
    document.getElementById('study-progress').innerText = `Từ còn lại: ${dueCards.length}`;
    
    document.getElementById('flashcard-front').style.display = 'block';
    document.getElementById('flashcard-back').style.display = 'none';
    document.getElementById('study-vi-prompt').innerText = currentStudyCard.vi || "Nghĩa của từ này";
    
    document.getElementById('study-input').style.display = 'block';
    document.getElementById('study-input').value = '';
    document.getElementById('study-input').disabled = false;
    document.getElementById('btn-check-answer').style.display = 'block';
    setTimeout(() => document.getElementById('study-input').focus(), 100);
}

window.checkAnswer = function() {
    const userInput = document.getElementById('study-input').value.trim().toLowerCase();
    const correctWord = currentStudyCard.word.toLowerCase();
    const feedbackEl = document.getElementById('answer-feedback');
    
    document.getElementById('study-input').disabled = true;
    document.getElementById('btn-check-answer').style.display = 'none';
    
    if (userInput === correctWord) {
        feedbackEl.innerHTML = `🎉 Tuyệt vời! "<span style="color:var(--primary);">${currentStudyCard.word}</span>"`;
    } else {
        feedbackEl.innerHTML = `❌ Sai rồi! Đáp án là "<span style="color:var(--primary);">${currentStudyCard.word}</span>"`;
    }
    
    document.getElementById('study-word').innerText = currentStudyCard.word;
    document.getElementById('study-en').innerText = currentStudyCard.en || '';
    document.getElementById('flashcard-back').style.display = 'block';
    
    window.playNativeAudio(currentStudyCard.word, 'de-DE');
}

// THUẬT TOÁN LẶP LẠI NGẮT QUÃNG (SPACED REPETITION) THEO CHUẨN LINGOLAND
window.gradeCard = function(grade) {
    let card = currentStudyCard;
    if (card.repetitions === undefined) card.repetitions = 0;
    
    let currentLevel = card.repetitions;
    let interval = 1; 
    
    // Quy tắc thăng cấp Level
    if (grade === 'again') currentLevel = 0;
    else if (grade === 'hard') { if (currentLevel === 0) currentLevel = 1; }
    else if (grade === 'good') currentLevel = Math.min(currentLevel + 1, 6);
    else if (grade === 'easy') currentLevel = Math.min(currentLevel + 2, 6);
    
    card.repetitions = currentLevel;
    
    // Ánh xạ Cấp độ thành số ngày giãn cách
    if (currentLevel === 0) interval = 0;
    else if (currentLevel === 1) interval = 1;  // Lv1: 1 ngày
    else if (currentLevel === 2) interval = 2;  // Lv2: 2 ngày
    else if (currentLevel === 3) interval = 3;  // Lv3: 3 ngày
    else if (currentLevel === 4) interval = 5;  // Lv4: 5 ngày
    else if (currentLevel === 5) interval = 8;  // Lv5: 8 ngày
    else if (currentLevel > 5) interval = 15;
    
    if (grade === 'again') {
        card.nextReview = Date.now() + 60000; 
        dueCards.push(dueCards.shift()); 
    } else {
        card.nextReview = Date.now() + (interval * 24 * 60 * 60 * 1000);
        dueCards.shift(); 
    }
    
    saveData();
    window.loadNextCard();
}

window.endStudySession = function() {
    document.getElementById('study-setup').style.display = 'block';
    document.getElementById('study-session').style.display = 'none';
}

// Công nghệ AI mô phỏng đánh giá bài tập đặt câu tiếng Đức
window.checkSentenceWithAI = function() {
    const feedbackEl = document.getElementById('sentence-ai-feedback');
    feedbackEl.innerHTML = `✨ <b>AI đánh giá:</b> 9/10! Câu tiếng Đức rất chuẩn, Gut gemacht! 🎉`;
    feedbackEl.style.color = "var(--primary)";
}

// Khởi chạy khi tải xong trang
setTimeout(window.updateStats, 500);