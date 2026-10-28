const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('demoForm').addEventListener('submit', event => {
  event.preventDefault();
  const choice = new FormData(event.currentTarget).get('candidate');
  const result = document.getElementById('demoResult');
  if (!choice) return;
  result.hidden = false;
  result.innerHTML = `<strong>Demo confirmation</strong><br>You selected ${escapeHtml(choice)}. This choice exists only in this browser session. It was not saved, transmitted or counted in a real election.`;
  result.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest'});
  event.currentTarget.reset();
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]));
}

document.getElementById('downloadProposal').addEventListener('click', () => {
  const proposal = `SAFEVOTE NIGERIA
DIGITAL VOTING RESEARCH PROPOSAL
Draft for institutional review | Demonstration only

1. EXECUTIVE SUMMARY
SafeVote Nigeria is an independent concept exploring whether carefully governed digital technology could support accessible, transparent and trustworthy electoral participation in Nigeria. This document requests review and guidance; it does not claim endorsement by INEC or propose immediate live deployment.

2. PROBLEM STATEMENT
Electoral participation depends on public trust, accessibility, privacy, security and credible processes for resolving disputes. Any digital voting approach must be assessed against the specific legal, operational and safety requirements of Nigerian elections, including risks to voters who may face intimidation or coercion.

3. PROPOSED CONCEPT
The prototype illustrates a neutral digital interface and a fictional sample ballot. A future research programme could assess identity and eligibility controls, ballot secrecy, accessibility, system integrity, auditability, incident response and support for voters. The current website does not authenticate voters, store ballots, transmit votes or produce election results.

4. PRINCIPLES
• Legal authorization and institutional governance before any live use.
• Ballot secrecy and strict data minimization.
• Independent security testing and remediation.
• Accessible, language-aware design and support for digitally excluded voters.
• Verifiable counting, documented audit procedures and lawful recount/dispute processes.
• Protection against coercion, vote-buying, impersonation, malware, outages and insider threats.
• A tested fallback and clear stop conditions.
• Public transparency without disclosing sensitive security details.

5. RISKS REQUIRING EXPERT REVIEW
Remote voting may expose voters to coercion outside controlled polling environments, compromised devices, credential theft, denial-of-service attacks, identity fraud, privacy breaches and challenges to the integrity or verifiability of results. These risks cannot be resolved by a website interface alone. The model and any proposed use must be assessed by electoral, legal, accessibility, privacy and cybersecurity experts.

6. PROPOSED STAGES
Stage 1 — Discovery and legal review: define the problem, review applicable electoral law and identify institutional requirements.
Stage 2 — Independent design review: threat modelling, privacy impact assessment, accessibility research and stakeholder consultation.
Stage 3 — Closed test environment: use fictional test identities and ballots to assess usability, reliability, security and audit processes.
Stage 4 — Controlled evaluation: proceed only if formally authorized, independently supervised and supported by a fallback plan. No real election use is assumed or authorized by this proposal.

7. EVALUATION MEASURES
Potential measures include task completion and accessibility, system availability, security findings and remediation, audit reproducibility, privacy compliance, incident response performance, voter understanding and stakeholder feedback. Thresholds should be agreed with the relevant authorities before testing.

8. BUDGET AND TIMELINE
A credible budget and schedule should be developed only after scoping with the relevant authority and independent specialists. This draft does not invent a cost, procurement commitment or deployment date.

9. REQUEST TO INEC
We respectfully request that INEC review the concept, advise on relevant legal and technical requirements, and indicate whether a research discussion or controlled non-election demonstration would be appropriate. SafeVote Nigeria is not affiliated with, approved by or endorsed by INEC.

10. CURRENT STATUS AND LIMITATIONS
This is an independent research prototype. It uses fictional candidates and client-side demonstration behaviour only. It does not collect personal information, authenticate voters, record or transmit real votes, secure an election, or provide official results. It must not be used for an actual election.

Prepared by: SafeVote Nigeria project proposer
Contact details: To be supplied by the proposer
Date: ${new Date().toISOString().slice(0,10)}

END OF DRAFT
`;
  const blob = new Blob([proposal], {type: 'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'SafeVote-Nigeria-INEC-Proposal.txt';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  document.getElementById('downloadNote').textContent = 'Proposal download started. Add your name and contact details before submitting.';
});
