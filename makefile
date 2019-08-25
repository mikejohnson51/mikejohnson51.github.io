filename := $(shell date +%Y_%m_%d)_johnson_cv.pdf

publish:
	git pull
	git add *
	git commit -m "update cv"
	git push

cv:
	R CMD Sweave --pdf cv.Rnw
	R CMD Sweave --pdf cv.Rnw
	cp cv.pdf pdfs/mike_johnson_cv.pdf
	mv cv.pdf ${filename}
	make clean	

update:
	make cv
	make publish
	make clean

clean:
	rm -f *.{log,aux,out,tex}
	rm -R generated_html_files/affiliations_map_files
	rm affiliations.csv