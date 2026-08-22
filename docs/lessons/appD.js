import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
        import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
        import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyBlTU4B563sSsTVbLai_je29l6eC8T-cm0",
            authDomain: "snapenglish-cb6e2.firebaseapp.com",
            projectId: "snapenglish-cb6e2",
            storageBucket: "snapenglish-cb6e2.firebasestorage.app",
            messagingSenderId: "373152038413",
            appId: "1:373152038413:web:19284622571390f8585f44"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

        let userContext = null;
        let appData = { decks: [] };
        let currentViewingWord = null;
        let selectedDeckId = null;
let currentStudyMode = 'auto'; // 'auto' (mặc định trộn chế độ), 'writing', 'flashcard', 'mcq'
let tfCorrectAnswer = true; // Biến lưu đáp án Đúng/Sai
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                document.getElementById('authOverlay').style.display = 'none';
                userContext = { email: user.email, uid: user.uid };
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
                    appData = docSnap.data();
                } else {
                    appData = { decks: [{ id: "d_" + Date.now(), name: "Từ vựng bắt Buộc", words: [] }] };
                    await syncData();
                }
                
                document.getElementById('sync-text').innerText = "Đã đồng bộ Cloud";
                document.getElementById('sync-dot').classList.add('online');
                renderDecksView();
                window.requestNotificationPermission(); // Xin quyền thông báo
                setTimeout(window.checkAndNotifyDueCards, 5000); // Đợi 5s sau khi vào web thì check xem có từ nào cần ôn không
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

        // --- HÀM ẨN/HIỆN SIDEBAR CHO MOBILE ---
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

        // --- Cập nhật UI Thống kê (Logic Mới học) ---
        window.updateStats = function() {
            let total = 0, newWords = 0, shortTerm = 0, longTerm = 0, mastered = 0;
            appData.decks.forEach(deck => {
                deck.words.forEach(w => {
                    if (w.repetitions !== undefined) {
                        total++; // Cứ thêm vào là cộng vô Tổng số từ
                        
                        // LOGIC MỚI: Mới học (Lv1) chỉ khi đã học ít nhất 1 lần (repetitions >= 1)
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
                    input.style.display = 'block';
                    input.value = options.defaultValue || '';
                    input.onfocus = () => { input.style.borderColor = "var(--primary)"; };
                    input.onblur = () => { input.style.borderColor = "var(--border)"; };
                    setTimeout(() => input.focus(), 100);
                } else {
                    input.style.display = 'none';
                }

                if (options.type === 'alert') {
                    btnCancel.style.display = 'none';
                } else {
                    btnCancel.style.display = 'block';
                }

                modal.style.display = 'flex';

                const cleanUp = () => {
                    modal.style.display = 'none';
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
window.switchStudyMode = function(mode) {
  currentStudyMode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.style.background = 'transparent';
    btn.style.color = 'var(--text-dark)';
  });
  const activeBtn = document.getElementById(`mode-${mode}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.style.background = 'var(--gradient-brand)';
    activeBtn.style.color = 'white';
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

       async function fetchTranslation(text, targetLang = 'vi') {
    try {
        const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(googleUrl)}`;
        
        const response = await fetch(proxyUrl);
        if (!response.ok) return null;
        
        const data = await response.json();
        return {
            text: data[0][0][0],
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
        resultsBox.style.display = 'none';
        return;
    }

    resultsBox.innerHTML = '<div class="result-item" style="color: var(--text-muted); justify-content: center; font-weight: 700;">Đang tra cứu từ điển... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 10px; color: var(--primary);"></i></div>';
    resultsBox.style.display = 'block';

    try {
        // Dịch trực tiếp từ tiếng Đức (de) sang tiếng Việt (vi)
        const viData = await fetchTranslation(query, 'vi');
        
        if (!viData || !viData.text || viData.text === "Không có bản dịch") {
            resultsBox.innerHTML = '<div class="result-item" style="color: var(--danger); justify-content: center;">Không tìm thấy từ này trong từ điển 🥲</div>';
            return;
        }

        // Tạo dữ liệu từ vựng hoàn chỉnh cho Tiếng Đức
        const realWordData = {
            word: query,
            ipa: "", // Tiếng Đức phát âm chuẩn theo quy tắc chữ viết
            vi: viData.text,
            viDict: viData.dict || [],
            meanings: [{
                pos: viData.dict && viData.dict.length > 0 ? viData.dict[0].pos : "Wort",
                definitions: [{ en: viData.text, ex: "" }]
            }],
            pos: viData.dict && viData.dict.length > 0 ? viData.dict[0].pos : "Wort",
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
            <span class="result-vi">${realWordData.vi}</span>
        `;
        div.onclick = () => window.showWordDetail(realWordData);
        resultsBox.appendChild(div);

    } catch (error) {
        console.error("Search error:", error);
        resultsBox.innerHTML = '<div class="result-item" style="color: var(--danger); justify-content: center;">Lỗi kết nối máy chủ. Vui lòng thử lại!</div>';
    }
};

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

        window.showWordDetail = function(wordData) {
            currentViewingWord = wordData;
            document.getElementById('search-results').style.display = 'none';
            document.getElementById('search-input').value = '';

            // Điền thông tin cơ bản
            document.getElementById('md-word').innerText = wordData.word;
            document.getElementById('md-ipa').innerText = wordData.ipa;
          // Xử lý hiển thị Tiếng Việt
            document.getElementById('md-vi-main').innerText = wordData.vi;
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
            
            // Render động TẤT CẢ các từ loại và nghĩa
            const container = document.getElementById('md-meanings-container');
            container.innerHTML = wordData.meanings.map(m => `
                <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid var(--border);">
                    <div class="word-pos" style="margin-bottom: 16px;">${m.pos}</div>
                    <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 16px;">
                        ${m.definitions.map((d, i) => `
                            <li style="display: flex; gap: 12px; align-items: flex-start;">
                                <div style="background: var(--primary-light); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 12px; font-weight: 800; flex-shrink: 0; margin-top: 2px;">${i + 1}</div>
                                <div>
                                    <div style="font-size: 17px; font-weight: 600; color: var(--text-dark); line-height: 1.4;">${d.en}</div>
                                    ${d.ex ? `<div class="example-box" style="margin-top: 10px; padding: 12px 16px; font-size: 15px; margin-bottom: 0;">${d.ex}</div>` : ''}
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('');

            // Xử lý Audio
            window.playNativeAudio(wordData.word, 'de-DE'); 
            document.getElementById('btn-play-audio').onclick = () => window.playNativeAudio(wordData.word, 'de-DE');


            document.getElementById('word-modal').style.display = 'flex';
        }

        // Hàm bật/tắt danh sách nghĩa phụ
        window.toggleOtherMeanings = function() {
            const list = document.getElementById('other-meanings-list');
            const btn = document.getElementById('btn-toggle-others');
            if (list.style.display === 'none') {
                list.style.display = 'flex';
                btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Ẩn bớt';
            } else {
                list.style.display = 'none';
                btn.innerHTML = '<i class="fa-solid fa-layer-group"></i> Xem các từ loại / nghĩa khác';
            }
        }
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
        let currentDetailDeckId = null;
        let sortMode = 'time';

        window.renderDecksView = function() {
            const grid = document.getElementById('decks-grid');
            grid.innerHTML = '';
            appData.decks.forEach(deck => {
                grid.innerHTML += `
                    <div class="deck-card" onclick="openDeckDetail('${deck.id}')">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div class="deck-title">${deck.name}</div>
                            <div style="display:flex; gap: 12px; font-size: 18px;">
                                <i class="fa-solid fa-pen" style="color: var(--primary-light); cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--primary-light)'" onclick="renameDeck(event, '${deck.id}')"></i>
                                <i class="fa-solid fa-trash" style="color: #FCA5A5; cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='var(--danger)'" onmouseout="this.style.color='#FCA5A5'" onclick="deleteDeck(event, '${deck.id}')"></i>
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
            const deck = appData.decks.find(d => d.id === deckId);
            const newName = await window.showCuteDialog({
                type: 'prompt',
                title: 'Đổi tên bộ từ',
                message: 'Bạn muốn đặt tên mới là gì nè? 🌸',
                defaultValue: deck.name,
                icon: '📝'
            });
            
            if (newName && newName.trim() !== "") {
                deck.name = newName.trim();
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
                appData.decks = appData.decks.filter(d => d.id !== deckId);
                window.renderDecksView();
                await syncData();
                showToast("Đã xóa bộ bài!", "error");
            }
        }
window.deleteWordFromDeck = async function(event, deckId, wordId) {
            event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
            
            // Sử dụng Dialog cute thay vì alert/confirm mặc định
            const confirmDel = await window.showCuteDialog({
                type: 'confirm',
                title: 'Xóa từ vựng',
                message: 'Bạn có chắc chắn muốn xóa từ này khỏi bộ bài không? Xóa xong là bay màu luôn đó nha 🥺',
                icon: '🗑️'
            });

            if (confirmDel) {
                const deck = appData.decks.find(d => d.id === deckId);
                if (deck) {
                    // Lọc bỏ từ vựng có ID tương ứng
                    deck.words = deck.words.filter(w => w.id !== wordId);
                    
                    window.renderDeckWords(); // Render lại danh sách để mất từ vựng
                    window.updateStats(); // Cập nhật lại 4 vòng tròn (số lượng sẽ tự động giảm)
                    await syncData(); // Đồng bộ ngay lên Cloud để thiết bị khác cũng bị xóa theo
                    
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
            const deck = appData.decks.find(d => d.id === currentDetailDeckId);
            if(!deck) return;
            document.getElementById('detail-deck-title').innerText = deck.name;
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
                            <div style="color: var(--text-muted); font-size: 15px; font-weight: 600; margin-top: 6px;">${w.vi}</div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <div style="font-size: 14px; background: var(--gradient-brand); color: white; padding: 6px 12px; border-radius: 8px; font-weight: 800; box-shadow: 0 2px 8px rgba(255,51,102,0.3);">Lv ${w.repetitions || 0}</div>
                            <i class="fa-solid fa-trash" style="color: #FCA5A5; cursor: pointer; font-size: 18px; transition: 0.2s;" onmouseover="this.style.color='var(--danger)'" onmouseout="this.style.color='#FCA5A5'" onclick="deleteWordFromDeck(event, '${deck.id}', '${w.id}')"></i>
                        </div>
                    </div>
                `;
            });
        }

        let dueCards = [];
        let currentStudyCard = null;

        window.initStudySetup = function() {
            document.getElementById('study-setup').style.display = 'block';
            document.getElementById('study-session').style.display = 'none';
            const list = document.getElementById('study-deck-list');
            list.innerHTML = '';
            
            appData.decks.forEach(deck => {
                const now = Date.now();
                const toReview = deck.words.filter(w => !w.nextReview || w.nextReview <= now);
                
                list.innerHTML += `
                    <button class="btn" style="background: white; border: 2px solid var(--border); display: flex; justify-content: space-between; padding: 18px 24px; font-size: 18px; color: var(--text-dark);" onclick="startStudySession('${deck.id}')">
                        <span>${deck.name}</span>
                        <span style="background: var(--gradient-brand); color: white; padding: 4px 12px; border-radius: 12px; font-size: 14px;">${toReview.length} từ cần ôn</span>
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
  
  // SỬA LỖI TRIỆT ĐỂ: Lấy đúng từ vựng đầu tiên trong hàng đợi học
  currentStudyCard = dueCards; 
  document.getElementById('study-progress').innerText = `Từ còn lại: ${dueCards.length}`;
  
  // Reset trạng thái luyện đặt câu với AI ở mặt sau
  document.getElementById('sentence-input').value = '';
  document.getElementById('sentence-ai-feedback').innerText = '';
  document.getElementById('sentence-word-highlight').innerText = currentStudyCard.word;
  
  // Reset trạng thái hiển thị mặt trước / mặt sau
  document.getElementById('flashcard-front').style.display = 'block';
  document.getElementById('flashcard-back').style.display = 'none';
  
  // Ẩn tất cả các container giao diện trước khi kích hoạt chế độ ngẫu nhiên
  document.getElementById('study-input').style.display = 'none';
  document.getElementById('btn-check-answer').style.display = 'none';
  document.getElementById('btn-flip-card').style.display = 'none';
  document.getElementById('mcq-options-container').style.display = 'none';
  document.getElementById('tf-options-container').style.display = 'none';
  document.getElementById('arrange-container').style.display = 'none';
  document.getElementById('rewrite-container').style.display = 'none';
  
  // LOGIC TRỘN TỰ ĐỘNG CHUẨN LINGOLAND:
  // Định nghĩa danh sách các chế độ học có thể kích hoạt
  let availableModes = ['writing', 'flashcard', 'mcq', 'true_false', 'arrange'];
  
  // Chỉ kích hoạt chế độ "Rewrite" (điền câu) nếu từ vựng có câu ví dụ thực tế
  if (currentStudyCard.ex && currentStudyCard.ex.trim() !== "") {
    availableModes.push('rewrite');
  }
  
  // Chọn ngẫu nhiên một chế độ học cho từ này
  const activeMode = availableModes[Math.floor(Math.random() * availableModes.length)];
  
  const promptTitle = document.getElementById('study-prompt-title');
  const viPrompt = document.getElementById('study-vi-prompt');
  
  if (activeMode === 'writing') {
    promptTitle.innerText = "✍️ VIẾT TỪ NÀY SANG TIẾNG ĐỨC:";
    viPrompt.innerText = currentStudyCard.vi || currentStudyCard.en;
    
    document.getElementById('study-input').style.display = 'block';
    document.getElementById('study-input').value = '';
    document.getElementById('study-input').disabled = false;
    document.getElementById('btn-check-answer').style.display = 'block';
    setTimeout(() => document.getElementById('study-input').focus(), 100);
    
  } else if (activeMode === 'flashcard') {
    promptTitle.innerText = "🗂️ LẬT THẺ ĐỂ ÔN TẬP TỪ:";
    viPrompt.innerText = currentStudyCard.vi || currentStudyCard.en;
    document.getElementById('btn-flip-card').style.display = 'block';
    
  } else if (activeMode === 'mcq') {
    promptTitle.innerText = "🎯 TRẮC NGHIỆM: CHỌN TỪ TIẾNG ĐỨC ĐÚNG VỚI NGHĨA:";
    viPrompt.innerText = currentStudyCard.vi || currentStudyCard.en;
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
                feedbackEl.style.color = "var(--text-dark)";
            } else {
                feedbackEl.innerHTML = `❌ Rất tiếc nha! Đáp án là "<span style="color: var(--primary);">${currentStudyCard.word}</span>" (Bạn gõ: <span style="color: var(--danger); text-decoration: line-through;">${userInput || 'trống'}</span>)`;
                feedbackEl.style.color = "var(--text-dark)";
            }

            document.getElementById('study-word').innerText = currentStudyCard.word;
            document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
            document.getElementById('study-en').innerText = currentStudyCard.en || '';
            document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
            
            document.getElementById('flashcard-back').style.display = 'block';
            window.playNativeAudio(currentStudyCard.word, 'de-DE'); 
        }

        document.getElementById('study-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') window.checkAnswer();
        });

        window.gradeCard = async function(grade) {
  let card = currentStudyCard;
  
  // Khởi tạo Level 0 nếu là từ vựng mới tinh chưa từng ôn tập
  if (card.repetitions === undefined) {
    card.repetitions = 0; 
    card.nextReview = Date.now();
  }
  
  let currentLevel = card.repetitions;
  let interval = 1; // Số ngày giãn cách mặc định
  
  // LOGIC ĐIỀU CHỈNH CẤP ĐỘ THEO LỰA CHỌN CỦA NGƯỜI DÙNG:
  if (grade === 'again') {
    // Nếu chọn "Lại": Reset từ về Level 1 [3] (hoặc giữ Level 0 nếu chưa thuộc)
    currentLevel = 0;
  } else if (grade === 'hard') {
    // Nếu chọn "Khó": Giữ nguyên cấp độ hiện tại (nhưng tối thiểu phải lên Level 1)
    if (currentLevel === 0) currentLevel = 1;
  } else if (grade === 'good') {
    // Nếu chọn "Tốt": Tiến thêm 1 Cấp độ (Tối đa là Level 6 - Thuộc lòng) [12]
    currentLevel = Math.min(currentLevel + 1, 6);
  } else if (grade === 'easy') {
    // Nếu chọn "Dễ": Thăng cấp nhanh chóng
    currentLevel = Math.min(currentLevel + 2, 6);
  }
  
  card.repetitions = currentLevel;
  
  // ÁNH XẠ CẤP ĐỘ SANG KHOẢNG THỜI GIAN ÔN TẬP (INTERVAL DÀNH CHO TIẾNG ANH CHUẨN LINGOLAND):
  if (currentLevel === 0) {
    interval = 0;
  } else if (currentLevel === 1) {
    interval = 1; // Level 1: Ôn tập lại trong vòng 1 ngày [3]
  } else if (currentLevel === 2) {
    interval = 2; // Level 2: Ôn tập lại sau 2 ngày [3]
  } else if (currentLevel === 3) {
    interval = 3; // Level 3: Ôn tập sau 3 ngày [3]
  } else if (currentLevel === 4) {
    interval = 5; // Level 4: Ôn tập sau 5 ngày [3]
  } else if (currentLevel === 5) {
    interval = 8; // Level 5: Ôn tập sau 8 ngày [3]
  } else if (currentLevel > 5) {
    interval = 15; // Cấp độ Thuộc lòng: AI tự động giãn cách nhắc lại sau 15 ngày [3]
  }
  
  // LÊN LỊCH ÔN TẬP TIẾP THEO
  if (grade === 'again') {
    card.nextReview = Date.now() + 60000; // Đặt học lại sau 1 phút
    // Đẩy từ này xuống cuối hàng đợi học để gặp lại ngay trong session này
    dueCards.push(dueCards.shift());
  } else {
    // Đổi ngày sang mili-giây và lên lịch
    card.nextReview = Date.now() + (interval * 24 * 60 * 60 * 1000);
    // Loại bỏ khỏi session hiện tại vì đã hoàn thành lượt học
    dueCards.shift();
  }
  
  window.updateStats(); // Cập nhật thống kê vòng tròn động [13]
  await syncData();     // Tự động đồng bộ hóa lên Cloud Firestore [14]
  window.loadNextCard();
};

        window.endStudySession = function() {
            document.getElementById('study-setup').style.display = 'block';
            document.getElementById('study-session').style.display = 'none';
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
                    id: "d_" + Date.now(),
                    name: newName.trim(),
                    words: []
                });
                window.renderDecksView();
                await syncData();
                showToast("Đã tạo bộ bài thành công! 💕");
            }
        }
window.generateMCQOptions = function() {
  const correctWord = currentStudyCard.word;
  
  // Gom toàn bộ từ vựng khác có trong tài khoản người dùng làm mồi nhiễu
  let distractorPool = [];
  appData.decks.forEach(deck => {
    deck.words.forEach(w => {
      if (w.word && w.word.toLowerCase() !== correctWord.toLowerCase()) {
        distractorPool.push(w.word);
      }
    });
  });
  
  distractorPool = [...new Set(distractorPool)]; // Loại trùng lặp
  
  // Kho từ dự phòng chuẩn Oxford khi tài khoản chưa lưu đủ từ
  const fallbackWords = ["abstrakt", "bedeutend", "chancen", "bestimmen", "effektiv", "garantie", "gefahr", "relevanz", "verstehen", "zukunft"];
  while (distractorPool.length < 3) {
    const randomFallback = fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
    if (randomFallback.toLowerCase() !== correctWord.toLowerCase() && !distractorPool.includes(randomFallback)) {
      distractorPool.push(randomFallback);
    }
  }
  
  // Trộn và lấy ra đúng 3 từ sai
  distractorPool.sort(() => Math.random() - 0.5);
  const selectedDistractors = distractorPool.slice(0, 3);
  
  // Gộp từ đúng + 3 từ sai và xáo trộn vị trí
  const finalChoices = [correctWord, ...selectedDistractors];
  finalChoices.sort(() => Math.random() - 0.5);
  
  // Kết xuất nút bấm trắc nghiệm ra màn hình
  const container = document.getElementById('mcq-options-container');
  container.innerHTML = '';
  finalChoices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.style.cssText = `
      background: white; border: 2px solid var(--border); color: var(--text-dark);
      width: 100%; padding: 14px; border-radius: 12px; font-weight: 700;
      text-align: center; transition: all 0.2s;
    `;
    btn.innerText = choice;
    btn.onclick = () => window.selectMCQOption(choice, btn);
    container.appendChild(btn);
  });
};

window.selectMCQOption = function(selectedWord, selectedBtn) {
  const correctWord = currentStudyCard.word;
  const container = document.getElementById('mcq-options-container');
  const buttons = container.querySelectorAll('button');
  
  // Khóa tất cả nút bấm tránh người dùng click nhiều lần
  buttons.forEach(btn => btn.disabled = true);
  
  const feedbackEl = document.getElementById('answer-feedback');
  
  if (selectedWord.toLowerCase() === correctWord.toLowerCase()) {
    selectedBtn.style.background = '#D1FAE5'; // Tô xanh nút đúng
    selectedBtn.style.borderColor = '#10B981';
    feedbackEl.innerHTML = `🎉 Chính xác! Đáp án đúng là: "<span style="color: var(--primary);">${correctWord}</span>"`;
  } else {
    selectedBtn.style.background = '#FEE2E2'; // Tô đỏ nút chọn sai
    selectedBtn.style.borderColor = '#EF4444';
    
    // Tìm nút có đáp án đúng để viền xanh lá chỉ dẫn lỗi sai
    buttons.forEach(btn => {
      if (btn.innerText.toLowerCase() === correctWord.toLowerCase()) {
        btn.style.borderColor = '#10B981';
        btn.style.borderWidth = '3px';
      }
    });
    feedbackEl.innerHTML = `❌ Chưa chính xác! Đáp án đúng là "<span style="color: var(--primary);">${correctWord}</span>"`;
  }
  
  // Hiển thị chi tiết ngữ cảnh từ vựng ở mặt sau
  document.getElementById('study-word').innerText = currentStudyCard.word;
  document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
  document.getElementById('study-en').innerText = currentStudyCard.en || '';
  document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
  
  document.getElementById('flashcard-back').style.display = 'block';
  window.playNativeAudio(currentStudyCard.word, 'de-DE');
};
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
                    id: "d_" + Date.now(),
                    name: newDeckName,
                    words: []
                };
                appData.decks.push(newDeck);
                targetDeckId = newDeck.id;
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

            const deckIndex = appData.decks.findIndex(d => d.id === targetDeckId);
            const wordToSave = {
                ...currentViewingWord,
                id: "w_" + Date.now(),
                repetitions: 0, 
                nextReview: Date.now()
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

        window.checkAndNotifyDueCards = function() {
            if (!appData || !appData.decks) return;

            let dueCount = 0;
            const now = Date.now();
            
            appData.decks.forEach(deck => {
                const toReview = deck.words.filter(w => !w.nextReview || w.nextReview <= now);
                dueCount += toReview.length;
            });

            if (dueCount > 0) {
              
                if (Notification.permission === "granted") {
                    const notif = new Notification("Đến giờ ôn tập rồi nè! 🧠", {
                        body: `Bạn đang có ${dueCount} từ vựng mốc meo chờ bạn ôn lại đó. Vào học ngay thôi!!! ✨`,
                        icon: "ảnh.png", 
                        badge: "ảnh.png",
                        requireInteraction: true 
                    });

                    notif.onclick = function(event) {
                        event.preventDefault();
                        window.focus(); 
                        window.switchTab('study-view', document.querySelectorAll('.nav-item')[2]);
                        notif.close();
                    };
                }
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
        setInterval(window.checkAndNotifyDueCards, 3600000);
        // --- BỔ SUNG CÁC TÍNH NĂNG MỚI CHUẨN LINGOLAND ---

// 1. Khởi tạo câu hỏi Đúng/Sai ngẫu nhiên
window.generateTFOptions = function() {
  const correctMeaning = currentStudyCard.vi;
  const promptTitle = document.getElementById('study-prompt-title');
  promptTitle.innerText = "🤔 CHỌN ĐÚNG HOẶC SAI (TRUE / FALSE):";
  
  // 50% cơ hội hiển thị đúng nghĩa, 50% hiển thị sai nghĩa
  const isCorrectChance = Math.random() < 0.5;
  let meaningShown = correctMeaning;
  
  if (!isCorrectChance) {
    // Gom một nghĩa ngẫu nhiên của các từ khác trong tài khoản làm mồi nhiễu
    let otherMeanings = [];
    appData.decks.forEach(deck => {
      deck.words.forEach(w => {
        if (w.vi && w.vi !== correctMeaning) {
          otherMeanings.push(w.vi);
        }
      });
    });
    
    if (otherMeanings.length > 0) {
      meaningShown = otherMeanings[Math.floor(Math.random() * otherMeanings.length)];
      tfCorrectAnswer = false;
    } else {
      meaningShown = "Trì hoãn / Không chấp nhận"; // Nghĩa dự phòng khi bộ từ chưa có từ khác
      tfCorrectAnswer = false;
    }
  } else {
    tfCorrectAnswer = true;
  }
  
  document.getElementById('study-vi-prompt').innerHTML = `Từ "<b>${currentStudyCard.word}</b>" có nghĩa là:<br><span style="color: var(--primary); font-size: 32px;">${meaningShown}</span>?`;
};

// 2. Xử lý lựa chọn Đúng/Sai của người học
window.selectTFOption = function(userChoice) {
  const correctWord = currentStudyCard.word;
  const feedbackEl = document.getElementById('answer-feedback');
  
  // Ẩn container nút bấm
  document.getElementById('tf-options-container').style.display = 'none';
  
  if (userChoice === tfCorrectAnswer) {
    feedbackEl.innerHTML = `🎉 Chính xác! Bạn đã nhận diện nghĩa của từ rất tốt.`;
    feedbackEl.style.color = "var(--text-dark)";
  } else {
    feedbackEl.innerHTML = `❌ Chưa chính xác rồi! Từ "<b>${correctWord}</b>" thực chất mang nghĩa là "<b>${currentStudyCard.vi}</b>".`;
    feedbackEl.style.color = "var(--text-dark)";
  }
  
  // Điền dữ liệu mặt sau của thẻ
  document.getElementById('study-word').innerText = currentStudyCard.word;
  document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
  document.getElementById('study-en').innerText = currentStudyCard.en || '';
  document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
  
  document.getElementById('flashcard-back').style.display = 'block';
  window.playNativeAudio(currentStudyCard.word, 'de-DE'); // Phát âm chuẩn [3, 4]
};

// 3. Công nghệ AI mô phỏng chấm điểm và đánh giá lỗi đặt câu chuẩn Lingoland
window.checkSentenceWithAI = async function() {
    const sentence = document.getElementById('sentence-input').value.trim();
    const targetWord = currentStudyCard.word;
    const feedbackEl = document.getElementById('sentence-ai-feedback');

    if (!sentence) {
        feedbackEl.innerText = "⚠️ Hãy gõ một câu tiếng Đức trước khi AI chấm điểm nhé!";
        feedbackEl.style.color = "var(--danger)";
        return;
    }

    // Kiểm tra xem câu có chứa từ vựng đang học không
    if (!sentence.toLowerCase().includes(targetWord.toLowerCase())) {
        feedbackEl.innerText = `❌ Câu của bạn chưa chứa từ vựng yêu cầu "${targetWord}". Hãy thử lại nhé!`;
        feedbackEl.style.color = "var(--danger)";
        return;
    }

    feedbackEl.innerHTML = `✨ AI đang phân tích ngữ pháp tiếng Đức... <i class="fa-solid fa-spinner fa-spin"></i>`;
    feedbackEl.style.color = "var(--primary)";

    // Dán API Key của em vào đây (Thay thế chỗ 'YOUR_GEMINI_API_KEY')
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
        const aiResponseText = data.candidates[0].content.parts[0].text;

        // Hiển thị kết quả thật do AI phân tích lên màn hình
        feedbackEl.innerHTML = `✨ <b>AI đánh giá:</b> ${aiResponseText}`;
        feedbackEl.style.color = "var(--primary)";

    } catch (error) {
        feedbackEl.innerText = "❌ Lỗi kết nối tới AI. Vui lòng kiểm tra lại API Key!";
        feedbackEl.style.color = "var(--danger)";
    }
};
        let arrangeUserAnswer = [];
let arrangeCorrectWord = "";

// 1. Chế độ Word Quest: Sắp xếp các chữ cái tạo thành từ đúng
window.generateArrangeOptions = function() {
  const promptTitle = document.getElementById('study-prompt-title');
  const viPrompt = document.getElementById('study-vi-prompt');
  promptTitle.innerText = "🔀 GHÉP CÁC CHỮ CÁI THÀNH TỪ ĐÚNG (WORD QUEST):";
  viPrompt.innerText = currentStudyCard.vi || "";

  // Chuẩn hóa từ khóa (loại bỏ khoảng trắng nếu có để xử lý ghép chữ)
  arrangeCorrectWord = currentStudyCard.word.toLowerCase().replace(/\s+/g, '');
  arrangeUserAnswer = Array(arrangeCorrectWord.length).fill("");
  
  const slotsContainer = document.getElementById('arrange-slots');
  const lettersContainer = document.getElementById('arrange-letters');
  slotsContainer.innerHTML = '';
  lettersContainer.innerHTML = '';

  // Tạo ô hiển thị kết quả ghép chữ của người học
  for (let i = 0; i < arrangeCorrectWord.length; i++) {
    const slot = document.createElement('div');
    slot.style.cssText = "width: 40px; height: 40px; border-bottom: 3px solid var(--primary); display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; color: var(--primary); transition: all 0.2s;";
    slot.id = `arrange-slot-${i}`;
    slotsContainer.appendChild(slot);
  }

  // Xáo trộn chữ cái của từ gốc
  const letters = arrangeCorrectWord.split('');
  let attempts = 0;
  do {
    letters.sort(() => Math.random() - 0.5);
    attempts++;
  } while (letters.join('') === arrangeCorrectWord && arrangeCorrectWord.length > 1 && attempts < 10);

  // Sinh các nút chữ cái để người học click chọn
  letters.forEach((char, index) => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.style.cssText = "width: 42px; height: 42px; background: white; border: 2px solid var(--border); border-radius: 10px; font-weight: 800; font-size: 18px; padding: 0; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-dark); transition: all 0.1s;";
    btn.innerText = char;
    btn.onclick = () => window.selectArrangeLetter(char, btn);
    lettersContainer.appendChild(btn);
  });
};

window.selectArrangeLetter = function(char, btn) {
  // Tìm ô trống hiển thị đầu tiên từ trái qua phải
  const emptyIndex = arrangeUserAnswer.indexOf("");
  if (emptyIndex !== -1) {
    arrangeUserAnswer[emptyIndex] = char;
    const slot = document.getElementById(`arrange-slot-${emptyIndex}`);
    slot.innerText = char;
    slot.style.borderBottomColor = "var(--text-dark)";
    
    // Tạo hiệu ứng làm mờ chữ cái đã được chọn và khóa nút đó lại
    btn.style.opacity = "0.2";
    btn.style.pointerEvents = "none";
    btn.dataset.slotIndex = emptyIndex; 

    // Cho phép người học nhấn thẳng vào ô kết quả để hoàn tác (undo) chữ cái vừa chọn sai
    slot.style.cursor = "pointer";
    slot.onclick = () => {
      arrangeUserAnswer[emptyIndex] = "";
      slot.innerText = "";
      slot.style.borderBottomColor = "var(--primary)";
      slot.onclick = null;
      slot.style.cursor = "default";
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
      delete btn.dataset.slotIndex;
    };
  }

  // Khi đã điền đủ tất cả các ô chữ cái, hệ thống tự động kiểm tra đáp án
  if (!arrangeUserAnswer.includes("")) {
    const fullAnswer = arrangeUserAnswer.join('');
    const feedbackEl = document.getElementById('answer-feedback');
    document.getElementById('arrange-container').style.display = 'none';

    if (fullAnswer === arrangeCorrectWord) {
      feedbackEl.innerHTML = `🎉 Chính xác! Bạn đã ghép từ hoàn hảo: "<span style="color: var(--primary);">${currentStudyCard.word}</span>"`;
    } else {
      feedbackEl.innerHTML = `❌ Chưa chính xác rồi! Từ đúng là "<span style="color: var(--primary);">${currentStudyCard.word}</span>" (Bạn ghép thành: <span style="color: var(--danger);">${fullAnswer}</span>)`;
    }

    // Đổ thông tin mặt sau và phát âm thanh
    document.getElementById('study-word').innerText = currentStudyCard.word;
    document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
    document.getElementById('study-en').innerText = currentStudyCard.en || '';
    document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
    document.getElementById('flashcard-back').style.display = 'block';
    window.playNativeAudio(currentStudyCard.word, 'de-DE');
  }
};

// 2. Chế độ Rewrite: Điền từ vựng còn thiếu vào câu ví dụ thực tế
window.generateRewriteOptions = function() {
  const promptTitle = document.getElementById('study-prompt-title');
  const viPrompt = document.getElementById('study-vi-prompt');
  promptTitle.innerText = "📝 ĐIỀN TỪ CÒN THIẾU VÀO CÂU VÍ DỤ (REWRITE):";
  viPrompt.innerText = currentStudyCard.vi || "";

  let sentenceHtml = currentStudyCard.ex || "";
  const wordLen = currentStudyCard.word.length;
  const firstLetter = currentStudyCard.word.charAt(0).toUpperCase();
  
  // Tạo gợi ý từ: Hiển thị Chữ cái đầu và các dấu gạch dưới tiếp theo (Ví dụ: A_ _ _ _) [7]
  const hintPlaceholder = `<b>${firstLetter}</b>` + " _".repeat(wordLen - 1);
  const escapedWord = currentStudyCard.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(escapedWord, 'gi');

  if (sentenceHtml) {
    // Thay thế từ khóa xuất hiện trong ví dụ thành khoảng trống gợi ý
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
    // Nếu không có ví dụ (phòng xa), dùng câu cấu trúc mặc định
    sentenceHtml = `This is a sample context sentence with the word: <span style="border-bottom: 2px dashed var(--primary); padding: 0 4px;">${hintPlaceholder}</span>`;
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

  // Điền mặt sau và đọc âm thanh
  document.getElementById('study-word').innerText = currentStudyCard.word;
  document.getElementById('study-ipa').innerText = currentStudyCard.ipa || '';
  document.getElementById('study-en').innerText = currentStudyCard.en || '';
  document.getElementById('study-ex').innerHTML = currentStudyCard.ex || '';
  document.getElementById('flashcard-back').style.display = 'block';
  window.playNativeAudio(currentStudyCard.word, 'de-DE');
};
