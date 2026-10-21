BIRTHDAY-SURPRISE WEBSITE — QUICK GUIDE
========================================

Files
-----
index.html   Main website page
style.css    Design, colours, layout and animations
script.js    Names, hidden birthday message, gallery photos and button effects

HOW TO PREVIEW
--------------
Open index.html in Chrome or Edge. Internet is needed for the sample online photos
and Google Fonts. The website's main layout and animations are in the local files.

CHANGE THE NAMES AND MESSAGE
----------------------------
1. Open script.js in GitHub or a text editor.
2. Near the top, find:
     recipientName: "Vikas",
     senderName: "Arsad",
3. Change the names inside the quotation marks.
4. Edit the secretMessage text to make it personal.
5. Save the file.

CHANGE THE GALLERY PHOTOS
-------------------------
In script.js, find the gallery list. Each photo has image, alt and caption fields.

For your own photos:
1. Create a folder named assets in the same place as index.html.
2. Upload your photos into assets, for example vikas-photo-1.jpg.
3. Change an image URL to "assets/vikas-photo-1.jpg".
4. Change its caption if you want.
Use JPG, PNG or WebP images. Keep filenames simple and avoid spaces.

UPLOAD TO GITHUB PAGES
----------------------
1. Sign in at https://github.com/
2. Click the + icon (top-right) > New repository.
3. Repository name: Birthday-Surprise
4. Choose Public, then click Create repository.
5. Click "uploading an existing file" (or Add file > Upload files).
6. Upload index.html, style.css, script.js and this README file.
   If using your own photos, upload the assets folder and its contents too.
7. Click Commit changes.
8. Open repository Settings > Pages.
9. Under Build and deployment, choose "Deploy from a branch".
10. Choose branch "main" and folder "/ (root)", then Save.
11. Wait a minute or two. The published link will look like:
    https://YOUR-GITHUB-USERNAME.github.io/Birthday-Surprise/
Replace YOUR-GITHUB-USERNAME with your GitHub username.

IMPORTANT
---------
- All three website files must be together in the repository root.
- File names are case-sensitive on GitHub Pages.
- The sample gallery uses online Unsplash image URLs. Internet is needed to load them.
- The website does not collect or send personal information.
- To make it more personal, replace sample photos and edit the message before sharing.
