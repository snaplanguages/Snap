import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"; 
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"; 
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getMessaging, getToken } from "[suspicious link removed]";

// --- CẤU HÌNH FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyBlTU4B563sSsTVbLai_je29l6eC8T-cm0",
    authDomain: "snapenglish-cb6e2.firebaseapp.com",
    projectId: "snapenglish-cb6e2",
    storageBucket: "[đã xoá đường liên kết đáng ngờ]",
    messagingSenderId: "373152038413",
    appId: "1:373152038413:web:19284622571390f8585f44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let messaging = null;
try {
    messaging = getMessaging(app);
} catch (e) {
    console.log("FCM Messaging không được hỗ trợ trên thiết bị/trình duyệt này:", e);
}

// --- BIẾN QUẢN LÝ TRẠNG THÁI ---
let userContext = null;
let appData = { decks: [] };
let currentViewingWord = null;
let selectedDeckId = null;
let currentStudyMode = 'auto';
let tfCorrectAnswer = true;
let currentDetailDeckId = null;
let sortMode = 'time';
let dueCards = [];
let currentStudyCard = null;
let arrangeUserAnswer = [];
let arrangeCorrectWord = "";

// --- THEO DÕI TRẠNG THÁI ĐĂNG NHẬP ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('authOverlay').style.display = 'none';
        userContext = { email: [đã xoá đường liên kết đáng ngờ], uid: user.uid };
        fetchUserData();
    } else { 
        document.getElementById('authOverlay').style.display = 'flex'; 
    }
});

async function fetchUserData() {
    if (!userContext) return;
    try {
        const docRef = doc(db, "user_vocab_data", userContext.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            appData = [đã xoá đường liên kết đáng ngờ]();
        } else {
            appData = { decks: [{ id: "d_" + [đã xoá đường liên kết đáng ngờ](), name: "Từ vựng bắt Buộc", words: [] }] };
            await syncData();
        }
        
        document.getElementById('sync-text').innerText = "Đã đồng bộ Cloud";
        document.getElementById('sync-dot').classList.add('online');
        renderDecksView();
        
        // Kích hoạt xin quyền và thiết lập thông báo
        window.requestNotificationPermission();
        setupPushNotification();
        
        // Kiểm tra lịch học bằng Cute Dialog sau 5 giây vào trang
        setTimeout(window.checkAndNotifyDueCards, 5000); 
    } catch(e) {
        console.error("Fetch error", e);
        showToast("Lỗi tải dữ liệu", "error");
    }
}

async function syncData() {
    if (!userContext) return;
    try {
        await setDoc(doc(db, "user_vocab_data", userContext.uid), appData);
    } catch (e) {
        console.error("Sync error", e);
        showToast("Lỗi đồng bộ lên đám mây", "error");
    }
}

// --- ĐĂNG KÝ SERVICE WORKER TỰ ĐỘNG NHẬN PUSH NOTIFICATION KHI MỞ CHROME ---
async function setupPushNotification() {
    if ('serviceWorker' in navigator && messaging) {
        try {
            docs/lessons/
const registration = await navigator.serviceWorker.register('./firebase-messaging-sw.js');
            console.log('FCM Service Worker đã được đăng ký thành công:', registration);
            
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const token = await getToken(messaging, { serviceWorkerRegistration: registration });
                console.log("FCM Device Token của bạn:", token);
                // Bạn có thể lưu token này lên Firestore nếu muốn gửi thông báo theo UID cá nhân
            }
        } catch (error) {
            console.error('Lỗi đăng ký Service Worker FCM:', error);
        }
    }
}

// --- HÀM THÔNG BÁO TỚI GIỜ HỌC BẰNG CUTE DIALOG ---
window.checkAndNotifyDueCards = function() {
    if (!appData || !appData.decks) return;

    let dueCount = 0;
    const now = [đã xoá đường liên kết đáng ngờ]();
    
    appData.decks.forEach(deck => {
        const toReview = deck.words.filter(w => !w.nextReview || w.nextReview <= now);
        dueCount += toReview.length;
    });

    if (dueCount > 0) {
        // Chuyển từ Notification mặc định của trình duyệt sang Cute Dialog
        window.showCuteDialog({
            type: 'alert',
            title: 'Đến giờ ôn tập rồi nè! 🧠',
            message: `Bạn đang có ${dueCount} từ vựng mốc meo chờ bạn ôn lại đó. Vào học ngay thôi!!! ✨`,
            icon: '🧠'
        }).then(() => {
            const navItems = document.querySelectorAll('.nav-item');
            window.switchTab('study-view', navItems[6] || navItems);
        });
    }
}

window.requestNotificationPermission = async function() {
    if (!("Notification" in window)) {
        console.log("Trình duyệt này không hỗ trợ Notification API.");
        return;
    }
    if (Notification.permission !== "granted" && Notification.permission !== "denied") {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            showToast("Đã bật thông báo nhắc nhở học tập! 🔔", "success");
        }
    }
}
setInterval(window.checkAndNotifyDueCards, 3600000); // Tự động check mỗi tiếng

