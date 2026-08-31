window.quizData = {
  title: "Reading Practice 16 | Anxiety",
  testName: "Test 6",
  partName: "Passage 1",
  dbPrefix: "ielts_R_T6_P1", 
  passageTitle: "Anxiety",
  startQ: 1,
  endQ: 13,
  totalQuestions: 13,
  
  // Toàn bộ nội dung bài đọc được bọc trong chuỗi HTML
  passageContent: `
    <p class="paragraph">Anxiety is a common experience that can be a useful motivator or even lifesaver in situations that are objectively dangerous. However, when the anxiety is out of proportion to the danger inherent in a given situation, is persistent and is markedly disabling, an anxiety disorder can be developed.</p>
    <p class="paragraph">Anxiety is an emotion that all people experience from time to time, and we do that for very good reasons. It has been built into us; we have inherited it from our evolutionary past, because, in general, anxiety has a survival function. If there is a real danger for a primitive man, then anxiety kicks in in an adaptive way. We freeze, we stop doing whatever we were doing, we devote all of your attention to the danger, and our bodies react with a big release of adrenalin, an increase in blood flow to the muscles, getting us ready to run as fast as we can or fight as fiercely as we can.</p>
    <p class="paragraph"><span id="ev-1" class="ev-box">So some anxiety is adaptive, not only for primitive man, but in modern society as well. It helps us to focus on things when we have deadlines and, if someone is driving too fast when we cross the road, it helps us to jump out of the way quickly. So, there is nothing wrong with anxiety in general, and in fact, we would have difficulties if we did not experience it to some extent</span>, <span id="ev-2" class="ev-box">but of course it can get problematic if the danger is one that is imagined rather than real, or the danger is something that is exaggerated. In those cases, particularly if the perceived danger is out of proportion to the real danger, and it is persistent and disabling, then there is a danger of an anxiety disorder.</span> <span id="ev-3" class="ev-box">About 17 per cent of the population will have an anxiety disorder at some stage in their life.</span></p>
    <p class="paragraph">Anxiety can be caused in a variety of different ways, but any mental disorder is always difficult to diagnose. Scientists are looking at what role genes play in the development of these disorders and are also investigating the effects of environmental factors, such as pollution, physical and psychological stress, and diet. Several parts of the brain are key actors in the production of fear and anxiety. Using brain imaging technology and neurochemical techniques, <span id="ev-4" class="ev-box">scientists have discovered that the amygdala plays a significant role in most anxiety disorders.</span> By learning more about how the brain creates fear and anxiety, scientists may be able to devise better treatments for these disorders.</p>
    <p class="paragraph">Anxiety disorders are a very costly problem in terms of society. Some published figures show that, in the US, it cost $60 billion in one year in terms of lost productivity and in terms of excessive medical investigations that many people with anxiety seek, often thinking they have a physical problem.</p>
    <p class="paragraph">Given all of this, it is rather worrying that anxiety also has a rather low treatment-seeking rate. <span id="ev-5" class="ev-box">Only 10 per cent of people with an anxiety disorder will seek treatment.</span> That seems to be largely because people do not realise there are effective treatments available. <span id="ev-6" class="ev-box">Most people tend to think they have had it for most of their lives, so it is just their personality and they cannot change their personality</span>, and so they feel rather hopeless about it.</p>
    <p class="paragraph">The first psychotherapy treatment that was shown to be effective was exposure therapy, which essentially encourages people <span id="ev-7" class="ev-box">in a graded way</span> to go into their feared situations and stay in them as long as they can and build up their confidence that way. <span id="ev-8" class="ev-box">Often, the therapist will accompany the person to a feared situation</span> to provide support and guidance. Group cognitive behaviour therapy has also been shown to be effective. This is a talking therapy that helps people to understand <span id="ev-9" class="ev-box">the link between negative thoughts and mood</span> and <span id="ev-10" class="ev-box">how altering their behaviour can enable them to manage anxiety and feel in control.</span></p>
    <p class="paragraph">There are, of course, drugs that can help people with anxiety. <span id="ev-11" class="ev-box">Medication will not cure an anxiety disorder, but it can keep it under control while the person receives psychotherapy.</span> The principal medications used for anxiety disorders are antidepressants, anti-anxiety drugs, and beta-blockers to control some of the physical symptoms. With proper treatment, many people with anxiety disorders can lead normal, fulfilling lives.</p>
    <p class="paragraph">There is plenty of evidence that exercise can help with anxiety problems. When stress affects the brain, with its many nerve connections, the rest of the body feels the impact as well. <span id="ev-12" class="ev-box">Exercise and other physical activity produce endorphins, which are chemicals in the brain that act as natural painkillers.</span> In addition to this, getting physically tired can help people fall asleep faster and have deeper and more relaxing sleep. <span id="ev-13" class="ev-box">As many people suffering from anxiety often have problems with insomnia, just the ability to get a good night’s rest can change people’s whole perspectives.</span></p>
    <p class="paragraph">Anxiety is a normal, but highly subjective, human emotion. While normal anxiety serves a beneficial and adaptive purpose, anxiety can also become the cause of tremendous suffering for millions of people. It is important that people recognise excessive anxiety in themselves as soon as possible, as treatment can be very successful and living untreated can be a misery.</p>
  `,

  // Toàn bộ nội dung giao diện câu hỏi (Bên phải)
  questionsHTML: `
    <div class="question-section">
      <div class="instruction">
        You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1.
      </div>
      <div class="instruction">
        Questions 1-3: Complete each sentence with the correct ending (A – E) below.<br>
        Write the correct letter (A – E) in answer boxes 1-3 on your answer sheet.
      </div>
      <div class="headings-list">
        <p><strong>A</strong> be very beneficial.</p>
        <p><strong>B</strong> never have to deal with anxiety</p>
        <p><strong>C</strong> lead to unhelpful levels of anxiety.</p>
        <p><strong>D</strong> experience anxiety at some point.</p>
        <p><strong>E</strong> increase the possibility of physical disease.</p>
      </div>
      <div class="q-row" id="q-row-1">
        <span class="q-num">1.</span>
        <span class="q-content">Experiencing small doses of anxiety can
          <select class="input-select" id="ans-1" onchange="updateNav(1)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option>
          </select>
          <span id="fb-1" class="feedback"></span>
        </span>
      </div>
      <div id="exp-1"></div>
      
      <div class="q-row" id="q-row-2">
        <span class="q-num">2.</span>
        <span class="q-content">Imagining or exaggerating problems can
          <select class="input-select" id="ans-2" onchange="updateNav(2)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option>
          </select>
          <span id="fb-2" class="feedback"></span>
        </span>
      </div>
      <div id="exp-2"></div>

      <div class="q-row" id="q-row-3">
        <span class="q-num">3.</span>
        <span class="q-content">Nearly one in five people can
          <select class="input-select" id="ans-3" onchange="updateNav(3)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option>
          </select>
          <span id="fb-3" class="feedback"></span>
        </span>
      </div>
      <div id="exp-3"></div>
    </div>

    <div class="question-section">
      <div class="instruction">
        Questions 4-6: Answer the questions below.<br>
        Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the text for each answer.
      </div>
      <div class="q-row" id="q-row-4">
        <span class="q-num">4.</span>
        <span class="q-content">Which area of the brain have scientists identified as being significant in anxiety problems?<br>
          <input type="text" class="input-gap" id="ans-4" oninput="updateNav(4)" style="width: 200px; text-align: left; padding-left: 10px; margin-top: 8px;">
          <span id="fb-4" class="feedback"></span>
        </span>
      </div>
      <div id="exp-4"></div>

      <div class="q-row" id="q-row-5">
        <span class="q-num">5.</span>
        <span class="q-content">What proportion of people look for treatment for their anxiety?<br>
          <input type="text" class="input-gap" id="ans-5" oninput="updateNav(5)" style="width: 200px; text-align: left; padding-left: 10px; margin-top: 8px;">
          <span id="fb-5" class="feedback"></span>
        </span>
      </div>
      <div id="exp-5"></div>

      <div class="q-row" id="q-row-6">
        <span class="q-num">6.</span>
        <span class="q-content">What part of themselves do most people blame for their anxiety?<br>
          <input type="text" class="input-gap" id="ans-6" oninput="updateNav(6)" style="width: 200px; text-align: left; padding-left: 10px; margin-top: 8px;">
          <span id="fb-6" class="feedback"></span>
        </span>
      </div>
      <div id="exp-6"></div>
    </div>

    <div class="question-section">
      <div class="instruction">
        Questions 7-13: Complete the table below.<br>
        Write <strong>NO MORE THAN TWO WORDS</strong> from the text for each answer.
      </div>
      <table class="ielts-table">
        <thead>
          <tr><th colspan="2" style="text-align: center; font-size: 17px;">Treatment for Anxiety</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="width: 30%;"><strong>Exposure Therapy</strong></td>
            <td>
              Patients face their fears in a <b>(7)</b> <input type="text" class="input-gap" id="ans-7" oninput="updateNav(7)"> <span id="fb-7" class="feedback"></span> fashion, often with their <b>(8)</b> <input type="text" class="input-gap" id="ans-8" oninput="updateNav(8)"> <span id="fb-8" class="feedback"></span>
            </td>
          </tr>
          <tr>
            <td><strong>Group Cognitive Behaviour Therapy</strong></td>
            <td>
              A talking therapy.<br>
              It explores the links between <b>(9)</b> <input type="text" class="input-gap" id="ans-9" oninput="updateNav(9)"> <span id="fb-9" class="feedback"></span> and feelings.<br>
              It explores how changing people’s <b>(10)</b> <input type="text" class="input-gap" id="ans-10" oninput="updateNav(10)"> <span id="fb-10" class="feedback"></span> can help them regain control.
            </td>
          </tr>
          <tr>
            <td><strong>Drugs</strong></td>
            <td>These cannot cure people, but they can help in conjunction with <b>(11)</b> <input type="text" class="input-gap" id="ans-11" oninput="updateNav(11)"> <span id="fb-11" class="feedback"></span>.</td>
          </tr>
          <tr>
            <td><strong>Exercise</strong></td>
            <td>
              By creating <b>(12)</b> <input type="text" class="input-gap" id="ans-12" oninput="updateNav(12)"> <span id="fb-12" class="feedback"></span>, the body can help dull the pain of anxiety.<br>
              It can allow a good sleep for people who suffer from the <b>(13)</b> <input type="text" class="input-gap" id="ans-13" oninput="updateNav(13)"> <span id="fb-13" class="feedback"></span> caused by their anxiety.
            </td>
          </tr>
        </tbody>
      </table>
      <div id="exp-7"></div><div id="exp-8"></div><div id="exp-9"></div><div id="exp-10"></div><div id="exp-11"></div><div id="exp-12"></div><div id="exp-13"></div>
    </div>
  `,

  // Danh sách đáp án đúng (Hỗ trợ định dạng array cho câu có nhiều đáp án đúng)
  correctAnswers: {
    1: "A",
    2: "C",
    3: "D",
    4: ["AMYGDALA", "THE AMYGDALA"],
    5: ["10%", "10 PER CENT", "10 PERCENT"],
    6: ["PERSONALITY", "THEIR PERSONALITY"],
    7: ["GRADED"],
    8: ["THERAPIST"],
    9: ["NEGATIVE THOUGHTS", "THOUGHTS"],
    10: ["BEHAVIOUR", "BEHAVIOR"],
    11: ["PSYCHOTHERAPY"],
    12: ["ENDORPHINS"],
    13: ["INSOMNIA"]
  },

  // Bản dịch nghĩa, dẫn chứng và phân tích giải thích đáp án
  explanations: {
    1: { translation: "A Rất có lợi / có ích.", keywords: "<span class='exp-keyword-match'>Experiencing small doses of anxiety = some anxiety is adaptive... helps us focus... jump out of the way</span>", exp: "Đoạn 3 đề cập đến việc 'some anxiety is adaptive... helps us to focus on things when we have deadlines... helps us to jump out of the way quickly. So, there is nothing wrong with anxiety in general'. Do đó trải nghiệm một lượng nhỏ lo âu mang lại lợi ích (be very beneficial) [7].", colorClass: "ev-1" },
    2: { translation: "C Dẫn đến mức độ lo âu không có lợi / có hại.", keywords: "<span class='exp-keyword-match'>Imagining or exaggerating = danger is imagined rather than real, or the danger is something that is exaggerated</span>", exp: "Đoạn 3 nêu rõ: 'it can get problematic if the danger is one that is imagined rather than real, or the danger is something that is exaggerated... there is a danger of an anxiety disorder' [7].", colorClass: "ev-2" },
    3: { translation: "D Trải qua cảm giác lo âu vào một thời điểm nào đó.", keywords: "<span class='exp-keyword-match'>Nearly one in five = About 17 per cent (17% ≈ 20%)</span>", exp: "Đoạn 3 khẳng định: 'About 17 per cent of the population will have an anxiety disorder at some stage in their life.' 17% xấp xỉ 1/5 (20%) [7].", colorClass: "ev-3" },
    4: { translation: "Vùng não nào được các nhà khoa học xác định là có vai trò quan trọng trong các vấn đề lo âu?", keywords: "<span class='exp-keyword-match'>amygdala plays a significant role in most anxiety disorders</span>", exp: "Đoạn 4 nêu: 'scientists have discovered that the amygdala plays a significant role in most anxiety disorders.' -> Đáp án: (The) amygdala [8].", colorClass: "ev-4" },
    5: { translation: "Tỷ lệ người tìm kiếm điều trị cho chứng lo âu của họ là bao nhiêu?", keywords: "<span class='exp-keyword-match'>Only 10 per cent of people with an anxiety disorder will seek treatment.</span>", exp: "Đoạn 6 khẳng định: 'Only 10 per cent of people with an anxiety disorder will seek treatment.' -> Đáp án: 10% / 10 per cent [9].", colorClass: "ev-5" },
    6: { translation: "Hầu hết mọi người đổ lỗi cho phần nào của bản thân về chứng lo âu của họ?", keywords: "<span class='exp-keyword-match'>it is just their personality and they cannot change their personality</span>", exp: "Đoạn 6 nêu: 'Most people tend to think... it is just their personality and they cannot change their personality'. Mọi người thường quy cho tính cách của mình. -> Đáp án: (their) personality [9].", colorClass: "ev-6" },
    7: { translation: "Bệnh nhân đối mặt với nỗi sợ theo cách từng bước (graded).", keywords: "<span class='exp-keyword-match'>in a graded way</span>", exp: "Đoạn 7 mô tả liệu pháp phơi nhiễm (exposure therapy) khuyến khích mọi người 'in a graded way to go into their feared situations' -> Đáp án: graded [10].", colorClass: "ev-7" },
    8: { translation: "Thường đi kèm với chuyên gia trị liệu (therapist) của họ.", keywords: "<span class='exp-keyword-match'>Often, the therapist will accompany the person</span>", exp: "Đoạn 7 ghi: 'Often, the therapist will accompany the person to a feared situation...' -> Đáp án: therapist [10].", colorClass: "ev-8" },
    9: { translation: "Khám phá mối liên hệ giữa [suy nghĩ tiêu cực] và cảm xúc/tâm trạng.", keywords: "<span class='exp-keyword-match'>the link between negative thoughts and mood</span>", exp: "Đoạn 7 cho biết CBT giúp mọi người hiểu 'the link between negative thoughts and mood' -> Đáp án: (negative) thoughts [10].", colorClass: "ev-9" },
    10: { translation: "Khám phá việc thay đổi [hành vi] có thể giúp họ lấy lại sự kiểm soát.", keywords: "<span class='exp-keyword-match'>how altering their behaviour can enable them to manage anxiety and feel in control</span>", exp: "Đoạn 7 giải thích thay đổi hành vi (altering their behaviour) giúp quản lý lo âu và cảm thấy kiểm soát tốt hơn -> Đáp án: behaviour [10].", colorClass: "ev-10" },
    11: { translation: "Thuốc không thể chữa khỏi, nhưng giúp ích khi kết hợp với [liệu pháp tâm lý].", keywords: "<span class='exp-keyword-match'>while the person receives psychotherapy</span>", exp: "Đoạn 8 đề cập thuốc giữ lo âu trong tầm kiểm soát 'while the person receives psychotherapy' -> Đáp án: psychotherapy [11].", colorClass: "ev-11" },
    12: { translation: "Bằng cách tạo ra [endorphins], cơ thể giúp làm dịu nỗi đau lo âu.", keywords: "<span class='exp-keyword-match'>Exercise and other physical activity produce endorphins</span>", exp: "Đoạn 9 nêu: 'Exercise and other physical activity produce endorphins, which are chemicals in the brain that act as natural painkillers.' -> Đáp án: endorphins [12].", colorClass: "ev-12" },
    13: { translation: "Giúp mang lại giấc ngủ ngon cho những người bị [mất ngủ] do lo âu.", keywords: "<span class='exp-keyword-match'>suffering from anxiety often have problems with insomnia</span>", exp: "Đoạn 9 ghi: 'As many people suffering from anxiety often have problems with insomnia...' -> Đáp án: insomnia [12].", colorClass: "ev-13" }
  }
};
