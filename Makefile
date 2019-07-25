all:
	pandoc System-Reference-Manual.asciidoc metadata.yaml -f markdown -o BeagleBone-AI_SRM.pdf --latex-engine=xelatex --metadata link-citations --template=template.latex

debug:
	pandoc System-Reference-Manual.asciidoc metadata.yaml -f markdown -o BeagleBone-AI_SRM.latex --latex-engine=xelatex --metadata link-citations --template=template.latex

test:
	./find-braces.sh '{}' System-Reference-Manual.md
	./find-braces.sh '[]' System-Reference-Manual.md
	./find-braces.sh '()' System-Reference-Manual.md
	./find-braces.sh '<>' System-Reference-Manual.md