// --- CUTE UI DIALOG ---
window.showCuteDialog = function(options) {
    return new Promise((resolve) => {
        const modal = document.getElementById('cute-dialog-modal');
        const title = document.getElementById('cute-dialog-title');
        const message = document.getElementById('cute-dialog-message');
        const input = document.getElementById('cute-dialog-input');
        const btnCancel = document.getElementById('btn-dialog-cancel');
        const btnOk = document.getElementById('btn-dialog-ok');
        const icon = document.getElementById('cute-dialog-icon');

        title.innerText = options.title || "Thông báo";
        message.innerText = options.message || "";
        icon.innerText = options.icon || "🌸";

        if (options.type === 'prompt') {
            [đã xoá đường liên kết đáng ngờ].display = 'block';
            input.value = options.defaultValue || '';
            input.onfocus = () => { [đã xoá đường liên kết đáng ngờ].borderColor = "var(--primary)"; };
            input.onblur = () => { [đã xoá đường liên kết đáng ngờ].borderColor = "var(--border)"; };
            setTimeout(() => input.focus(), 100);
        } else {
            [đã xoá đường liên kết đáng ngờ].display = 'none';
        }

        if (options.type === 'alert') {
            [đã xoá đường liên kết đáng ngờ].display = 'none';
        } else {
            [đã xoá đường liên kết đáng ngờ].display = 'block';
        }

        [đã xoá đường liên kết đáng ngờ].display = 'flex';

        const cleanUp = () => {
            [đã xoá đường liên kết đáng ngờ].display = 'none';
            btnCancel.onclick = null;
            btnOk.onclick = null;
            input.onkeydown = null;
        };

        btnCancel.onclick = () => { cleanUp(); resolve(null); };
        btnOk.onclick = () => { 
            cleanUp(); 
            if (options.type === 'prompt') resolve(input.value);
            else resolve(true);
        };

        if(options.type === 'prompt') {
            input.onkeydown = (e) => {
                if(e.key === 'Enter') { cleanUp(); resolve(input.value); }
            }
        }
    });
}

// --- GIAO DIỆN & ĐIỀU HƯỚNG ---
window.toggleSidebar = function() {
    document.querySelector('.sidebar').classList.toggle('show');
    document.getElementById('sidebar-overlay').classList.toggle('show');
    
    const icon = document.querySelector('#menu-toggle i');
    if (document.querySelector('.sidebar').classList.contains('show')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
}

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

window.switchStudyMode = function(mode) { 
    currentStudyMode = mode; 
    document.querySelectorAll('.mode-btn').forEach(btn => { 
        btn.classList.remove('active'); 
        [đã xoá đường liên kết đáng ngờ].background = 'transparent'; 
        [đã xoá đường liên kết đáng ngờ].color = 'var(--text-dark)'; 
    }); 
    const activeBtn = document.getElementById(`mode-${mode}`); 
    if (activeBtn) { 
        activeBtn.classList.add('active'); 
        [đã xoá đường liên kết đáng ngờ].background = 'var(--gradient-brand)'; 
        [đã xoá đường liên kết đáng ngờ].color = 'white'; 
    } 
};

window.switchTab = function(tabId, el) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));

    if(el) el.classList.add('active');
    document.getElementById(tabId).classList.add('active');

    if(tabId === 'study-view') window.initStudySetup();
    if(tabId === 'dict-view') window.updateStats(); 

    if(window.innerWidth <= 900) {
        document.querySelector('.sidebar').classList.remove('show');
        document.getElementById('sidebar-overlay').classList.remove('show');
        document.querySelector('#menu-toggle i').className = 'fa-solid fa-bars';
    }
}

window.closeModal = function(id) {
    document.getElementById(id).style.display = 'none';
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    const icon = type === 'success' ? '<i class="fa-solid fa-heart" style="color: var(--primary)"></i>' : '<i class="fa-solid fa-circle-exclamation"></i>';
    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- TRA CỨU TỪ ĐIỂN ---
async function fetchTranslation(text, targetLang = 'vi') {
    try {
        const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(googleUrl)}`;
        
        const response = await fetch(proxyUrl);
        if (!response.ok) return null;
        
        const data = await response.json();
        return {
            text: data,
            dict: []
        };
    } catch (error) {
        console.error("Lỗi fetchTranslation:", error);
        return null;
    }
}

window.handleSearch = async function() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase().trim();
    const resultsBox = document.getElementById('search-results');

    if (query.length < 2) {
        [đã xoá đường liên kết đáng ngờ].display = 'none';
        return;
    }

    resultsBox.innerHTML = '<div class="result-item" style="color: var(--text-muted); justify-content: center; font-weight: 700;">Đang tra cứu từ điển... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 10px; color: var(--primary);"></i></div>';
    [đã xoá đường liên kết đáng ngờ].display = 'block';

    try {
        const viData = await fetchTranslation(query, 'vi');
        
        if (!viData || !viData.text || viData.text === "Không có bản dịch") {
            resultsBox.innerHTML = '<div class="result-item" style="color: var(--danger); justify-content: center;">Không tìm thấy từ này trong từ điển 🥲</div>';
            return;
        }

        const realWordData = {
            word: query,
            ipa: "",
            vi: viData.text,
            viDict: viData.dict || [],
            meanings: [{
                pos: viData.dict && viData.dict.length > 0 ? viData.dict.pos : "Wort",
                definitions: [{ en: viData.text, ex: "" }]
            }],
            pos: viData.dict && viData.dict.length > 0 ? viData.dict.pos : "Wort",
            en: viData.text,
            ex: ""
        };

        resultsBox.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <div>
                <span class="result-word" style="text-transform: capitalize;">${realWordData.word}</span> 
                <span style="font-size: 13px; color: var(--accent); margin-left: 10px; font-weight: 800; text-transform: uppercase;">${realWordData.pos}</span>
            </div>
            <span class="result-vi">${[đã xoá đường liên kết đáng ngờ]}</span>
        `;
        div.onclick = () => window.showWordDetail(realWordData);
        resultsBox.appendChild(div);

    } catch (error) {
        console.error("Search error:", error);
        resultsBox.innerHTML = '<div class="result-item" style="color: var(--danger); justify-content: center;">Lỗi kết nối máy chủ. Vui lòng thử lại!</div>';
    }
};

