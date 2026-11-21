# Clear Fault Legal — GitHub Pages starter

A responsive, static marketing website for professional incident visualization and litigation exhibit preparation.

## Included
- Responsive homepage and navigation
- Services, sample exhibits, process, standards, contact, privacy, and 404 pages
- Accessible mobile navigation and form validation
- SEO metadata, sitemap, robots.txt, and favicon
- GitHub Pages-compatible static files (no build step)

## Before publishing — required configuration
1. **Confirm the business positioning.** This version prioritizes law firms and litigation professionals. Keep any self-service pro se legal tools on a separate product site or clearly separate sub-brand.
2. **Configure the inquiry email.** In `script.js`, replace `REPLACE-WITH-VERIFIED-CONTACT-EMAIL` with an email address that the business controls. The current form opens the visitor's email application; it does not send data to a server.
3. **Prefer a secure form backend for production.** Connect a reputable form provider or your own backend, add spam protection, test delivery, and update the privacy notice. Do not accept confidential case materials through this public form.
4. **Replace sample concepts.** The exhibit graphics are illustrative concepts only. Add only genuine, authorized, appropriately anonymized work samples. Do not imply that sample concepts are client work or validated forensic findings.
5. **Verify all business claims.** Add real contact details, personnel, qualifications, insurance statements (if applicable), service area, turnaround, pricing approach, and actual quality-control practices. Do not publish unsupported claims or guarantees.
6. **Review legal content.** Have qualified counsel review the privacy notice, service terms, disclaimers, and legal/forensic marketing claims for the jurisdictions in which the business operates.
7. **Update canonical URLs** if the production domain changes.

## Deploy with GitHub Pages
1. Create a GitHub repository (for example `clear-fault-legal-site`).
2. Upload the contents of this folder to the repository root. Do not upload the enclosing folder as a nested directory.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for the Pages deployment to complete. Test the published URL, every navigation link, the contact flow, and mobile layouts.
7. For a custom domain, configure it in Pages and update DNS records at your domain registrar. Enforce HTTPS after DNS verification.

## Local preview
Open `index.html` in a browser, or run a local static server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Important limitations
- This is a front-end website starter, not a hosted service or backend.
- No analytics, CRM, appointment booking, secure upload, or payment processing is configured.
- The mailto form requires a configured address and a visitor email client.
- No claim is made that a demonstrative exhibit is a forensic reconstruction, expert opinion, or admissible evidence.
