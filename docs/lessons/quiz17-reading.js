window.quizData = {
  title: "Reading Practice 17 | The Grand Banks",
  testName: "Test 6",
  partName: "Passage 2",
  dbPrefix: "ielts_R_T5_P2", 
  passageTitle: "The Grand Banks",
  startQ: 14,
  endQ: 26,
  totalQuestions: 13,
  
  passageContent: `
            <p class="paragraph">
                <span class="paragraph-label">Paragraph A</span>
                The Grand Banks is a large area of submerged highlands southeast of Newfoundland and east of the Laurentian Channel on the North American continental shelf. Covering 93,200 square kilometres, the Grand Banks are relatively shallow, ranging from 25 to 100 meters in depth. <span id="ev-17" class="ev-box">It is in this area that the cold Labrador Current mixes with the warm waters of the Gulf Stream. The mixing of these waters and the shape of the ocean bottom lifts nutrients to the surface and these conditions created one of the richest fishing grounds in the world.</span> Extensive marine life flourishes in the Grand Banks, whose range extends beyond the Canadian 200-mile exclusive economic zone (EEZ) and into international waters. This has made it an important part of both the Canadian and the high seas fisheries, with fishermen risking their lives in the extremely inhospitable environment consisting of rogue waves, fog, icebergs, sea ice, hurricanes, winter storms and earthquakes.
            </p>

            <p class="paragraph">
                <span class="paragraph-label">Paragraph B</span>
                <span id="ev-21" class="ev-box">While the area’s ‘official’ discovery is credited to John Cabot in 1497, English and Portuguese vessels are known to have first sought out these waters prior to that, based upon reports they received from earlier Viking voyages to Newfoundland.</span> Several navigators, including Basque fishermen, are known to have fished these waters in the fifteenth century. Some texts from that era refer to a land called Bacalao, ‘the land of the codfish’, which is possibly Newfoundland. <span id="ev-22" class="ev-box">However, it was not until John Cabot noted the waters’ abundance of sea life that the existence of these fishing grounds became widely known in Europe.</span> Soon, fishermen and merchants from France, Spain, Portugal and England developed seasonal inshore fisheries producing for European markets. Known as ‘dry’ fishery, cod were split, salted, and dried on shore over the summer before crews returned to Europe. <span id="ev-20" class="ev-box">The French pioneered ‘wet’ or ‘green’ fishery on the Grand Banks proper around 1550, heavily salting the cod on board and immediately returning home.</span>
            </p>

            <p class="paragraph">
                <span class="paragraph-label">Paragraph C</span>
                The Grand Banks were possibly the world’s most important international fishing area in the nineteenth and twentieth centuries. Technological advances in fishing, such as sonar and large factory ships, including the massive factory freezer trawlers introduced in the 1950’s, led to overfishing and a serious decline in the fish stocks. <span id="ev-14" class="ev-box">Based upon the many foreign policy agreements Newfoundland had entered into prior to its admittance into the Canadian Confederation, foreign fleets, some from as far away as Russia, came to the Grand Banks in force, catching unprecedented quantities of fish.</span>
            </p>

            <p class="paragraph">
                <span class="paragraph-label">Paragraph D</span>
                Between 1973 and 1982, the United Nations and its member states negotiated the Third Convention of the Law of the Sea, one component of which was the concept of nations being allowed to declare an EEZ. Many nations worldwide-declared 200-nautical mile EEZ’s, including Canada and the United States. <span id="ev-18" class="ev-box">On the whole, the EEZ was very well received by fishermen in eastern Canada, because it meant they could fish unhindered out to the limit without fear of competing with the foreign fleets.</span> During the late 1970’s and early 1980s, Canada’s domestic offshore fleet grew as fishermen and fish processing companies rushed to take advantage. <span id="ev-15" class="ev-box">It was during this time that it was noticed that the foreign fleets now pushed out to areas of the Grand Banks off Newfoundland outside the Canadian EEZ. By the late 1980’s, dwindling catches of Atlantic cod were being reported throughout Newfoundland and eastern Canada, and the federal government and citizens of coastal regions in the area began to face the reality that the domestic and foreign overfishing had taken its toll.</span> <span id="ev-23" class="ev-box">The Canadian government was finally forced to take drastic action in 1992, when a total moratorium was declared indefinitely for the northern cod.</span>
            </p>

            <p class="paragraph">
                <span class="paragraph-label">Paragraph E</span>
                <span id="ev-24" class="ev-box">Over the last ten years, it has been noted that cod appear to be returning to the Grand Banks in small numbers.</span> The reasons for this fragile recovery are still unknown. Perhaps, the damage done by trawlers is not permanent and the marine fauna and ecosystems can rebuild themselves if given a prolonged period of time without any commercial activity. Either way, the early stage recovery of the Grand Banks is encouraging news, but caution is needed, as, <span id="ev-19" class="ev-box">after nearly twenty years of severe limitations, cod stocks are still only at approximately ten per cent of 1960’s levels.</span> It is hoped that in another ten to twenty years, stocks may be close to a full recovery, although this would require political pressure to maintain strict limitations on commercial fishing. If cod do come back to the Grand Banks in meaningful numbers, it is to be hoped that the Canadians will not make the same mistakes again.
            </p>

            <p class="paragraph"><span class="paragraph-label">Paragraph F</span> Further riches have now been found in the Grand Banks. Petroleum reserves have been discovered and a number of oil fields are under development in the region. <span id="ev-25" class="ev-box">The vast Hibernia oil field was discovered in 1979, and, following several years of aborted start-up attempts, the Hibernia megaproject began construction of the production platform and gravity base structures in the early 1990’s.</span> Production commenced on November 17, 1997, with initial production rates in excess of 50,000 barrels of crude oil per day from a single well. Hibernia has proven to be the most prolific oil well in Canada. <span id="ev-16" class="ev-box">However, earthquake and iceberg activity in the Grand Banks pose a potential ecological disaster that could devastate the fishing grounds that are only now starting to recover.</span>
            </p>
        `,
  questionsHTML: `
    <div class="question-section">
                <div class="instruction">
                    Questions 14-20<br>
                    The text on the previous pages has 6 paragraphs <strong>A – F</strong>.<br>
                    Which paragraph contains the following information?<br>
                    Write your answers in boxes 14-20 on your answer sheet.
                </div>

                <div class="q-row" id="q-row-14">
                    <span class="q-num">14.</span>
                    <span class="q-content">
                        Many countries could legally fish Newfoundland waters because of treaties Newfoundland had made before becoming part of Canada.
                        <select class="input-select" id="ans-14" onchange="updateNav(14)">
                            <option value="">Select...</option>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
                        </select>
                        <span id="fb-14" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-14"></div>

                <div class="q-row" id="q-row-15">
                    <span class="q-num">15.</span>
                    <span class="q-content">
                        The establishment of the EEZ did not stop over-fishing in the Grand Banks.
                        <select class="input-select" id="ans-15" onchange="updateNav(15)">
                            <option value="">Select...</option>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
                        </select>
                        <span id="fb-15" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-15"></div>

                <div class="q-row" id="q-row-16">
                    <span class="q-num">16.</span>
                    <span class="q-content">
                        Natural disasters could cause oil to destroy what is left of the Grand Banks ecosystem.
                        <select class="input-select" id="ans-16" onchange="updateNav(16)">
                            <option value="">Select...</option>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
                        </select>
                        <span id="fb-16" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-16"></div>

                <div class="q-row" id="q-row-17">
                    <span class="q-num">17.</span>
                    <span class="q-content">
                        The original amount of fish in the Grand Banks was due to different temperature waters mixing.
                        <select class="input-select" id="ans-17" onchange="updateNav(17)">
                            <option value="">Select...</option>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
                        </select>
                        <span id="fb-17" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-17"></div>

                <div class="q-row" id="q-row-18">
                    <span class="q-num">18.</span>
                    <span class="q-content">
                        East Canadian fishermen were generally happy with the establishment of the Canadian EEZ.
                        <select class="input-select" id="ans-18" onchange="updateNav(18)">
                            <option value="">Select...</option>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
                        </select>
                        <span id="fb-18" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-18"></div>

                <div class="q-row" id="q-row-19">
                    <span class="q-num">19.</span>
                    <span class="q-content">
                        Grand Banks’ cod stocks are still 90 per cent lower than what they were in the 1960’s.
                        <select class="input-select" id="ans-19" onchange="updateNav(19)">
                            <option value="">Select...</option>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
                        </select>
                        <span id="fb-19" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-19"></div>

                <div class="q-row" id="q-row-20">
                    <span class="q-num">20.</span>
                    <span class="q-content">
                        The French were the first to prepare the cod on board their ships before going back to France.
                        <select class="input-select" id="ans-20" onchange="updateNav(20)">
                            <option value="">Select...</option>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
                        </select>
                        <span id="fb-20" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-20"></div>
            </div>

            <!-- QUESTIONS 21-23 -->
            <div class="question-section">
                <div class="instruction">
                    Questions 21-23<br>
                    Choose the correct letter <strong>A, B, C or D</strong>.<br>
                    Write the correct letter in boxes 21-23 on your answer sheet.
                </div>

                <div class="q-row" id="q-row-21">
                    <span class="q-num">21.</span>
                    <span class="q-content">
                        The first English fishermen to come to the Grand Banks to fish
                        <div class="mcq-options">
                            <label class="mcq-option"><input type="radio" name="mcq-21" value="A" onchange="setMcq(21, 'A')"> A. were told about the fishery by Basque fishermen.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-21" value="B" onchange="setMcq(21, 'B')"> B. were sent word about the fishery from the first American colonists.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-21" value="C" onchange="setMcq(21, 'C')"> C. acted on information from previous Viking expeditions.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-21" value="D" onchange="setMcq(21, 'D')"> D. discovered the fishery themselves while exploring.</label>
                        </div>
                        <input type="hidden" id="ans-21" value="">
                        <span id="fb-21" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-21"></div>

                <div class="q-row" id="q-row-22">
                    <span class="q-num">22.</span>
                    <span class="q-content">
                        John Cabot’s reports of the Grand Banks
                        <div class="mcq-options">
                            <label class="mcq-option"><input type="radio" name="mcq-22" value="A" onchange="setMcq(22, 'A')"> A. led to the establishment of the Canadian EEZ.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-22" value="B" onchange="setMcq(22, 'B')"> B. meant the fishery was well known in Europe.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-22" value="C" onchange="setMcq(22, 'C')"> C. led to fighting between rival fishing fleets.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-22" value="D" onchange="setMcq(22, 'D')"> D. were not immediately publicised, so that English fishermen could benefit.</label>
                        </div>
                        <input type="hidden" id="ans-22" value="">
                        <span id="fb-22" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-22"></div>

                <div class="q-row" id="q-row-23">
                    <span class="q-num">23.</span>
                    <span class="q-content">
                        The establishment of the Canadian EEZ
                        <div class="mcq-options">
                            <label class="mcq-option"><input type="radio" name="mcq-23" value="A" onchange="setMcq(23, 'A')"> A. did not stop foreign fishermen from fishing the Grand Banks.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-23" value="B" onchange="setMcq(23, 'B')"> B. was not ratified by the United Nations.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-23" value="C" onchange="setMcq(23, 'C')"> C. temporarily stopped the over-fishing of cod in the Grand Banks.</label>
                            <label class="mcq-option"><input type="radio" name="mcq-23" value="D" onchange="setMcq(23, 'D')"> D. meant Canadian fishermen were excluded from fishing the Grand Banks.</label>
                        </div>
                        <input type="hidden" id="ans-23" value="">
                        <span id="fb-23" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-23"></div>
            </div>

            <!-- QUESTIONS 24-26 -->
            <div class="question-section">
                <div class="instruction">
                    Questions 24-26<br>
                    Do the following statements agree with the information given in the text?<br>
                    In boxes 24-26 on your answer sheet write:<br>
                    <strong>TRUE</strong> if the statement agrees with the information<br>
                    <strong>FALSE</strong> if the statement contradicts the information<br>
                    <strong>NOT GIVEN</strong> if there is no information on this
                </div>

                <div class="q-row" id="q-row-24">
                    <span class="q-num">24.</span>
                    <span class="q-content">
                        Even now, cod stocks have shown no signs of recovery in the Grand Banks.
                        <select class="input-select" id="ans-24" onchange="updateNav(24)">
                            <option value="">Select...</option>
                            <option value="TRUE">TRUE</option>
                            <option value="FALSE">FALSE</option>
                            <option value="NOT GIVEN">NOT GIVEN</option>
                        </select>
                        <span id="fb-24" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-24"></div>

                <div class="q-row" id="q-row-25">
                    <span class="q-num">25.</span>
                    <span class="q-content">
                        Initial efforts to extract oil from the Grand Banks’ Hibernia oil field were unsuccessful.
                        <select class="input-select" id="ans-25" onchange="updateNav(25)">
                            <option value="">Select...</option>
                            <option value="TRUE">TRUE</option>
                            <option value="FALSE">FALSE</option>
                            <option value="NOT GIVEN">NOT GIVEN</option>
                        </select>
                        <span id="fb-25" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-25"></div>

                <div class="q-row" id="q-row-26">
                    <span class="q-num">26.</span>
                    <span class="q-content">
                        Oil exploration companies have to follow strict safety controls imposed by the Canadian government.
                        <select class="input-select" id="ans-26" onchange="updateNav(26)">
                            <option value="">Select...</option>
                            <option value="TRUE">TRUE</option>
                            <option value="FALSE">FALSE</option>
                            <option value="NOT GIVEN">NOT GIVEN</option>
                        </select>
                        <span id="fb-26" class="feedback"></span>
                    </span>
                </div>
                <div id="exp-26"></div>
            </div>

        `,
  correctAnswers: {
        14: "C",
        15: "D",
        16: "F",
        17: "A",
        18: "D",
        19: "E",
        20: "B",
        21: "C",
        22: "B",
        23: "A",
        24: "FALSE",
        25: "TRUE",
        26: "NOT GIVEN"
    },

    explanations = {
        14: { 
            translation: "Nhiều quốc gia có thể đánh bắt cá hợp pháp tại vùng biển Newfoundland do các hiệp ước mà Newfoundland đã ký kết trước khi gia nhập Canada.", 
            keywords: "<span class='exp-keyword-match'>Many countries = foreign fleets</span><br><span class='exp-keyword-match'>treaties = foreign policy agreements</span>", 
            exp: "Đoạn C đề cập đến: 'Based upon the many foreign policy agreements Newfoundland had entered into prior to its admittance into the Canadian Confederation, foreign fleets... came to the Grand Banks in force...'", 
            colorClass: "ev-14" 
        },
        15: { 
            translation: "Việc thành lập EEZ đã không ngăn chặn được tình trạng đánh bắt quá mức ở Grand Banks.", 
            keywords: "<span class='exp-keyword-match'>did not stop over-fishing = foreign fleets pushed out to areas outside EEZ, overfishing had taken its toll</span>", 
            exp: "Đoạn D giải thích rằng sau khi thành lập EEZ, các hạm đội nước ngoài chuyển ra vùng biển ngoài EEZ của Canada để đánh bắt, dẫn đến lượng cá suy giảm nghiêm trọng và chính phủ buộc phải cấm đánh bắt.", 
            colorClass: "ev-15" 
        },
        16: { 
            translation: "Thiên tai có thể khiến dầu mỏ phá hủy những gì còn lại của hệ sinh thái Grand Banks.", 
            keywords: "<span class='exp-keyword-match'>Natural disasters = earthquake and iceberg activity</span><br><span class='exp-keyword-match'>destroy = potential ecological disaster that could devastate</span>", 
            exp: "Đoạn F cho biết: 'However, earthquake and iceberg activity in the Grand Banks pose a potential ecological disaster that could devastate the fishing grounds...'", 
            colorClass: "ev-16" 
        },
        17: { 
            translation: "Lượng cá ban đầu ở Grand Banks là nhờ sự hòa trộn của các dòng nước có nhiệt độ khác nhau.", 
            keywords: "<span class='exp-keyword-match'>different temperature waters mixing = cold Labrador Current mixes with the warm waters of the Gulf Stream</span>", 
            exp: "Đoạn A nêu rõ: 'It is in this area that the cold Labrador Current mixes with the warm waters of the Gulf Stream... lifts nutrients... created one of the richest fishing grounds...'", 
            colorClass: "ev-17" 
        },
        18: { 
            translation: "Ngư dân miền đông Canada nhìn chung hài lòng với việc thành lập EEZ của Canada.", 
            keywords: "<span class='exp-keyword-match'>East Canadian fishermen = fishermen in eastern Canada</span><br><span class='exp-keyword-match'>happy = very well received</span>", 
            exp: "Đoạn D ghi: 'On the whole, the EEZ was very well received by fishermen in eastern Canada, because it meant they could fish unhindered...'", 
            colorClass: "ev-18" 
        },
        19: { 
            translation: "Trữ lượng cá tuyết ở Grand Banks hiện vẫn thấp hơn 90% so với mức của những năm 1960.", 
            keywords: "<span class='exp-keyword-match'>90 per cent lower = only at approximately ten per cent of 1960's levels</span>", 
            exp: "Đoạn E khẳng định: '...cod stocks are still only at approximately ten per cent of 1960’s levels' (nghĩa là đã giảm 90% so với trước đây).", 
            colorClass: "ev-19" 
        },
        20: { 
            translation: "Người Pháp là những người đầu tiên chế biến cá tuyết ngay trên tàu trước khi trở về Pháp.", 
            keywords: "<span class='exp-keyword-match'>prepare on board = heavily salting the cod on board</span><br><span class='exp-keyword-match'>going back to France = immediately returning home</span>", 
            exp: "Đoạn B cho biết: 'The French pioneered ‘wet’ or ‘green’ fishery on the Grand Banks proper around 1550, heavily salting the cod on board and immediately returning home.'", 
            colorClass: "ev-20" 
        },
        21: { 
            translation: "Những ngư dân Anh đầu tiên đến Grand Banks đánh bắt cá đã hành động dựa trên thông tin từ các chuyến đi trước đó của người Viking.", 
            keywords: "<span class='exp-keyword-match'>English vessels = English fishermen</span><br><span class='exp-keyword-match'>reports from earlier Viking voyages = information from previous Viking expeditions</span>", 
            exp: "Đoạn B ghi: '...English and Portuguese vessels are known to have first sought out these waters prior to that, based upon reports they received from earlier Viking voyages to Newfoundland.' -> Chọn C.", 
            colorClass: "ev-21" 
        },
        22: { 
            translation: "Các báo cáo của John Cabot về Grand Banks đã giúp ngư trường này được biết đến rộng rãi ở Châu Âu.", 
            keywords: "<span class='exp-keyword-match'>John Cabot noted = John Cabot's reports</span><br><span class='exp-keyword-match'>became widely known in Europe = fishery was well known in Europe</span>", 
            exp: "Đoạn B nêu: '...it was not until John Cabot noted the waters’ abundance of sea life that the existence of these fishing grounds became widely known in Europe.' -> Chọn B.", 
            colorClass: "ev-22" 
        },
        23: { 
            translation: "Việc thành lập EEZ của Canada đã không ngăn được các ngư dân nước ngoài đánh bắt ở Grand Banks.", 
            keywords: "<span class='exp-keyword-match'>foreign fleets pushed out to areas outside the Canadian EEZ = did not stop foreign fishermen</span>", 
            exp: "Đoạn D ghi rõ hạm đội nước ngoài dịch chuyển ra ngoài ranh giới EEZ để tiếp tục đánh bắt cá ở Grand Banks -> Chọn A.", 
            colorClass: "ev-23" 
        },
        24: { 
            translation: "Ngay cả hiện tại, trữ lượng cá tuyết vẫn chưa có dấu hiệu phục hồi ở Grand Banks.", 
            keywords: "<span class='exp-keyword-match'>no signs of recovery <-> cod appear to be returning... in small numbers / fragile recovery</span>", 
            exp: "Đoạn E ghi: 'Over the last ten years, it has been noted that cod appear to be returning to the Grand Banks in small numbers' (đã có dấu hiệu phục hồi nhỏ). Do đó câu khẳng định 'không có dấu hiệu' là FALSE.", 
            colorClass: "ev-24" 
        },
        25: { 
            translation: "Những nỗ lực ban đầu nhằm khai thác dầu từ mỏ dầu Hibernia ở Grand Banks đã không thành công.", 
            keywords: "<span class='exp-keyword-match'>unsuccessful = aborted start-up attempts</span>", 
            exp: "Đoạn F nhắc tới: '...following several years of aborted start-up attempts, the Hibernia megaproject began construction...'. 'Aborted start-up attempts' đồng nghĩa với thất bại/không thành công ban đầu. -> TRUE.", 
            colorClass: "ev-25" 
        },
        26: { 
            translation: "Các công ty thăm dò dầu khí phải tuân thủ các quy định kiểm soát an toàn nghiêm ngặt do chính phủ Canada đưa ra.", 
            keywords: "<span class='exp-keyword-match'>strict safety controls imposed by Canadian government</span>", 
            exp: "Đoạn F đề cập đến việc khai thác dầu và các nguy cơ động đất/băng trôi, nhưng không có thông tin nào nhắc tới các quy định an toàn nghiêm ngặt do chính phủ Canada áp đặt đối với các công ty dầu khí -> NOT GIVEN.", 
            colorClass: null 
        }
    };