window.showWordDetail = function(wordData) {
    currentViewingWord = wordData;
    document.getElementById('search-results').style.display = 'none';
    document.getElementById('search-input').value = '';

    document.getElementById('md-word').innerText = wordData.word;
    document.getElementById('md-ipa').innerText = wordData.ipa;
    document.getElementById('md-vi-main').innerText = [đã xoá đường liên kết đáng ngờ];
    
    let viDictHtml = "";
    if (wordData.viDict && wordData.viDict.length > 0) {
        wordData.viDict.forEach(d => {
            viDictHtml += `
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                    <span style="min-width: 80px; font-weight: 800; color: var(--text-muted); background: white; padding: 3px 6px; border-radius: 6px; font-size: 11px; border: 1px solid var(--border); text-transform: uppercase; text-align: center; margin-top: 2px;">${d.pos}</span>
                    <span style="font-size: 15px; color: var(--text-dark); line-height: 1.5; flex: 1; font-weight: 600;">${d.meanings}</span>
                </div>`;
        });
    }
    
    const container = document.getElementById('md-meanings-container');
    container.innerHTML = [đã xoá đường liên kết đáng ngờ](m => `
        <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid var(--border);">
            <div class="word-pos" style="margin-bottom: 16px;">${m.pos}</div>
            <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 16px;">
                ${[đã xoá đường liên kết đáng ngờ]((d, i) => `
                    <li style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="background: var(--primary-light); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 12px; font-weight: 800; flex-shrink: 0; margin-top: 2px;">\${i + 1}</div>
                        <div>
                            <div style="font-size: 17px; font-weight: 600; color: var(--text-dark); line-height: 1.4;">\\({d.en}</div>
                            \\){d.ex ? `<div class="example-box" style="margin-top: 10px; padding: 12px 16px; font-size: 15px; margin-bottom: 0;">${d.ex}</div>` : ''}
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');

    window.playNativeAudio(wordData.word, 'de-DE'); 
    document.getElementById('btn-play-audio').onclick = () => window.playNativeAudio(wordData.word, 'de-DE');

    document.getElementById('word-modal').style.display = 'flex';
}

window.toggleOtherMeanings = function() {
    const list = document.getElementById('other-meanings-list');
    const btn = document.getElementById('btn-toggle-others');
    if ([đã xoá đường liên kết đáng ngờ].display === 'none') {
        [đã xoá đường liên kết đáng ngờ].display = 'flex';
        btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Ẩn bớt';
    } else {
        [đã xoá đường liên kết đáng ngờ].display = 'none';
        btn.innerHTML = '<i class="fa-solid fa-layer-group"></i> Xem các từ loại / nghĩa khác';
    }
}

window.playNativeAudio = function(text, lang = 'de-DE') {
    if (!text) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang; 
        utterance.rate = 0.9; 
        window.speechSynthesis.speak(utterance);
    } else {
        showToast("Trình duyệt không hỗ trợ phát âm thanh", "error");
    }
}

// --- QUẢN LÝ BỘ BÀI (DECKS) ---
window.renderDecksView = function() {
    const grid = document.getElementById('decks-grid');
    grid.innerHTML = '';
    appData.decks.forEach(deck => {
        grid.innerHTML += `
            <div class="deck-card" onclick="openDeckDetail('${[đã xoá đường liên kết đáng ngờ]}')">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div class="deck-title">${[đã xoá đường liên kết đáng ngờ]}</div>
                    <div style="display:flex; gap: 12px; font-size: 18px;">
                        <i class="fa-solid fa-pen" style="color: var(--primary-light); cursor: pointer; transition: 0.2s;" onmouseover="[đã xoá đường liên kết đáng ngờ].color='var(--primary)'" onmouseout="[đã xoá đường liên kết đáng ngờ].color='var(--primary-light)'" onclick="renameDeck(event, '${[đã xoá đường liên kết đáng ngờ]}')"></i>
                        <i class="fa-solid fa-trash" style="color: #FCA5A5; cursor: pointer; transition: 0.2s;" onmouseover="[đã xoá đường liên kết đáng ngờ].color='var(--danger)'" onmouseout="[đã xoá đường liên kết đáng ngờ].color='#FCA5A5'" onclick="deleteDeck(event, '${[đã xoá đường liên kết đáng ngờ]}')"></i>
                    </div>
                </div>
                <div class="deck-stats">${deck.words.length} thẻ từ vựng</div>
            </div>
        `;
    });
    window.updateStats();
}

window.renameDeck = async function(event, deckId) {
    event.stopPropagation(); 
    const deck = appData.decks.find(d => [đã xoá đường liên kết đáng ngờ] === deckId);
    const newName = await window.showCuteDialog({
        type: 'prompt',
        title: 'Đổi tên bộ từ',
        message: 'Bạn muốn đặt tên mới là gì nè? 🌸',
        defaultValue: [đã xoá đường liên kết đáng ngờ],
        icon: '📝'
    });
    
    if (newName && newName.trim() !== "") {
        [đã xoá đường liên kết đáng ngờ] = newName.trim();
        window.renderDecksView();
        await syncData();
        showToast("Đã đổi tên siêu cưng thành công! 💕");
    }
}

window.deleteDeck = async function(event, deckId) {
    event.stopPropagation();
    const confirmDel = await window.showCuteDialog({
        type: 'confirm',
        title: 'Xóa bộ từ',
        message: 'Bạn có chắc chắn muốn xóa không? Sẽ bay màu hết từ vựng đó nha (╥﹏╥)',
        icon: '🗑️'
    });

    if (confirmDel) {
        appData.decks = appData.decks.filter(d => [đã xoá đường liên kết đáng ngờ] !== deckId);
        window.renderDecksView();
        await syncData();
        showToast("Đã xóa bộ bài!", "error");
    }
}

