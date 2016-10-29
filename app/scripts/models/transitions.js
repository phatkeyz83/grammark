'use strict';

var transitions = function() {
    this.machineName = 'transitions';
    this.title = 'Transitions';
    this.passingScore = '10';
    this.passingText = '% or more';
    this.scoringType = 'positive';
    this.ratioType = '% of sentences';
    this.fail = 'The number of transition words in your writing seems low. Transitions help readers see your organization and thought process. <b>Example:</b><ul><li><b>No transition:</b> Martinez says the wealthiest 10% pay 70% of taxes. The governor\'s argument about tax brackets seems...</li><li><b>Has transition:</b> Martinez says the wealthiest 10% pay 70% of taxes. <mark class="green">Given this</mark> statistic, the governor\'s argument about tax brackets seems...</li></ul>';
    this.pass = 'Woot! Your writing seems to have a good proportion of transitions. <h4>Bonus points</h4>Check the highlighted text below to make sure you\'re not overusing the same transition words:<ul><li>Straight-ahead transitions: <i>indeed, another key point, furthermore, in the same way</i></li><li>Detour transitions: <i>in contrast, conversely, in reality, albeit</i></li><li>Summative transitions: <i>as shown above, as a result, hence, given these points</i>.';
    this.markup = 'green';
    this.corrections = {
'above all':'',
'accordingly':'',
'additionally':'',
'after all':'',
'afterward':'',
'albeit':'',
'all in all':'',
'all of a sudden':'',
'all things considered':'',
'also':'',
'although':'',
'altogether':'',
'another key point':'',
'as a matter of fact':'',
'as a result':'',
'as an illustration':'',
'as can be seen':'',
'as has been noted':'',
'as shown above':'',
'as soon as':'',
'as well as':'',
'at the present time':'',
'at the same time':'',
'at this instant':'',
'basically':'',
'be that as it may':'',
'because of':'',
'besides':'',
'by all means':'',
'by and large':'',
'by the same token':'',
'certainly':'',
'chiefly':'',
'comparatively':'',
'consequently':'',
'conversely':'',
'correspondingly':'',
'despite':'',
'different from':'',
'due to':'',
'equally':'',
'equally important':'',
'especially':'',
'even so':'',
'eventually':'',
'expressively':'',
'finally':'',
'firstly':'',
'first thing to remember':'',
'following':'',
'for example':'',
'for fear that':'',
'for instance':'',
'for one thing':'',
'for the most part':'',
'for the purpose of':'',
'for this reason':'',
'formerly':'',
'forthwith':'',
'frequently':'',
'from time to time':'',
'further':'',
'furthermore':'',
'generally speaking':'',
'given that':'',
'given these points':'',
'hence':'',
'henceforth':'',
'however':'',
'identically':'',
'immediately':'',
'important to realize':'',
'in a moment':'',
'in a word':'',
'in addition':'',
'in any event':'',
'in brief':'',
'in case':'',
'in conclusion':'',
'in contrast':'',
'in detail':'',
'in due time':'',
'in either case':'',
'in essence':'',
'in fact':'',
'in general':'',
'in light of':'',
'in like manner':'',
'in order to':'',
'in other words':'',
'in particular':'',
'in reality':'',
'in short':'',
'in spite of':'',
'in summary':'',
'in that case':'',
'in the event that':'',
'in the final analysis':'',
'in the first place':'',
'in the hope that':'',
'in the long run':'',
'in the meantime':'',
'in the same way':'',
'in this case':'',
'in time':'',
'in view of':'',
'inasmuch as':'',
'indeed':'',
' lest ':'',
'likewise':'',
'markedly':'',
'meanwhile':'',
'moreover':'',
'most compelling evidence':'',
'must be remembered':'',
'namely':'',
'nevertheless':'',
'next':'',
'not only':'',
'not to mention':'',
'notably':'',
'notwithstanding':'',
'of course':'',
'on balance':'',
'on the condition that':'',
'on the contrary':'',
'on the other hand':'',
'on the positive / negative side':'',
'on the whole':'',
'ordinarily':'',
'otherwise':'',
'overall':'',
'owing to':'',
'point often overlooked':'',
'prior to':'',
'provided that':'',
'quickly':'',
'rather':'',
'regardless':'',
'secondly':'',
'significantly':'',
'similarly':'',
'since':'',
'so as to':'',
'so long as':'',
'so that':'',
'sooner or later':'',
'specifically':'',
'straightaway':'',
'subsequently':'',
'such as':'',
'surely':'',
'surprisingly':'',
'that is to say':'',
'then again':'',
'therefore':'',
'thereupon':'',
'thirdly':'',
'thus':'',
'to be sure':'',
'to begin with':'',
'to clarify':'',
'to demonstrate':'',
'to emphasize':'',
'to enumerate':'',
'to explain':'',
'to point out':'',
'to put it another way':'',
'to put it differently':'',
'to repeat':'',
'to say nothing of':'',
'to sum up':'',
'to summarize':'',
'to the end that':'',
'together with':'',
'truly':'',
'under those circumstances':'',
'uniquely':'',
'unless':'',
'until now':'',
'up to the present time':'',
'usually':'',
'whenever':'',
'whereas':'',
'with attention to':'',
'with this in mind':'',
'with this intention':'',
'without delay':'',

};
};
