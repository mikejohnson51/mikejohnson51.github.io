tables:
	pandoc presentations.docx -o presentations.html
	pandoc awards.docx -o awards.html
	pandoc teaching.docx -o teaching.html

cv:
	pandoc johnson_cv.docx -o johnson_cv.pdf