window.deleteWordFromDeck = async function(event, deckId, wordId) {
    event.stopPropagation();
    const confirmDel = await window.showCuteDialog({
        type: 'confirm',
        title: 'Xóa từ vựng',
        message: 'Bạn có chắc chắn muốn xóa từ này khỏi bộ bài không? Xóa xong là bay màu luôn đó nha 🥺',
        icon: '🗑️'
    });

    if (confirmDel) {
        const deck = appData.decks.find(d => [đã xoá đường liên kết đáng ngờ] === deckId);
        if (deck) {
            deck.words = deck.words.filter(w => [đã xoá đường liên kết đáng ngờ] !== wordId);
            window.renderDeckWords(); 
            window.updateStats(); 
            await syncData(); 
            showToast("Đã tiễn từ vựng đi xa thành công!", "success");
        }
    }
}

window.openDeckDetail = function(deckId) {
    currentDetailDeckId = deckId;
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById('deck-detail-view').classList.add('active');
    window.renderDeckWords();
}

window.toggleSortMode = function() {
    if (sortMode === 'time') { sortMode = 'az'; document.getElementById('sort-label').innerText = "A-Z"; }
    else if (sortMode === 'az') { sortMode = 'za'; document.getElementById('sort-label').innerText = "Z-A"; }
    else { sortMode = 'time'; document.getElementById('sort-label').innerText = "Mới nhất"; }
    window.renderDeckWords();
}

window.renderDeckWords = function() {
    const deck = appData.decks.find(d => [đã xoá đường liên kết đáng ngờ] === currentDetailDeckId);
    if(!deck) return;
    document.getElementById('detail-deck-title').innerText = [đã xoá đường liên kết đáng ngờ];
    const list = document.getElementById('deck-words-list');
    list.innerHTML = '';
    
    let displayWords = [...deck.words]; 
    if (sortMode === 'az') displayWords.sort((a, b) => a.word.localeCompare(b.word));
    if (sortMode === 'za') displayWords.sort((a, b) => b.word.localeCompare(a.word));

    if(displayWords.length === 0) {
        list.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px; font-weight: 700; font-size: 18px;">Bộ bài này chưa có từ nào, hãy tra từ rồi thêm vào nhé! ✨</p>';
        return;
    }

    displayWords.forEach(w => {
        list.innerHTML += `
            <div style="background: white; padding: 20px; border-radius: 16px; border: 2px solid var(--border); display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
                <div>
                    <strong style="font-size: 20px; color: var(--text-dark);">${w.word}</strong> <span style="font-size: 13px; color: var(--accent); margin-left: 8px; font-weight: 800; background: #FFF0F5; padding: 4px 8px; border-radius: 6px;">${w.pos}</span>
                    <div style="color: var(--text-muted); font-size: 15px; font-weight: 600; margin-top: 6px;">${[đã xoá đường liên kết đáng ngờ]}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="font-size: 14px; background: var(--gradient-brand); color: white; padding: 6px 12px; border-radius: 8px; font-weight: 800; box-shadow: 0 2px 8px rgba(255,51,102,0.3);">Lv ${w.repetitions || 0}</div>
                    <i class="fa-solid fa-trash" style="color: #FCA5A5; cursor: pointer; font-size: 18px; transition: 0.2s;" onmouseover="[đã xoá đường liên kết đáng ngờ].color='var(--danger)'" onmouseout="[đã xoá đường liên kết đáng ngờ].color='#FCA5A5'" onclick="deleteWordFromDeck(event, '${[đã xoá đường liên kết đáng ngờ]}', '${[đã xoá đường liên kết đáng ngờ]}')"></i>
                </div>
            </div>
        `;
    });
}

window.showCreateDeckModal = async function() {
    const newName = await window.showCuteDialog({
        type: 'prompt',
        title: 'Tạo bộ từ mới',
        message: 'Hãy đặt tên cho bộ từ vựng mới của bạn nè ✨',
        icon: '📚'
    });

    if (newName && newName.trim() !== "") {
        appData.decks.push({
            id: "d_" + [đã xoá đường liên kết đáng ngờ](),
            name: newName.trim(),
            words: []
        });
        window.renderDecksView();
        await syncData();
        showToast("Đã tạo bộ bài thành công! 💕");
    }
}

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
            selectedDeckId = [đã xoá đường liên kết đáng ngờ];
            document.getElementById('new-deck-name').value = '';
        };
        list.appendChild(item);
    });

    document.getElementById('save-deck-modal').style.display = 'flex';
}

window.confirmSaveWord = async function() {
    const newDeckName = document.getElementById('new-deck-name').value.trim();
    let targetDeckId = selectedDeckId;

    if (newDeckName) {
        const newDeck = {
            id: "d_" + [đã xoá đường liên kết đáng ngờ](),
            name: newDeckName,
            words: []
        };
        appData.decks.push(newDeck);
        targetDeckId = [đã xoá đường liên kết đáng ngờ];
    }

    if (!targetDeckId) {
        await window.showCuteDialog({
            type: 'alert',
            title: 'Úi chà!',
            message: 'Bạn chưa chọn bộ từ vựng để lưu hoặc chưa nhập tên bộ mới đó nha 😅',
            icon: '🤔'
        });
        return;
    }

    const deckIndex = appData.decks.findIndex(d => [đã xoá đường liên kết đáng ngờ] === targetDeckId);
    const wordToSave = {
        ...currentViewingWord,
        id: "w_" + [đã xoá đường liên kết đáng ngờ](),
        repetitions: 0, 
        nextReview: [đã xoá đường liên kết đáng ngờ]()
    };

    if(appData.decks[deckIndex].words.find(w => w.word === wordToSave.word)) {
        showToast("Từ này bạn lưu rồi nha, học nhanh thôi!", "error");
        return;
    }

    appData.decks[deckIndex].words.push(wordToSave);
    showToast(`Đã cất "${wordToSave.word}" vào túi thành công! 💖`);
    window.closeModal('save-deck-modal');
    
    window.renderDecksView(); 
    await syncData(); 
}

