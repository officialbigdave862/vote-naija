# SafeVote Nigeria — Website Package

A responsive, static website for an independent digital voting research prototype.

## Important
- This is a demonstration, not an official INEC website or service.
- It is not authorized for real elections.
- The sample ballot does not save or transmit votes.
- The downloadable proposal is a draft; add your identity/contact details and seek qualified legal and security review before presenting it.
- Do not collect real voter information or use the site to conduct an election.

## Run on your PC
1. Extract the ZIP.
2. Open the `SafeVote-Nigeria` folder in VS Code.
3. Double-click `index.html` to open in a browser.

No Node.js, PHP, database, API key, or build command is needed.

## Host on Render as a Static Site
1. Create a GitHub repository and upload all files/folders in this package (not the ZIP itself).
2. In Render, choose **New + → Static Site** and connect the repository.
3. Build Command: leave blank.
4. Publish Directory: `.` (a single dot).
5. Deploy. Render will provide the public URL.

Hosting provider dashboards can change; follow the current prompts shown in your account.

## Files
- `index.html` — main site
- `css/style.css` — responsive visual styling
- `js/app.js` — menu, sample ballot confirmation and proposal download
- `assets/favicon.svg` — browser icon
- `proposal/SafeVote-Nigeria-INEC-Proposal.txt` — editable proposal draft
