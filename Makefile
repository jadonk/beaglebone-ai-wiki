all:
	pandoc System-Reference-Manual.md -f markdown -o BeagleBone-AI-SRM.tex --latex-engine=xelatex
	pandoc BeagleBone-AI-SRM.tex -o BeagleBone-AI-SRM.pdf --latex-engine=xelatex

test:
	./find-braces.sh '{}' System-Reference-Manual.md
	./find-braces.sh '[]' System-Reference-Manual.md
	./find-braces.sh '()' System-Reference-Manual.md
	./find-braces.sh '<>' System-Reference-Manual.md