// --- TIẾN TRÌNH ÔN TẬP TỪ VỰNG (STUDY SESSION) ---
window.initStudySetup = function() {
    document.getElementById('study-setup').style.display = 'block';
    document.getElementById('study-session').style.display = 'none';
    const list = document.getElementById('study-deck-list');
    list.innerHTML = '';
    
    appData.decks.forEach(deck => {
        const now = [đã xoá đường liên kết đáng ngờ]();
        const toReview = deck.words.filter(w => !w.nextReview || w.nextReview <= now);
        
        list.innerHTML += `
            <button class="btn" style="background: white; border: 2px solid var(--border); display: flex; justify-content: space-between; padding: 18px 24px; font-size: 18px; color: var(--text-dark);" onclick="startStudySession('${[đã xoá đường liên kết đáng ngờ]}')">
                <span>${[đã xoá đường liên kết đáng ngờ]}</span>
                <span style="background: var(--gradient-brand); color: white; padding: 4px 12px; border-radius: 12px; font-size: 14px;">${toReview.length} từ cần ôn</span>
            </button>
        `;
    });
}

window.startStudySession = function(deckId) {
    const deck = appData.decks.find(d => [đã xoá đường liên kết đáng ngờ] === deckId);
    const now = [đã xoá đường liên kết đáng ngờ]();
    dueCards = deck.words.filter(w => !w.nextReview || w.nextReview <= now);
    dueCards.sort(() => Math.random() - 0.5); 
    
    if(dueCards.length === 0) {
        showToast("Bộ bài này đã học xong sạch sẽ rồi, nghỉ ngơi thôi! 🎉", "error");
        return;
    }

    document.getElementById('study-setup').style.display = 'none';
    document.getElementById('study-session').style.display = 'block';
    window.loadNextCard();
}

window.loadNextCard = function() {
    if(dueCards.length === 0) {
        window.showCuteDialog({
            type: 'alert',
            title: 'Giỏi quá chừng!',
            message: 'Bạn đã ôn xong tất cả các từ hôm nay rồi. Tự thưởng cho mình một ly trà sữa nha 🧋',
            icon: '🎉'
        }).then(() => {
            window.endStudySession();
        });
        return;
    }

    currentStudyCard = dueCards;
    document.getElementById('study-progress').innerText = `Từ còn lại: ${dueCards.length}`;

    document.getElementById('sentence-input').value = '';
    document.getElementById('sentence-ai-feedback').innerText = '';
    document.getElementById('sentence-word-highlight').innerText = currentStudyCard.word;

    document.getElementById('flashcard-front').style.display = 'block';
    document.getElementById('flashcard-back').style.display = 'none';

    document.getElementById('study-input').style.display = 'none';
    document.getElementById('btn-check-answer').style.display = 'none';
    document.getElementById('btn-flip-card').style.display = 'none';
    document.getElementById('mcq-options-container').style.display = 'none';
    document.getElementById('tf-options-container').style.display = 'none';
    document.getElementById('arrange-container').style.display = 'none';
    document.getElementById('rewrite-container').style.display = 'none';

    let availableModes = ['writing', 'flashcard', 'mcq', 'true_false', 'arrange'];
    if (currentStudyCard.ex && currentStudyCard.ex.trim() !== "") {
        availableModes.push('rewrite');
    }

    const activeMode = availableModes[Math.floor(Math.random() * availableModes.length)];
    const promptTitle = document.getElementById('study-prompt-title');
    const viPrompt = document.getElementById('study-vi-prompt');

    if (activeMode === 'writing') {
        promptTitle.innerText = "✍️ VIẾT TỪ NÀY SANG TIẾNG ĐỨC:";
        viPrompt.innerText = [đã xoá đường liên kết đáng ngờ] || currentStudyCard.en;
        document.getElementById('study-input').style.display = 'block';
        document.getElementById('study-input').value = '';
        document.getElementById('study-input').disabled = false;
        document.getElementById('btn-check-answer').style.display = 'block';
        setTimeout(() => document.getElementById('study-input').focus(), 100);
    } else if (activeMode === 'flashcard') {
        promptTitle.innerText = "🗂️ LẬT THẺ ĐỂ ÔN TẬP TỪ:";
        viPrompt.innerText = [đã xoá đường liên kết đáng ngờ] || currentStudyCard.en;
        document.getElementById('btn-flip-card').style.display = 'block';
    } else if (activeMode === 'mcq') {
        promptTitle.innerText = "🎯 TRẮC NGHIỆM: CHỌN TỪ TIẾNG ĐỨC ĐÚNG VỚI NGHĨA:";
        viPrompt.innerText = [đã xoá đường liên kết đáng ngờ] || currentStudyCard.en;
        document.getElementById('mcq-options-container').style.display = 'flex';
        window.generateMCQOptions();
    } else if (activeMode === 'true_false') {
        document.getElementById('tf-options-container').style.display = 'flex';
        window.generateTFOptions();
    } else if (activeMode === 'arrange') {
        document.getElementById('arrange-container').style.display = 'flex';
        window.generateArrangeOptions();
    } else if (activeMode === 'rewrite') {
        document.getElementById('rewrite-container').style.display = 'flex';
        window.generateRewriteOptions();
    }
};

window.checkAnswer = function() {
    const userInput = document.getElementById('study-input').value.trim().toLowerCase();
    const correctWord = currentStudyCard.word.toLowerCase();
    const feedbackEl = document.getElementById('answer-feedback');

    document.getElementById('study-input').disabled = true;
    document.getElementById('btn-check-answer').style.display = 'none';

    if (userInput === correctWord) {
        feedbackEl.innerHTML = `🎉 Tuyệt vời! Chuẩn không cần chỉnh: "<span style="color: var(--primary);">${currentStudyCard.word}</span>"`;
        [đã xoá đường liên kết đáng ngờ].color = "var(--text-dark)";
    } else {
        feedbackEl.innerHTML = `❌ Rất tiếc nha! Đáp án là "<span style="color: var(--primary);">${currentStudyCard.word}</span>" (Bạn gõ: <span style="color: var(--danger); text-decoration: line-through;">${userInput || 'trống'}</span>)`;
        [đã xoá đường liên kết đáng ngờ].color = "var(--text-dark)";
    }

    document.getElementById('study-word').innerText = currentStudyCard.word;
    document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
    document.getElementById('study-en').innerText = currentStudyCard.en || '';
    document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
    
    document.getElementById('flashcard-back').style.display = 'block';
    window.playNativeAudio(currentStudyCard.word, 'de-DE'); 
}

