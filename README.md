Adhyaaya Digital Services website

Static website. No build step, no installs. Siddipet, Telangana, India.

Files
index.html : all the page content (text, sections, links)
styles.css : colours, layout, glass look, mobile rules
app.js : animations, menu, services page, Diwali poster loop
assets/ : all images (mockups, posters, logo)
Publish with GitHub and Vercel
Unzip this folder.
In your GitHub repository choose Add file > Upload files, drop everything in (replace old files), then Commit changes.
If Vercel is connected to that repository, the live site updates by itself in a few minutes.
Common changes
Studio name: search Digital Services in index.html.
Offer text: search 50% off in index.html (hero chip, Diwali section, call-to-action, Terms).
Phone, email, Instagram: footer and Contact dialog in index.html.
Add a project: in index.html find the site cards inside the Work section, copy one whole card, change the link, image, title and one-line text. Put the new image in assets/.
Diwali posters: edit the dw figures in the diwali section. Replace images in assets/.
Colours: the :root{...} line near the top of styles.css.
Services text and tags: the service cards in index.html; the small tags are listed at the top of app.js.
To check before going live
Threads and Facebook links in the footer are still empty (href="#").
Hero numbers (50+ clients, 100+ projects, 100%) came from the design reference. Confirm they are true.
The "Launch offer" line in Terms says 50% off the first five projects. Confirm the wording.
The sample Diwali posters show other brand names and QR codes. Use only posters you may show.
