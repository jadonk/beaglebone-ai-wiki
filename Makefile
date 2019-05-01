all:
	pandoc System-Reference-Manual.md metadata.yaml -f markdown -o BeagleBone-AI_SRM.pdf --latex-engine=xelatex --metadata link-citations --template=template.latex

test:
	./find-braces.sh '{}' System-Reference-Manual.md
	./find-braces.sh '[]' System-Reference-Manual.md
	./find-braces.sh '()' System-Reference-Manual.md
	./find-braces.sh '<>' System-Reference-Manual.md