document.getElementById('study-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') window.checkAnswer();
});

window.gradeCard = async function(grade) {
    let card = currentStudyCard;
    if (card.repetitions === undefined) {
        card.repetitions = 0;
        card.nextReview = [đã xoá đường liên kết đáng ngờ]();
    }

    let currentLevel = card.repetitions;
    let interval = 1;

    if (grade === 'again') {
        currentLevel = 0;
    } else if (grade === 'hard') {
        if (currentLevel === 0) currentLevel = 1;
    } else if (grade === 'good') {
        currentLevel = Math.min(currentLevel + 1, 6);
    } else if (grade === 'easy') {
        currentLevel = Math.min(currentLevel + 2, 6);
    }

    card.repetitions = currentLevel;

    if (currentLevel === 0) interval = 0;
    else if (currentLevel === 1) interval = 1;
    else if (currentLevel === 2) interval = 2;
    else if (currentLevel === 3) interval = 3;
    else if (currentLevel === 4) interval = 5;
    else if (currentLevel === 5) interval = 8;
    else if (currentLevel > 5) interval = 15;

    if (grade === 'again') {
        card.nextReview = [đã xoá đường liên kết đáng ngờ]() + 60000;
        dueCards.push(dueCards.shift());
    } else {
        card.nextReview = [đã xoá đường liên kết đáng ngờ]() + (interval * 24 * 60 * 60 * 1000);
        dueCards.shift();
    }

    window.updateStats();
    await syncData();
    window.loadNextCard();
};

window.endStudySession = function() {
    document.getElementById('study-setup').style.display = 'block';
    document.getElementById('study-session').style.display = 'none';
}

// --- CÁC CHẾ ĐỘ HỌC ĐA DẠNG ---
window.generateMCQOptions = function() {
    const correctWord = currentStudyCard.word;
    let distractorPool = [];
    appData.decks.forEach(deck => {
        deck.words.forEach(w => {
            if (w.word && w.word.toLowerCase() !== correctWord.toLowerCase()) {
                distractorPool.push(w.word);
            }
        });
    });

    distractorPool = [...new Set(distractorPool)];
    const fallbackWords = ["abstrakt", "bedeutend", "chancen", "bestimmen", "effektiv", "garantie", "gefahr", "relevanz", "verstehen", "zukunft"];
    while (distractorPool.length < 3) {
        const randomFallback = fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
        if (randomFallback.toLowerCase() !== correctWord.toLowerCase() && !distractorPool.includes(randomFallback)) {
            distractorPool.push(randomFallback);
        }
    }

    distractorPool.sort(() => Math.random() - 0.5);
    const selectedDistractors = distractorPool.slice(0, 3);
    const finalChoices = [correctWord, ...selectedDistractors];
    finalChoices.sort(() => Math.random() - 0.5);

    const container = document.getElementById('mcq-options-container');
    container.innerHTML = '';
    finalChoices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        [đã xoá đường liên kết đáng ngờ].cssText = "background: white; border: 2px solid var(--border); color: var(--text-dark); width: 100%; padding: 14px; border-radius: 12px; font-weight: 700; text-align: center; transition: all 0.2s;";
        btn.innerText = choice;
        btn.onclick = () => window.selectMCQOption(choice, btn);
        container.appendChild(btn);
    });
};

window.selectMCQOption = function(selectedWord, selectedBtn) {
    const correctWord = currentStudyCard.word;
    const container = document.getElementById('mcq-options-container');
    const buttons = container.querySelectorAll('button');

    buttons.forEach(btn => btn.disabled = true);
    const feedbackEl = document.getElementById('answer-feedback');

    if (selectedWord.toLowerCase() === correctWord.toLowerCase()) {
        [đã xoá đường liên kết đáng ngờ].background = '#D1FAE5';
        [đã xoá đường liên kết đáng ngờ].borderColor = '#10B981';
        feedbackEl.innerHTML = `🎉 Chính xác! Đáp án đúng là: "<span style="color: var(--primary);">${correctWord}</span>"`;
    } else {
        [đã xoá đường liên kết đáng ngờ].background = '#FEE2E2';
        [đã xoá đường liên kết đáng ngờ].borderColor = '#EF4444';
        buttons.forEach(btn => {
            if (btn.innerText.toLowerCase() === correctWord.toLowerCase()) {
                [đã xoá đường liên kết đáng ngờ].borderColor = '#10B981';
                [đã xoá đường liên kết đáng ngờ].borderWidth = '3px';
            }
        });
        feedbackEl.innerHTML = `❌ Chưa chính xác! Đáp án đúng là "<span style="color: var(--primary);">${correctWord}</span>"`;
    }

    document.getElementById('study-word').innerText = currentStudyCard.word;
    document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
    document.getElementById('study-en').innerText = currentStudyCard.en || '';
    document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';

    document.getElementById('flashcard-back').style.display = 'block';
    window.playNativeAudio(currentStudyCard.word, 'de-DE');
};

