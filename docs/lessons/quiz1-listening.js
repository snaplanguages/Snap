/* ==========================================================================
   SNAPENGLISH IELTS LISTENING - QUIZ 1 DATA (UPGRADED VERSION)
   Cấu hình bài làm Listening Part 1 chuẩn hoá cho engine quiz-listening-upgraded
   ========================================================================== */

window.quizData = {
  testId: "quiz1",
  testName: "IELTS Listening Test 1",
  partName: "Part 1: Accommodation & Insurance",
  dbPrefix: "quiz1_listening",
  audioUrl: "https://raw.githubusercontent.com/snaplanguages/SnapEnglish-audioieltslistening01/1f5e120d9f5c3c2598b4ffea2baf89c6a33ba1ae/IELTS%20Listening%20Test%201.mp3",
  startTime: 106, // 1m46s
  endTime: 495,   // 8m15s
  startQ: 1,
  endQ: 10,
  totalQuestions: 10,
  hasTranscript: true,
  questionsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  // Đáp án chuẩn (hỗ trợ nhiều biến thể)
  correctAnswers: {
    1: ["300", "three hundred"],
    2: ["sun shade", "sunshade", "Sun Shade", "Sunshade"],
    3: ["balcony"],
    4: ["forest", "forests"],
    5: ["319"],
    6: ["10000", "10,000", "ten thousand"],
    7: ["relative"],
    8: ["missed"],
    9: ["item"],
    10: ["ludlow", "Ludlow"]
  },

  // Transcript dạng HTML với Timestamp và Evidence Anchor
  transcriptHtml: `
    <h2 style="font-family: 'Be Vietnam Pro', sans-serif; color: var(--text-title); border-bottom: 2px solid var(--brand-primary); padding-bottom: 8px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 18px;">
      📜 Full Audio Transcript
    </h2>
    <div style="font-size: 14px; line-height: 1.7; color: var(--text-body);">
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> Greek Island Holidays. Can I help you?</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(106)">01:46</span> Yes, I hope so. I have a friend who's just come back from Corfu, and she's recommended some apartments in Arillas. She thought they might be on your list.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(117)">01:57</span> Arillas, Arillas. Let me see. Uh, can you give me the names?</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(123)">02:03</span> Yes. The first on her list was Rose Garden Apartments.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(128)">02:08</span> Oh, yes. They're a set of studio flats which are very well run by a local family. Ground floor with a garden.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(141)">02:21</span> And the cost for each of us?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(143)">02:23</span> Two hundred and nineteen pounds.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(145)">02:25</span> That sounds very reasonable. I'm just jotting down some notes. Now, the second one she mentioned was called Blue Bay.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(154)">02:34</span> Blue Bay. Yes. In fact, that's very popular, and it has some special features.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(161)">02:41</span> Really?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(162)">02:42</span> The main attraction is the large swimming pool with saltwater.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(166)">02:46</span> Mm, much healthier, I understand.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(168)">02:48</span> That's right. And it isn't far from the beach either, <mark class="hl ev-box" id="ev-1">[Q1] only three hundred meters</mark>. And only around half a kilometer to some shops, so you don't have to be too energetic.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(181)">03:01</span> Is it much more expensive than the first one?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(183)">03:03</span> Let me just check. I think at the time you want to go, it's around two hundred and sixty pounds. Uh, no, two hundred and seventy-five pounds to be exact.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(194)">03:14</span> Right. I've got that. Now, there are just two more apartments to ask you about. Um, I can't read my own writing. Something to do with sun, sunshine, is it?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(206)">03:26</span> I think you meant the <mark class="hl ev-box" id="ev-2">[Q2] Sun Shade</mark> Apartments. They're on a mountainside.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(210)">03:30</span> Any special features?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(212)">03:32</span> Yes. Each room has its own sun terrace, and there are shared barbecue facilities.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(217)">03:37</span> Ooh, sounds lovely.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(219)">03:39</span> Yes. It is rather well-equipped. It also provides water sports. It has its own beach. There are facilities for water-skiing.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(229)">03:49</span> Any kitesurfing? My friend's quite keen.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(232)">03:52</span> Not at the hotel, but I'm sure you'll find some in Arillas. There's also satellite TV in the apartments.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(239)">03:59</span> And how much is that one?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(242)">04:02</span> Four hundred and ninety pounds with two sharing.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(245)">04:05</span> You mean two hundred and forty-five pounds each?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(248)">04:08</span> I'm afraid not. Each person has to pay that amount, and there must be at least two in an apartment.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(255)">04:15</span> Ooh, I don't think that would be within our budget, unfortunately. And the last one sounds a bit expensive too. The Grand?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(263)">04:23</span> Actually, it's quite reasonable. It's an older style house with Greek paintings in every room and a <mark class="hl ev-box" id="ev-3">[Q3] balcony</mark> outside.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(271)">04:31</span> Sounds nice. What are the views like?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(273)">04:33</span> Well, there are <mark class="hl ev-box" id="ev-4">[Q4] forests</mark> all around, and they hide a supermarket just down the road, so that's very useful for all your shopping needs. Uh, there's a disco in the area too.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(283)">04:43</span> And the price?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(285)">04:45</span> <mark class="hl ev-box" id="ev-5">[Q5] Three hundred and nineteen</mark> pounds at that time. But if you leave it till November, it goes down by forty percent.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(293)">04:53</span> Mm, too late, I'm afraid.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(295)">04:55</span> Well, why don't I send you a brochure with full details? Miss...?</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(299)">04:59</span> Nash. But don't worry about that. I'm coming to Upminster soon, and I'll call and get one. I just wanted to get an idea first.</p>

      <div style="margin: 16px 0; border-bottom: 1px dashed var(--border-color); padding-bottom: 8px; font-style: italic; color: var(--text-muted); text-align: center;">
        --- [Đoạn chuyển tiếp giữa Part 1 - Phần 1 và Phần 2] ---
      </div>

      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(358)">05:58</span> If you've got a minute, could I just check a couple of points about insurance? I got one policy through the post, but I'd like to see if yours is better.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(367)">06:07</span> Fine. Uh, what would you like to know?</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(370)">06:10</span> Well, the one I've got has benefits and then the maximum amount you can claim. Is that like yours?</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(377)">06:17</span> Yes. That's how most of them are.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(380)">06:20</span> Well, the first thing is cancellation. If the holiday's canceled, on the policy I've got, you can claim eight thousand pounds.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(387)">06:27</span> We can improve on that, Miss Nash. Uh, for Greek island holidays, our maximum is <mark class="hl ev-box" id="ev-6">[Q6] ten thousand</mark> pounds.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(394)">06:34</span> That's good. Of course, our holiday won't even cost one thousand pounds together.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(399)">06:39</span> It's still sensible to have good cover. Now, if you go to hospital, we allow six hundred pounds.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(405)">06:45</span> Yes, mine's similar.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(407)">06:47</span> And we also allow a <mark class="hl ev-box" id="ev-7">[Q7] relative</mark> to travel to your holiday resort.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(411)">06:51</span> My policy just says their representative will help you.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(415)">06:55</span> You can see there's another difference there. And what happens if you don't get on the plane?</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(420)">07:00</span> Uh, nothing, as far as I can see on this form.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(423)">07:03</span> Don't you have, uh, <mark class="hl ev-box" id="ev-8">[Q8] missed</mark> departure?</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(430)">07:10</span> No. I'll just jot that down.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(430)">07:10</span> We pay up to a thousand pounds for that, depending on the reason, and we're particularly generous about loss of personal belongings, up to three thousand pounds, but not more than five hundred pounds for a single <mark class="hl ev-box" id="ev-9">[Q9] item</mark>.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(443)">07:23</span> Then I'd better not take my laptop.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(446)">07:26</span> Not unless you insure it separately.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(448)">07:28</span> Okay. Thanks very much for your time. You've really been helpful. Can I get back to you? Your name is...</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(454)">07:34</span> Ben <mark class="hl ev-box" id="ev-10">[Q10] Ludlow</mark>. That's L-U-D-L-O-W. I'm the assistant manager here. I'll give you my number. It's oh eight one two six oh five four three two one six.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(473)">07:53</span> But didn't I phone oh eight one two six oh five six seven two nine four? That's what I've got on the paper.</p>
      <p style="margin-bottom: 10px;"><b style="color: var(--brand-primary);">Agent:</b> <span class="time-tag" onclick="seekAudio(481)">08:01</span> That's the main switchboard. I've given you my direct line.</p>
      <p style="margin-bottom: 10px;"><b style="color: #2e86de;">Miss Nash:</b> <span class="time-tag" onclick="seekAudio(485)">08:05</span> Right. Thank you very much for your time.</p>
    </div>
  `,

  // Giao diện đề thi thiết kế theo UI mới nâng cấp
  questionsHtml: `
    <h2 style="font-family: 'Be Vietnam Pro', sans-serif; color: var(--brand-primary); margin-bottom: 16px; font-size: 20px;">Part 1: Questions 1-10</h2>

    <!-- SECTION 1: QUESTIONS 1-5 -->
    <div class="instruction">
      🎧 <strong>Questions 1-5:</strong> Complete the table below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.
    </div>

    <div class="question-section" id="section-q1-5">
      <table class="ielts-table">
        <thead>
          <tr>
            <th style="width: 25%;">Apartments</th>
            <th style="width: 25%;">Facilities</th>
            <th style="width: 35%;">Other Information</th>
            <th style="width: 15%;">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr id="q-row-1">
            <td style="font-weight: 700; color: var(--text-title);">Rose Garden Apartments</td>
            <td>Studio flat<br><span style="font-size: 11px; color: var(--text-muted);">Entertainment: Greek dancing</span></td>
            <td>
              Just 
              <span class="q-num">1.</span>
              <input type="text" class="ielts-inline-input" id="ans-1" oninput="updateNav(1)" placeholder="1...">
              meters from beach<br>Near shops
            </td>
            <td style="font-weight: 700; color: var(--brand-primary);">£ 219</td>
          </tr>
          <tr id="q-row-2">
            <td style="font-weight: 700; color: var(--text-title);">Blue Bay Apartments</td>
            <td>Large saltwater swimming pool</td>
            <td>
              Water sports<br>
              Overlooking 
              <span class="q-num">4.</span>
              <input type="text" class="ielts-inline-input" id="ans-4" oninput="updateNav(4)" placeholder="4...">
            </td>
            <td style="font-weight: 700; color: var(--brand-primary);">£ 275</td>
          </tr>
          <tr id="q-row-3">
            <td style="font-weight: 700; color: var(--text-title);">
              <span class="q-num">2.</span>
              <input type="text" class="ielts-inline-input" id="ans-2" oninput="updateNav(2)" placeholder="2..." style="width: 110px;">
              Apartments
            </td>
            <td>Terrace</td>
            <td>Near a supermarket and a disco</td>
            <td style="font-weight: 700; color: var(--brand-primary);">£ 490</td>
          </tr>
          <tr id="q-row-4">
            <td style="font-weight: 700; color: var(--text-title);">The Grand</td>
            <td>
              Greek paintings and 
              <span class="q-num">3.</span>
              <input type="text" class="ielts-inline-input" id="ans-3" oninput="updateNav(3)" placeholder="3...">
            </td>
            <td>(No extra info)</td>
            <td style="font-weight: 700; color: var(--brand-primary);">
              <span class="q-num">5.</span> £ 
              <input type="text" class="ielts-inline-input" id="ans-5" oninput="updateNav(5)" placeholder="5..." style="width: 80px;">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2: QUESTIONS 6-10 -->
    <div class="instruction" style="margin-top: 24px;">
      🎧 <strong>Questions 6-10:</strong> Complete the table below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.
    </div>

    <div class="question-section" id="section-q6-10">
      <h3 style="margin-bottom: 12px; color: var(--brand-primary); font-size: 16px;">🏝️ GREEK ISLAND HOLIDAYS INSURANCE</h3>
      <table class="ielts-table">
        <thead>
          <tr>
            <th style="width: 50%;">Insurance Benefits</th>
            <th style="width: 50%;">Maximum Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr id="q-row-6">
            <td>Cancellation</td>
            <td>
              <span class="q-num">6.</span> £ 
              <input type="text" class="ielts-inline-input" id="ans-6" oninput="updateNav(6)" placeholder="6..." style="width: 110px;">
            </td>
          </tr>
          <tr id="q-row-7">
            <td>Hospital</td>
            <td>
              £ 600 additional benefit allows a 
              <span class="q-num">7.</span>
              <input type="text" class="ielts-inline-input" id="ans-7" oninput="updateNav(7)" placeholder="7..." style="width: 110px;">
              to travel to resort
            </td>
          </tr>
          <tr id="q-row-8">
            <td>
              <span class="q-num">8.</span> 
              <input type="text" class="ielts-inline-input" id="ans-8" oninput="updateNav(8)" placeholder="8..." style="width: 100px;">
              departure
            </td>
            <td>Up to £ 1000 depends on reason</td>
          </tr>
          <tr id="q-row-9">
            <td>Personal belongings</td>
            <td>
              Up to £3000; up to £500 for a single 
              <span class="q-num">9.</span>
              <input type="text" class="ielts-inline-input" id="ans-9" oninput="updateNav(9)" placeholder="9..." style="width: 100px;">
            </td>
          </tr>
          <tr id="q-row-10">
            <td colspan="2">
              <div style="background: var(--brand-peach-soft); padding: 10px; border-radius: 8px; font-weight: 600;">
                👤 Name of assistant manager: Ben 
                <span class="q-num">10.</span>
                <input type="text" class="ielts-inline-input" id="ans-10" oninput="updateNav(10)" placeholder="10..." style="width: 120px;">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,

  // Chi tiết giải thích rực rỡ đầy đủ cho cả 10 câu hỏi
  explanations: {
    1: {
      colorClass: "ev-1",
      translation: "Căn hộ Blue Bay cách bãi biển bao xa? ➔ Chỉ cách bãi biển 300 mét.",
      keywords: "beach ➔ 300 meters",
      distractor: "Bẫy chi phí £219 và khoảng cách 500m ('half a kilometer') tới các cửa hàng.",
      pronunciation: "Nối âm: 'isn't far from' /ˌɪznt ˈfɑːr frəm/. Kéo lướt từ 'hundred'.",
      vocabulary: "studio flat /ˈstjuːdiəʊ flæt/ (n): căn hộ khép kín đơn."
    },
    2: {
      colorClass: "ev-2",
      translation: "Tên căn hộ thứ 3 là gì? ➔ Sun Shade Apartments.",
      keywords: "sunshine (đoán sai) ➔ Sun Shade (đính chính)",
      distractor: "Khách tự đoán là 'sunshine', Agent đính chính là 'Sun Shade'.",
      pronunciation: "Chú ý âm uốn lưỡi mạnh /ʃ/ trong 'Shade' (/sʌn ʃeɪd/).",
      vocabulary: "mountainside /ˈmaʊntɪnsaɪd/ (n): sườn núi; sun terrace /sʌn ˈterəs/ (n): hiên tắm nắng."
    },
    3: {
      colorClass: "ev-3",
      translation: "Căn hộ The Grand có tranh Hy Lạp và cái gì bên ngoài? ➔ Căn hộ có ban công (balcony) bên ngoài.",
      keywords: "Greek paintings and... ➔ balcony outside",
      distractor: "Rất dễ viết sai chính tả thành 'balcone' hoặc 'balconey'. Chính xác là -ny.",
      pronunciation: "Trọng âm âm tiết đầu: /ˈbælkəni/. Cụm 'and a' nối lướt /ən ə/.",
      vocabulary: "balcony /ˈbælkəni/ (n): ban công."
    },
    4: {
      colorClass: "ev-4",
      translation: "Căn hộ The Grand hướng nhìn ra đâu? ➔ Nhìn ra rừng cây bao quanh (forests).",
      keywords: "views ➔ forests all around",
      distractor: "Đề cập đến 'supermarket' và 'disco' gần đó nhưng đó không phải cảnh quan trực diện.",
      pronunciation: "Âm đuôi số nhiều /ˈfɒrɪsts/ (phát âm cụm /sts/ rõ ràng).",
      vocabulary: "overlook /ˌəʊvəˈlʊk/ (v): nhìn ra, hướng ra."
    },
    5: {
      colorClass: "ev-5",
      translation: "Giá thuê căn hộ The Grand vào thời điểm đó là bao nhiêu? ➔ 319 bảng (£319).",
      keywords: "price ➔ Three hundred and nineteen pounds",
      distractor: "Bẫy giảm giá 40% ('forty percent') nếu đi vào tháng 11.",
      pronunciation: "Phân biệt 'nineteen' /ˌnaɪnˈtiːn/ (nhấn âm 2) với 'ninety' /ˈnaɪnti/ (nhấn âm 1).",
      vocabulary: "reasonable /ˈriːznəbl/ (adj): giá cả hợp lý."
    },
    6: {
      colorClass: "ev-6",
      translation: "Hạn mức bồi thường tối đa khi hủy chuyến (Cancellation) là bao nhiêu? ➔ 10,000 bảng (£10,000).",
      keywords: "Cancellation maximum ➔ ten thousand pounds",
      distractor: "Người khách nhắc mức bảo hiểm cũ £8,000 và chi phí chuyến đi £1,000.",
      pronunciation: "Nuốt âm: 'ten thousand' /ten ˈθaʊznd/, âm /d/ ở cuối thường nuốt nhẹ.",
      vocabulary: "cancellation /ˌkænsəˈleɪʃn/ (n): sự hủy chuyến."
    },
    7: {
      colorClass: "ev-7",
      translation: "Khi nằm viện, bảo hiểm cho phép ai được bay sang khu nghỉ dưỡng? ➔ Cho phép người thân (relative) bay sang.",
      keywords: "allow a... to travel ➔ relative",
      distractor: "Bảo hiểm cũ chỉ cho 'representative' (người đại diện) giúp đỡ.",
      pronunciation: "Trọng âm âm tiết thứ nhất: /ˈrelətɪv/.",
      vocabulary: "relative /ˈrelətɪv/ (n): người thân, họ hàng."
    },
    8: {
      colorClass: "ev-8",
      translation: "Bảo hiểm chi trả cho trường hợp bị lỡ chuyến bay là gì? ➔ Missed departure (Lỡ chuyến đi).",
      keywords: "don't get on the plane ➔ missed departure",
      distractor: "Hay viết thiếu đuôi '-ed' thành 'miss departure'.",
      pronunciation: "Phát âm đuôi /t/ trong 'missed' (/mɪst/).",
      vocabulary: "missed departure /mɪst dɪˈpɑːtʃə/ (n): bảo hiểm lỡ chuyến."
    },
    9: {
      colorClass: "ev-9",
      translation: "Mức bồi thường đồ đạc cá nhân tối đa cho một món đồ đơn lẻ (single item) là bao nhiêu? ➔ Món đồ (item).",
      keywords: "single... ➔ single item",
      distractor: "Khách nhắc đến ví dụ 'laptop', nhưng từ cần điền theo văn cảnh là 'item'.",
      pronunciation: "Nối âm: 'single item' /ˌsɪŋɡl ˈaɪtəm/.",
      vocabulary: "personal belongings /ˈpɜːsənl bɪˈlɒŋɪŋz/ (n): đồ đạc cá nhân."
    },
    10: {
      colorClass: "ev-10",
      translation: "Tên của phó quản lý (assistant manager) là gì? ➔ Ben Ludlow (L-U-D-L-O-W).",
      keywords: "assistant manager ➔ Ben Ludlow",
      distractor: "Cần chú ý nghe kỹ chuỗi chữ cái đánh vần L-U-D-L-O-W, tránh nhầm L với R, U với O.",
      pronunciation: "Đánh vần: L (/el/), U (/juː/), D (/diː/), L (/el/), O (/əʊ/), W (/ˈdʌbljuː/).",
      vocabulary: "assistant manager /əˈsɪstənt ˈmænɪdʒə/ (n): phó quản lý."
    }
  }
};
