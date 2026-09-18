window.quizData = {
  title: "Reading Practice 13 | History of Television",
  testName: "Test 5",
  partName: "Passage 1",
  dbPrefix: "ielts_R_T5_P1",
  passageTitle: "The History of Television",
  startQ: 1,
  endQ: 13,
  totalQuestions: 13,
  passageContent: `
<p class="paragraph"><span class="paragraph-label">A.</span> The invention of television was not a single event or the work of a single inventor. Instead, it was the result of a long process of development involving numerous scientists and engineers across several countries over many decades. However, a few key figures stand out for their groundbreaking contributions to making visual broadcasting a reality.</p>

<p class="paragraph"><span class="paragraph-label">B.</span> John Logie Baird, a Scottish inventor, is widely remembered for achieving the first live television demonstration. Working with limited financial resources in London during the early 1920s, Baird constructed his experimental apparatus using whatever materials he could find. <span id="ev-1" class="ev-box">He fashioned a Nipkow disk from an old hatbox, bought lenses from a second-hand store, and used a tea chest as a cabinet</span> for his receiver. In October 1925, Baird successfully transmitted a recognizable image of a ventriloquist's dummy. Needing a living human subject to test real-time movement, <span id="ev-2" class="ev-box">Baird recruited his office boy, William Taynton, who thereby became the first person to be televised moving</span> in human history.</p>

<p class="paragraph"><span class="paragraph-label">C.</span> Philo Farnsworth successfully demonstrated electronic television in San Francisco in 1927, using a fundamentally different system from Baird's mechanical apparatus. <span id="ev-3" class="ev-box">Farnsworth realized that an image could be dissected by a television camera into a series of electrical lines</span>. To achieve this, <span id="ev-3-part2" class="ev-box">he invented a device called the image dissector</span>, which converted optical images into electrical signals line by line. The Russian-born American inventor, Vladimir Zworykin, built upon and refined these electronic concepts. <span id="ev-4" class="ev-box">It was Zworykin's advanced iconoscope designs that were eventually adopted by the BBC</span> in the UK in 1936 to replace Baird's mechanical system for their public television service.</p>

<p class="paragraph"><span class="paragraph-label">D.</span> Long before Baird or Farnsworth, the German inventor Paul Nipkow laid the theoretical groundwork for mechanical scanning. In 1884, Nipkow patented a rotating disk—the Nipkow disk—<span id="ev-8" class="ev-box">a spinning disk with a spiral of small pinholes</span> that broke an image into sequential light beams. As the disk spun, <span id="ev-9" class="ev-box">each hole allowed light to fall on a selenium cell</span> on the opposite side, generating an electric current proportional to light intensity. At the receiver, <span id="ev-10" class="ev-box">a neon lamp reacted instantly to changes in voltage</span>, reconstructing the original image through a second synchronized spinning disk. <span id="ev-5" class="ev-box">The patent expired after 15 years as no one was interested then in the work</span>, and Nipkow received no commercial reward at the time. However, late in life, <span id="ev-11" class="ev-box">Nipkow became a celebrated scientist in Germany for his pioneering work</span> when mechanical television gained momentum in the 1930s.</p>

<p class="paragraph"><span class="paragraph-label">E.</span> Arthur Korn was another German scientist working in the same field as Nipkow and Baird. Korn focused his early research on visual telegraphic transmission using developments in amplification tube technology. In 1906, he transmitted a photograph of the German Crown Prince over a distance of 1,800 kilometers, and in 1923, he successfully sent a photograph of the Pope across the Atlantic Ocean. Korn's achievements were widely celebrated, and from 1928, <span id="ev-6" class="ev-box">the German police used his technology to send photographs and fingerprints</span> of wanted criminals across the country to aid law enforcement.</p>

<p class="paragraph"><span class="paragraph-label">F.</span> Finally, another American pioneer, Charles Francis Jenkins, holds a prominent place in the history of television. <span id="ev-13" class="ev-box">Jenkins, who at the time was already very well known for inventing the motion picture projector</span>, first transmitted a silhouette picture from one room to another in 1922. Jenkins founded a commercial television broadcasting company in 1928, but <span id="ev-7" class="ev-box">the stock market crash of 1929 forced him out of business</span> before his station could achieve financial stability.</p>
`,
  questionsHTML: `
<div class="question-section">
<div class="instruction">
Questions 1-7<br>
Match the people (listed A-G) with the opinions or deeds below.<br>
Write the correct letter, <strong>A–G</strong>, in boxes 1–7 on your answer sheet.
</div>
<div class="headings-list">
<p><strong>A</strong> Vladimir Zworykin</p>
<p><strong>B</strong> Arthur Korn</p>
<p><strong>C</strong> William Taynton</p>
<p><strong>D</strong> John Logie Baird</p>
<p><strong>E</strong> Charles Francis Jenkins</p>
<p><strong>F</strong> Philo Farnsworth</p>
<p><strong>G</strong> Paul Nipkow</p>
</div>

<div class="q-row" id="q-row-1">
<span class="q-num">1.</span>
<span class="q-content">He used second-hand parts for his invention.
<select class="input-select" id="ans-1" onchange="updateNav(1)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
</select>
<span id="fb-1" class="feedback"></span>
</span>
</div>
<div id="exp-1"></div>

<div class="q-row" id="q-row-2">
<span class="q-num">2.</span>
<span class="q-content">He was the first person to move on television.
<select class="input-select" id="ans-2" onchange="updateNav(2)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
</select>
<span id="fb-2" class="feedback"></span>
</span>
</div>
<div id="exp-2"></div>

<div class="q-row" id="q-row-3">
<span class="q-num">3.</span>
<span class="q-content">He invented the image dissector.
<select class="input-select" id="ans-3" onchange="updateNav(3)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
</select>
<span id="fb-3" class="feedback"></span>
</span>
</div>
<div id="exp-3"></div>

<div class="q-row" id="q-row-4">
<span class="q-num">4.</span>
<span class="q-content">His work was adopted by the BBC for their broadcasting business.
<select class="input-select" id="ans-4" onchange="updateNav(4)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
</select>
<span id="fb-4" class="feedback"></span>
</span>
</div>
<div id="exp-4"></div>

<div class="q-row" id="q-row-5">
<span class="q-num">5.</span>
<span class="q-content">His work was initially of no interest to anyone.
<select class="input-select" id="ans-5" onchange="updateNav(5)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
</select>
<span id="fb-5" class="feedback"></span>
</span>
</div>
<div id="exp-5"></div>

<div class="q-row" id="q-row-6">
<span class="q-num">6.</span>
<span class="q-content">His work was used to help fight crime.
<select class="input-select" id="ans-6" onchange="updateNav(6)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
</select>
<span id="fb-6" class="feedback"></span>
</span>
</div>
<div id="exp-6"></div>

<div class="q-row" id="q-row-7">
<span class="q-num">7.</span>
<span class="q-content">His business was destroyed by a financial crisis.
<select class="input-select" id="ans-7" onchange="updateNav(7)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
</select>
<span id="fb-7" class="feedback"></span>
</span>
</div>
<div id="exp-7"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 8-10<br>
Complete the diagram below.<br>
Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.
</div>
<div style="text-align: center; margin-bottom: 15px;">
<img src="https://github.com/snaplanguages/assets/blob/3413bbae832846a18ccf5a28ee5b38a5a1ce5746/r1.jpg?raw=true" alt="Nipkow Disk Diagram" class="diagram-img" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid var(--border-color);">
<div class="diagram-box" style="background: var(--exp-bg); padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid var(--primary);">
<p style="margin: 5px 0;">A spinning disk with <strong>(8)</strong> <input type="text" class="input-gap" id="ans-8" oninput="updateNav(8)" style="width: 160px;"> <span id="fb-8" class="feedback"></span> in a spiral</p>
<p style="margin: 15px 0;">Light to fall on a <strong>(9)</strong> <input type="text" class="input-gap" id="ans-9" oninput="updateNav(9)" style="width: 160px;"> <span id="fb-9" class="feedback"></span></p>
<p style="margin: 15px 0;">At receiver, a <strong>(10)</strong> <input type="text" class="input-gap" id="ans-10" oninput="updateNav(10)" style="width: 160px;"> <span id="fb-10" class="feedback"></span> reacted to changes in voltage</p>
</div>
</div>
<div id="exp-8"></div>
<div id="exp-9"></div>
<div id="exp-10"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 11-13<br>
Do the following statements agree with the information given in Reading Passage?<br>
In boxes 11–13 on your answer sheet, write:<br>
<strong>TRUE</strong> if the statement agrees with the information<br>
<strong>FALSE</strong> if the statement contradicts the information<br>
<strong>NOT GIVEN</strong> if there is no information on this
</div>

<div class="q-row" id="q-row-11">
<span class="q-num">11.</span>
<span class="q-content">Nipkow died without any of his work being widely recognized.
<select class="input-select" id="ans-11" onchange="updateNav(11)">
<option value="">Select...</option>
<option value="TRUE">TRUE</option>
<option value="FALSE">FALSE</option>
<option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-11" class="feedback"></span>
</span>
</div>
<div id="exp-11"></div>

<div class="q-row" id="q-row-12">
<span class="q-num">12.</span>
<span class="q-content">Korn and Nipkow often met to discuss their work.
<select class="input-select" id="ans-12" onchange="updateNav(12)">
<option value="">Select...</option>
<option value="TRUE">TRUE</option>
<option value="FALSE">FALSE</option>
<option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-12" class="feedback"></span>
</span>
</div>
<div id="exp-12"></div>

<div class="q-row" id="q-row-13">
<span class="q-num">13.</span>
<span class="q-content">Charles Francis Jenkins was already famous when he experimented with television.
<select class="input-select" id="ans-13" onchange="updateNav(13)">
<option value="">Select...</option>
<option value="TRUE">TRUE</option>
<option value="FALSE">FALSE</option>
<option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-13" class="feedback"></span>
</span>
</div>
<div id="exp-13"></div>
</div>
`,
  correctAnswers: {
    1: "D",
    2: "C",
    3: "F",
    4: "A",
    5: "G",
    6: "B",
    7: "E",
    8: ["PINHOLES", "SMALL PINHOLES"],
    9: ["SELENIUM CELL", "A SELENIUM CELL"],
    10: ["NEON LAMP", "A NEON LAMP"],
    11: "FALSE",
    12: "NOT GIVEN",
    13: "TRUE"
  },
  explanations: {
    1: {
      translation: `<b>Câu hỏi:</b> Ông ấy đã sử dụng các bộ phận cũ/đã qua sử dụng cho phát minh của mình.<br><br><b>Nói đơn giản:</b> Tìm nhân vật đã sáng chế ra máy truyền hình sơ khai bằng cách gom nhặt các vật dụng cũ như hộp đựng mũ, rương trà, ống kính cũ.`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features (Nối nhân vật với hành động/đóng góp)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph B
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"He fashioned a Nipkow disk from an old hatbox, bought lenses from a second-hand store, and used a tea chest as a cabinet..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>fashioned a Nipkow disk from an old hatbox</b>: tự chế đĩa Nipkow từ một chiếc hộp đựng mũ cũ.</li>
<li><b>bought lenses from a second-hand store</b>: mua các thấu kính từ cửa hàng đồ cũ (second-hand = linh kiện/đồ đã qua sử dụng).</li>
<li><b>used a tea chest as a cabinet</b>: dùng rương đựng trà làm vỏ máy.</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">second-hand parts</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">old hatbox, second-hand store, tea chest</td>
<td style="padding: 8px; border: 1px solid #ddd;">Các vật dụng cũ và mua lại từ cửa hàng đồ cũ.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Câu hỏi tìm nhân vật chế tạo máy bằng bộ phận đã qua sử dụng (second-hand parts).
<br>
- <b>Bước 2:</b> Đoạn B tường thuật nhà sáng chế John Logie Baird vì thiếu kinh phí nên mua kính ở "second-hand store", dùng "old hatbox" và "tea chest".
<br>
- <b>Bước 3:</b> Nhân vật này là John Logie Baird (Đáp án <b>D</b>).
<br><br>
<b>🚫 Bẫy & Lỗi sai thường gặp (Distractor Analysis):</b>
<br>
- Bẫy nhầm lẫn nhân vật: Tránh chọn William Taynton (C) vì Taynton chỉ là cậu bé phụ việc văn phòng đóng vai trò người thử nghiệm, không phải là nhà sáng chế làm ra thiết bị.
<br><br>
<b>📘 Ngữ pháp & Bài học:</b>
<br>
- Từ vựng: <b>fashion (v)</b> = chế tạo, tạo hình thủ công; <b>second-hand (adj)</b> = đồ cũ, đã qua sử dụng.`,
      vocab: `<b>second-hand (adj)</b>: cũ, đã qua sử dụng<br><b>fashion (v)</b>: chế tạo thủ công<br><b>apparatus (n)</b>: thiết bị, dụng cụ`,
      colorClass: "ev-1"
    },
    2: {
      translation: `<b>Câu hỏi:</b> Ông là người đầu tiên chuyển động trên truyền hình.<br><br><b>Nói đơn giản:</b> Ai là người đầu tiên xuất hiện trực tiếp trên màn ảnh truyền hình với hình ảnh chuyển động?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features (Nối nhân vật với hành động/đóng góp)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph B
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"...Baird recruited his office boy, William Taynton, who thereby became the first person to be televised moving in human history."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>recruited his office boy, William Taynton</b>: thuê/mời cậu bé văn phòng của mình tên là William Taynton.</li>
<li><b>became the first person to be televised moving</b>: trở thành người đầu tiên được truyền hình với hình ảnh chuyển động trong lịch sử loài người.</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">first person to move on television</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">first person to be televised moving</td>
<td style="padding: 8px; border: 1px solid #ddd;">Người đầu tiên chuyển động trên truyền hình.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Câu hỏi tìm tên người đầu tiên xuất hiện chuyển động trên truyền hình.
<br>
- <b>Bước 2:</b> Đoạn B ghi nhận William Taynton là "office boy" được Baird chọn thử nghiệm và trở thành "first person to be televised moving".
<br>
- <b>Bước 3:</b> Chọn William Taynton (Đáp án <b>C</b>).
<br><br>
<b>🚫 Bẫy & Lỗi sai thường gặp:</b>
<br>
- Không nhầm với Baird (D): Baird là người phát minh và vận hành máy, còn người đứng trước ống kính truyền hình để chuyển động là Taynton.`,
      vocab: `<b>televise (v)</b>: phát sóng/truyền hình<br><b>recruit (v)</b>: chiêu mộ, tuyển chọn<br><b>subject (n)</b>: đối tượng thử nghiệm`,
      colorClass: "ev-2"
    },
    3: {
      translation: `<b>Câu hỏi:</b> Ông đã phát minh ra bộ phân tích hình ảnh (image dissector).<br><br><b>Nói đơn giản:</b> Tìm nhà khoa học đã sáng chế ra thiết bị "image dissector" giúp bóc tách hình ảnh thành các đường truyền điện.`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features (Nối nhân vật với hành động/đóng góp)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph C
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Farnsworth realized that an image could be dissected... he invented a device called the image dissector..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>Farnsworth realized...</b>: Philo Farnsworth nhận ra hình ảnh có thể được phân tách.</li>
<li><b>he invented a device called the image dissector</b>: ông ấy đã phát minh ra một thiết bị gọi là "image dissector" (bộ phân tích hình ảnh).</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">invented the image dissector</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">invented a device called the image dissector</td>
<td style="padding: 8px; border: 1px solid #ddd;">Trùng khớp tuyệt đối về phát minh thiết bị.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Tìm từ khóa "image dissector" và nhà phát minh ra nó.
<br>
- <b>Bước 2:</b> Đoạn C khẳng định Philo Farnsworth chính là người sáng chế ra "image dissector".
<br>
- <b>Bước 3:</b> Chọn Philo Farnsworth (Đáp án <b>F</b>).`,
      vocab: `<b>dissect (v)</b>: mổ xẻ, bóc tách<br><b>convert (v)</b>: chuyển đổi<br><b>signal (n)</b>: tín hiệu`,
      colorClass: "ev-3"
    },
    4: {
      translation: `<b>Câu hỏi:</b> Công trình của ông đã được BBC áp dụng cho mảng kinh doanh phát sóng của họ.<br><br><b>Nói đơn giản:</b> Ai là người có thiết kế truyền hình điện tử được đài truyền hình quốc gia Anh (BBC) lựa chọn sử dụng chính thức?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features (Nối nhân vật với hành động/đóng góp)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph C
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"It was Zworykin's advanced iconoscope designs that were eventually adopted by the BBC in the UK..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>Zworykin's advanced iconoscope designs</b>: thiết kế ống camera iconoscope tiên tiến của Vladimir Zworykin.</li>
<li><b>were eventually adopted by the BBC</b>: cuối cùng đã được hãng BBC áp dụng/đưa vào sử dụng chính thức.</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">adopted by the BBC</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">adopted by the BBC in the UK</td>
<td style="padding: 8px; border: 1px solid #ddd;">Được BBC chấp nhận và đưa vào vận hành.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Định vị tên đài phát sóng "BBC".
<br>
- <b>Bước 2:</b> Đoạn C chỉ ra thiết kế của Vladimir Zworykin đã thay thế cơ chế cơ học cũ của Baird và được BBC chọn chính thức năm 1936.
<br>
- <b>Bước 3:</b> Chọn Vladimir Zworykin (Đáp án <b>A</b>).`,
      vocab: `<b>adopt (v)</b>: thông qua, áp dụng, tiếp nhận<br><b>eventually (adv)</b>: rốt cuộc, cuối cùng<br><b>refine (v)</b>: tinh chỉnh, cải tiến`,
      colorClass: "ev-4"
    },
    5: {
      translation: `<b>Câu hỏi:</b> Ban đầu công trình của ông không thu hút được sự quan tâm của ai.<br><br><b>Nói đơn giản:</b> Ai là người đăng ký bằng sáng chế nhưng suốt 15 năm không một ai đoái hoài hay đầu tư thương mại?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features (Nối nhân vật với hành động/đóng góp)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph D
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"The patent expired after 15 years as no one was interested then in the work..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>The patent expired after 15 years</b>: Bằng sáng chế hết hạn sau 15 năm.</li>
<li><b>as no one was interested then in the work</b>: vì thời điểm đó không một ai quan tâm đến công trình này (no interest to anyone).</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">initially of no interest</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">no one was interested then</td>
<td style="padding: 8px; border: 1px solid #ddd;">Ban đầu không ai quan tâm / hứng thú.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Tìm cụm từ biểu thị sự thờ ơ, không ai quan tâm đến công trình.
<br>
- <b>Bước 2:</b> Đoạn D cho biết phát minh chiếc đĩa quay của Paul Nipkow năm 1884 bị ngó lơ, bằng sáng chế hết hạn mà không mang lại lợi ích tài chính nào.
<br>
- <b>Bước 3:</b> Chọn Paul Nipkow (Đáp án <b>G</b>).`,
      vocab: `<b>patent (n/v)</b>: bằng sáng chế<br><b>expire (v)</b>: hết hạn, mất hiệu lực<br><b>initially (adv)</b>: ban đầu`,
      colorClass: "ev-5"
    },
    6: {
      translation: `<b>Câu hỏi:</b> Công trình của ông được dùng để giúp chống tội phạm.<br><br><b>Nói đơn giản:</b> Ai là nhà khoa học có công nghệ truyền ảnh được cảnh sát ứng dụng để gửi ảnh và dấu vân tay tội phạm?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features (Nối nhân vật với hành động/đóng góp)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph E
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"...the German police used his technology to send photographs and fingerprints of wanted criminals..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>German police used his technology</b>: cảnh sát Đức đã sử dụng công nghệ của ông ấy.</li>
<li><b>to send photographs and fingerprints of wanted criminals</b>: để gửi hình ảnh và dấu vân tay của các tội phạm bị truy nã (trợ giúp phá án / fight crime).</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">help fight crime</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">police used ... send photos and fingerprints of criminals</td>
<td style="padding: 8px; border: 1px solid #ddd;">Cảnh sát dùng công nghệ gửi hồ sơ tội phạm = Giúp chống tội phạm.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Tìm chi tiết liên quan đến cảnh sát hoặc tội phạm (crime/police).
<br>
- <b>Bước 2:</b> Đoạn E thuật lại công trình truyền ảnh điện báo của Arthur Korn được lực lượng cảnh sát Đức áp dụng từ năm 1928 để gửi dấu vân tay và ảnh tội phạm.
<br>
- <b>Bước 3:</b> Chọn Arthur Korn (Đáp án <b>B</b>).`,
      vocab: `<b>fingerprint (n)</b>: dấu vân tay<br><b>criminal (n)</b>: tội phạm<br><b>law enforcement (n)</b>: lực lượng thực thi pháp luật`,
      colorClass: "ev-6"
    },
    7: {
      translation: `<b>Câu hỏi:</b> Hoạt động kinh doanh của ông đã bị phá hủy bởi một cuộc khủng hoảng tài chính.<br><br><b>Nói đơn giản:</b> Ai là nhà phát minh mở công ty phát sóng truyền hình nhưng phải đóng cửa vì đợt sụp đổ thị trường chứng khoán năm 1929?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features (Nối nhân vật với hành động/đóng góp)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph F
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"...the stock market crash of 1929 forced him out of business..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>founded a commercial broadcasting company in 1928</b>: thành lập công ty phát sóng thương mại năm 1928.</li>
<li><b>the stock market crash of 1929</b>: đợt sụp đổ thị trường chứng khoán năm 1929 (cuộc khủng hoảng tài chính / financial crisis).</li>
<li><b>forced him out of business</b>: buộc ông phải ngừng kinh doanh / phá sản (business destroyed).</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">financial crisis</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">stock market crash of 1929</td>
<td style="padding: 8px; border: 1px solid #ddd;">Cú sụp đổ thị trường chứng khoán = Khủng hoảng tài chính.</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">business was destroyed</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">forced him out of business</td>
<td style="padding: 8px; border: 1px solid #ddd;">Bị ép rời khỏi ngành kinh doanh / sụp đổ công ty.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Tìm thông tin việc kinh doanh bị phá sản do yếu tố kinh tế tài chính.
<br>
- <b>Bước 2:</b> Đoạn F viết về Charles Francis Jenkins mở công ty năm 1928 nhưng cuộc sụp đổ thị trường năm 1929 ("crash of 1929") cuốn phăng công ty của ông.
<br>
- <b>Bước 3:</b> Chọn Charles Francis Jenkins (Đáp án <b>E</b>).`,
      vocab: `<b>crash (n)</b>: sự sụp đổ (thị trường)<br><b>force out of business (phr)</b>: buộc phải ngừng kinh doanh, phá sản<br><b>commercial (adj)</b>: thuộc thương mại`,
      colorClass: "ev-7"
    },
    8: {
      translation: `<b>Câu hỏi:</b> Một chiếc đĩa quay với [các lỗ nhỏ] xếp thành hình xoắn ốc.<br><br><b>Nói đơn giản:</b> Tìm danh từ mô tả bộ phận nằm trên đĩa quay Nipkow xếp thành đường xoắn ốc để phân tách chùm sáng.`,
      exp: `<b>Dạng câu hỏi:</b> Diagram / Summary Completion (Điền từ hoàn thành sơ đồ)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph D
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"...a spinning disk with a spiral of small pinholes that broke an image into sequential light beams."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>spinning disk</b>: đĩa quay tròn.</li>
<li><b>a spiral of small pinholes</b>: một đường xoắn ốc chứa các lỗ nhỏ kim đâm (pinholes).</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Sơ đồ</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">A spinning disk with [______] in a spiral</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">a spinning disk with a spiral of small pinholes</td>
<td style="padding: 8px; border: 1px solid #ddd;">Danh từ chỉ vật thể đục lỗ trên đĩa là "pinholes" hoặc "small pinholes".</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Xác định từ loại cần điền sau cấu trúc "disk with [Noun] in a spiral".
<br>
- <b>Bước 2:</b> Đoạn D mô tả nguyên lý đĩa Nipkow: "spinning disk with a spiral of small pinholes".
<br>
- <b>Bước 3:</b> Từ cần điền là <b>PINHOLES</b> hoặc <b>SMALL PINHOLES</b> (tối đa 2 từ).`,
      vocab: `<b>pinhole (n)</b>: lỗ nhỏ bằng đầu ghim/kim<br><b>spiral (n/adj)</b>: đường xoắn ốc<br><b>spinning (adj)</b>: xoay tròn`,
      colorClass: "ev-8"
    },
    9: {
      translation: `<b>Câu hỏi:</b> Ánh sáng chiếu lên một [tế bào selen].<br><br><b>Nói đơn giản:</b> Điền tên linh kiện nhạy sáng tiếp nhận ánh sáng xuyên qua các lỗ nhỏ trên đĩa quay Nipkow.`,
      exp: `<b>Dạng câu hỏi:</b> Diagram / Summary Completion (Điền từ hoàn thành sơ đồ)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph D
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"...each hole allowed light to fall on a selenium cell on the opposite side..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>allowed light to fall on</b>: cho phép ánh sáng chiếu/rơi vào...</li>
<li><b>a selenium cell</b>: một tế bào selen (linh kiện quang điện biến quang năng thành điện năng).</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Sơ đồ</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Light to fall on a [______]</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">light to fall on a selenium cell</td>
<td style="padding: 8px; border: 1px solid #ddd;">Linh kiện đón ánh sáng là "selenium cell".</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Tìm cụm động từ "light to fall on..." trong đoạn D.
<br>
- <b>Bước 2:</b> Đoạn D ghi rõ: "allowed light to fall on a selenium cell".
<br>
- <b>Bước 3:</b> Đáp án chính xác là <b>SELENIUM CELL</b> (hoặc A SELENIUM CELL).`,
      vocab: `<b>selenium cell (n)</b>: tế bào/pin selen nhạy sáng<br><b>intensity (n)</b>: cường độ<br><b>proportional (adj)</b>: tỷ lệ thuận`,
      colorClass: "ev-9"
    },
    10: {
      translation: `<b>Câu hỏi:</b> Ở đầu nhận, một [đèn neon] phản ứng với những thay đổi về điện áp.<br><br><b>Nói đơn giản:</b> Điền tên thiết bị phát sáng ở bộ thu tín hiệu phản ứng với dòng điện để dựng lại hình ảnh.`,
      exp: `<b>Dạng câu hỏi:</b> Diagram / Summary Completion (Điền từ hoàn thành sơ đồ)
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph D
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"At the receiver, a neon lamp reacted instantly to changes in voltage..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>At the receiver</b>: Tại bộ thu tín hiệu.</li>
<li><b>a neon lamp</b>: một chiếc đèn neon.</li>
<li><b>reacted instantly to changes in voltage</b>: phản ứng ngay tức thì với những thay đổi về điện áp.</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Sơ đồ</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">a [______] reacted to changes in voltage</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">a neon lamp reacted instantly to changes in voltage</td>
<td style="padding: 8px; border: 1px solid #ddd;">Thiết bị phản ứng với điện áp là "neon lamp".</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Đối chiếu cụm từ "reacted to changes in voltage" ở vế sau sơ đồ.
<br>
- <b>Bước 2:</b> Đoạn D ghi rõ "a neon lamp reacted instantly to changes in voltage".
<br>
- <b>Bước 3:</b> Từ cần điền là <b>NEON LAMP</b> (hoặc A NEON LAMP).`,
      vocab: `<b>neon lamp (n)</b>: đèn khí neon phát sáng<br><b>voltage (n)</b>: điện áp<br><b>synchronized (adj)</b>: đồng bộ hóa`,
      colorClass: "ev-10"
    },
    11: {
      translation: `<b>Câu hỏi:</b> Nipkow qua đời mà không có bất kỳ công trình nào của ông được công nhận rộng rãi.<br><br><b>Nói đơn giản:</b> Kiểm tra xem có đúng là Nipkow qua đời trong sự lãng quên mà không bao giờ được vinh danh hay không.`,
      exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph D
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"...late in life, Nipkow became a celebrated scientist in Germany for his pioneering work when mechanical television gained momentum in the 1930s."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>late in life</b>: về sau này / vào giai đoạn cuối đời.</li>
<li><b>became a celebrated scientist in Germany</b>: trở thành một nhà khoa học được vinh danh/ca ngợi lừng lẫy tại Đức.</li>
<li><b>for his pioneering work</b>: cho công trình tiên phong của ông.</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Ý kiến trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thông tin trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối quan hệ đối chiếu</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">died without work being widely recognized</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">became a celebrated scientist in Germany for his work</td>
<td style="padding: 8px; border: 1px solid #ddd; color: #d32f2f; font-weight: bold;">Mâu thuẫn trực tiếp (Không được ai công nhận vs Trở thành nhà khoa học được tôn vinh lừng lẫy).</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Mệnh đề câu hỏi cho rằng Nipkow chết mà không ai công nhận tài năng.
<br>
- <b>Bước 2:</b> Bài đọc khẳng định cuối đời ông đã trở thành "a celebrated scientist" (nhà khoa học được ca ngợi/vinh danh rộng rãi ở Đức).
<br>
- <b>Bước 3:</b> Hai thông tin mâu thuẫn trực tiếp 100% -> Chọn <b>FALSE</b>.
<br><br>
<b>🚫 Bẫy & Lỗi sai thường gặp:</b>
<br>
- Bẫy đọc lướt: Bài đọc có nhắc đến việc "patent expired ... no one was interested" (không ai quan tâm lúc đầu), nhưng đó là giai đoạn đầu (1884). Về sau đến thập niên 1930 ông đã được tôn vinh ("celebrated scientist"). Do đó câu nói "died without recognition" là sai.`,
      vocab: `<b>celebrated (adj)</b>: nổi tiếng, được tôn vinh/ca ngợi<br><b>pioneering (adj)</b>: mang tính tiên phong<br><b>momentum (n)</b>: đà phát triển`,
      colorClass: "ev-11"
    },
    12: {
      translation: `<b>Câu hỏi:</b> Korn và Nipkow thường xuyên gặp nhau để thảo luận về công trình của họ.<br><br><b>Nói đơn giản:</b> Bài đọc có nhắc đến việc hai nhà khoa học người Đức này có từng gặp mặt trực tiếp để trao đổi chuyên môn hay không?`,
      exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph E
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Arthur Korn was another German scientist working in the same field as Baird and Nipkow..."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li>Bài đọc đề cập Arthur Korn làm việc trong cùng lĩnh vực (same field) với Nipkow và Baird.</li>
<li>Hoàn toàn <b>KHÔNG CÓ THÔNG TIN</b> đề cập đến việc Korn và Nipkow có từng gặp nhau (often met) hay thảo luận (discuss) hay không.</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Ý kiến trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thông tin trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Kết luận đối chiếu</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">often met to discuss their work</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">working in the same field</td>
<td style="padding: 8px; border: 1px solid #ddd; color: #e65100; font-weight: bold;">Không có thông tin xác nhận việc gặp gỡ hay thảo luận (Missing).</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Tìm các chi tiết về cuộc gặp mặt giữa Korn và Nipkow.
<br>
- <b>Bước 2:</b> Bài đọc chỉ xác nhận họ nghiên cứu cùng lĩnh vực, tuyệt đối không nhắc tới các cuộc gặp cá nhân.
<br>
- <b>Bước 3:</b> Không thể khẳng định Đúng hay Sai dựa vào bài đọc -> Chọn <b>NOT GIVEN</b>.`,
      vocab: `<b>field (n)</b>: lĩnh vực nghiên cứu<br><b>discuss (v)</b>: thảo luận`,
      colorClass: null
    },
    13: {
      translation: `<b>Câu hỏi:</b> Charles Francis Jenkins đã nổi tiếng từ trước khi ông thử nghiệm với truyền hình.<br><br><b>Nói đơn giản:</b> Kiểm tra xem Jenkins có phải đã gặt hái được sự nổi tiếng sẵn có từ phát minh máy chiếu phim trước khi bước sang làm truyền hình hay không.`,
      exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph F
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Jenkins, who at the time was already very well known for inventing the motion picture projector, first transmitted a silhouette picture... in 1922."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
<li><b>at the time was already very well known</b>: vào thời điểm đó đã rất nổi tiếng (already famous).</li>
<li><b>for inventing the motion picture projector</b>: nhờ phát minh ra máy chiếu phim chuyển động.</li>
<li><b>first transmitted a silhouette picture in 1922</b>: sau đó mới lần đầu truyền hình ảnh bóng đen năm 1922 (experimented with television).</li>
</ul>
<br>
<b>📊 Bảng phân tích từ khóa (Paraphrase Mapping):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
<thead>
<tr style="background-color: #f2f2f2; font-weight: bold;">
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Ý kiến trong Câu hỏi</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thông tin trong Bài đọc (Passage)</th>
<th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối quan hệ đối chiếu</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">already famous</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">already very well known</td>
<td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Đã rất nổi tiếng từ trước.</td>
</tr>
<tr>
<td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">when he experimented with television</td>
<td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">first transmitted a silhouette picture in 1922</td>
<td style="padding: 8px; border: 1px solid #ddd;">Khi ông ấy thử nghiệm phát hình ảnh truyền hình đầu tiên.</td>
</tr>
</tbody>
</table>
<br>
<b>💡 Logic lập luận 3 bước:</b>
<br>
- <b>Bước 1:</b> Đối chiếu thông tin sự nổi tiếng của Jenkins trước mốc thử nghiệm truyền hình 1922.
<br>
- <b>Bước 2:</b> Bài đọc khẳng định khi truyền hình ảnh năm 1922, ông "already very well known" nhờ chiếc máy chiếu phim.
<br>
- <b>Bước 3:</b> Hai thông tin khớp hoàn toàn 100% -> Chọn <b>TRUE</b>.`,
      vocab: `<b>well known (adj)</b>: nổi tiếng (= famous)<br><b>motion picture projector (n)</b>: máy chiếu phim điện ảnh<br><b>silhouette (n)</b>: hình bóng đen`,
      colorClass: "ev-13"
    }
  }
};