window.generateTFOptions = function() {
    const correctMeaning = [đã xoá đường liên kết đáng ngờ];
    const promptTitle = document.getElementById('study-prompt-title');
    promptTitle.innerText = "🤔 CHỌN ĐÚNG HOẶC SAI (TRUE / FALSE):";

    const isCorrectChance = Math.random() < 0.5;
    let meaningShown = correctMeaning;

    if (!isCorrectChance) {
        let otherMeanings = [];
        appData.decks.forEach(deck => {
            deck.words.forEach(w => {
                if ([đã xoá đường liên kết đáng ngờ] && [đã xoá đường liên kết đáng ngờ] !== correctMeaning) {
                    otherMeanings.push([đã xoá đường liên kết đáng ngờ]);
                }
            });
        });

        if (otherMeanings.length > 0) {
            meaningShown = otherMeanings[Math.floor(Math.random() * otherMeanings.length)];
            tfCorrectAnswer = false;
        } else {
            meaningShown = "Trì hoãn / Không chấp nhận";
            tfCorrectAnswer = false;
        }
    } else {
        tfCorrectAnswer = true;
    }

    document.getElementById('study-vi-prompt').innerHTML = `Từ "<b>${currentStudyCard.word}</b>" có nghĩa là:<br><span style="color: var(--primary); font-size: 32px;">${meaningShown}</span>?`;
};

window.selectTFOption = function(userChoice) {
    const correctWord = currentStudyCard.word;
    const feedbackEl = document.getElementById('answer-feedback');
    document.getElementById('tf-options-container').style.display = 'none';

    if (userChoice === tfCorrectAnswer) {
        feedbackEl.innerHTML = `🎉 Chính xác! Bạn đã nhận diện nghĩa của từ rất tốt.`;
        [đã xoá đường liên kết đáng ngờ].color = "var(--text-dark)";
    } else {
        feedbackEl.innerHTML = `❌ Chưa chính xác rồi! Từ "<b>${correctWord}</b>" thực chất mang nghĩa là "<b>${[đã xoá đường liên kết đáng ngờ]}</b>".`;
        [đã xoá đường liên kết đáng ngờ].color = "var(--text-dark)";
    }

    document.getElementById('study-word').innerText = currentStudyCard.word;
    document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
    document.getElementById('study-en').innerText = currentStudyCard.en || '';
    document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';

    document.getElementById('flashcard-back').style.display = 'block';
    window.playNativeAudio(currentStudyCard.word, 'de-DE');
};

window.generateArrangeOptions = function() {
    const promptTitle = document.getElementById('study-prompt-title');
    const viPrompt = document.getElementById('study-vi-prompt');
    promptTitle.innerText = "🔀 GHÉP CÁC CHỮ CÁI THÀNH TỪ ĐÚNG (WORD QUEST):";
    viPrompt.innerText = [đã xoá đường liên kết đáng ngờ] || "";

    arrangeCorrectWord = currentStudyCard.word.toLowerCase().replace(/\s+/g, '');
    arrangeUserAnswer = Array(arrangeCorrectWord.length).fill("");

    const slotsContainer = document.getElementById('arrange-slots');
    const lettersContainer = document.getElementById('arrange-letters');
    slotsContainer.innerHTML = '';
    lettersContainer.innerHTML = '';

    for (let i = 0; i < arrangeCorrectWord.length; i++) {
        const slot = document.createElement('div');
        [đã xoá đường liên kết đáng ngờ].cssText = "width: 40px; height: 40px; border-bottom: 3px solid var(--primary); display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; color: var(--primary); transition: all 0.2s;";
        [đã xoá đường liên kết đáng ngờ] = `arrange-slot-${i}`;
        slotsContainer.appendChild(slot);
    }

    const letters = arrangeCorrectWord.split('');
    let attempts = 0;
    do {
        letters.sort(() => Math.random() - 0.5);
        attempts++;
    } while (letters.join('') === arrangeCorrectWord && arrangeCorrectWord.length > 1 && attempts < 10);

    letters.forEach((char) => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        [đã xoá đường liên kết đáng ngờ].cssText = "width: 42px; height: 42px; background: white; border: 2px solid var(--border); border-radius: 10px; font-weight: 800; font-size: 18px; padding: 0; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-dark); transition: all 0.1s;";
        btn.innerText = char;
        btn.onclick = () => window.selectArrangeLetter(char, btn);
        lettersContainer.appendChild(btn);
    });
};

window.selectArrangeLetter = function(char, btn) {
    const emptyIndex = arrangeUserAnswer.indexOf("");
    if (emptyIndex !== -1) {
        arrangeUserAnswer[emptyIndex] = char;
        const slot = document.getElementById(`arrange-slot-${emptyIndex}`);
        slot.innerText = char;
        [đã xoá đường liên kết đáng ngờ].borderBottomColor = "var(--text-dark)";

        [đã xoá đường liên kết đáng ngờ].opacity = "0.2";
        [đã xoá đường liên kết đáng ngờ].pointerEvents = "none";
        btn.dataset.slotIndex = emptyIndex; 

        [đã xoá đường liên kết đáng ngờ].cursor = "pointer";
        slot.onclick = () => {
            arrangeUserAnswer[emptyIndex] = "";
            slot.innerText = "";
            [đã xoá đường liên kết đáng ngờ].borderBottomColor = "var(--primary)";
            slot.onclick = null;
            [đã xoá đường liên kết đáng ngờ].cursor = "default";
            [đã xoá đường liên kết đáng ngờ].opacity = "1";
            [đã xoá đường liên kết đáng ngờ].pointerEvents = "auto";
            delete btn.dataset.slotIndex;
        };
    }

    if (!arrangeUserAnswer.includes("")) {
        const fullAnswer = arrangeUserAnswer.join('');
        const feedbackEl = document.getElementById('answer-feedback');
        document.getElementById('arrange-container').style.display = 'none';

        if (fullAnswer === arrangeCorrectWord) {
            feedbackEl.innerHTML = `🎉 Chính xác! Bạn đã ghép từ hoàn hảo: "<span style="color: var(--primary);">${currentStudyCard.word}</span>"`;
        } else {
            feedbackEl.innerHTML = `❌ Chưa chính xác rồi! Từ đúng là "<span style="color: var(--primary);">${currentStudyCard.word}</span>" (Bạn ghép thành: <span style="color: var(--danger);">${fullAnswer}</span>)`;
        }

        document.getElementById('study-word').innerText = currentStudyCard.word;
        document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
        document.getElementById('study-en').innerText = currentStudyCard.en || '';
        document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
        document.getElementById('flashcard-back').style.display = 'block';
        window.playNativeAudio(currentStudyCard.word, 'de-DE');
    }
};

