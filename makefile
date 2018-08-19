publish:
	git pull
	git add *
	git commit -m "update cv"
	git push

cv:
	R CMD Sweave --pdf cv.Rnw
	R CMD Sweave --pdf cv.Rnw
	cp cv.pdf pdfs/mike_johnson_cv.pdf
	make clean	

update:
	make cv
	make publish

clean:
	rm -f *.{log,aux,out,tex}
	rm -R generated_html_files/affiliations_map_files
	rm affiliations.csv