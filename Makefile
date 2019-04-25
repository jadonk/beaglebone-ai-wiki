all:
	pandoc System-Reference-Manual.md -f markdown -o BeagleBone-AI_SRM.pdf --latex-engine=xelatex

test:
	./find-braces.sh '{}' System-Reference-Manual.md
	./find-braces.sh '[]' System-Reference-Manual.md
	./find-braces.sh '()' System-Reference-Manual.md
	./find-braces.sh '<>' System-Reference-Manual.md