window.generateRewriteOptions = function() {
    const promptTitle = document.getElementById('study-prompt-title');
    const viPrompt = document.getElementById('study-vi-prompt');
    promptTitle.innerText = "📝 ĐIỀN TỪ CÒN THIẾU VÀO CÂU VÍ DỤ (REWRITE):";
    viPrompt.innerText = [đã xoá đường liên kết đáng ngờ] || "";

    let sentenceHtml = currentStudyCard.ex || "";
    const wordLen = currentStudyCard.word.length;
    const firstLetter = currentStudyCard.word.charAt(0).toUpperCase();

    const hintPlaceholder = `<b>${firstLetter}</b>` + " _".repeat(wordLen - 1);
    const escapedWord = currentStudyCard.word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regex = new RegExp(escapedWord, 'gi');

    if (sentenceHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = sentenceHtml;
        const highlightSpan = tempDiv.querySelector('span');
        if (highlightSpan) {
            highlightSpan.innerHTML = hintPlaceholder;
            sentenceHtml = tempDiv.innerHTML;
        } else {
            sentenceHtml = sentenceHtml.replace(regex, `<span style="border-bottom: 2px dashed var(--primary); padding: 0 4px;">${hintPlaceholder}</span>`);
        }
    } else {
        sentenceHtml = `Mẫu câu ví dụ với từ vựng: <span style="border-bottom: 2px dashed var(--primary); padding: 0 4px;">${hintPlaceholder}</span>`;
    }

    document.getElementById('rewrite-sentence').innerHTML = sentenceHtml;
    document.getElementById('rewrite-input').value = '';
    setTimeout(() => document.getElementById('rewrite-input').focus(), 100);
};

window.checkRewriteAnswer = function() {
    const userInput = document.getElementById('rewrite-input').value.trim().toLowerCase();
    const correctWord = currentStudyCard.word.toLowerCase();
    const feedbackEl = document.getElementById('answer-feedback');

    document.getElementById('rewrite-container').style.display = 'none';

    if (userInput === correctWord) {
        feedbackEl.innerHTML = `🎉 Chính xác! Bạn đã điền từ rất chuẩn: "<span style="color: var(--primary);">${currentStudyCard.word}</span>"`;
    } else {
        feedbackEl.innerHTML = `❌ Rất tiếc nha! Từ đúng là "<span style="color: var(--primary);">${currentStudyCard.word}</span>" (Bạn điền: <span style="color: var(--danger); text-decoration: line-through;">${userInput || 'trống'}</span>)`;
    }

    document.getElementById('study-word').innerText = currentStudyCard.word;
    document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
    document.getElementById('study-en').innerText = currentStudyCard.en || '';
    document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
    document.getElementById('flashcard-back').style.display = 'block';
    window.playNativeAudio(currentStudyCard.word, 'de-DE');
};

// --- CHẤM ĐIỂM CÂU VỚI AI GEMINI ---
window.checkSentenceWithAI = async function() {
    const sentence = document.getElementById('sentence-input').value.trim();
    const targetWord = currentStudyCard.word;
    const feedbackEl = document.getElementById('sentence-ai-feedback');

    if (!sentence) {
        feedbackEl.innerText = "⚠️ Hãy gõ một câu tiếng Đức trước khi AI chấm điểm nhé!";
        [đã xoá đường liên kết đáng ngờ].color = "var(--danger)";
        return;
    }

    if (!sentence.toLowerCase().includes(targetWord.toLowerCase())) {
        feedbackEl.innerText = `❌ Câu của bạn chưa chứa từ vựng yêu cầu "${targetWord}". Hãy thử lại nhé!`;
        [đã xoá đường liên kết đáng ngờ].color = "var(--danger)";
        return;
    }

    feedbackEl.innerHTML = `✨ AI đang phân tích ngữ pháp tiếng Đức... <i class="fa-solid fa-spinner fa-spin"></i>`;
    [đã xoá đường liên kết đáng ngờ].color = "var(--primary)";

    const apiKey = "AIzaSyCE6f7OUwBMkLwBoJbOvh0h0Q0UTe9ABek"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const prompt = `Bạn là một gia sư tiếng Đức chuyên nghiệp. Người học vừa viết một câu tiếng Đức có sử dụng từ vựng "${targetWord}":
Câu của học viên: "${sentence}"

Hãy đánh giá câu này theo tiêu chí:
1. Ngữ pháp và chính tả tiếng Đức có đúng không?
2. Từ vựng có được dùng tự nhiên không?
Hãy cho điểm từ 1 đến 10 và đưa ra lời nhận xét ngắn gọn, thân thiện bằng tiếng Việt (kèm theo câu sửa nếu câu bị lỗi sai).`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        const aiResponseText = data.candidates.[đã xoá đường liên kết đáng ngờ].text;

        feedbackEl.innerHTML = `✨ <b>AI đánh giá:</b> ${aiResponseText}`;
        [đã xoá đường liên kết đáng ngờ].color = "var(--primary)";

    } catch (error) {
        feedbackEl.innerText = "❌ Lỗi kết nối tới AI. Vui lòng kiểm tra lại API Key!";
        [đã xoá đường liên kết đáng ngờ].color = "var(--danger)";
    }
};
