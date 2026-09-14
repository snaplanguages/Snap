window.testData = {
  title: "IELTS Reading Full Test 298",
  dbPrefix: "test298",
  totalQuestions: 40,
  passages: [
    {
      id: 1,
      partName: "Passage 1",
      passageTitle: "Sleeping on the job 😴",
      passageContent: `
<p class="paragraph">North Americans are not a people of the siesta. There is a tendency to associate afternoon naps with laziness and non-productivity. Latin Americans and some in European cultures take a different view. In Mexico and Greece, for example, it is customary to close businesses between noon and about 4:00 pm – siesta time. <span id="ev-1" class="ev-box">Recent studies are showing that if you can take a 15 to 30-minute nap while at work in the afternoon, you’ll be more alert, more energetic, happier doing what you do, more productive and therefore more likely to get ahead.</span> Napping on the job is not yet a trend but there is serious talk in academic circles about the merits of ‘power napping’.</p>

<p class="paragraph">By some estimate, the average American collects an annual ‘sleep debt’ of 500 hours – subtracting from an assumed norm of eight hours a night. <span id="ev-6" class="ev-box">Two out of three Americans get less than eight hours of sleep a night during the work week</span>, according to a recent study by the National Sleep Foundation in Washington. Forty percent say they’re so tired that it interferes with their daily activities. Sleep researcher William Anthony, a professor of psychology at Boston University, says fatigue is a significant problem in modern society. <span id="ev-2" class="ev-box">He says sleepiness is a leading cause of auto accidents, second only to drunkenness.</span> All that drowsiness costs an estimated $18 billion annually in lost productivity. ‘We have a simple message,’ says Professor Anthony. <span id="ev-8" class="ev-box">‘People should be allowed to nap at their breaks. The rationale is a productivity one – workers are sleepy, and when they’re sleepy on the job they’re not productive.’</span></p>

<p class="paragraph">Some companies are encouraging sleep at work, <span id="ev-10" class="ev-box">primarily for safety.</span> The Metropolitan Transit Authority, which runs the New York subway system and two suburban railroads, is considering power naps for its train operators and bus drivers. Another railway has started letting its train operators take nap breaks of up to 45 minutes but only when trains are stopped at designated spots off the main lines and dispatchers have been notified. <span id="ev-11" class="ev-box">Some overseas air carriers permit airline pilots, when not on duty, to nap in the cockpit.</span> Airlines in the United States have not accepted this practice yet.</p>

<p class="paragraph"><span id="ev-7" class="ev-box">According to the Encyclopedia of Sleep and Dreaming: ‘There is a biologically-based tendency to fall asleep in mid-afternoon just as there is a tendency to fall asleep at night.</span> Moreover, if sleep the night before is reduced or disturbed for any reason, a nap the subsequent afternoon is not only more likely to occur, <span id="ev-4" class="ev-box">but it can also relieve sleepiness and increase alertness.’</span> The nap zone, documented in numerous studies, is typically between noon and 3:00 pm. Some people power through this natural slowdown with caffeine or sugar but if employers allowed naps, the benefits would be improvements in mood and performance, especially in mid-afternoon. Workers would concentrate better and persevere in tasks longer. Workers commonly sneak naps even without permission but some companies have begun encouraging naps as part of their policies on boosting production. One US distributor is opening a 2,000-square-foot nap facility that provides beds for up to 20 of its 225 workers at a time. A company in Japan sets up tents in business offices, provides eyeshades and ear plugs, and encourages employees to snooze in the middle of the work day. According to Professor Anthony, <span id="ev-9" class="ev-box">‘You’re not going to see napping at traditional types of operations … but in 21st century-style operations, this isn’t going to be a perk. It’s going to have more to do with productivity. Smart employers are understanding that their employees need rest to do their best.’</span></p>

<p class="paragraph">Some suspect that corporate naptime, like other perks, is just a way to keep people at the office longer. On the other hand, growing flexibility in hours, for some workers, is allowing nap times to become more common. With eleven million Americans telecommuting and another forty million winking out of their bonus full- or part-time, office hours are basically as long as you can stay awake. One thing is sure: <span id="ev-12" class="ev-box">longer commutes, more intense, stressful workday and higher production demands are taking a toll.</span> So, with Americans sleeping less and working longer hours, <span id="ev-13" class="ev-box">some employers are warming up to the idea that a little nap in the middle of the day can be good for business.</span></p>
`,
      questionsHTML: `
<div class="question-section">
<div class="instruction">
Question 1<br>
Choose the correct letter, <strong>A, B, C or D</strong>.
</div>
<div class="q-row" id="q-row-1">
<span class="q-num">1.</span>
<span class="q-content">
According to the passage, which of the following statements is supported by recent research?
<div class="mcq-options">
<label class="mcq-option"><input type="radio" name="mcq-1" value="A" onchange="setMcq(1, 'A')"> A. Napping is an indicator of laziness.</label>
<label class="mcq-option"><input type="radio" name="mcq-1" value="B" onchange="setMcq(1, 'B')"> B. Two thirds of Americans sleep too much.</label>
<label class="mcq-option"><input type="radio" name="mcq-1" value="C" onchange="setMcq(1, 'C')"> C. Napping in the workplace is a current trend.</label>
<label class="mcq-option"><input type="radio" name="mcq-1" value="D" onchange="setMcq(1, 'D')"> D. Short naps at work increase productivity.</label>
</div>
<input type="hidden" id="ans-1" value="">
<span id="fb-1" class="feedback"></span>
</span>
</div>
<div id="exp-1"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 2-6<br>
Do the following statements reflect the claims of the writer in Passage?<br>
Write:<br>
<strong>YES</strong> if the statement agrees with the views of the writer<br>
<strong>NO</strong> if the statement contradicts the views of the writer<br>
<strong>NOT GIVEN</strong> if it is impossible to say what the writer thinks about this
</div>
<div class="q-row" id="q-row-2">
<span class="q-num">2.</span>
<span class="q-content">
The number one cause of car accidents is fatigue.
<select class="input-select" id="ans-2" onchange="updateNav(2)">
<option value="">Select...</option>
<option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-2" class="feedback"></span>
</span>
</div>
<div id="exp-2"></div>

<div class="q-row" id="q-row-3">
<span class="q-num">3.</span>
<span class="q-content">
People who nap in the afternoon are lazy.
<select class="input-select" id="ans-3" onchange="updateNav(3)">
<option value="">Select...</option>
<option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-3" class="feedback"></span>
</span>
</div>
<div id="exp-3"></div>

<div class="q-row" id="q-row-4">
<span class="q-num">4.</span>
<span class="q-content">
A nap in the middle of the day can improve your mood.
<select class="input-select" id="ans-4" onchange="updateNav(4)">
<option value="">Select...</option>
<option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-4" class="feedback"></span>
</span>
</div>
<div id="exp-4"></div>

<div class="q-row" id="q-row-5">
<span class="q-num">5.</span>
<span class="q-content">
People who nap regularly live longer.
<select class="input-select" id="ans-5" onchange="updateNav(5)">
<option value="">Select...</option>
<option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-5" class="feedback"></span>
</span>
</div>
<div id="exp-5"></div>

<div class="q-row" id="q-row-6">
<span class="q-num">6.</span>
<span class="q-content">
The majority of Americans sleep at least eight hours a night.
<select class="input-select" id="ans-6" onchange="updateNav(6)">
<option value="">Select...</option>
<option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
</select>
<span id="fb-6" class="feedback"></span>
</span>
</div>
<div id="exp-6"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 7-9<br>
Choose one phrase from the list in the box (A-F) to complete each of the following sentences.
</div>
<div class="headings-list">
<p><strong>A</strong> drink coffee to stay awake during the afternoon</p>
<p><strong>B</strong> have a nap during breaks</p>
<p><strong>C</strong> fall asleep when they are bored</p>
<p><strong>D</strong> sneak naps without permission</p>
<p><strong>E</strong> resist the trend toward napping</p>
<p><strong>F</strong> fall asleep in the afternoon</p>
</div>

<div class="q-row" id="q-row-7">
<span class="q-num">7.</span>
<span class="q-content">
Humans are biologically programmed to
<select class="input-select" id="ans-7" onchange="updateNav(7)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-7" class="feedback"></span>
</span>
</div>
<div id="exp-7"></div>

<div class="q-row" id="q-row-8">
<span class="q-num">8.</span>
<span class="q-content">
Employees of some progressive companies are encouraged to
<select class="input-select" id="ans-8" onchange="updateNav(8)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-8" class="feedback"></span>
</span>
</div>
<div id="exp-8"></div>

<div class="q-row" id="q-row-9">
<span class="q-num">9.</span>
<span class="q-content">
Traditional employers are likely to
<select class="input-select" id="ans-9" onchange="updateNav(9)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-9" class="feedback"></span>
</span>
</div>
<div id="exp-9"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 10-11<br>
Complete the following sentences using <strong>NO MORE THAN THREE WORDS</strong> from the passage.
</div>
<div class="q-row" id="q-row-10">
<span class="q-num">10.</span>
<span class="q-content">
In the transportation industry, napping is a matter of <input type="text" class="input-gap" id="ans-10" oninput="updateNav(10)" style="width: 150px;">
<span id="fb-10" class="feedback"></span>
</span>
</div>
<div id="exp-10"></div>

<div class="q-row" id="q-row-11">
<span class="q-num">11.</span>
<span class="q-content">
On some airlines, pilots can sleep in the cockpit if <input type="text" class="input-gap" id="ans-11" oninput="updateNav(11)" style="width: 180px;">
<span id="fb-11" class="feedback"></span>
</span>
</div>
<div id="exp-11"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 12-13<br>
Choose the correct letter, <strong>A, B, C or D</strong>.
</div>
<div class="q-row" id="q-row-12">
<span class="q-num">12.</span>
<span class="q-content">
According to the writer, in America the workplace is becoming …
<div class="mcq-options">
<label class="mcq-option"><input type="radio" name="mcq-12" value="A" onchange="setMcq(12, 'A')"> A. less flexible.</label>
<label class="mcq-option"><input type="radio" name="mcq-12" value="B" onchange="setMcq(12, 'B')"> B. more exciting.</label>
<label class="mcq-option"><input type="radio" name="mcq-12" value="C" onchange="setMcq(12, 'C')"> C. less demanding.</label>
<label class="mcq-option"><input type="radio" name="mcq-12" value="D" onchange="setMcq(12, 'D')"> D. more stressful.</label>
</div>
<input type="hidden" id="ans-12" value="">
<span id="fb-12" class="feedback"></span>
</span>
</div>
<div id="exp-12"></div>

<div class="q-row" id="q-row-13">
<span class="q-num">13.</span>
<span class="q-content">
According to the writer, what is the main reason why employers support the idea of naps at work?
<div class="mcq-options">
<label class="mcq-option"><input type="radio" name="mcq-13" value="A" onchange="setMcq(13, 'A')"> A. for health reasons</label>
<label class="mcq-option"><input type="radio" name="mcq-13" value="B" onchange="setMcq(13, 'B')"> B. to promote safety</label>
<label class="mcq-option"><input type="radio" name="mcq-13" value="C" onchange="setMcq(13, 'C')"> C. to increase productivity</label>
<label class="mcq-option"><input type="radio" name="mcq-13" value="D" onchange="setMcq(13, 'D')"> D. to encourage creativity</label>
</div>
<input type="hidden" id="ans-13" value="">
<span id="fb-13" class="feedback"></span>
</span>
</div>
<div id="exp-13"></div>
</div>
`
    },
    {
      id: 2,
      partName: "Passage 2",
      passageTitle: "Homeopathy 🌿",
      passageContent: `
<p class="paragraph"><strong>A.</strong> Homeopathy is an alternative system of medicine, founded in the early 19th century by a German physician, Dr. Samuel Hahnemann. Since 1980, homeopathy has experienced a strong resurgence of interest in North and South America as well as in Europe. Surveys indicate that more than a third of French physicians have prescribed homeopathic remedies and almost 50 percent of British physicians have referred patients for homeopathic treatment.</p>

<p class="paragraph"><strong>B.</strong> <span id="ev-14" class="ev-box">Hahnemann’s discovery of the principle of homeopathy was accidental.</span> After taking some quinine, he noticed that he developed malaria-like symptoms. Since malaria patients were treated with quinine, he speculated that possibly malaria is cured by quinine because it causes malaria-like symptoms in healthy people. He decided to explore his theory by testing other substances used as medicine at the time, such as arsenic and belladonna. His tests were conducted by either taking the substances internally himself or by administering them to healthy volunteers and then recording all of the symptoms the volunteers experienced. He continued his experiments on a wide range of natural substances, often toxic. These recorded results created ‘drug pictures’ which formed the basis for the new system of medicine. The next step was to give the tested substances to patients suffering from the same group of symptoms represented by the drug picture recorded. The results were incredible. People were being cured from diseases that had never been cured before. He condensed his theory into a single Latin phrase: similia similibus curentur (let likes be cured by likes). This means that a disease can be cured by a medicine which produces in a healthy person symptoms similar to those experienced by the patient.</p>

<p class="paragraph"><strong>C.</strong> <span id="ev-15" class="ev-box">The process of making remedies is very precise.</span> A homeopathic remedy is normally a single substance. The substances may be made from plant, animal and mineral sources, for example snake venom and cuttlefish ink. To make remedies, the raw material is dissolved in a mixture that contains approximately 90% alcohol and 10% <span id="ev-20" class="ev-box">water</span>. The mixture is left to stand for 2 to 4 weeks, shaken occasionally then strained. The resulting liquid or tincture is then diluted according to very specific measures to a factor of 1:100. For example, to produce a remedy called 1c potency or strength, one drop of the tincture is added to 99 drops of alcohol/water mixture. To produce a 2c potency, one drop of the 1c mixture is added to 99 drops of alcohol/water mixture. Between each mixture the remedy is <span id="ev-21" class="ev-box">shaken</span> vigorously. Hahnemann believed that through this process, the energy of the substance was released. Once the remedy has been diluted beyond a 12c potency, it is unlikely that even a molecule of the original substance remains. Yet, ironically, <span id="ev-22" class="ev-box">the more dilute the remedy, the stronger it is.</span> This makes no sense in light of present-day science but regardless of what science tells us is impossible, in practice, the higher the dilution the stronger and more lasting the effect.</p>

<p class="paragraph"><strong>D.</strong> <span id="ev-16" class="ev-box">It is this use of high dilutions that has given rise to controversy.</span> Many conventional doctors claim that homeopathy functions only as a placebo because the dosage is so small. However, the clinical experience of homeopathy shows that this tiny dose can be effective: it works on unconscious people and infants, and it even works on animals. Controlled clinical studies performed by medical researchers are demonstrating that homeopathy can be an effective method of treatment for many diseases.</p>

<p class="paragraph"><strong>E.</strong> <span id="ev-17" class="ev-box">The most important part of homeopathic treatment lies in the lengthy interview which the homeopath conducts with the patient.</span> The idea behind this one to two hour consultation is to build up a psychological, emotional and physical history of the patient, to discover the underlying patterns of disease. The homeopath then decides which medicine to prescribe based on the closest match between the patient’s symptoms and the known symptoms elicited by the medicine in a healthy body. A single dose is given for the shortest period of time necessary to stimulate the body’s healing power.</p>

<p class="paragraph"><strong>F.</strong> How does the concept of homeopathy differ from that of conventional medicine? Very simply, homeopathy attempts to stimulate the body to <span id="ev-23" class="ev-box">recover itself</span>. Instead of looking upon the symptoms as something wrong which must be set right, the homeopath sees them as signs of the way the body is attempting to help itself. <span id="ev-18" class="ev-box">Another basic difference between conventional medical therapy and homeopathy is in the role of medication.</span> In much of conventional therapy the illness is <span id="ev-24" class="ev-box">controlled through regular use</span> of medical substances. If the medication is withdrawn, the person returns to illness. For example, a person who takes a pill for high blood pressure every day is not undergoing a cure but is only controlling the symptoms. Homeopathy’s aim is the cure: ‘The complete restoration of perfect health,’ as Dr. Hahnemann said.</p>

<p class="paragraph"><strong>G.</strong> Homeopathy has made significant progress in treating diseases which orthodox medicine finds difficult. Best at dealing with inflammatory conditions such as arthritis, skin conditions, migraines and respiratory problems linked to allergies, it has also proved highly successful at treating asthma. <span id="ev-19" class="ev-box">But homeopathy is not an appropriate treatment for degenerative diseases such as emphysema. It cannot treat diseases which destroy tissue... Two of the main advantages of homeotherapy are the low cost of the medications and the rarity of adverse reactions.</span> The medicines are <span id="ev-25" class="ev-box">inexpensive</span>, safe, and easy to use, so people can learn to handle many of the common illnesses for which they currently seek medical help. The resulting savings in costs and the increase in personal independence represent a significant contribution to health care.</p>
`,
      questionsHTML: `
<div class="question-section">
<div class="instruction">
Questions 14-19<br>
The reading passage has 7 sections A-G. Choose the most suitable headings for sections B-G from the list of headings (i-x).<br>
Write the correct number, <strong>i-x</strong>, in boxes 14-19.
</div>
<div class="headings-list">
<p><strong>i</strong> The future of homeopathy</p>
<p><strong>ii</strong> Concerns about homeopathy</p>
<p><strong>iii</strong> Comparison with traditional western medicine</p>
<p><strong>iv</strong> Dr. S. Hahnemann</p>
<p><strong>v</strong> Theoretical and experimental basis</p>
<p><strong>vi</strong> Revival of homeopathy</p>
<p><strong>vii</strong> Preparation of medicines</p>
<p><strong>viii</strong> Debate over effectiveness</p>
<p><strong>ix</strong> Advantages and limitations of homeopathy</p>
<p><strong>x</strong> Aspects of treatment</p>
</div>

<div class="q-row" id="q-row-14">
<span class="q-num">14.</span>
<span class="q-content">
Section B
<select class="input-select" id="ans-14" onchange="updateNav(14)">
<option value="">Select...</option>
<option value="i">i</option><option value="ii">ii</option><option value="iii">iii</option><option value="iv">iv</option><option value="v">v</option><option value="vi">vi</option><option value="vii">vii</option><option value="viii">viii</option><option value="ix">ix</option><option value="x">x</option>
</select>
<span id="fb-14" class="feedback"></span>
</span>
</div>
<div id="exp-14"></div>

<div class="q-row" id="q-row-15">
<span class="q-num">15.</span>
<span class="q-content">
Section C
<select class="input-select" id="ans-15" onchange="updateNav(15)">
<option value="">Select...</option>
<option value="i">i</option><option value="ii">ii</option><option value="iii">iii</option><option value="iv">iv</option><option value="v">v</option><option value="vi">vi</option><option value="vii">vii</option><option value="viii">viii</option><option value="ix">ix</option><option value="x">x</option>
</select>
<span id="fb-15" class="feedback"></span>
</span>
</div>
<div id="exp-15"></div>

<div class="q-row" id="q-row-16">
<span class="q-num">16.</span>
<span class="q-content">
Section D
<select class="input-select" id="ans-16" onchange="updateNav(16)">
<option value="">Select...</option>
<option value="i">i</option><option value="ii">ii</option><option value="iii">iii</option><option value="iv">iv</option><option value="v">v</option><option value="vi">vi</option><option value="vii">vii</option><option value="viii">viii</option><option value="ix">ix</option><option value="x">x</option>
</select>
<span id="fb-16" class="feedback"></span>
</span>
</div>
<div id="exp-16"></div>

<div class="q-row" id="q-row-17">
<span class="q-num">17.</span>
<span class="q-content">
Section E
<select class="input-select" id="ans-17" onchange="updateNav(17)">
<option value="">Select...</option>
<option value="i">i</option><option value="ii">ii</option><option value="iii">iii</option><option value="iv">iv</option><option value="v">v</option><option value="vi">vi</option><option value="vii">vii</option><option value="viii">viii</option><option value="ix">ix</option><option value="x">x</option>
</select>
<span id="fb-17" class="feedback"></span>
</span>
</div>
<div id="exp-17"></div>

<div class="q-row" id="q-row-18">
<span class="q-num">18.</span>
<span class="q-content">
Section F
<select class="input-select" id="ans-18" onchange="updateNav(18)">
<option value="">Select...</option>
<option value="i">i</option><option value="ii">ii</option><option value="iii">iii</option><option value="iv">iv</option><option value="v">v</option><option value="vi">vi</option><option value="vii">vii</option><option value="viii">viii</option><option value="ix">ix</option><option value="x">x</option>
</select>
<span id="fb-18" class="feedback"></span>
</span>
</div>
<div id="exp-18"></div>

<div class="q-row" id="q-row-19">
<span class="q-num">19.</span>
<span class="q-content">
Section G
<select class="input-select" id="ans-19" onchange="updateNav(19)">
<option value="">Select...</option>
<option value="i">i</option><option value="ii">ii</option><option value="iii">iii</option><option value="iv">iv</option><option value="v">v</option><option value="vi">vi</option><option value="vii">vii</option><option value="viii">viii</option><option value="ix">ix</option><option value="x">x</option>
</select>
<span id="fb-19" class="feedback"></span>
</span>
</div>
<div id="exp-19"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 20-22<br>
Complete the description below. Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.
</div>
<div style="background: white; padding: 20px; border-radius: 12px; border: 1.5px dashed var(--border-color); line-height: 2; font-size: 15px;">
<strong>Making a homeopathic remedy</strong><br>
The remedies come from plant, animal and mineral sources.<br>
A single product is mixed with alcohol and (20) <input type="text" class="input-gap" id="ans-20" oninput="updateNav(20)" style="width: 140px;"> then left to stand for 2-4 weeks.<span id="fb-20" class="feedback"></span><br>
This mixture is strained to produce a tincture which can be diluted.<br>
1 drop of this tincture is added to 99 drops of alcohol/water.<br>
The mixture is then (21) <input type="text" class="input-gap" id="ans-21" oninput="updateNav(21)" style="width: 140px;"> vigorously.<span id="fb-21" class="feedback"></span><br>
This produces a remedy with a potency of 1c.<br>
As the remedy becomes more diluted, it gets (22) <input type="text" class="input-gap" id="ans-22" oninput="updateNav(22)" style="width: 140px;">.<span id="fb-22" class="feedback"></span>
</div>
<div id="exp-20"></div>
<div id="exp-21"></div>
<div id="exp-22"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 23-26<br>
Complete the summary. Choose your answers from the box below.
</div>
<div class="headings-list">
<p>Cheaper | Cure | Heal itself | Illness | Treatments</p>
<p>Getting better | Control symptoms | More expensive | Side effects | Stronger</p>
<p>Healthy | Patients</p>
</div>
<div style="background: white; padding: 20px; border-radius: 12px; border: 1.5px dashed var(--border-color); line-height: 2; font-size: 15px;">
Homeopathy differs from conventional medicine in a number of ways. Conventional medicine views symptoms as an indication of something wrong in the body whereas homeopathy sees them as signs that the body is attempting to (23) <input type="text" class="input-gap" id="ans-23" oninput="updateNav(23)" style="width: 140px;">. <span id="fb-23" class="feedback"></span> The uses of medication differ also. Many types of conventional medication (24) <input type="text" class="input-gap" id="ans-24" oninput="updateNav(24)" style="width: 160px;"> <span id="fb-24" class="feedback"></span> but if the medicine is taken away, the illness returns. The intention of homeopathy is to bring about a complete cure. Homeopathic remedies are (25) <input type="text" class="input-gap" id="ans-25" oninput="updateNav(25)" style="width: 140px;"> <span id="fb-25" class="feedback"></span> than conventional medicine and have fewer (26) <input type="text" class="input-gap" id="ans-26" oninput="updateNav(26)" style="width: 140px;">. <span id="fb-26" class="feedback"></span>
</div>
<div id="exp-23"></div>
<div id="exp-24"></div>
<div id="exp-25"></div>
<div id="exp-26"></div>
</div>
`
    },
    {
      id: 3,
      partName: "Passage 3",
      passageTitle: "The hemp revival 🌱",
      passageContent: `
<p class="paragraph">The hemp plant, one of the world’s oldest industrial resources, is back. The rediscovery of this renewable resource is making it the fibre of choice for future textiles, personal care products, building materials, paper and fuel.</p>

<p class="paragraph"><span id="ev-27" class="ev-box">Hemp has been grown for paper, textiles, food and medicine throughout human history.</span> The earliest known woven fabric, made of hemp, dates back to the eighth millennium (8000-7000 BC). The majority of all sails, clothes, tents, rugs, towels, paper, rope, twine, art canvas, paints, varnishes and lighting oil were made from hemp. Hemp seeds were regularly used as a source of food and protein for centuries.</p>

<p class="paragraph">Hemp’s drastic decline in use and importance within a matter of fifty years is widely considered to have been brought about by the timber and petrochemical industries in America. By the mid-1930s, changes in technology were beginning to impact on the hemp industry. <span id="ev-28" class="ev-box">Mechanical stripping equipment and machines to conserve hemp’s high-cellulose pulp became available and affordable.</span> <span id="ev-29" class="ev-box">Timber and paper holding companies stood to lose billions of dollars if hemp were to be grown on a large scale.</span> A resurgence of the hemp industry also threatened the emerging petro-chemical companies which had patented the chemicals for pulp processing. <span id="ev-30" class="ev-box">Newspaper articles began to appear, linking hemp with violent crime.</span> The term used, however, was ‘marijuana’ to distance it from hemp used for industrial purposes. <span id="ev-31" class="ev-box">Because few people realised that marijuana and hemp came from the same plant species, virtually nobody suspected that the Marijuana Prohibition of 1938 would destroy the hemp industry.</span></p>

<p class="paragraph">Supporting the theory that marijuana was banned to destroy the hemp industry were two articles written just before the Marijuana Prohibition, claiming that hemp was on the verge of becoming a super crop. These articles, which appeared in well-respected magazines, praised the usefulness and potential of hemp. ‘Hemp can be used to produce more than 25,000 products’, and ‘hemp will prove, for both farmer and public, the most profitable and desirable crop that can be grown.’ This was the first time that ‘billion dollar’ was used to describe the value of a crop. Less than one year after these articles were written, the Marijuana Prohibition took effect. To what extent a conspiracy was involved is still being debated, but the important thing is that for thousands of years, hemp was used extensively. Then over a short period, it became illegal in many parts of the world.</p>

<p class="paragraph">Now, however, the focus is on the development of hemp as an industrial resource. Initially, a distinction needs to be made between the two types of hemp. ‘Cannabis has evolved into two basic species. Plants grown for fibre and seed are universally called hemp. Cannabis grown for its drug content is commonly called marijuana or drug cannabis. Drug-type cannabis varies widely in THC content from approximately 1-2% in unselected strains to 10% in the best modern varieties.’ (as cited from Watson 1994). <span id="ev-33" class="ev-box">Hemp contains virtually none of the active ingredients of drug-type cannabis (THC).</span> It is not feasible to ‘get high’ on hemp, and <span id="ev-32" class="ev-box">most marijuana produces very low-quality fibre.</span> Hemp should never be confused with marijuana, as their roles cannot be reversed.</p>

<p class="paragraph">It is evident that hemp is an extraordinary fibre. Both stems and seeds can be utilised. Most significantly, hemp can be grown without pesticides and herbicides. The plant also has the ability to suppress weeds and soil-borne diseases. Based on the hemp industries which have been established overseas, there is a large demand for hemp products and hemp is proving to be a highly profitable industry. On an annual basis, one acre of hemp will produce as much fibre as 2 to 3 acres of cotton. The fibre is stronger and softer than cotton, lasts twice as long and <span id="ev-34" class="ev-box">will not mildew.</span> Cotton grows only in <span id="ev-39" class="ev-box">warm climates</span> and requires more water and <span id="ev-37" class="ev-box">more fertiliser</span> than hemp as well as large quantities of pesticide and herbicide.</p>

<p class="paragraph">Hemp can also be used to produce fibreboard that is stronger and lighter than wood, and is <span id="ev-38" class="ev-box">fire retardant.</span> <span id="ev-35" class="ev-box">Unlike paper from wood pulp, hemp paper contains no dioxin, or other toxic residue</span>, and a single acre of hemp can produce the same amount of paper as four acres of trees. The trees take 20 years to harvest and hemp takes a single season. In warm climates <span id="ev-36" class="ev-box">hemp can be harvested two or even three times a year.</span> On an annual basis, one acre of hemp will produce as much paper as 2 to 4 acres of trees. From tissue paper to cardboard, all types of paper products can be produced from hemp. The quality of hemp paper is superior to tree-based paper. Hemp paper will last hundreds of years without degrading and it can be recycled many more times than tree-based paper.</p>

<p class="paragraph">Today, industrialised nations around the world are waking up to the enormous potential of hemp. While some countries, like China and India, have never had laws against hemp cultivation, others are legalising industrial hemp after many years of lumping it together with marijuana. The products and fabrics that are emerging from the international hemp industry are finding strong demand in an eco-aware global community. <span id="ev-40" class="ev-box">Hemp is indeed an agricultural crop for the twenty-first century.</span></p>
`,
      questionsHTML: `
<div class="question-section">
<div class="instruction">
Questions 27-31<br>
Re-order the following letters (A-F) to show the sequence of events according to the passage.<br>
The first one has been done for you as an example.<br>
Example: C (27) …….. (28) ……. (29) ……. (30) ……. (31) ………
</div>
<div class="headings-list">
<p><strong>A</strong> Timber and petro-chemical industries threatened</p>
<p><strong>B</strong> Articles praise hemp as a potential billion dollar crop</p>
<p><strong>C</strong> Widespread cultivation of hemp (Example)</p>
<p><strong>D</strong> Prohibition of marijuana</p>
<p><strong>E</strong> Newspaper articles link hemp to violent crime</p>
<p><strong>F</strong> Development of stripping machines</p>
</div>

<div class="q-row" id="q-row-27">
<span class="q-num">27.</span>
<span class="q-content">
Event 2 (after Example C):
<select class="input-select" id="ans-27" onchange="updateNav(27)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-27" class="feedback"></span>
</span>
</div>
<div id="exp-27"></div>

<div class="q-row" id="q-row-28">
<span class="q-num">28.</span>
<span class="q-content">
Event 3:
<select class="input-select" id="ans-28" onchange="updateNav(28)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-28" class="feedback"></span>
</span>
</div>
<div id="exp-28"></div>

<div class="q-row" id="q-row-29">
<span class="q-num">29.</span>
<span class="q-content">
Event 4:
<select class="input-select" id="ans-29" onchange="updateNav(29)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-29" class="feedback"></span>
</span>
</div>
<div id="exp-29"></div>

<div class="q-row" id="q-row-30">
<span class="q-num">30.</span>
<span class="q-content">
Event 5:
<select class="input-select" id="ans-30" onchange="updateNav(30)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-30" class="feedback"></span>
</span>
</div>
<div id="exp-30"></div>

<div class="q-row" id="q-row-31">
<span class="q-num">31.</span>
<span class="q-content">
Event 6:
<select class="input-select" id="ans-31" onchange="updateNav(31)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="D">D</option><option value="E">E</option><option value="F">F</option>
</select>
<span id="fb-31" class="feedback"></span>
</span>
</div>
<div id="exp-31"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 32-33<br>
Complete the following table using <strong>NO MORE THAN THREE WORDS</strong> from the passage.
</div>
<table class="ielts-table">
<thead>
<tr>
<th>Feature</th>
<th>Hemp</th>
<th>Marijuana</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Fibre</strong></td>
<td>Strong and durable</td>
<td><strong>32.</strong> <input type="text" class="input-gap" id="ans-32" oninput="updateNav(32)" style="width: 140px;"> <span id="fb-32" class="feedback"></span></td>
</tr>
<tr>
<td><strong>Drug content</strong></td>
<td>No active substances named <strong>33.</strong> <input type="text" class="input-gap" id="ans-33" oninput="updateNav(33)" style="width: 120px;"> <span id="fb-33" class="feedback"></span></td>
<td>Up to 10%</td>
</tr>
</tbody>
</table>
<div id="exp-32"></div>
<div id="exp-33"></div>
</div>

<div class="question-section">
<div class="instruction">
Questions 34-39<br>
Classify the following characteristics (34-39) as belonging to:<br>
<strong>A</strong> Hemp<br>
<strong>B</strong> Wood<br>
<strong>C</strong> Cotton
</div>
<div class="q-row" id="q-row-34">
<span class="q-num">34.</span>
<span class="q-content">
mildew-resistant
<select class="input-select" id="ans-34" onchange="updateNav(34)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option>
</select>
<span id="fb-34" class="feedback"></span>
</span>
</div>
<div id="exp-34"></div>

<div class="q-row" id="q-row-35">
<span class="q-num">35.</span>
<span class="q-content">
dioxin is a by-product of processing
<select class="input-select" id="ans-35" onchange="updateNav(35)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option>
</select>
<span id="fb-35" class="feedback"></span>
</span>
</div>
<div id="exp-35"></div>

<div class="q-row" id="q-row-36">
<span class="q-num">36.</span>
<span class="q-content">
can be harvested more than once a year
<select class="input-select" id="ans-36" onchange="updateNav(36)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option>
</select>
<span id="fb-36" class="feedback"></span>
</span>
</div>
<div id="exp-36"></div>

<div class="q-row" id="q-row-37">
<span class="q-num">37.</span>
<span class="q-content">
large amounts of fertiliser needed
<select class="input-select" id="ans-37" onchange="updateNav(37)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option>
</select>
<span id="fb-37" class="feedback"></span>
</span>
</div>
<div id="exp-37"></div>

<div class="q-row" id="q-row-38">
<span class="q-num">38.</span>
<span class="q-content">
fire-retardant properties
<select class="input-select" id="ans-38" onchange="updateNav(38)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option>
</select>
<span id="fb-38" class="feedback"></span>
</span>
</div>
<div id="exp-38"></div>

<div class="q-row" id="q-row-39">
<span class="q-num">39.</span>
<span class="q-content">
requires mild temperature
<select class="input-select" id="ans-39" onchange="updateNav(39)">
<option value="">Select...</option>
<option value="A">A</option><option value="B">B</option><option value="C">C</option>
</select>
<span id="fb-39" class="feedback"></span>
</span>
</div>
<div id="exp-39"></div>
</div>

<div class="question-section">
<div class="instruction">
Question 40<br>
Choose the correct letter, <strong>A, B, C or D</strong>.
</div>
<div class="q-row" id="q-row-40">
<span class="q-num">40.</span>
<span class="q-content">
The main purpose of this article is
<div class="mcq-options">
<label class="mcq-option"><input type="radio" name="mcq-40" value="A" onchange="setMcq(40, 'A')"> A. to criticise government policy on hemp.</label>
<label class="mcq-option"><input type="radio" name="mcq-40" value="B" onchange="setMcq(40, 'B')"> B. to show the economic benefits of hemp.</label>
<label class="mcq-option"><input type="radio" name="mcq-40" value="C" onchange="setMcq(40, 'C')"> C. to compare hemp and marijuana.</label>
<label class="mcq-option"><input type="radio" name="mcq-40" value="D" onchange="setMcq(40, 'D')"> D. to promote research into new uses of hemp.</label>
</div>
<input type="hidden" id="ans-40" value="">
<span id="fb-40" class="feedback"></span>
</span>
</div>
<div id="exp-40"></div>
</div>
`
    }
  ],
  correctAnswers: {
    "1": "D", "2": "NO", "3": "NOT GIVEN", "4": "YES", "5": "NOT GIVEN", "6": "NO", "7": "F", "8": "B", "9": "E", "10": "SAFETY", "11": "NOT ON DUTY", "12": "D", "13": "C",
    "14": "V", "15": "VII", "16": "VIII", "17": "X", "18": "III", "19": "IX", "20": "WATER", "21": "SHAKEN", "22": "STRONGER", "23": "HEAL ITSELF", "24": "CONTROL SYMPTOMS", "25": "CHEAPER", "26": "SIDE EFFECTS",
    "27": "F", "28": "A", "29": "E", "30": "B", "31": "D", "32": "LOW QUALITY", "33": "THC", "34": "A", "35": "B", "36": "A", "37": "C", "38": "A", "39": "C", "40": "B"
  },
  explanations: {
    1: {
      translation: "Theo bài đọc, nghiên cứu gần đây chứng minh rằng việc ngủ trưa ngắn (15-30 phút) tại nơi làm việc giúp tăng năng suất lao động.",
      exp: "Đoạn 1 nêu: <i>'Recent studies are showing that if you can take a 15 to 30-minute nap... you’ll be more productive...'</i> -> Đáp án D.",
      keywords: "15 to 30-minute nap = Short naps; more productive = increase productivity",
      colorClass: "ev-1"
    },
    2: {
      translation: "Nguyên nhân hàng đầu gây tai nạn xe hơi là do mệt mỏi.",
      exp: "Đoạn 2 nêu: <i>'sleepiness is a leading cause of auto accidents, second only to drunkenness.'</i> (Chỉ đứng thứ 2 sau say rượu) -> Đáp án NO.",
      keywords: "second only to drunkenness = đứng thứ 2 sau rượu bia",
      colorClass: "ev-2"
    },
    3: {
      translation: "Những người ngủ trưa là người lười biếng.",
      exp: "Đoạn 1 có nói người Bắc Mỹ có xu hướng liên tưởng ngủ trưa với sự lười biếng, nhưng tác giả không đưa ra kết luận khẳng định quan điểm này là đúng -> Đáp án NOT GIVEN.",
      colorClass: null
    },
    4: {
      translation: "Một giấc ngủ ngắn giữa ngày có thể cải thiện tâm trạng của bạn.",
      exp: "Đoạn 4 viết: <i>'...the benefits would be improvements in mood and performance...'</i> -> Đáp án YES.",
      keywords: "improvements in mood = improve your mood",
      colorClass: "ev-4"
    },
    5: {
      translation: "Những người ngủ trưa thường xuyên sẽ sống thọ hơn.",
      exp: "Bài đọc không đề cập đến mối liên hệ giữa ngủ trưa thường xuyên và tuổi thọ -> Đáp án NOT GIVEN.",
      colorClass: null
    },
    6: {
      translation: "Đa số người Mỹ ngủ ít nhất 8 tiếng một đêm.",
      exp: "Đoạn 2 chỉ ra: <i>'Two out of three Americans get less than eight hours of sleep a night...'</i> (2/3 ngủ ít hơn 8 tiếng) -> Đáp án NO.",
      keywords: "Two out of three = 66.7% (Majority); less than eight hours ≠ at least eight hours",
      colorClass: "ev-6"
    },
    7: {
      translation: "Con người được lập trình sinh học để ngủ vào buổi chiều.",
      exp: "Đoạn 4 nêu: <i>'There is a biologically-based tendency to fall asleep in mid-afternoon...'</i> -> Chọn F.",
      keywords: "biologically-based tendency = biologically programmed; fall asleep in mid-afternoon",
      colorClass: "ev-7"
    },
    8: {
      translation: "Nhân viên ở các công ty tiến bộ được khuyến khích ngủ trưa trong giờ nghỉ.",
      exp: "Đoạn 2 trích lời Prof. Anthony: <i>'People should be allowed to nap at their breaks.'</i> -> Chọn B.",
      keywords: "nap at their breaks = have a nap during breaks",
      colorClass: "ev-8"
    },
    9: {
      translation: "Các chủ doanh nghiệp truyền thống có xu hướng chống lại trào lưu ngủ trưa.",
      exp: "Đoạn 4 viết: <i>'You’re not going to see napping at traditional types of operations...'</i> -> Chọn E.",
      keywords: "not going to see napping = resist the trend toward napping",
      colorClass: "ev-9"
    },
    10: {
      translation: "Trong ngành giao thông vận tải, ngủ trưa là vấn đề về an toàn.",
      exp: "Đoạn 3 chỉ ra: <i>'Some companies are encouraging sleep at work, primarily for safety.'</i> -> Từ cần điền là safety.",
      keywords: "primarily for safety = a matter of safety",
      colorClass: "ev-10"
    },
    11: {
      translation: "Trên một số hãng hàng không, phi công có thể ngủ trong buồng lái nếu không trong giờ làm nhiệm vụ.",
      exp: "Đoạn 3 khẳng định: <i>'...permit airline pilots, when not on duty, to nap in the cockpit.'</i> -> Từ cần điền là not on duty.",
      keywords: "when not on duty = if not on duty",
      colorClass: "ev-11"
    },
    12: {
      translation: "Theo tác giả, môi trường làm việc ở Mỹ đang trở nên căng thẳng hơn.",
      exp: "Đoạn 5 nêu: <i>'...more intense, stressful workday and higher production demands are taking a toll.'</i> -> Đáp án D.",
      keywords: "stressful workday = more stressful",
      colorClass: "ev-12"
    },
    13: {
      translation: "Lý do chính khiến người sử dụng lao động ủng hộ ngủ trưa tại nơi làm việc là tăng năng suất.",
      exp: "Đoạn 5 kết luận: <i>'...a little nap in the middle of the day can be good for business.'</i> và đoạn 4 nhấn mạnh <i>'productivity'</i> -> Đáp án C.",
      keywords: "good for business / productivity = increase productivity",
      colorClass: "ev-13"
    },
    14: {
      translation: "Cơ sở lý thuyết và thử nghiệm của liệu pháp vi lượng đồng căn.",
      exp: "Section B mô tả phát hiện tình cờ của Hahnemann và các thử nghiệm lâm sàng tạo ra 'drug pictures' -> Chọn v.",
      colorClass: "ev-14"
    },
    15: {
      translation: "Quy trình bào chế thuốc.",
      exp: "Section C giải thích chi tiết quy trình pha chế, ngâm, lọc và pha loãng thuốc -> Chọn vii.",
      colorClass: "ev-15"
    },
    16: {
      translation: "Cuộc tranh luận về tính hiệu quả của thuốc.",
      exp: "Section D bàn về sự tranh cãi (controversy) khi dùng liều lượng quá siêu loãng -> Chọn viii.",
      colorClass: "ev-16"
    },
    17: {
      translation: "Các khía cạnh của quá trình điều trị.",
      exp: "Section E tập trung vào buổi phỏng vấn/tư vấn chuyên sâu kéo dài 1-2 giờ -> Chọn x.",
      colorClass: "ev-17"
    },
    18: {
      translation: "So sánh với y học phương Tây truyền thống.",
      exp: "Section F đối chiếu trực tiếp sự khác biệt giữa homeopathy và conventional medicine -> Chọn iii.",
      colorClass: "ev-18"
    },
    19: {
      translation: "Những ưu điểm và hạn chế của liệu pháp vi lượng đồng căn.",
      exp: "Section G nêu rõ ưu điểm (rẻ, an toàn) và hạn chế (không chữa được bệnh thoái hóa/hủy hoại mô) -> Chọn ix.",
      colorClass: "ev-19"
    },
    20: {
      translation: "Hợp chất thô được hòa tan trong hỗn hợp chứa 90% cồn và 10% nước.",
      exp: "Section C ghi: <i>'...contains approximately 90% alcohol and 10% water.'</i> -> Từ điền: water.",
      colorClass: "ev-20"
    },
    21: {
      translation: "Hỗn hợp sau đó được lắc mạnh.",
      exp: "Section C ghi: <i>'Between each mixture the remedy is shaken vigorously.'</i> -> Từ điền: shaken.",
      colorClass: "ev-21"
    },
    22: {
      translation: "Thuốc càng loãng thì tác dụng càng mạnh.",
      exp: "Section C ghi: <i>'...the more dilute the remedy, the stronger it is.'</i> -> Từ điền: stronger.",
      colorClass: "ev-22"
    },
    23: {
      translation: "Cơ thể tự phục hồi / tự chữa lành.",
      exp: "Section F ghi: <i>'homeopathy attempts to stimulate the body to recover itself.'</i> Tương ứng từ hộp: Heal itself.",
      colorClass: "ev-23"
    },
    24: {
      translation: "Kiểm soát các triệu chứng bệnh.",
      exp: "Section F ghi: <i>'...illness is controlled through regular use of medical substances... only controlling the symptoms.'</i> Tương ứng từ hộp: Control symptoms.",
      colorClass: "ev-24"
    },
    25: {
      translation: "Thuốc vi lượng đồng căn rẻ hơn thuốc truyền thống.",
      exp: "Section G ghi: <i>'The medicines are inexpensive...'</i> Tương ứng từ hộp: Cheaper.",
      colorClass: "ev-25"
    },
    26: {
      translation: "Thuốc có ít tác dụng phụ hơn.",
      exp: "Section G ghi: <i>'...rarity of adverse reactions.'</i> Tương ứng từ hộp: Side effects.",
      colorClass: "ev-19"
    },
    27: {
      translation: "Sự phát triển của máy tuốt sợi cơ khí (Sự kiện 2).",
      exp: "Đoạn 3 ghi: <i>'Mechanical stripping equipment... became available...'</i> -> Chọn F.",
      colorClass: "ev-28"
    },
    28: {
      translation: "Các ngành công nghiệp gỗ và hóa dầu bị đe dọa (Sự kiện 3).",
      exp: "Đoạn 3 ghi: <i>'Timber and paper holding companies stood to lose billions...'</i> -> Chọn A.",
      colorClass: "ev-29"
    },
    29: {
      translation: "Báo chí đăng bài liên kết cây cần sa/gai dầu với tội phạm bạo lực (Sự kiện 4).",
      exp: "Đoạn 3 ghi: <i>'Newspaper articles began to appear, linking hemp with violent crime.'</i> -> Chọn E.",
      colorClass: "ev-30"
    },
    30: {
      translation: "Các bài báo ca ngợi gai dầu là cây trồng tỷ đô (Sự kiện 5).",
      exp: "Đoạn 4 ghi: <i>'...two articles written just before the Marijuana Prohibition... billion dollar...'</i> -> Chọn B.",
      colorClass: "ev-30"
    },
    31: {
      translation: "Lệnh cấm cần sa năm 1938 có hiệu lực (Sự kiện 6).",
      exp: "Đoạn 4 ghi: <i>'...the Marijuana Prohibition took effect.'</i> -> Chọn D.",
      colorClass: "ev-31"
    },
    32: {
      translation: "Sợi của cần sa có chất lượng rất thấp.",
      exp: "Đoạn 5 ghi: <i>'...most marijuana produces very low-quality fibre.'</i> -> Từ điền: Low quality.",
      colorClass: "ev-32"
    },
    33: {
      translation: "Hàm lượng chất gây nghiện THC.",
      exp: "Đoạn 5 ghi: <i>'Hemp contains virtually none of the active ingredients of drug-type cannabis (THC).'</i> -> Từ điền: THC.",
      colorClass: "ev-33"
    },
    34: {
      translation: "Khả năng chống nấm mốc là đặc tính của cây gai dầu.",
      exp: "Đoạn 6 ghi: <i>'The fibre is stronger... and will not mildew.'</i> -> Đáp án A (Hemp).",
      colorClass: "ev-34"
    },
    35: {
      translation: "Chất độc Dioxin là phụ phẩm từ xử lý bột gỗ.",
      exp: "Đoạn 7 ghi: <i>'Unlike paper from wood pulp, hemp paper contains no dioxin...'</i> -> Đáp án B (Wood).",
      colorClass: "ev-35"
    },
    36: {
      translation: "Có thể thu hoạch nhiều hơn một lần mỗi năm.",
      exp: "Đoạn 7 ghi: <i>'In warm climates hemp can be harvested two or even three times a year.'</i> -> Đáp án A (Hemp).",
      colorClass: "ev-36"
    },
    37: {
      translation: "Yêu cầu lượng phân bón lớn.",
      exp: "Đoạn 6 ghi: <i>'Cotton... requires more water and more fertiliser than hemp...'</i> -> Đáp án C (Cotton).",
      colorClass: "ev-37"
    },
    38: {
      translation: "Tính năng chống cháy.",
      exp: "Đoạn 7 ghi: <i>'Hemp can also be used to produce fibreboard... is fire retardant.'</i> -> Đáp án A (Hemp).",
      colorClass: "ev-38"
    },
    39: {
      translation: "Yêu cầu khí hậu ấm áp.",
      exp: "Đoạn 6 ghi: <i>'Cotton grows only in warm climates...'</i> -> Đáp án C (Cotton).",
      colorClass: "ev-39"
    },
    40: {
      translation: "Mục đích chính của bài viết là thể hiện những lợi ích kinh tế của cây gai dầu.",
      exp: "Bài viết trình bày tiềm năng ứng dụng, giá trị kinh tế và sự hồi sinh của gai dầu -> Đáp án B.",
      colorClass: "ev-40"
    }
  }
};
